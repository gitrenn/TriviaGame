$(document).ready(function () {
    var count = 30;
    var intervalId;
    var renderDiv = false;
    var questionArray = [
        {
            question: "1. What is the name of the rogue agency that takes extreme measures to defend the federation?",
            options: ["Shadow Proclamation", "Section 31", "Starfleet Academy", "Borg Collective"],
            answer: "option2"
        },
        {
            question: "2. What is Captain Janeway's favorite drink?",
            options: ["Coffee, Black", "Raktajino", "Slug-o-Cola", "Tuber root"],
            answer: "option1"
        },
        {
            question: "3. Whatsgfsdgfsfd gg  the rogue agency that takes extreme measures to defend the federation?",
            options: ["Irish Beer", "Shadow Proclamation", "Starfleet Academy", "Section 31"],
            answer: "Section 31"
        },
        {
            question: "4. Whatsgfsdgfsfd gg  the rogue agency that takes extreme measures to defend the federation?",
            options: ["Irish Beer", "Shadow Proclamation", "Starfleet Academy", "Section 31"],
            answer: "Section 31"
        },
        {
            question: "5. Whatsgfsdgfsfd gg  the rogue agency that takes extreme measures to defend the federation?",
            options: ["Irish Beer", "Shadow Proclamation", "Starfleet Academy", "Section 31"],
            answer: "Section 31"
        }
    ]
    // hide div when loaded
    $(".q-div").hide();

    var q_len = questionArray.length;
    
        for (var i = 0; i < q_len; i++) {
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
            //for(var j = 0; j <o_len; j++){
            // create a card body div to hold an option
            var option_div = $("<div>").attr("class", "card-body");
            //create an option 
            var form_div = $("<div>").attr("class", "form-check");
            var label_div = $("<label>").addClass("form-check-label");
            var input_div = $("<input>").addClass("form-check-input");
            // add type, value and text
            input_div.attr("type", "radio");
            input_div.attr("name", "inlineRadioOptions");
            input_div.attr("value", "option1");
            label_div.append(input_div)
            label_div.append(questionArray[i].options[0])
            option_div.append(form_div.append(label_div));
    
            // add a second option
            var form_div = $("<div>").attr("class", "form-check");
            var label_div = $("<label>").addClass("form-check-label");
            var input_div = $("<input>").addClass("form-check-input");
            // add type, value and text
            input_div.attr("type", "radio");
            input_div.attr("name", "inlineRadioOptions");
            input_div.attr("value", "option2");
            label_div.append(input_div)
            label_div.append(questionArray[i].options[1])
            option_div.append(form_div.append(label_div));
    
    
            console.log(option_div);
            //console.log(option);
            //}
            card_div.append(option_div);
            //         var newDiv = $("<div>").attr("id", "title");  
            //         // append to the new div
            //         newDiv.text(questionArray[i].question);
            //         //$(".q-title").append(newDiv);
            //    } 
            function createForm() {
    
            }
            $(".q-body").append(card_div);
        }
   

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
            //checkAnswer();
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
        var selected = $(this).val();
        console.log(selected);
        //if(selected === questionArray)
    }
    
    $(document).on("click",".form-check-input", checkAnswer);
})