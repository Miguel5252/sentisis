export function formatDate(timestamp: number) {
  const date = new Date(timestamp).toLocaleDateString()
  return date
}
