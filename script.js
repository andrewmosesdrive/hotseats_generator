$(document).ready(() => {
  // create array for each set of questions based on type, with of final Array holding question and answer
  let mloQs = [
    {
      question:
        "On which section of the URLA will I find the government monitoring information?",
      answer: "Title X",
    },
    {
      question:
        "Who is ultimately responsible for the accuracy of the information on the URLA?",
      answer: "The borrower",
    },
    {
      question: "When must the loan estimate be provided to the borrower?",
      answer: "At application or within 3 business days if mailed",
    },
    {
      question:
        "What percent ownership interest must you have in a company to require you to give your borrower an AfBA?",
      answer: "1% or more",
    },
    {
      question:
        "All cash used in a mortgage transaction must be 3 things; what are they?",
      answer: "Traceable, accessible, not a liability",
    },
    {
      question: "What document is specific to self-employed clients?",
      answer: "The 1040",
    },
    {
      question: "What is passive income and what are some examples of it?",
      answer:
        "Money received that is not currently being worked for. Examples include social security, disability, and retirement",
    },
  ];
  console.log("MLO has " + mloQs.length + " questions");

  let gmkQs = [
    {
      question:
        "After Fannie and Freddie have purchased loans, the bundling of those loans into mortgage backed securities and the subsequent sale on the secondary market is known as what?",
      answer: "Securitization",
    },
    {
      question: "What is the automated underwriting system for FHA and VA?",
      answer: "TOTAL (Technology Open to Approved Lenders)",
    },
    {
      question: "What is the minimum credit score for a conventional loan?",
      answer: "620",
    },
    {
      question: "What is the minimum credit score for an FHA loan?",
      answer: "500",
    },
    {
      question:
        "If a client has a credit score of 580 or above on an FHA loan, what is the maximum financing they can receive on a refinance?",
      answer: "97.75%",
    },
    {
      question: "Who are USDA loans meant for?",
      answer: "People living in rural communities with low to moderate income",
    },
    {
      question: "Which occupancy type(s) are allowed on FHA loans?",
      answer: "Primary residence only",
    },
    {
      question:
        "What is Entitlement and how is it different from the Guaranty?",
      answer:
        "Entitlement is the amount a client is entitled to based on their service in the military, while Guaranty is how much the VA will give to the lender to 'close the gap' in the event that a home with a VA loan sells for less than the remaining principle balance after a foreclosure",
    },
    {
      question: "What is a mixedArrayumbo loan?",
      answer:
        "A mixedArrayumbo loan is a loan which meets all of the requirements set by Fannie and Freddie, but exceeds the loan limits set by the FHFA",
    },
    {
      question:
        "What percent of the loan amount is the up-front mortgage insurance premium (UFMIP) on FHA loans?",
      answer: "1.75%",
    },
    {
      question: "What is a 'non-traditional' mortgage?",
      answer: "Anything other than a 30-year fixed",
    },
    {
      question: "What are the DTI requirements for a Conventional loan?",
      answer:
        "28% housing, 36% total (up to 45% total with compensation factors)",
    },
    {
      question: "What two parts make up the fully indexed rate on an ARM?",
      answer: "The margin and the index",
    },
  ];
  console.log("GMK has " + gmkQs.length + " questions");

  let ethQs = [
    {
      question: "When is property flipping considered unethical?",
      answer:
        "When the home is re-sold for a much higher value that is not reflected by any significant repairs or improvements to the home",
    },
    {
      question: "What is a straw buyer?",
      answer:
        "When a borrower is attempting to qualify while using someone elses credentials/assets/etc",
    },
    {
      question:
        "What is it called when a homeowner is encouraged to refinance their property over and over until little or no equity remains?",
      answer: "Loan flipping",
    },
  ];
  console.log("Ethics has " + ethQs.length + " questions");

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
      question:
        "If a law has a regulation letter such as Regulation B or Z, that law is regulated by whom?",
      answer: "The CFPB",
    },
    {
      question: "The FHA is overseen and enforced by which two entities?",
      answer: "HUD and DOmixedArray",
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
      answer:
        "CSBS (Conference of State Bank Supervisors) and AARMR (American Association of Residential Mortgage Regulators)",
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
      question:
        "Who can take over the NMLS or create a new database if the NMLS is not fulfilling its' duties?",
      answer: "The CFPB",
    },
    {
      question:
        "Who has the authority to issue, suspend, deny, or revoke your license?",
      answer: "The State Authority",
    },
    {
      question:
        "If the CFPB or The State Authority wants an MLO to immediately stop and not conduct anymore business, what can they issue?",
      answer: "A cease and desist order",
    },
    {
      question:
        "The state sets minimum requirements for each state for which 3 types of funds?",
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
      question:
        "If someone is a volunteer for a non-profit, but they are handling mortgages, are they required to be licensed?",
      answer: "No",
    },
    {
      question: "What constitutes an 'immediate family member'?",
      answer:
        "Grandparents, parents, siblings, children, and grandchildren (including step and adoptive)",
    },
    {
      question:
        "How many hours of pre-licensing education is required and what is the breakdown of hours spent per topic?",
      answer:
        "20 hours: 3 fed law, 3 ethics, 2 non-traditional mortgage products, and 12 undefined (elective)",
    },
    {
      question:
        "What are the 4 MU forms and who is required to fill out each one?",
      answer:
        "MU1 for company, MU2 for control person/responsible party, MU3 for a branch, MU4 for individual MLO's",
    },
    {
      question:
        "If an MLO has had a non-financial felony, how long must they wait to get a license?",
      answer: "7 years",
    },
    {
      question:
        "If someone has ever had a financial felony (including fraud) how long must they wait to get a license?",
      answer: "They can never be licensed",
    },
    {
      question:
        "How many hours of continuous education is required for MLO's and what is the breakdown of hours spent per topic?",
      answer:
        "8 hours: 3 fed law, 2 ethics, 2 non-traditional mortgage products, 1 undefined (elective)",
    },
    {
      question: "Why was the NMLS created?",
      answer:
        "To streamline communication and provide transparency by storing information on MLO's",
    },
    {
      question: "Who is required to register with the NMLS?",
      answer: "All MLO's regardless of what type of institution they work for",
    },
    {
      question:
        "What is the difference between who is regulated by Reg G and Reg H under the SAFE Act?",
      answer:
        "Reg G refers to MLO's who only have to register, and Reg H applies to MLO's who have to both register and be licensed",
    },
    {
      question:
        "What additional steps beyond registration do MLO's have to take in order to seek an MLO license?",
      answer:
        "20 hour pre-licensing education, pass the SAFE exam, fingerprinting, credit check, background check, pay NMLS and licensing fees",
    },
    {
      question:
        "What is the best definition of an individual who places clients with lenders?",
      answer: "Mortgage broker",
    },
    {
      question:
        "Who is the national organization that helps oversee and manage the various functions of the NMLS?",
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
      question:
        "What type of penalties can the State Authority or the CFPB levy against an MLO?",
      answer: "Civil penalties",
    },
  ];
  console.log("USC has " + uscQs.length + " questions");

  let fedlawQs = [
    {
      question: "What are the three acts that make up the Do Not Call Laws?",
      answer:
        "TCPA (Telephone Consumer Protection Act), DNCIA (Do Not Call Implementation Act), and the DNCIA (Do Not Call Improvement Act",
    },
    {
      question:
        "The Gramm-Leach-Bliley Act specifies that a consumer must be given what amount of time to opt-out before personal financial information is disclosed to a third party?",
      answer: "A reasonable opportunity",
    },
    {
      question:
        "Some federal laws require some type of prevention or compliance program, why are these programs important?",
      answer:
        "These programs help MLO's detect money laundering, fraud, and pre-texting (phishing) schemes so we can better protect clients",
    },
    {
      question: "What is the primary goal of the Red Flags Rule?",
      answer: "To detect patterns and practices of identity theft",
    },
    {
      question:
        "Which federal law ensures that CRA's and creditors are reporting consumer information with accuracy and fairness?",
      answer:
        "FCRA/FACTA (Fair Credit Reporting Act/Fair and Accurate Credit Transactions Act)",
    },
    {
      question:
        "What rule under FACTA (Fair and Accurate Credit Transactions Act) requires businesses to implement an identity theft prevention program into their daily activites?",
      answer: "Red Flags Rule",
    },
    {
      question:
        "Which law places limitations and restrictions on lenders regarding the use of non-public personal information?",
      answer: "The Gramm-Leach-Bliley Act",
    },
    {
      question:
        "Under FACTA (Fair and Accurate Credit Transactions Act), all derogatory credit information must be reported on a consumers report for no longer than how many years?",
      answer: "7 years",
    },
    {
      question:
        "CRA's must place a one-call fraud alert on a consumer's credit report if the consumer claims a suspicion that they are or will be a victim of identity theft. This fraud alert must be filed in the consumer's credit report for a period of no less than how many months?",
      answer: "12 months",
    },
    {
      question:
        "Action can be taken against a mortgage professional or institution for 2 years after the date of discovery of the FCRA or FACTA violation, and must be taken within how many years of violation?",
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
      answer:
        "The act of obtaining an individual's non-public personal information through false pretenses (without authorization)",
    },
    {
      question:
        "According to the TCPA (Telephone Consumer Protection Act), telephone solicitation may only occur between what hours and in which time zone?",
      answer: "8am-9pm in the consumer's time zone",
    },
    {
      question:
        "Which two government entities regulate the Do Not Call Laws, and what is their scope, respectively?",
      answer:
        "FTC (Federal Trade Commission) and FCC (Federal Communications Commission); FTC is interstate only, and FCC is interstate and intrastate",
    },
    {
      question: "Wo is the regulatory authority for the E-SIGN Act?",
      answer:
        "It depends on which law the disclosure being signed falls under (ex. TILA disclosure = CFPB)",
    },
    {
      question:
        "Under MAP (Mortgage Acts and Practices), AKA Reg N, how long must copies of commercial communication be retained?",
      answer: "2 years",
    },
  ];
  console.log("Fed Law has " + fedlawQs.length + " questions");

  let respaQs = [
    {
      question: "What type of mortgage loans does RESPA govern?",
      answer: "Mortgage loans secured by residential property",
    },
    {
      question: "What is a traditional mortgage?",
      answer: "A 30-year fixed",
    },
    {
      question: "What does RESPA stand for?",
      answer: "Real Estate Settlement Procedures Act",
    },
    {
      question: "What is the purpose of RESPA?",
      answer:
        "Ensure consumers can make informed decisions about real estate transactions by providing transparency into the costs of settlement",
    },
    {
      question: "What is a settlement service?",
      answer:
        "Any service provided in connection with the real estate transaction, specifically third party services",
    },
    {
      question: "What is loss mitigation?",
      answer:
        "An agreement between the borrower and servicer to make the loan more affordable by changing the terms (modification, forbearance, debt forgiveness)",
    },
    {
      question: "What is the purpose of section 6 of RESPA?",
      answer: "It sets general rules for Servicers with 4 main obmixedArrayectives",
    },
    {
      question: "What is the purpose of section 8 of RESPA?",
      answer: "It sets rules about referrals, referral fees, and kickbacks",
    },
    {
      question: "What is the purpose of section 9 of RESPA?",
      answer: "To provide clients the right to choose their own title agent",
    },
    {
      question: "What is the purpose of section 10 of RESPA?",
      answer: "To ensure escrow accounts are handled correctly and ethically",
    },
    {
      question: "Which section of RESPA does the MSDS fall under?",
      answer: "Section 6",
    },
    {
      question: "What does the MSDS stand for?",
      answer: "Mortgage Servicing Disclosure Statement",
    },
    {
      question: "What does the MSDS tell the borrower?",
      answer:
        "The likelihood that their loan may be assigned to another party for servicing in the future",
    },
    {
      question: "What does the NTS stand for?",
      answer: "Notice of Transfer Statement",
    },
    {
      question: "What are some examples of settlement services?",
      answer:
        "Appraisal, pest inspection, survey, credit reporting, title work",
    },
    {
      question: "What is the regulation letter for RESPA?",
      answer: "Regulation X",
    },
    {
      question: "What regulatory agency regulates RESPA?",
      answer: "The CFPB",
    },
    {
      question: "What does RESPA not govern?",
      answer:
        "Agriculture, Business, Commercial, TemporaryArray, Timeshare, property greater than 25 acres",
    },
  ];
  console.log("RESPA has " + respaQs.length + " questions");

  let tilaQs = [
    {
      question: "What does TILA stand for and what regulation letter is it?",
      answer: "Truth in Lending Act, Reg Z",
    },
    {
      question: "Who does TILA govern?",
      answer: "People or organizations who regularly extend credit",
    },
    {
      question: "What kinds of costs does TILA govern?",
      answer: "Finance charges",
    },
    {
      question: "What is a finance charge?",
      answer: "Costs/fees associated with obtaining the loan",
    },
    {
      question: "What is a trigger term?",
      answer:
        "Loan elements that require additional information to understand actual costs",
    },
    {
      question: "What does TILA says advertisements must be?",
      answer: "Clear and conspicuous",
    },
    {
      question: "What is section 19 of TILA?",
      answer: "MDIA (Mortgage Disclosure Improvement Act",
    },
    {
      question:
        "Per TILA, what is the APR tolerance for admixedArrayustable rate mortgages?",
      answer: ".25%",
    },
    {
      question:
        "What does MDIA require from the borrower before charging non-refundable fees?",
      answer: "Intent to proceed",
    },
    {
      question:
        "Per TILA when is the soonest the borrower can close upon receiving their initial disclosures?",
      answer: "7 business days",
    },
    {
      question:
        "What section of TILA requires the delivery of the Note of Right to Cancel?",
      answer: "Section 23",
    },
    {
      question: "What is another name for a high cost loan under TILA?",
      answer: "A covered loan (AKA HOEPA loan)",
    },
    {
      question: "What does TILA's Valuation Independence rule say?",
      answer:
        "Appraisers must be unbiased in determining value of property and act independently from any outside influence or coercion",
    },
    {
      question:
        "Loans that meet QM standards provide more certainty in the secondary market for whom?",
      answer: "Investors",
    },
    {
      question:
        "What disclosure required by TILA informs borrowers of estimated costs for their closed-end mortgage loan?",
      answer: "The loan estimate",
    },
    {
      question: "What section of TILA has rules about MLO compensation?",
      answer: "Section 36",
    },
    {
      question: "What types of loans does the right to rescind apply to?",
      answer:
        "Refinances on primary residences, reverse mortgages, HELOCs, and HELs",
    },
    {
      question: "What section of TILA includes the Covered Loan Notice?",
      answer: "Section 32",
    },
  ];
  console.log("TILA has " + tilaQs.length + " questions");

  let ecoaQs = [
    {
      question: "What is the regulation letter for ECOA?",
      answer: "Reg B",
    },
    {
      question: "What does ECOA stand for?",
      answer: "Equal Credit Opportunity Act",
    },
    {
      question: "What is the purpose of ECOA?",
      answer:
        "To ensure that all people have the right to apply for an obtain credit",
    },
    {
      question:
        "What section of the URLA helps ensure MLO's are following the guidelines of ECOA?",
      answer: "Title X - Government monitoring information",
    },
    {
      question:
        "When is it okay to inquire about race, ethnicity, gender, immigration status, marital status, or age?",
      answer: "To determine if the borrower is eligible for special programs",
    },
    {
      question:
        "What is an example of a time that it is okay to discriminate based on age?",
      answer:
        "Reverse mortgage (62 or older), and at least 18 to obtain a mortgage",
    },
    {
      question: "What is disparate treatment?",
      answer:
        "Credit discrimination demonstrated when a lender treats an applicant or borrower differently based on one or more of ECOA's prohibited factors",
    },
    {
      question:
        "What disclosure goes out once a decision is made in determining the borrowers application status?",
      answer: "Notice of Action Taken",
    },
    {
      question: "What does ECOA's Valuation Rule say?",
      answer:
        "A copy of the appraisal must be provided to the borrower as soon as the MLO is done processing the report",
    },
    {
      question:
        "What is another name for the Notice of Action Taken in the case of a credit denial?",
      answer: "Adverse Action (Notice of Credit Denied)",
    },
    {
      question: "What act was ECOA added to?",
      answer: "CCPA (Consumer Credit Protection Act)",
    },
    {
      question:
        "What is referred to as seemingly legal or neutral behavior which has a negative impact on a group of people?",
      answer: "Disparate impact",
    },
    {
      question:
        "What are examples of factors that ECOA prohibits basing credit decisions upon?",
      answer:
        "Race, color, religion, national origin, gender, marital status, age (keep in mind disability and familial status, which are not listed)",
    },
    {
      question:
        "What form of discriminatory behavior occurs when the discrimination is blatantly obvious?",
      answer: "Overt evidence",
    },
    {
      question:
        "How long does ECOA require the Notice of Credit Denied be retained",
      answer: "25 months",
    },
    {
      question:
        "Who is ultimately responsible for the accuracy of information on the application in the eyes of the low?",
      answer: "The borrower",
    },
  ];
  console.log("ECOA has " + ecoaQs.length + " questions");

  let fhaQs = [
    {
      question: "What is the purpose of the Fair Housing Act?",
      answer: "To prevent discrimination in housing",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
  ];
  console.log("FHA has " + fhaQs.length + " questions");

  let disclosureQs = [
    {
      question: "What is the difference between the MSDS and the NTS?",
      answer:
        "The MSDS tells the borrower the likelihood that their loan servicer may change, while the NTS tells the borrower that the loan servicer is changing/has changed",
    },
    {
      question:
        "What is an AKA for the 'What You Should Know About Your HELOC' disclosure?",
      answer: "When Your Home is on the Line",
    },
    {
      question:
        "On an open-ended loan, which initial disclosure will you receive that gives an estimate of your settlement costs?",
      answer: "The GFE (Good Faith Estimate)",
    },
    {
      question: "When is Loan Estimate due to the client?",
      answer: "At application or within 3 business days if mailed",
    },
    {
      question:
        "How is the Closing Disclosure different from the Loan Estimate?",
      answer:
        "The CD includes the final costs of the transaction, the LE includes an estimate",
    },
  ];
  console.log("Disclosures has " + disclosureQs.length + " questions");

  // navbar dropdown
  $(".dropdown-trigger").dropdown();

  // clicking the logo in the navbar causes the page to reload
  $("#logo-reload").on("click", () => {
    location.reload();
  });

  // ==================================================================
  // $("#submit-btn").on("click", () => {
  //   M.toast({ html: "Oops! That feature isn't ready yet. If you'd like to submit a question, send an email over to andrewmoses@quickenloans.com with the question, answer, and section, with an email subject of 'Question Submission'." });
  // });

  // $("#problem-btn").on("click", () => {
  //   M.toast({ html: "Oops! That feature isn't ready yet. If you'd like to report a problem or give feedback, send an email over to andrewmoses@quickenloans.com with the subject 'Hotseats Generator Feedback'" });
  // });
  // ==================================================================
  
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
    if ($("input[id='respa-box']").is(":checked")) {
      //   console.log("fedlaw");
      questionsArray.push.apply(questionsArray, respaQs);
    }
    if ($("input[id='tila-box']").is(":checked")) {
      // console.log("ethics");
      questionsArray.push.apply(questionsArray, tilaQs);
    }
    if ($("input[id='ecoa-box']").is(":checked")) {
      // console.log("mlo");
      questionsArray.push.apply(questionsArray, ecoaQs);
    }
    if ($("input[id='fha-box']").is(":checked")) {
      // console.log("gmk");
      questionsArray.push.apply(questionsArray, fhaQs);
    }
    if ($("input[id='disclosures-box']").is(":checked")) {
      // console.log("usc");
      questionsArray.push.apply(questionsArray, disclosureQs);
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

    /* Randomize array in-place using Durstenfeld shuffle algorithm courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
    function shuffleArray(questionsArray) {
      for (let i = questionsArray.length - 1; i > 0; i--) {
        let mixedArray = Math.floor(Math.random() * (i + 1));
        let temporaryArray = questionsArray[i];
        questionsArray[i] = questionsArray[mixedArray];
        questionsArray[mixedArray] = temporaryArray;

      }
    }

    shuffleArray(questionsArray)

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
            <div class="card med blue-grey darken-1" id="new-cards">
              <div class="card-content white-text">
                <blockquote>${questionsArray[i].question}</blockquote>
                </br>
                <blockquote>${questionsArray[i].answer}</blockquote>
                <a class="waves-effect waves-light btn-small" id="old-q-btn"
                ><i class="material-icons right"></i>Hide</a>
              </div> 
            </div>
          </div>
        </div>`;

      // console.log(questionsArray[i].question);
      // append questions to page
      $("#new-question").append(newQuestion);
      

      // arrow function doesn't grab parents the same! also can't use it with methods
      // ------------------------------------------------------------
      // place this in literal to grab?
      // ------------------------------------------------------------

      // build a button into the template
      // on click, hide or remove
      $("#old-q-btn").on("click", () => {
        this.remove()
      });
    
      
    }
    
  }
  
});
