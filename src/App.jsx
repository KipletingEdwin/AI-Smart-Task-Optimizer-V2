
import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="p-8">Homepage placeholder</div>} />
      <Route path="/login" element={<PublicOnlyRoute><div className="p-8">Login placeholder</div></PublicOnlyRoute>} />
      <Route path="/signup" element={<PublicOnlyRoute><div className="p-8">Signup placeholder</div></PublicOnlyRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><div className="p-8">Dashboard placeholder</div></ProtectedRoute>} />
    </Routes>
  );
}

export default App;