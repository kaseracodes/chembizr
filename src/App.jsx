import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";
import FocusParentPage from "./pages/FocusParentPage.jsx";
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
import BlogsSection from "./components/blogsSection/BlogsSection.jsx";
import CapabilitiesPage from "./pages/CapabilitiesPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";
import CountdownPage from "./pages/CountdownPage.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { Route, Routes } from "react-router-dom";

function App() {

  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    // Calculate target time for 6 PM IST today
    const now = new Date();
    const targetTime = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12, 5)).getTime();
    const currentTime = now.getTime();

    if (currentTime >= targetTime) {
      setIsCountdownComplete(true); // Countdown is already complete
    }
  }, []);

  // if (!isCountdownComplete) {
  //   return <CountdownPage onCountdownComplete={() => setIsCountdownComplete(true)} />;
  // }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/focus" element={<FocusParentPage />} />
        <Route
          path="/food-nutrition-and-beverages"
          element={<FoodNutritionPage />}
        />
        <Route path="/specialty-polymers" element={<ChemicalsPage />} />
        <Route
          path="/petro-chemicals-and-downstream"
          element={<PetroChemicalsPage />}
        />
        <Route path="/clean-energy-and-storage" element={<CleanEnergyPage />} />
        <Route path="/mobility" element={<MobilityPage />} />
        <Route
          path="/personal-care-and-cosmetics"
          element={<PersonalCarePage />}
        />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/insights" element={<BlogListingPage />} />
        <Route path="/insights/:heading/:id" element={<BlogDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/test" element={<BlogsSection />} />
        <Route path="/countdown" element={<CountdownPage/>} />
      </Routes>
    </>
  );
}

export default App;
