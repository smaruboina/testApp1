
app.controller('loginController',function($scope,$location,$rootScope) {
     var credentiallist=[
        {username:"Jagan",password:"vudumula"},
        {username:"anil",password:"vudumula"}
        ];
   

    $scope.signin=function () {
        alert($scope.username+ ' - '+ $scope.password);
        var isFound=false;
        for(var i=0; i<credentiallist.length ; i++){
            if($scope.username==credentiallist[i].username && $scope.password==credentiallist[i].password){
                isFound=true;
                break;
            }
            
        }
       
        if(isFound){
            $location.path( "/invoice" );
        }
        else{
            alert("User name or Password wrong");
        }

    }

    $scope.submit=function() {
       
        $rootScope.companyname=$scope.companyname;
        $rootScope.address1=$scope.address1;
        $rootScope.address2=$scope.address2;
        $rootScope.city=$scope.city;
        $rootScope.state=$scope.state;
        $rootScope.zip=$scope.zip;
        $rootScope.email=$scope.email;
        $rootScope.phone=$scope.phone;
        $rootScope.annrev=$scope.annrev;
        $rootScope.erp=$scope.erp;
    }

   

    
})