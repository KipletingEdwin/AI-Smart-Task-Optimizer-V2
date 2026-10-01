
// components/PublicOnlyRoute.jsx
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (user) return <Navigate to="/dashboard" replace />;

  return children;
}

export default PublicOnlyRoute;