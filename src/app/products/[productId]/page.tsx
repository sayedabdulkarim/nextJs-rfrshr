import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: `Product ${productId} - My App`,
    description: `Detailed information about product ${productId}`,
    openGraph: {
      title: `Product ${productId} - My App`,
      description: `Detailed information about product ${productId}`,
      type: "website",
    },
  };
}

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
