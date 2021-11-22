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
