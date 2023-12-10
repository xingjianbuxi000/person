/*
脚本作者：佚名
脚本日期：2023-11-18 19:15:01
引用地址：
*/
var headers = $request['headers'];
delete headers["Authorization"];
delete headers["User-Agent"];
// headers['buvid'] = $persistentStore.read("Bilibili_buvid");
headers['authorization'] = $persistentStore.read("identify_v1 c4a5f7ab74964a107ce7a62160e31372lq8_TxlJ195kjOznVayhf2FhYwW1pxNzhFuNdSGcrMAgspM_H2VOxE3IckcSKP3FphmWTwAAQAA");
headers['user-agent'] = $persistentStore.read("bili-inter/70802100 os/ios model/iPhone 13 mobi_app/iphone_i osVer/16.1.2 network/2");
$done({ 'headers': headers });