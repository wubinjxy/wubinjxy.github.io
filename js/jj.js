	$('.wai').mousemove(function (){
			
		var bgcolor=$(this).attr("name")
			
			$("#bg").css("background-color",bgcolor)
		})
		
		
		$('.imgs').mousemove(function (){
			
	
			var id= $(this).attr("id");
			 $(this).attr("src",id)
		})
		
		$('.imgs').mouseleave(function (){
			
		var name = $(this).attr("name")
		 $(this).attr("src",name)
	
		})