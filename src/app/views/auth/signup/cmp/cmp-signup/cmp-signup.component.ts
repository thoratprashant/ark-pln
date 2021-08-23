 

import { Component, OnInit } from '@angular/core'; 
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cmp-signup',
  templateUrl: './cmp-signup.component.html',
  styleUrls: ['./cmp-signup.component.scss']
})
export class CmpSignupComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
 
  privacyPolicySec = true;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    console.log('load signup')

    this.firstFormGroup = this._formBuilder.group({ 
      firstName: ["",Validators.required],
      lastName: ["",Validators.required], 
      email: ["",Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({ });
    this.thirdFormGroup = this._formBuilder.group({ });
  }

  
  privacyOkBtn() {
    this.privacyPolicySec = false;
  }
}
