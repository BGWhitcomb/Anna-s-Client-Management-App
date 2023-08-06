import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../client-creation/client.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public clients: Client[] = [];

  public clientsSubject: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(this.clients);

  public getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  public addNewClient(newClient: Client): void {
    this.clients.push(newClient);
    this.clientsSubject.next(this.clients.slice());
  }

  // Add a method to get a client by ID
  public getClientById(id: number): Client | null {
    return this.clients.find(client => client.id === id) || null;
  }
}


