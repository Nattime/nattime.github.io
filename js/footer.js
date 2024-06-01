window.onload = function(){
	var w = window.innerWidth;
	var h = window.innerHeight;
    var footer_info = document.getElementsByClassName("footer-info clear");
    var footer_height = footer_info[0].offsetHeight;
    var _footer = document.querySelector('footer');
    
	// alert(h);
	// alert(w);
	if(w < 480){
		// alert(w);
		footer_info[0].style.margin = (h - footer_height + 10) + "px 0px 0px 0px";
	}
    var footer_year = "2024";
    var footer_update_date = "May 28, 2024";
    _footer.innerHTML = '<p class="copyright-info">Copyright &copy; ' + footer_year + '. Designed by <span class="genitx">Genitx</span>. Updated ' + footer_update_date + '</p>';
    _footer.style.clear = "both";
    _footer.style.textAlign = "center";
	_footer.style.fontSize = ".75em";
	_footer.style.paddingTop = "1%";
	_footer.style.paddingBottom = "1%";
    var _genitx = document.querySelector(".genitx");
    _genitx.style.display = "inline";
    _genitx.style.color = "darkred";
    _genitx.onmouseover = function(){_genitx.style.color = "white";};
    _genitx.onmouseout = function(){_genitx.style.color = "darkred";};
}