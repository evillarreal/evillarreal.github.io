$(document).ready(function() {

	$("img").css('cursor', 'pointer');
	$("img").click(function(){
		$(this).animate({"height":"400", "width":"auto"});
	});

	$("img").click(function(){
		if($(this).height()<399){
			$(this).animate({"height":"400", "width":"auto"});
		}
		else{
			$(this).animate({"height":"200", "width":"auto"});
		}
	});

});
