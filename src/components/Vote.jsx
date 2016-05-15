import React from 'react';

export default class Vote extends React.Component {
    
    render() {
        const pair = this.props.pair;
        const buttons = pair.map(item => {
            return (
                <button key={item} onClick={()=>this.props.vote(item)}>
                    <h1>{item}</h1>
                </button>
            );
        });
        return (
            <div>
                {buttons}
            </div>
        );
    }
};

//export default Voting;