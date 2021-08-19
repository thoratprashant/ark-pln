import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lp-sign-up',
  templateUrl: './lp-sign-up.component.html',
  styleUrls: ['./lp-sign-up.component.scss']
})
export class LpSignUpComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() { 

    this.firstFormGroup = this._formBuilder.group({ 
      firstName: ["",Validators.required],
      lastName: ["",Validators.required], 
      email: ["",Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({ });
    this.thirdFormGroup = this._formBuilder.group({ });
  

  }
}
