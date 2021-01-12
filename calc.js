let app = angular.module("tabPanel", []);

app.controller("headerCtrl", function($scope){
    $scope.header = 'Bean Counter';
});

app.controller("tabCtrl", function($scope){
    $scope.tabSelected="#compoundInterest";
    $scope.tabChange = function(e){
        if (e.target.nodeName === "A"){
            $scope.tabSelected = e.target.getAttribute("href");
            e.preventDefault();
        }
    }
});

// Compound interest //
app.controller('compIntCtrl', function($scope){
    $scope.compIntObj = {
        compIntP: 0,    
        compIntR: 0,
        compIntRby100:0,
        comptIntN: 0,
        compIntT: 0,
        compIntOutput: 0,
    };

    let computeCompInt = function(){
        $scope.compIntObj.compIntRby100 = $scope.compIntObj.compIntR / 100;
        $scope.compIntObj.compIntOutput = $scope.compIntObj.compIntP * Math.pow(1 + $scope.compIntObj.compIntRby100/$scope.compIntObj.compIntN, $scope.compIntObj.compIntN * $scope.compIntObj.compIntT);
    }


    $scope.$watch('compIntObj.compIntP', computeCompInt);
    $scope.$watch('compIntObj.compIntR', computeCompInt);
    $scope.$watch('compIntObj.compIntN', computeCompInt);
    $scope.$watch('compIntObj.compIntT', computeCompInt);
});

// Rate of Return //
app.controller('RoRCtrl', function($scope){
    $scope.RoRObj = {
        RoRIni: 0,
        RoRFin: 0,
        RoROutput: 0,
    };

    let computeRoR = function() {
        $scope.RoRObj.RoROutput = ($scope.RoRObj.RoRFin - $scope.RoRObj.RoRIni)/$scope.RoRObj.RoRIni;
    }

    $scope.$watch('RoRObj.RoRIni', computeRoR);
    $scope.$watch('RoRObj.RoRFin', computeRoR);
});


// Amortization amortoutput = payment amount//
app.controller('AmortCtrl', function($scope){
    $scope.AmortObj = {
        AmortIntRate: 0,
        AmortPrincipal: 0,
        AmortNoPay: 0,
        AmortExpo:0,
        AmortOutput: 0
    };

    let computeAmort = function(){
        $scope.AmortObj.AmortExpo = Math.pow((1 + $scope.AmortObj.AmortIntRate),$scope.AmortObj.AmortNoPay);
        $scope.AmortObj.AmortOutput = $scope.AmortObj.AmortPrincipal*($scope.AmortObj.AmortIntRate*$scope.AmortObj.AmortExpo)/($scope.AmortObj.AmortExpo - 1);
    }

    $scope.$watch('AmortObj.AmortIntRate', computeAmort);
    $scope.$watch('AmortObj.AmortPrincipal', computeAmort);
    $scope.$watch('AmortObj.AmortNoPay', computeAmort);

});


// NEEDS TESTING NEEDS TESTING NEEDS TESTING //
app.controller('FVCtrl', function($scope){
    $scope.FVObj = {
        FVPv: 0,
        FVRate: 0,
        FVRateByPv: 0,
        FVYear: 0,
        FVOutput: 0
    };

    let computeFV = function(){
        $scope.FVObj.FVRateByPv = $scope.FVObj.FVRate / 100 ;
        $scope.FVObj.FVOutput = $scope.FVObj.FVPv * Math.pow((1 + $scope.FVObj.FVRateByPv), $scope.FVObj.FVYear);
    }

    $scope.$watch('FVObj.FVPv', computeFV);
    $scope.$watch('FVObj.FVRate', computeFV);
    $scope.$watch('FVObj.FVYear', computeFV);

});


app.controller('PtoECtrl', function($scope){
    $scope.PtoEObj = {
        PtoEMarket: 0,
        PtoEEarn: 0,
        PtoEOutput: 0
    };

    let computePtoE = function() {
        $scope.PtoEObj.PtoEOutput = $scope.PtoEObj.PtoEMarket / $scope.PtoEObj.PtoEEarn;
    }

    $scope.$watch('PtoEObj.PtoEMarket', computePtoE);
    $scope.$watch('PtoEObj.PtoEEarn', computePtoE);
});



app.controller('salaryCtrl', function($scope){
    $scope.salaryObj = {
        salaryWage:0,
        salaryPerWeek:0,
        salaryPerYear:0,
        salaryOutput:0,
    };

    let computeSalary = function(){
        $scope.salaryObj.salaryOutput = $scope.salaryObj.salaryWage * $scope.salaryObj.salaryPerWeek * $scope.salaryObj.salaryPerYear;
    }

    $scope.$watch('salaryObj.salaryWage', computeSalary);
    $scope.$watch('salaryObj.salaryPerWeek', computeSalary);
    $scope.$watch('salaryObj.salaryPerYear', computeSalary);
})


app.controller('')