import React,{lazy, Suspense} from "react";
import { Navigate, Route, Routes} from "react-router-dom";
const MainHome = lazy(() => import("./mainpages/MainHome/MainHome"));
const NotFound = lazy(() => import("./mainpages/NotFoundPage/NotFound"));
const Restaurant = lazy(() => import("./mainpages/RestaurantPage/Restaurant"));
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/CartPage/Cart"));
const Menu = lazy(() => import("./pages/MenuPage/Menu"));
const Food  = lazy(() => import("./pages/FoodPage/Food"));
const Search = lazy(() => import("./pages/SearchPage/Search"));

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to='/Home' replace />} />
            <Route path="/Home" element={<Suspense fallback={<>...</>}><MainHome /></Suspense>} />
            <Route path="/Restaurants" element={<Suspense fallback={<>...</>}><Restaurant /></Suspense>} />
            <Route path="/Restaurants/:search" element={<Suspense fallback={<>...</>}><Restaurant /></Suspense>} />
            <Route path="/:name/*" element={<Suspense fallback={<>...</>}><NotFound /></Suspense>} />
            <Route path="/:name/:id" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
            <Route path="/:name/:id/Cart" element={<Suspense fallback={<>...</>}><Cart /></Suspense>} />
            <Route path="/:name/:id/Menu/:tag" element={<Suspense fallback={<>...</>}><Menu /></Suspense>} />
            <Route path="/:name/:id/Foods/:foodid" element={<Suspense fallback={<>...</>}><Food /></Suspense>} />
            <Route path="/:name/:id/Search" element={<Suspense fallback={<>...</>}><Search /></Suspense>} />
            <Route path="/:name/:id/Search/:searchTerm" element={<Suspense fallback={<>...</>}><Search /></Suspense>} />
        </Routes>
    )
}
export default AppRoutes
