import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  // return(
  //   // <Header></Header>
  //   <>
  //     <Header/>
  //     <Footer/>
  //   </>
  // );


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>home page</div>}/>    
      <Route path="/testing" element={
          <div>
            <h2>testing</h2>
          </div>
      }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
