let chess_box = Array(8).fill(Array(8).fill(0));

function draw() {
	let out = '';
	let box_count = 0;
	for (let i = 0; i < chess_box.length; i++) {
		let arr = chess_box[i];
		for (let k = 0; k < arr.length; k++) {
			if (box_count%2 == 0) {
				out += `<div class="chess_block" data-x="${k}" data-y="${i}"></div>`;
			}
			else {
				out += `<div class="chess_block black_box" data-x="${k}" data-y="${i}"></div>`;
			}
			box_count ++;
		}
		box_count ++;
	}
	document.querySelector('#field').innerHTML = out;

	document.querySelectorAll('.chess_block').forEach(elements => {
		elements.onclick = horse;
	});
}

draw();

function horse() {
	document.querySelectorAll('.chess_block').forEach(elements => {
		elements.classList.remove('red');
		elements.classList.remove('active');
	});
	let x = this.dataset.x;
	let y = this.dataset.y;
	this.classList.add('red');
	if (+x +2 < 8 && +y+1 < 8){
		document.querySelector(`.chess_block[data-x="${+x +2}"][data-y="${+y+1}"]`).classList.add('active');
	}
	if (+x +2 < 8 && +y-1 >= 0){
		document.querySelector(`.chess_block[data-x="${+x +2}"][data-y="${+y-1}"]`).classList.add('active');
	}
	if (+x -2 >=0 && +y+1 < 8){
		document.querySelector(`.chess_block[data-x="${+x -2}"][data-y="${+y+1}"]`).classList.add('active');
	}
	if (+x -2 >=0 && +y-1 >=0){
		document.querySelector(`.chess_block[data-x="${+x -2}"][data-y="${+y-1}"]`).classList.add('active');
	}
	if (+x -1 >=0 && +y-2 >= 0){
		document.querySelector(`.chess_block[data-x="${+x -1}"][data-y="${+y-2}"]`).classList.add('active');
	}
	if (+x -1 >=0 && +y+2 <8 ){
		document.querySelector(`.chess_block[data-x="${+x -1}"][data-y="${+y+2}"]`).classList.add('active');
	}
	if (+x +1 < 8 && +y-2 >= 0){
		document.querySelector(`.chess_block[data-x="${+x + 1}"][data-y="${+y-2}"]`).classList.add('active');
	}
	if (+x +1 < 8 && +y+2 <8 ){
		document.querySelector(`.chess_block[data-x="${+x +1}"][data-y="${+y+2}"]`).classList.add('active');
	}

}


 /*---более простая запись функцмм horse. */
/*function horse() {
	const dx = [2,1,-1,-2,-2,-1,1,2],
		dy = [1,2,2,1,-1,-2,-2,-1];
	document.querySelectorAll('.chess_block').forEach(function (element) {
		element.classList.remove('active');
		element.classList.remove('red');
	})
	let x = +this.dataset.x,
		y = +this.dataset.y;
	this.classList.add('red');
	for (let i = 0; i < 8; i++) {
		let xx = x + dx[i],
			yy = y + dy[i];
		if (xx >=0 && yy >=0 && xx < 8 && yy < 8) {
			document.querySelector('.chess_block[data-x="' + xx + '"][data-y="' + yy + '"]').classList.add('active');
		}
	}
}*/
