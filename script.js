angular.module("app", [])

.controller('ctrl', ['$scope', function($scope){
  $scope.events = [
  {
    "id": 22565423428,
    "title": "SV 8GB USB Flash Memory E100",
    "imageUrl": "/images/22565423428.png",
    "url": "/events/22565423428",
    "quantity": 0,
    "prices": [
      {
        "amount": 150.00,
        "currency": "INR"
      }
    ]
  },
//   {
//     "id": 22565423394,
//     "title": "Litware Wireless Mouse M35",
//     "imageUrl": "/images/22565423394.png",
//     "url": "/events/22565423394",
//     "quantity": 0,
//     "prices": [
//       {
//         "amount": 250.50,
//         "currency": "INR"
//       }
//     ]
//   }
  ];
  
  $scope.totalPrices = function(){
    var sum = 0;
    angular.forEach($scope, function(events){
      sum += events.prices[0].amount*events.quantity;
    });
    return sum;
  }
  
}]);

