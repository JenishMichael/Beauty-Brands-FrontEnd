import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Navbar } from "./components/NavBar/Navbar";
import { CategoryNavbar } from "./components/NavBar/CategoryNavbar";
import { Footer } from "./components/Footer/Footer";
import { ProductList } from "./components/Product/ProductList";
import { ProductDetails } from "./components/Product/ProductDetails";
import { Contact } from "./components/Contact/Contact ";
import { DataCollectionHeader } from "./components/DataCollectionFromClient/DataCollectionHeader";
import { DataCollectionFormPage } from "./components/DataCollectionFromClient/DataCollectionFormPage";
import { DataCollectionFooter } from "./components/DataCollectionFromClient/DataCollectionFooter";
import { DetailsSaved } from "./components/DataCollectionFromClient/DetailsSaved";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <CategoryNavbar />
              <ProductList />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <CategoryNavbar />
              <ProductDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <CategoryNavbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DataCollectionHeader></DataCollectionHeader>
              <DataCollectionFormPage></DataCollectionFormPage>
              <DataCollectionFooter></DataCollectionFooter>
            </>
          }
        />
        <Route
          path="/sucess"
          element={
            <>
              <DataCollectionHeader></DataCollectionHeader>
              <DetailsSaved />
              <DataCollectionFooter></DataCollectionFooter>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
