app.service('getCommonApiData' , function ( enums_cache,apiUtils,user_token,Restangular,$q,commonRest) {
  this.getEnumsCodeToVal = function (data) {
    var enums_data = enums_cache.get('enums');
    if (enums_data) {
      return $q.when(enums_data);
    }
    else {
      return commonRest.all('getenumsvalues').getList( {}, {'Authorization': user_token.get('data')}).then(function(data) {
        var enums_code_to_val = {};
        angular.forEach(data.plain()[0].Data, function(val1) {
          enums_code_to_val[val1.Key] = {};
          angular.forEach(val1.Value, function(val2) {
            enums_code_to_val[val1.Key][val2.Key] = val2.Value;
          });
        });
        enums_cache.put('enums', enums_code_to_val);
        return enums_code_to_val;
      });
    }
  }  
});

app.service('getAdvertiserApiData' , function ( offerGeneralData_cache,apiUtils,user_token,Restangular,$q,advertiserRest) {
  this.getOfferGeneralData = function (offerId) {
    var offerGeneralData = offerGeneralData_cache.get('offerGeneralData');
    if (offerGeneralData) {
      return $q.when(offerGeneralData);
    }
    else {
      return advertiserRest.one('getOfferGeneralData',offerId).get( {}, {'Authorization': user_token.get('data')}).then(function(data) {
        offerGeneralData_cache.put('offerGeneralData', data.plain()[0].Data);
        return data.plain()[0].Data;
      });
    }
  }  
  this.getAdvertiserApplicationData = function (appId) {
    return advertiserRest.one('getAdvertiserApplicationData',appId).get( {}, {'Authorization': user_token.get('data')}).then(function(data) {
      return data.plain()[0].Data;
    });
  }  
});


app.service('apiUtils' , function () {
   
});