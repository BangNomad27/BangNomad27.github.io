// Side Nav:
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider:
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	height: 500,
	duration: 600,
	interval: 3000
});

// Clients:
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Box / Portfolio:
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

// Scroll SPY:
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
	scrollOffset: 50
});