import { Component, OnInit } from '@angular/core'; 
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-broker-sign-up',
  templateUrl: './broker-sign-up.component.html',
  styleUrls: ['./broker-sign-up.component.scss']
})
export class BrokerSignUpComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ 
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      phoneNumber: ["",Validators.required],
      email: ["",Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
       
    });
  }

}
