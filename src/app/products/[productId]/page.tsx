import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Product Details</h1>
      <p>This is the product details page.</p>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetails;
