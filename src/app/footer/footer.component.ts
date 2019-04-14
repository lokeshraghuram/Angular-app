import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    subscribeForm: FormGroup;
  constructor() { }

  ngOnInit () {
    this.subscribeForm = new FormGroup({
      email: new FormControl('')
    });
  }

}
