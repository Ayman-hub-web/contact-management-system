import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from '../models/contact.class';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  updateCont(id: any, cont: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  getAllContact(): Observable<MyContact[]> {
    return this.http.get<MyContact[]>('http://localhost:3000/contact');
  }
  addContact(contact: MyContact): Observable<MyContact> {
    return this.http.post<MyContact>('http://localhost:3000/contact', contact);
  }
  getContactById(id:string):Observable<MyContact>{
    return this.http.get<MyContact>('http://localhost:3000/contact/'+id);
  }
  updateContact(id:string, contact:MyContact):Observable<MyContact>{
    return this.http.put<MyContact>('http://localhost:3000/contact/'+id, contact);
  }
  deleteContactById(id:string):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/contact/'+id);
  }
}
