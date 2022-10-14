import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }


  
  name=""
  phone=""
  gender=""
  email=""
  address=""
  pincode=""
  bloodGroup=""
  dob=""
  age=""
  parentName=""
  password=""
  confirmPass=""

  status:boolean=false

  readValues=()=>{
    let data={
      "name":this.name,
  "phone":this.phone,
  "gender":this.gender,
  "email":this.email,
  "address":this.address,
  "pincode":this.pincode,
  "bloodGroup":this.bloodGroup,
  "dob":this.dob,
  "age":this.age,
  "parentName":this.parentName,
  "password":this.password,
  "confirmPass":this.confirmPass
    }
    console.log(data)
    this.status=true
  }


  ngOnInit(): void {
  }

}
