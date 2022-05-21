import jwt from "jwt-decode";


export default class SwapiService {

    _apiBase = 'http://localhost:8001/api';

    getResourceByPost = async (url, payload, jwtToken) => {
        const res = await this.postResource(url, payload, jwtToken);
        if (res.status === 403 ||
            res.status === 401) {
            throw new Error('Redirect to login')
        }
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    };

    getResourceByPut = async (url, payload, jwtToken) => {
        const res = await this.putResource(url, payload, jwtToken);
        if (res.status === 403 ||
            res.status === 401) {
            throw new Error('Redirect to login')
        }
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    };

    async postResource(url, payload, jwtToken) {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify(payload)
            });
        return res;
    }

    async putResource(url, payload, jwtToken) {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify(payload)
            });
        return res;
    }

    async postResourceNoAuth(url, payload) {
        console.log(payload)
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(payload)
            });
        return res;
    }

    getResourceByGet = async (url, jwtToken) => {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${jwtToken}`
                }
            });
        if (res.status === 403 ||
            res.status === 401) {
            throw new Error('Redirect to login')
        }
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    };

    login = async (payload) => {
        return await this.getResourceByPost(`/clients/login/`, payload);
    };

    register = async (payload) => {
        return await this.postResourceNoAuth(`/clients/`, payload);
    };

    updateClient = async (payload, jwtToken) => {
        const {clientId} = jwt(jwtToken);
        payload.id = clientId;
        return await this.putResource(`/clients/${clientId}`, payload, jwtToken);
    };

    getClient = async (jwtToken) => {
        const {clientId} = jwt(jwtToken);
        const client = await this.getResourceByGet(`/clients/${clientId}`, jwtToken);
        return client;
    };

    getTariffs = async (jwtToken) => {
        const res = await this.getResourceByGet(`/tariffs/`, jwtToken);
        return res;
    };
    getPayments = async (accountId, jwtToken) => {
        const res = await this.getResourceByGet(`/payments?accountId=${accountId}`, jwtToken);
        return res;
    };

    getAccount = async (jwtToken) => {
        return await this.getResourceByGet(`/accounts`, jwtToken );
    };

    addPayment = async (payment, jwtToken) => {
        console.log(payment)
        return await this.getResourceByPost(`/payments/`, payment, jwtToken);
    };

    createAccount = async (payload) => {
        const res = await this.postResourceNoAuth(`/accounts/`, payload);
        return res;
    };


    updateAccount = async (jwtToken, payload) => {
        const res = await this.getResourceByPut(`/accounts/${payload.id}`, payload, jwtToken);
        return res;
    };

    async findByLogin(login){
        return await this.postResourceNoAuth(`/clients/findByLogin/`, {"login": login});
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
