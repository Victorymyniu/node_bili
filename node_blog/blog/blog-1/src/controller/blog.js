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

module.exports = {
  getList
}