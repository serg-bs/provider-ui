export default class DummySwapiService {

    _client = {
        id: 1,
        name: "Patrik",
        surename: "Collman",
        middlename: "Michailovich",
        address: "Baturina",
        login: "patric",
        phone: "+7910999999",
        email: "patric@yandex.ru"
    }

    _clients = [{
        id: 2,
        name: "Patrik",
        surename: "Half",
        middlename: "yellow",
        address: "Turkieva",
        login: "Sponge bob",
        phone: "+793875398467",
        email: "SpongeBob@yandex.ru"
    },{
        id: 3,
        name: "Mike",
        surename: "Collman",
        middlename: "Michailovich",
        address: "Baturina",
        login: "patric",
        phone: "+7910999999",
        email: "patric@yandex.ru"
    },{
        id: 3,
        name: "Alex",
        surename: "Col",
        middlename: "Michailovich",
        address: "Bata",
        login: "patic",
        phone: "+7910999999",
        email: "pat@yandex.ru"
    }]

    _tariffs = [
        {id: 1, name: "Забугорище", speed: 100, price: 1000, enabled: true},
        {id: 2,name: "Мой домашний онлайн", speed: 2000, price: 2000, enabled: false},
        {id: 3,name: "Весенний", speed: 9000, price: 3000, enabled: false}
    ];

    getTariffs = async () => {
        return this._tariffs;
    };
    getTariff = async (tariffId, jwtToken) => {
        return this._tariffs[0];
    };

    _payments = [
        {
            amount: 12000,
            payDateTime: "2022-05-21T09:21:03.368Z",
        },
        {
            amount: 10,
            payDateTime: "2022-05-21T09:23:03.368Z",
        }
    ];
    _account =
        {
            address: "Vladimirskay oblaststreet Baturina 37",
            balance: 12010,
            status: true,
            tariffId: 1
        }
    getAccount = async (jwt) => {
        return this._account;
    }

    updateAccount = async (payment, jwt) => {
        return this._payments;
    }

    returnError = async () => {
        return {
            message: "\nPassword не может быть пустым"
        };
    }

    updateClient = async (payment, jwt) => {
        return {
            ok: false,
            status: 400,
            json: this.returnError
        }
    }

    addPayment = async (payment, jwt) => {
        console.log(payment)
    };

    getPayments = async (jwt) => {
        return this._payments;
    };

    async getClient(id, jwt) {
        return this._client;
    };
    async getClients(id, jwt) {
        return this._clients;
    };

}
