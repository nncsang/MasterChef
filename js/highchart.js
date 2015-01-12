$(function () {
    $('#container-pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            //plotBorderWidth: 1,//null,
            plotShadow: false
        },
        credits: {
          enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Percentage',
        
            data: [
                ['Calories',   45.0],
                ['Pro',       26.8],
                ['Fat',    8.5],
                ['Carb',     6.2],
                ['vitA',   0.2],
                ['vitC',   0.2],
                ['vitF',   0.3],
            ]
        }]
    });
});


$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        credits: {
          enabled: false
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Source: Master-Chef.com'
        },
        xAxis: {
            categories: [
                'Calories',
                'Pro',
                'Fat',
                'Carb',
                'vitA',
                'vitC',
                'satF'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'gram'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '',
            data: [37.14, 20.2, 15.8, 2.2, 4.0, 14.0, 10.6]

        }]
    });
});