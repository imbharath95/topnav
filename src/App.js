import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./App.scss";
import {
  Bungalow,
  AcUnit,
  Campaign,
  ShoppingCart,
  AccountBox,
} from "@mui/icons-material";

export default function () {
  const sampleData = ["Phone", "Clothes", "Test Data"];

  return (
    <div className="top-nav-container flex">
      <h2 className="display-inline ml-10">
        <Bungalow className="mr-10" />
        Webpack
      </h2>
      <h2 className="display-inline ml-3p">
        <AcUnit className="mr-10" />
        Departments
      </h2>
      <h2 className="display-inline ml-3p">
        <Campaign className="mr-10" />
        Services
      </h2>
    
      <h2 className="display-inline ml-3p">
        <AccountBox className="mr-10" />
        Sign In
      </h2>
      <h2 className="display-inline ml-3p">
        <ShoppingCart className="mr-10" />
        Cart
      </h2>
    </div>
  );
}
