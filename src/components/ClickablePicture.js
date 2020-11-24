import React from 'react';

class ClickablePicture extends React.Component {
    state = { 
        img: this.props.img,
    }

    imageHandler = () => {
        this.setState({
            img: this.state.img === this.props.img ? this.props.imgClicked : this.props.img,
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.img} onClick={this.imageHandler} alt='clickable-img'/>
            </div>
        );
    }
}

export default ClickablePicture;