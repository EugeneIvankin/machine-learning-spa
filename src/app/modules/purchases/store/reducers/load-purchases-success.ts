import { PurchasesState } from "@app/modules/purchases/store";
import { LoadPurchasesSuccess } from "@app/modules/purchases/store/actions";

export default function loadPurchasesSuccess(state: PurchasesState, action: LoadPurchasesSuccess): PurchasesState {
  return {
    ...state,
    purchasesProducts: action.payload.products
  };
}
