function searchString(obj) {
  const exceptions = [null, undefined, ''];
  // return '?' + Object.keys(obj).map((cur) => (!exceptions.includes(obj[cur]) && `${cur}=${obj[cur]}`) || '')
  //     .filter(i => i !== '').join('&')
  let query = [];
  let key;
  for (key in obj) {
    if (!(exceptions.includes(obj[key]))) {
      query.push(`${key}=${obj[key]}`);
    }
  }
  if (query.length > 0) {
    return '?' + query.join('&')
  }
  return ''
}

window.searchString = searchString;

export default searchString;
