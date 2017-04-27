# RED IT
## April 11th, 2017
This is the initial start for the RED IT project for our first project for App Dev at RED. 
* This project is built using React library.
* We've started by breaking down the component hierarchy.
* The virtual Dom is a lightweight copy of the HTML DOM. This lets React to do all its computations within this virtual space. This makes preformace higher and faster on multipul browsers.
* React holds a class called component which we use by extending and applying that class to our new class created.
* learned how to make conponents using JSX to make it simpler.
* We learned how to use props to apply arbitrary inputs to define how the they should appear on screen.
* We used ```.map``` to makea copy of the array where we can do add changes to the array.
* Proptypes are used to validate what we're entering in as an input. example if we have a prop that requires us to enterin a string, we can validate that by ```PropTypes.string``` which now defines that 'argument' as a string. We can also make this required by adding a ```.isRequired``` to the proptype which ultimately makes this ```PropTypes.string.isRequired```
* CSS Moduales give each compontent its own indivisual CSS. Each component css is rendered separatly makes generic class names wont pollute the global scope.
<img width="972" alt="screen shot 2017-04-11 at 11 23 27 pm" src="https://cloud.githubusercontent.com/assets/24995518/24944057/380613b6-1f0e-11e7-888e-aecefeb96cb9.png">
