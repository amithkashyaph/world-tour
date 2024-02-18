import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import CitiesProvider, { useCities } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthenticationContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  // const context = useCities();
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="cities" replace />} />
              <Route path="cities" element={<CityList />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
