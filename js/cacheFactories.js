app.factory('user_token', function($cacheFactory) {
  return $cacheFactory('token');
});


app.factory('enums_cache', function($cacheFactory) {
  return $cacheFactory('enums');
});

app.factory('offerGeneralData_cache', function($cacheFactory) {
  return $cacheFactory('offerGeneralData');
});