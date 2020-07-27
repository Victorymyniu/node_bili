let express = require('express')
let app = express()
app.get('/',(req,res)=>res.end('hello world'))
app.listen(3000,()=>console.log('server is running'))