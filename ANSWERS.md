- [ ] Why would you use class component over function components (removing hooks from the question)?
1. Class components are better for container components, while function components are more appropriate for presentational reasons. 
- [ ] Name three lifecycle methods and their purposes.
componentDidMount() - used to detail the behavior when mounting the component
componentDidUpdate() - used to detail the re-render behavior wbhen you update state via props
componentDidUnmount() - used to detail component behavior when you remove/unmount the component. A good example would be enabling animation transition or 'cleaning up' the components on the DOM when it's unmounted. 

- [ ] What is the purpose of a custom hook?
Your custom hook allows you define stateful logic and make it reusable across components. It makes non-visual logic behave like components, sorta (this is my apocryphal understanding of it). 

- [ ] Why is it important to test our apps?
- Because humans are fallible, and that goes for the coder. We often cannot test all edge cases. 
- The bigger a project gets, the larger the scope of possible bugs. Automated testing scales better for these scenarios. 
- Without testing, it becomes difficult to refactor large code without breaking so many things, and if code wasn't tested early on, the technical team can become bogged down by technical debt. 