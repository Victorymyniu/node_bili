// console.log('start require')
// var lib = require('./lib.js')
// console.log('end require', lib)
// lib.additional = 'test'
// 石头剪刀布小游戏
var playerAction = process.argv[process.argv.length - 1] //玩家出法
const game = require('./lib')
// console.log(game)
// const result = game(playerAction)
// console.log(result)

// 进程
let count = 0
process.stdin.on('data', e=>{
  const playerAction = e.toString().trim()
  // console.log(playerAction)
  const result = game(playerAction)
  console.log(result)
  if (result == -1) {
    count++
  }
  if (count === 3) {
    console.log("你太厉害了，我不玩了")
    process.exit() //进程杀掉
  }
})