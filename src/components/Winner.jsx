import React from 'react';

export default class Winner extends React.Component {

    render() {
        return (
            <div>
                <label>The Winner is {this.props.winner}</label>
            </div>
        );
    }
}