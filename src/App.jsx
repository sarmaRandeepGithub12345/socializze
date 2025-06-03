import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import LandingPage from "./components/landing/LandingPage";
import { Layout } from "./components/layout/Layout";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import { ProfilePage } from "./components/profile/ProfilePage";
import useCommonItems from "./utils/useCommonItems";
function App() {
  const { obj } = useCommonItems();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // loader: loadRootData,
      children: [
        {
          path: "/",
          element:
            obj.user && obj.token ? (
              <Navigate to="/profile" />
            ) : (
              <LandingPage title="Landing page" />
            ),
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy title="Privacy policy" />,
        },
        {
          path: "/profile",
          element:
            obj.user && obj.token ? (
              <ProfilePage title="Profile page" />
            ) : (
              <Navigate to="/" />
            ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
