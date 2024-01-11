import { useAdmin } from '../../hooks/useAdmin';
import { Navigate, useParams } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { user } = useAdmin();
  const { name , id} = useParams();
  return user ? (
    children
  ) : (
    <Navigate to={`/a/${name}/${id}/Admin`} replace={true} />
  );
}

