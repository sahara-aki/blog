import request from '../utils/request'

/**
 * 获取文章列表
 * @returns {Promise<Response>}
 */
export function getArticleList() {
  return request('/api/blog/articles', {
    method: 'POST',
  })
}
