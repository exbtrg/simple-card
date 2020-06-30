const titleValid = (value) => {
  const regexp = /^[A-Za-z0-9.\-~\s]+$/

  if (!regexp.test(value)) {
    return 'Only numbers letters and ".-~"'
  }
}

export default titleValid
