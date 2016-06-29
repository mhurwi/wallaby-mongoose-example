const expect = require('chai').expect;
const Widget = require('./widget');

describe('widget', () => {
  it('can foo', () => {
	const widget = new Widget();
	console.log(widget.foo())
	expect(widget.foo()).to.equal('bar')
  });
});
