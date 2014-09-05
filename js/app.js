(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: ' . . . ',
			canPurchase: false,
			soldOut: true,
			images: [
				{
					full: 'http://lorempixel.com/400/200/food/1',
					thumb: 'http://lorempixel.com/50/50/food/1'
				},
				{
					full: 'http://lorempixel.com/400/200/food/2',
					thumb: 'http://lorempixel.com/50/50/food/2'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 4.95,
			description: ' . . . ',
			canPurchase: false,
			soldOut: true,
			images: [
				{
					full: 'http://lorempixel.com/400/200/food/3',
					thumb: 'http://lorempixel.com/50/50/food/3'
				},
				{
					full: 'http://lorempixel.com/400/200/food/4',
					thumb: 'http://lorempixel.com/50/50/food/4'
				}
			]
		}
	]
})();