import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  readData:any;
  successmsg:any;
  constructor(
    private service : ApiserviceService
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res=>");
      this.readData = res.data;
    });
  }

  deleteID(id:any){
    console.log(id,'deleteID');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'delete');
      this.successmsg = "Data deleted successfully!"
      this.getAllData();
    })
  }
}
