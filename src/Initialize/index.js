import React from 'react';
import Loading from '../components/Loading';
import LogIn from '../pages/LogIn';
import Routes from '../routes';
import { useAuth } from '../utils/context/authContext';
import { Navbar} from '../components/Navbar';

function Initialize() {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  return (
    <div className="Index">
      {user ? (
        <>
          <Navbar user={user}/>
          <Routes user={user} />
        </>
      ) : (
        <LogIn />
      )}

    </div>
);
}

export default Initialize;
