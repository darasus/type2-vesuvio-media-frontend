export const calcReadTime = text => {
  const wordsPerMinute = 200
  let result

  let textLength = text.split(' ').length
  if (textLength > 0) {
    let value = Math.ceil(textLength / wordsPerMinute)
    result = `${value} min read`
  }
  return result
}
