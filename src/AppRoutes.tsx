import { Routes, Route } from "react-router-dom";
import CarPage from "./components/Car/CarPage";
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import ProductPage from "./components/ProductPage/ProductPage";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Layout from "./layouts/Layout";
import ProfileLayout from "./layouts/ProfileLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Home/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import ProfileData from "./pages/ProfileData/ProfileData";
import Settings from "./pages/Settings/Settings";
import UserList from "./pages/UserList/UserList";
import UserPage from "./pages/UserPage/UserPage";
import { ROUTES as R} from "./shared/routes";
import Signup from "./pages/Signup/Signup";
import Category from "./pages/Category/Category";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={R.GENDER_REVEAL} element={<GenderReveal />} />
        {/* <Route path="/nationalize" element={<Nationalize />} /> */}
        <Route path={R.COUNTER} element={<Counter />} />
        <Route path={R.SPACE_MISSION_FORM} element={<SpaceMissionForm />} />
        <Route path={R.iDEAL_WEIGHT_CALCULATOR}element={<IdealWeightCalculator />} />
        <Route path={R.CONTACT} element={<Contact />} />
        <Route path={R.ABOUT} element={<About />} />
        <Route path={R.PROFILE_LAYOUT} element={<ProfileLayout />}>
          <Route path={R.PROFILE} element={<Profile />} />
          <Route path={R.PROFILE_DATA} element={<ProfileData />} />
          <Route path={R.SETTINGS} element={<Settings />} />
        </Route>
        <Route path={R.PRODUCT(":id")} element={<ProductPage />}></Route>
        <Route path={R.USER_PAGE} element={<UserPage />} />
        <Route path={R.USER_LIST}element={<UserList />} />
        <Route path={R.SIGNUP} element={<Signup />} />
        <Route path="/category" element={<Category />} />

        <Route path={R.CAR_PAGE} element={<CarPage />}></Route>
      </Route>
      <Route path={R.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
