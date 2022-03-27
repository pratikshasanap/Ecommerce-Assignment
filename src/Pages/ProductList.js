import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Card from "./../Components/Card/Card";

function ProductList() {
  const products = useSelector((store) => store.productDetails);
  const sizes = useSelector((store) => store.sizes);
  const [size, setSize] = useState("null");
  const [sort, setSort] = useState(false);

  const sorted = useMemo(() => {
    if (size === "null") return products;
    return products
      .filter((product) => {
        return product.sizes.includes(size);
      })
      .sort((a, b) => {
        return sort ? a.priceO - b.priceO : b.priceO - a.priceO;
      });
  }, [products, size, sort]);

  return (
    <>
      <div className="sidebar m-10">
        <div className="d-flex">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="null">null</option>
              {sizes.map((data) => {
                return (
                  <option value={data} key={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <label htmlFor="floatingSelectGrid">Size</label>
          </div>
          <div className="form-floating ms-4">
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              value={sort}
              onChange={() => {
                setSort((p) => !p);
              }}
            >
              <option value={true}> Price Ascending </option>
              <option value={false}> Price Descending </option>
            </select>
            <label htmlFor="floatingSelectGrid">Sort By</label>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap mt-4">
        {sorted.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
