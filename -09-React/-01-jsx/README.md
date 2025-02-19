# JSX

### FUNCTIONAL COMPONENTS

component in react is just a js function

we use The UpperCase convention in naming the components (functions and files)

JSX is just some javaScript Expression
### STEPS

- create a component [rafce snippet]
- export it as a default export
- import it in other components
- use it

### JSX RULES

you must have one root element per return statement

To wrap multiple line use ()

you cannot use statements in it

make sure to use the right words
    - className
    - htmlFor

### Dynamic data in jsx components

using js variables in jsx use {}

inside these {} you can execute any kind of js expression

1. use && operator as if
    use it with conditions and not (truthy and falsy values)
    if you want if else => use multiple && like when you use mutiple ifs
2. use ternary operator or (nested ternary operator)
4. using multiples returns with if conditions [when entire component conditionally rendered]

### passing data via "props"
use properties on the components jsx

inside the component use this values defined in the attributes
access these values using "props" parameter

will be an object which hold all these data

### Passing data UP


- pass a function from the parent component
- receive this function in the child component
- invoke this function with the data

if you want to pass state via siblings
put the state in the nearest common parent

### using fragment as a wrapper cmp

- import {fragment} from "react; or React.Fragment
- use it as a wrapper cmp 
- if you do want key => use Fragment || if not use <></>

### closer look at ajx
function components in s syntactic sugar for the createElement function
import React from "react"

return React.createElement(
"div",
{},
React.createElement('h2', {}, the content inside the header),
React.createElement(Expense , {items: expenses}, the content inside the custom component),
)

### arguments it receives
[1] the type of the root element
[2] the attributes configuration
[other] list of content inside the root element

### using children
when you want to pass a jsx as a prop (reusability)

<El><span>Inner jsx </span></El>
` return <div>{props.children}</div>`

### HTML VS JSX

htmlFor | for
className | class

### using conditional code

- using ternary operator
- using short circuiting --> && 
- using a variable which will be defined in an outer if statement 

### Prop drilling

when passing a state deeply nested in components tree

solutions
    - component composition (using children prop)
    - OR by passing explicit element prop (not preferred)

## props type check

- type script
- using propType
    import PropTypes from "prop-types";

cmp.propTypes = {
    prop : PropType.number,
    prop : PropType.number.isRequired,
}

## diffing

when change the prop the cmp won't be replaced in the dom and the state will be reserved

solve : use the key prop (key that changes across rerenders) to reset the state when the prop change