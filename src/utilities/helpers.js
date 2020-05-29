export const normalizeSanityData = list => {
  return list.map(item => ({
    node: {
      ...item,
    },
  }))
}
