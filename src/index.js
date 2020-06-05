console.image = function (url, scale = 1, ...params) {
	let img = new Image()
	img.onload = () => {
		var width = img.width * scale,
			height = img.height * scale;

		console.log('%c+', [
			 'font-size:1px;'
			,'padding:'
			,Math.floor(height / 2) + 'px '
			,Math.floor(width / 2) + 'px;'
			,'background:url('
			,url.replace(/\(/g, '%28').replace(/\)/g, '%29')
			,');'
			,'background-size:'
			,width + 'px '
			,height + 'px;'
			,'color:transparent;'
			,'background-repeat:no-repeat;'
			,'background-position:center;'
			,'background-size:contain;'
		].join(''), ...params)
	}
	img.src = url
}

module.exports = console;
