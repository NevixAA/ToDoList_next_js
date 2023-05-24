import "../static/styles.css";
import Layout from "../components/Layout";
// import { resetServerContext } from 'react-beautiful-dnd';

function MyApp({ Component, pageProps }) {
  // resetServerContext()
  return (
    <Layout
      footer={`Task by Nevo Hershkovitz Copyright ${new Date().getFullYear()}`}
    >
        <Component {...pageProps} />
      
    </Layout>
  );
}

export default MyApp;
