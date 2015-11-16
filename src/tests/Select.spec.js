require( '../testHelpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

const Select = require('../Select');
const SelectOption = require('../SelectOption');

const expect = Unexpected.clone()
    .use(UnexpectedReact);


describe('Select', () => {

    let component;
    beforeEach(() => {

        const options = [
            { label: 'one', value: 1 },
            { label: 'two', value: 2 },
            { label: 'three', value: 3 }
        ];
        component = TestUtils.renderIntoDocument(<Select options={options} />)
    });

    it('should render a div.Select', () => {

        return expect(component, 'to have rendered', <div className="Select"/>);
    });

    it('should not show any options initially', () => {

        return expect(component, 'not to contain', <SelectOption />);
    });

    it('should show the menu when clicked', () => {

        TestUtils.Simulate.click(ReactDOM.findDOMNode(component));
        return expect(component, 'to have rendered',
            <div>
                <SelectOption />
                <SelectOption />
                <SelectOption />
            </div>);
    });

    it('renders the options', () => {

        TestUtils.Simulate.click(ReactDOM.findDOMNode(component));
        return expect(component, 'to have rendered',
            <div>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </div>);
    });


    it('renders the option with the unique id attribute', () => {

        TestUtils.Simulate.click(ReactDOM.findDOMNode(component));

        return expect(component, 'to contain',
            <li id={ expect.it('to match', /unique_[0-9]+/) }>two</li>
        );
    });

    it('renders a particular option', () => {

        TestUtils.Simulate.click(ReactDOM.findDOMNode(component));

        return expect(component, 'to contain',
            <li>{ expect.it('to match', /th/) }</li>
        );
    });

});

