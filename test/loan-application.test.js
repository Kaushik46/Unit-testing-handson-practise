import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';
import '../src/dashboard/Dashboard.js';
import '../src/dashboard/Dashboard-menu.js';
import Sinon, { stub, spy } from 'sinon';

describe('LoanApplication', () => {
  // Write test cases inside this block

  it('Spying on function increment  ', async function () {
    const el = await fixture(html`<loan-application></loan-application> `);
    const myspy = spy(el, '__increment');
    el.__increment();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Verifying Constructor Values in loan application', async function () {
    const el = await fixture(html`<loan-application></loan-application> `)
    expect(el.title).to.equal('Hey there')
    expect(el.counter).to.equal(5)
  })
  it('Spying on function getOverview  ', async function () {
    const el = await fixture(html`<dash-board></dash-board> `);
    const myspy = spy(el, 'getOverview');
    el.getOverview();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Spying on function navigate to details   ', async function () {
    const el = await fixture(html`<dashboard-menu></dashboard-menu> `);
    const myspy = spy(el, 'navigateToDetails');
    el.navigateToDetails();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
  it('Spying on function setTypeInLS', async function () {
    const el = await fixture(html`<dashboard-menu></dashboard-menu> `);
    const myspy = spy(el, '_setTypeInLS');
    el._setTypeInLS();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});

