import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-dev-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['./dev-profile.component.scss']
})
export class DevProfileComponent implements OnInit {

  disabled = false;
 
  frameworks: string[] = ['Angular', 'React', 'Vue'];
  angularVersions: string[] = ['1.1.1', '1.2.1', '1.3.3'];
  reactVersions: string[] = ['2.1.2', '3.2.4', '4.3.1'];
  vueVersions: string[] = ['3.3.1', '5.2.1', '5.1.3'];
  frameworkversions: string[] = [];

 

  public profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(new Date("05/13/2021"), Validators.required),
    framework: new FormControl('', Validators.required),
    frameworkVersion: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    hobby: new FormArray([
      new FormControl('', Validators.required),
      new FormControl(''),
      new FormControl('')
    ])
  });



  constructor() { }

  ngOnInit(): void {
    this.profileForm.get('framework')?.valueChanges.subscribe((value) => this.updateFrameworkSelection(value)) 
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  addHobby() {

  }

  updateFrameworkSelection(framework: any) {
    switch (framework) {
      case 'Angular':
        this.frameworkversions = this.angularVersions;
        break;
      case 'React':
        this.frameworkversions = this.reactVersions;
        break;
      case 'Vue':
        this.frameworkversions = this.vueVersions;
        break;

    }
  }

  

}
