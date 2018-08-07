function init() {
	onResize();

	$(document).ready(function(){
		var increment = 200;
        var time = 0;
        $("li").hide().each(function() {
            $(this).delay(time).fadeIn(1000);
            time += increment;
        });
	});
}
function onResize() {
	var split = document.getElementsByClassName('split');
	var header = document.getElementById('header');
	var headHeight = parseInt(getStyle(header, 'height'), 10);
	var newHeight = headHeight + 55 + "px"; //+40 makes it go directly under the header
	split[0].style.top = newHeight;
	split[1].style.top = newHeight;


	split[0].style.height = window.innerHeight - headHeight - 88 + "px"; //Minus 75 makes it fill to the bottom with a +40 height
	split[1].style.height = window.innerHeight - headHeight - 88 + "px";
}
function getStyle(el,styleProp) { //https://stackoverflow.com/questions/10556185/style-backgroundcolor-is-an-empty-string-in-javascript
    if (el.currentStyle)
        return el.currentStyle[styleProp];

    return document.defaultView.getComputedStyle(el,null)[styleProp];
}