import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
// import Nationalize from "./components/Nationalize/Nationalize";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Home from "./pages/Home/Home";
import NotFound from './pages/Home/NotFound/NotFound';
import Layout from "./layouts/Layout";
import Contact from './pages/Contact';
import About from './pages/About';
import ProfileLayout from "./layouts/ProfileLayout";
import ProfileData from "./pages/ProfileData/ProfileData";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import ProductPage from "./components/ProductPage/ProductPage";
import CarPage from "./components/Car/CarPage";
// import UsersList from "./pages/UserList/UserList";
import UserPage from "./pages/UserPage/UserPage";
import UserList from "./pages/UserList/UserList";
import Signup from "./pages/Signup/Signup";
import SignIn from "./pages/SignIn/SignIn";
import Category from "./pages/Category/Category";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gender-reveal" element={<GenderReveal />} />
            {/* <Route path="/nationalize" element={<Nationalize />} /> */}
            <Route path="/counter" element={<Counter />} />
            <Route path="/space-mission" element={<SpaceMissionForm />} />
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/data" element={<ProfileData />} />
              <Route path="/profile/settings" element={<Settings />} />
            </Route>
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/signup" element={<Signup />} />
             <Route path="/signin" element={<SignIn />} />
             <Route path="/category" element={<Category />} />

            <Route path="/cars/:model" element={<CarPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

