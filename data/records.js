/* ============================================================
   羽啾chu2u · 观测记录数据（每周一自动更新维护）
   ============================================================
   每期结构：
   { no: 期号, tag: 期数小字（如「287满月特别联动」）, title: 本期标题,
     range: 日期范围, cover: 封面图, stamp: 印章文字, lead: 总结段,
     items: [ 视频条目 | 里程碑条目 ]
       视频条目: {kind:"video", uid:"切片作者BID", link:"B站链接", cover:"本地封面",
                  cat:"类型 · 英文", t:"标题", d:"一句话介绍", date:"日期 · 尾巴文字"}
       里程碑条目: {kind:"milestone", num:"大数字", unit:"单位小字",
                  cat:"里程碑 · MILESTONE", t:"标题", d:"一句话介绍", date:"日期"} }

   规则：
   - 本栏目只收录【非 2138961136 用户】发布的投稿（啾啾的直播切片/相关稿件），
     用来总结每周直播热点；羽啾自己的投稿在「啾啾特辑」作品展柜，不在这里重复。
   - 屏蔽名单（两位 B 站用户）加密存在 index.html 里，页面运行时解密后自动过滤；
     这里的条目 uid 不要收录那两位用户。
   - 热度挑选规则（2026-09-12 定）：热度分 = 播放量 + 评论数 × 50，
     每期视频条目取分数最高的 3~5 个（被屏蔽用户一律跳过），里程碑条目不受此限。
   - 推荐位（2026-09-12 定）：本人账号（uid 加密为 "aWJqYm1vamI="，不写明文）
     的切片若入选，页面渲染时自动排到每期前三位（不做任何特殊标记）；
     以后新增该账号条目的 uid 字段一律写密文 "aWJqYm1vamI="。
   - lead 结尾不要写「以下按热度分…」之类的说明文字（2026-09-12 用户要求删除，
     后续更新不再出现）。
   - 里程碑条目排在所有切片条目之前（置顶显示在切片之上）；
     页面渲染时也会自动把里程碑挪到最前。
   - 周界规则（2026-09-12 补齐出道至今）：每周为一期。期 1 出道周 08.05-08.09
     （起点按 8 月 5 日初投稿算，早于 8 月 7 日周界两天，为纳入出道日）；
     期 2 08.10-08.16、期 3 08.17-08.23、期 4 08.24-08.30、期 5 08.31-09.06，
     之后每 7 天一期，由每周一计划任务追加。
   - 新一期追加到数组末尾（期号 +1），旧期不动；往期条目封面放
     chu2u/site/images/records/archive/（issue{n}.jpg + item{n}-{k}.jpg），
     本期沿用 images/records/ 下已载入的文件；封面统一 16:9 中心裁切
     480x270 JPEG（条目卡左图右文，图块显示约 128x72，不用更大）。
   - 选稿要「羽啾强相关」（2026-09-16 用户纠正）：条目优先收羽啾本人的
     直播名场面切片（尤其是当周大事件），不要全挑联动/关系向内容。
   - 更新本文件后，把 index.html 里 data/records.js 那个 <script src> 的
     ?v= 改成「今天+时分」（YYYYMMDDHHMM，如 202609202013）——缓存版本号，
     不改浏览器会继续显示旧数据；同一天多次更新必须换新值，只用当天日期
     会撞上浏览器/Cloudflare 旧缓存（2026-09-20 实测踩坑）。
   - 若重做某期时覆盖了已有文件名的封面（如 issue6.jpg、item6-1.jpg），
     把该期的封面引用 URL 也加上 ?v=日期（见第 6 期写法），否则浏览器
     会继续用缓存的旧封面。 */
