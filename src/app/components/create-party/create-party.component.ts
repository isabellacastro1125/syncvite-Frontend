import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { PartyService } from '../../services/party.service';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent {
  partyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private partyService: PartyService // Inject PartyService
  ) {
    this.partyForm = this.fb.group({
      basicDetails: this.fb.group({
        title: ['', Validators.required],
        location: ['', Validators.required],
        date: ['', Validators.required],
        time: ['', Validators.required], // New time field
        theme: [''],
        description: ['']
      }),
      invitations: this.fb.array([]),
      items: this.fb.array([]) // Dynamic list of items
    });
  }

  // Safely cast 'basicDetails' to FormGroup
  get basicDetails(): FormGroup {
    return this.partyForm.get('basicDetails') as FormGroup;
  }

  // Safely cast 'guests' to FormArray
  get invitations(): FormArray {
    return this.partyForm.get('invitations') as FormArray;
  }

  get items(): FormArray {
    return this.partyForm.get('items') as FormArray;
  }

  addItem() {
    const itemsGroup = this.fb.group({
      item_name: ['', Validators.required],
      description: [''],
      broughtBy: [null] // Dropdown to select the invitation
    });
    this.items.push(itemsGroup);
  }
  
  addInvitation() {
    const guestGroup = this.fb.group({
      guest_name: ['', Validators.required],
      guest_phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]]
    });
    this.invitations.push(guestGroup);
  }

  removeInvitation(index: number) {
    this.invitations.removeAt(index);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  validateAllFormFields(form: FormGroup | FormArray): void {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateAllFormFields(control); // Recursively validate nested groups/arrays
      }
    });
  }

  onNext(form: FormGroup | FormArray): void {
    if (!form.valid) {
      this.validateAllFormFields(form);
    }
  }

  // Submit the party form
  submitForm(): void {
    if (this.partyForm.valid) {
      const partyData = {
        ...this.partyForm.value.basicDetails,
        invitations: this.invitations.value, // Guests mapped to invitations
        items: this.items.value.map((item: any) => ({
          ...item,
          broughtBy: item.broughtBy ? { guest_phone: item.broughtBy } : null
        }))
      };
      console.log(partyData);

      this.partyService.createParty(partyData).subscribe(
        (response) => {
          console.log('Party created successfully!', response);
        },
        (error) => {
          console.error('Error creating party:', error);
        }
      );
    } else {
      console.log('Form is invalid.');
      this.validateAllFormFields(this.partyForm);
    }
  }
}
