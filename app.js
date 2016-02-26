angular

    .module('quizApp', ['ui.router'])
    
    .config(function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('homeView',{
                url:'/home',
                templateUrl: 'components/home/homeView.html',
                controller: 'homeCtrl',
                resolve: {
                    quizList: function (quizService) {
                        return quizService.getQuizNames();
                    }
                }
            })
        
    })