import React from 'react';
import { ManageGarmentsContextInterface, ManageGarmentsState } from '../types';

// state management context
const ManageProductsContext =
  React.createContext<ManageGarmentsContextInterface | null>(null);

// custome hook to get the state of the app, getter & setter,
// return { gameState, setGameState }, see Ln 32, Col 38
export const useManageGarmentsContext = () => {
  const context = React.useContext(ManageProductsContext);
  if (!context) {
    throw new Error(
      'useManageProductsContext must be used within a ManageProductsContextProvider'
    );
  }

  return context;
};

// context frovider for app state, should wrap the Root of the app
// it's a component with local state,
// it shares it's state (getter & setter) with the returned ManageProductsContext.Provider (context provider)
type ManageGarmentsContextProviderProps = {
  children: JSX.Element;
  initialState: ManageGarmentsState;
};

export const ManageGarmentsContextProvider = (
  props: ManageGarmentsContextProviderProps
) => {
  const { children, initialState } = props;
  const [manageGarmentsState, regularSetManageGarmentsState] =
    React.useState(initialState);
  const setManageGarmentsState = (newState: Partial<ManageGarmentsState>) => {
    regularSetManageGarmentsState((prevState: ManageGarmentsState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const value = React.useMemo(
    () => ({ manageGarmentsState, setManageGarmentsState }),
    [manageGarmentsState]
  );
  return (
    <ManageProductsContext.Provider value={value} {...props}>
      {children}
    </ManageProductsContext.Provider>
  );
};
