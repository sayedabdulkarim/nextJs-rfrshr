"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
// const Review = async ({
//   params,
// }: {
//   params: Promise<{ productId: string; reviewId: string }>;
// }) => {
//   const { productId, reviewId } = await params;
//   return (
//     <div>
//       <h1>
//         ProductId: {productId} - Review: {reviewId}
//       </h1>
//       <strong>{+reviewId > 10 ? notFound() : "COOL"};</strong>
//     </div>
//   );
// };
const Review = () => {
  const { productId, reviewId } = useParams();
  const id = reviewId as string;
  return (
    <div>
      <h1>
        ProductId: {productId} - Review: {reviewId}
      </h1>
      <strong>{+id > 10 ? notFound() : "COOL"};</strong>
    </div>
  );
};

export default Review;
