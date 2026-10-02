/* ============================================================
   羽啾chu2u · 羽啾探险日志！录播站数据（每天自动识别维护 + 管理台人工编辑）
   ============================================================
   条目结构（数组顺序不承重，页面按日期时间排序）：
   { bvid:"B站BV号", t:"显示标题", cover:"images/replays/rNNN.jpg",
     y:年, mo:月, d:日, h:时, mi:分, sec:总时长秒, pages:分P数,
     tags:"逗号分隔的分类", pin:false }
   - bvid 是唯一身份（去重、链接、播放器参数都由它派生，不存 link）
   - y/mo/d 取自标题里的 YYYY.MM.DD；h/mi 取自投稿时间（北京时间），人工可改
   - sec = 全部分P时长之和（秒），页面显示为 x.xh；pages = 分P数
     （0 = 暂时拿不到分P信息时的占位，页面会隐藏分P相关 UI）
   - tags 取值见 window.CHU2U_REPLAY_TAGS（该列表可由管理台增删）；
     分类：杂谈/歌回/游戏/联动/电台/特别回/突击/水时长
   - pin:true = 置顶（排最前显示）
   - 封面统一 16:9 中心裁切 672x378 JPEG q88（B站封面原生 16:9，不裁构图）

   规则：
   - 只收 B 站用户 490589965 的投稿，且标题以【羽啾chu2u】开头
     （标题格式：【羽啾chu2u】YYYY.MM.DD标题，如
       【羽啾chu2u】2026.10.02⭐睡醒了，还是有点头痛!播到困⭐）
   - 云端/自动更新只做「新条目前插」，绝不重写已存在的条目——
     人工在管理台改过的 tag/时间/标题一律保留（人工编辑绝对权威）
   - 更新本文件后，把 log.html 里 data/replays.js 那个 <script src> 的
     ?v= 改成「今天+时分」（YYYYMMDDHHMM）——缓存版本号，同一天多次更新
     必须换新值，只用当天日期会撞上浏览器/Cloudflare 旧缓存。 */
