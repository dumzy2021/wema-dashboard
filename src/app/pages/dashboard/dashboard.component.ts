import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  highcharts: any = Highcharts;
  series1: number[] = [
    16.0, 68.2, 23.1, 27.9, 32.2, 26.4, 39.8, 28.4, 35.5, 29.2, 22.0, 47.8,
  ];
  series2: number[] = [
    46.0, 18.2, 23.1, 57.9, 22.2, 36.4, 49.8, 38.4, 45.5, 39.2, 32.0, 37.8,
  ];
  series1Label: string = 'Agents';
  series2Label: string = 'Users';
  donutSeries: any[] = [{ type: 'pie', name: '', data: [] }];
  chartOptions: Highcharts.Options = {};
  chartOptions2: Highcharts.Options = {};
  listOfData: any[] = [
    {
      name: 'Michael Olu',
      email: 'michael@mail.com',
      type: 'New Agent',
      status: 'pending',
      date: '23/04/18',
    },
    {
      name: 'Chioma James',
      email: 'alexa@mail.com',
      type: 'Account Deactivation',
      status: 'pending',
      date: '23/04/20',
    },
    {
      name: 'Boluwatife Ade',
      email: 'laure@mail.com',
      type: 'New User',
      status: 'active',
      date: '23/04/20',
    },
    {
      name: 'Miriam Eric',
      email: 'miriam@mail.com',
      type: 'Email Auth',
      status: 'failed',
      date: '20/04/22',
    },
  ];
  ngOnInit(): void {
    this.createLineChart();
    this.createBarChart();
  }
  createLineChart() {
    this.chartOptions = {
      chart: {
        type: 'spline',
      },
      title: {
        text: '',
      },
      xAxis: {
        title: {
          text: '',
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: this.series1Label,
          data: this.series1,
          type: 'spline',
          color: '#5F2EEA',
        },
        {
          name: this.series2Label,
          data: this.series2,
          type: 'spline',
          color: '#4BDE97',
        },
      ],
      // exporting: {
      //   enabled: true,
      //   buttons: {
      //     contextButton: {
      //       enabled: true,
      //       align: 'right',
      //     },
      //   },
      // },
    };
  }
  createBarChart() {
    this.chartOptions2 = {
      chart: {
        type: 'column',
        backgroundColor: '#990d81',
      },

      title: {
        text: '',
      },
      xAxis: {
        title: {
          text: '',
        },
        labels: {
          useHTML: true,
          formatter: function () {
            return '<span class="wema-label">' + this.value + '</span>';
          },
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: {
        title: {
          text: '',
        },
        labels: {
          useHTML: true,
          formatter: function () {
            return '<span class="wema-label">' + this.value + '</span>';
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Users',
          data: this.series1,
          type: 'column',
          color: '#fff',
        },
      ],
    };
  }
}
