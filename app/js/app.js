(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function () {
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		}

		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		}
	});

	app.controller('ReviewController', function () {
		this.review = {};

		this.addReview = function (product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
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
			],
			reviews: [
				{	
					stars: 5,
					body: 'This is awesome!',
					author: 'dude@mailinator.com'
				},
				{	
					stars: 1,
					body: 'Terrible stuff!',
					author: 'rodger@megahaterz.com'
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
			],
			reviews: [
				{	
					stars: 5,
					body: 'Very pentagonal. Like it!',
					author: 'pentafan@gmail.com'
				},
				{	
					stars: 3,
					body: 'Not really impressed. Price is high.',
					author: 'soso@yahoo.com'
				},
			]
		}
	]
})();