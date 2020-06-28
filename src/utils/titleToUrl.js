const titleToUrl = (str, substitute = '-') =>
  str.replace(/\s/g, substitute).toLowerCase()

export default titleToUrl
