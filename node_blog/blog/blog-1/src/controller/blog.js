const getList = (author,keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id:1,
      title:'标题A',
      content:'内容A',
      createTime: 15154433232,
      author:'zhansan'
    },
    {
      id:2,
      title:'标题B',
      content:'内容B',
      createTime: 15154433232,
      author:'lisi'
    }
  ]
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
module.exports = {
  getList,
  getDetail,
  newBlog
}