const fun = (type) => {
  if (type === 'async') {
    return new Promise((resolve) => {
      resolve(1)
    })
  }
  return 1
}

console.log(fun())           // 1
const a = await fun('async')
console.log(a)
