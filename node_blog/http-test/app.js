const http = require('http')
//get请求
// const querystring = require('querystring')
// const server = http.createServer((req,res)=>{
//   console.log('method:',req.method) // GET
//   const url = req.url
//   console.log('url:',url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query:',req.query)
//   res.end(
//     JSON.stringify(req.query)
//   )
// })

// post请求
// const server = http.createServer((req,res)=>{
//   if (req.method === 'POST') {
//     // req 数据格式
//     console.log('req content-type:',req.headers['content-type'])
//     // 接受数据
//     let postData = ''
//     // 1.接收参数：参数都是字符串
//     // 在node中允许传递大容量的参数，如果传递的参数较大，那么它支持分批接收参数
//     // 在接收参数的时候，会持续的触发data事件
//     // data事件中有一个回调函数，这个函数的参数就是每次接收到的字符串
//     req.on('data',chunk => {
//       postData += chunk.toString()
//     })
//     // 如果参数接收完毕，会自动的触发end事件
//     req.on('end',()=>{
//       console.log('postData:',postData)
//       res.end(postData)
//     })
//   }
// })

// 获取路由
// const server = http.createServer((req,res)=>{
//   const url = req.url
//   const path = url.split('?')[0]
//   res.end(path) //返回路由
// })

// 综合实例
const querystring = require('querystring')
const server = http.createServer((req,res)=>{
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])
  // 设置返回格式 为 JSON
  res.setHeader('Content-type','application/json')
  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }
  // 返回
  if (method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }
  if (method === 'POST') {
    let postData = ''
    req.on('data',chunk=>{
      postData += chunk.toString()
    })
    req.on('end',()=>{
      resData.postData = postData
      // 返回
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})

server.listen(8000)
console.log('server is ok')