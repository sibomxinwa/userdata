import { Component, OnInit } from '@angular/core';
import { KeyserviceService } from '../keyservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list;

  constructor(private Keyservice: KeyserviceService) {
    this.Keyservice.getnews().subscribe((data) => {
      this.list = data;
      console.log(data);
    });
   }

  ngOnInit() {
  }

}

