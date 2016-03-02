angular
    .module('quizApp')
    .controller('homeCtrl', function($scope, quizList) {
        
        var pastQuizList = "Test"
        
        $scope.quizzes = quizList;
    })