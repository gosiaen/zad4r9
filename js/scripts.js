

function drawTree(i) {
	for (i=1 ; i<6 ; i++) {
		var star = " ";
			for (j=1 ; j<=i ; j++) {
				star += '*';
			}
	console.log(star);
	}
}
console.log(drawTree());

