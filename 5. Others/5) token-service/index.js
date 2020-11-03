/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  subscribers = [];

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    return this;
  }

  setToken(token) {
    this.subscribers.forEach(function (fn) {
      fn(token);
    });

    return this;
  }

  removeToken() {}

  getToken() {}
}

window.TokenService = TokenService;

export default TokenService;
