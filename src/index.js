import React from "react";
import ReactDOM from "react-dom/client";
import { SmartphoneList, CategoryList, BrandList, EssentialList, Carousel } from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Carousel />
    <SmartphoneList />
    <CategoryList />
    <BrandList />
    <EssentialList />
  </>
);