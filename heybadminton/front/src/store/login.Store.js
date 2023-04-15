// 登录模块
import { makeAutoObservable } from "mobx"
import { setToken, getToken, clearToken, http } from '@/utils'

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ username, password, remember }) => {
    const res = await http.post('/auth/login', {
      username: username,
      password: password,
      isRemembered: remember ? 1 : 0
    }, { headers: { 'content-type': 'multipart/form-data' } })
    this.token = res.data.data
    // 还有这里哦！！
    setToken(res.data.data)
  }
}
export default LoginStore