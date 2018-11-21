export function parse(tags: string): string[] {
  return tags
    .toLowerCase()
    .split(/[\s,;\/]+/)
    .filter(c => !!c)
}
