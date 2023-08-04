import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from './client.model';

interface Meeting { 
  clientName: string;
  meetingDate: string;
  meetingTime: string;
  meetingLocation: string;
  selectedClient: Client | null;
}

@Component({
  selector: 'app-client-meetings',
  templateUrl: './client-meetings.component.html',
  styleUrls: ['./client-meetings.component.css']
})
export class ClientMeetingsComponent implements OnInit {
  clientName: string = '';
  meetingDate: string = '';
  meetingTime: string = '';
  meetingLocation: string = '';
  selectedClient: Client | null = null; // Initialize selectedClient as null

  clients: Client[] = [];
  meetings: Meeting[] = [];

  constructor(private clientService: ClientService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    // Initialize the meetings array with any existing clients
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
      // If there are clients available, select the first client by default
      if (this.clients.length > 0) {
        this.selectedClient = this.clients[0];
      }
    });
  }

  onDelete(meeting: Meeting) {
    const meetingId = meeting.selectedClient?.id;
    const index = this.meetings.findIndex((m: Meeting) => m.selectedClient?.id === meetingId);
  
    if (index !== -1) {
      this.meetings.splice(index, 1);
      console.log('Meeting has been deleted');
  
      this.snackBar.open('Meeting deleted successfully!', 'Close', {
        duration: 3000,
        panelClass: 'success-notification'
      });
    } else {
      console.log('Meeting not found in the meetings array');
    }
  }
  
  onSubmit() {
    console.log('Client Meetings Form Submitted');
    console.log('Name:', this.clientName);
    console.log('Date:', this.meetingDate);
    console.log('Time:', this.meetingTime);
    console.log('Location:', this.meetingLocation);
    console.log('Selected Client:', this.selectedClient);

    this.snackBar.open('Meeting created successfully!', 'Close', {
      duration: 3000,
      panelClass: 'success-notification'
    });

    this.meetings.push({
      clientName: this.selectedClient?.name || '', // Use the selected client name
      meetingDate: this.meetingDate,
      meetingTime: this.meetingTime,
      meetingLocation: this.meetingLocation,
      selectedClient: this.selectedClient
    });

    console.log('All Meetings:', this.meetings);

    this.clientName = '';
    this.meetingDate = ''; // Reset form with onSubmit
    this.meetingTime = '';
    this.meetingLocation = '';
  }
}










