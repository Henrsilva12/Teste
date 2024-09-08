import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken'); // Exemplo de verificação de autenticação

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;