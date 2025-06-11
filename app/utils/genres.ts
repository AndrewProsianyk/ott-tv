export function getGenreIdByKey(list, key) {
  return list.find((genre) => genre.key === key)?.id;
}

export function getGenreIdByName(list, name) {
  return list.find((g) => g.name.toLowerCase() === name.toLowerCase())?.id;
}
