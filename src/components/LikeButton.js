import React from 'react'

class LikeButton extends React.Component {

    state = {
        count: 0,
    }

    countHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.countHandler}>+</button>
            </div>
        );
    }
}

export default LikeButton;