import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body><div></div></body></html>');
const window = doc.defaultView;

global.document = doc;
global.window = window;

Object.keys(window).forEach((key)=>{
    if(!(key in global)) {
        global[key] = window[key];
    }
})
chai.use(chaiImmutable);