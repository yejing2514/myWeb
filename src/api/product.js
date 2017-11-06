import {instance, apiConfig} from 'api/base'

//  初始化Ng 设置token
apiConfig()
// 得到产品列表
export const getproducts = params => {
  return instance.get('/shendai/product/', {params})
}
