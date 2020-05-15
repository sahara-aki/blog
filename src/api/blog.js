import request from '../utils/request'

/**
 * 获取文章详情
 * @param { Int } id
 * @returns {Promise<Response>}
 */
export function getArticleDetail(params) {
  return request('/api/blog/getArticleDetail', {
    method: 'POST',
    body: params,
  })
}

/**
 * 获取全部标签
 * @returns {Promise<Response>}
 */
export function getAllTags(params) {
  return request('/api/blog/getTags', {
    method: 'POST',
  })
}

/**
 * 获取topList列表
 * @returns {Promise<Response>}
 */
export function getTopList(params) {
  return request('/api/blog/getTopList', {
    method: 'POST',
  })
}
