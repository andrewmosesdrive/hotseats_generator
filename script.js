$(document).ready(() => {
  // modal on doc ready for explanation of use
  $(".modal").modal();
  $('.modal').modal('open');

  // create array for each set of questions based on major topic (with property: subtopic and property: difficulty) with of final Array holding question and answer of choices
  let mloQs = [
    {
      question:
        "After Fannie and Freddie have purchased loans, the bundling of those loans into mortgage backed securities and the subsequent sale on the secondary market is known as what?",
      answer: "Securitization",
      difficulty: "week-2",
      subtopic: "mlo-timeline",
    },
    {
      question:
        "On which section of the URLA will I find the government monitoring information?",
      answer: "Title X",
      difficulty: "week-2",
      subtopic: "application",
    },
    {
      question: "What is section XIII (8) of the URLA?",
      answer: "Declarations",
      difficulty: "week-3",
      subtopic: "application",
    },
    {
      question:
        "Who is ultimately responsible for the accuracy of the information on the URLA?",
      answer: "The borrower",
      difficulty: "week-2",
      subtopic: "application",
    },
    {
      question: "When must the loan estimate be provided to the borrower?",
      answer: "At application or within 3 business days if mailed",
      difficulty: "week-2",
      subtopic: "disclosures",
    },
    {
      question:
        "What percent ownership interest must you have in a company to require you to give your borrower an AfBA?",
      answer: "1% or more",
      difficulty: "week-2",
      subtopic: "disclosures",
    },
    {
      question:
        "All cash used in a mortgage transaction must be 3 things; what are they?",
      answer: "Traceable, accessible, not a liability",
      difficulty: "week-1",
      subtopic: "mlo-timeline",
    },
    {
      question: "What document is specific to self-employed clients?",
      answer: "The 1040",
      difficulty: "week-1",
      subtopic: "mlo-timeline",
    },
    {
      question: "What is passive income and what are some examples of it?",
      answer:
        "Money received that is not currently being worked for. Examples include social security, disability, and retirement",
      difficulty: "week-1",
      subtopic: "mlo-timeline",
    },
    {
      question: "What is the difference between the MSDS and the NTS?",
      answer:
        "The MSDS tells the borrower the likelihood that their loan servicer may change, while the NTS tells the borrower that the loan servicer is changing/has changed",
      difficulty: "week-2",
      subtopic: "disclosures",
    },
    {
      question:
        "What is an AKA for the 'What You Should Know About Your HELOC' disclosure?",
      answer: "When Your Home is on the Line",
      difficulty: "week-3",
      subtopic: "disclosures",
    },
    {
      question:
        "On an open-ended loan, which initial disclosure will you receive that gives an estimate of your settlement costs?",
      answer: "The GFE (Good Faith Estimate)",
      difficulty: "week-2",
      subtopic: "disclosures",
    },
    {
      question: "When is Loan Estimate due to the client?",
      answer: "At application or within 3 business days if mailed",
      difficulty: "week-2",
      subtopic: "disclosures",
    },
    {
      question:
        "How is the Closing Disclosure different from the Loan Estimate?",
      answer:
        "The CD includes the final costs of the transaction, the LE includes an estimate",
      difficulty: "week-1",
      subtopic: "disclosures",
    },
    {
      question: "Per TILA, what two disclosures must be delivered to a borrower receiving an *ARM* product prior to charging non-refundable fees?",
      answer: "The CHARM and Early ARM",
      difficulty: "week-3",
      subtopic: "disclosures",
    },
    {
      question: "What is section IV (4) of the URLA?",
      answer: "Employment information",
      difficulty: "week-3",
      subtopic: "application"
    },
    {
      question: "What are the 3 different loan funding methods?",
      answer: "Table, Warehouse, Direct",
      difficulty: "week-2",
      subtopic: "closing"
    },
    {
      question: "What is the difference between closing and consummation?",
      answer: "At closing, the documents are signed and funds are prepared for disbursement by the closing agent, but the borrower is not yet contractually obligated. At consummation, funds are dispersed and the borrower becomes contractually obligated to the loan.",
      difficulty: "week-2",
      subtopic: "closing"
    },
    {
      question: "What is the difference between a Wet and Dry settlement?",
      answer: "On a wet settlement, consummation and closing occur on the same day (the ink on the contract is still wet when the funds are disbursed). On a dry settlement, consummation occurs sometime after closing; generally speaking, after the 3-business day rescission period (so by the time the funds are disbursed, the ink on the contract has dried).",
      difficulty: "week-3",
      subtopic: "closing"
    },
    {
      question: "What are the 2 types of title insurance a borrower has, which is required, and who pays for them, respectively?",
      answer: "Lenders and Owners; Lenders is required, while owners is optional, but the borrower pays for both.",
      difficulty: "week-2",
      subtopic: "insurances"
    },
    {
      question: "What are the different appraisal approaches?",
      answer: "Market/Sales comparison, Cost, Income",
      difficulty: "week-1",
      subtopic: "third-party-services"
    },
    {
      question: "What is PMI, when is it required, and why is it used?",
      answer: "PMI is private mortgage insurance. It's required on conventional loans with an LTV greater than 80%, and it is the lender's way of mitigating risk on loans where the borrower doesn't have as much 'skin in the game.",
      difficulty: "week-2",
      subtopic: "insurances"
    },

  ];
  console.log("MLO has " + mloQs.length + " questions");

  let gmkQs = [
    {
      question: "What is the difference between the CHARM and the Early ARM?",
      answer: "The CHARM is the consumer handbook on adjustable rate mortgages, which gives general information on ARM products. The Early ARM is a disclosure giving specific information about the client's ARM product.",
      difficulty: "week-2",
      subtopic: "products",
    },
    {
      question: "What is the differences between a HEL and  HELOC?",
      answer: "A HEL is a one time lump sum taken out of your equity (closed end), while a HELOC is similar to a credit card which can be used to make multiple draws from your equity as long as you pay the balance down (open end).",
      difficulty: "week-1",
      subtopic: "products",
    },
    {
      question: "What are the 4C qualifying standards for an FHA loan?",
      answer: "Minimum credit: 500, Capacity: 31/43% DTI, Collateral: (if credit score is between 500-579) 90% LTV/(if credit score is 580+) 96.5% Purchase LTV or 97.75% Refi LTV, Cash: Borrwer may need cash for closing costs/prepaids",
      difficulty: "week-3",
      subtopic: "programs",
    },
    {
      question: "What is the automated underwriting system for FHA and VA?",
      answer: "TOTAL (Technology Open to Approved Lenders)",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question: "What is the minimum credit score for a conventional loan?",
      answer: "620",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question: "What is the minimum credit score for an FHA loan?",
      answer: "500",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question:
        "If a client has a credit score of 580 or above on an FHA loan, what is the maximum financing they can receive on a refinance?",
      answer: "97.75%",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question: "Who are USDA loans meant for?",
      answer: "People living in rural communities with low to moderate income",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question: "Which occupancy type(s) are allowed on FHA loans?",
      answer: "Primary residence only",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question:
        "What is Entitlement and how is it different from the Guaranty?",
      answer:
        "Entitlement is the amount a client is entitled to based on their service in the military, while Guaranty is how much the VA will give to the lender to 'close the gap' in the event that a home with a VA loan sells for less than the remaining principle balance after a foreclosure",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question: "What is a jumbo loan?",
      answer:
        "A jumbo loan is a loan which meets all of the requirements set by Fannie and Freddie, but exceeds the loan limits set by the FHFA",
      difficulty: "week-2",
      subtopic: "products",
    },
    {
      question:
        "What percent of the loan amount is the up-front mortgage insurance premium (UFMIP) on FHA loans?",
      answer: "1.75%",
      difficulty: "week-2",
      subtopic: "programs",
    },
    {
      question: "What is a 'non-traditional' mortgage?",
      answer: "Anything other than a 30-year fixed",
      difficulty: "week-2",
      subtopic: "products",
    },
    {
      question: "What are the DTI requirements for a Conventional loan?",
      answer:
        "28% housing, 36% total (up to 45% total with compensation factors)",
      difficulty: "week-1",
      subtopic: "programs",
    },
    {
      question: "What two parts make up the fully indexed rate on an ARM?",
      answer: "The margin and the index",
      difficulty: "week-1",
      subtopic: "products",
    },
    {
      question: "blank",
      answer: "blank",
      difficulty: "week-1",
      subtopic: "vocab",
    },
  ];
  console.log("GMK has " + gmkQs.length + " questions");

  let ethicsQs = [
    {
      question: "When is property flipping considered unethical?",
      answer:
        "When the home is re-sold for a much higher value that is not reflected by any significant repairs or improvements to the home",
      difficulty: "week-2",
      subtopic: "borrower-fraud",
    },
    {
      question: "What is a straw buyer?",
      answer:
        "When a borrower is attempting to qualify while using someone elses credentials/assets/etc",
      difficulty: "week-2",
      subtopic: "borrower-fraud",
    },
    {
      question:
        "What is it called when a homeowner is encouraged to refinance their property over and over until little or no equity remains?",
      answer: "Loan flipping",
      difficulty: "week-3",
      subtopic: "industry-fraud",
    },
  ];
  console.log("Ethics has " + ethicsQs.length + " questions");

  let uscQs = [
    {
      question: "What is the NMLS?",
      answer: "A database which houses informations on MLO's",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "What federal regulatory authority did Dodd-Frank establish?",
      answer: "CFPB",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "What does the CFPB stand for?",
      answer: "Consumer Financial Protection Bureau",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "What is an AKA for the CFPB?",
      answer: "The Bureau",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "What is the maximum penalty for violations of the SAFE Act?",
      answer: "$29,707",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question: "What is an AKA for the State Authority?",
      answer: "The Commissioner",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question:
        "If a law has a regulation letter such as Regulation B or Z, that law is regulated by whom?",
      answer: "The CFPB",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "The FHA is overseen and enforced by which two entities?",
      answer: "HUD and DOJ",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "What report are MLO's required to submit to the NMLS?",
      answer: "Mortgage Call Report",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question: "What does the SAFE Act stand for and when was it created?",
      answer: "Secure and Fair Enforcement Act, 2008",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question: "What is an AKA for the SAFE Act?",
      answer: "Title V of HERA (Housing and Economic Reform Act)",
      difficulty: "week-3",
      subtopic: "your-license",
    },
    {
      question: "Which two organizations created the NMLS?",
      answer:
        "CSBS (Conference of State Bank Supervisors) and AARMR (American Association of Residential Mortgage Regulators)",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "What does NMLS stand for?",
      answer: "Nationwide Multistate Licensing System and Registry",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "How often must MCR's be submitted to the NMLS?",
      answer: "Quarterly and Annually",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question: "Who assigns a unique identifier to MLO's when they register?",
      answer: "The NMLS",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question:
        "Who can take over the NMLS or create a new database if the NMLS is not fulfilling its' duties?",
      answer: "The CFPB",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question:
        "Who has the authority to issue, suspend, deny, or revoke your license?",
      answer: "The State Authority",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question:
        "If the CFPB or The State Authority wants an MLO to immediately stop and not conduct anymore business, what can they issue?",
      answer: "A cease and desist order",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question:
        "The state sets minimum requirements for each state for which 3 types of funds?",
      answer: "Surety bond, state fund, net worth",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "The SAFE Act contains what 2 regulations regarding licensing?",
      answer: "G and H",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question: "When do processors and underwriters need to be licensed?",
      answer: "When operating as an independent contractor",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "If someone is a volunteer for a non-profit, but they are handling mortgages, are they required to be licensed?",
      answer: "No",
      difficulty: "week-3",
      subtopic: "your-license",
    },
    {
      question: "What constitutes an 'immediate family member'?",
      answer:
        "Grandparents, parents, siblings, children, and grandchildren (including step and adoptive)",
      difficulty: "week-3",
      subtopic: "your-license",
    },
    {
      question:
        "How many hours of pre-licensing education is required and what is the breakdown of hours spent per topic?",
      answer:
        "20 hours: 3 fed law, 3 ethics, 2 non-traditional mortgage products, and 12 undefined (elective)",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "What are the 4 MU forms and who is required to fill out each one?",
      answer:
        "MU1 for company, MU2 for control person/responsible party, MU3 for a branch, MU4 for individual MLO's",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "If an MLO has had a non-financial felony, how long must they wait to get a license?",
      answer: "7 years",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "If someone has ever had a financial felony (including fraud) how long must they wait to get a license?",
      answer: "They can never be licensed",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "How many hours of continuous education is required for MLO's and what is the breakdown of hours spent per topic?",
      answer:
        "8 hours: 3 fed law, 2 ethics, 2 non-traditional mortgage products, 1 undefined (elective)",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question: "Why was the NMLS created?",
      answer:
        "To streamline communication and provide transparency by storing information on MLO's",
      difficulty: "week-2",
      subtopic: "agencies",
    },
    {
      question: "Who is required to register with the NMLS?",
      answer: "All MLO's regardless of what type of institution they work for",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "What is the difference between who is regulated by Reg G and Reg H under the SAFE Act?",
      answer:
        "Reg G refers to MLO's who only have to register, and Reg H applies to MLO's who have to both register and be licensed",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "What additional steps beyond registration do MLO's have to take in order to seek an MLO license?",
      answer:
        "20 hour pre-licensing education, pass the SAFE exam, fingerprinting, credit check, background check, pay NMLS and licensing fees",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "What is the best definition of an individual who places clients with lenders?",
      answer: "Mortgage broker",
      difficulty: "week-2",
      subtopic: "your-license",
    },
    {
      question:
        "Who is the national organization that helps oversee and manage the various functions of the NMLS?",
      answer: "CSBS (Conference of State Bank Supervisors)",
      difficulty: "week-3",
      subtopic: "agencies",
    },
    {
      question: "Who operates the NMLS?",
      answer: "The SRR (State Regulatory Registry",
      difficulty: "week-3",
      subtopic: "agencies",
    },
    {
      question: "What year was the Dodd-Frank Act created?",
      answer: "2010",
      difficulty: "week-3",
      subtopic: "agencies",
    },
    {
      question:
        "What type of penalties can the State Authority or the CFPB levy against an MLO?",
      answer: "Civil penalties",
      difficulty: "week-2",
      subtopic: "agencies",
    },
  ];
  console.log("USC has " + uscQs.length + " questions");

  let fedlawQs = [
    {
      question: "What does TILA stand for and what regulation letter is it?",
      answer: "Truth in Lending Act, Reg Z",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "Who does TILA govern?",
      answer: "People or organizations who regularly extend credit",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What kinds of costs does TILA govern?",
      answer: "Finance charges",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What is a finance charge?",
      answer: "Costs/fees associated with obtaining the loan",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What is a trigger term?",
      answer:
        "Loan elements that require additional information to understand actual costs",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What does TILA says advertisements must be?",
      answer: "Clear and conspicuous",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What is section 19 of TILA?",
      answer: "MDIA (Mortgage Disclosure Improvement Act",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question:
        "Per TILA, what is the APR tolerance for adjustable rate mortgages?",
      answer: ".25%",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question:
        "What does MDIA require from the borrower before charging non-refundable fees?",
      answer: "Intent to proceed",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question:
        "Per TILA when is the soonest the borrower can close upon receiving their initial disclosures?",
      answer: "7 business days",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question:
        "What section of TILA requires the delivery of the Note of Right to Cancel?",
      answer: "Section 23",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What is another name for a high cost loan under TILA?",
      answer: "A covered loan (AKA HOEPA loan)",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What does TILA's Valuation Independence rule say?",
      answer:
        "Appraisers must be unbiased in determining value of property and act independently from any outside influence or coercion",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question:
        "Loans that meet QM standards provide more certainty in the secondary market for whom?",
      answer: "Investors",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question:
        "What disclosure required by TILA informs borrowers of estimated costs for their closed-end mortgage loan?",
      answer: "The loan estimate",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What section of TILA has rules about MLO compensation?",
      answer: "Section 36",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What types of loans does the right to rescind apply to?",
      answer:
        "Refinances on primary residences, reverse mortgages, HELOCs, and HELs",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What section of TILA includes the Covered Loan Notice?",
      answer: "Section 32",
      difficulty: "week-2",
      subtopic: "tila",
    },
    {
      question: "What is the purpose of the Fair Housing Act?",
      answer: "To prevent discrimination in housing",
      difficult: "week-2",
      subtopic: "fairness-laws",
    },
    {
      question: "What is the regulation letter for ECOA?",
      answer: "Reg B",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question: "What does ECOA stand for?",
      answer: "Equal Credit Opportunity Act",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question: "What is the purpose of ECOA?",
      answer:
        "To ensure that all people have the right to apply for an obtain credit",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question:
        "What section of the URLA helps ensure MLO's are following the guidelines of ECOA?",
      answer: "Title X - Government monitoring information",
      difficulty: "week-3",
      subtopic: "ecoa",
    },
    {
      question:
        "When is it okay to inquire about race, ethnicity, gender, immigration status, marital status, or age?",
      answer: "To determine if the borrower is eligible for special programs",
      difficulty: "week-3",
      subtopic: "ecoa",
    },
    {
      question:
        "What is an example of a time that it is okay to discriminate based on age?",
      answer:
        "Reverse mortgage (62 or older), and at least 18 to obtain a mortgage",
      difficulty: "week-3",
      subtopic: "ecoa",
    },
    {
      question: "What is disparate treatment?",
      answer:
        "Credit discrimination demonstrated when a lender treats an applicant or borrower differently based on one or more of ECOA's prohibited factors",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question:
        "What disclosure goes out once a decision is made in determining the borrowers application status?",
      answer: "Notice of Action Taken",
      difficulty: "week-3",
      subtopic: "ecoa",
    },
    {
      question: "What does ECOA's Valuation Rule say?",
      answer:
        "A copy of the appraisal must be provided to the borrower as soon as the MLO is done processing the report",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question:
        "What is another name for the Notice of Action Taken in the case of a credit denial?",
      answer: "Adverse Action (Notice of Credit Denied)",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question: "What act was ECOA added to?",
      answer: "CCPA (Consumer Credit Protection Act)",
      difficulty: "week-3",
      subtopic: "ecoa",
    },
    {
      question:
        "What is referred to as seemingly legal or neutral behavior which has a negative impact on a group of people?",
      answer: "Disparate impact",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question:
        "What are examples of factors that ECOA prohibits basing credit decisions upon?",
      answer:
        "Race, color, religion, national origin, gender, marital status, age (keep in mind disability and familial status, which are not listed)",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question:
        "What form of discriminatory behavior occurs when the discrimination is blatantly obvious?",
      answer: "Overt evidence",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question:
        "How long does ECOA require the Notice of Credit Denied be retained",
      answer: "25 months",
      difficulty: "week-3",
      subtopic: "ecoa",
    },
    {
      question:
        "Who is ultimately responsible for the accuracy of information on the application in the eyes of the low?",
      answer: "The borrower",
      difficulty: "week-2",
      subtopic: "ecoa",
    },
    {
      question: "What are the three acts that make up the Do Not Call Laws?",
      answer:
        "TCPA (Telephone Consumer Protection Act), DNCIA (Do Not Call Implementation Act), and the DNCIA (Do Not Call Improvement Act",
      difficulty: "week-3",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "The Gramm-Leach-Bliley Act specifies that a consumer must be given what amount of time to opt-out before personal financial information is disclosed to a third party?",
      answer: "A reasonable opportunity",
      difficulty: "week-3",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Some federal laws require some type of prevention or compliance program, why are these programs important?",
      answer:
        "These programs help MLO's detect money laundering, fraud, and pre-texting (phishing) schemes so we can better protect clients",
      difficulty: "week-3",
      subtopic: "financial-crimes-laws",
    },
    {
      question: "What is the primary goal of the Red Flags Rule?",
      answer: "To detect patterns and practices of identity theft",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Which federal law ensures that CRA's and creditors are reporting consumer information with accuracy and fairness?",
      answer:
        "FCRA/FACTA (Fair Credit Reporting Act/Fair and Accurate Credit Transactions Act)",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "What rule under FACTA (Fair and Accurate Credit Transactions Act) requires businesses to implement an identity theft prevention program into their daily activites?",
      answer: "Red Flags Rule",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Which law places limitations and restrictions on lenders regarding the use of non-public personal information?",
      answer: "The Gramm-Leach-Bliley Act",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Under FACTA (Fair and Accurate Credit Transactions Act), all derogatory credit information must be reported on a consumers report for no longer than how many years?",
      answer: "7 years",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "CRA's must place a one-call fraud alert on a consumer's credit report if the consumer claims a suspicion that they are or will be a victim of identity theft. This fraud alert must be filed in the consumer's credit report for a period of no less than how many months?",
      answer: "12 months",
      difficulty: "week-3",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Action can be taken against a mortgage professional or institution for 2 years after the date of discovery of the FCRA or FACTA violation, and must be taken within how many years of violation?",
      answer: "5 years",
      difficulty: "week-3",
      subtopic: "consumer-contact laws",
    },
    {
      question: "GLBA (Gramm-Leach-Bliley Act) is regulated by whom?",
      answer: "The FTC",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question: "Regulation P, which was added to GLBA, is regulated by whom?",
      answer: "The CFPB",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question: "What is phishing/pre-texting?",
      answer:
        "The act of obtaining an individual's non-public personal information through false pretenses (without authorization)",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "According to the TCPA (Telephone Consumer Protection Act), telephone solicitation may only occur between what hours and in which time zone?",
      answer: "8am-9pm in the consumer's time zone",
      difficulty: "week-2",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Which two government entities regulate the Do Not Call Laws, and what is their scope, respectively?",
      answer:
        "FTC (Federal Trade Commission) and FCC (Federal Communications Commission); FTC is interstate only, and FCC is interstate and intrastate",
      difficulty: "week-3",
      subtopic: "consumer-contact-laws",
    },
    {
      question: "Who is the regulatory authority for the E-SIGN Act?",
      answer:
        "It depends on which law the disclosure being signed falls under (ex. TILA disclosure = CFPB)",
      difficulty: "week-3",
      subtopic: "consumer-contact-laws",
    },
    {
      question:
        "Under MAP (Mortgage Acts and Practices), AKA Reg N, how long must copies of commercial communication be retained?",
      answer: "2 years",
      difficulty: "week-3",
      subtopic: "consumer-contact-laws",
    },
    {
      question: "What type of mortgage loans does RESPA govern?",
      answer: "Mortgage loans secured by residential property",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is a traditional mortgage?",
      answer: "A 30-year fixed",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What does RESPA stand for?",
      answer: "Real Estate Settlement Procedures Act",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is the purpose of RESPA?",
      answer:
        "Ensure consumers can make informed decisions about real estate transactions by providing transparency into the costs of settlement",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is a settlement service?",
      answer:
        "Any service provided in connection with the real estate transaction, specifically third party services",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is loss mitigation?",
      answer:
        "An agreement between the borrower and servicer to make the loan more affordable by changing the terms (modification, forbearance, debt forgiveness)",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is the purpose of section 6 of RESPA?",
      answer: "It sets general rules for Servicers with 4 main objectives",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is the purpose of section 8 of RESPA?",
      answer: "It sets rules about referrals, referral fees, and kickbacks",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is the purpose of section 9 of RESPA?",
      answer: "To provide clients the right to choose their own title agent",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is the purpose of section 10 of RESPA?",
      answer: "To ensure escrow accounts are handled correctly and ethically",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "Which section of RESPA does the MSDS fall under?",
      answer: "Section 6",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What does the MSDS stand for?",
      answer: "Mortgage Servicing Disclosure Statement",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What does the MSDS tell the borrower?",
      answer:
        "The likelihood that their loan may be assigned to another party for servicing in the future",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What does the NTS stand for?",
      answer: "Notice of Transfer Statement",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What are some examples of settlement services?",
      answer:
        "Appraisal, pest inspection, survey, credit reporting, title work",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What is the regulation letter for RESPA?",
      answer: "Regulation X",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What regulatory agency regulates RESPA?",
      answer: "The CFPB",
      difficulty: "week-2",
      subtopic: "respa",
    },
    {
      question: "What does RESPA not govern?",
      answer:
        "Agriculture, Business, Commercial, Temporary, Timeshare, property greater than 25 acres",
      difficulty: "week-3",
      subtopic: "respa",
    },
  ];
  console.log("Fed Law has " + fedlawQs.length + " questions");

  // navbar dropdown
  $(".dropdown-trigger").dropdown();

  // clicking the logo in the navbar causes the page to reload
  $("#logo-reload").on("click", () => {
    location.reload();
  });

  // array for all questions related to chosen topic to be pushed to
  let questionsArray = [];
  // console.log(questionsArray);

  // when clicked, each chosen topic will push it's questions into questionArray
  $("#run-btn").on("click", () => {
    // current iteration of working set of if-statements for checks of both difficulty and topic
    // ===========================================================================================

    // week 1 difficulty level block -------------------------------------------------------------
    if ($("input[id='week-1-box']").is(":checked")) {
      // main topic MLO
      if ($("input[id='mlo-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (mloQs[i].difficulty === "week-1") {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic APPLICATION
      if ($("input[id='application-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "application"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic MLO TIMELINE
      if ($("input[id='mlo-timeline-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "mlo-timeline"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic DISCLOSURES
      if ($("input[id='disclosures-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "disclosures"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic CLOSING
      if ($("input[id='closing-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "closing"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic OWNERSHIP
      if ($("input[id='ownership-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "ownership"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic REPAYMENT
      if ($("input[id='repayment-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "repayment"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic THIRD PARTY SERVICES 
      if ($("input[id='third-party-services-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "third-party-services"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic INSURANCES
      if ($("input[id='insurances-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-1" &&
            mloQs[i].subtopic === "insurances"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic GMK
      if ($("input[id='gmk-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (gmkQs[i].difficulty === "week-1") {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic PROGRAMS
      if ($("input[id='programs-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-1" &&
            gmkQs[i].subtopic === "programs"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic PRODUCTS
      if ($("input[id='products-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-1" &&
            gmkQs[i].subtopic === "products"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic VOCAB
      if ($("input[id='vocab-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-1" &&
            gmkQs[i].subtopic === "vocab"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic FED LAW
      if ($("input[id='fed-law-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (fedlawQs[i].difficulty === "week-1") {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic TILA
      if ($("input[id='tila-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-1" &&
            fedlawQs[i].subtopic === "tila"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic RESPA
      if ($("input[id='respa-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-1" &&
            fedlawQs[i].subtopic === "respa"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic CONSUMER-CONTACT-LAWS
      if ($("input[id='consumer-contact-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-1" &&
            fedlawQs[i].subtopic === "consumer-contact-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic FINANCIAL-CRIMES-LAWS
      if ($("input[id='financial-crimes-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-1" &&
            fedlawQs[i].subtopic === "financial-crimes-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic FAIRNESS-LAWS
      if ($("input[id='fairness-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-1" &&
            fedlawQs[i].subtopic === "fairness-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic ECOA
      if ($("input[id='ecoa-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-1" &&
            fedlawQs[i].subtopic === "ecoa"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic ETHICS
      if ($("input[id='ethics-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (ethicsQs[i].difficulty === "week-1") {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic BORROWER FRAUD
      if ($("input[id='borrower-fraud-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (
            ethicsQs[i].difficulty === "week-1" &&
            ethicsQs[i].subtopic === "borrower-fraud"
          ) {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic INDUSTRY FRAUD
      if ($("input[id='industry-fraud-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (
            ethicsQs[i].difficulty === "week-1" &&
            ethicsQs[i].subtopic === "industry-fraud"
          ) {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic USC
      if ($("input[id='usc-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (uscQs[i].difficulty === "week-1") {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic AGENCIES
      if ($("input[id='agencies-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (
            uscQs[i].difficulty === "week-1" &&
            uscQs[i].subtopic === "agencies"
          ) {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic YOUR LICENSE
      if ($("input[id='your-license-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (
            uscQs[i].difficulty === "week-1" &&
            uscQs[i].subtopic === "your-license"
          ) {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
    }
    // -------------------------------------------------------------------------------------------
    // week 2 difficulty level block -------------------------------------------------------------
    if ($("input[id='week-2-box']").is(":checked")) {
      // main topic MLO
      if ($("input[id='mlo-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (mloQs[i].difficulty === "week-2") {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic APPLICATION
      if ($("input[id='application-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "application"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic MLO TIMELINE
      if ($("input[id='mlo-timeline-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "mlo-timeline"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic DISCLOSURES
      if ($("input[id='disclosures-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "disclosures"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic CLOSING
      if ($("input[id='closing-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "closing"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic OWNERSHIP
      if ($("input[id='ownership-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "ownership"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic REPAYMENT
      if ($("input[id='repayment-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "repayment"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic THIRD PARTY SERVICES 
      if ($("input[id='third-party-services-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "third-party-services"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic INSURANCES
      if ($("input[id='insurances-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-2" &&
            mloQs[i].subtopic === "insurances"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic GMK
      if ($("input[id='gmk-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (gmkQs[i].difficulty === "week-2") {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic PROGRAMS
      if ($("input[id='programs-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-2" &&
            gmkQs[i].subtopic === "programs"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic PRODUCTS
      if ($("input[id='products-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-2" &&
            gmkQs[i].subtopic === "products"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic VOCAB
      if ($("input[id='vocab-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-2" &&
            gmkQs[i].subtopic === "vocab"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic FED LAW
      if ($("input[id='fed-law-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (fedlawQs[i].difficulty === "week-2") {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic TILA
      if ($("input[id='tila-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-2" &&
            fedlawQs[i].subtopic === "tila"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic RESPA
      if ($("input[id='respa-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-2" &&
            fedlawQs[i].subtopic === "respa"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic CONSUMER-CONTACT-LAWS
      if ($("input[id='consumer-contact-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-2" &&
            fedlawQs[i].subtopic === "consumer-contact-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic FINANCIAL-CRIMES-LAWS
      if ($("input[id='financial-crimes-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-2" &&
            fedlawQs[i].subtopic === "financial-crimes-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic FAIRNESS-LAWS
      if ($("input[id='fairness-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-2" &&
            fedlawQs[i].subtopic === "fairness-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic ECOA
      if ($("input[id='ecoa-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-2" &&
            fedlawQs[i].subtopic === "ecoa"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic ETHICS
      if ($("input[id='ethics-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (ethicsQs[i].difficulty === "week-2") {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
       // subtopic BORROWER FRAUD
       if ($("input[id='borrower-fraud-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (
            ethicsQs[i].difficulty === "week-2" &&
            ethicsQs[i].subtopic === "borrower-fraud"
          ) {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic INDUSTRY FRAUD
      if ($("input[id='industry-fraud-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (
            ethicsQs[i].difficulty === "week-2" &&
            ethicsQs[i].subtopic === "industry-fraud"
          ) {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic USC
      if ($("input[id='usc-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (uscQs[i].difficulty === "week-2") {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic AGENCIES
      if ($("input[id='agencies-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (
            uscQs[i].difficulty === "week-2" &&
            uscQs[i].subtopic === "agencies"
          ) {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic YOUR LICENSE  
      if ($("input[id='your-license-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (
            uscQs[i].difficulty === "week-2" &&
            uscQs[i].subtopic === "your-license"
          ) {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
    }
    // -------------------------------------------------------------------------------------------
    // week 3/4 difficulty level block -----------------------------------------------------------
    if ($("input[id='week-3-box']").is(":checked")) {
      // main topic MLO
      if ($("input[id='mlo-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (mloQs[i].difficulty === "week-3") {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic APPLICATION
      if ($("input[id='application-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "application"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic MLO TIMELINE
      if ($("input[id='mlo-timeline-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "mlo-timeline"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }

      // subtopic DISCLOSURES
      if ($("input[id='disclosures-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "disclosures"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic CLOSING
      if ($("input[id='closing-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "closing"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic OWNERSHIP
      if ($("input[id='ownership-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "ownership"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic REPAYMENT
      if ($("input[id='repayment-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "repayment"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic THIRD PARTY SERVICES 
      if ($("input[id='third-party-services-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "third-party-services"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic INSURANCES
      if ($("input[id='insurances-box']").is(":checked")) {
        for (let i = 0; i < mloQs.length; i++) {
          if (
            mloQs[i].difficulty === "week-3" &&
            mloQs[i].subtopic === "insurances"
          ) {
            const filteredArray = [];
            filteredArray.push(mloQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic GMK
      if ($("input[id='gmk-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (gmkQs[i].difficulty === "week-3") {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic PROGRAMS
      if ($("input[id='programs-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-3" &&
            gmkQs[i].subtopic === "programs"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic PRODUCTS
      if ($("input[id='products-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-3" &&
            gmkQs[i].subtopic === "products"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic VOCAB
      if ($("input[id='vocab-box']").is(":checked")) {
        for (let i = 0; i < gmkQs.length; i++) {
          if (
            gmkQs[i].difficulty === "week-3" &&
            gmkQs[i].subtopic === "vocab"
          ) {
            const filteredArray = [];
            filteredArray.push(gmkQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic FED LAW
      if ($("input[id='fed-law-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (fedlawQs[i].difficulty === "week-3") {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic TILA
      if ($("input[id='tila-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-3" &&
            fedlawQs[i].subtopic === "tila"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic RESPA
      if ($("input[id='respa-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-3" &&
            fedlawQs[i].subtopic === "respa"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic CONSUMER-CONTACT-LAWS
      if ($("input[id='consumer-contact-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-3" &&
            fedlawQs[i].subtopic === "consumer-contact-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic FINANCIAL-CRIMES-LAWS
      if ($("input[id='financial-crimes-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-3" &&
            fedlawQs[i].subtopic === "financial-crimes-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic FAIRNESS-LAWS
      if ($("input[id='fairness-laws-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-3" &&
            fedlawQs[i].subtopic === "fairness-laws"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic ECOA
      if ($("input[id='ecoa-box']").is(":checked")) {
        for (let i = 0; i < fedlawQs.length; i++) {
          if (
            fedlawQs[i].difficulty === "week-3" &&
            fedlawQs[i].subtopic === "ecoa"
          ) {
            const filteredArray = [];
            filteredArray.push(fedlawQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic ETHICS
      if ($("input[id='ethics-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (ethicsQs[i].difficulty === "week-3") {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
       // subtopic BORROWER FRAUD
       if ($("input[id='borrower-fraud-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (
            ethicsQs[i].difficulty === "week-3" &&
            ethicsQs[i].subtopic === "borrower-fraud"
          ) {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic INDUSTRY FRAUD
      if ($("input[id='industry-fraud-box']").is(":checked")) {
        for (let i = 0; i < ethicsQs.length; i++) {
          if (
            ethicsQs[i].difficulty === "week-3" &&
            ethicsQs[i].subtopic === "industry-fraud"
          ) {
            const filteredArray = [];
            filteredArray.push(ethicsQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // main topic USC
      if ($("input[id='usc-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (uscQs[i].difficulty === "week-3") {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic AGENCIES
      if ($("input[id='agencies-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (
            uscQs[i].difficulty === "week-3" &&
            uscQs[i].subtopic === "agencies"
          ) {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
      // subtopic AGENCIES
      if ($("input[id='your-license-box']").is(":checked")) {
        for (let i = 0; i < uscQs.length; i++) {
          if (
            uscQs[i].difficulty === "week-3" &&
            uscQs[i].subtopic === "your-license"
          ) {
            const filteredArray = [];
            filteredArray.push(uscQs[i]);
            questionsArray.push.apply(questionsArray, filteredArray);
          }
        }
      }
    }
    // -------------------------------------------------------------------------------------------
    // ===========================================================================================

    console.log(questionsArray);

    // once all questions are pushed, deploy them
    deployQs();
    // console.log(deployQs);
  });

  // function for deploying questions, adding them to the page dynamically
  function deployQs() {
    // first hide initial content
    let hideChecks = $(".choices-container");
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

    shuffleArray(questionsArray);

    // loop through questions based on topic selection
    for (let i = 0; i <= questionsArray.length; i++) {
      if (questionsArray.length === 0) {
        M.toast({
          html:
            "Oops! Either you forgot to choose a difficulty level and corresponding topic, or you chose a topic that is currently missing questions for the specified difficulty level.",
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
                <a onclick="$(this.parentNode).remove()" class="waves-effect waves-light btn-small" id="old-q-btn"
                ><i class="material-icons right"></i>Hide</a>
              </div> 
            </div>
          </div>
        </div>`;

      // append questions to page
      $("#new-question").append(newQuestion);
    }
  }
});
