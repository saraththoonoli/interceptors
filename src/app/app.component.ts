import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contacts: any[] = []
  // DI 
  constructor(private contactService: ContactService) { }
  // get details
  ngOnInit(): void {
    this.contactService.getContact().subscribe((data) => {
      this.contacts = data;
      console.log(data);

    })

  }

}
