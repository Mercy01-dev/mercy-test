import { Component, Inject } from '@angular/core';
import { UserService } from '../user.service';

import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userDataForm: FormGroup;
  constructor(private userservice: UserService) {}
  message: string = '';
  isSubmitted = true;

  ngOnInit(): void {
    this.userDataForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onStoreValues() {
    this.userservice.storeValues(
      this.userDataForm.get('Name')!,
      this.userDataForm.get('contact')!,
      this.userDataForm.get('email')!,
      this.userDataForm.get('password')!
    );
    this.message = 'User Created Successfully!';
    this.isSubmitted = false;
  }
}
