angular
    .module('quizApp')
    .controller('quizCtrl', function($scope, $stateParams, quizService, questions) {
        
        $scope.quizName = $stateParams.quizName;
        $scope.questions = questions;
        $scope.answers = {};
        $scope.results = {};
        $scope.currentQuestion = $scope.questions[0];
        
        $scope.setCurrentQuestion = function(question) {
            $scope.currentQuestion = question;
        };
        
        $scope.nextQuestion = function() {
            var checkIndx = $scope.questions.indexOf($scope.currentQuestion);
            if ($scope.questions[checkIndx+1]) {
                $scope.currentQuestion = $scope.questions(checkIndx+1);
            } else {
                return;
            }
        }
        
        $scope.saveAnswer = function(id, answer) {
            $scope.answers[id] = answer;
            $scope.nextQuestion();
            
            if ($scope.results.done) {
                $scope.checkMyAnswers();
            }
        }
        
        $scope.checkMyAnswers = function() {
            quizService.checkMyAnswers($scope.questions, $scope.answers).then(function(response){
                $scope.results = response;
            })
        }
        
        $scope.reset = function () {
            $scope.answers = {};
            $scope.currentQuestion = $scope.questions[0]
        }
    
    })