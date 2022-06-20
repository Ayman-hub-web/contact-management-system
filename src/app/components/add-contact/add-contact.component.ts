import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/app/models/contact.class';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  myCont= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(''),
    company: new FormControl(''),
    mobile: new FormControl(''),
    title: new FormControl(''),
    groupId: new FormControl('3'),
  });
  constructor(private contact:ContactService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  AddNewContact(){
    const conForm = this.myCont.value;

    this.contact.addContact(conForm)
    .subscribe(result =>{
      this.router.navigate(['/'], {relativeTo: this.route})
    })
  }
}
