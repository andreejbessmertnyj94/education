class TokenService {
  constructor() {
    this.subscribers = [];
    this.token = null;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return this;
  }

  setToken(token) {
    this.token = token;
    this.subscribers.forEach(function (fn) {
      fn(token);
    });

    return this;
  }

  removeToken() {
    this.token = null;
    this.subscribers.forEach(function (fn) {
      fn(null);
    });

    return this;
  }

  getToken() {
    return this.token;
  }
}

window.TokenService = TokenService;

export default TokenService;
