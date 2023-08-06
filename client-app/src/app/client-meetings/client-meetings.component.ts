import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../client-creation/client.model';

interface Meeting {
  meetingDate: string;
  meetingTime: string;
  meetingLocation: string;
  selectedClient: Client | null;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientId: number;
}

@Component({
  selector: 'app-client-meetings',
  templateUrl: './client-meetings.component.html',
  styleUrls: ['./client-meetings.component.css']
})
export class ClientMeetingsComponent implements OnInit {
  meetingDate: string = '';
  meetingTime: string = '';
  meetingLocation: string = '';
  selectedClient: Client | null = null;

  meetings: Meeting[] = [];

  constructor(public sharedService: SharedService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    
  }

  onDelete(meeting: Meeting) {
    const index = this.meetings.findIndex((m: Meeting) => m.clientId === meeting.clientId);

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
    if (!this.meetingDate || !this.meetingTime || !this.meetingLocation || !this.selectedClient) {
      this.snackBar.open('Please fill out all required fields.', 'Close', {
        duration: 3000,
        panelClass: 'error-notification'
      });
      return;
    }

    const newMeeting: Meeting = {
      meetingDate: this.meetingDate,
      meetingTime: this.meetingTime,
      meetingLocation: this.meetingLocation,
      selectedClient: this.selectedClient,
      clientName: this.selectedClient ? this.selectedClient.name : '',
      clientPhone: this.selectedClient ? this.selectedClient.phone : '',
      clientEmail: this.selectedClient ? this.selectedClient.email : '',
      clientId: this.selectedClient!.id
    };

    this.meetings.push(newMeeting);

    this.meetings.sort((a, b) => {
      const dateComparison = new Date(a.meetingDate).getTime() - new Date(b.meetingDate).getTime();
      return dateComparison !== 0 ? dateComparison : parseInt(a.meetingTime.replace(':', ''), 10) - parseInt(b.meetingTime.replace(':', ''), 10);
    });
    console.log('All Meetings:', this.meetings);

    this.snackBar.open('Meeting created successfully!', 'Close', {
      duration: 3000,
      panelClass: 'success-notification'
    });
  }
}
