export const fixQuotedValues = (value: string) => {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.substring(1, value.length - 1);
  }
  return value;
};
