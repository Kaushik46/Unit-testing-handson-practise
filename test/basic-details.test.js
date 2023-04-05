import { html, fixture, expect } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  it('Checking Constructor Values ', async function () {
    const el = await fixture(html`<basic-details></basic-details> `)
    expect(el.amount).to.equal(10000)
    expect(el.range).to.equal(2)
    expect(el.emiCalc).to.equal(0)
  })

  it('Spying on function numword ', async function () {
    const el = await fixture(html`<basic-details></basic-details> `)
    const myspy = spy(el, '_numToWord');
    el._numToWord();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Spying on function dashboard routing ', async function () {
    const el = await fixture(html`<basic-details></basic-details> `)
    const myspy = spy(el, '_toDashboard');
    el._toDashboard();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Spying on function capture details', async function () {
    const el = await fixture(html`<basic-details></basic-details> `)
    const myspy = spy(el, '_captureDetails');
    el._captureDetails();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});