window.CHU2U_RECORDS = [
  { no:1, tag:"初投稿 · 出道", title:"来自 n 次观测地的第一条信号",
    range:"2026.08.05 – 2026.08.09", cover:"images/works/work-1.jpg", stamp:"记录·入库",
    lead:"8 月 5 日，羽啾chu2u 从 n 次观测地向地球发来第一条信号：《Os-宇宙人》初投稿，正式出道；随后两天连发《外星人解读汽车故障灯》和《以上，是从 n 次观测地发送回来的。》，观测频道正式开张。8 月 9 日晚，羽啾在直播里怒斥 ylg 力挺 FGO、放出「U咩哇帕瓦」名场面、被夸「本音如梦似幻」——首批切片老师连夜产出。",
    items:[
      {kind:"video", uid:"327973290", link:"https://www.bilibili.com/video/BV114uS6gE7q/", cover:"images/records/archive/item1-1.jpg",
       cat:"直播切片 · CLIP", t:"全宇宙最爽的U咩哇帕瓦", d:"出道第四天直播放出「U咩哇帕瓦」名场面，切片老师连夜产出。", date:"8月9日 · 看切片 →"},
      {kind:"video", uid:"1810411903", link:"https://www.bilibili.com/video/BV1hbu26GEaX/", cover:"images/records/archive/item1-2.jpg",
       cat:"直播切片 · CLIP", t:"FGO才是婆罗门该玩的游戏！", d:"羽啾怒斥 ylg：FGO 才是婆罗门该玩的游戏，游戏品味现场辩论。", date:"8月9日 · 看切片 →"},
      {kind:"video", uid:"523220443", link:"https://www.bilibili.com/video/BV1pmu26FEKw/", cover:"images/records/archive/item1-3.jpg",
       cat:"直播切片 · CLIP", t:"这本音也太豪庭了吧", d:"本音切片——被夸「如梦似幻」的嗓音，切片老师附赠五毛一条的彩虹屁。", date:"8月9日 · 看切片 →"},
      {kind:"video", uid:"523220443", link:"https://www.bilibili.com/video/BV1Zium6xERo/", cover:"images/records/archive/item1-4.jpg",
       cat:"直播切片 · CLIP", t:"那就来亲亲吧", d:"羽啾撒娇名场面：那就来亲亲吧。", date:"8月9日 · 看切片 →"},
      {kind:"video", uid:"1810411903", link:"https://www.bilibili.com/video/BV1hgum65EmR/", cover:"images/records/archive/item1-5.jpg",
       cat:"直播切片 · CLIP", t:"要成为v圈最小众的宝藏直播间", d:"287 后辈发话：要成为整个 v 圈最小众的宝藏直播间！", date:"8月9日 · 看切片 →"},
      {kind:"milestone", num:"1st", unit:"初投稿达成", cat:"里程碑 · MILESTONE",
       t:"初投稿 · Os-宇宙人", d:"出道作《Os-宇宙人》上线，n 次观测地开始向地球广播。", date:"8月5日"}
    ] },
  { no:2, tag:"287 首次会晤", title:"四神合体，联动夜！",
    range:"2026.08.10 – 2026.08.16", cover:"images/records/archive/issue2.jpg", stamp:"记录·入库",
    lead:"8 月 13 日羽啾直播间里，小松绿 1 到 12 高燃数星星；8 月 16 日，287 四人组（四时小路、羽啾、小松绿、枝堇）首次全员会晤联动，「绿神残局」「Fantastic baby」合唱名场面轮番上演，还有「七夕别跟羽啾一起出去玩」的放话。",
    items:[
      {kind:"video", uid:"495045064", link:"https://www.bilibili.com/video/BV1rfbQ6REjq/", cover:"images/records/archive/item2-1.jpg",
       cat:"联动 · COLLAB", t:"也许是历史上最伟大的残局", d:"287 首次会晤联动夜：6000 考子围观绿神残局，叶绿素脸都丢完了。", date:"8月16日 · 看切片 →"},
      {kind:"video", uid:"332623470", link:"https://www.bilibili.com/video/BV1GAbd6SEPx/", cover:"images/records/archive/item2-2.jpg",
       cat:"直播切片 · CLIP", t:"1-12 惊天大区！绿神高燃数星星", d:"8 月 13 日羽啾直播间，小松绿 1 到 12 高燃数星星，看完不笑的算你有玉玉症。", date:"8月13日 · 看切片 →"},
      {kind:"video", uid:"495045064", link:"https://www.bilibili.com/video/BV1p6bR6vEi1/", cover:"images/records/archive/item2-3.jpg",
       cat:"联动 · COLLAB", t:"七夕别跟羽啾一起出去玩？", d:"小松绿：感觉我主动约羽啾，她也不一定敢出来呢。", date:"8月16日 · 看切片 →"},
      {kind:"video", uid:"290736390", link:"https://www.bilibili.com/video/BV1hsbR61E84/", cover:"images/records/archive/item2-4.jpg",
       cat:"联动 · COLLAB", t:"白绿：哇哇哇，宇宙猫：老馋", d:"联动夜名场面：葉绿素和宇宙猫互喊老馋。", date:"8月16日 · 看切片 →"},
      {kind:"video", uid:"8545006", link:"https://www.bilibili.com/video/BV1sebR6zELD/", cover:"images/records/archive/item2-5.jpg",
       cat:"联动 · COLLAB", t:"很自然地唱起 Fantastic baby", d:"四时小路与羽啾 Kpop 无缝衔接——没少听啊这俩人。", date:"8月16日 · 看切片 →"},
      {kind:"milestone", num:"首场", unit:"287全员联动", cat:"里程碑 · MILESTONE",
       t:"287 首次会晤 · 四神合体", d:"8 月 16 日，四时小路、羽啾、小松绿、枝堇首次全员联动，287 正式合体。", date:"8月16日"}
    ] },
  { no:3, tag:"287 感情升温", title:"2026 也要在一起哦",
    range:"2026.08.17 – 2026.08.23", cover:"images/records/archive/issue3.jpg", stamp:"记录·入库",
    lead:"本周 287 感情持续升温：《小幸运》合唱二创刷屏「2026 也要在一起哦」；羽啾认证心中最幸福的同期，发动态被同期暖到的黄钻啾；Badj0ey 的 287 Core 混剪让大家笑到不行。",
    items:[
      {kind:"video", uid:"500278643", link:"https://www.bilibili.com/video/BV15u8s6uEUh/", cover:"images/records/archive/item3-1.jpg",
       cat:"二创 · FANMADE", t:"287 Core", d:"287 四人组核心梗混剪，部分片段有断章取义嫌疑，致歉（但真的好笑）。", date:"8月23日 · 看切片 →"},
      {kind:"video", uid:"aWJqYm1vamI=", link:"https://www.bilibili.com/video/BV1wo8U6WERf/", cover:"images/records/archive/item3-2.jpg",
       cat:"直播切片 · CLIP", t:"羽啾心中最幸福的同期❤", d:"纯度正确：羽啾认证心中最幸福的同期，好暖的同期情谊。", date:"8月23日 · 看切片 →"},
      {kind:"video", uid:"507729605", link:"https://www.bilibili.com/video/BV1th8b6zEFW/", cover:"images/records/archive/item3-3.jpg",
       cat:"二创 · FANMADE", t:"《小幸运》2026 也要在一起哦", d:"287 合唱《小幸运》二创，弹幕齐刷「2026 也要在一起哦！」", date:"8月23日 · 看切片 →"},
      {kind:"video", uid:"332623470", link:"https://www.bilibili.com/video/BV1TD8U6tEPL/", cover:"images/records/archive/item3-4.jpg",
       cat:"直播切片 · CLIP", t:"整天发爆是想和主播抱抱吗", d:"原来你们整天发爆是想要和主播抱抱吗，羽啾突然觉得大家都好亚撒西。", date:"8月22日 · 看切片 →"},
      {kind:"video", uid:"aWJqYm1vamI=", link:"https://www.bilibili.com/video/BV1Y5846kE7o/", cover:"images/records/archive/item3-5.jpg",
       cat:"直播切片 · CLIP", t:"尊贵的黄钻啾👽💎", d:"羽啾空间发动态被同期暖到，尊贵的黄钻啾开心时刻。", date:"8月23日 · 看切片 →"}
    ] },
  { no:4, tag:"小松绿×羽啾", title:"裸子植物学与收留宣言",
    range:"2026.08.24 – 2026.08.30", cover:"images/records/archive/issue4.jpg", stamp:"记录·入库",
    lead:"8 月末，小松绿与羽啾互动不断：突击唱回里测谎仪疯狂摇头否认「最爱的妹妹」、为跟羽啾联机不卡主动关掉自己的弹幕机；羽啾「谢谢小松绿收留我」宣言；287 经典植物学难题「枝堇还是裸子植物」迎来新进展。",
    items:[
      {kind:"video", uid:"3493257038268887", link:"https://www.bilibili.com/video/BV1eP416HEmH/", cover:"images/records/archive/item4-1.jpg",
       cat:"直播切片 · CLIP", t:"羽啾的好妹妹只有小松绿一个吧", d:"小松绿认证：羽啾的好妹妹，现在应该只有自己一个吧。", date:"8月29日 · 看切片 →"},
      {kind:"video", uid:"3707055238024073", link:"https://www.bilibili.com/video/BV1Bg4k6SEeW/", cover:"images/records/archive/item4-2.jpg",
       cat:"直播切片 · CLIP", t:"测谎仪：👎👎👎", d:"突击唱回：@羽啾 你是我最爱的妹妹——测谎仪疯狂摇头。", date:"8月29日 · 看切片 →"},
      {kind:"video", uid:"1437490314", link:"https://www.bilibili.com/video/BV13E4Q6KEH5/", cover:"images/records/archive/item4-3.jpg",
       cat:"直播切片 · CLIP", t:"枝堇还是裸子植物？", d:"287 经典植物学难题：枝堇到底是不是裸子植物。", date:"8月30日 · 看切片 →"},
      {kind:"video", uid:"3493257038268887", link:"https://www.bilibili.com/video/BV1pj4D6UEcM/", cover:"images/records/archive/item4-4.jpg",
       cat:"直播切片 · CLIP", t:"谢谢小松绿收留我啊", d:"羽啾：今天真的有点不知道播什么了，谢谢小松绿收留我。", date:"8月30日 · 看切片 →"},
      {kind:"video", uid:"13074337", link:"https://www.bilibili.com/video/BV1Uo4m6XEoM/", cover:"images/records/archive/item4-5.jpg",
       cat:"联动 · COLLAB", t:"为了联机不卡把弹幕机关了", d:"小松绿为了跟羽啾联机不卡，把自己的弹幕机关了——你做人真的可以的。", date:"8月30日 · 看切片 →"}
    ] },
  { no:5, tag:"万粉纪念", title:"界隈の動物園（圈内的动物园），开园！",
    range:"2026.08.31 – 2026.09.06", cover:"images/works/work-5.jpg", stamp:"记录·入库",
    lead:"8 月最后一天，啾啾发来《感觉要坏掉了!⚡》（どうにかなっちゃいそう）的求救信号。万粉其实早在 8 月 16 日就已达成——本周，啾啾发布万粉纪念视频《界隈の動物園》并开播万粉纪念回，动物园正式开园，谢谢每一只入园的小动物。9 月 5 日游戏回、9 月 6 日电台回「惹呀」名场面，切片老师们继续营业。",
    items:[
      {kind:"video", uid:"3493257038268887", link:"https://www.bilibili.com/video/BV1atbs6wEL2/", cover:"images/records/archive/item5-1.jpg",
       cat:"直播切片 · CLIP", t:"身高是可公开信息啊", d:"小松绿：我的身高是可公开信息，从来都没有瞒过大家。", date:"9月6日 · 看切片 →"},
      {kind:"video", uid:"87146130", link:"https://www.bilibili.com/video/BV1pHbW67EhR/", cover:"images/records/archive/item5-2.jpg",
       cat:"直播切片 · CLIP", t:"惹呀，我以为它洒了", d:"9 月 6 日电台回切片：惹呀，我以为它洒了——可爱捏。", date:"9月6日 · 看切片 →"},
      {kind:"video", uid:"3493257038268887", link:"https://www.bilibili.com/video/BV1E3bp6KEsW/", cover:"images/records/archive/item5-3.jpg",
       cat:"直播切片 · CLIP", t:"一上去就摸小松绿的屁股", d:"羽啾畅想以后和小松绿出门的场面，语出惊人。", date:"9月6日 · 看切片 →"},
      {kind:"video", uid:"699198447", link:"https://www.bilibili.com/video/BV1AHbW67EEx/", cover:"images/records/archive/item5-4.jpg",
       cat:"直播切片 · CLIP", t:"一句喜欢你不需要理由", d:"羽啾回应：一句喜欢你不需要理由，随后小松绿不见了。", date:"9月6日 · 看切片 →"},
      {kind:"video", uid:"523220443", link:"https://www.bilibili.com/video/BV1Uobx6cETd/", cover:"images/records/archive/item5-5.jpg",
       cat:"直播切片 · CLIP", t:"你不做有的是人做", d:"羽啾吐槽杂口杂口大叔做得慢：你不做，有的是人做。", date:"9月6日 · 看切片 →"},
      {kind:"milestone", num:"1万", unit:"关注达成", cat:"里程碑 · MILESTONE",
       t:"万粉纪念 · 界隈の動物園", d:"粉丝数早在 8 月 16 日就已破万；本周发布万粉纪念视频《界隈の動物園》并开播万粉纪念回，动物园正式开张。", date:"9月2日"}
    ] },
  { no:6, tag:"啾啾被捕记", title:"星际嫌疑犯啾啾，当场逮捕！",
    range:"2026.09.07 – 2026.09.13", cover:"images/records/issue6.jpg?v=20260916", stamp:"记录·入库",
    lead:"本周啾啾的直播排得满满：9 月 9 日午后锐评小松绿的色图集，咬牙切齿又念念不忘；9 月 10 日晚 287 四人满月特别联动，羽圣开源自曝「洗澡站着尿尿」，同接冲到 7000+；9 月 13 日更是大事件——啾啾在直播里被宇宙猫们「当场逮捕」，通缉、抓走、探监一气呵成，下播时门口的敲门声把观众乐得不行。同一天还有人把「裸子植物」之争做成了琵琶曲，羽啾 vs 小松绿，连乐器都在磕。",
    items:[
      {kind:"video", uid:"2073578410", link:"https://www.bilibili.com/video/BV1npYq6ZE14/", cover:"images/records/item6-1.jpg?v=20260916",
       cat:"二创 · FANMADE", t:"琵琶曲丨根本没有这种同期", d:"「裸子植物」之争被做成琵琶曲，羽啾 vs 小松绿——同期情谊连乐器都在磕。", date:"9月13日 · 看切片 →"},
      {kind:"video", uid:"336666910", link:"https://www.bilibili.com/video/BV1HvY369EGY/", cover:"images/records/item6-2.jpg?v=20260916",
       cat:"直播切片 · CLIP", t:"感谢羽圣开源！洗澡站立派自曝", d:"羽啾自爆洗澡站着尿尿：什么叫你们也都是？——宇宙猫们纷纷坦白。", date:"9月10日 · 看切片 →"},
      {kind:"video", uid:"7172219", link:"https://www.bilibili.com/video/BV1byYW6KE7Z/", cover:"images/records/item6-3.jpg?v=20260916",
       cat:"直播切片 · CLIP", t:"羽啾评价小松绿的色图", d:"「看到好多小松绿的色图，有点咬牙切齿了，她图里好多人啊。」", date:"9月9日 · 看切片 →"},
      {kind:"video", uid:"290736390", link:"https://www.bilibili.com/video/BV1DcYv6NEDg/", cover:"images/records/item6-4.jpg?v=20260916",
       cat:"直播切片 · CLIP", t:"星际嫌疑犯羽啾chu2u已被逮捕", d:"本台主持四时小路持续为您报道：啾啾被通缉、被抓走，枝堇妈妈赶来探监。", date:"9月13日 · 看切片 →"},
      {kind:"video", uid:"3546635254630711", link:"https://www.bilibili.com/video/BV1GqYv66Epq/", cover:"images/records/item6-5.jpg?v=20260916",
       cat:"直播切片 · CLIP", t:"神人下播小剧情：谁呀这么没素质！", d:"下播时门口传来敲门声——羽啾已被通缉、随后被抓走，神人小剧情。", date:"9月13日 · 看切片 →"},
      {kind:"milestone", num:"7千+", unit:"同接达成", cat:"里程碑 · MILESTONE",
       t:"287 满月联动 · 7000+ 同接", d:"满月特别联动直播间人气峰值突破 7000，287 名场面之夜。", date:"9月10日"}
    ] }
];
