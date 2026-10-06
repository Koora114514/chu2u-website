/* ============================================================
   羽啾碎碎念！（notes.html）页面配置 —— 由 维护\猫猫管理\「💬 碎碎念」页维护
   ============================================================
   字段说明：
     heroSub    栏目介绍（网站大标题下面那段话；\n 换行）
     profName   资料卡名字（留空 = 用 B 站接口抓来的昵称）
     profSign   资料卡签名
     profFans   资料卡粉丝数文字（留空 = 用接口抓来的真实数字，自动拼「粉丝 N」）
     profAvatar 资料卡头像（站内图片路径）
     chatAvatar 动态气泡头像（每一条动态左边那个圆头像）
   改完这个文件记得把 notes.html 里 notescfg.js 的 ?v= 改成「当天+时分」绕缓存 */
window.CHU2U_NOTES_CFG = {
  "heroSub": "这里是羽啾chu2u的动态收录站， B 站动态的每一句话、每张图、每次转发都在这里！！！\n ⭐ 点右侧播放器还能一边听录播一边刷～",
  "profName": "",
  "profSign": "虚拟艺人团体VirtuaReal成员，我们的目标是占领这里！商务合作请联系bd@vrp.live⭐",
  "profFans": "",
  "profAvatar": "images/notes/profile-avatar.png?v=202610061033",
  "chatAvatar": "images/notes/chat-avatar.png?v=202610061033"
};
