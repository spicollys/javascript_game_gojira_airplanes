function gameStart(){
	var gameLevel = window.location.search.replace('?', '');
	var gameTime = 0;
	var airplanesNumber = 0;
	//easy - 120sec
	//medium - 60sec
	//hard - 30sec 
	switch(gameLevel){
		case('1'):
		gameTime = 120;
		airplanesNumber = 30;
		break;
		case('2'):
		gameTime = 60;
		airplanesNumber = 40;
		break;
		case('3'):
		gameTime = 30;
		airplanesNumber = 50;
	}
	document.getElementById('stopwatch').innerHTML = gameTime;
	document.getElementById('poped').innerHTML = 0
	document.getElementById('full').innerHTML = airplanesNumber;
	createAirplanes(airplanesNumber);
	countTime(gameTime + 1);
}

function countTime(gameTime){
	gameTime -= 1;
	if(gameTime == -1){
		clearTimeout(gameTimeId);
		document.getElementById('stopwatch').innerHTML = 'GAME OVER';
		return false;
	}
	document.getElementById('stopwatch').innerHTML = gameTime;
	gameTimeId = setTimeout("countTime("+gameTime+")", 1000);
}

function popAirplane(airplane){
	var airplaneId = airplane.id;
	airplane.src = './imagens/exploded_airplane_sm.png';
	airplane.onclick = '';
	score();
}

function win(){
	clearTimeout(gameTimeId);
	document.getElementById('stopwatch').innerHTML = 'WIN';
}

function score(){
	var poped = parseInt(document.getElementById('poped').innerHTML);
	var full = parseInt(document.getElementById('full').innerHTML);
	poped += 1;
	full -= 1;
	if (full == 0){
		win();
	}
	document.getElementById('poped').innerHTML = poped;
	document.getElementById('full').innerHTML = full;
}

function createAirplanes(airplanesNumber){
	for (var i = airplanesNumber - 1; i >= 0; i--) {
		var airplane = document.createElement('img');
		airplane.src = './imagens/airplane_sm.png';
		airplane.style.margin = '10px';
		airplane.id = 'airplane'+i;
		airplane.onclick = function(){popAirplane(this);};
		document.getElementById('background-scenario').appendChild(airplane);
	}
}