import React from 'react';
import { ManageProductsContextInterface, ManageProductsState } from '../types';

// state management context
const ManageProductsContext =
  React.createContext<ManageProductsContextInterface | null>(null);

// custome hook to get the state of the app, getter & setter,
// return { gameState, setGameState }, see Ln 32, Col 38
export const useManageProductsContext = () => {
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
type ManageProductsContextProviderProps = {
  children: JSX.Element;
  initialState: ManageProductsState;
};

export const ManageProductsContextProvider = (
  props: ManageProductsContextProviderProps
) => {
  const { children, initialState } = props;
  const [manageProductsState, regularSetManageProductsState] =
    React.useState(initialState);
  const setManageProductsState = (newState: Partial<ManageProductsState>) => {
    regularSetManageProductsState((prevState: ManageProductsState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const value = React.useMemo(
    () => ({ manageProductsState, setManageProductsState }),
    [manageProductsState]
  );
  return (
    <ManageProductsContext.Provider value={value} {...props}>
      {children}
    </ManageProductsContext.Provider>
  );
};
