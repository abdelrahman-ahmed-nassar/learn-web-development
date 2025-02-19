## HOW TO USE

### import

import {useState} from "react";

### Configure

const [STATE_NAME, STATE_CONSTRUCTOR_FUNCTION] = useState(INITIAL_VALUE);

--> one state per instance (not for the whole component)

- if init state from props (state won't change when the prop change)

### init value with call back function

if you want to init it from local storage
what the call back function will return will be the init value

this callback function must be pure and not accept args

### use the state

console.log(STATE_NAME)

### CHANGE THE STATE [mutate the original value]

STATE_CONSTRUCTOR_FUNCTION(NEW_STATE_VALUE)

We don't reassign manually !! (will work with objects mutation (Bad Practise))

--> use the setter function
  [1] update the value
  [2] refresh the component

### CHANGE THE STATE DEPEND ON OLD STATE

state change async (batching state changes)
so state will be staled

STATE_CONSTRUCTOR_FUNCTION(previousState => {
return previousState++;
})


* update array => map
* delete item of array => filter
* add item to array => [item, ...arr]

### CHANGING STATE EFFECT ON THE COMPONENT

when ever the state updates the cmp will rerender

### USING MULTIPLE STATES

you can just have more than one state normally
const [STATE_NAME_1, STATE_CONSTRUCTOR_FUNCTION_1] = useState(INITIAL_VALUE);
const [STATE_NAME_2, STATE_CONSTRUCTOR_FUNCTION_2] = useState(INITIAL_VALUE);
const [STATE_NAME_3, STATE_CONSTRUCTOR_FUNCTION_3] = useState(INITIAL_VALUE);

### USING ONE STATE INSTEAD

const [STATE_NAME, STATE_CONSTRUCTOR_FUNCTION] = useState({
STATE_NAME_1: INITIAL_VALUE,
STATE_NAME_2: INITIAL_VALUE,
STATE_NAME_3: INITIAL_VALUE,
});

### UPDATE THE ONE STATE

STATE_CONSTRUCTOR_FUNCTION((previous) => {
...previous,
STATE_NAME_2: NEW_VALUE
})

### PASSING STATE DOWN

using the a property on the child cmp in the parent cmp file attached to the value
access this value in the child cmp file using props

### PASSING STATE UP

by passing function that take the value as an argument

### TWO WAY BINDING

const [enteredText, setEnteredText] = useState("");

const inputChangeHandler = (event) => {
setEnteredText(event.target.value);
}

`<input onChange={inputChangeHandler} value={enteredText}></input>`

### controlled vs uncontrolled components

-- uncontrolled component (stateless)
  when the state is hard coded and stored in the dom

-- controlled component (state full)
  control the state using props or useState
    steps : 
      1. use state
      2. set value of the input to the state
      3. listen for the change and update the state

## deriving state
when piece of state depends on another
just store it in normal variables

## Theory

state ONLY reset when the component unmounting (cmp disapper completly from the view)
each cmp manage its own state

