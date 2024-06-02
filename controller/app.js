const app = angular.module('myApp',[])
app.controller('myController', ($scope)=>{
    //Bai 1
    $scope.fullname = "Nguyen van a"
    $scope.birthday ="20-10-2001"
    $scope.gender ="Nam"
    $scope.photo ="nva.jpg"
    $scope.mark ="8.8"

    //Bai 2
    $scope.sinhvien={
        fullname : "Nguyen van a",
        birthday :"20-10-2001",
        gender :"Nam",
        photo :"nva.jpg",
        mark :"8.8",
    }

    //Bài 3
    $scope.students=[
        {
            fullname : "Nguyen van a",
            birthday :"20-10-2001",
            gender :"Nam",
            photo :"nva.jpg",
            mark :"8.8",
        },
        {
            fullname : "Nguyen van b",
            birthday :"20-10-2002",
            gender :"Nữ",
            photo :"nvb.jpg",
            mark :"4.6",
        },
        {
            fullname : "Nguyen van c",
            birthday :"20-10-2003",
            gender :"Nam",
            photo :"nvc.jpg",
            mark :"5.5",
        },
    ]


    
    //Bài 4
    $scope.calculate=()=>{
        $scope.input.dientich= parseFloat($scope.input.dai) * parseFloat($scope.input.rong)
        $scope.input.chuvi = (parseFloat($scope.input.dai) + parseFloat($scope.input.rong))*2
    }
    
    //Bài 5
    $scope.xeploai=()=>{
        if(parseFloat($scope.input.diem)<5){
            $scope.input.hocluc="Rớt"
        }else{
            $scope.input.hocluc="Đậu"
        }
    }
    

})