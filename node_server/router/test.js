const express = require('express')
const app = new express()
const axios = require('axios')

let url = 'http://211.160.62.32:28620/osg-sfan0006/member/c15/f01'
app.get('/test',(req,res)=>{
        axios.post(url,{
        DisplayStart:1,
        iDisplayLength:10
      }).then(res=>{
        response.send(res)
      })
   
})
