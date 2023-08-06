import { Component } from '@angular/core';
import { Client } from './client.model';
import { SharedService } from '../client-meetings/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-creation',
  templateUrl: './client-creation.component.html',
  styleUrls: ['./client-creation.component.css']
})
export class ClientCreationComponent {
  clientName: string = '';
  clientEmail: string = '';
  clientPhone: string = '';

  constructor(private sharedService: SharedService, private snackBar: MatSnackBar) {
    console.log('constructor works!')
  }

  onSubmit() {

    if (!this.clientName || !this.clientEmail || !this.clientPhone) {
      this.snackBar.open('Please fill out all required fields.', 'Close', {
        duration: 3000,
        panelClass: 'error-notification'
      });
      return;
    }
    const newClient: Client = {
      id: this.generateNewClientID(),
      name: this.clientName,
      email: this.clientEmail,
      phone: this.clientPhone
    };

    this.sharedService.addNewClient(newClient);

    this.snackBar.open('Client created successfully!', 'Close', {
      duration: 3000, // Display duration in milliseconds
      panelClass: 'green-snackbar'
    });

    console.log('Client created successfully!');
    console.log('Name:', this.clientName);
    console.log('Email:', this.clientEmail);
    console.log('Phone:', this.clientPhone);

    this.clientName = '';
    this.clientEmail = ''; // Reset form with onSubmit
    this.clientPhone = '';
  }

  private currentClientID: number = 0;

  // Function to generate a new client ID in ascending numerical order
  private generateNewClientID(): number {
    this.currentClientID++;
    return this.currentClientID;
  }
}


