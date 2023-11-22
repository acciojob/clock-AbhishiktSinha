//your JS code here. If required.
	const dial = document.querySelector("#time");
function displayClock() {
	let currDate = new Date();
	dial.innerHTML = `${currDate.toLocaleDateString()}, ${currDate.toLocaleTimeString()}`;
}
setInterval(displayClock, 1000);