import { Component, OnInit } from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { TimeService } from '../time/time.service.component';

@Component({
  selector: 'app-painel-times',
  templateUrl: './painel-times.component.html',
  styleUrls: ['./painel-times.component.css']
})
export class PainelTimesComponent implements OnInit {

  times: TimeComponent[] = [];

  constructor(private TimeService: TimeService) { 
    console.log('chamando construtor')
    TimeService.lista()
    .subscribe(
      times => this.times = times,
      erro => console.log(erro)
      );
  }

  ngOnInit() {
  }

}
