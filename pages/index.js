import Head from "next/head";
import { useState } from "react";
import ToDoList from "../components/ToDoList";

const Index = () => (
  <div className="flex flex-col items-center bg-blue-200">
    <Head>
      <title>Home page</title>
    </Head>
    <ToDoList />
  </div>
);

export default Index;
