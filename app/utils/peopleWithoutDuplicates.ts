export default function peopleWithoutDuplicates<T extends { id: number }>(
  list: T[]
): T[] {
  const seen = new Set<number>();
  return list.filter((person) => {
    if (seen.has(person.id)) return false;
    seen.add(person.id);
    return true;
  });
}
