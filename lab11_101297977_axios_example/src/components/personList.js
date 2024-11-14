import React, { Component } from 'react';
import axios from 'axios';
import Card from './card';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
               // console.log(res.data);  
                const persons = res.data.results;
                this.setState({ persons });
                console.log(persons[0]);
            });
    }

    render() {
        return (
            <div className='container mt-5'>
                    <ul>
                        {this.state.persons.map((person, index) => (
                            <li key={index}>
                                <Card person={person}/>
                            </li>
                        ))}
                    </ul>
            </div>
        );
    }
}

export default PersonList;
