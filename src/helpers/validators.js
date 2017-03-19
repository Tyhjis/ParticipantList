
export function isValid(name, email, phone) {
  return !isEmpty(name) && (!isEmpty(email) && hasAtSign(email)) && (!isEmpty(phone) && isNumeric(phone));
}
export function isEmpty(str) {
  return str === "" || str === undefined || str === null;
}

export function isNumeric(str) {
  return /^\d*$/.test(str);
}

export function hasAtSign(str) {
  return /@/g.test(str);
}
