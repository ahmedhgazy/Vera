import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { error } from 'console';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor() {}
  http: HttpClient = inject(HttpClient);

  test() {
    return this.http
      .get('https://vera-9c094-default-rtdb.firebaseio.com/json.recipes')
      .subscribe(
        () => console.log('Success'),
        (error) => console.log(error)
      );
  }
}
