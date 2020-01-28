import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListDTO } from '../interfaces/list-dto';
@Injectable({
  providedIn: 'root'
})
export class ListbookService {
  // url: 'https://listbook-537c5.firebaseio.com';

  constructor(private http: HttpClient) { }
  getList(): Observable<any> {
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  //  return this.http.get(`${this.url}/Book`);
  }
  setBook(data): Observable<any> {
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data, {headers: myheader});
    }

    putBook(book): Observable<any> {
      const myheader = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.put('https://jsonplaceholder.typicode.com/posts/'+book.id, book, {headers: myheader});
      }
delete(id){
  return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id);
 //  return this.http.get(`${this.url}/Book`);
 }
}
