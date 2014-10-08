(function () {
	var app = angular.module('store-products', []);

	app.directive('productReview', function () {
		return {
			restrict: 'A',
			templateUrl: 'app/templates/review.html'
		};
	});

	app.directive('productPanels', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/templates/product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function (setTab) {
					this.tab = setTab;
				}

				this.isSelected = function (checkTab) {
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'
		}
	});

})();
