$(document).ready(() => {
  // create array for each set of questions based on type, with of final Array holding question and answer
  let mloQs = [
    {
      question: "Question1",
      answer: "Answer",
    },
    {
      question: "Question2",
      answer: "Answer",
    },
    {
      question: "Question3",
      answer: "Answer",
    },
    {
      question: "Question4",
      answer: "Answer",
    },
    {
      question: "Question5",
      answer: "Answer",
    },
  ];
  let gmkQs = [
    {
      question: "Question6",
      answer: "Answer",
    },
  ];
  let ethQs = [
    {
      question: "Question7",
      answer: "Answer",
    },
  ];
  let uscQs = [
    {
      question: "Question8",
      answer: "Answer",
    },
  ];
  let fedlawQs = [
    {
      question: "Question9",
      answer: "Answer",
    },
    {
      question: "Question10",
      answer: "Answer",
    },
    {
      question: "Question11",
      answer: "Answer",
    },
  ];

  // navbar dropdown
  $(".dropdown-trigger").dropdown();

  // clicking the logo in the navbar causes the page to reload
  $("#logo-reload").on("click", () => {
    location.reload();
  });

  $("#submit-btn").on("click", () => {
    M.toast({ html: "Oops! That feature isn't ready yet." });
  });

  $("#problem-btn").on("click", () => {
    M.toast({ html: "Oops! That feature isn't ready yet." });
  });
  // array for all questions related to chosen topic to be pushed to
  let questionsArray = [];
  // console.log(questionsArray);

  // when clicked, each chosen topic will push it's questions into questionArray
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
    

    console.log(questionsArray);

    // once all questions are pushed, deploy them
    deployQs();
    // console.log(deployQs);
  });

  // function for deploying questions, adding them to the page dynamically
  function deployQs() {
    // first hide initial content
    let hideChecks = $(".checkbox-container");
    hideChecks.hide();

    // loop through questions based on topic selection
    for (let i = 0; i <= questionsArray.length; i++) {

      if (questionsArray.length === 0) {
            M.toast({ html: "Oops! Looks like you forgot to choose a topic! Refresh the page to try again." });

      }
      // create questions with temp literal & string interpolation
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

        console.log(questionsArray[i].question)
      // append questions to page
      $("#new-question").append(newQuestion);
    }

    // create a button to reload the page and add dynamically
    let restartBtn = `<a class="waves-effect waves-light btn-large" id="reload-btn">Reload</a
    >`;
    $("#reload").append(restartBtn);

    // when clicked, reload
    $("#reload-btn").on("click", () => {
      location.reload();
    });
  }
});
