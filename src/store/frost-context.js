import {createContext, useState} from 'react';

export const FrostContext = createContext();
export const FrostProvider = props => {
  const [isAuth, setISAuth] = useState(true);
  return (
    <FrostContext.Provider value={{isAuth, setISAuth}}>
      {props.children}
    </FrostContext.Provider>
  );
};
