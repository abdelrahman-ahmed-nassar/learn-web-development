# useEffect 

execute code when reRender
  depending on some condition and state change 

### import 
import {useState} from "react";

### Configure

receive 2 parameters
1- function to be executed 
2- dependencies array 

useEffect(() => {

}, [])

### WHEN IT WILL BE EXECUTED 

**CASES:**
- No dependencies =>  every time the cmp render (every state update)
- EMPTY dependencies array => The first time the component render
- Array of dependencies => When one of the dependencies has changed 

don't include non changing states or code in the dependencies array
instead include changeable props and states

**Examples:**
- fetch data from api
- validate form
- use local storage

### CLEAN UP FUNCTION 
`
you return a function in the end of the useEffect function

it will execute
- second time render 
- before the code in the useEffect function 


- controlled components 
  using state
-  Uncontrolled components 
  using refs 

use clean up function with AbortController
to prevent race conditions

or to clean the event listener 


### use async await inside the useEffect 


don't make the useEffect function async 

instead put the async code in a separate function 

then execute it by wrapping it call inside a try and catch 

don't wrap the function code, else wrap the function execution 

### Error handling

use try & catch to handle error
- internet error
- no data error
- special cases

## local storage

- in event handle or effect
- stringify value using JSON.stringify() 