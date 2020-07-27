// console.log('hello libjs')
// exports.hello = 'world'
// exports.add = function(){
//   return a + b
// }
// exports.geekabang = {bang: 'world'}
// setTimeout(() => {
//   console.log(exports)
// }, 2000)

module.exports = function(playerAction) {
  var random = Math.random() * 3  //电脑随机出法
  if (random < 1) {
    var computerAction = 'rock'
  } else if (random > 2) {
    var computerAction = 'scissor'
  } else {
    var computerAction = 'paper'
  }
  console.log(computerAction)

  // 玩家电脑比较
  if (computerAction === playerAction) {
    console.log('平局')
    return 0
  } else if (
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor')
  ) {
    console.log('你赢了')
    return -1
  } else {
    console.log('你输了')
    return 1
  }
}
