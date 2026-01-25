### init



### routing

using routes in the app folder

the convention is to name page files page.js

navigate with pages using the Link Cmp (no refresh)

don't make page cmp server

### layout

make the layout for tha navigation and footer

### hydration error

when the result on the server differ from the client

- wrong html nesting
- window object

### assets

put it in the public file

### project architecture

### Next Optimization

use <Image> cmp

### React Server Components

client cmp will inherit (server client boundary)

### Data Fetching

you fetch data in server component with async await

all components (server and client) pre rerender on the server

### loading indicator

make a file with name "loading.js"

then won't work if javaScript is not enabled in browser

use suspense for a loading in the page it self
