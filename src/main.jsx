import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FocusParentPage from "./pages/FocusParentPage.jsx";
import Banner from "./components/banner/Banner.jsx";
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
    path: "/food",
    element: <FoodNutritionPage />,
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
    path: "/news",
    element: <NewsPage />,
  },

  {
    path: "/blogs",
    element: <BlogListingPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

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
    path: "/test",
    element: (
      <Banner
        imagePath={"/images/focus_parent_page_hero.png"}
        heading="Personal Care Magazine: Making sense of the anti-pollution segment"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        buttonText="Read More"
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
