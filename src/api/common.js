import {instance, apiConfig} from 'api/base'

//  初始化Ng 设置token
apiConfig()
// 得到基础选项操作值
export const getoptions = function () {
  return instance.get('/shendai/getoptions/')
}
