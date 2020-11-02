import stringToType from "../../2. Data Types/1) string-to-type/index.js";

function queryToObject(query) {
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
  return query.split("&").reduce((accumulator, currentValue) => {
    let keyValue = currentValue.split("=");
    accumulator[String(keyValue[0])] = stringToType(keyValue[1]);
    return accumulator;
  }, {});
}

window.queryToObject = queryToObject;

export default queryToObject;
