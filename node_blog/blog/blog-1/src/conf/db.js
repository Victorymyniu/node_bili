const env = process.env.NODE_ENV //环境变量

// 配置
let MYSQL_CONF
if (env === 'dev') {
  MYSQL_CONF = {
    host: '10.3.2.36',
    user: 'mysql_databus',
    password: 'bFdY8UYTKjs0AqgEeAqQZBtPni',
    port: '3111',
    database: 'node_blog'
  }
}
if (env === 'production') {
  MYSQL_CONF = {
    host: '10.3.2.36',
    user: 'mysql_databus',
    password: 'bFdY8UYTKjs0AqgEeAqQZBtPni',
    port: '3111',
    database: 'node_blog'
  }
}

module.exports = {
  MYSQL_CONF
}