import Head from "next/head";
import App from "../components/App";

/**
 * Index its the home page of the project,
 * contains the todolist app thats apper as a component tag inside the div
 */


const Index = () => (
  
  <div className="flex flex-col items-center bg-blue-200 sm:text-center">
    <Head>
      <title>Home page</title>
    </Head>
    <App />

  </div>
);

export default Index;
