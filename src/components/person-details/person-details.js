import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        data: null,
        hasError: false
    };

    onError = () => {
        this.setState({
            hasError: true
        })
    };

    componentDidMount() {
        this.swapiService.getClient(2)
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
                console.log(data.name)
            }).catch(this.onError);
    }


    render() {
        const {hasError, data} = this.state;
        if(hasError){
            return <ErrorIndicator/>
        }
        if (!data) {
            return<Spinner/>;
        }

        return (

            <div className="person-details card">


                <div className="card-body">
                    <h4>{data.name}</h4>
                    <h4>{data.surename}</h4>
                    <h4>{data.middlename}</h4>
                    <h4>{data.adress}</h4>
                    <h4>{data.email}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Name</span>
                            <span>{data.name}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
