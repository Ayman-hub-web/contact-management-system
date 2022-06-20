import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { MyContact } from 'src/app/models/contact.class';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

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
      this.data = result;
    })
  }
  viewContact(){
    
  }

}
