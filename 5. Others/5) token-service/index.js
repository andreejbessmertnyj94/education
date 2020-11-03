/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  subscribers = { defaultSubscriber: [] };
  currentSubscriber = "defaultSubscriber";

  subscribe(subscriber) {
    if (!Object.keys(this.subscribers).includes(subscriber)) {
      this.subscribers[subscriber] = [];
    }
    this.currentSubscriber = subscriber;
  }

  setToken(token) {
    this.subscribers[this.currentSubscriber].push(token);
  }

  removeToken() {
    this.subscribers[this.currentSubscriber].pop();
  }

  getToken() {
    if (this.subscribers[this.currentSubscriber].length) {
      return this.subscribers[this.currentSubscriber][0];
    }
    return null;
  }
}

window.TokenService = TokenService;

export default TokenService;
