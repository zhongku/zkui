// /**
//  * 配置编译环境和线上环境之间的切换
//  *
//  * baseUrl: 域名地址
//  * routerMode: 路由模式
//  * imgurl: 图片所在域名地址
//  *
//  *
//  */

// 项目ID，秘钥，与项目当中的秘钥相同，千万不能泄露，否则会可能会导致数据泄露

const key = '5C017EC7FF0045D1B8B00076067D3B3B'
const projectId = 'B93900E2-26AD-4AE0-BC3F-E639C2D482A0'

let baseUrl

let routerMode = 'history'

if (process.env.NODE_ENV === 'development') {

   baseUrl = 'http://139.159.243.8:8001'

  //baseUrl = 'http://localhost:9011'


} else {
  baseUrl = 'http://139.159.243.8:8001'
}
export {
  baseUrl,
  routerMode,
  key,
  projectId
}

