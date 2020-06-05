console.image = function (url, scale = 0.3) {
	let img = new Image()
	img.onload = () => {
		console.log('%c+', [
			'font-size:1px;'
			, 'padding:'
			, Math.floor(img.height / 2) + 'px '
			, Math.floor(img.width / 2) + 'px;'
			, 'line-height:' + img.height + 'px;'
			, 'background:url('
			, url.replace(/\(/g, '%28').replace(/\)/g, '%29')
			, ');'
			, 'background-size:'
			, img.width + 'px '
			, img.height + 'px;'
			, 'color:transparent;'
			, 'background-repeat: no-repeat;'
		].join(''))
	}
	img.src = url
}
