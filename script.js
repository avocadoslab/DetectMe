document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 45) {
        var old = document.getElementById('changeMe').value;
    		document.getElementById('changeMe').value= old + "@texting.com";
    }
};