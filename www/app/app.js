/**
 * Created by viitanenm on 3/25/15.
 */

angular.module("sandBox", ["errDisplay", "procludeDisplay"])
.config(function($urlRouterProvider){
        $urlRouterProvider.otherwise("/err");
    });


