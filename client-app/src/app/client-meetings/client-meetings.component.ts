import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from './client.model';

@Component({
  selector: 'app-client-meetings',
  templateUrl: './client-meetings.component.html',
  styleUrls: ['./client-meetings.component.css']
})
export class ClientMeetingsComponent {
  clientName: string = '';
  meetingDate: string = '';
  meetingTime: string = '';
  meetingLocation: string = '';
  selectedClient: Client | null = null; // Initialize selectedClient as null

  clients: Client[] = [];
  meetings: any[] = [];

  constructor(private clientService: ClientService, private snackBar: MatSnackBar) {
    // Subscribe to getClients to update the selectedClient when a new client is created
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients; 
    });
  }
  
  onSubmit() {
    console.log('Client Meetings Form Submitted');
    console.log('Name:', this.clientName);
    console.log('Date:', this.meetingDate);
    console.log('Time:', this.meetingTime);
    console.log('Location:', this.meetingLocation);
    console.log('Selected Client:', this.selectedClient);

    // Create a new Client object
    const newClient: Client = {
      id: this.generateNewClientID(),
      name: this.clientName,
      email: '', // Add appropriate properties here
      phone: '' // Add appropriate properties here
    };

    this.clientService.addNewClient(newClient);

    this.snackBar.open('Meeting created successfully!', 'Close', {
      duration: 3000, // Display duration in milliseconds
      panelClass: 'success-notification'
    });

    this.meetings.push({
      clientName: this.clientName,
      meetingDate: this.meetingDate,
      meetingTime: this.meetingTime,
      meetingLocation: this.meetingLocation,
      selectedClient: this.selectedClient
    });

    console.log('All Meetings:', this.meetings);
  }

  private generateNewClientID(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}






