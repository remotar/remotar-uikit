# REMOTAR UI-KIT

This is the Remotar UI Kit. It contains all the atomic style and HTML bare components aready styled and in complience with the Remotar Design. It follows a simple modular and reactive pure CSS/SCSS structure.

# Usage

Since this is not on the NPM yet, you must copy the project folder of this repository for ther project where you desire to use it. Soon we plan to use NPM Packages to serve this package. The UIT-KIT must be imported/added from the `css` folder.

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

A live server will be opened on localhost:8080, you can start hack. Happy code!

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