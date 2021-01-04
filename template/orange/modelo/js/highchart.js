function chartGit(){

Highcharts.chart('chartgit', {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Commits on month'
    },
    subtitle: {
      text: 'January'
    },
    xAxis: {
        categories: ['01','02','03','04','05','06','07','08','09','10','11',
                     '12','13','14','15','16','17','18','19','20','21','22',
                         '23','24','25','26','27','28','29','30','31'],
      title: {        
        text: 'Dia (mês)'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
        categories: ['00','01','02','03','04','05','06','07','08','09','10','11','12',
                     '13','14','15','16','17','18','19','20','21','22','23','24'],
      title: {
        text: 'Hora'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} cm, {point.y} kg'
        }
      }
    },
    series: [{
      name: 'Commit',
      color: 'rgba(123, 239, 178, .5)', /*'rgba(162, 222, 208, .5)', */
      data: [
        [01,09],[01,08.5],	
        [02,08.3],[02,09],	
        [03,10],[03,10],	
        [04,11],[04,10],	
        [05,09],[05,13],	
        [06,08],[06,15],	
        [07,09.3],[07,14.5],	
        [08,09.4],[08,14],	
        [09,],[09,14.5],	
        [10,09],[10,14.5],	
        [11,10],[11,16],
        [12,11],[12,14.5],
        [13,12],[13,14.5],
        [14,13],[14,11],
        [15,14],[15,14.5],
        [16,15],[16,14.5],
        [17,16],[17,14.5],
        [18,17],[18,14.5],
        [19,17],[19,14.5],
        [20,17],[20,14.5],
        [21,17],[21,14.5],
        [22,17.5],[22,15],
        [23,17.5],[23,16],
        [24,17.5],[24,17],
        [25,17.5],[25,10],
        [26,17.5],[26,09],
        [27,17.5],[27,09.5],
        [28,17.5],[28,10.3],
        [29,17.5],[29,11.3],
        [30,17.5],[30,17.3] ] 
    }],
    credits: false
  });
}