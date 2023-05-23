import '../static/styles.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      footer={`Task by Nevo Hershkovitz Copyright ${new Date().getFullYear()}`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
