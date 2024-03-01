export const validateEmail = (
  value: string,
  message: string
): boolean | string => {
  if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value)) {
    return true;
  }
  return message;
};
