export interface ManageProductsContextInterface {
    manageProductsState: ManageProductsState;
    setManageProductsState: (state: Partial<ManageProductsState>) => void;
  }
  
  export interface ManageProductsState {
    products: any;
  }