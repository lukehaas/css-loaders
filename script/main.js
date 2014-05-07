$(function() {
	$(".load-container a").on("click",function() {
		var hash = $(this).attr("href");
		var clas = "\\"+hash.replace("#",".") + " ";
		
		var re = new RegExp(clas, "g");
		
		var css = $(hash).find(".css").val().replace(re,"");

		$(hash).find(".css").val(css);
		$(".overlay,"+hash).removeClass("hidden");
		
		return false;
	});
	$(".overlay").on("click",function() {
		$(".source,.overlay").addClass("hidden");

	});
});
