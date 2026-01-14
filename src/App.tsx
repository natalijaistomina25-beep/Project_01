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

            <Route path="/cars/:model" element={<CarPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// wildcard

// import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Counter from './components/Counter/Counter';
// import IdealWeightCalculator from './components/IdealWeightCalculator/IdealWeightCalculator';
// import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';
// import GenderReveal from './components/GenderReveal/GenderReveal';
// import NationalityReveal from './components/NationalityReveal/NationalityReveal';

// // import UsersList from "./pages/UsersList";
// // import UserPage from "./pages/UserPage";
// import Home from './pages/Home/Home';
// import NotFound from './pages/Home/NotFound/NotFound';
// import About from './pages/About';
// import Contact from './pages/Contact';


// import Layout from './layouts/Layout';
// import ProfileLayout from "./layouts/ProfileLayout";
// import Profile from "./pages/Profile/Profile";
// import ProfileData from "./pages/ProfileData/ProfileData";
// import Settings from "./pages/Settings/Settings";
// import ProductPage from "./components/ProductPage/ProductPage";
// import CarPage from "./components/Car/CarPage";
// import UsersList from "./pages/UserList/UserList";
// import UserPage from "./pages/UserPage/UserPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//         <Route path="/users" element={<UsersList />} />
//         <Route path="/users/:id" element={<UserPage />} />

//           <Route index element={<Home />} />


//           <Route path="/gender-reveal" element={<GenderReveal />} />
//           <Route path="/nationality-reveal" element={<NationalityReveal />} />
//           <Route path="/counter" element={<Counter />} />
//           <Route path="/space-mission" element={<SpaceMissionForm />} />
//           <Route path="/ideal-weight" element={<IdealWeightCalculator />} />


//           <Route path="/about" element={<About />} />
//           <Route path="/profile" element={<ProfileLayout />}>
//             <Route path="/profile/" element={<Profile />} />
//             <Route path="/profile/data" element={<ProfileData />} />
//             <Route path="/profile/settings" element={<Settings />} />
//           </Route>
//           <Route path="/products/:id" element={<ProductPage />}></Route>
//           <Route path="/cars/:model" element={<CarPage />}></Route>

//         </Route>
//         <Route path="/contact" element={<Contact />} />
        


//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

