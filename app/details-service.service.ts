import { Injectable } from '@angular/core';
import { Details } from 'src/app/detail'
import { DETAILS } from 'src/app/detail';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  static selectedDetail: Details;

  getDetails() : Observable<Details[]>{
    return of (DETAILS);
  }

  setSelectedDetail(selectedDetail : Details) : void {
    DetailsService.selectedDetail = selectedDetail;
  }

  getSelectedDetail(): Observable<Details>{
    return of (DetailsService.selectedDetail);
  }

  constructor() { }
}
