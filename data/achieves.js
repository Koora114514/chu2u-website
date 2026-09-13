/* 実績？カッコいいでしょ！· 成就？应该很酷吧！—— 成就数据（手动维护，改这里即可）
 *
 * 字段说明：
 *   date   达成日期，格式 "2026.08.07"。**时间轴的刻度就按这个日期自动排**，
 *          不用管数组顺序（渲染时会按日期排好，最早的在最左边）
 *   icon   图标。填一个 emoji 就行（比如 🎉 🚢 🎬），也可以填图片路径
 *          （"images/xxx.png"）；留空 = 显示未解锁的闪烁问号
 *   name   成就名（卡片上的大标题）
 *   desc   成就介绍
 *   locked 填 true = 未解锁占位（图片区显示闪烁问号、名和介绍都是「未解锁」）
 *
 * 想加新成就：用 维护\成就手动更新.ps1（推荐），或者直接把新条目插进下面数组。
 */
window.CHU2U_ACHIEVES_UPDATED = "2026-09-13";

window.CHU2U_ACHIEVES = [
  {
    date: "2026.08.07",
    icon: "🎬",
    name: "首播！",
    desc: "出道首播！"
  },
  {
    date: "2026.08.10",
    icon: "🚢",
    name: "百舰达成！",
    desc: "大航海人数达 100 人！"
  },
  {
    date: "2026.08.16",
    icon: "🎉",
    name: "万粉达成！",
    desc: "粉丝数成功到达 10000 粉丝！"
  },
  { date: "", icon: "", name: "未解锁", desc: "未解锁", locked: true },
  { date: "", icon: "", name: "未解锁", desc: "未解锁", locked: true },
  { date: "", icon: "", name: "未解锁", desc: "未解锁", locked: true }
];
