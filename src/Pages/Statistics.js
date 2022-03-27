import React from "react";

import { useSelector } from "react-redux";

function Statistics() {
  const products = useSelector((state) => state.productDetails);
  const analyseProduct = products.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = {
        brand: product.brand,
        criteria1: product.priceO < 40 ? 1 : 0,
        criteria2: new Set(product.sizes || []),
        criteria3: product.sizes.includes("32")
          ? {
              total: product.priceO,
              item: 1,
            }
          : {
              total: 0,
              item: 0,
            },
      };
      return acc;
    }
    acc[product.brand] = {
      brand: product.brand,
      criteria1: acc[product.brand].criteria1 + (product.priceO < 40 ? 1 : 0),
      criteria2: new Set(
        ...acc[product.brand].criteria2,
        ...(product.sizes || [])
      ),
      criteria3: product.sizes.includes("32")
        ? {
            total: acc[product.brand].criteria3.total + product.priceO,
            item: acc[product.brand].criteria3.item + 1,
          }
        : acc[product.brand].criteria3,
    };
    return acc;
  }, {});

  let criteria1 = null;
  let criteria2 = null;
  let criteria3 = null;

  for (let key in analyseProduct) {
    if (
      criteria1 === null ||
      analyseProduct[key].criteria1 > criteria1.criteria1
    ) {
      criteria1 = analyseProduct[key];
    }
    if (
      criteria2 === null ||
      analyseProduct[key].criteria2.size > criteria2.criteria2.size
    ) {
      criteria2 = analyseProduct[key];
    }
    if (
      analyseProduct[key].criteria3.item !== 0 &&
      (criteria3 === null ||
        analyseProduct[key].criteria3.total /
          analyseProduct[key].criteria3.item <
          criteria3.criteria3.total / criteria3.criteria3.item)
    ) {
      criteria3 = analyseProduct[key];
    }
  }

  return (
    <div>
      <ul>
        <li>
          {" "}
          which brand has the most products that cost less than 40 EUR :{" "}
          <strong>{criteria1.brand}</strong>
        </li>
        <li>
          which brand offers the largest selection of sizes to the customer :{" "}
          <strong>{criteria2.brand}</strong>
        </li>
        <li>
          which brand offers the lowest average price for customers wearing size
          “32” : <strong>{criteria3.brand}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
