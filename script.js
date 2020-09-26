$(document).ready(() => {
  // create array for each set of questions based on type, with objects holding question and answer
  let mloQs = [
    {
      question: "1",
      answer: "1",
    },
  ];
  let gmkQs = [
    {
      question: "2",
      answer: "2",
    },
  ];
  let ethQs = [
    {
      question: "3",
      answer: "3",
    },
  ];
  let uscQs = [
    {
      question: "4",
      answer: "4",
    },
  ];
  let fedlawQs = [
    {
      question: "5",
      answer: "5",
    },
  ];

  // create array for final questions to be randomized and read off

  $("#run-btn").on("click", () => {

    let finalArray = [];
    console.log(finalArray);

    if ($("input[id='fed-law-box']").is(":checked")) {
      //   console.log("fedlaw");
      finalArray.push(fedlawQs);
    }
    if ($("input[id='ethics-box']").is(":checked")) {
      // console.log("ethics");
      finalArray.push(ethQs);
    }
    if ($("input[id='mlo-box']").is(":checked")) {
      // console.log("mlo");
      finalArray.push(mloQs);
    }
    if ($("input[id='gmk-box']").is(":checked")) {
      // console.log("gmk");
      finalArray.push(gmkQs);
    }
    if ($("input[id='usc-box']").is(":checked")) {
      // console.log("usc");
      finalArray.push(uscQs);
    }

    // console.log(finalArray)

    deployQs();

  });

  function deployQs() {
      let hideChecks = $(".checkbox-container");
      hideChecks.hide();

      for (let i = 0; i < finalArray.length; i++) {
          
      }

      let newQuestion = ``;

  };

  // need click recognition for choices, try boolean? (if clicked === yes)

  // need next/back buttons
});
