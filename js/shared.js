/* ============================================================
   CHU2U 站点共享脚本（二级页通用）
   通用 toast / 深浅色切换 / 返回顶部飞船 / 顶栏滚动态 /
   滚动渐显 reveal / 直播间开播状态监控
   注意：index.html 内联脚本也有一份同样逻辑，改动时保持两边一致
   ============================================================ */
(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 通用 toast（页面脚本可全局调用 window.toast） ---------- */
  function toast(msg){
    var t = document.getElementById("toast");
    if(!t){ t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._tm);
    t._tm = setTimeout(function(){ t.classList.remove("show"); }, 2200);
  }
  window.toast = toast;

  /* ---------- 深浅色模式切换（左下角按钮，记忆选择） ---------- */
  var themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    var ttSun = themeBtn.querySelector(".tt-sun");
    var ttMoon = themeBtn.querySelector(".tt-moon");
    function applyTheme(){
      var dark = document.body.classList.contains("dark");
      ttSun.style.display = dark ? "none" : "";
      ttMoon.style.display = dark ? "" : "none";
      themeBtn.setAttribute("aria-label", dark ? "切换到浅色模式" : "切换到深色模式");
    }
    try{
      if(localStorage.getItem("chu2u-theme") === "dark") document.body.classList.add("dark");
    }catch(e){}
    applyTheme();
    themeBtn.addEventListener("click", function(){
      document.body.classList.toggle("dark");
      try{
        localStorage.setItem("chu2u-theme", document.body.classList.contains("dark") ? "dark" : "light");
      }catch(e){}
      applyTheme();
    });
  }

  /* ---------- 返回顶部飞船按钮：垂直飞出 + 像素气泡生成/破灭 ---------- */
  var toTopBtn = document.getElementById("toTop");
  if(toTopBtn){
    toTopBtn.addEventListener("click", function(){
      if(toTopBtn.classList.contains("fly")) return;
      toTopBtn.classList.add("fly");
      for(var bi = 0; bi < 5; bi++){
        (function(delay){
          setTimeout(function(){
            var b = document.createElement("span");
            b.className = "tt-bubble";
            b.style.left = (15 + Math.random()*70) + "%";
            b.style.animationDuration = (0.6 + Math.random()*0.4) + "s";
            toTopBtn.appendChild(b);
            setTimeout(function(){ if(b.parentNode) b.parentNode.removeChild(b); }, 1200);
          }, delay);
        })(bi * 90);
      }
      window.scrollTo({top: 0, behavior: reduce ? "auto" : "smooth"});
      setTimeout(function(){ toTopBtn.classList.remove("fly"); }, 900);
    });
  }

  /* ---------- 滚动进度条 + 顶栏滚动态 ---------- */
  (function(){
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var topbar = document.getElementById("topbar");
    var ticking = false;
    function onScroll(){
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(function(){
        ticking = false;
        var y = window.pageYOffset || document.documentElement.scrollTop || 0;
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
        if(topbar) topbar.classList.toggle("scrolled", y > 8);
      });
    }
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("resize", onScroll);
    onScroll();
  })();

  /* ---------- 滚动渐显 reveal（交错延迟） ---------- */
  (function(){
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    els.forEach(function(el){
      var sibs = Array.prototype.filter.call(el.parentNode.children, function(c){ return c.classList.contains("reveal"); });
      var i = sibs.indexOf(el);
      /* 交错延迟只在进场生效（CSS: .reveal.in{transition-delay:var(--rd)}），退场时延迟归零 */
      if(i > 0) el.style.setProperty("--rd", Math.min(i * 80, 420) + "ms");
    });
    if(!("IntersectionObserver" in window)){ els.forEach(function(e){ e.classList.add("in"); }); return; }
    /* 进出双向：进视口滑入、**完全离开视口才滑出**（ratio 到 0 才算离开，
       这样在边界来回滚动不会疯狂抖）——所以这里不能再 unobserve */
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add("in"); }
        else if(en.intersectionRatio === 0){ en.target.classList.remove("in"); }
      });
    }, {threshold:[0, .12], rootMargin:"0px 0px -40px 0px"});
    els.forEach(function(e){ io.observe(e); });
  })();


  /* ---------- 通用播放器进度条（B 站外链播放器专用，2026-10-06） ----------
     跨域读不到播放器真实进度 → 本地时钟按「已知时长」估算；
     点/拖进度条 = 让调用方用新的 t=<秒> 重载 iframe（真能跳，代价是重新缓冲几秒）。
     页面上先放好这几个元素：
       <div class="pls-prog" id="xxProg"><span class="pls-prog-fill" id="xxProgFill"></span></div>
       <span><span id="xxProgNow">0:00</span> / <span id="xxProgTotal">—</span></span>
     cfg = { prog, fill, now, total,    // 元素 id
             seek(sec) }                // 跳到第几秒（页面自己拼新的 iframe 地址）
     返回 { run(sec), stop(), elapsed(), paint() }。 */
  window.chu2uProg = function(cfg){
    var bar = document.getElementById(cfg.prog);
    var fill = document.getElementById(cfg.fill);
    var nowEl = document.getElementById(cfg.now);
    var totEl = document.getElementById(cfg.total);
    if(!bar) return null;
    var startAt = 0, total = 0, timer = null;
    function fmt(sec){
      sec = Math.max(0, Math.round(sec || 0));
      return Math.floor(sec / 60) + ":" + ((sec % 60) < 10 ? "0" : "") + (sec % 60);
    }
    function elapsed(){ return total ? Math.max(0, Math.min(total, (Date.now() - startAt) / 1000)) : 0; }
    function paint(f){
      var frac = (typeof f === "number") ? f : (total ? elapsed() / total : 0);
      if(fill) fill.style.width = (frac * 100) + "%";   /* 无极：连续宽度 */
      if(nowEl) nowEl.textContent = fmt(frac * (total || 0));
      if(totEl) totEl.textContent = total ? ("约 " + fmt(total)) : "—";
      bar.setAttribute("aria-valuenow", String(Math.round(frac * 100)));
    }
    function stop(){ if(timer){ clearInterval(timer); timer = null; } total = 0; paint(); }
    /* run(总秒数, 从第几秒开始) —— 跳转后要把起点挪到跳过去的位置 */
    function run(sec, offset){
      if(timer){ clearInterval(timer); timer = null; }
      total = Math.max(0, sec || 0);
      startAt = Date.now() - Math.max(0, offset || 0) * 1000;
      paint();
      if(!total) return;
      timer = setInterval(paint, 500);
    }
    function frac(ev){
      var r = bar.getBoundingClientRect();
      return Math.max(0, Math.min(1, (ev.clientX - r.left) / Math.max(1, r.width)));
    }
    var dragging = false;
    bar.addEventListener("pointerdown", function(ev){
      if(!total) return;
      ev.preventDefault();
      dragging = true;
      bar.classList.add("dragging");
      try{ bar.setPointerCapture(ev.pointerId); }catch(e){}
      paint(frac(ev));
    });
    bar.addEventListener("pointermove", function(ev){ if(dragging) paint(frac(ev)); });
    bar.addEventListener("pointerup", function(ev){
      if(!dragging) return;
      dragging = false;
      bar.classList.remove("dragging");
      var f = Math.min(0.98, frac(ev));      /* 夹 98%：越界的话 B 站会当成无效时间点、从 0 重播 */
      if(cfg.seek) cfg.seek(Math.round(f * total));
    });
    bar.addEventListener("pointercancel", function(){ dragging = false; bar.classList.remove("dragging"); paint(); });
    bar.addEventListener("keydown", function(ev){
      if(!total) return;
      var d = ev.key === "ArrowRight" ? 0.05 : (ev.key === "ArrowLeft" ? -0.05 : 0);
      if(!d) return;
      ev.preventDefault();
      if(cfg.seek) cfg.seek(Math.round(Math.max(0, Math.min(0.98, elapsed() / total + d)) * total));
    });
    return {run: run, stop: stop, elapsed: elapsed, paint: paint};
  };

  /* ---------- 直播间开播状态监控（读 data/live.js：本机计划任务每 2 分钟刷新，状态变化时由「自动上线」推送到线上。
       数据新鲜就照实显示；超过 12 小时没更新则一律显示「未开播」——宁可保守，也不谎报直播中） ---------- */
  (function(){
    var line = document.getElementById("liveLine");
    if(!line) return;
    var label = document.getElementById("liveLabel");
    function apply(L){
      var fresh = false;
      if(L && L.checked){
        try{ var tt = new Date(String(L.checked).replace(" ", "T")).getTime(); fresh = (Date.now() - tt) <= 12 * 60 * 60 * 1000; }catch(e){}
      }
      var live = !!(L && L.live && fresh);   // 数据过期时最多只敢说「未开播」，绝不说还在直播
      line.classList.remove("is-live", "is-offline");
      line.classList.add(live ? "is-live" : "is-offline");
      label.textContent = live ? ("直播中 · " + (L.title || "")) : "未开播";
      line.title = live ? "啾啾正在直播！点我直达直播间" : "点我直达啾啾的直播间";
    }
    function inject(){
      var s = document.createElement("script");
      s.src = "data/live.js?v=" + Date.now();
      s.onload = function(){ if(window.CHU2U_LIVE) apply(window.CHU2U_LIVE); };
      s.onerror = function(){ apply(null); };
      document.head.appendChild(s);
    }
    if(window.CHU2U_LIVE) apply(window.CHU2U_LIVE);
    inject();
    setInterval(inject, 60000);
  })();
})();
