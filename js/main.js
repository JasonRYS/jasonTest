
$(function(){	
	var b = -300;
	$("h1").click(function(){	
		var ithis = $(this);	
		console.log(b);
		if (b*(-1) > 0) {
			b = 300;
		}else{
			b = -600;
		}
		ithis.animate({
			top:b*(-1)+"px"
		},1000)	
	})

})
