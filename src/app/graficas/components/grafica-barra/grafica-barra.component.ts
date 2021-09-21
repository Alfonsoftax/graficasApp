import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal:boolean= false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  @Input() barChartLabels: Label[] =
   [
     //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor: '#E6A090',hoverBackgroundColor:'red' },
    // { data: [28, 48, 40, 19, 86, 27, 100], label: 'Series B',backgroundColor: '#46FF59',hoverBackgroundColor:'red'},
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C',backgroundColor: '#1E71E3',hoverBackgroundColor:'red' }
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  
  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType='horizontalBar';
    }
  }

}
