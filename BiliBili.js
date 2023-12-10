#!name = Bilibili共享会员
#!desc = 需要启用MitM-over-HTTP/2功能，请严格填写数据，支持iPad端。使用时需启用此插件，禁用则共享会员失效，点击下方链接查看使用说明。
#!openUrl = https://gitlab.com/isous/loonresource/-/blob/main/Document/Bilibili/README.md
#!author = 伟人
#!homepage = https://gitlab.com/isous/loonresource/-/tree/main/Plugin
#!icon = https://gitlab.com/isous/loonresource/-/raw/main/Icon/Bilibili.png
#!date = 2023-12-10 00:40:28
#!input = Bilibili_Authorization
#!input = Bilibili_User-Agent

[Script]
http-request ^https?:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite(\?.+)?$ script-path = https://raw.githubusercontent.com/xingjianbuxi000/person/main/bilibili_data.js, tag = iPhone端共享会员
# http-request ^https?:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.app\.player(unite\.v1\.Player\/PlayViewUnite|online\.v1\.PlayerOnline\/PlayerOnline) script-path = https://raw.githubusercontent.com/xingjianbuxi000/person/main/bilibili_data.js, tag = iPhone端共享会员
http-request ^https?:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.pgc\.gateway\.player\.v2\.PlayURL\/PlayView$ script-path = https://raw.githubusercontent.com/xingjianbuxi000/person/main/bilibili_data.js, tag = iPad端共享会员
  
[Mitm]
hostname = grpc.biliapi.net, app.bilibili.com
