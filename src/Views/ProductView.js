import React from "react";
import ProductGridToProductView from "../Sections/ProductGridToProductView/ProductGridToProductView";
import MainMenuSection from "../Sections/MainMenu/MainMenuSection";
import DirectorySection from "../Sections/Contact/Directory/DirectorySection";
const ProductView = () => {
  return (
    <>
      <MainMenuSection />
      <DirectorySection currentPage="Products" />
      <ProductGridToProductView title="Products" />
    </>
  );
};

export default ProductView;
