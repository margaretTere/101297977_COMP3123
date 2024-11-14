import React, {Component} from "react";


class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: this.props.person
        };
    }

    render() {
        return (
            <div className="card" style={{width: '60rem', display: 'flex', flexDirection: 'row'}}>
                <div><img src={this.state.person.picture.large} className="card-img-left" alt="card"
                style={{marginTop: 20, marginLeft: 20}}
                ></img></div>
                <div className="card-body" style={{flex: 1}}>
                    <h5 className="card-title">{this.state.person.login.username}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-primary"><strong>Username:</strong> {this.state.person.login.username}</li>
                    <li className="list-group-item list-group-item-secondary"><strong>Gender:</strong> {this.state.person.gender}</li>
                    <li className="list-group-item list-group-item-primary"><strong>Location: </strong>{this.state.person.location.timezone.description}</li>
                    <li className="list-group-item list-group-item-secondary"><strong>Email: </strong>{this.state.person.email}</li>
                    <li className="list-group-item list-group-item-primary"><strong>Date: </strong>{this.state.person.dob.date} ({this.state.person.dob.age})</li>
                    <li className="list-group-item list-group-item-secondary"><strong>Phone: </strong>{this.state.person.phone}</li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Card;