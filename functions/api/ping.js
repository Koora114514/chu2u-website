// 临时自检接口：只回一句话、不做任何联网，用来确认 Cloudflare 函数能不能正常跑。
// 排查完就删掉。
export async function onRequest() {
  return new Response(JSON.stringify({ ok: true, ts: new Date().toISOString() }), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}
