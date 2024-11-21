import React, { useEffect } from 'react';
import { UseAppDispatch } from '../../app/redux/hooks';
import { updateInfo, getInfo } from '../../app/redux/slices/infoSlice';
import { GetInfo } from '../../app/redux/selectors';

const Info = () => {
  const dispatch = UseAppDispatch();
  const infoState = GetInfo();

  useEffect(() => {
    console.log('@@@ infoState:', infoState);
  }, []);

  const handleUpdate = () => {
    dispatch(
      updateInfo({
        user: {
          name: 'Johnny',
          surname: 'Cash',
          age: 100,
          employee: 'Musician',
        },
        stack: ['songwriter', 'rights', 'fire'],
      })
    );
  };

  const handleGetIndo = () => {
    dispatch(getInfo());
  };

  return (
    <div className="container">
      <header>
        <h3>Info User Component</h3>
        <div>
          <button onClick={handleGetIndo}>Get info</button>
          <button onClick={handleUpdate}>Update info</button>
        </div>
      </header>
      <div className="content">
        <div>
          <span>Name: </span>
          <span>{infoState.user.name}</span>
        </div>
        <div>
          <span>Surname: </span>
          <span>{infoState.user.surname}</span>
        </div>
        <div>
          <span>Age: </span>
          <span>{infoState.user.age}</span>
        </div>
        <div>
          <span>Employee: </span>
          <span>{infoState.user.employee}</span>
        </div>
        <div>
          <span>Stack: </span>
          {infoState.stack.map((info) => {
            return <span>{info}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
