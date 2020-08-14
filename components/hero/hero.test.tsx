import React from 'react';
import { mount, shallow } from 'enzyme';
import Hero from './index';

describe('<Hero />', (): void => {
	let wrapper: any;

	beforeAll((): void => {

        let mockProps = {
            img: {
                Mobile: {
                    url: 'mock mobile url',
                    alt: 'mock mob alt'
                },
                Tablet: {
                    url: 'mock tablet url',
                    alt: 'mob tablet alt',
                },
                copyright: "copyright",
                dimensions: {
                    width: 300,
                    height: 200,
				},
				alt: "mock desktop alt",
                url: "mock desktop string.jpg",
            },
            heroText: [
                {
                    spans: ['mock spans'],
                    text: "mock title for hero here",
                    type: 'heading1',
                }
            ]
        }
		wrapper = mount(<Hero {...mockProps} />);
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render footer without exploding', (): void => {
		expect(wrapper.find('picture').exists()).toBe(true);
	});

	it('should render an image with mock URL', () => {
		expect(wrapper.find('img').prop('src')).toEqual('mock desktop string.jpg');
	})

	it('should render an image with mock alt tag', () => {
		expect(wrapper.find('img').prop('alt')).toEqual('mock desktop alt');
	});

	it('should render with Mobile image props for Semantic HTML', () => {
		const renderedProps = wrapper.props().img.Mobile;
		expect(renderedProps.url).toEqual('mock mobile url');
	});

	it('should render with Tablet image props for Semantic HTML', () => {
		const renderedProps = wrapper.props().img.Tablet;
		expect(renderedProps.url).toEqual('mock tablet url');
	});

	it('should receive the text tagline for Hero', () => {
		const txt = wrapper.find('h1').text();
		expect(txt).toEqual('mock title for hero here');
	})
});
