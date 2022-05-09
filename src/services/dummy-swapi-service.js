export default class DummySwapiService {

  _people = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

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

  getAllPeople = async () => {
    return this._people;
  };

  async getClient(id, jwt) {
    return this._client;
  };

}
