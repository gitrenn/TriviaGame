$(document).ready(function(){
    var count = 30; 
    var intervalId;
    var questionArray = [
        {   question: "1. What is the name of the rogue agency that takes extreme measures to defend the federation?",
            options:["The Borg Collective", "Shadow Proclamation", "Starfleet Academy", "Section 31"],
            answer: "Section 31"
        },
        {   question: "2. Whatsgfsdgfsfd gg  the rogue agency that takes extreme measures to defend the federation?",
            options:["The Borg Collective", "Shadow Proclamation", "Starfleet Academy", "Section 31"],
            answer: "Section 31"
        }
    ]
    
    var q_len = questionArray.length;
    
   for(var i = 0; i < q_len; i++){
       var o_len = questionArray[i].options.length;
       // create a card div to hold one question
       var card_div = $("<div>").attr("class", "card");
       // create a card header
       var title_div = $("<div>").attr("class", "card-header");
       // add each question to the card header
       title_div.text(questionArray[i].question);
       // place card header inside the card div
       card_div.append(title_div);
       // loop through the options array to render the options  
       for(var j = 0; j < o_len; j++){
           // create a card body div to hold an option
            var option_div = $("<div>").attr("class", "card-body");
            var newDiv = $("<div>");
            // create a p for each option
            var option = $("<p>").text(questionArray[i].options[j]);
            // add each option to the card body div
            //option_div.text(questionArray[i].options[j]);
            newDiv.append(option);
            option_div.append(newDiv);
            console.log(questionArray[i].options[j]);
       }
       card_div.append(option_div);
//         var newDiv = $("<div>").attr("id", "title");  
//         // append to the new div
//         newDiv.text(questionArray[i].question);
//         //$(".q-title").append(newDiv);
//    } 
      $(".q-body").append(card_div);
   }

    $(".start-game").click(function(){
        countDown();
        renderQuestions();
    });

    function countDown(){
        if(intervalId){
            return;
        }
        intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        count--;

        $(".count-down").html("<h2>" + "The shields will be down in " + count + "s!" + "</h2>")
        .attr("id","text-center");

        if(count === 0){
            stop();
        }
    }

    function stop(){
        clearInterval(intervalId);
        intervalId = null;
        count = 30;
    }

    function renderQuestions(){
        
    }
})