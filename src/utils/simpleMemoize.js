const simpleMemoize = (fn) => {
  let lastArg
  let lastResult
  return (arg) => {
    if (arg !== lastArg) {
      lastArg = arg
      lastResult = fn(arg)
    }
    return lastResult
  }
}

export default simpleMemoize
