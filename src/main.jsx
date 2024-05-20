import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FocusParentPage from "./pages/FocusParentPage.jsx";
// import Banner from "./components/banner/Banner.jsx";
import FoodNutritionPage from "./pages/FoodNutritionPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import BlogListingPage from "./pages/BlogListingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import OTPPage from "./pages/OTPPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ChemicalsPage from "./pages/ChemicalsPage.jsx";
import PetroChemicalsPage from "./pages/PetroChemicalsPage.jsx";
import CleanEnergyPage from "./pages/CleanEnergyPage.jsx";
import MobilityPage from "./pages/MobilityPage.jsx";
import PersonalCarePage from "./pages/PersonalCarePage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import { AuthProvider } from "./contexts/authContext/index.jsx";
import BlogsSection from "./components/blogsSection/BlogsSection.jsx";
import CapabilitiesPage from "./pages/CapabilitiesPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/focus",
    element: <FocusParentPage />,
  },

  {
    path: "/food-nutrition",
    element: <FoodNutritionPage />,
  },

  {
    path: "/chemicals",
    element: <ChemicalsPage />,
  },

  {
    path: "/petro-chemicals",
    element: <PetroChemicalsPage />,
  },

  {
    path: "/clean-energy",
    element: <CleanEnergyPage />,
  },

  {
    path: "/mobility",
    element: <MobilityPage />,
  },

  {
    path: "/personal-care",
    element: <PersonalCarePage />,
  },

  {
    path: "/about-us",
    element: <AboutUsPage />,
  },

  {
    path: "/events",
    element: <EventsPage />,
  },

  {
    path: "/events/:id",
    element: <EventDetailPage />,
  },

  {
    path: "/news",
    element: <NewsPage />,
  },

  {
    path: "/blogs",
    element: <BlogListingPage />,
  },

  // {
  //   path: "/blogs/:page",
  //   element: <BlogListingPage />,
  // },

  {
    path: "/blogs/:id",
    element: <BlogDetailPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  // {
  //   path: "/comment/:id",
  //   element: <CommentFormPage />,
  // },

  {
    path: "/signup",
    element: <SignupPage />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },

  {
    path: "/otp",
    element: <OTPPage />,
  },

  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },

  {
    path: "/careers",
    element: <CareersPage />,
  },

  {
    path: "/capabilities",
    element: <CapabilitiesPage />,
  },

  {
    path: "/test",
    element: <BlogsSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
