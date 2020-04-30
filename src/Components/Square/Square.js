import React from 'react';
import './Square.css';
class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        alert(this.props.value)
    }

    render() {
        return (
            <button className="square" onClick={this.handleClick.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default  Square;