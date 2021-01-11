const cb_location = function(location) {
  $('#dispatchCard').show();
  $('#dispatch_card').correntlyGSIDispatch(location.zip);
  $('#nort').html(location.zip+" "+location.city);
}

$(document).ready(function() {

  if( $( "#gsi_card" ).length ) {
       if($.getUrlVar("q") == null) {
         $('#gsi_card').correntlyGSI(); // GSI basierend auf GEOIp
       } else {
         $('#gsi_card').correntlyGSI($.getUrlVar("q") ); // GSI basierend auf Übergabewert
         $('#dispatchCard').show();
         $('#dispatch_card').correntlyGSIDispatch($.getUrlVar("q"));
       }
  }
    $.getJSON("https://api.corrently.io/dispatch/market",function(data) {
        $('#no_dispatches').html(data.dispatches.length);
        $('#no_km').html(data.costfactor.toFixed(1).replace('.',',')+" km");
        $('#no_energy').html(data.energy);
        $('#no_update').html(new Date(data.updated).toLocaleString());
        if($('#no_table').length) {
          var html="";
          for(let i=0; i<data.dispatches.length; i++) {
            html+="<tr><td><a href='https://corrently.de/index.html?zip="+data.dispatches[i].generator.zip+"' target='_new' class='btn btn-sm'>"+data.dispatches[i].generator.city+"</a></td><td><a href='https://corrently.energy/index.html?q="+data.dispatches[i].consumer.zip+"' target='_new' class='btn btn-sm'>"+data.dispatches[i].consumer.city+"</a></td><td>"+data.dispatches[i].energy+"</td><td>"+data.dispatches[i].distance.toFixed(2)+"</td></tr>"
          }
          $('#no_table').html(html);
        }
    });
    if($('#distributionChart').length) {
      $.getJSON("https://api.corrently.io/gridgraph/graph",function(results){
         // Create the chart.js data structure using 'labels' and 'data'
        var ctx = document.getElementById("distributionChart").getContext("2d");
         let myChart = new Chart(ctx, {
             type: 'line',
             data: {
               datasets: [{
                   type:'line',
                   label: 'Entfernung',
                   data: results.distance,
                   borderColor: '#ff0000',
                   backgroundColor:'#ff0000',
                   fill: false,
                   yAxisID: 'y-axis-1'
               },
               {
                   type:'line',
                   label: 'Energiemenge',
                   data: results.energy,
                   borderColor: '#5cb85c',
                   backgroundColor: '#5cb85c',
                   fill: false,
                   yAxisID: 'y-axis-2'
               }
             ]
             },
             options: {
                 title: {
                   display:true,
                   text: 'Übertragungsentfernung und Energiemenge'
                 },
                 tooltips: {
                   callbacks: {
                      label: function (t, d) {
                             if (t.datasetIndex === 0) {
                                 return '' + t.yLabel.toFixed(1) + ' km';
                             } else if (t.datasetIndex === 1) {
                                 return '' + t.yLabel + ' ';
                             }
                           }
                    }
                 },
                 legend: { position:"bottom" },
                 scales: {
                   xAxes: [{
                       type: 'time',
                       distribution: 'linear'
                   }],
                   yAxes: [{
                         ticks: {
                             beginAtZero: true
                         },
                         display: true,
                         position: 'left',
                         id: 'y-axis-1',
                         scaleLabel: {
                           display:true,
                           labelString:'km'
                         }
                     },{
                           ticks: {
                               beginAtZero: true
                           },
                           display: true,
                           position: 'right',
                           id: 'y-axis-2',
                           scaleLabel: {
                             display:false,
                             labelString:''
                           }
                       }]
                 }
             }
         });


       });
    }
});
