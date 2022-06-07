import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Log2Service } from '../log2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {

  // ----------------------------------------------------------------

  // userForm:any=this.fb.group(
  //   {
  //     'username':this.fb.control('',[Validators.required,Validators.maxLength(6)]),
  //     'pwd':this.fb.control('',[Validators.required,Validators.minLength(8)]),

  //   })

  // constructor(private fb:FormBuilder,public router:Router) {
  //   setTimeout(() =>{
  //     console.log ('this.userForm')
  //   },1000
  //   )
  //  }

  //-------------------------------------------------------------------

  showModal: boolean=false;
  userform:any;
  Rvalue:any;
  submitted=false;
  msg:string='';
  // userform1 =this.formBuilder.group({
  //   'email':this.formBuilder.control("",Validators.required),
  //   'password':this.formBuilder.control("",[Validators.required,Validators.pattern("")])
  // })


  show()
  {
    this.showModal=true; //show-hide model check
  }
  // bootstrap model close event
  hide()
  {
    this.showModal=false;
  }


  constructor(private formBuilder: FormBuilder,public router:Router, private service:Log2Service) { 
   
  }


  ngOnInit() {
    this.userform = this.formBuilder.group({
      'email':this.formBuilder.control ('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      'password': this.formBuilder.control ('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')])
  });
  
    // this.Rvalue=this.userform.controls.email.value
    // console.log(this.Rvalue)
  }

 
  

// convenience getter for easy access to form fields
  // get f() { return this.userform.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userform.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
  }
  
  // dashboard(){
  //   if( this.userform.controls.email.value=="abc@gmail.com" && this.userform.controls.password.value=="Abcd1234@" )
  //   {
  //    this.router.navigate(['/dashboard'])
  //   }
  //   else{
  //     this.msg="[Wrong E-mail/Password]"
  //   }

  // }


  dashboard(){
    var uname=this.userform.controls.email.value;
    var pwd=this.userform.controls.password.value;

    var output = this.service.checkusernameandpassword(uname,pwd);
    if(output == true){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.msg="[Invalid Username/Password]";
    }
  }

}
