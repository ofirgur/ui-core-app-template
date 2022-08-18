export interface ManageGarmentsContextInterface {
    manageGarmentsState: ManageGarmentsState;
    setManageGarmentsState: (state: Partial<ManageGarmentsState>) => void;
  }
  
  export interface ManageGarmentsState {
    products: any;
  }