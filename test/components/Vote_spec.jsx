import React from 'react';
import Vote from '../../src/components/Vote';
import {renderIntoDocument,
scryRenderedDOMComponentsWithTag,
Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Voting', ()=>{
    it('should have two buttons', ()=> {
        const voting = renderIntoDocument(<Vote pair={['Sarkar','Happy Days']} />);
        const buttons = scryRenderedDOMComponentsWithTag(voting, 'button');
        
        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Sarkar');
        expect(buttons[1].textContent).to.equal('Happy Days');
    });

    it('should set vote entry on click', ()=> {
        let voted;
        const vote = (entry) => voted = entry;
        
        const votingComp = renderIntoDocument(<Vote pair={['Sarkar', 'Happy Days']} vote={vote}/>);
        const buttons = scryRenderedDOMComponentsWithTag(votingComp, 'button');

        Simulate.click(buttons[0]);

        expect(voted).to.equal('Sarkar');
        });
});