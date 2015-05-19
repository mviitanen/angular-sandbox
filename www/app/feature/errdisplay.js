/**
 * Created by viitanenm on 3/26/15.
 */
angular.module("errDisplay", ["ui.router"])
  .config(function ($stateProvider) {
    $stateProvider.state("err", {
      url: "/err",
      templateUrl: "/app/feature/errdisplay.html"
    })
  });