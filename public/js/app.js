(function (){
	var app = angular.module('eurocup', []);

	app.controller('PlayerController', function () {
		this.player = {
			name: 'Iker Casillas Fernandez',
			surname: 'Casillas',
			position: 'Portero',
			age: '34 años',
			country: 'Spain',
			number: '#01',
			teams: ['Real Madrid C.F.', 'FC Oporto'],
			height: "6´07´´ (1.85m)",
			weight: "185.2 lbs (84 kg)"
		};
	});
})();