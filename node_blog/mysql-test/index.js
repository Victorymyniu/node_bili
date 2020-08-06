const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
  host: '10.3.2.36',
  user: 'mysql_databus',
  password: 'bFdY8UYTKjs0AqgEeAqQZBtPni',
  port: '3111',
  database: 'node_blog'
})

// 开始连接
con.connect()

// 执行 sql 语句
// const sql = 'select * from users;'
// const sql = `update users set realname='李四' where username='lisi';`
const sql = `insert into blogs (title,content,createtime,author) values ('标题C','内容C',1596682411459,'NIUNIU');`
con.query(sql,(err,result) => {
  if (err) {
    console.error(err)
  }
  console.log(result)
})

// 关闭连接
con.end()