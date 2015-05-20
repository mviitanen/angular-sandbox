/**
 * Created by viitanenm on 3/26/15.
 */
angular.module("procludeDisplay", ["ui.router"])
  .config(function ($stateProvider) {
    $stateProvider.state("proclude", {
      url: "/proclude",
      templateUrl: "/app/proclude/procludedisplay.html",
      controller: "ProcludeController",
      controllerAs: "dc"
    })
  })

  .controller("ProcludeController", function () {
    this.name = {
      first: "Marko",
      last: ""
    };
    this.street = "1234 Bourbon St";
    this.city = "Paris";
    this.state = "TX"
  }).directive(
  "myAddress", function () {
    return {
      transclude:true,
      restrict: "EAC",
      templateUrl: "app/proclude/address.html",
      scope: {
        str: "=strAttr",
        city: "=city",
        state: "=state"
      }
    }
  }).directive('myMsg', function () {
    return {
      controller: "ProcludeController",
      controllerAs: "dc",
      restrict: 'E',
      templateUrl: "app/proclude/myLine.html",
      link: function (scope, element, attrs) {
        scope.salute = attrs['salute'];
        scope.salute2 = attrs['salute2'];
        scope.bg = attrs['bg'];
        scope.lc = attrs["lc"];
        console.log("Salute: " + attrs['salute']);

      }
    };
  });