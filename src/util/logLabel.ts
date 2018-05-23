export default () => {
  const date = new Date();
  return `\n|${date.getUTCFullYear()}-${date.getUTCMonth()}-` +
  `${date.getUTCDate()} | ${date.getUTCHours()}:${date.getUTCMinutes()}:` +
  `${date.getUTCSeconds()}| ==> `;
}
