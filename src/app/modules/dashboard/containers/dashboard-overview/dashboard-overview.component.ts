import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexPlotOptions, ApexChart, ApexFill, ChartComponent, ApexStroke } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss'],
})
export class DashboardOverviewComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;

  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [75],
      chart: {
        fontFamily: 'Poppins, Poppins, sans-serif',
        height: '100%',
        width: '100%',
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '66%',
            background: 'transparent',
            image: undefined,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#FAA9C6',
            strokeWidth: '100%',
            margin: 0, // margin is in pixels
          },
          dataLabels: {
            show: true,
            value: {
              formatter(val: any) {
                return parseInt(val.toString(), 10).toString();
              },
              color: '#FD64A9',
              offsetY: -8,
              fontSize: '20px',
              fontWeight: '20',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        colors: ['#FD749B'],
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#8340B5'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: [''],
    };
  }

  ngOnInit(): void {}
}
