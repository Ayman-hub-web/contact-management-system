import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/app/models/contact.class';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {
  myData:MyContact[] | any = [];
  searchText:string | any;
  constructor(private contact:ContactService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.contact.getAllContact()
    .subscribe(result =>{
      this.myData = result;
      console.log(result);
    })
  }
  deleteContact(id:string){
    this.contact.deleteContactById(id)
    .subscribe(result =>{
      this.ngOnInit();
    })
  }
}
