const { login } = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const handleUserRouter = (req,res) =>{
  const method = req.method // GET POST
  // 登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const {username, password} = req.body
    // const {username, password} = req.query
    const result = login(username,password)
    return result.then(data => {
      if (data.username) {
        // 操作 cookie
        // httpOnly 限制了前端对cookie的修改
        // res.setHeader('Set-Cookie',`username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname
        console.log(req.session,1111)
        return new SuccessModel()
      } else {
        return new ErrorModel('登录失败')
      }
    })
  }

  // 登录验证测试
  // if (method === 'GET' && req.path === '/api/user/login-test') {
  //   if (req.session.username) {
  //     return Promise.resolve(new SuccessModel({
  //       session: req.session
  //     }  
  //     ))
  //   } else {
  //     return Promise.resolve(new ErrorModel('尚未登录'))
  //   }
  // }
}

module.exports = handleUserRouter
