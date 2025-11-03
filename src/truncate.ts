/**
 * Truncate a string
 * @example
 * truncate('asdf asdf asdf asdf', 4) // => 'asd…'
 * truncate('asdf asdf asdf asdf', 8, ' etc.') // => 'asd etc.'
 */

export const truncate = (
  str: string,
  limit: number,
  tail = '…',
): string =>
  str.length > limit
    ? `${str.slice(0, limit - tail.length)}${tail}`
    : str
