function assertTag(tagName) {
	if(document.getElementById(tagName))
		return true;
	else
		return false;
}	

document.addEventListener('nosebug', function() {
	if(assertTag('testOne') &&
		assertTag('testTwo') &&
		assertTag('testThree') &&
		window.nosebug.ready)
		document.getElementById('testSuccess').style.display = '';
	else
		document.write('You dun goofed');
});