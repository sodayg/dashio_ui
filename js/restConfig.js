
var apiPlatform = 'staging';

app.config(function(RestangularProvider) {
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData;
    if ( !Array.isArray(data) ) {
      extractedData = [data];
    } 
    return extractedData;
  });
});

switch(apiPlatform) {
    case 'staging':
        var advertiserApi = 'https://stagingapi.taptica.com/advertiser/v2/';
        var commonApi = 'https://stagingapi.taptica.com/common/v2/';
        var securityApi = 'https://stagingsecurity.taptica.com/TokenService.svc/';
        break;
    case 'qaapi':
        break;
} 


app.factory('securityRest', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(securityApi);
  });
});

app.factory('advertiserRest', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
     RestangularConfigurer.setBaseUrl(advertiserApi);
   });
});

app.factory('commonRest', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
     RestangularConfigurer.setBaseUrl(commonApi);
   });
});