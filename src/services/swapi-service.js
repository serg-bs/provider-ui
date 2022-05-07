

export default class SwapiService {

    _apiBase = 'http://localhost:8001/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResourceByPost = async (url, payload) => {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(payload)
            });
        return await res.json();
    };

    login = async (payload) => {
        return await this.getResourceByPost(`/clients/login/`, payload);
    };

    async getAccounts2() {
        const payload = {
            "accountId": 786878
        };
        const accounts = await this.getResourceByPost(`/accounts`, payload);
        console.log(accounts);
        return accounts;
    };

    getAccounts = async (payload2) => {

        const response = await fetch('http://localhost:8001/api/accounts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload2)
        });

        const data = await response.json();
        // enter you logic when the fetch is successful
        console.log(data);
    }


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
