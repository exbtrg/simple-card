const titleAvailable = (groups) => (value) => {
  const groupTitles = groups.map(({ title }) => title)
  if (~groupTitles.indexOf(value)) {
    return 'Title taken!'
  }
}

export default titleAvailable
