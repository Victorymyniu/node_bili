const { exec } = require('../db/mysql')

const getList = (author,keyword) => {
  let sql = `select * from blogs where 1=1 `
  //SQL语句加上where 1=1，为了满足多条件查询页面中不确定的各种因素而采用的一种构造一条正确能运行的动态SQL语句的一种方法。
  //包含以下两种情境：动态SQL拼接 和 查询表结构
  //为了防止sql语句结构不当,或为获取逻辑值"True"
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  // 返回 promise
  return exec(sql)
}

const getDetail = (id) => {
  // 先返回假数据
  return {
    id:1,
    title:'标题A',
    content:'内容A',
    createTime: 15154433232,
    author:'zhansan'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象 包含title content 属性
  console.log('newBlog', blogData)
  return {
    id: 3 // 表示新建博客，插入到数据表里面的id
  }
}

const updateBlog = (id, blogData = {}) => {
  // id 是要更新博客的id
  // blogData 是一个博客对象 包含title content 属性
  console.log('updateBlog',id,blogData)
  return true
}

const delBlog = (id) => {
  // id 就是要删除博客的id
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}