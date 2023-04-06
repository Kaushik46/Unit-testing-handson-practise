import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import {spy} from 'sinon';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('Should check header text of loan emi ', async  () => {
    const el = await fixture(html`<loanemi-details></loanemi-details> `);
    const myvalue = el.shadowRoot.querySelector('h2').innerHTML;
    expect(myvalue).to.equal('EMI Details');
  })
  it('Should call the function _toBasicDetails once and call count should be one', async  () => {
    const el = await fixture(html`<loanemi-details></loanemi-details> `);
    const myspy = spy(el, '_toBasicDetails');
    el._toBasicDetails();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Should call the function _toCustomer once and call count should be one ', async  () => {
    const el = await fixture(html`<loanemi-details></loanemi-details> `);
    const myspy = spy(el, '_toCustomer');
    el._toCustomer();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});
