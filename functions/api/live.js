// 【诊断版 v2 · 排查完换回正式版】
// v1 结果：B 站返回 412（风控拦截页）—— 说明数据中心 IP 被挡。
// v2 试：补上 buvid3 cookie + 更完整的浏览器请求头，看能不能绕过。
function uuid() {
  const h = "0123456789ABCDEF";
  let s = "";
  for (let i = 0; i < 32; i++) s += h[Math.floor(Math.random() * 16)];
  return s;
}

export async function onRequest() {
  const API = "https://api.live.bilibili.com/room/v1/Room/get_info?room_id=1727074031";
  const buvid = uuid().slice(0, 8) + "-" + uuid().slice(0, 4) + "-" + uuid().slice(0, 4) + "-" +
                uuid().slice(0, 4) + "-" + uuid().slice(0, 12) + "infoc";
  const out = { step: "start", buvid: buvid };
  try {
    out.step = "fetching";
    const r = await fetch(API, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Referer": "https://live.bilibili.com/1727074031",
        "Origin": "https://live.bilibili.com",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cookie": "buvid3=" + buvid + "; b_nut=1700000000;",
      },
    });
    out.step = "got-response";
    out.status = r.status;
    out.ok = r.ok;
    const txt = await r.text();
    out.bodyHead = txt.slice(0, 200);
  } catch (e) {
    out.step = "error";
    out.errName = String(e && e.name);
    out.errMsg = String((e && e.message) || e);
  }
  return new Response(JSON.stringify(out, null, 1), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}
