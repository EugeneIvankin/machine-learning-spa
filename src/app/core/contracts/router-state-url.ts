import { Data, Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}
