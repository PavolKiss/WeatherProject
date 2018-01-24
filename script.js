$(document).ready(function() {
	$("#getdt").click(function(){

		var city = $("#city").val();
		var code = $("#code").val();
		if (city.length>1) {
			var urllink='api.openweathermap.org/data/2.5/weather?q=';
				urllink=urllink + city;
			if (code.length==2){
				urllink=urllink+','+code;
			}
			urllink=urllink+'&appid=3bcfc1bb74a376edc543221f09e273b9';
			console.log(urllink);
		}

		$.ajax({
			url: urllink,
			data : ( format: 'json' );
			error : function(){
				//vypis chyby
			},
			dataType: 'json',
			sucess: function(data){
				console.log("temp:"+data.main.temp);
				console.log("desc:"+data.weather[0].description);
			},
			type: 'GET'
		});
})

});	