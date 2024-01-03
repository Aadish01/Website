import React, { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { useLoading } from "./hooks/useLoading";
import { setLoadingInterceptor } from './interceptors/loadingInterceptors'
import Loading from "./components/Loading/Loading";

function App() {

  const { showLoading, hideLoading} = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading , hideLoading });
  })

  return (
    <>
      <Loading />
      <AppRoutes />
    </>
  );
}
export default App;
