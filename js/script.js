$( document ).ready(function() {
    events();
});


function events() {

	$(".options").click(function(e){
		if ($(e.target).hasClass("right"))
		{
			localStorage.setItem('score',parseInt(localStorage.getItem('score'))+1);
			console.log("CERTO");
		}
    	$(".answer").show();
	});


}