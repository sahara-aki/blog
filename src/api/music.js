import request from '../utils/request'

/**
 * 获取文章列表
 * @returns {Promise<Response>}
 */
export function getFavoriteMusicList() {
  return request('/api/music/getFavoriteMusicList', {
    method: 'POST',
  })
}
