// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         if (request.cmd === "setOnOffState") {
//             isExtensionOn = request.data.value;
//         }

//         if (request.cmd === "getOnOffState") {
//             sendResponse(isExtensionOn);
//         }
//     })
// function turnExtensionOn(){
// 	element.set
// }

function getToggleSwitch(){
	toggleSwitch = document.getElementById('toggle_switch');
	return toggleSwitch;
}

function toggleExtensionState(){
	currentState = element.checked;
	if(currentState == false){
		currentState = true;
		//call turn on state
	}
	else{
		currentState = false;
		//call turn of function
	}
	element.checked = currentState;
}

