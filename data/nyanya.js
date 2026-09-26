/* ============================================================
   羽啾chu2u · 猫猫宇宙论特辑！数据（每周一自动更新维护）
   ============================================================
   条目结构（新条目在前，数组开头 = 最新）：
   { kind:"video|art|meme", uid:"发布者BID", link:"B站视频/动态链接",
     cover:"本地预览图（images/nyan/，统一 4:3 672x504）",
     t:"标题", d:"发布者昵称", date:"发布日期（XXXX年X月X日）" }
   kind: video=二创视频（歌切/手书/二创游戏等创作类），art=绘画二创，
         meme=表情包（以 GIF 图帖为主）

   规则：
   - 本栏目只从 B 站话题「猫猫宇宙论」(topic_id=1345548) 抓取，
     展示话题里的优秀二创：绘画、二创视频、表情包。
   - 不收录：直播切片/回放（标题含 切片/直播/联动/回放 或判定为直播剪辑）、
     纯剪辑类视频（2026-09-20 用户定：把直播片段重新剪一遍的「剪辑内容」不算粉丝二创，
     如 误解向/合集/纯享/互动 等，标题含这类词的收前要仔细甄别）、
     风景照/纯壁纸、AI 绘图（标题/简介含 AI 字样）、羽啾本人（mid 2138961136）
     发的动态；《人是猫》这类创意二创归入视频类。
   - 手工绘画默认入选（2026-09-20 用户定）：只要是手工绘制的二创图就收，
     不再按完成度/质量筛「宁缺毋滥」——排除项只有 AI 图与照片。
   - pin:true = 置顶加精（页面卡片左上角显示 👑，加精内容排最前）。
   - kind 除了 video/art/meme，还可为 fanpower（「粉丝发电」tag，如 Mod、
     站宣贴纸这类粉丝发电内容；fanpower 只在「全部」筛选里出现）。
   - 屏蔽名单（两位 B 站用户）与观测记录同一份，加密存在 index.html 里，
     页面运行时解密后自动过滤；这里的条目 uid 不要收录那两位用户。
   - 本人账号的 uid 字段一律写密文 "aWJqYm1vamI="（不写明文），
     与观测记录同一份加密。
   - 收录视频类前尽量抽 2~3 帧目检，确认不是直播录播素材。
   - 只收质量高的作品（人工把关「优秀」）；新条目前插到数组开头，
     总条数上限 48，超出删掉最旧条目。
   - 预览图本地缓存在 chu2u/site/images/nyan/，统一 4:3（672x504）：
     按 4:3 中心裁切后 Pillow LANCZOS 缩放，图片不拉伸变形。
   - 更新本文件后，把 index.html 里 data/nyanya.js 那个 <script src> 的
     ?v= 改成「今天+时分」（YYYYMMDDHHMM，如 202609202013）——缓存版本号，
     不改浏览器会继续显示旧数据；同一天多次更新必须换新值，只用当天日期
     会撞上浏览器/Cloudflare 旧缓存（2026-09-20 实测踩坑）。 */
