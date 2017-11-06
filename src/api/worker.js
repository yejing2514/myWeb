import storage from '../module/storage.js'
import {instance, apiConfig} from 'api/base'

//  初始化Ng 设置token
apiConfig()
// 注销账号
export const logout = function () {
  return instance.get('/worker/logout/')
}

// 修改密码
export const modifyPassword = params => {
  return instance.post('/worker/update_password/', params)
}
// 获得员工信息
export const userInfo = function () {
  return instance.get('/worker/worker/' + storage.getWorkerId('WorkerId'))
}
// 获得主导航员工权限
export const userMainNav = function () {
  return instance.get('/worker/top_nav/')
}
// 获得操作员
export const getPrecinct = params => {
  return instance.get('/worker/queryuser/', {params})
}
// 停用或者启用用户
export const changeUserState = params => {
  return instance.get('/worker/stopuser/', {params})
}
// 得到所有角色操作值
export const getroles = params => {
  return instance.get('/worker/role/', {params})
}
// 得到指定角色操作值
export const getsinglerole = id => {
  return instance.get('/worker/role/' + id + '/')
}
// 新增指定角色
export const addRoles = params => {
  return instance.post('/worker/role/', params)
}
// 修改指定角色
export const editRole = (id, params) => {
  return instance.put('/worker/role/' + id + '/', params)
}
// 删除指定角色
export const deleteRoles = id => {
  return instance.delete('/worker/role/' + id + '/')
}
// 单个员工管理
export const singleWorkerManage = params => {
  return instance.get('/worker/worker/' + params + '/')
}
// 单个角色权限得到
export const rolePromisson = id => {
  return instance.get('/worker/permission/' + id + '/')
}
// 修改指定角色
export const editRolePromisson = (id, params) => {
  return instance.put('/worker/permission/' + id + '/', params)
}
