/***********************************

> 应用名称：Bilibili大会员通用破解模板
> 软件版本：7.8.2
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ Bilibili大会员（2022-12-05）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header BilibiliProCrack.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=AE8C133D-D543-67C2-BD59-19F005C56C0225030infoc; buvid4=E17E7EF4-F557-D2C2-221E-969001B7BB4325996-123072101-BNjJZIYJcZUNmaUuUtX2Ng%3D%3D; buvid3=622DA57C-0E95-4EC8-95FB-94A60263691636727infoc; Buvid=Y846F9827D0BD1184F3B8449566E96BCD222; DedeUserID=497332064; DedeUserID__ckMd5=acc3633fe68b5655; SESSDATA=6a9405ed%2C1705424701%2C20c6ce72lq8_TxlJ195kjOznVayhf2FhYwW1pxNzhFuNdSGcrMAgspM_H2VOxE3IckcSKP3FphmWTwAAQAA; bili_jct=974d6b750431c17910bc5543958fb91a; sid=fx8n17pa';
modifiedHeaders['x-bili-device-bin'] = 'CA4QtLXhIRokWTg0NkY5ODI3RDBCRDExODRGM0I4NDQ5NTY2RTk2QkNEMjIyIghpcGhvbmVfaSoDaW9zMgVwaG9uZToFYXBwbGVCBUFwcGxlSglpUGhvbmUgMTNSBjE2LjEuMmoGMy4xNi4wckBBMEM2OEI4MjlDQkE2MkE3MUVDNTQ3OTU1REE0MTQyOTIwMjIwNjI5MTQ0ODU0QzlGMDZCOTc2NDAwREIxNjAweLrltqHUMA==';
modifiedHeaders['Authorization'] = 'identify_v1 c4a5f7ab74964a107ce7a62160e31372lq8_TxlJ195kjOznVayhf2FhYwW1pxNzhFuNdSGcrMAgspM_H2VOxE3IckcSKP3FphmWTwAAQAA';
modifiedHeaders['User-Agent'] = 'bili-inter/70802100 os/ios model/iPhone 13 mobi_app/iphone_i osVer/16.1.2 network/2';
modifiedHeaders['buvid'] = 'Y846F9827D0BD1184F3B8449566E96BCD222';
modifiedHeaders['x-bili-metadata-bin'] = 'CmtjNGE1ZjdhYjc0OTY0YTEwN2NlN2E2MjE2MGUzMTM3MmxxOF9UeGxKMTk1a2pPem5WYXloZjJGaFl3VzFweE56aEZ1TmRTR2NyTUFnc3BNX0gyVk94RTNJY2tjU0tQM0ZwaG1XVHdBQVFBQRIIaXBob25lX2kaBXBob25lILS14SEqBWFwcGxlMiRZODQ2Rjk4MjdEMEJEMTE4NEYzQjg0NDk1NjZFOTZCQ0QyMjI6A2lvcw==';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW50GgJVUw==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CghpcGhvbmVfaRIEcHJvZBoQZmZmZmZmZmZjYWEwNjdhYg==';
modifiedHeaders['x-bili-trace-id'] = 'e4f1e0bbe428a55a5f48bcdc723932d0:5f48bcdc723932d0:0:0';
modifiedHeaders['x-bili-exps-bin'] = 'CgIIAQ==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
$done({'headers': modifiedHeaders});