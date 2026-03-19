import { Navigate } from "react-router-dom";

interface PropsProtected {
  children: React.ReactNode;
}
export default function ProtectedRoute({ children }: PropsProtected) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}
