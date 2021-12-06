import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(
    private formBuilder : FormBuilder,
    private service : ApiserviceService,
    private route:ActivatedRoute
  ) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.route.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.patchValue({
          fullname:res.data[0].fullname,
          email:res.data[0].email,
          mobile:res.data[0].mobile
        });
    });
    }
  }

  userForm = new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'mobile': new FormControl('',Validators.required)
  })

  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.service.postData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.reset();
        this.successmsg = "user created successfully!"
      })
    }
    else{
      console.log("All fields are required!")
      this.errormsg = "All fields are required!";
    }
  }

  userUpdate(){
    if(this.userForm.valid){
      this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,"resupdate");
        this.successmsg = "Updated Successfully!";
      })
    }
    else{
      this.errormsg = "Update Failed!";
    }
  }

}
