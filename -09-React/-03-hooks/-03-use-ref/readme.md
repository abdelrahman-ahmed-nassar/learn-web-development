# useRef()

in order to do DOM manipulation without classes or using direct selecting
making the DOM manipulation more declarative

when you want to remember value across rerenders without updating the ui or rerender when they change

### IMPORT

- import {useRef} from "react";

### CONFIGURE

const inputRef = useRef(null);
`<button ref={inputRef}>`

input red is the actual dom node

### ACCESS DATA

inputRef.current.value

### FORWARDING REFS

To use the ref on a custom cmp in a parent file

in the child cmp file

1- import {useImperativeHandle} from "react";

2- call the hook

useImperativeHandle(THE_SECOND_ARG_IN_THE_FUNCTIONAL_CMP (ref), () => {
// all what you return will be the value of current
return {
pointer: FUNCTION_WE_WANT_TO_ACCESS_FROM_OUTSIDE
}
})

3- wrap your child function cmp with React.forwardRef()

### using Ref with Preserved across rerender Variables

variable that doesn't reset with every rerender and when it changes the cmp doesn't rerender

const countRef = useRef(0)

update it in the useEffect like a normal variable


### use cases
- DOM manipulation
- store id of timer to stop it