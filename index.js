import {
  NativeModules,
  Platform,
} from  'react-native';

// 平台的类型
//   - QQ QQ
//   - QZONE QQ空间
//   - WEIXIN 微信
//   - WEIXIN_CIRCLE 朋友圈
//   - SINA 新浪微博
//
// 操作返回值
// -1 失败 FAILED
// 0 取消 CANCEL
// 1 成功 SUCCESS
//
// 授权基本信息
//  - name 昵称
//  - gender 性别
//  - icon 用户头像
//  - uid QQ、Sina （微信的unionid）
//  - openid 微信


// if( Platform.OS === 'android'){
// 	NativeModules.UShare.QQ="QQ";
// 	NativeModules.UShare.QZONE="QZONE";
// 	NativeModules.UShare.WEIXIN="WEIXIN";
// 	NativeModules.UShare.WEIXIN_CIRCLE="WEIXIN_CIRCLE";
// 	NativeModules.UShare.SINA="SINA";
// 	NativeModules.UShare.ALIPAY="ALIPAY";
// 	NativeModules.UShare.SMS="SMS";
// 	NativeModules.UShare.EMAIL="EMAIL";

// 	NativeModules.UShare.FAILED="-1";
// 	NativeModules.UShare.CANCEL="-1";
// 	NativeModules.UShare.SUCCESS="1"
// }

module.exports = NativeModules.UShare;