window.CHU2U_CAT_UPDATED = "2026-09-26";
window.CHU2U_CAT = [
  {kind:"fanpower", pin:true, uid:"2034200085", link:"https://www.bilibili.com/video/BV1Pmeq6vEYu", cover:"images/nyan/v7.jpg",
   t:"【羽啾chu2u】杀戮尖塔2 角色Mod测试版发布！", d:"老美のNASA", date:"2026年9月20日"},
  {kind:"fanpower", pin:true, uid:"aWJqYm1vamI=", link:"https://www.bilibili.com/opus/1249212218989346823", cover:"images/nyan/m5.jpg",
   t:"浏览器搜索chu2u.com 均可进站访问", d:"_可乐乐乐乐乐", date:"2026年9月18日"},
  {kind:"video", pin:true, uid:"3546957431704396", link:"https://www.bilibili.com/video/BV1myb76TEMx/", cover:"images/nyan/v1.jpg",
   t:"【羽啾chu2u】人是猫？！", d:"yuyu_925", date:"2026年9月6日"},
  {kind:"art", pin:true, uid:"2420982", link:"https://www.bilibili.com/opus/1239943048228503559", cover:"images/nyan/a25.jpg",
   t:"换了袜子", d:"鱼豆腐盖飯", date:"2026年8月24日"},
  {kind:"art", uid:"137700370", link:"https://www.bilibili.com/opus/1252280049735827506", cover:"images/nyan/a26.jpg",
   t:"羽啾chu2u", d:"黄鱼鼠条", date:"2026年9月26日"},
  {kind:"art", uid:"33747490", link:"https://www.bilibili.com/opus/1251989898898964483", cover:"images/nyan/a27.jpg",
   t:"祝大家中秋快乐呀！", d:"海圻圻圻", date:"2026年9月25日"},
  {kind:"art", uid:"23237220", link:"https://www.bilibili.com/opus/1251988120759435268", cover:"images/nyan/a28.jpg",
   t:"宇宙猫月饼！应该是什么口味的？", d:"灲秘书", date:"2026年9月25日"},
  {kind:"art", uid:"393767790", link:"https://www.bilibili.com/opus/1250566185955622917", cover:"images/nyan/a29.jpg",
   t:"（图帖·无文字，上传前请改标题）", d:"瞬噬魔王点肠粉LZX", date:"2026年9月22日"},
  {kind:"art", uid:"91226097", link:"https://www.bilibili.com/opus/1248987824115417140", cover:"images/nyan/a12.jpg",
   t:"分享图片", d:"自由高松灯", date:"2026年9月17日"},
  {kind:"art", uid:"41664105", link:"https://www.bilibili.com/opus/1248499310253834249", cover:"images/nyan/a11.jpg",
   t:"画师@狸SX 萌萌主播@羽啾chu2u", d:"-nolo-", date:"2026年9月16日"},
  {kind:"art", uid:"3494373633297224", link:"https://www.bilibili.com/opus/1248327936773193753", cover:"images/nyan/a8.jpg",
   t:"呃，顶萌来了，你们聊", d:"残星下的悼亡曲", date:"2026年9月15日"},
  {kind:"art", uid:"3747549391359135", link:"https://www.bilibili.com/opus/1247900269694418953", cover:"images/nyan/a30.jpg",
   t:"课间", d:"核对插座电量", date:"2026年9月14日"},
  {kind:"art", uid:"33747490", link:"https://www.bilibili.com/opus/1247591706363166721", cover:"images/nyan/a10.jpg",
   t:"好可爱一羽啾", d:"海圻圻圻", date:"2026年9月14日"},
  {kind:"video", uid:"3747549391359135", link:"https://www.bilibili.com/video/BV189Y86WEge/", cover:"images/nyan/v3.jpg",
   t:"羽啾只是在伸出手指", d:"核对插座电量", date:"2026年9月10日"},
  {kind:"art", uid:"33747490", link:"https://www.bilibili.com/opus/1245748516848926727", cover:"images/nyan/a2.jpg",
   t:"羽啾比心🤍", d:"海圻圻圻", date:"2026年9月9日"},
  {kind:"video", uid:"2034200085", link:"https://www.bilibili.com/video/BV11bbT6qEYz/", cover:"images/nyan/v4.jpg",
   t:"！？合成大羽啾？！", d:"老美のNASA", date:"2026年9月8日"},
  {kind:"art", uid:"33747490", link:"https://www.bilibili.com/opus/1245610833082318850", cover:"images/nyan/a1.jpg",
   t:"萌萌的q版羽啾", d:"海圻圻圻", date:"2026年9月8日"},
  {kind:"art", uid:"33747490", link:"https://www.bilibili.com/opus/1245313071570747392", cover:"images/nyan/a3.jpg",
   t:"恭喜羽啾宝宝满月！", d:"海圻圻圻", date:"2026年9月7日"},
  {kind:"art", uid:"3745037691129660", link:"https://www.bilibili.com/opus/1242707430901547027", cover:"images/nyan/a4.jpg",
   t:"小画了下啾宝大头", d:"绫梓二号机", date:"2026年8月31日"},
  {kind:"meme", uid:"32959784", link:"https://www.bilibili.com/opus/1241314581585854466", cover:"images/nyan/m2.jpg",
   t:"约了表情包发一下", d:"霜枫醉弈", date:"2026年8月28日"},
  {kind:"art", uid:"15656417", link:"https://www.bilibili.com/opus/1241104776742043698", cover:"images/nyan/a5.jpg",
   t:"羽啾本体被我找到了", d:"贰三3三", date:"2026年8月27日"},
  {kind:"art", uid:"299513326", link:"https://www.bilibili.com/opus/1239675085193740306", cover:"images/nyan/a7.jpg",
   t:"锡纸帽击穿", d:"猫头虫尾", date:"2026年8月23日"},
  {kind:"art", uid:"3546845108242875", link:"https://www.bilibili.com/opus/1238289713422401544", cover:"images/nyan/a18.jpg",
   t:"七夕快乐", d:"小松绿智商低", date:"2026年8月19日"},
  {kind:"art", uid:"3546845108242875", link:"https://www.bilibili.com/opus/1237113665495236610", cover:"images/nyan/a6.jpg",
   t:"我说啾绿王朝了有人懂吗？", d:"小松绿智商低", date:"2026年8月16日"},
  {kind:"meme", uid:"702229167", link:"https://www.bilibili.com/opus/1236702001475092485", cover:"images/nyan/m4.jpg",
   t:"smoke中", d:"nakuu_骷", date:"2026年8月15日"},
  {kind:"video", uid:"aWttamNobG5j", link:"https://www.bilibili.com/video/BV1j6uf6WE8R/", cover:"images/nyan/v2.jpg",
   t:"【羽啾chu2u】Bad Apple自制动画", d:"此间风饮雪", date:"2026年8月14日"},
  {kind:"art", uid:"1819467", link:"https://www.bilibili.com/opus/1235959049426567172", cover:"images/nyan/a14.jpg",
   t:"┗|｀O′|┛ 嗷~~", d:"陈Drake-", date:"2026年8月13日"},
  {kind:"art", uid:"5176714", link:"https://www.bilibili.com/opus/1235923753396863031", cover:"images/nyan/a16.jpg",
   t:"👽1", d:"Bili_3001602573", date:"2026年8月13日"},
  {kind:"meme", uid:"aWJqYm1vamI=", link:"https://www.bilibili.com/opus/1235381569597734931", cover:"images/nyan/m3.jpg",
   t:"请大家多多支持羽啾chuuuuuu!!!", d:"_可乐乐乐乐乐", date:"2026年8月12日"},
  {kind:"meme", uid:"490589965", link:"https://www.bilibili.com/opus/1235244444203089937", cover:"images/nyan/m1.jpg",
   t:"羽啾EmoteLab表情包", d:"芋泥咕咕茶", date:"2026年8月11日"},
];