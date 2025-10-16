import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>This is the product details page.</p>
      <p>Product ID: {params.productId}</p>
    </div>
  );
};

export default ProductDetails;
