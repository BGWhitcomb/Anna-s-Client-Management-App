import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'John Smith', email: 'John@gmail.com', phone: '555-555-1111' },
    { id: 2, name: 'Maggie Jones', email: 'Maggie@gmail.com', phone: '555-555-1112' },
    { id: 3, name: 'Jacob White', email: 'Jacob@gmail.com', phone: '555-555-1113'},
  ];

  private clientsSubject: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(this.clients);

  public getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  public addNewClient(newClient: Client): void {
    // Append the new client to the existing clients list
    this.clients.push(newClient);
    this.clientsSubject.next(this.clients.slice()); // Emit a new copy of the clients array
  }
}


