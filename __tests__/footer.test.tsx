import React from 'react';
import { mount } from 'enzyme';
import Footer from '../components/footer';

describe('<Footer />', (): void => {
	let shallowWrapper: any;

	beforeAll((): void => {
		shallowWrapper = mount(<Footer />);
	});

	it('should render footer without exploding', (): void => {
		expect(shallowWrapper.find('footer').exists()).toBe(true);
	});

	describe('Social Icons', (): void => {
		let names: string[] = ['facebook', 'twitter', 'linkedin', 'mail'];

		let component: any;

		let { open, location } = window;

		beforeAll((): void => {
			component = mount(<Footer />);

			delete window.open;
			delete window.location;
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			window.location = {
				href: '',
			};
		});

		afterAll((): void => {
			window.open = open;
			window.location = location;
		});

		it('should render 4 x FontAwesomeIcons (socials)', (): void => {
			expect(component.find('#mock-font-awesome-icon').length).toBe(4);
		});

		it('should render an icon for each social', (): void => {
			names.map((each, i) => {
				const renderedProps: any = component.find('FontAwesomeIcon').at(i).props();
				expect(renderedProps.icon().props.id).toBe(`${each}-icon`);
			});
		});

		it('should click to expected location [fb]', (): void => {
			window.open = jest.fn();
			component.find('FontAwesomeIcon').at(0).simulate('click');
			expect(window.open).toBeCalledWith('https://www.facebook.com/funkTwentySeven'); // Happy happy, joy joy
		});

		it('should click to expected location [twitter]', (): void => {
			window.open = jest.fn();
			component.find('FontAwesomeIcon').at(1).simulate('click');
			expect(window.open).toBeCalledWith('https://www.twitter.com/funkTwentySeven/'); // Happy happy, joy joy
		});

		it('should click to expected location [linkedin]', (): void => {
			window.open = jest.fn();
			component.find('FontAwesomeIcon').at(2).simulate('click');
			expect(window.open).toBeCalledWith('https://www.linkedin.com/company/funk-27'); // Happy happy, joy joy
		});
		it('should click to expected location [email]', (): void => {
			window.open = jest.fn();
			component.find('FontAwesomeIcon').at(3).simulate('click');
			expect(window.location.href).toBe(
				'mailto:adrianThompson19801@gmail.com' + "&subject='email_website_query'"
			);
		});
	});
	describe('Responsiveness', (): void => {
		it('should show all icons if width > 1024', () => {
			
		})
	})
});

// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;
