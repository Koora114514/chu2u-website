/* 嘘，这是啾啾和宇宙猫的秘密 —— 彩蛋数据（手动维护，改这里即可）
 *
 * 字段说明：
 *   title  彩蛋标题（可以带 emoji）
 *   text   彩蛋内容。纯文本，\n 换行；正文里的 http 链接会自动变成可点的
 *   img    配图路径（相对 site/ 根，例如 "images/secret/xxx.jpg"；不配图就写空串 ""）
 *
 * 页面表现：
 *   - 卡片顶部左边是标题、右边是「第几个/共几个」
 *   - 内容区默认只露 4 行，多出的滚轮上下预览
 *   - 配图按 4:3 缩略图展示（自动居中裁切），点一下看原图
 *   - 左右箭头翻到上一条 / 下一条
 *
 * 想加新彩蛋：用 维护\彩蛋手动更新.ps1（推荐，会自动处理图片），
 *            或者直接把新条目插到下面数组最前面。
 */
window.CHU2U_SECRETS_UPDATED = "2026-09-13";

window.CHU2U_SECRETS = [
  {
    title: "👽:给宇宙猫们的七夕礼物",
    text: "务必打开信号接收哔哔哔\n\n电脑版:\nhttps://pan.baidu.com/s/1iXmpH7RgFn0UM60Ta1S2zg?pwd=qwg3 提取码: qwg3\nhttps://pan.quark.cn/s/1158fd69427c?pwd=PeHy 提取码：PeHy\n\n手机版:\nhttps://pan.baidu.com/s/1SEChKR2EDfeUoDyoiqyNSA?pwd=gqzh 提取码: gqzh\nhttps://pan.quark.cn/s/51db7006eb83?pwd=J8Vg 提取码：J8Vg",
    img: ""
  },
  {
    title: "⚠️无法识别‼️",
    text: "分享图片\n“羽啾chu2u的动态_969530.png”",
    img: "images/secret/egg-969530.jpg"
  }
];
