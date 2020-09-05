import Https from '../service/index'

/**
 * @description在下面定义接口数据类型
 */
interface Data {
  qingyuan: number
  qq: string
}


















/**
 * @description在下面定义接口
 */
export const example = () => {
  return Https.get<Data>('https://xdvolunteer.xyz/interview/status/retest/chec')
}
