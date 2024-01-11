import { Navigate, useLocation } from "react-router-dom"
import { useUser } from "../../hooks/useUser";

export default function AuthRoute({ children }) {
    const loaction = useLocation();
    const { phone } = useUser();
    return phone ? (
        children
    ) : (
        <Navigate to={`/Login?returnUrl=${loaction.pathname}`} replace={true} />
    )
}
