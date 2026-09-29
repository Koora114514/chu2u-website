/* 首页首屏（Hero）+「啾！公开档案」—— 全部可编辑内容（手动维护，改这里即可）
 *
 * 也可以在 维护\猫猫管理\ 的「🏠 首页与公开档案」页用界面改（推荐）。
 *
 * 结构说明：
 *   hero.kicker / kickerEn   首屏左上角「宇宙特典期刊 / UNIVERSE SPECIAL EDITION」
 *   hero.title               大标题「宇宙观测中心」
 *   hero.typed               打字机简介：full = 完整句子，hl = 其中要高亮加大的那串字
 *   hero.chips               状态胶囊（图标 + 名称 + 内容），可增删
 *   hero.swatch              应援色胶囊（label + color）
 *   hero.buttons             按钮（text 文字 / href 链接 / cls = ghost|sky|空）
 *   hero.tagChip             二创话题 tag 胶囊（text + href）
 *   hero.floaters / butterfly   首屏右侧飘着的装饰 emoji
 *   hero.slides              立绘轮播（img 图片路径 / alt / cap 说明；q:true = 大像素问号占位）
 *   about.*                  公开档案：badge 角标 / avatar 立绘 / name+nameEm 名字 /
 *                            species 一行身份 / bio 自我介绍 / list 资料表 /
 *                            likes 喜恶表分组 / tags 标签
 *   about.list 每项：k 名称；v 普通值；或 link{href,text,img} 带链接与配图；
 *                    或 chips[{t 文字, img 可选小图}, ...] 一排小胶囊；
 *                    或 special:"likes"（这一行的内容取自 about.likes 喜恶表）
 *   about.likes 每组：h 分组标题；items 每行 {b 加粗前缀, t 内容}
 *
 * 注意：UPDATED **兼作立绘/配图的缓存版本号**（页面给图片地址加的 ?v= 就是它，
 *      图片缓存 7 天）——换图后要改成新的时间，猫猫管理台会自动做。
 */
window.CHU2U_PROFILE_UPDATED = "2026-09-29 21:00";

