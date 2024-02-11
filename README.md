// browserlist added in package.json

//!!!The purpose of package-lock.json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments. It also helps to prevent issues with installing different package versions, which can lead to conflicts and errors.It records the exact version of every installed dependency, including its sub-dependencies and their versions.


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I am Saikat Ghosh"),
//         React.createElement("h2",{},"I came here to learn React")]
//     )
// )
// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)

//! JSX - is not a part of React, but it makes easy our development styles. JSX is a xml or html like syntax but it's not html or xml. And JSX also give output as Object just like React.createElement() but JSX is not a valid javascript, browser or JS Engine can't understand this code, parcel*(manager) more specific babel trasplied this code to React.createElement() which is understandable by JS Engine.

//React Element

// const jsxheading = <h1 id="heading">Namaste React</h1>
//console.log(jsxheading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxheading)

//React Component (ClassBased and Functional Components)
//?React Functional Components

// const Heading = ()=> {
//     return(<h2>Namaste React is here with JSX</h2>)
// }

//! Component Composition (Component Nesting)
/*const Subheading = ()=> (
    <>
    {jsxheading}
    {Heading()}
    <Heading/>
    <Heading></Heading>
    <h4 id="subheading">JSX</h4>
    <h6>Component</h6>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Subheading/>)*/

//APP STRUCTURE//

/**
 * Header
 *    Logo
 *    NavBar
 * Body
 *    Search
 *    RestaurantContainer
 *       ResturantCard
 *          -Image
 *          -Name of res, Star Rating, Cuisine, Delivery time
 * Footer
 *    Copyright
 *    Links
 *    Address
 *    Contact
 */

 //*Config Driven UI

 # Setting uo Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest configuration - npx jest --init
 - Install jsdom library - npm install --save-dev jest-environment-jsdom
 - Install npm install --save-dev @babel/preset-react
 - Include @babel/preset-react in bable.config
 - Install @testing-library/jest-dom