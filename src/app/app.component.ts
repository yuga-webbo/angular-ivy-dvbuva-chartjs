import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartArea, Color, ScriptableContext } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { SankeyController, Flow } from 'chartjs-chart-sankey';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  delayed: boolean;
  context01: CanvasRenderingContext2D;
  context02: CanvasRenderingContext2D;
  context03: CanvasRenderingContext2D;
  context04: CanvasRenderingContext2D;
  @ViewChild('canvas01') canvas01: ElementRef;
  @ViewChild('canvas02') canvas02: ElementRef;
  @ViewChild('canvas03') canvas03: ElementRef;
  @ViewChild('canvas04') canvas04: ElementRef;

  ngAfterViewInit() {
    // canvas01
    this.context01 = this.canvas01.nativeElement.getContext('2d');
    const getGradient = (
      ctx: CanvasRenderingContext2D,
      ca: ChartArea,
      startColor: string,
      endColor: string
    ) => {
      if (ca) {
        const gradient = ctx.createLinearGradient(0, ca.bottom, 0, ca.top);
        gradient.addColorStop(1, startColor);
        // gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
        // gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        gradient.addColorStop(0, endColor);
        return gradient;
      }
    };

    let canvas01 = new Chart(this.context01, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Data01',
            backgroundColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(255, 255, 0, 1)',
                'rgba(255, 255, 255, 0.9)'
              );
            },
            borderColor: 'rgba(255, 99, 132, 0)',
            pointRadius: 0,
            fill: true,
            tension: 0.3,
            data: [
              { x: 0, y: 2 },
              { x: 1, y: 1 },
              { x: 2, y: 2.5 },
              { x: 3, y: 5 },
              { x: 4, y: 3 },
              { x: 5, y: 4 },
              { x: 6, y: 8 },
              { x: 7, y: 7 },
              { x: 8, y: 9 },
            ],
          },
          {
            label: 'Data02',
            // backgroundColor: getBackgroundColor(context),
            backgroundColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(153, 255, 255, 1)',
                'rgba(255, 255, 255, 0.9)'
              );
            },
            borderColor: 'rgba(255, 99, 132, 0)',
            pointRadius: 0,
            fill: true,
            tension: 0.3,
            data: [
              { x: 0, y: 1 },
              { x: 1, y: 4 },
              { x: 2, y: 8 },
              { x: 3, y: 6 },
              { x: 4, y: 1 },
              { x: 5, y: 5 },
              { x: 6, y: 2 },
              { x: 7, y: 3 },
              { x: 8, y: 1 },
            ],
          },
          {
            label: 'Data03',
            backgroundColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(255, 0, 0, 1)',
                'rgba(255, 255, 255, 0.9)'
              );
            },
            borderColor: 'rgba(255, 99, 132, 0)',
            pointRadius: 0,
            fill: true,
            tension: 0.3,
            data: [
              { x: 0, y: 4 },
              { x: 1, y: 6 },
              { x: 2, y: 4 },
              { x: 3, y: 5 },
              { x: 4, y: 6 },
              { x: 5, y: 4 },
              { x: 6, y: 4 },
              { x: 7, y: 6 },
              { x: 8, y: 5 },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'X',
            },
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Y',
            },
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Angular & Chart.js',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: 'Line Chart',
            font: {
              size: 12,
              family: 'tahoma',
              weight: 'normal',
              style: 'italic',
            },
            padding: {
              bottom: 10,
            },
          },
          legend: {
            labels: {
              font: {
                size: 12,
              },
            },
            // onHover(event, legendItem, legend) {}, // https://www.chartjs.org/docs/latest/samples/legend/events.html
            // onHover: this.handleHover,
            // onLeave: this.handleLeave,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
      },
    });

    // canvas02
    this.context02 = this.canvas02.nativeElement.getContext('2d');
    let canvas02 = new Chart(this.context02, {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {
        datasets: [
          {
            label: 'Bar Data 1',
            backgroundColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(255, 255, 0, 1)',
                'rgba(255, 247, 0, 0.5)'
              );
            },
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            data: [10, 20, 30, 40],
            datalabels: {
              align: 'center',
              anchor: 'center',
            },
            order: 1,
          },
          {
            label: 'Bar Data 2',
            // backgroundColor: 'rgba(153, 255, 255, 1)',
            backgroundColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(153, 255, 255, 1)',
                'rgba(200, 216, 255, 0.5)'
              );
            },
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            data: [22, 42, 34, 30],
            datalabels: {
              align: 'center',
              anchor: 'center',
            },
            order: 1,
          },
          {
            label: 'Line Data',
            // backgroundColor: 'rgba(255, 0, 0, 1)',
            backgroundColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(255, 0, 0, 1)',
                'rgba(255, 200, 200, 1)'
              );
            },
            // borderColor: 'rgba(255, 0, 0, 1)',
            borderColor(context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(
                ctx,
                chartArea,
                'rgba(255, 0, 0, 1)',
                'rgba(255, 200, 200, 1)'
              );
            },

            data: [45, 37, 39, 24],
            datalabels: {
              align: 'center',
              anchor: 'center',
            },
            pointStyle: 'circle',
            pointRadius: 10,
            type: 'line',
            fill: false,
            order: 0,
          },
        ],
        labels: ['January', 'February', 'March', 'April'],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Y',
            },
          },
        },
        animation: {
          onComplete: () => {
            this.delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (!this.delayed) {
              delay = context.dataIndex * 600 + context.datasetIndex * 600;
            }
            return delay;
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Angular & Chart.js',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: 'Bar Chart & Multiple Chart',
            font: {
              size: 12,
              family: 'tahoma',
              weight: 'normal',
              style: 'italic',
            },
            padding: {
              bottom: 10,
            },
          },
          legend: {
            labels: {
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          datalabels: {
            color: 'white',
            display: function (context) {
              return context.dataset.data[context.dataIndex] > 15;
            },
            font: {
              weight: 'bold',
              size: 16,
            },
            formatter: Math.round,
          },
        },
      },
    });

    // canvas03
    this.context03 = this.canvas03.nativeElement.getContext('2d');
    let canvas03 = new Chart(this.context03, {
      type: 'pie',
      plugins: [ChartDataLabels],
      data: {
        labels: ['Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
        datasets: [
          {
            backgroundColor: [
              '#ffc8008d',
              '#00a5fe8d',
              '#ff00007d',
              '#1aff007d',
              '#8c00ff7d',
              // '#ffff007d',
              // '#99ffff7d',
              // '#ff00007d',
              // '#00ff117d',
              // '#8c00ff7d',
            ],
            data: [60, 20, 15, 10, 5],
            // datalabels: {
            //   anchor: 'center',
            // },
            datalabels: {
              labels: {
                name: {
                  align: 'top',
                  font: { size: 16 },
                  formatter: function (value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex];
                  },
                },
                value: {
                  align: 'bottom',
                  // backgroundColor: function (ctx) {
                  //   var value = ctx.dataset.data[ctx.dataIndex];
                  //   return value > 50 ? 'white' : null;
                  // },
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: 4,
                  // color: function (ctx) {
                  //   var value = ctx.dataset.data[ctx.dataIndex];
                  //   return value > 50
                  //     ? (ctx.dataset.backgroundColor as string)
                  //     : 'white';
                  // },
                  formatter: function (value, ctx) {
                    return Math.round(value * 1000) / 1000;
                  },
                  padding: 4,
                },
              },
            },
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Angular & Chart.js',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: 'Pie Chart & Datalabels',
            font: {
              size: 12,
              family: 'tahoma',
              weight: 'normal',
              style: 'italic',
            },
            padding: {
              bottom: 10,
            },
          },
          legend: {
            labels: {
              font: {
                size: 12,
              },
            },
            onHover(evt, item, legend) {
              (legend.chart.data.datasets[0].backgroundColor as string[]) // ??
                .forEach((color, index, colors) => {
                  colors[index] =
                    index === (item as any).index
                      ? color
                      : color.slice(0, -2) + '1d';
                });
              legend.chart.update();
            },

            onLeave(evt, item, legend) {
              (
                legend.chart.data.datasets[0].backgroundColor as string[]
              ).forEach((color, index, colors) => {
                colors[index] = color.slice(0, -2) + '7d';
              });
              legend.chart.update();
            },
          },
          // datalabels: {
          //   backgroundColor(context) {
          //     return context.dataset.backgroundColor as string; // https://github.com/chartjs/chartjs-plugin-datalabels/issues/169
          //   },
          //   borderColor: 'white',
          //   borderRadius: 25,
          //   borderWidth: 2,
          //   color: 'white',
          //   display: function (context) {
          //     var dataset = context.dataset;
          //     var count = dataset.data.length;
          //     var value = dataset.data[context.dataIndex];
          //     return value > count * 1.5;
          //   },
          //   font: {
          //     weight: 'bold',
          //   },
          //   padding: 6,
          //   formatter: Math.round,
          // },
          datalabels: {
            color: 'white',
            display: function (ctx) {
              return ctx.dataset.data[ctx.dataIndex] >= 10;
            },
            font: {
              weight: 'bold',
            },
            offset: 0,
            padding: 0,
          },
        },
      },
    });

    const colors = {
      a: 'red',
      b: 'green',
      c: 'blue',
      d: 'gray',
    };
    const getColor = (key) => colors[key];

    // canvas04
    this.context04 = this.canvas04.nativeElement.getContext('2d');
    let canvas04 = new Chart(this.context04, {
      type: 'sankey',
      plugins: [SankeyController, Flow],
      data: {
        datasets: [
          {
            label: 'My sankey',
            data: [
              { from: 'a', to: 'b', flow: 10 },
              { from: 'a', to: 'c', flow: 5 },
              { from: 'b', to: 'c', flow: 10 },
              { from: 'd', to: 'c', flow: 7 },
            ],
            colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
            colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
            colorMode: 'gradient', // or 'from' or 'to'
            labels: {
              a: 'Label A',
              b: 'Label B',
              c: 'Label C',
              d: 'Label D',
            },
            priority: {
              b: 1,
              d: 0,
            },
            column: {
              d: 1,
            },
            size: 'max',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Angular & Chart.js',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: 'Sankey Chart',
            font: {
              size: 12,
              family: 'tahoma',
              weight: 'normal',
              style: 'italic',
            },
            padding: {
              bottom: 10,
            },
          },
        },
      },
    });
  }
}
