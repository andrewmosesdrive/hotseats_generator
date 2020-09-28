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
      question: "What is the NMLS?",
      answer: "A database which houses informations on MLO's",
    },
    {
      question: "What federal regulatory authority did Dodd-Frank establish?",
      answer: "CFPB",
    },
    {
      question: "What does the CFPB stand for?",
      answer: "Consumer Financial Protection Bureau",
    },
    {
      question: "What is an AKA for the CFPB?",
      answer: "The Bureau",
    },
    {
      question: "What is the maximum penalty for violations of the SAFE Act?",
      answer: "$29,707",
    },
    {
      question: "What is an AKA for the State Authority?",
      answer: "The Commissioner",
    },
    {
      question: "If a law has a regulation letter such as Regulation B or Z, that law is regulated by whom?",
      answer: "The CFPB",
    },
    {
      question: "The FHA is overseen and enforced by which two entities?",
      answer: "HUD and DOJ",
    },
    {
      question: "What report are MLO's required to submit to the NMLS?",
      answer: "Mortgage Call Report",
    },
    {
      question: "What does the SAFE Act stand for and when was it created?",
      answer: "Secure and Fair Enforcement Act, 2008",
    },
    {
      question: "What is an AKA for the SAFE Act?",
      answer: "Title V of HERA (Housing and Economic Reform Act)",
    },
    {
      question: "Which two organizations created the NMLS?",
      answer: "CSBS (Conference of State Bank Supervisors) and AARMR (American Association of Residential Mortgage Regulators)",
    },
    {
      question: "What does NMLS stand for?",
      answer: "Nationwide Multistate Licensing System and Registry",
    },
    {
      question: "How often must MCR's be submitted to the NMLS?",
      answer: "Quarterly and Annually",
    },
    {
      question: "Who assigns a unique identifier to MLO's when they register?",
      answer: "The NMLS",
    },
    {
      question: "Who can take over the NMLS or create a new database if the NMLS is not fulfilling its' duties?",
      answer: "The CFPB",
    },
    {
      question: "Who has the authority to issue, suspend, deny, or revoke your license?",
      answer: "The State Authority",
    },
    {
      question: "If the CFPB or The State Authority wants an MLO to immediately stop and not conduct anymore business, what can they issue?",
      answer: "A cease and desist order",
    },
    {
      question: "The state sets minimum requirements for each state for which 3 types of funds?",
      answer: "Surety bond, state fund, net worth",
    },
    {
      question: "The SAFE Act contains what 2 regulations regarding licensing?",
      answer: "G and H",
    },
    {
      question: "When do processors and underwriters need to be licensed?",
      answer: "When operating as an independent contractor",
    },
    {
      question: "If someone is a volunteer for a non-profit, but they are handling mortgages, are they required to be licensed?",
      answer: "No",
    },
    {
      question: "What constitutes an 'immediate family member'?",
      answer: "Grandparents, parents, siblings, children, and grandchildren (incuding step and adoptive)",
    },
    {
      question: "How many hours of pre-licensing education is required and what is the breakdown of hours spent per topic?",
      answer: "20 hours: 3 fed law, 3 ethics, 2 non-traditional mortgage products, and 12 undefined (elective)",
    },
    {
      question: "What are the 4 MU forms and who is required to fill out each one?",
      answer: "MU1 for company, MU2 for control person/responsible party, MU3 for a branch, MU4 for individual MLO's",
    },
    {
      question: "If an MLO has had a non-financial felony, how long must they wait to get a license?",
      answer: "7 years",
    },
    {
      question: "If someone has ever had a financial felony (including fraud) how long must they wait to get a license?",
      answer: "They can never be licensed",
    },
    {
      question: "How many hours of continuous education is required for MLO's and what is the breakdown of hours spent per topic?",
      answer: "8 hours: 3 fed law, 2 ethics, 2 non-traditional mortgage products, 1 undefined (elective)",
    },
    {
      question: "Why was the NMLS created?",
      answer: "To streamline communication and provide transparency by storing information on MLO's",
    },
    {
      question: "Who is required to register with the NMLS?",
      answer: "All MLO's regardless of what type of institution they work for",
    },
    {
      question: "What is the difference between who is regulated by Reg G and Reg H under the SAFE Act?",
      answer: "Reg G refers to MLO's who only have to register, and Reg H applies to MLO's who have to both register and be licensed",
    },
    {
      question: "What additional steps beyond registration do MLO's have to take in order to seek an MLO license?",
      answer: "20 hour pre-licensing education, pass the SAFE exam, fingerprinting, credit check, background check, pay NMLS and licensing fees",
    },
    {
      question: "What is the best definition of an individual who places clients with lenders?",
      answer: "Mortgage broker",
    },
    {
      question: "Who is the national organization that helps oversee and manage the various functions of the NMLS?",
      answer: "CSBS (Conference of State Bank Supervisors)",
    },
    {
      question: "Who operates the NMLS?",
      answer: "The SRR (State Regulatory Registry",
    },
    {
      question: "What year was the Dodd-Frank Act created?",
      answer: "2010",
    },
    {
      question: "What type of penalties can the State Authority or the CFPB levy against an MLO?",
      answer: "Civil penalties"
    }
  ];
  let fedlawQs = [
    {
      question: "What are the three acts that make up the Do Not Call Laws?",
      answer: "TCPA (Telephone Consumer Protection Act), DNCIA (Do Not Call Implementation Act), and the DNCIA (Do Not Call Improvement Act",
    },
    {
      question: "The Gramm-Leach-Bliley Act specifies that a consumer must be given what amount of time to opt-out before personal financial information is disclosed to a third party?",
      answer: "A reasonable opportunity",
    },
    {
      question: "Some federal laws require some type of prevention or compliance program, why are these programs important?",
      answer: "These programs help MLO's detect money laundering, fraud, and pre-texting (phishing) schemes so we can better protect clients",
    },
    {
      question: "What is the primary goal of the Red Flags Rule?",
      answer: "To detect patterns and practices of identity theft",
    },
    {
      question: "Which federal law ensures that CRA's and creditors are reporting consumer information with accuracy and fairness?",
      answer: "FCRA/FACTA (Fair Credit Reporting Act/Fair and Accurate Credit Transactions Act)",
    },
    {
      question: "What rule under FACTA (Fair and Accurate Credit Transactions Act) requires businesses to implement an identity theft prevention program into their daily activites?",
      answer: "Red Flags Rule",
    },
    {
      question: "Which law places limitations and restrictions on lenders regarding the use of non-public personal information?",
      answer: "The Gramm-Leach-Bliley Act",
    },
    {
      question: "Under FACTA (Fair and Accurate Credit Transactions Act), all derogatory credit information must be reported on a consumers report for no longer than how many years?",
      answer: "7 years",
    },
    {
      question: "CRA's must place a one-call fraud alert on a consumer's credit report if the consumer claims a suspicion that they are or will be a victim of identity theft. This fraud alert must be filed in the consumer's credit report for a period of no less than how many months?",
      answer: "12 months",
    },
    {
      question: "Action can be taken against a mortgage professional or institution for 2 years after the date of discovery of the FCRA or FACTA violation, and must be taken within how many years of violation?",
      answer: "5 years",
    },
    {
      question: "GLBA (Gramm-Leach-Bliley Act) is regulated by whom?",
      answer: "The FTC",
    },
    {
      question: "Regulation P, which was added to GLBA, is regulated by whom?",
      answer: "The CFPB",
    },
    {
      question: "What is phishing/pre-texting?",
      answer: "The act of obtaining an individual's non-public personal information through false pretenses (without authorization)",
    },
    {
      question: "According to the TCPA (Telephone Consumer Protection Act), telephone solicitation may only occur between what hours and in which time zone?",
      answer: "8am-9pm in the consumer's time zone",
    },
    {
      question: "Which two government entities regulate the Do Not Call Laws, and what is their scope, respectively?",
      answer: "FTC (Federal Trade Commission) and FCC (Federal Communications Commission); FTC is interstate only, and FCC is interstate and intrastate",
    },
    {
      question: "Wo is the regulatory authority for the E-SIGN Act?",
      answer: "It depends on which law the disclosure being signed falls under (ex. TILA disclosure = CFPB)",
    },
    {
      question: "Under MAP (Mortgage Acts and Practices), AKA Reg N, how long must copies of commercial communication be retained?",
      answer: "Answer",
    },
  ];
  
  // need to create more arrays for each new subtopic along with on clicks for each one to push to final array when send it is clicked!!!!!!!!!!!!!!!!!!!

  let uscLength = uscQs.length
  console.log("USC has " + uscLength + " questions")

  let fedLawLength = fedlawQs.length
  console.log("Fed Law has " + fedLawLength + " questions")

  let ethicsLength = ethQs.length
  console.log("Ethics has " + ethicsLength + " questions")

  let gmkLength = gmkQs.length
  console.log("GMK has " + gmkLength + " questions")

  let mloLength = mloQs.length
  console.log("MLO has " + mloLength + " questions")

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
    let hideSendIt = $("#run-btn");
    hideChecks.hide();
    hideSendIt.hide();

    // loop through questions based on topic selection
    for (let i = 0; i <= questionsArray.length; i++) {
      if (questionsArray.length === 0) {
        M.toast({
          html:
            "Oops! Looks like you forgot to choose a topic! Refresh the page and try again.",
        });
      }
      // create questions with temp literal & string interpolation
      let newQuestion = `
        <div class="row">
          <div class="col s12 m12">
            <div class="card med blue-grey darken-1">
              <div class="card-content white-text">
                <blockquote>${questionsArray[i].question}</blockquote>
                </br>
                <blockquote>${questionsArray[i].answer}</blockquote>
              </div> 
            </div>
          </div>
        </div>`;

      console.log(questionsArray[i].question);
      // append questions to page
      $("#new-question").append(newQuestion);
    }
  }
});
