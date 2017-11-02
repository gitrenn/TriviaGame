$(document).ready(function(){
    var count = 30; 
    var intervalId;


    $(".start-game").click(function(){
        countDown();
        showQuestions();
    });

    function countDown(){
        if(intervalId){
            return;
        }
        intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        count--;

        $(".count-down").html("<h2>" + "Counting Down! You have: " + count + "s left!" + "</h2>");

        if(count === 0){
            stop();
        }
    }

    function stop(){
        clearInterval(intervalId);
        intervalId = null;
    }
})