import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub, spy } from 'sinon';
import '../src/Customer/Customer-details.js';


describe('customer details', () => {
  // Write test cases inside this block
  
  it('Should check covert language functionality ', async  () => {
    const el = await fixture(html`<customer-details></customer-details> `);
    const myvalue = el.shadowRoot.querySelector('h2').textContent;
    expect(myvalue).to.equal("Customer Details");
  })

  it('Should call the function _toEmidetails once and call count should be one ', async  () => {
    const el = await fixture(html`<customer-details></customer-details> `);
    const myspy = spy(el, '_toEmidetails');
    el._toEmidetails();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
 
});
