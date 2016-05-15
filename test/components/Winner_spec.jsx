import {expect} from 'chai';
import {renderIntoDocument,
scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import Winner from '../../src/components/Winner';
import React from 'react';


describe('Winner', ()=> {
    it('Display winner', ()=> {
        const winnerComp = renderIntoDocument(<Winner winner='Sarkar' />);
        const label = scryRenderedDOMComponentsWithTag(winnerComp, 'label');
        //console.log(label);
        // expect(label.textContent).to.equal('The Winner is Sarkar');
        
    })
})