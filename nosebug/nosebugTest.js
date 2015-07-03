function assertTag(tagName) {
	if(document.getElementById(tagName))
		return true;
	else
		return false;
}	

document.addEventListener('nosebug', function() {
	if(assertTag('testOne') &&
		assertTag('testTwo') &&
		assertTag('testThree'))
		//document.write('All tests passed');
		document.getElementById('testSuccess').style.display = '';
	else
		document.write('You dun goofed');
});