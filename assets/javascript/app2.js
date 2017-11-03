$(document).ready(function () {
    var count = 30;
    var intervalId;
    var renderDiv = false;
    var selected1, selected2, selected3, selected4, selected5;
    var questionArray = [
        {
            question: "1. What is the name of the rogue agency that takes extreme measures to defend the federation?",
            options: ["Shadow Proclamation", "Section 31", "Starfleet Academy", "Borg Collective"],
            answer: "Section 31"
        },
        {
            question: "2. What is Captain Janeway's favorite drink?",
            options: ["Black Coffee", "Raktajino", "Slug-o-Cola", "Tuber root"],
            answer: "Black Coffee"
        },
        {
            question: "3. Who told this to Kirk 'Captain, not in front of the Klingons'?",
            options: ["Uhura", "Spock"],
            answer: "Spock"
        },
        {
            question: "4. Who became the ruler of Terran Empire in the Mirror Darkly?",
            options: ["Archer", "Sato"],
            answer: "Sato"
        },
        {
            question: "5. Who did Quark temporarily married to?",
            options: ["Dax", "Grilka"],
            answer: "Grilka"
        }
    ]

    
    
    // hide div when loaded
    hideDiv();

    // add questions 
    $(".q1").text(questionArray[0].question);
        $(".q1-o1").append(questionArray[0].options[0]);
        $(".q1-o2").append(questionArray[0].options[1]);
    $(".q2").text(questionArray[1].question);
        $(".q2-o1").append(questionArray[1].options[0]);
        $(".q2-o2").append(questionArray[1].options[1]);
    $(".q3").text(questionArray[2].question);
        $(".q3-o1").append(questionArray[2].options[0]);
        $(".q3-o2").append(questionArray[2].options[1]);
    $(".q4").text(questionArray[3].question);
        $(".q4-o1").append(questionArray[3].options[0]);
        $(".q4-o2").append(questionArray[3].options[1]);
    $(".q5").text(questionArray[4].question);
        $(".q5-o1").append(questionArray[4].options[0]);
        $(".q5-o2").append(questionArray[4].options[1]);
    // store user selections     
    if($(".q1-o1").click(function(){
        selected1=($(".q1-o1").text().trim());
        console.log(selected1);
    }))
    if($(".q1-o2").click(function(){
        selected1=($(".q1-o2").text().trim());
        console.log(selected1);
    }))

    if($(".q2-o1").click(function(){
        selected2=($(".q2-o1").text().trim());
        console.log(selected2);
    }))
    if($(".q2-o2").click(function(){
        selected2=($(".q2-o2").text().trim());
        console.log(selected2);
    }))

    if($(".q3-o1").click(function(){
        selected3=($(".q3-o1").text().trim());
        console.log(selected3);
    }))
    if($(".q3-o2").click(function(){
        selected3=($(".q3-o2").text().trim());
        console.log(selected3);
    }))

    if($(".q4-o1").click(function(){
        selected4=($(".q4-o1").text().trim());
        console.log(selected4);
    }))
    if($(".q4-o2").click(function(){
        selected4=($(".q4-o2").text().trim());
        console.log(selected4);
    }))

    if($(".q5-o1").click(function(){
        selected5=($(".q5-o1").text().trim());
        console.log(selected5);
    }))
    if($(".q5-o2").click(function(){
        selected5=($(".q5-o2").text().trim());
        console.log(selected5);
    }))


    $(".start-game").click(function () {
        countDown();
        
        renderQuestions();
    });

    function countDown() {
        if (intervalId) {
            return;
        }
        intervalId = setInterval(decrement, 1000);
    }

    function renderQuestions(){
        $(".q-div").show();

    }

    function decrement() {
        count--;

        $(".count-down").html("<h2>" + "The shields will be down in " + count + "s!" + "</h2>")
            .attr("id", "text-center");

        if (count === 0) {
            stop();
            hideDiv();
            checkAnswer();
            count = 30;
            disableGame();

        }
    }

    function stop() {
        clearInterval(intervalId);
        intervalId = null;
        //count = 30;
    }

    function hideDiv(){
        $(".q-div").hide();
    }

    function checkAnswer(){
        if(selected1 !== questionArray[0].answer
        || selected2 !== questionArray[1].answer
        || selected3 !== questionArray[2].answer
        || selected4 !== questionArray[3].answer
        || selected5 !== questionArray[4].answer){
            alert("You failed to deploy armor, you will be assimilated by the Borg!");
            $(".count-down").html("You failed, everyone on the ship is dead");
        }
        else {alert("You successfully deployed the armor, you saved everyone on the ship!");}
    }
    
    function disableGame(){
        $(".start-game").hide();
    }
    //$(document).on("click",".form-check-input", checkAnswer);
})