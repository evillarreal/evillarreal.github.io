$(document).ready(function() {
	$("#moremenu").hide();
	$("#more").css('cursor', 'pointer');
	$("#more").hover(function(){
		$("#moremenu").toggle(300);
	});

	$("p").hide();
	$(".see_more").css('cursor', 'pointer');
	$(".see_more").click(function(){
		$(".see_more>p").toggle(300);
	});

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
