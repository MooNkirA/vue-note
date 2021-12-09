// 导入第三方时间工具包
import dayjs from 'dayjs'

/**
 * 过滤器1
 */
export function filterA(val, arg1, arg2) {
  return [val, arg1, arg2, 'filterA'].join(' | ')
}

/**
 * 过滤器2
 */
export function filterB(val) {
  return val + ' | filterB'
}

/**
 * 过滤器3
 */
export function filterC(val) {
  return val + ' | filterC'
}

/**
 * 时间格式化过滤器
 * @param {String|Object} time 待格式化的时间
 * @param {String} template 格式模板
 * @returns
 */
export function dateFormater(time, template = 'YYYY-MM-DD HH:mm:ss') {
  /* 
  直接调用 dayjs() 得到的是当前时间
  dayjs(给定的日期时间) 得到指定的日期
  */
  // 1. 根据 template 模板，对 time 字符串进行格式化处理
  const dtStr = dayjs(time).format(template)
  // 2. 返回格式化后结果
  return dtStr
}
