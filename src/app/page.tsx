import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link href="/about">Go to About Page</Link>
      <Link href="/blog">Go to Blog Page</Link>
    </div>
  );
};

export default Home;
