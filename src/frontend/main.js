// Get the containers
const messagesContainerEvent = document.getElementById("messages-event");
const messagesContainer = document.getElementById("messages");

// Messages stream
const evtSource = new EventSource("/my-stream");

evtSource.addEventListener("message", function (message) {
	// console.log(message);
	messagesContainer.innerHTML = message.data
});

evtSource.addEventListener("error", function (message) {
	console.error(message);
});


// Messages stream Named
// const evtSourceNamed = new EventSource("/my-stream-event");
const evtSourceNamed = new EventSource("/my-stream");


evtSourceNamed.addEventListener("ping", function (message) {
	// console.log(message);
	messagesContainerEvent.innerHTML = message.data
});

evtSourceNamed.addEventListener("error", function (message) {
	console.error(message);
});
