var app = angular.module('nomeApp', []);
app.controller('nomeController', ['$scope', function($scope){

$scope.latitude;
$scope.longitude;

$scope.getLocation = function() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){

        	$scope.latitude = position.coords.latitude;
        	$scope.longitude = position.coords.longitude;

        	$scope.$apply(function(){

        		document.querySelector("#demo").innerHTML = position.coords.latitude+"~~~"+position.coords.longitude;

        	});

        });
    } 
}

$scope.showOnMap = function(){
var latlon = $scope.latitude + "," + $scope.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img class='img-responsive' src='"+img_url+"'>";
    $scope.getAdderess();

};

$scope.getAdderess = function(){

var lat = parseFloat(document.getElementById("txtLatitude").value);
            var lng = parseFloat(document.getElementById("txtLongitude").value);
            var latlng = new google.maps.LatLng(lat, lng);
            var geocoder = geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {

                        document.getElementById("locationText").innerHTML =  "Location: " + results[1].formatted_address;
                    }
                }
            });

};

}]);

      

