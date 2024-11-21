import { useEffect } from 'react';
import { getUsers } from '../../app/redux/thunks';
import { UseAppDispatch } from '../../app/redux/hooks';
import { GetUsersState } from '../../app/redux/selectors';
import './GithubData.css';

const GithubData = () => {
  const dispatch = UseAppDispatch();
  const usersState = GetUsersState();

  const handleGetUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    /* axios
      .get('https://api.github.com/users')
      .then((response) => {
        console.log('@@@:', response.data);
      })
      .catch((error) => console.log(error)); */
  }, []);

  let contentToShow;

  if (usersState.loading) {
    contentToShow = <>Loading Content...</>;
  } else if (usersState.error) {
    contentToShow = <>{usersState.error}</>;
  } else if (usersState.users?.length) {
    contentToShow = (
      <>
        {usersState.users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })}
      </>
    );
  }

  return (
    <div className="container">
      <header>
        <h2 className="main-title">Github Users</h2>
        <button onClick={handleGetUsers}>Get User</button>
      </header>

      <div className="content">
        <div className="content-title">Content:</div>
        <div className="content-users">{contentToShow}</div>
      </div>
    </div>
  );
};

export default GithubData;
