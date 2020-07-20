import React from "react";
import { render, fireEvent, waitFor, screen, getByTestId, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
});

test("form shows success message on submit with form details", () => {
    const {getByTestId, getByRole} = render(<CheckoutForm />);

    const firstName = getByTestId('firstName');
    fireEvent.change(firstName, {
        target: {value: 'Nico'}
    })

    expect(firstName).toHaveValue('Nico');

    const lastName = getByTestId('lastName');
    fireEvent.change(lastName, {
        target: {value: 'Chikuji'}
    })

    const address = getByTestId('address');
    fireEvent.change(lastName, {
        target: {value: '9553 W 125 St'}
    })

    const city = getByTestId('city');
    fireEvent.change(city, {
        target: {value: 'Miami'}
    })

    const state = getByTestId('state');
    fireEvent.change(state, {
        target: {value: 'Florida'}
    })

    const zipCode = getByTestId('zipCode');
    fireEvent.change(zipCode, {
        target: {value: '33176'}
    })

    const button = getByTestId('checkoutButton');
    fireEvent.click(button);

    const successMessageTest = getByTestId('successMessage')
    expect(successMessageTest).toHaveTextContent(`${city.value}, ${state.value}`)
});