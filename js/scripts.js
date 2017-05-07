

function drawTree(pietra) {
	for (i=0 ; i<=pietra ; i++) {
		var star = " ";
			for (j=1 ; j<=i ; j++) {
				star += '*';
			}
	console.log(star);
	}
}
console.log(drawTree(6));

