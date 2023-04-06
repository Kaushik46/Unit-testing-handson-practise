import { html, fixture, expect } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('Should check covert language functionality', async  () => {
    const el = await fixture(html`<loan-header></loan-header> `)
    const myvalue = el.shadowRoot.querySelector('p').textContent;
    expect(myvalue).to.equal('Apply Loan');
  })

  it('Should call the function localeChanged once and call count should be one ', async  () => {
    const el = await fixture(html`<loan-header></loan-header> `)
    const myspy = spy(el, 'localeChanged');
    const dummyFormEvent = { target: { id: 'en-GB' } };
    el.localeChanged(dummyFormEvent);
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});
