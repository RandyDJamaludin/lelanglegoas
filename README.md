# Website Lelang Legoas

Website lelang PT Digital Sarana Legoas yang dibuat menggunakan React JS & Redux

---
## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Explanation each Folder](#explanation-each-folder)
    - [Actions](#actions)
    - [Assets](#assets)
    - [Constants](#constants)
    - [Env](#env)
    - [Pages](#pages)
    - [Reducer](#reducer)
- [Tips and Trick](#tips-and-trick)
    - [Change Banner](#change-banner)
    - [Activate or Deactivate Banner](#activate-or-deactivate-banner)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
- [Build With](#build-with)
- [Authors](#authors)

## Getting Started

Go To Project and run `npm install` and then `npm start` for starting development, the project should run on localhost port 3000

### Prerequisites

* Have knowledge about [React Js](https://reactjs.org/)
* Things you need to install
    * [Node](https://nodejs.org/en/)

## Folder Structure

The Project folder structure should look like this:

```
Project-name/
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
    |-getAdmFee.js
    |-getBrand.js
    |-getProduct.js
    |-getSchedule.js
    |-login.js
    |-processor.js
  |-App.js
  |-App.test.js
  |-index.css
  |-index.js
  |-logo.svg
  |-registerServiceWorker.js
  package.json
```

## Explanation each Folder

Explanation About the project folder inside `src/` folder

### Actions

Folder For Storing Action Redux

- getAdmFee
    Action for Get Administration Fee
- getBrand
    Action for Get Brand (Merk, Model, Tipe)
- getProduct
    Action for Get Product (Mobil)
- getSchedule
    Action for Get Schedule / Event
- login
    Action for login
- processor
    redux thunk system
- searchProduct
    Action for search Product

### Assets

Folder For Keeping Assets Like Css, Scss, Image, Banner, etc.

### Constants

Folder For store constant For Redux Thunk

### Env

Folder For Setting environment like server for development & production

### Pages

Folder For Store Any Project Page

- AllData
    Folder For Store Data Dummy
- Components
    Folder For Store Component (Card & Particle)
- Jadwal
    Folder For Page Jadwal lelang 
    [Jadwal Page](https://legoas.co.id/jadwal)
- Kontak
    Folder For Page Kontak (Not Yet Used)
- Landing
    Folder For Page Landing / Home 
    [Landing Page](https://legoas.co.id/)
- List Lelang
    Folder For Page list-lelang 
    click [Jadwal Page](https://legoas.co.id/jadwal) and then click `Lihat Lot` 
- Login
    Folder For Page Login (Not Used)
- Lokasi
    Folder For Page location lelang
    [lokasi Page](https://legoas.co.id/lokasi)
- PengertianLelang
    Folder For Page Pengertian Lelang
    [Pengertian Lelang Page](https://legoas.co.id/pengertian-lelang)
- PeraturanLelang
    Folder For Page Peraturan Lelang
    [Peraturan Lelang Page](https://legoas.co.id/peraturan-lelang)
- Register
    Folder For Page Register (Not Used)
- RegisterChoose
    Folder For Page RegisterChoose (Not Used)
- TataCara
    Folder For Page Tata Cara Lelang
    [Tata Cara Lelang Page](https://legoas.co.id/tatacara-lelang)
- TentangKami
    Folder For Page About Us
    [Tentang Kami Page](https://legoas.co.id/tentang-kami)
- ViewCar
    Folder For Page See Detail Car
    click [Landing Page](https://legoas.co.id/) and then click Any Car in 'Rekomendasi' or 'Produk yang mungkin disukai'
- Main.js
    File For Register Page to Route

### Reducer

Folder For Storing Reducer Redux

- getAdmFee
    Reducer for save Administration Fee
- getBrand
    Reducer for save Brand (Merk, Model, Tipe)
- getProduct
    Reducer for save Product (Mobil)
- getSchedule
    Reducer for save Schedule / Event
- login
    Reducer for Save Session
- processor
    redux thunk system

## Tips and Trick

here's some tips & trick:
### Change Banner

To Change Banner you can go to `src/assets/image/banner`
* replace `Ban1.jpg` to change First Banner
* replace `Ban2.jpg` to change Second Banner
* replace `Ban3.jpg` to change Third Banner
* replace `Ban4.jpg` to change Fourth Banner
    
### Activate or Deactivate Banner

You can go to `src/pages/Components/Partial.js` at `class Banner` Inside `<Carousel>` tag
* comment `<div className="containBanner1"></div>` to Deactivate First Banner and uncomment to Activate First Banner
* comment `<div className="containBanner2"></div>` to Deactivate Second Banner and uncomment to Activate Second Banner
* comment `<div className="containBanner3"></div>` to Deactivate Third Banner and uncomment to Activate Third Banner
* comment `<div className="containBanner4"></div>` to Deactivate Fourth Banner and uncomment to Activate Fourth Banner

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