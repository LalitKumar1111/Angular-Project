import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ab:string="";
  colora:string="";
  showModal: boolean=false;
  Rvalue:any;
  submitted=false;
  msg:string='';


  show()
  {
    this.showModal=true; //show-hide model check
  }
  // bootstrap model close event
  hide()
  {
    this.showModal=false;
  }

  userForm:any=this.fb.group(
    {
      'name':this.fb.group({
        'fname':this.fb.control('',[Validators.required,Validators.minLength(3)]),
        'lname':this.fb.control('',[Validators.required,Validators.minLength(3)]),
      }),
      'phone':this.fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      'email':this.fb.control('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

      'pwd':this.fb.control('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')]),
      'rpwd':this.fb.control('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')]),
      
    },)


   constructor(private fb:FormBuilder, public router:Router){
    setTimeout(() =>{
      console.log (this.userForm.controls.rpwd.value)
    },1000
    )
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
  }

  submit(){
    if( this.userForm.controls.rpwd.value==this.userForm.controls.pwd.value )
    {
     this.ab="Successfully Signed Up";
     this.colora='green';

    }
    else{
      this.ab="Sign Up Failed";
      this.colora='red';

    }
  }
}
