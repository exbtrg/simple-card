export default function (id, arr) {
  return arr.filter(({ groupUrl }) => groupUrl === id)
}
