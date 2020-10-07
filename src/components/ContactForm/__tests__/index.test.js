import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe ('Contact Form component', () => {

    //baseline test
    it('renders', () => {
        render(<ContactForm />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm />);

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('match Contact Me', ()=> {
    it('inserts text into the links', () => {
        //arrange
        const {getByTestId} = render(<ContactForm />);
        //assert
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
});

describe('match Submit Button', ()=> {
    it('inserts text into the links', () => {
        //arrange
        const {getByTestId} = render(<ContactForm />);
        //assert
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    });
});
