import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { HomeState } from '@app/modules/home/store/reducers';
import { SearchProduct } from '@app/modules/home/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public minLength = 3;
  public form: FormGroup;

  constructor(private store: Store<HomeState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      query: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
    });
  }

  public search() {
    if (this.form.valid) {
      this.store.dispatch(new SearchProduct(this.form.value.query));
    }
  }
}
