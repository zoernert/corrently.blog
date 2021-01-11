(function ( $ ) {
    $.fn.correntlyReading=function(account) {
      let q = account;
      if(this.attr("data-account") != null ) q=this.attr("data-account");
      if(this.attr("account") != null ) q=this.attr("account");

      if(q == null) q = $.getUrlVar('a');
      if(q == null) q="0x26D53FC47581E8F9f94Eadf71eFd7F57C931b9D9";
      const tokWh = function(n) {
        return (n/1000).toFixed(3).replace('.',',');
      }
      const parent = this;
      const refreshReading = function() {
          $.getJSON("https://api.corrently.io/core/reading?&history=3600000&account="+q,function(data) {
            let html = "<div class='table-responsive'><table class='table table-sm'>";
            html+="<tr><th>&nbsp;</th><th title='"+q+"'>Einrichtung<br/>Zählerstand</th><th>Belieferung<br/>Zählerstand</th><th>Diffferenz</th><th>Letzte Ablesung</th></tr>";
            html+="<tr>";
            html+="<td></td>";
            html+="<td></td>";
            html+="<td>"+new Date(data.firstReading.timeStamp).toLocaleString()+"</td>";
            html+="<td>"+((data.timeStamp-data.firstReading.timeStamp)/86400000).toFixed(1).replace('.',',')+" Tage</td>";
            html+="<td>"+new Date(data.timeStamp).toLocaleString()+"</td>";
            html+="</tr>";
            html+="<tr>";
            html+="<td>1.8.0</td>";
            html+="<td>"+tokWh((data["1.8.0"]-(data["1.8.1"]+data["1.8.2"])))+"</td>";
            html+="<td>"+tokWh(data.firstReading["1.8.0"])+"</td>";
            html+="<td>"+tokWh((data["1.8.1"]+data["1.8.2"]))+"</td>";
            html+="<td>"+tokWh(data["1.8.0"])+"</td>";
            html+="</tr>";
            html+="<tr>";
            html+="<td>1.8.1</td>";
            html+="<td>&nbsp;</td>";
            html+="<td>"+tokWh(data.firstReading["1.8.1"])+"</td>";
            html+="<td>"+tokWh(data["1.8.1"])+"</td>";
            html+="<td>"+tokWh(data["1.8.1"])+"</td>";
            html+="</tr>";
            html+="<tr>";
            html+="<td>1.8.2</td>";
            html+="<td>&nbsp;</td>";
            html+="<td>"+tokWh(data.firstReading["1.8.2"])+"</td>";
            html+="<td>"+tokWh(data["1.8.2"])+"</td>";
            html+="<td>"+tokWh(data["1.8.2"])+"</td>";
            html+="</tr>";
            html+= "</table></div>";
            parent.html(html);
            if(parent == null) {
              $('#gsi_card').html(html);
            }
          });
      };
      refreshReading();
      setInterval(refreshReading,60000);
    },
    $.fn.correntlyMSCONS=function(account) {
      let q = account;
      if(this.attr("data-account") != null ) q=this.attr("data-account");
      if(this.attr("account") != null ) q=this.attr("account");

      if(q == null) q = $.getUrlVar('a');
      if(q == null) q="0x26D53FC47581E8F9f94Eadf71eFd7F57C931b9D9";
      const parent = this;
      const refreshReading = function() {
         $.getJSON("https://api.corrently.io/edifact/mscons_2.2i?account="+q,function(data) {
            let html="";
            html+="<code>";
            html+=data.msg;
            html+="</code>";
            parent.html(html);
        });
      }
      refreshReading();
      setInterval(refreshReading,60000);
    }
}( jQuery ));
