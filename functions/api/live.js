// ============================================================
//  直播间开播状态 —— Cloudflare Pages 函数（页面访问 /api/live）
//
//  为什么要有它：浏览器的网页不能直接问 B 站要数据（跨域限制 + 本站 CSP 只允许
//  访问自己），而「每 2 分钟把状态写成文件推到 GitHub」又会把 Cloudflare
//  每月 500 次的构建额度用光（一天就 720 次）。
//
//  所以改成：网页问本站的 /api/live → 由 Cloudflare 的服务器代问 B 站 →
//  把结果原样转发给网页。状态永远实时，零提交、零构建。
//
//  返回结构和本地 data/live.js 里的 window.CHU2U_LIVE 保持一致：
//    { live, title, online, area }   （checked 由网页自己打，省得对时区）
//  查询失败时返回 502 + { error }，网页会退回读本地 data/live.js。
// ============================================================

const ROOM_ID = "1727074031";
const API = "https://api.live.bilibili.com/room/v1/Room/get_info?room_id=" + ROOM_ID;

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export async function onRequest() {
  try {
    const r = await fetch(API, {
      headers: {
        // 不带 UA / Referer 会被 B 站的风控挡掉
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Referer": "https://live.bilibili.com/" + ROOM_ID,
      },
      // 边缘缓存 60 秒：同一时刻多个访客打开网站，只回源问 B 站一次
      cf: { cacheTtl: 60, cacheEverything: true },
    });
    if (!r.ok) return json({ error: "upstream " + r.status }, 502);

    const j = await r.json();
    const d = j && j.data;
    if (!j || j.code !== 0 || !d) return json({ error: "bad payload" }, 502);

    const live = d.live_status === 1;      // 与本地脚本同口径：只有 1 算「直播中」，2（轮播）不算
    return json({
      live: live,
      title: d.title || "",
      online: live ? (d.online || 0) : 0,
      area: d.parent_area_name || "",
    });
  } catch (e) {
    return json({ error: String((e && e.message) || e) }, 502);
  }
}
