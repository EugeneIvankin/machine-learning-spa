import { PurchasesState } from "@app/modules/purchases/store";
import { AddToPurchases } from "@app/modules/purchases/store/actions";
import { Product } from "@app/shared/contracts";

export default function deleteFromPurchases(state: PurchasesState, action: AddToPurchases): PurchasesState {
  const products: Product[] =
    state.purchasesProducts.filter((product: Product) => product.id !== action.productId);
  const productsIds: string[] =
    state.productsIds.filter((productId: string) => productId !== action.productId);

  return {
    ...state,
    purchasesProducts: products,
    productsIds: productsIds
  };
}
