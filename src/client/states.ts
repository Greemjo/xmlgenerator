/* @ngInject */
export function stateConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("app", {
      url: "/",
      template: "<app></app>",
    })
    .state("app.home", {
      url: "home",
      template: "<app-home></app-home>",
    })
    .state("app.toXml", {
      url: "to-xml",
      template: "<app-to-xml></app-to-xml>",
    })
    ;
}
