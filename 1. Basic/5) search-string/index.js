function searchString(obj) {
  let query = '', exceptions = [null, undefined, ''], key;
  for (key in obj) {
    if (!(exceptions.includes(key)) && !(exceptions.includes(obj[key]))) {
      query += `${key}=${obj[key]}&`;
    }
  }
  if (query) {
    query = query.slice(0, -1);
    return '?' + query
  }
  return query
}

window.searchString = searchString;

export default searchString;
