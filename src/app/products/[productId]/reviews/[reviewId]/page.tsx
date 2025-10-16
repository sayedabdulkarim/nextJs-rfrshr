import React from "react";

const Review = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        ProductId: {productId} - Review: {reviewId}
      </h1>
    </div>
  );
};

export default Review;
