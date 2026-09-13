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

  /* ---------- 直播间开播状态监控（正式网站走 /api/live 由服务器实时代问；本地 file:// 退回读 data/live.js；超 6 分钟未更新视为不可用） ---------- */
  (function(){
    var line = document.getElementById("liveLine");
    if(!line) return;
    var label = document.getElementById("liveLabel");
    function stamp(){                       // 接口刚答上来 = 数据就是此刻的，时间戳用访客本地时间打，省得对时区
      var d = new Date(), p = function(n){ return (n < 10 ? "0" : "") + n; };
      return d.getFullYear() + "-" + p(d.getMonth()+1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
    }
    function apply(L){
      var stale = true;
      if(L && L.checked){
        try{ var tt = new Date(String(L.checked).replace(" ", "T")).getTime(); stale = (Date.now() - tt) > 6 * 60 * 1000; }catch(e){}
      }
      line.classList.remove("is-live", "is-offline");
      if(!L || stale){
        line.classList.add("is-offline");
        label.textContent = "状态暂不可用";
        line.title = "直播间状态还没拿到（稍等会自动重试）";
        return;
      }
      var live = !!L.live;
      line.classList.add(live ? "is-live" : "is-offline");
      label.textContent = live ? ("直播中 · " + (L.title || "")) : "未开播";
      line.title = live ? "啾啾正在直播！点我直达直播间" : "点我直达啾啾的直播间";
    }
    function fromFile(){                    // 退路：读本地 data/live.js（本地双击打开、或接口暂时答不上来时走这条）
      var s = document.createElement("script");
      s.src = "data/live.js?v=" + Date.now();
      s.onload = function(){ if(window.CHU2U_LIVE) apply(window.CHU2U_LIVE); };
      s.onerror = function(){ apply(null); };
      document.head.appendChild(s);
    }
    function refresh(){
      if(location.protocol === "file:" || !window.fetch){ fromFile(); return; }
      fetch("api/live", {cache:"no-store"})
        .then(function(r){ return r.ok ? r.json() : null; })
        .then(function(j){
          if(j && typeof j.live !== "undefined"){ apply({live:j.live, title:j.title, checked:stamp()}); }
          else { fromFile(); }
        })
        .catch(function(){ fromFile(); });
    }
    if(window.CHU2U_LIVE) apply(window.CHU2U_LIVE);
    refresh();
    setInterval(refresh, 60000);
  })();
})();
