import { mount } from 'enzyme';
import * as React from 'react';
import { XTerm } from '../src';
// Mock 'matchMedia' function to make the test work with jsdom/jest
//   https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(function (query) { return ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }); }),
});
describe('<XTerm />', function () {
    it('should render correctly', function () {
        var wrapper = mount(React.createElement(XTerm, null));
        expect(wrapper.html()).toMatchSnapshot();
    });
});
//# sourceMappingURL=XTerm.test.js.map