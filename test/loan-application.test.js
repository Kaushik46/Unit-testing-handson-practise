import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';
import '../src/dashboard/Dashboard.js';
import '../src/dashboard/Dashboard-menu.js';
import Sinon, { stub, spy } from 'sinon';

describe('LoanApplication', () => {
  // Write test cases inside this block

  it('Should call the function __increment once and call count should be one  ', async () => {
    const el = await fixture(html`<loan-application></loan-application> `);
    const myspy = spy(el, '__increment');
    el.__increment();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Should have the constructor values as defined', async () => {
    const el = await fixture(html`<loan-application></loan-application> `)
    expect(el.title).to.equal('Hey there')
    expect(el.counter).to.equal(5)
  })
  it('Should call the function getOverview once and call count should be one ', async () => {
    const el = await fixture(html`<dash-board></dash-board> `);
    const myspy = spy(el, 'getOverview');
    el.getOverview();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Should call the function navigateToDetails once and call count should be one   ', async  () => {
    const el = await fixture(html`<dashboard-menu></dashboard-menu> `);
    const myspy = spy(el, 'navigateToDetails');
    el.navigateToDetails();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Should call the function _setTypeInLS once and call count should be one  ', async () => {
    const el = await fixture(html`<dashboard-menu></dashboard-menu> `);
    const myspy = spy(el, '_setTypeInLS');
    el._setTypeInLS();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});

