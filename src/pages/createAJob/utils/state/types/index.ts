export interface CreateAJobContextInterface {
  createAJobState: CreateAJobState;
  setCreateAJobState: (state: Partial<CreateAJobState>) => void;
}
  
export interface CreateAJobState {
  products: any;
}