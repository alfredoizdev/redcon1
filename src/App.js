import "styles/main.scss";

import Navbar from "components/navbar/Navbar";
import Products from "modules/products/Products";

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Products />
      </div>
    </>
  );
}

export default App;
