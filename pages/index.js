import Head from "next/head";
import { useState } from "react";
import ToDo from "../components/Todo";

const Index = () => (
  
  <div className="flex flex-col items-center bg-blue-200">
    <Head>
      <title>Home page</title>
    </Head>
    <ToDo />

  </div>
);

export default Index;
