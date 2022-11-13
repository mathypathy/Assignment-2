import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard.js";
import {ProductContext} from '../../Context/contexts';
const ProductGridSection = ({title}) => {

  const items = useContext(ProductContext)

  return (
    <section className="product_grid">
      <div className="container">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
         {
          items.slice(14).map(product => <ProductCard key={product.articleNumber} product={product}/>)
         }
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;
