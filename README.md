# Website Lelang Legoas

Website lelang PT Digital Sarana Legoas yang dibuat menggunakan React JS & Redux

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
- [Build With](#build-with)
- [Authors](#authors)

## Getting Started

Go To Project and run `npm install` and then `npm start` for starting development, the project should run on localhost port 3000

### Prerequisites

Things you need to install
* React Js

## Folder Structure

The Project folder structure should look like this:

```
ADINS---WEBSITE-LELANG/
  README.md
  node_modules/
  public/
  |-index.html
  |-favicon.ico
  |-manifest.json
  src/
  |-actions/
    |-getAdmFee.js
    |-getBrand.js
    |-getProduct.js
    |-getSchedule.js
    |-login.js
    |-processor.js
    |-searchProduct.js
  |-assets/
    |-css/
    |-image/
    |-image/
      |-banner/
      |-...
      |-logo.jpeg
    |-scss/
  |-constants/
    |-processor.js
  |-env/
    |-server.js
  |-pages/
    |-AllData/
    |-Components/
    |-Jadwal/
    |-Kontak/
    |-Landing/
    |-ListLelang/
    |-Login/
    |-Lokasi/
    |-PengertianLelang/
    |-PeraturanLelang/
    |-Register/
    |-RegisterChoose/
    |-TataCara/
    |-TentangKami/
    |-ViewCar/
    |-Main.js
  |-reducers/
  |-  getAdmFee.js
  |-  getBrand.js
  |-  getProduct.js
  |-  getSchedule.js
  |-  login.js
  |-  processor.js
  |-App.js
  |-App.test.js
  |-index.css
  |-index.js
  |-logo.svg
  |-registerServiceWorker.js
  package.json
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Built With

* [React Js](https://reactjs.org/) - The web framework used
* [antd](https://ant.design/) - React UI Framework
* [React Bootstrap](https://react-bootstrap.github.io/) - React UI Framework
* [React js Skeleton](https://github.com/wjharil/react-loading-skeleton#readme) - React Skeleton While Fetching API
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - State Management React Js

## Authors

[PT Tele Digital Kreatif](https://www.telecreativenow.com/)