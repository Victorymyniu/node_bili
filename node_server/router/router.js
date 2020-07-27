var express = require('express')
var router = express.Router()
const axios = require('axios')

var url = 'http://211.160.62.32:28620/osg-sfan0006/member/c15/f01'
router.get('/',(req, res) => {
  // axios.post(url,{
  //   DisplayStart:1,
  //   iDisplayLength:10
  // }).then(response => {
  //   res.send(JSON.stringify(response))
  // })
  res.send('router 回应')
})
router.get("/one",(req,res)=>{
  res.send("one")
})
router.get("/second",(req,res)=>{
  res.send("second")
})
router.get("/threen",(req,res)=>{
  res.send("threen")
})
module.exports = router