import {requestGet,requestDelete,requestPost,requestPatch,requestPut} from '../utils/request';

// export function requestGet(url, body) {
//   return request(url, { method: "GET", body })
// }
// export function requestDelete(url) {
//   return request(url, { method: "DELETE" })
// }
// export function requestPost(url, body) {
//   console.log("url-------------", url)
//   return request(url, { method: "POST", body })
// }
// export function requestPatch(url, body) {
//   return request(url, { method: "PATCH", body })
// }
// export function requestPut(url, body) {
//   return request(url, { method: "PUT", body })
// }
// // 注册mock接口
export function getData(params) {
  console.log(1111)
  return requestGet('/api/getData',params)
}
export function postData(params) {
  // console.log(1111)
  return requestPost('/api/postData',params)
}
