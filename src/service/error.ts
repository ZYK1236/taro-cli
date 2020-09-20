export const logError = (url, err) => {
  console.log(`❌ ❌ ❌${url}接口出错了,错误是${err}`)
  return `❌ ❌ ❌${url}接口出错了,${err}`
}
