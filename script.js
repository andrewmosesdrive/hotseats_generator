$(document).ready(() => {
  // create array for each set of questions based on type, with objects holding question and answer
  let mloQs = [
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
  ];
  let gmkQs = [
    {
      question: "Question",
      answer: "Answer",
    },
  ];
  let ethQs = [
    {
      question: "Question",
      answer: "Answer",
    },
  ];
  let uscQs = [
    {
      question: "Question",
      answer: "Answer",
    },
  ];
  let fedlawQs = [
    {
      question: "Question",
      answer: "Answer",
    },
  ];
  debugger

  $("#submit-btn").on("click", () => {
    M.toast({html: "Oops! This feature isn't up and running yet"}, timeRemaining, 400)
  })

  let questionsArray = [];
  console.log(questionsArray);

  // create array for final questions to be randomized and read off

  $("#run-btn").on("click", () => {
    if ($("input[id='fed-law-box']").is(":checked")) {
      //   console.log("fedlaw");
      questionsArray.push.apply(questionsArray, fedlawQs);
    }
    if ($("input[id='ethics-box']").is(":checked")) {
      // console.log("ethics");
      questionsArray.push.apply(questionsArray, ethQs);
    }
    if ($("input[id='mlo-box']").is(":checked")) {
      // console.log("mlo");
      questionsArray.push.apply(questionsArray, mloQs);
    }
    if ($("input[id='gmk-box']").is(":checked")) {
      // console.log("gmk");
      questionsArray.push.apply(questionsArray, gmkQs);
    }
    if ($("input[id='usc-box']").is(":checked")) {
      // console.log("usc");
      questionsArray.push.apply(questionsArray, uscQs);
    }

    // console.log(questionsArray)

    deployQs();
    console.log(deployQs)
  });

  function deployQs() {
    let hideChecks = $(".checkbox-container");
    hideChecks.hide();

    // if (questionsArray.length === 0) {
      
        // $(".modal").modal();

        // need to have modal pop up if no topics selected: oops, looks like you forgot to select a topic. please choose at least one!
        // followed by page reload after modal ends (see materialize docs)

        // location.reload()
    // }

    for (let i = 0; i < questionsArray.length; i++) {

        // need to make sure only one question pops up at a time, 
        // populate new question on the page
        let newQuestion = `
        <div class="row">
          <div class="col s12 m12">
            <div class="card med blue-grey darken-1">
              <div class="card-content white-text">
                <p>${questionsArray[i].question}</p>
              </div>
              <div class="card-action">
                <a>${questionsArray[i].answer}</a>
              </div>
            </div>
          </div>
        </div>`;

      $("#new-question").append(newQuestion);

    }


    let restartBtn = `<a class="waves-effect waves-light btn-large" id="reload-btn">Reload</a
    >`
    $("#reload").append(restartBtn);

    $("#reload-btn").on("click", () => {

        location.reload();
    })
  }

  // need click recognition for choices, try boolean? (if clicked === yes)

  // need next/back buttons
});
