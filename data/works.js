/* 作品展柜（啾啾特辑！里的投稿滑块）—— 手动维护，改这里即可
 *
 * 字段：
 *   t      标题
 *   link   投稿链接（B站视频完整网址，点卡片新窗口打开）
 *   cover  封面图（本地路径，例如 images/works/work-6.jpg）
 *   date   投稿时间（显示用，格式 2026.08.05）
 *   type   投稿类型（可选）：video 投稿 / music 歌切 / clip 切片 / art 绘画 / other 其他
 *
 * 也可以在 维护\维护台 里点「啾啾特辑」用界面改（推荐）。
 * 数组顺序 = 滑块显示顺序，最新的放最后（末尾会自动追加一张「魔法正在生成中」空白卡）。
 */
window.CHU2U_WORKS_UPDATED = "2026-09-26";

window.CHU2U_WORKS = [
  { t: "【初投稿】Os-宇宙人", link: "https://www.bilibili.com/video/BV1MGuw6LEYa/", cover: "images/works/work-1.jpg", date: "2026.08.05", type: "video" },
  { t: "外星人解读汽车故障灯", link: "https://www.bilibili.com/video/BV1Z1M16mEBp/", cover: "images/works/work-2.jpg", date: "2026.08.06", type: "video" },
  { t: "【chu2u】以上，是从n次观测地发送回来的。", link: "https://www.bilibili.com/video/BV1m8uH6eEbs/", cover: "images/works/work-3.jpg", date: "2026.08.07", type: "video" },
  { t: "【chu2u】⚡感觉要坏掉了!⚡/どうにかなっちゃいそう", link: "https://www.bilibili.com/video/BV14zt86KENJ/", cover: "images/works/work-4.jpg", date: "2026.08.31", type: "video" },
  { t: "【万粉纪念】界隈の動物園", link: "https://www.bilibili.com/video/BV163tn6eE9C/", cover: "images/works/work-5.jpg", date: "2026.09.02", type: "video" },
  { t: "【chu2u】你的心里到底有没有我们⁉️/住在天狼星的那个人", link: "https://www.bilibili.com/video/BV1vyeP6tEqj/", cover: "images/works/work-6.jpg", date: "2026.09.17", type: "video" },
  { t: "【chu2u】凶手和恋人都喜欢事后回现场/恋人", link: "https://www.bilibili.com/video/BV1NDhR61EL8/", cover: "images/works/work-7.jpg", date: "2026.09.26", type: "video" }
];
