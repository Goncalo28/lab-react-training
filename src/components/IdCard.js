import React from 'react'

class IdCard extends React.Component {
    // state = { 
    //     lastName: this.props.lastName,
    //     firstName: this.props.firstName,
    //     gender: this.props.gender,
    //     height: this.props.height,
    //     birth: this.props.birth.toDateString(),
    //     picture: this.props.picture
    //  }
    render() {
        return (
            <div>
                <img src={this.props.picture} alt="profile-pic"/>
                <div>
                    <p>First Name: {this.props.firstName}</p>
                    <p>Last Name: {this.props.lastName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Birth: {this.props.birth.toDateString()}</p>
                </div>
            </div>
        );
    }
}

export default IdCard;