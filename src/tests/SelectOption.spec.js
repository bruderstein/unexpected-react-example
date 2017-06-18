/*
 * These tests use the shallow renderer, which is faster and doesn't require an emulated DOM
 */

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var TestUtils = require('react-test-renderer/shallow');

const SelectOption = require('../SelectOption');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

// This test is optional, but allows you to easily check that everything has been required in the correct order
describe('React', () => {
    it('should have been injected', () => {
        expect(React, 'to have been injected');
    });
});

describe('SelectOption', () => {

    let renderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<SelectOption label="foo" />);
    });

    it('renders the li with the content', () => {
        // The extra id attribute will be ignored by the test - here the point is to test the child text is correct
        return expect(renderer, 'to have rendered', <li>foo</li>);
    });

    it('renders the li with the unique id attribute', () => {
        // The "extra child" node of the label will be ignored - here the point is to test the attribute is correct
        // Here we're using an inline assertion to match against a regex
        return expect(renderer, 'to have rendered', <li id={ expect.it('to match', /unique_[0-9]+/)} />);
    });
});
