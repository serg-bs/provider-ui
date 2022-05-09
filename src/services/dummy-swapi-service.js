export default class DummySwapiService {

  _client = {
    "id": 2,
    "name": "Patrik",
    "surename": "Collman",
    "middlename": "Michailovich",
    "address": "Baturina",
    "login": "serg",
    "phone": "+7910999999",
    "email": "patric@yandex.ru"
  }

  _tariffs = [
      { name: "My first tariff", speed: 100, price: 1000},
      { name: "My second tariff", speed: 2000, price: 2000},
      { name: "My third tariff", speed: 9000, price: 3000}
    ];

  getTariffs = async () => {
    return this._tariffs;
  };

  async getClient(id, jwt) {
    return this._client;
  };

}
