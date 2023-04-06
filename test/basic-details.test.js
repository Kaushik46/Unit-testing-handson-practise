import { html, fixture, expect } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  it('Should have the constructor values as defined ', async () => {
    const el = await fixture(html`<basic-details></basic-details> `)
    expect(el.amount).to.equal(10000)
    expect(el.range).to.equal(2)
    expect(el.emiCalc).to.equal(0)
  })

  it('Should call the function numword once and call count should be one ', async () => {
    const el = await fixture(html`<basic-details></basic-details> `)
    const myspy = spy(el, '_numToWord');
    el._numToWord();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Should call the function _toDashboard once and call count should be one  ', async () => {
    const el = await fixture(html`<basic-details></basic-details> `)
    const myspy = spy(el, '_toDashboard');
    el._toDashboard();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Should call the function _captureDetails once and call count should be one', async () => {
    const el = await fixture(html`<basic-details></basic-details> `)
    const myspy = spy(el, '_captureDetails');
    el._captureDetails();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});
