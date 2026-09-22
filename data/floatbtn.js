/* 主页右下角「悬浮飘窗按钮」—— 文案与跳转链接（手动维护，改这里即可）
 *
 * 字段说明：
 *   icon   左边的大图标（emoji）
 *   text   飘窗上的文字。想让文字分两行，就在要断的地方写 \n
 *   badge  右边小方块里的字（比如 GO）
 *   href   点一下跳去哪。可以填站内页面（tetris.html / playlist.html / index.html），
 *          也可以填完整外链（https://... 会新窗口打开）
 *   title  鼠标悬停时的小提示 + 读屏软件读的话
 *   show   填 false = 这个飘窗干脆不显示
 *
 * 想改文案/换链接：用 维护\飘窗手动更新.ps1（推荐），或者直接改下面这几行。
 * 注意：飘窗右上角的「×」只关掉这一次（不记本地）——访客每次刷新/重进主页都会再出现
 */
window.CHU2U_FLOATBTN_UPDATED = "2026-09-18";

window.CHU2U_FLOATBTN = {
  icon: "🎧",
  text: "一起来听！\n《住在天狼星的那个人》\n助力10W播放！",
  badge: "GO",
  href: "https://www.bilibili.com/video/BV1vyeP6tEqj/",
  title: "一起来听！《住在天狼星的那个人》助力10W播放！",
  show: true
};
