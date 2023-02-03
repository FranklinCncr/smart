import React from "react";
import ReactDOM from "react-dom/client";
import { SmartphoneList, CategoryList, BrandList, EssentialList } from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <SmartphoneList />
    <CategoryList />
    <BrandList />
    <EssentialList />
  </>
);