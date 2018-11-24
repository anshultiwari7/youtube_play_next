
function addToChromeStorage(key, value){
	jsonStorageObject = {};
	jsonStorageObject[key]=value;
	chrome.storage.sync.set(jsonStorageObject, function(){
		console.log('saved : '+key);
	});
}

function enque(event,videoLink){
	event.preventDefault();
	if(!videoLinks.includes(videoLink)){
		videoLinks.push(videoLink);
	}
	key = 'video-links';
	addToChromeStorage(key,videoLinks);
	chrome.storage.sync.get([key], function(result) {
        	console.log('fetched value'+JSON.stringify(result));
	});
	return result;
}

function deque(){
	return videoLinks.pop();
}

function createElement(videoLink){
	div = document.createElement('div');
	div.setAttribute('class','play_next');
	anchor = document.createElement('a');
	anchor.innerHTML = 'Play next (enque)';
	anchor.setAttribute('href','#');
	anchor.addEventListener("click",function(){
		enque(event,videoLink);
	});
	div.appendChild(anchor);
	return div;
}

function addElement(){
	thumbnailTags = document.getElementsByTagName('ytd-thumbnail');
	for(thumbnailTag of thumbnailTags){
		thumbnailParent = thumbnailTag.parentNode;		
		if(thumbnailParent.getElementsByClassName('play_next').length == 0){
			anchorTags = thumbnailParent.getElementsByTagName('a');
			videoLink = anchorTags[0].href;
			div = createElement(videoLink);
			thumbnailParent.appendChild(div);	
		}
	}	
}

videoLinks = [];
window.onscroll = function(){
	addElement();
	console.log(videoLinks);
}
