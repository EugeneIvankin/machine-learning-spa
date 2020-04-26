import { PurchasesState } from "@app/modules/purchases/store";
import { AddToPurchases } from "@app/modules/purchases/store/actions";

export default function addToPurchases(state: PurchasesState, action: AddToPurchases): PurchasesState {
  const arr = state.productsIds;

  arr.push(action.productId);

  return {
    ...state,
    productsIds: arr
  };
}
