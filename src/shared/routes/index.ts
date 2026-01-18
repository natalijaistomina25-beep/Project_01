export const ROUTES = {
  HOME: "./pages/Home/Home",
  GENDER_REVEAL: "./components/GenderReveal/GenderReveal",
  iDEAL_WEIGHT_CALCULATOR:
    "./components/IdealWeightCalculator/IdealWeightCalculator",
  SPACE_MISSION_FORM: "./components/SpaceMissionForm/SpaceMissionForm",
  NOT_FOUND: "./pages/Home/NotFound/NotFound",
  // import Layout from "./layouts/Layout";
  CONTACT: "./pages/Contact",
  ABOUT: "./pages/About",
  PROFILE_LAYOUT: "./layouts/ProfileLayout",
  PROFILE_DATA: "./pages/ProfileData/ProfileData",
  SETTINGS: "./pages/Settings/Settings",
  PROFILE: "./pages/Profile/Profile",
  PRODUCT_PAGE: "./components/ProductPage/ProductPage",
  CAR_PAGE: "./components/Car/CarPage",
  USER_LIST: "./pages/UserList/UserList",
  USER_PAGE: "./pages/UserPage/UserPage",
  COUNTER: "./components/Counter/Counter",
  // import UserList from "./pages/UserList/UserList";
  // }
  PRODUCT: (id: string | number) => `/produts/${id}`,
  USERS:"/users",
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  CATEGORY: "/category",
} as const;
