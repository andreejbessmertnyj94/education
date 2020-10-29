function stringToType(str) {
  switch (str) {
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    case 'true':
      return true;
    case 'false':
      return false;
    case '':
      return str;
    default:
      if (isNaN(Number(str))) {
        return str;
      } else {
        return Number(str);
      }
  }
}

window.stringToType = stringToType;

export default stringToType;
