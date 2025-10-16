// 'use client'

import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  console.log("Slugs value:", slug); // Ye add kar

  return (
    <div>
      {/* <h1 onClick={() => console.log({ slug }, " slll")}>Hello Docs..</h1> */}
      <h1>HELLLO DOCS</h1>
      <pre>{JSON.stringify(slug, null, 2)}</pre>
    </div>
  );
};

export default Docs;
