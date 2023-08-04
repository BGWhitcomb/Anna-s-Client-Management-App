import { Component } from '@angular/core';
import { Client } from '../client-meetings/client.model';
import { ClientService } from '../client-meetings/client.service';
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

  constructor(private clientService: ClientService, private snackBar: MatSnackBar) {
    console.log('constructor works!')
  }

  onSubmit() {
    const newClient: Client = {
      id: this.generateNewClientID(), // Generate the ID here
      name: this.clientName,
      email: this.clientEmail,
      phone: this.clientPhone
    };

    this.clientService.addNewClient(newClient);

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

  private generateNewClientID(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
