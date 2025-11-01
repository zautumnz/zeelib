/**
 * Trims a string to just caps
 * @example
 * initials('Autumn Z') // => 'AZ'
 */

export const initials = (str: string): string => {
  const a = str.match(/\b([A-Z])/g)
  return a ? a.join('') : str
}
