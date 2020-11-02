async function xhrGet(url) {
  return new Promise((resolve, reject) => {
    const oReq = new XMLHttpRequest();
    oReq.open("GET", url);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.responseType = "json";
    oReq.send();

    oReq.onreadystatechange = function () {
      if (oReq.readyState === XMLHttpRequest.DONE) {
        const status = oReq.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          resolve(oReq.response);
        } else {
          reject(oReq.response); // текст ошибки в response
        }
      }
    };
  });
}

window.xhrGet = xhrGet;

export default xhrGet;
