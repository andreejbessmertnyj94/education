import stringToType from "../../2. Data Types/1) string-to-type/index.js";

function queryToObject(query) {
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
  const objects = query.split("&");
  let result = {};
  let keyValue;
  for (const element of objects) {
    keyValue = element.split("=");
    result[String(keyValue[0])] = stringToType(keyValue[1]);
  }
  return result;
}

window.queryToObject = queryToObject;

export default queryToObject;
