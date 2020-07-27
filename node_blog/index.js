// console.log('hello world!!!')
// console.log(Date)
// console.log(Math)
// console.log(setTimeout)
// console.log(setInterval)

// console.log(__filename)
// console.log(__dirname)
// console.log(process.argv)
// console.log(process)

// 石头剪刀布小游戏
var playerAction = process.argv[process.argv.length - 1] //玩家出法
console.log(playerAction)
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
} else if (
  (computerAction === 'rock' && playerAction === 'paper') ||
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
) {
  console.log('你赢了')
} else {
  console.log('你输了')
}