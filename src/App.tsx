import { Route, Routes } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={<div className="py-20 px-4 min-h-screen">Search</div>}
          />
          <Route
            path="/book"
            element={<div className="py-20 px-4 min-h-screen">Books</div>}
          />
          <Route
            path="/shop"
            element={<div className="py-20 px-4 min-h-screen">Shop</div>}
          />
          <Route
            path="/user"
            element={<div className="py-20 px-4 min-h-screen">User</div>}
          />
          <Route
            path="*"
            element={<div className="py-20 px-4 min-h-screen">Not Found</div>}
          />
        </Routes>
        <BottomNavigation />
      </Layout>
    </>
  );
}

export default App;
