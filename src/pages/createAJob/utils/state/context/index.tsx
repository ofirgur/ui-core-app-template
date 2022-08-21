import React from 'react';
import { CreateAJobContextInterface, CreateAJobState } from '../types';

// state management context
const CreateAJobContext =
  React.createContext<CreateAJobContextInterface | null>(null);

// custome hook to get the state of the app, getter & setter,
// return { gameState, setGameState }, see Ln 32, Col 38
export const useCreateAJobContext = () => {
  const context = React.useContext(CreateAJobContext);
  if (!context) {
    throw new Error(
      'useCreateAJobContext must be used within a CreateAJobContextProvider'
    );
  }

  return context;
};

// context frovider for app state, should wrap the Root of the app
// it's a component with local state,
// it shares it's state (getter & setter) with the returned CreateAJobContext.Provider (context provider)
type CreateAJobContextProviderProps = {
  children: JSX.Element;
  initialState: CreateAJobState;
};

export const CreateAJobContextProvider = (
  props: CreateAJobContextProviderProps
) => {
  const { children, initialState } = props;
  const [createAJobState, regularSetCreateAJobState] =
    React.useState(initialState);
  const setCreateAJobState = (newState: Partial<CreateAJobState>) => {
    regularSetCreateAJobState((prevState: CreateAJobState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const value = React.useMemo(
    () => ({ createAJobState, setCreateAJobState }),
    [createAJobState]
  );
  return (
    <CreateAJobContext.Provider value={value} {...props}>
      {children}
    </CreateAJobContext.Provider>
  );
};
