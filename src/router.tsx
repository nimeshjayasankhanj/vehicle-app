import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "src/components/organisms";
import Home from "src/pages/home";
import Bids from "src/pages/bids";
import ViewDetails from "src/pages/details";

const RouterLists = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/biddings" element={<Bids />}></Route>
        <Route path="/vehicle-detail/:id" element={<ViewDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default RouterLists;
