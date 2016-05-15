import React from 'react';

export default class VotingApp extends React.Component {

    render() {
        return (
        <div>
            {
            this.props.winner ? 
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>
        );
    }
}