import ContactUs from "../Pages/ContactUs";
import "@testing-library/jest-dom"
import {  render, screen  } from "@testing-library/react";

//const { render, screen } = require("@testing-library/react")

test('Contact Us page is working properly', () => {
    render(<ContactUs/>)

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})