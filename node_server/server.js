// const express = require('express')
// const path = require('path')
// const axios = require('axios')
// const app = new express()
// app.use('',express.static(path.join(__dirname,'./www'))) //设置静态文件目录
// app.get('/tests',(req,res)=>{
//     console.log(req)
//     console.log(res)
//     // const msg = req.query.msg
//     res.send({code:1,msg: 'fsdf'})
// })
// let url = 'http://211.160.62.32:28620/osg-sfan0006/member/c15/f01'

// axios.post(url,{
//     DisplayStart:1,
//     iDisplayLength:10
//   }).then((res)=>{
//       console.log(res)
//   })

// app.listen(8083, () => {
//     // console.log('哈哈' + __dirname)
//     console.log("服务器监听端口8083中......")
// })

const express = require('express')
const path = require('path')
const router = require('./router/router')
const app = express()
// app.use('',express.static(path.join(__dirname,'./www')))
// app.get('/test', (req,res)=>{
//     res.send({code:1,msg:'fdfd'})
// })
// app.get('/home',(req,res) => {
//     res.end('home')
// })
// app.get('/home/one',(req,res) => {
//     res.send('one')
// })
// app.get('/home/second',(req,res) => {
//     res.send('second')
// })
app.use('/home',router)
app.listen(8081,()=>{
    console.log('服务器监听端口8081中......')
})

