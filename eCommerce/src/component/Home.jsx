import React from "react";
import AddProduct from "./AddProduct";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
        <div className="col-span-2">
          <div>
            {
            products.length > 0 ? (products.map((p, i) => <ProductItem key={i} product={p} />)
            ) : 
              <div>No Product Found!</div>
            }
          </div>
        </div>
        <div>
          <AddProduct />{" "}
        </div>
      </div>
    </main>
  );
};

export default Home;
