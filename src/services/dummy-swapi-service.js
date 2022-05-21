export default class DummySwapiService {

    _client = {
        id: 2,
        name: "Patrik",
        surename: "Collman",
        middlename: "Michailovich",
        address: "Baturina",
        login: "serg",
        phone: "+7910999999",
        email: "patric@yandex.ru"
    }

    _tariffs = [
        {name: "My first tariff", speed: 100, price: 1000},
        {name: "My second tariff", speed: 2000, price: 2000},
        {name: "My third tariff", speed: 9000, price: 3000}
    ];

    getTariffs = async () => {
        return this._tariffs;
    };
    _payments = [
        {
            amount: 100000000,
            payDateTime: "2022-05-11T09:21:03.368Z",
        }
    ];
    _account =
        {
            address: "Vladimirskay oblaststreet Baturina 37",
            balance: 12121,
            status: true,
            tariffname: "Забугорище!!!"
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
            json: this.returnError
        }
    }

    addPayment = async (payment, jwt) => {
        console.log(payment)
        alert(payment)
    };

    getPayments = async (jwt) => {
        return this._payments;
    };

    async getClient(id, jwt) {
        return this._client;
    };

}
