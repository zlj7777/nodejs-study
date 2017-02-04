var fs = require('fs');

function copy(src, dst) {
	// fs.writeFileSync(dst, fs.readFileSync(src));
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function copy0(src, dst) {
	var rs = fs.createReadStream(src);
	var ws = fs.createWriteStream(dst);

	rs.on('data', function(chunk) {
		if(false === ws.write(chunk)) {
			rs.pause();
		}
	});

	rs.on('end', function() {
		ws.end();
	});

	ws.on('drain', function() {
		rs.resume();
	});
}


function main(argv) {
	// copy(argv[0], argv[1]);
	copy0(argv[0], argv[1]);
}

main(process.argv.slice(2));