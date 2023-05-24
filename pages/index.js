import Head from "next/head";
import App from "../components/App";
// import { resetServerContext } from "react-beautiful-dnd";

/**
 * Index its the home page of the project,
 * contains the todolist app thats apper as a component tag inside the div
 */


const Index = () => (
  
  <div className="flex flex-col items-center bg-blue-200">
    <Head>
      <title>Home page</title>
    </Head>
    <App />

  </div>
);
// export const getServerSideProps = async ({ query }) => {
//   resetServerContext({});

//   return {
//     props: { data: [] },
//   };
// };


export default Index;
