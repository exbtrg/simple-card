export default function (id, arr) {
  return arr.filter(({ groupId }) => groupId === Number(id))
}
