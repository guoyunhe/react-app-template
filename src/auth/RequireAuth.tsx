import { ReactElement } from 'react';
import useSWR from 'swr';
// import { Navigate, useLocation } from 'react-router-dom';

export interface RequireAuthProps {
  children: ReactElement;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { data, error } = useSWR('/me');

  console.log(data, error);
  // const location = useLocation();

  // if (!auth.user) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  return children;
}