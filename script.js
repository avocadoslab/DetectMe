document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 45) {
        alert('Alert Key Pressed.');
        var old = document.getElementById('input').value;
    		document.getElementById('input').value= old + "@texting.com";
    }
};