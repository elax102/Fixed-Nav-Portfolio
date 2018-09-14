var waypoint = new Waypoint({
	element: document.getElementById('about'),
	handler: function () {
		console.log('scrolled about');
		document.body.style.backgroundColor = "#eee";
	},
	offset: -200
})

var waypoint = new Waypoint({
	element: document.getElementById('project'),
	handler: function () {
		console.log('scrolled project');
		document.body.style.backgroundColor = "pink";
	},
	offset: 200
})