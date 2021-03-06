/*
 * @Author: shilei 
 * @Date: 2020-05-14 13:45:53 
 * @Last Modified by: shilei
 * @Last Modified time: 2020-05-22 16:27:52
 */

import Qs from 'qs';
import { notification } from 'antd'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.warning({
    message: '请求错误',
    description:'服务器错误, 请联系管理员',
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options, host="http://blogapicenter.acglouvre.art") {
  console.log(options)
  url = host + url;
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions,...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData) && !(newOptions.body instanceof URLSearchParams)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = Qs.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        ...newOptions.headers,
      };
    }
  }

  return fetch(url,{
    method:newOptions.method,
    headers:newOptions.headers,
    body:newOptions.body
  })
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    }).then(json => {
      return json
    })
    .catch(e => {
      throw e;
    });
}
