export interface Product {
  id: string,
  name?: string,
  sizes?: string,
  lastRun?: string,
  lastSync?: string,
  sku?: string,
  description?: string,
}

export type ProductList = Product[];