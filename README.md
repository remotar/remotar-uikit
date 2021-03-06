# REMOTAR UI-KIT

This is the Remotar UI Kit. It contains all the atomic style and HTML bare components aready styled and in complience with the Remotar Design. It follows a simple modular and reactive pure CSS/SCSS structure.

# Usage

Add the remotar UI Kit to yoru project by adding the core CSS only, or the complete UI Kit. If you are using ES6 modules, just import it to your project:

```bash
npm install @remotarjobs/remotar-uikit
```

Then on your global app module

```js
import '@remotarjobs/remotar-uikit'
```


Or if you prefer a modular approach, import only the core from the css root, then the modules you want from the `elements` folder. Lets say you want to add only buttons, for exemple:

```js
import '@remotarjobs/remotar-uikit/css/core.css'
import '@remotarjobs/remotar-uikit/css/elements/buttons.css'
```

### Pure HTML

Add the UI-KIT from a link tag on your project:

```html
<link rel="stylesheet" href="ui-kit/css/all.css">
```

Or if you prefer a modular approach, import only the core from the css root, then the modules you want from the `elements` folder. Lets say you want to add only buttons, for exemple:

```html
<link rel="stylesheet" href="ui-kit/css/core.css">
<link rel="stylesheet" href="ui-kit/css/elements/buttons.css">
<!-- import all the modules you need from elements -->
```

### ES6 Modules

Just import the UI-KIT

```js
import "ui-kit/css/all.css";
```

Or for a modular approach:

```js
import "ui-kit/css/core.css";
import "ui-kit/css/elements/buttons.css";
// import all the modules you need from elements
```

# Modules

The UI-KIT is pretty small in size, but if you prefer a modular approach, add the core as explained before, and then the modules you want. Those are the modules you can import from the `elements` folder:

- buttons
- form
- lists
- tables
- typography

# Elements Doc

To see the elements index, open the `index.html` page on the repository root, or start the development server.

# Developing

First install the dependencies:

```bash
npm install
``` 

Then start the dev server

```bash
npm run dev
``` 

A live server will be opened on localhost:8080, you can start hack.  
The sources are on the "scss" folder. Happy code!

# Building

Install the dependencies:

```bash
npm install
``` 

Then:

```bash
npm run build
``` 

You're good to go
