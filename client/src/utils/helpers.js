export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toString(string) {
  return string.replace(/\\r\\n/g, "<br/>").slice(1, -1);
}
