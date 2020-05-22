import request from '../utils/request'

/**
 * 获取音乐列表
 * @returns {Promise<Response>}
 */
export function getFavoriteMusicList() {
  return request('/api/music/getFavoriteMusicList', {
    method: 'POST',
  })
}
/**
 * 获取音乐歌词
 * @param { Int } id
 * @returns {Promise<Response>}
 */
export function getMusicLyricById(params) {
  return request('/lyric', {
    method: 'POST',
    body:params
  },"http://music.acglouvre.art")
}
