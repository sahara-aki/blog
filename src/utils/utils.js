/**
 * @export 后台返回结果处理
 * @param res 返回值
 * @returns promise对象
 */
export async function result(res){
  return new Promise((resolve, reject) => {
    res && res.status && res.status.code === 0 && resolve();
    res && res.status && res.status.desc ? reject(res.status.desc) : console.log(res);
  });
};