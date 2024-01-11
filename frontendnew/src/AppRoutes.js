import React,{lazy, Suspense} from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import UserRoute from "./components/UserRoute/UserRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Layout from "./adminpages/Layout/Layout";
const UpdateAdds = lazy(() => import("./adminpages/UpdateAdds/UpdateAdds")) 
const AdminHome = lazy(() => import("./adminpages/AdminHome/AdminHome"))
const UpdateMenu = lazy(() => import("./adminpages/UpdateMenu/UpdateMenu"))
const UpdateRestaurant = lazy(() => import("./adminpages/UpdateRestaurant/UpdateRestaurant"))
const AdminAllOrders = lazy(() => import("./adminpages/AdminAllOrders/AdminAllOrders"))
const MainHome = lazy(() => import("./mainpages/MainHome/MainHome"));
const NotFound = lazy(() => import("./mainpages/NotFoundPage/NotFound"));
const Restaurant = lazy(() => import("./mainpages/RestaurantPage/Restaurant"));
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/CartPage/Cart"));
const Menu = lazy(() => import("./pages/MenuPage/Menu"));
const Food  = lazy(() => import("./pages/FoodPage/Food"));
const Search = lazy(() => import("./pages/SearchPage/Search"));
const Checkout = lazy(() => import("./pages/Checkout/CheckoutPage"))
const UserLogin = lazy(() => import("./components/UserLogin/UserLogin"))
const AdminLogin = lazy(() => import("./adminpages/AdminLogin/AdminLogin.js"))
const SignupRestaurant = lazy(() => import("./mainpages/SignupRestaurant/SignupRestaurant"))


const AppRoutes = () => {

    const currentPath = window.location.pathname;
    const isAdmin = currentPath.startsWith('/a');

    return (
        <Routes>
            <Route path="/*" element={<Suspense fallback={<>...</>}><NotFound  message="BAD URL" /></Suspense>} />
            <Route path="/" element={<Navigate to='/Home' replace />} />
            <Route path="/Home" element={<Suspense fallback={<>...</>}><MainHome /></Suspense>} />
            <Route path="/Restaurants" element={<Suspense fallback={<>...</>}><Restaurant /></Suspense>} />
            <Route path="/Signup" element={<Suspense fallback={<>...</>}><SignupRestaurant /></Suspense>} />
            <Route path="/Restaurants/:search" element={<Suspense fallback={<>...</>}><Restaurant /></Suspense>} />
            {
                !isAdmin ? (
                    UserRoutes()
                ) : (
                    AdminRoutes() 
                )
            }
        </Routes>
    )
}
export default AppRoutes

function UserRoutes() {
    return (
      <>
            <Route path="u/*" element={<Suspense fallback={<>...</>}><NotFound  message="SCAN AGAIN" /></Suspense>} />
            <Route path="u/Login" element={<Suspense fallback={<>...</>}><UserLogin /></Suspense>} />
            <Route path="u/:name/*" element={<Suspense fallback={<>...</>}><NotFound message="SCAN AGAIN" /></Suspense>} />
            <Route path="u/:name/:id" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
            <Route path="u/:name/:id/Cart" element={<Suspense fallback={<>...</>}><Cart /></Suspense>} />
            <Route path="u/:name/:id/Menu/:tag" element={<Suspense fallback={<>...</>}><Menu /></Suspense>} />
            <Route path="u/:name/:id/Foods/:foodid" element={<Suspense fallback={<>...</>}><Food /></Suspense>} />
            <Route path="u/:name/:id/Search" element={<Suspense fallback={<>...</>}><Search /></Suspense>} />
            <Route path="u/:name/:id/Search/:searchTerm" element={<Suspense fallback={<>...</>}><Search /></Suspense>} />
            <Route path="u/:name/:id/Checkout" element={<Suspense fallback={<>...</>}><UserRoute><Checkout /></UserRoute></Suspense>} />
      </>
    );
  }

  function AdminRoutes() {
    return (
      <>
        <Route path="a/:name/:id/Admin" element={<Suspense fallback={<>...</>}><AdminLogin /></Suspense>} />
        <Route path="a/:name/:id/Admin/Orders" element={<Suspense fallback={<>...</>}><AdminRoute><Layout><AdminAllOrders /></Layout></AdminRoute></Suspense>} />
        <Route path="a/:name/:id/Admin/UpdateMenu" element={<Suspense fallback={<>...</>}><AdminRoute><Layout><UpdateMenu /></Layout></AdminRoute></Suspense>} />
        <Route path="a/:name/:id/Admin/Home" element={<Suspense fallback={<>...</>}><AdminRoute><Layout><AdminHome /></Layout></AdminRoute></Suspense>} />
        <Route path="a/:name/:id/Admin/UpdateAdds" element={<Suspense fallback={<>...</>}><AdminRoute><Layout><UpdateAdds /></Layout></AdminRoute></Suspense>} />
        <Route path="a/:name/:id/Admin/UpdateRestaurant" element={<Suspense fallback={<>...</>}><AdminRoute><Layout><UpdateRestaurant /></Layout></AdminRoute></Suspense>} />
      </>
    );
  }