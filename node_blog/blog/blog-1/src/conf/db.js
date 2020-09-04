const env = process.env.NODE_ENV //环境变量

// 配置
let MYSQL_CONF
let REDIS_CONF
if (env === 'dev') {
  // mysql
  MYSQL_CONF = {
    host: '10.3.2.36',
    user: 'mysql_databus',
    password: 'bFdY8UYTKjs0AqgEeAqQZBtPni',
    port: '3111',
    database: 'node_blog'
  }
  // redis
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}
if (env === 'production') {
  // mysql
  MYSQL_CONF = {
    host: '10.3.2.36',
    user: 'mysql_databus',
    password: 'bFdY8UYTKjs0AqgEeAqQZBtPni',
    port: '3111',
    database: 'node_blog'
  }
  // redis
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}