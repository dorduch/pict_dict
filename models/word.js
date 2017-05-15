export function createWord(data) {
  const { id, name, image, children } = data;
  return {
    id,
    name,
    image,
    children
  }
}