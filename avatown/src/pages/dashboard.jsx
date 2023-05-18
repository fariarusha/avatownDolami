import React from "react";
import Navigation from "../Components/layout/navigation";
import Sidebar from "../Components/layout/sidebar";
import Products from "../Components/product-block/products";

export default function Dashboard() {
  return (
    <div>
      <Navigation />
      <Products/>
      <Sidebar />
    </div>
  );
}
