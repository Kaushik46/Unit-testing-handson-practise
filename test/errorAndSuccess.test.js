import { html, fixture, expect } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {

  it('Should check loan success screen heading ', async  () => {
    const el = await fixture(html`<loan-success></loan-success> `);
    const myvalue = await el.shadowRoot.querySelector('h2').textContent;
    expect(myvalue).to.equal("!!!");
  })
  it('Should call the function _toHome once and call count should be one', async  () => {
    const el = await fixture(html`<loan-success></loan-success>  `)
    const myspy = spy(el, '_toHome');
    el._toHome();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })

});

describe('error screen', () => {

  it('Should check loan error screen heading', async  () => {
    const el = await fixture(html`<loan-error></loan-error> `);
    const myvalue = await el.shadowRoot.querySelector('h2').textContent;
    expect(myvalue).to.equal("!!");
  })
  it('Should call the function _toHome once and call count should be one ', async  () => {
    const el = await fixture(html`<loan-error></loan-error>   `)
    const myspy = spy(el, '_toHome');
    el._toHome();
    expect(myspy.calledOnce).to.be.true;
    expect(myspy.callCount).to.equal(1);
  })
});