window.CHU2U_REPLAYS_UPDATED = "2026-10-03";
window.CHU2U_REPLAY_TAGS = ["杂谈", "歌回", "游戏", "联动", "电台", "特别回", "突击", "水时长"];
window.CHU2U_REPLAYS = [
  {bvid:"BV1ixam6kEaP", t:"⭐睡醒了，还是有点头痛!⭐", cover:"images/replays/r001.jpg",
   y:2026, mo:10, d:2, h:15, mi:33, sec:16970, pages:4, tags:"", pin:false},
  {bvid:"BV1zeay66ERp", t:"⭐睡醒了，还是有点头痛!播到困⭐", cover:"images/replays/r002.jpg",
   y:2026, mo:10, d:2, h:5, mi:12, sec:370, pages:1, tags:"", pin:false},
  {bvid:"BV1C2aR6GEsx", t:"⭐刚睡醒，困得⭐", cover:"images/replays/r003.jpg",
   y:2026, mo:9, d:30, h:15, mi:49, sec:8880, pages:2, tags:"", pin:false},
  {bvid:"BV1ziaW6mEyq", t:"⭐挑战吃薯片不被发现⭐", cover:"images/replays/r004.jpg",
   y:2026, mo:9, d:29, h:23, mi:42, sec:22677, pages:6, tags:"", pin:false},
  {bvid:"BV1yGaL6wETf", t:"⭐电波观测⭐", cover:"images/replays/r005.jpg",
   y:2026, mo:9, d:28, h:0, mi:35, sec:7995, pages:3, tags:"", pin:false},
  {bvid:"BV1Siae6tEJx", t:"⭐电波观测⭐", cover:"images/replays/r006.jpg",
   y:2026, mo:9, d:27, h:0, mi:49, sec:15773, pages:4, tags:"", pin:false},
  {bvid:"BV1Hsho63ELr", t:"⭐电波观测⭐", cover:"images/replays/r007.jpg",
   y:2026, mo:9, d:26, h:23, mi:11, sec:20070, pages:5, tags:"", pin:false},
  {bvid:"BV1GEhy6oESZ", t:"虽然是歌杂但是虚虚的!⭐", cover:"images/replays/r008.jpg",
   y:2026, mo:9, d:25, h:15, mi:58, sec:8762, pages:2, tags:"", pin:false},
  {bvid:"BV1oGaT6FEtS", t:"来吧7天30小时的传说⭐", cover:"images/replays/r009.jpg",
   y:2026, mo:9, d:24, h:1, mi:44, sec:12791, pages:3, tags:"", pin:false},
  {bvid:"BV1BraA69Ee2", t:"下午de电波信号！⭐", cover:"images/replays/r010.jpg",
   y:2026, mo:9, d:24, h:15, mi:52, sec:8857, pages:2, tags:"", pin:false},
  {bvid:"BV1JHhn6qE1J", t:"连接不上以太网是什么意思⭐", cover:"images/replays/r011.jpg",
   y:2026, mo:9, d:22, h:0, mi:8, sec:8723, pages:2, tags:"", pin:false},
  {bvid:"BV1Nth66NEAq", t:"来自夜晚的困倦电波信号...⭐", cover:"images/replays/r012.jpg",
   y:2026, mo:9, d:21, h:23, mi:43, sec:10491, pages:2, tags:"", pin:false},
  {bvid:"BV1weeB6PEvy", t:"看看视频下下饭", cover:"images/replays/r013.jpg",
   y:2026, mo:9, d:20, h:23, mi:44, sec:12033, pages:3, tags:"", pin:false},
  {bvid:"BV1kpea6jELk", t:"突击!玩一会喜欢的游戏!!!", cover:"images/replays/r014.jpg",
   y:2026, mo:9, d:20, h:3, mi:40, sec:9777, pages:2, tags:"", pin:false},
  {bvid:"BV12ge862EjL", t:"咪咪咪咪咪咪咪", cover:"images/replays/r015.jpg",
   y:2026, mo:9, d:20, h:0, mi:17, sec:5495, pages:3, tags:"", pin:false},
  {bvid:"BV1wEe86GEfp", t:"咪咪咪咪咪咪咪", cover:"images/replays/r016.jpg",
   y:2026, mo:9, d:19, h:23, mi:58, sec:289, pages:4, tags:"", pin:false},
  {bvid:"BV13me36zEwZ", t:"咪咪咪咪咪咪咪", cover:"images/replays/r017.jpg",
   y:2026, mo:9, d:17, h:21, mi:44, sec:11088, pages:3, tags:"", pin:false},
  {bvid:"BV168eF6pEbq", t:"【歌杂】中午困困！⭐", cover:"images/replays/r018.jpg",
   y:2026, mo:9, d:16, h:13, mi:44, sec:8066, pages:2, tags:"", pin:false},
  {bvid:"BV1GmeV67EQZ", t:"开开心心！⭐", cover:"images/replays/r019.jpg",
   y:2026, mo:9, d:14, h:23, mi:43, sec:9317, pages:2, tags:"", pin:false},
  {bvid:"BV1xGYv6oExy", t:"这是哪!??⭐", cover:"images/replays/r020.jpg",
   y:2026, mo:9, d:13, h:16, mi:30, sec:8599, pages:3, tags:"", pin:false},
  {bvid:"BV1f4Yv67EUZ", t:"美好的下午美好的歌杂⭐", cover:"images/replays/r021.jpg",
   y:2026, mo:9, d:13, h:14, mi:44, sec:7331, pages:2, tags:"", pin:false},
  {bvid:"BV1NbYR6mESt", t:"来捉迷藏吧！⭐", cover:"images/replays/r022.jpg",
   y:2026, mo:9, d:12, h:23, mi:40, sec:9001, pages:2, tags:"", pin:false},
  {bvid:"BV1o8YW61Eyy", t:"来接收午后的信号吧！⭐", cover:"images/replays/r023.jpg",
   y:2026, mo:9, d:9, h:13, mi:45, sec:9957, pages:2, tags:"", pin:false},
  {bvid:"BV1BQb36MEve", t:"来接收午后的信号吧！⭐", cover:"images/replays/r024.jpg",
   y:2026, mo:9, d:8, h:15, mi:52, sec:7365, pages:2, tags:"", pin:false},
  {bvid:"BV1swbV6nEe4", t:"来接收早晨的信号吧！⭐", cover:"images/replays/r025.jpg",
   y:2026, mo:9, d:8, h:11, mi:40, sec:7812, pages:2, tags:"", pin:false},
  {bvid:"BV1eQbT6QEyC", t:"来接收夜晚的信号吧！⭐", cover:"images/replays/r026.jpg",
   y:2026, mo:9, d:7, h:23, mi:39, sec:8475, pages:2, tags:"", pin:false},
  {bvid:"BV1Sobx6cEnB", t:"突突突半小时！", cover:"images/replays/r027.jpg",
   y:2026, mo:9, d:6, h:23, mi:31, sec:4811, pages:1, tags:"", pin:false},
  {bvid:"BV1TXbH6EE1L", t:"突突突半小时！", cover:"images/replays/r028.jpg",
   y:2026, mo:9, d:6, h:16, mi:33, sec:1441, pages:1, tags:"", pin:false},
  {bvid:"BV1udb56AEhd", t:"遇见八尺大人！", cover:"images/replays/r029.jpg",
   y:2026, mo:9, d:5, h:23, mi:39, sec:8798, pages:2, tags:"", pin:false},

];
