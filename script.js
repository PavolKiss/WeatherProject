$(document).ready(function() {
  $("#btnOk").click(function(){
    var city=$("#city").val();
    var code=$("#code").val();
    if(city.length>1){
      var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
      urllink=urllink + city;
      if(code.length==2){
           urllink=urllink+','+code;
      }
      urllink=urllink+'&appid=3bcfc1bb74a376edc543221f09e273b9';

       $.ajax({
         url: urllink,
         data : { format: 'json' } ,
         error : function(){
         // sem sa vypise chyba
         },
         dataType: 'json',
         success : function(data){
          var temp = data.main.temp;
          temp=-273.15+temp;
          temp=Math.round(temp);
          $("#temp").text(temp+"°C");

          var pressure = data.main.pressure;
          pressure = 100*pressure;
          pressure=Math.round(pressure);
          $("#pressure").text(pressure+" Pa");

          var humidity = data.main.humidity;
          $("#humidity").text(humidity+" %");
          
          var maxtemp = data.main.temp_max;
          maxtemp=-273.15+maxtemp;
          maxtemp=Math.round(maxtemp);
          $("#maxtemp").text(maxtemp+"°C");

          var mintemp = data.main.temp_min;
          mintemp=-273.15+mintemp;
          mintemp=Math.round(mintemp);
          $("#mintemp").text(mintemp+"°C");

          var visibility = data.visibility;
          $("#visibility").text(visibility);

          var sunrise = data.sys.sunrise;
          var sunrise2 = new Date(sunrise*1000);
          var hrs = sunrise2.getHours();
          var min = sunrise2.getMinutes();
          $("#sunrise").text(hrs+":"+min);

          var sunset = data.sys.sunset;
          var sunset2 = new Date(sunset*1000);
          var hrs = sunset2.getHours();
          var min = sunset2.getMinutes();
          $("#sunset").text(hrs+":"+min);

          var windspeed = data.wind.speed;
          windspeed = 3.6*windspeed;
          windspeed=Math.round(windspeed);
          $("#windspeed").text(windspeed+" Km/h");

          var description = data.weather[0].description;
          $("#desc").text(description);
         },
         type: 'GET'

      });

    }
  });

$(document).ready(function(){
    $("#detail").click(function(){
        $("#tab2").toggle();

  });
});


});

