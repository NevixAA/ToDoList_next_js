/**
 * layout component that applies dynamic layout for each page ,
 * contains the navbar copmonents that's apper in this application
 */

import Nav from "./Nav";

const Layout = ({ mainTitle, footer, children }) => (
  <div>
    <Nav />
    <h1>{mainTitle}</h1>
    <hr/>
    {children}
    <hr/>
    <h4>{footer}</h4>

  </div>
);

export default Layout;