window.CHU2U_PROFILE = {
  hero: {
    kicker: "宇宙特典期刊",
    kickerEn: "UNIVERSE SPECIAL EDITION",
    title: "宇宙观测中心",
    typed: {
      full: "本站定期（并非定期）同步 羽啾chu2u 融入人类生活时的考察数据、翻唱情报与都市探险小故事。 宇宙猫们助力外星人啾啾接收外星电波，一起寻找回到母星的办法吧！！",
      hl: "羽啾chu2u"
    },
    chips: [
      { icon: "🛸", label: "所在地：", value: "地球" },
      { icon: "👽", label: "种族：", value: "地球上的\"外星人\"" }
    ],
    swatch: { label: "🎨 应援色 :", color: "#d4da7b" },
    buttons: [
      { text: "▶ 玩一局俄罗斯方块", href: "tetris.html", cls: "" },
      { text: "📼 啾啾特辑！", href: "#works", cls: "ghost" },
      { text: "🎧 陪啾啾听！", href: "playlist.html", cls: "ghost" },
      { text: "📺 进入B站主页", href: "https://space.bilibili.com/2138961136?spm_id_from=333.1387.follow.user_card.click", cls: "sky", ext: true }
    ],
    tagChip: {
      text: "Tag: ＃猫猫宇宙论",
      href: "https://www.bilibili.com/v/topic/detail?topic_id=1345548&topic_name=%E7%8C%AB%E7%8C%AB%E5%AE%87%E5%AE%99%E8%AE%BA&spm_id_from=333.1369.opus.module_topic.click"
    },
    floaters: ["👽", "🛸", "🌵", "✦"],
    butterfly: "🛸",
    slides: [
      { img: "images/探险啾.png", alt: "探险啾", cap: "外出考察ing · 探险啾！" },
      { img: "images/宅尼特啾.png", alt: "宅尼特啾", cap: "好舒服啊~ · 家里蹲啾" },
      { q: true, cap: "我是谁？· 你猜啾！" }
    ]
  },
  about: {
    badge: "羽啾CHU2U · 出道立绘",
    avatar: "images/探险啾-立绘.png",
    name: "羽啾 chu2u",
    nameEm: "VirtuaReal · 二十八期生",
    species: "诞生在地球的外星人！",
    bio: "「电波信号接收成功！大家好！我是羽啾chu2u（Chu! Chu!），是诞生在地球的外星人！名字的Chu2u念作Chu!Chu! 如果大家是这么叫我的话！会很开心的！」 本名叫灯羽啾，昵称是啾啾/chuchu（不觉得这很像什么任务代号吗！）! 兴趣是占卜！可以理解成我在解密外星信号吧！梦想是办3D回在舞台上唱歌！ 2026年8月5日开始活动，7日正式出道！",
    list: [
      { k: "姓名", v: "灯羽啾" },
      { k: "身份", v: "诞生在地球的外星人！" },
      { k: "身高", v: "152cm" },
      { k: "生日", v: "", link: { href: "https://baike.baidu.com/item/%E4%BA%BA%E7%B1%BB%E6%9C%88%E7%90%83%E6%97%A5/4337779", text: "7月20日", img: "images/山田啾.png" } },
      { k: "MBTI", v: "ISFP" },
      { k: "粉丝牌", v: "宇宙猫" },
      { k: "TAG", v: "猫猫宇宙论" },
      { k: "目标", v: "", chips: [
        { t: "3W订阅！", img: "" },
        { t: "办3D回", img: "images/抱抱啾.png" },
        { t: "做游戏（敬请期待）", img: "" }
      ] },
      { k: "羽啾喜恶表", v: "", special: "likes" }
    ],
    likes: [
      { h: "兴趣爱好", items: [{ b: "", t: "超自然事件 / 有隐喻的作品 / 日式恐游RPG / 休闲游戏 / 唱歌 / 画画" }] },
      { h: "不擅长的事情", items: [{ b: "", t: "竞技游戏 / 魂类游戏. / 多人社交 / 运动 / 唱歌 / 画画" }] },
      { h: "喜欢的系列", items: [{ b: "", t: "物语系列 / 型月系列 / 东方系列 / 鸣泣之时 / 海底囚人 / Milgram / 弹丸论破" }] },
      { h: "喜欢的游戏", items: [
        { b: "偏好！", t: "海王星 / 宝可梦" },
        { b: "打牌！", t: "游戏王 / 影之诗" },
        { b: "休闲！", t: "动森 / 宝森 / 星露谷" },
        { b: "剧情！", t: "兰斯 / 人狼村 / DDLC" },
        { b: "手游！", t: "康帕斯 / 偶像大师sc" }
      ] },
      { h: "喜欢的作品", items: [
        { b: "偏好！", t: "点兔 / 来自深渊 / 学园孤岛 / 属性咖啡厅 / 悠哉日常大王 / 幸运星 / 波子汽水 / 蔷薇少女 / 侵略乌贼娘 / urara迷路帖 / 干支魂 / 国王排名 / 金牌得主 / 天体的秩序 / 魔法少女伊莉雅 / 魔保育 / 宝石宠物 / 天魔黑兔 / 漆黑的子弹 / 天使降临到我身 / 萝球社 / 游戏人生 / 街角魔族 / 龙王的工作 / 机巧少女不会受伤 / 小林家的龙女仆" },
        { b: "特摄！", t: "假面骑士fourze / 虫王战队超王者" },
        { b: "甜甜！", t: "无能的奈奈 / 晚安布布" },
        { b: "剧情！", t: "奇巧计程车 / 宝石之国 / 红辣椒" },
        { b: "好看！", t: "百合熊岚 / 魔法少女育成计划 / 春宵苦短少女前进吧" }
      ] }
    ],
    tags: ["#外星人", "#唱歌", "#画画", "#社恐", "#萝莉", "#VirtuaReal 二十八期"]
  }
};
