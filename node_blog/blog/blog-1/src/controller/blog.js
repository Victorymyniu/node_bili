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
  let sql = `select * from blogs where id='${id}'`
  return exec(sql).then((rows) => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象 包含title content 属性
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createtime = Date.now()
  const sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}','${createtime}','${author}')`
  return exec(sql).then((insertData) => {
    // console.log("insertData is:" + insertData)
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  // id 是要更新博客的id
  // blogData 是一个博客对象 包含title content 属性
  const title = blogData.title
  const content = blogData.content
  const sql = `update blogs set title='${title}',content='${content}' where id=${id}`
  return exec(sql).then((updateData) => {
    // console.log("updateData is:" + JSON.stringify(updateData))
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  // id 就是要删除博客的id
  const sql = `delete from blogs where id=${id} and author='${author}';`
  return exec(sql).then((deleteData) => {
    // console.log("deleteData is:" + JSON.stringify(deleteData))
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}