window.onload = function(){
	var w = window.innerWidth;
	var h = window.innerHeight;

	if(w < 780){
		var main_col = document.getElementsByClassName("main-col");

		main_col[0].style.width = "90%";
	}
}
