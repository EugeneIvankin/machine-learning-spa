import { HomeState } from '@app/modules/home/store/state';

export default function loadBestFoodsSuccess(state: HomeState): HomeState {
  return {
    ...state,
    bestFoods: []
  };
}
