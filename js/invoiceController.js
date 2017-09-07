
app.controller('invoiceController',function ($scope,$rootScope) {
    $scope.invoicedetails={
        "Card":"$ 48,000",
        "ACH":"$ 6,400",
        "iWire":"$ 3,000",
        "Lending":"$ 24,500"
    }
    $scope.company=$rootScope.companyname;
    $('.maintabs').hide();
    $('.innertabitems').hide();
    var tabledata=[{
        invoiceno:"1",
        dateofinv:"05/29/2015",
        duedate:"05/29/2015",
        supname:"ABC",
        amount:"$9999",
        paymentoption:"",
        status:""
    },
    {
        invoiceno:"2",
        dateofinv:"05/29/2015",
        duedate:"05/29/2015",
        supname:"ABC",
        amount:"$9999",
        paymentoption:"",
        status:""
    }
    ];
    $scope.tabdata=[];
    $scope.upload=function() {
       
        alert($rootScope.companyname);
        $scope.tabdata=tabledata;
        
    }
    $scope.textarea1="XXXXX XXX XXXXXXXXXXXX"
    $scope.textarea1clear=function () {
        $scope.textarea1=""
    }
    $scope.textarea2="XXXXX XXX XXXXXXXXXXXX"
    $scope.textarea2clear=function () {
        $scope.textarea2=""
    }

        $scope.companyname=$rootScope.companyname;
        $scope.address1=$rootScope.address1;
        $scope.address2=$rootScope.address2;
        $scope.city=$rootScope.city;
        $scope.state=$rootScope.state;
        $scope.zip=$rootScope.zip;
        $scope.email=$rootScope.email;
        $scope.phone=$rootScope.phone;
        $scope.annrev=$rootScope.annrev;
        $scope.erp=$rootScope.erp;

  

    $scope.invoicedata=tabledata;

    $scope.tabclick=function (tabname) {
   
        $('.maintabs').hide();
        $('.defaultblock').hide();
        var classname= '.'+tabname;
        $(classname).show();
    }
    $scope.innertabclick=function(tabname){
        $('.innertabitems').hide();
        var classname= '.'+tabname;
        $(classname).show();
    }
})