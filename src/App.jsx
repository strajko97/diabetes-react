import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ButtonUsage from "./components/ButtonUsage.jsx";
import RecipeCard from "/components/RecipeCard.jsx";

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
      <Route path="/testings" element={
          <div>
            <h2>testing</h2>
            <ButtonUsage></ButtonUsage>
            <RecipeCard></RecipeCard>
          </div>
      }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
