import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TimeService } from './time.service.component';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() _id: string;
  @Input() nome: string;
  @Input() descricao: string;

  constructor() { }

  ngOnInit() {
  }

}
