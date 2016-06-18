
// var app = angular.module('MovieRandomApp', []);

// app.controller('mainController', function($scope){
//   $scope.posts = [];
//   $scope.newPost = {created_by: '', text: '', created_at: ''};

//   $scope.post = function(){
//     $scope.newPost.created_at = Date.now();
//     $scope.posts.push($scope.newPost);
//     $scope.newPost = {created_by: '', text: '', created_at: ''};
//   };
// });
var app = angular.module('MovieRandomApp', []);

app.controller('mainController', function($scope){
	$scope.movieList = [];
	$scope.movie = {poster_url: ""};
	$scope.zipCode = 94112;

	$scope.search = function(){

		for (i = 0; i < 8; i++){
			$scope.movie.poster_url ="http://www.freedesign4.me/wp-content/gallery/posters/free-movie-film-poster-the_dark_knight_movie_poster.jpg";
			$scope.movieList.push($scope.movie);
		}
	}
	
		

});