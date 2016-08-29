angular.module("repositoryDirectives", [])
  .directive('repoList', function(){
    return {
      // restrict: 'E',
      // controller: 'repositoryCtrl',
      // replace: true,
      // scope: {
      //   order: '='
      // },
      // controllerAs: 'repositoryCtrl',
      templateUrl: "/components/repository/templates/nav-list.html",
    }
  })
  .directive('repoDetail', function() {
    return {
      templateUrl: "/components/repository/templates/repository-detail.html"
    }
  });
