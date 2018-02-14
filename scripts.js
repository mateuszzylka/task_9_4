function drawTree(height) {
	for (var i = 0; i < height; i++) {
		var star = '';
		for (var j = height; j > i + 1; j--) {
			star += ' ';
		}
		for (var y = 0; y <= i * 2; y++) {
			star += '*';
		}
		console.log(star);
	}
};

drawTree(8);