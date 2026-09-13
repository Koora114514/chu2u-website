// 【诊断版 · 排查完换回正式版】
// 目的：把「Cloudflare 服务器去问 B 站」这一步到底发生了什么，原样吐出来。
export async function onRequest() {
  const API = "https://api.live.bilibili.com/room/v1/Room/get_info?room_id=1727074031";
  const out = { step: "start" };
  try {
    out.step = "fetching";
    const r = await fetch(API, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Referer": "https://live.bilibili.com/1727074031",
      },
    });
    out.step = "got-response";
    out.status = r.status;
    out.ok = r.ok;
    const txt = await r.text();
    out.bodyHead = txt.slice(0, 300);
  } catch (e) {
    out.step = "error";
    out.errName = String(e && e.name);
    out.errMsg = String((e && e.message) || e);
  }
  return new Response(JSON.stringify(out, null, 1), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}
