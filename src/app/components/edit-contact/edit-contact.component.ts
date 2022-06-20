import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { MyContact } from 'src/app/models/contact.class';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  myCont= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(''),
    company: new FormControl(''),
    mobile: new FormControl(''),
    title: new FormControl(''),
    groupId: new FormControl('3'),
  });
data:MyContact | any;
id :any;
  constructor(private contact:ContactService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params =>{
      this.id = params['id'];
      return this.id;
    }), 
    mergeMap(id => this.contact.getContactById(id)))
    .subscribe(result =>{
      console.log(result);
      let cont = result;
      this.myCont = new FormGroup({
        name: new FormControl(result.name),
    email: new FormControl(result.email),
    photo: new FormControl(result.photo),
    company: new FormControl(result.company),
    mobile: new FormControl(result.mobile),
    title: new FormControl(result.title),
    groupId: new FormControl(result.groupId),
      })
    })
  }

  updateContact(){
    let cont = this.myCont.value;
    this.contact.updateContact(this.id, cont)
    .subscribe(result =>{
      this.router.navigate(['/'], {relativeTo: this.route})
    })
  }


}
