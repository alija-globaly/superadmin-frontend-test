const partners = [
  {
    id: 1,
    name: "Academies Australasia",
    website: "http://www.academies.edu.au",
    email: "info@academies.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_279147.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 6, 505 George Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 2,
    name: "Academy of Information Technology",
    website: "https://www.ait.edu.au/",
    email: "info@ait.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253707.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, 7 Kelly Street",
    state: "NSW",
    city: "Ultimo",
    zip_code: "2007",
    currency_code: "AUD"
  },
  {
    id: 3,
    name: "Academy of Interactive Entertainment",
    website: "https://aie.edu.au/",
    email: "online@aie.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253708.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Block E, Canberra Technology Park",
    state: "ACT",
    city: "Watson",
    zip_code: "2602",
    currency_code: "AUD"
  },
  {
    id: 4,
    name: "Adelaide Institute of Business and Technology (AIBT)",
    website: "http://www.aibt.edu.au/",
    email: "info@aibt.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_278944.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 4, 127 Rundle Mall",
    state: "South Australia",
    city: "Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 5,
    name: "AIWT (Australia-International Institute of Workplace Training)",
    website: "https://www.aiwt.edu.au/",
    email: "info@aiwt.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_280347.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 188 Newcastle Street",
    state: "Western Australia",
    city: "Northbridge",
    zip_code: "6003",
    currency_code: "AUD"
  },
  {
    id: 6,
    name: "Alphacrucis College",
    website: "https://www.ac.edu.au/",
    email: "info@ac.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176577.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "30 Cowper Street",
    state: "NSW",
    city: "Parramatta",
    zip_code: "2150",
    currency_code: "AUD"
  },
  {
    id: 7,
    name: "Anglican Schools Commission",
    website: "http://www.asc.wa.edu.au/",
    email: "pa@asc.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_237779.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Wollaston Rd",
    state: "WA",
    city: "Mt Claremont ",
    zip_code: "6010",
    currency_code: "AUD"
  },
  {
    id: 8,
    name: "ANU College",
    website: "https://www.anucollege.edu.au/",
    email: "anucadmissions@anucollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253702.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "95 Daley Road",
    state: "ACT",
    city: "Canberra ",
    zip_code: "2601",
    currency_code: "AUD"
  },
  {
    id: 9,
    name: "Australasian Academy of Cosmetic Dermal Science",
    website: "https://www.aacds.edu.au/",
    email: "enquiries@aacds.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_243639.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "60-62 Stirling Street",
    state: "WA",
    city: "Perth",
    zip_code: "6000",
    currency_code: "AUD"
  },
  {
    id: 10,
    name: "Australasian College of Natural Therapies (ACNT)",
    website: "https://www.acnt.edu.au/",
    email: "enquiries@acnt.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_237798.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "235 Pyrmont Street",
    state: "Pyrmont",
    city: "Sydney",
    zip_code: "2009",
    currency_code: "AUD"
  },
  {
    id: 11,
    name: "Australian Academy of Vocational Education and Trades",
    website:
      "https://au.educationhq.com/directory/31100/australian-academy-of-vocational-education-and-trades/",
    email: "admissions@academia21.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253705.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "152 Elizabeth Street",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 12,
    name: "Australian Adelaide International College",
    website: "http://aaic.edu.au/",
    email: "info@aaic.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_278945.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 135 Pirie Street",
    state: "SA",
    city: "Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 13,
    name: "Australian Catholic University",
    website: "https://www.acu.edu.au/",
    email: "askacu@acu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_259768.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "116 George Street",
    state: "SA",
    city: "Thebarton",
    zip_code: "5031",
    currency_code: "AUD"
  },
  {
    id: 14,
    name: "Australian Child Care Career Options (ACCCO)",
    website: "https://www.accco.com.au/",
    email: "info@accco.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_220708.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "161 Brunswick Street",
    state: "QLD",
    city: "Fortitude Valley",
    zip_code: "4006",
    currency_code: "AUD"
  },
  {
    id: 15,
    name: "Australian College of Agriculture and Horticulture",
    website: "https://www.acah.edu.au/",
    email: "info@acah.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253717.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Suite 2, Level 11, 55 Swanston Street",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3004",
    currency_code: "AUD"
  },
  {
    id: 16,
    name: "Australian College of Beauty Therapy",
    website: "https://www.acbt.edu.au/",
    email: "enquiries@acbt.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_243640.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "2nd Floor 60 Stirling St",
    state: "WA",
    city: "Perth",
    zip_code: "6000",
    currency_code: "AUD"
  },
  {
    id: 17,
    name: "Australian College of Information Technology",
    website: "https://www.acit.edu.au/",
    email: "connect@acit.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_220711.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, 246 Varsity Parade",
    state: "QLD",
    city: "Gold Coast",
    zip_code: "4227",
    currency_code: "AUD"
  },
  {
    id: 18,
    name: "Australian College of Physical Education (ACPE)",
    website: "https://www.acpe.edu.au/",
    email: "study@acpe.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_27118.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "10 Parkview Drive, Sydney Olympic Park ",
    state: "NSW",
    city: "Sydney",
    zip_code: "2127",
    currency_code: "AUD"
  },
  {
    id: 19,
    name: "Australian College of Specialist Makeup",
    website: "https://www.acsm.edu.au/",
    email: "enquiries@acsm.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_243637.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "60 STIRLING STREET",
    state: "WA",
    city: "Perth",
    zip_code: "6000",
    currency_code: "AUD"
  },
  {
    id: 20,
    name: "Australian College of Technology and Business",
    website: "http://www.actb.com.au/",
    email: "info@actb.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248297.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 344 Queen Street",
    state: "QLD",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 21,
    name: "Australian Institute of Applied Sciences (AIAS)",
    website: "https://www.aias.edu.au/",
    email: "admin@aias.com.au.",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253720.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 30 Church Lane",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 22,
    name: "Australian Institute of Family Counselling",
    website: "https://www.aifc.com.au/",
    email: "info@aifc.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_220719.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "7/92 Hoskins Street",
    state: "ACT",
    city: "Mitchell",
    zip_code: "2911",
    currency_code: "AUD"
  },
  {
    id: 23,
    name: "Australian Institute of Higher Education",
    website: "https://aih.nsw.edu.au/",
    email: "marketing@aih.nsw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253701.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "L3 & 4, 545 Kent Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 24,
    name: "Australian Institute of Music (AIM)",
    website: "https://www.aim.edu.au/",
    email: "enquiries@aim.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230122.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "1 Foveaux St",
    state: "NSW",
    city: "Surry Hills",
    zip_code: "2010",
    currency_code: "AUD"
  },
  {
    id: 25,
    name: "Australian Pacific College",
    website: "http://www.apc.edu.au/",
    email: "info@apc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253728.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "189 Kent Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 26,
    name: "Australian Pacific Travel and Tourism",
    website: "http://aptt.edu.au/",
    email: "info@aptt.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_237867.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "100 Ebley St",
    state: "NSW",
    city: "Bondi Junction",
    zip_code: "2022",
    currency_code: "AUD"
  },
  {
    id: 27,
    name: "Australian Professional Skills Institute",
    website: "https://www.apsi.edu.au/",
    email: "info@apsi.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_245293.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Wellington Fair, 40 Lord Street",
    state: "WA",
    city: "East Perth",
    zip_code: "6004",
    currency_code: "AUD"
  },
  {
    id: 28,
    name: "Australian School of Management (ASM)",
    website: "http://www.asm.edu.au/",
    email: "admissions@asm.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253851.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "196 Flinders St",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 29,
    name: "Australian Wings Academy",
    website: "https://awa.qld.edu.au/",
    email: "info@awa.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253731.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "19 Lores Bonney Circuit, Bilinga",
    state: "QLD",
    city: "Gold Coast",
    zip_code: "4225",
    currency_code: "AUD"
  },
  {
    id: 30,
    name: "Aviation Australia",
    website: "https://www.aviationaustralia.aero/",
    email: "marketing@aviationaustralia.aero",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253733.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "15-25 Boronia Rd",
    state: "QLD",
    city: "Eagle Farm",
    zip_code: "4009",
    currency_code: "AUD"
  },
  {
    id: 31,
    name: "Avondale College of Higher Education",
    website: "http://www.avondale.edu.au/",
    email: "reception@avondale.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_34870.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "582 Freemans Dr",
    state: "NSW",
    city: "Cooranbong",
    zip_code: "2265",
    currency_code: "AUD"
  },
  {
    id: 32,
    name: "Basair Aviation College",
    website: "http://www.basair.com.au/",
    email: "bkreception@basair.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253737.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "628/23-25 Airport Avenue",
    state: "NSW",
    city: "Bankstown Airport",
    zip_code: "2200",
    currency_code: "AUD"
  },
  {
    id: 33,
    name: "BCA National Training Group",
    website: "https://www.bcanational.edu.au/",
    email: "mail@bcanational.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253734.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, Tablet House, 29 Refinery Drive",
    state: "NSW",
    city: "Pyrmont",
    zip_code: "2009",
    currency_code: "AUD"
  },
  {
    id: 34,
    name: "Blue Mountains International Hotel Management School",
    website: "https://www.bluemountains.edu.au/",
    email: "enquiry@bluemountains.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253740.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "1 Chambers Road",
    state: "NSW",
    city: "Leura",
    zip_code: "2780",
    currency_code: "AUD"
  },
  {
    id: 35,
    name: "Bond University",
    website: "https://bond.edu.au/",
    email: "information@bond.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253742.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "14 University Drive",
    state: "QLD",
    city: "Robina",
    zip_code: "4226",
    currency_code: "AUD"
  },
  {
    id: 36,
    name: "Box Hill Institute",
    website: "https://www.boxhill.edu.au/",
    email: "info@boxhill.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253744.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "465 Elgar Road",
    state: "VIC",
    city: "Box Hill",
    zip_code: "3127",
    currency_code: "AUD"
  },
  {
    id: 37,
    name: "BROWNS Professional",
    website: "https://brownsenglish.edu.au/",
    email: "sibarra@browns.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_224396.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 102 Adelaide Street",
    state: "QLD",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 38,
    name: "Canberra Institute of Technology (CIT)",
    website: "https://cit.edu.au/",
    email: "infoline@cit.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_233120.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "",
    state: "ACT",
    city: " Canberra",
    zip_code: "2601",
    currency_code: "AUD"
  },
  {
    id: 39,
    name: "Canning College",
    website: "https://www.canningcollege.wa.edu.au/Home.htm",
    email: "sservices@canningcollege.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253750.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Marquis Street Bentley ",
    state: "WA",
    city: "Perth",
    zip_code: "6102",
    currency_code: "AUD"
  },
  {
    id: 40,
    name: "Canterbury Business College",
    website: "http://www.canterburybc.com.au/",
    email: "comarketing@canterburyeducation.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253752.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 6 / 29-37 Bellevue Street",
    state: "NSW",
    city: "Surry Hills",
    zip_code: "2010",
    currency_code: "AUD"
  },
  {
    id: 41,
    name: "Canterbury Technical Institute",
    website: "https://cti.qld.edu.au/",
    email: "info@cti.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253754.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 333 Adelaide St",
    state: "QLD",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 42,
    name: "Charles Darwin University",
    website: "https://www.cdu.edu.au/",
    email: "student.central@cdu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253427.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Ellengowan Drive",
    state: "NT",
    city: "Casuarina",
    zip_code: "(0)811",
    currency_code: "AUD"
  },
  {
    id: 43,
    name: "Charles Sturt University",
    website: "https://www.csu.edu.au/",
    email: "inquiry@csu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_133750.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Elizabeth Mitchell Dr.",
    state: "NSW",
    city: "Thurgoona",
    zip_code: "2640",
    currency_code: "AUD"
  },
  {
    id: 44,
    name: "Charles Sturt University (CSU) Study Centres",
    website: "http://www.csustudycentres.edu.au/",
    email: "csuadmissions@studygroup.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_31627.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 63 Oxford Street",
    state: "NSW",
    city: "Darlinghurst",
    zip_code: "2010",
    currency_code: "AUD"
  },
  {
    id: 45,
    name: "Charlton Brown",
    website: "https://www.charltonbrown.com.au/",
    email: "info@charltonbrown.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_257920.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "60 Gloucester Street",
    state: "QLD",
    city: "Spring Hill",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 46,
    name: "Chisholm Institute",
    website: "https://www.chisholm.edu.au/",
    email: "enquiries@chisholm.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_234465.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "121 Stud Road",
    state: "VIC",
    city: "Dandenong",
    zip_code: "3175",
    currency_code: "AUD"
  },
  {
    id: 47,
    name: "Christian Heritage College",
    website: "https://www.chc.edu.au/",
    email: "study@chc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_222533.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "322 Wecker Road",
    state: "QLD",
    city: "Carindale",
    zip_code: "4152",
    currency_code: "AUD"
  },
  {
    id: 48,
    name: "College Australia",
    website: "https://www.collegeaustralia.edu.au/",
    email: " info@collegeaustralia.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_237918.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Unit 3B, 104 Newmarket Rd",
    state: "QLD",
    city: "Windsor,",
    zip_code: "4030",
    currency_code: "AUD"
  },
  {
    id: 49,
    name: "College of Complementary Medicine",
    website: "https://ccm.edu.au/",
    email: "enquiries@ccm.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230878.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Suite 711, 1C Burdett St.",
    state: "NSW",
    city: "Hornsby",
    zip_code: "2077",
    currency_code: "AUD"
  },
  {
    id: 50,
    name: "College of Law",
    website: "https://www.collaw.edu.au/",
    email: "collaw@collaw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_205262.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "2 Chandos Street",
    state: "NSW",
    city: "St Leonards",
    zip_code: "2065",
    currency_code: "AUD"
  },
  {
    id: 51,
    name: "Complex Institute of Education",
    website: "https://complexinstitute.wordpress.com/",
    email: "SCCInfo@scc.spokane.edu",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230102.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "400 Queen Street ",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 52,
    name: "CQUniversity Australia",
    website: "https://www.cqu.edu.au/",
    email: "pac@cqu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_229642.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "64 Valentine Plains Road",
    state: "QLD",
    city: "Biloela",
    zip_code: "4715",
    currency_code: "AUD"
  },
  {
    id: 53,
    name: "Curtin College",
    website: "https://www.curtincollege.edu.au",
    email: "info@curtincollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253429.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Kent Street",
    state: "Western Australia",
    city: "Bentley",
    zip_code: "6102",
    currency_code: "AUD"
  },
  {
    id: 54,
    name: "Curtin University",
    website: "https://www.curtin.edu.au/",
    email: "admissions@curtin.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253431.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Kent Street",
    state: "Western Australia",
    city: "Perth",
    zip_code: "6102",
    currency_code: "AUD"
  },
  {
    id: 55,
    name: "Danford College",
    website: "http://www.danford.edu.au/",
    email: "info@danford.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230093.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 8, 277 William Street ",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 56,
    name: "Deakin College",
    website: "https://www.deakincollege.edu.au",
    email: "deakincollege@deakin.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_274180.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Burwood Campus, 221 Burwood Hwy",
    state: "VIC",
    city: "Burwood",
    zip_code: "3125",
    currency_code: "AUD"
  },
  {
    id: 57,
    name: "Deakin University",
    website: "http://www.deakin.edu.au/",
    email: "study@deakin.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253864.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "221 Burwood Highway",
    state: "VIC",
    city: "Burwood",
    zip_code: "3125",
    currency_code: "AUD"
  },
  {
    id: 58,
    name: "DNA Kingston Training",
    website: "http://www.dnakingstontraining.edu.au/",
    email: "Admin@DNAkingston.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253432.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "37 Hargreaves Street",
    state: "WA",
    city: "Belmont",
    zip_code: "6104",
    currency_code: "AUD"
  },
  {
    id: 59,
    name: "Edith Cowan College (ECC)",
    website: "https://www.edithcowancollege.edu.au/",
    email: "info@edithcowancollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_218038.png",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Building 10, 2 Bradford Street",
    state: "WA",
    city: "Mount Lawley",
    zip_code: "6050",
    currency_code: "AUD"
  },
  {
    id: 60,
    name: "Edith Cowan University (ECU)",
    website: "http://www.ecu.edu.au/",
    email: "enquiries@ecu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_12059.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "270 Joondalup Drive",
    state: "WA",
    city: "Joondalup",
    zip_code: "6027",
    currency_code: "AUD"
  },
  {
    id: 61,
    name: "EIM International Training",
    website: "http://www.eiminternational.edu.au/",
    email: "cairns@eim.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254653.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "9 Aplin Street",
    state: "QLD",
    city: "Cairns",
    zip_code: "4870",
    currency_code: "AUD"
  },
  {
    id: 62,
    name: "Endeavour College of Natural Health",
    website: "https://www.endeavour.edu.au/",
    email: "info@endeavour.edu.au ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_229971.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "88 Currie St",
    state: "SA",
    city: "Adelaid",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 63,
    name: "Envirotech Education",
    website: "https://envirotech.edu.au/en/about-us/",
    email: "enrolments@envirotech.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_218076.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "62-66 Goodwin Terrace Burleigh Heads,",
    state: "Queensland ",
    city: "Gold Coast",
    zip_code: "4220",
    currency_code: "AUD"
  },
  {
    id: 64,
    name: "EQUALS International",
    website: "http://equals.edu.au/",
    email: "admissions@equals.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_222600.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "81 Currie St",
    state: "SA ",
    city: "Adelaide ",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 65,
    name: "Eynesbury",
    website: "https://www.eynesbury.navitas.com/",
    email: "eynesbury@navitas.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_99631.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "15-19 Franklin Street",
    state: "SA",
    city: "Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 66,
    name: "Federation University Australia",
    website: "https://federation.edu.au/",
    email: "info@federation.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_88262.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "University Drive",
    state: "VIC",
    city: "Mt Helen",
    zip_code: "3350",
    currency_code: "AUD"
  },
  {
    id: 67,
    name: "Flinders International Study Centre",
    website: "http://isc.flinders.edu.au/",
    email: "fisccampus@studygroup.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248320.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Sturt Dr",
    state: "SA",
    city: "Adelaide",
    zip_code: "5042",
    currency_code: "AUD"
  },
  {
    id: 68,
    name: "Flinders University",
    website: "https://www.flinders.edu.au/",
    email: "admissions@flinders.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_249642.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Sturt Rd",
    state: "SA",
    city: "Bedford Park",
    zip_code: "5042",
    currency_code: "AUD"
  },
  {
    id: 69,
    name: "Gateway Education Academy",
    website: "https://www.gatewayeducation.com.au/",
    email: "info@gatewayeducation.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_246734.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Suite 110, Level 1, 250 Pitt Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 71,
    name: "Greenwich College",
    website: "https://www.greenwichcollege.edu.au/",
    email: "info@greenwichcollege.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_132177.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, 396 Pitt Street ",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 72,
    name: "Griffith College",
    website: "https://www.griffith.edu.au/college",
    email: "griffithcollege@navitas.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253854.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 5, International Building M14176 Messines Ridge Rd,",
    state: "QLD",
    city: "Mount Gravatt",
    zip_code: "4122",
    currency_code: "AUD"
  },
  {
    id: 74,
    name: "Hawthorn-Melbourne",
    website: "http://www.hawthornenglish.edu.au/",
    email: "IELTS@hawthornenglish.vic.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253873.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "442 Auburn Road",
    state: "VIC",
    city: "Hawthorn",
    zip_code: "3122",
    currency_code: "AUD"
  },
  {
    id: 75,
    name: "Health Careers International",
    website: "https://www.healthcareers.edu.au/",
    email: "enquiry@healthcareers.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_243649.png",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 76-80 Turnham Avenue",
    state: "VIC",
    city: "Rosanna",
    zip_code: "3084",
    currency_code: "AUD"
  },
  {
    id: 76,
    name: "Holmes Institute",
    website: "https://www.holmes.edu.au/",
    email: "melbourne@holmes.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176582.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "185 Spring Street",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 77,
    name: "Holmesglen",
    website: "https://holmesglen.edu.au/",
    email: "International.Admissions@holmesglen.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253613.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Corner Batesford & Warrigal Roads",
    state: "VIC",
    city: "Chadstone",
    zip_code: "3148",
    currency_code: "AUD"
  },
  {
    id: 78,
    name: "IH Brisbane - ALS",
    website: "https://www.ihbrisbane.com.au/",
    email: "enrol@ihbrisbane.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253695.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 8/116 Adelaide Street",
    state: "QLD",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 79,
    name: "Imagine Education Australia",
    website: "http://www.imagineeducation.com.au/",
    email: "info@imagineeducation.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_221739.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "13 Benowa Road,",
    state: "QLD",
    city: "Southport",
    zip_code: "4215",
    currency_code: "AUD"
  },
  {
    id: 80,
    name:
      "Institute of Continuing and TESOL Education (ICTE-UQ) The University of Queensland",
    website: "https://icte.uq.edu.au/",
    email: "enquiries@icte.uq.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176608.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street:
      "Sir Llew Edwards Building (#14) Cnr University Drive & Campbell Road",
    state: "QLD",
    city: "St Lucia",
    zip_code: "4072",
    currency_code: "AUD"
  },
  {
    id: 81,
    name: "Institute of Health and Nursing Australia",
    website: "https://www.ihna.edu.au/",
    email: "enquiry@ihna.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_245295.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 5, 131 Queen Street,",
    state: "VIC",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 82,
    name: "InTech Institute of Technology",
    website: "https://www.intech.edu.au",
    email: "hello@intech.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_216072.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "21 Parkview Street",
    state: "QLD",
    city: "Milton",
    zip_code: "4064",
    currency_code: "AUD"
  },
  {
    id: 83,
    name: "International College of Hotel Management",
    website: "https://www.ichm.edu.au/",
    email: "admissions@ichm.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176767.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "137 Days Road ",
    state: "SA",
    city: "Regency Park",
    zip_code: "5010",
    currency_code: "AUD"
  },
  {
    id: 84,
    name: "International College of Management, Sydney - ICMS",
    website: "https://www.icms.edu.au/",
    email: "info@icms.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254368.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "151 Darley Road, Manly",
    state: "NSW",
    city: "Sydney",
    zip_code: "2095",
    currency_code: "AUD"
  },
  {
    id: 85,
    name: "International House Sydney",
    website: "https://ihsydney.com.au/",
    email: "info@ihsydney.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253617.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 203 Clarence St",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 86,
    name:
      "International Institute of Business and Information Technology (IIBIT)",
    website: "https://www.iibit.edu.au/",
    email: "admissions@iibit.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_264000.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Ground Floor, 841 George St",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 87,
    name: "International School of Colour and Design (ISCD)",
    website: "https://www.iscd.edu.au/",
    email: "creativity@iscd.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_252606.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 3, 118 Walker Street",
    state: "NSW",
    city: " North Sydney ",
    zip_code: "2060",
    currency_code: "AUD"
  },
  {
    id: 88,
    name: "Jabin Hopkins Institute of Technology",
    website: "http://www.jabinhopkins.edu.au/",
    email: "info@jabinhopkins.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_278946.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2 & 4, 135 Pirie Street",
    state: "SA",
    city: "Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 89,
    name: "James Cook University",
    website: "https://www.jcu.edu.au/international-students",
    email: "internationaladmissions@jcu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253896.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "1 James Cook Drive Douglas",
    state: "QLD",
    city: "Townsville",
    zip_code: "4811",
    currency_code: "AUD"
  },
  {
    id: 90,
    name: "JMC Academy",
    website: "https://www.jmcacademy.edu.au/",
    email: "Sydney@jmc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253897.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "561 Harris Street",
    state: "NSW",
    city: "Ultimo",
    zip_code: "2007",
    currency_code: "AUD"
  },
  {
    id: 91,
    name: "JP International College",
    website: "https://www.jpic.act.edu.au/",
    email: "support@jpic.act.edu.au ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_225475.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Unit 5, 118-128 Mawson Place",
    state: "ACT",
    city: "Mawson",
    zip_code: "2607",
    currency_code: "AUD"
  },
  {
    id: 92,
    name: "Kangan Institute",
    website: "https://www.kangan.edu.au/international-new",
    email: "enquiries@kangan.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253899.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "38 Buckley Street ",
    state: "VIC",
    city: "Essendon",
    zip_code: "3040",
    currency_code: "AUD"
  },
  {
    id: 93,
    name: "Kaplan Business School",
    website: "https://www.kbs.edu.au/",
    email: "enquiries@kbs.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253900.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 68 Grenfell St",
    state: "SA",
    city: "Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 94,
    name: "Kent Institute Australia",
    website: "http://kent.edu.au",
    email: "info@kent.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_216078.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 11, 10 Barrack Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 95,
    name: "Keystone College of Business and Technology",
    website: "https://kcbt.wa.edu.au/",
    email: "admin@kcbt.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_245296.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "170 Wellington Street",
    state: "WA",
    city: "East Perth",
    zip_code: "6004",
    currency_code: "AUD"
  },
  {
    id: 96,
    name: "King's Own Institute (KOI)",
    website: "http://koi.edu.au/wp/",
    email: "ask@koi.edu.au",
    logo: null,
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 31 Market Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "",
    currency_code: "AUD"
  },
  {
    id: 97,
    name: "La Trobe College Australia",
    website: "https://www.latrobecollegeaustralia.edu.au/",
    email: "sydney@latrobe.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_284746.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Campus, 255 Elizabeth Street",
    state: "NSW",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 98,
    name: "La Trobe University",
    website: "http://www.latrobe.edu.au/courses/science",
    email: "stud-admin.aw@latrobe.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_262410.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "",
    state: "VIC",
    city: "Wodonga",
    zip_code: "3689",
    currency_code: "AUD"
  },
  {
    id: 99,
    name: "Language Links",
    website: "https://www.languagelinks.wa.edu.au/",
    email: "marketing@languagelinks.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_280662.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 120 Roe Street",
    state: "WA",
    city: "Perth",
    zip_code: "6003",
    currency_code: "AUD"
  },
  {
    id: 100,
    name: "LCI Melbourne",
    website: "http://www.lcimelbourne.edu.au/",
    email: "info@lcimelbourne.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_101072.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "150 Oxford Street",
    state: "Victoria",
    city: "Collingwood ",
    zip_code: "3066",
    currency_code: "AUD"
  },
  {
    id: 101,
    name: "Le Cordon Bleu Australia",
    website: "https://www.cordonbleu.edu/australia/home/en",
    email: "australia@cordonbleu.edu",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253914.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Days Road ",
    state: " South Australia",
    city: "Regency Park ",
    zip_code: "5010",
    currency_code: "AUD"
  },
  {
    id: 102,
    name: "Lexis English",
    website: "https://www.lexisenglish.com/",
    email: "sydney@lexisenglish.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253915.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "6 Lanyana Way",
    state: " Queensland",
    city: "Noosa Heads",
    zip_code: "4567",
    currency_code: "AUD"
  },
  {
    id: 103,
    name: "Lexis English (Noosa)",
    website: "https://www.lexisenglish.com/location/noosa/",
    email: "noosa@lexisenglish.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253916.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "6 Lanyana Way",
    state: " Queensland",
    city: "Noosa Heads",
    zip_code: "4567",
    currency_code: "AUD"
  },
  {
    id: 104,
    name: "Lexis English (Sunshine Coast)",
    website: "https://www.lexisenglish.com/location/sunshine-coast/",
    email: "sunshinecoast@lexisenglish.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253917.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 6, Bryant House, 26 Duporth Avenue",
    state: " Queensland",
    city: "Maroochydore ",
    zip_code: "4558",
    currency_code: "AUD"
  },
  {
    id: 106,
    name: "Macleay College",
    website: "https://www.macleay.edu.au/",
    email: "maitlo:study@macleay.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_279499.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: " Level 2, 28 Foveaux St ",
    state: "New South Wales",
    city: "Surry Hills ",
    zip_code: "2010",
    currency_code: "AUD"
  },
  {
    id: 107,
    name: "Macquarie University",
    website: "https://www.mq.edu.au/",
    email: "alumni@mq.edu.au ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253923.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Balaclava Road",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2109",
    currency_code: "AUD"
  },
  {
    id: 108,
    name: "Magill College Sydney",
    website: "https://magill.edu.au/",
    email: "info@magill.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253925.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 4, 388-390 Sussex Street",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 109,
    name: "Malyon College",
    website: "https://www.malyon.edu.au/",
    email: "info@malyon.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_218075.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "53 Prospect Rd",
    state: "Queensland",
    city: "Gaythorne ",
    zip_code: "4051",
    currency_code: "AUD"
  },
  {
    id: 110,
    name: "Martin College",
    website: "https://www.martin.edu.au/",
    email: "StudentServicesEnquiries@studygroup.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_12088.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "4/119 Charlotte St",
    state: "QueensLand",
    city: "Brisbane City ",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 112,
    name: "MEGT Institute",
    website: "https://megtinstitute.edu.au/",
    email: "institute@megt.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253919.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "3/55 Swanston St",
    state: "Victoria",
    city: "Melbourne ",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 113,
    name: "Melbourne College of Business and Technology",
    website: "https://www.mcbt.vic.edu.au/",
    email: "enquiry@mcbt.vic.edu.au?",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254755.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 13, 190 Queen St",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 114,
    name: "Melbourne Institute of Technology",
    website: "http://www.mit.edu.au/",
    email: "enquiries@mit.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253927.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "The Argus, 288 La Trobe St",
    state: "Victoria",
    city: "Melbourne ",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 115,
    name: "Melbourne Polytechnic",
    website: "https://www.melbournepolytechnic.edu.au/international-students/",
    email: "info@melbournepolytechnic.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253930.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "77 St Georges Road",
    state: "Victoria ",
    city: "Preston ",
    zip_code: "3072",
    currency_code: "AUD"
  },
  {
    id: 116,
    name: "Menzies Institute of Technology",
    website: "https://www.menzies.vic.edu.au/",
    email: "info@menzies.vic.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253931.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "355 Spencer St",
    state: "Victoria ",
    city: "West Melbourne ",
    zip_code: "3003",
    currency_code: "AUD"
  },
  {
    id: 117,
    name: "Mercury Institute of Victoria",
    website: "http://www.mercury.edu.au/",
    email: "admissions@mercury.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_229644.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 117 Lonsdale Street",
    state: "Victoria",
    city: "Melbourne ",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 118,
    name: "Monash College",
    website: "https://www.monashcollege.edu.au/",
    email: "student.admin@monashcollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_259234.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 3, 222 Bourke Street",
    state: "Victoria",
    city: " Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 119,
    name: "Murdoch Institute of Technology",
    website: "https://www.murdochinstitute.wa.edu.au/",
    email: "info@murdochinstitute.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253944.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Building 512, Murdoch University, South Street,Murdoch",
    state: "Western Australia",
    city: "Perth",
    zip_code: "6150",
    currency_code: "AUD"
  },
  {
    id: 120,
    name: "Murdoch University",
    website: "http://www.murdoch.edu.au/study/international-students",
    email: "info@murdoch.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_252612.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "90 South Street, Murdoch",
    state: "Western Australia",
    city: "Perth",
    zip_code: "6150",
    currency_code: "AUD"
  },
  {
    id: 121,
    name: "Nazarene Theological College",
    website: "https://ntc.edu.au/",
    email: "office@ntc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_215968.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "40 Woodlands Drive",
    state: "Queensland",
    city: "Thornlands",
    zip_code: "4164",
    currency_code: "AUD"
  },
  {
    id: 122,
    name: "New England College",
    website: "https://www.nec.edu.au/",
    email: "info@nec.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248466.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "151 Wellington Road",
    state: "Queensland",
    city: " Brisbane",
    zip_code: "4169",
    currency_code: "AUD"
  },
  {
    id: 123,
    name: "New York College",
    website: "http://newyorkcollege.edu.au/",
    email: "info@newyorkcollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248467.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "1009 Ipswich Road",
    state: " Queensland",
    city: "Moorooka ",
    zip_code: "4105",
    currency_code: "AUD"
  },
  {
    id: 124,
    name: "New York Film Academy Australia",
    website: "https://www.nyfa.edu.au/",
    email: "australia@nyfa.edu",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248468.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Southport Central Towers, Central 2E, 5 Lawson Street",
    state: " Queensland",
    city: "Southport",
    zip_code: "4215",
    currency_code: "AUD"
  },
  {
    id: 125,
    name: "Newcastle International College (NIC)",
    website:
      "https://www.studyinaustralia.gov.au/SIASearch/SIAOrganisationDetails.aspx?ProviderId=3293&moduleId=13&LocationId=4585&Campus=Callaghan&Keyword=",
    email: "nic@navitas.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253947.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 3, General Purpose Building, Callaghan Campus,Callaghan",
    state: "New South Wales",
    city: "Newcastle ",
    zip_code: "2308",
    currency_code: "AUD"
  },
  {
    id: 128,
    name: "Ozford Business College",
    website: "http://www.ozford.edu.au/",
    email: "info@ozford.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230173.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: " 310 King Street",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 129,
    name: "Ozford Institute of Higher Education",
    website: "https://www.teqsa.gov.au",
    email: "enquiries@teqsa.gov.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230174.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3001",
    currency_code: "AUD"
  },
  {
    id: 130,
    name: "Phoenix Academy",
    website: "https://www.phoenix.wa.edu.au/",
    email: "info@phoenix.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253144.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "223 Vincent St",
    state: "Western Australia",
    city: "West Perth",
    zip_code: "6005",
    currency_code: "AUD"
  },
  {
    id: 131,
    name: "Photography Studies College",
    website: "https://www.psc.edu.au/",
    email: "info@psc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_247916.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "65 City Rd",
    state: "Victoria ",
    city: "Southbank",
    zip_code: "3006",
    currency_code: "AUD"
  },
  {
    id: 132,
    name: "Quality Training and Hospitality College",
    website: "https://www.qthc.edu.au/",
    email: "paris@qthc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_215938.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Suite 2, Ground Level, 55 Pyrmont Bridge Road",
    state: "New South Wales",
    city: "Pyrmont ",
    zip_code: "2009",
    currency_code: "AUD"
  },
  {
    id: 133,
    name: "Queensland Academy of Technology",
    website: "http://www.qat.qld.edu.au/",
    email: "admin@qat.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_216069.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Ground Floor / 333 Adelaide Street ",
    state: "Queensland",
    city: "Brisbane ",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 134,
    name: "Queensland Institute of Commerce and Technology",
    website: "http://www.qict.edu.au/",
    email: "ripud1477@yahoo.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_225984.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2-3, 376, Bourke Street",
    state: "Victoria ",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 135,
    name: "Queensland International Business Academy",
    website: "https://www.qiba.edu.au/",
    email: "principal@qiba.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_221729.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 3 and 7, 114-120 Castlereagh St",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 136,
    name: "Queensland School of Film and Television",
    website: "https://qsft.qld.edu.au/",
    email: "info@qsft.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_216066.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "22 Warwick street Annerley ",
    state: "Queensland ",
    city: "Annerley ",
    zip_code: "4103",
    currency_code: "AUD"
  },
  {
    id: 137,
    name: "Queensland University of Technology (QUT)",
    website: "https://www.qut.edu.au/study/international",
    email: "officeofresearch@qut.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254718.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "2 George St",
    state: "Queensland ",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 138,
    name: "Royal Brisbane Institute of Technology",
    website: "http://www.rbit.qld.edu.au/",
    email: "info@rbit.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_179692.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 99 Creek street",
    state: "Queensland",
    city: "Brisbane ",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 139,
    name: "Russo Business School",
    website: "https://www.russo.qld.edu.au/",
    email: "enquire@russo.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_237862.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "L4/100 Eagle Street",
    state: "Queensland",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 140,
    name: "SAE Institute",
    website: "https://www.sae.edu/",
    email: "sydney@sae.edu",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_97619.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "39 Regent St",
    state: "New South Wales",
    city: " Chippendale",
    zip_code: "2008",
    currency_code: "AUD"
  },
  {
    id: 141,
    name: "Sarina Russo Institute",
    website: "https://www.sri.edu.au/",
    email: "info@sri.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253597.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "100 Eagle Street ",
    state: " Queensland ",
    city: "Brisbane",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 142,
    name: "Shafston International College",
    website: "http://shafston.edu/",
    email: "info@shafston.edu",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253599.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "46 Thorn St, Kangaroo Point ",
    state: "Queensland",
    city: "Brisbane ",
    zip_code: "4169",
    currency_code: "AUD"
  },
  {
    id: 143,
    name: "South Australian Institute of Business and Technology (SAIBT)",
    website: "https://www.saibt.sa.edu.au/",
    email: "saibt@navitas.com",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176770.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street:
      "City East Campus Level 4, Brookman Building, North Terrace (corner of Frome St)",
    state: "South Australia ",
    city: " Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 144,
    name: "Spencer College",
    website: "http://www.spencercollege.edu.au/",
    email: "admin@spencercollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_218077.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 4, 30 Herschel Street",
    state: "Queensland",
    city: "Brisbane City",
    zip_code: "4000",
    currency_code: "AUD"
  },
  {
    id: 145,
    name: "Stott's College",
    website: "http://www.stotts.edu.au/",
    email: "socialmedia@ae.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_229963.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "168 Exhibition Street",
    state: " Victoria ",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 146,
    name: "Strathfield College",
    website: "https://strathfieldcollege.edu.au/",
    email: "info@strathfieldcollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_230148.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, 128-136 Chalmers St",
    state: "New South Wales",
    city: "Surry Hills ",
    zip_code: "2010",
    currency_code: "AUD"
  },
  {
    id: 147,
    name: "Sunraysia Institute of TAFE",
    website: "https://www.sunitafe.edu.au/",
    email: "info@sunitafe.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176572.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "453 Benetook Ave",
    state: "Victoria",
    city: " Mildura",
    zip_code: "3502",
    currency_code: "AUD"
  },
  {
    id: 148,
    name: "Surfcity College",
    website: "http://www.surfcitycollege.com/",
    email: "admin.manager@college.surfcity.org.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_221720.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "3046 Surfers Paradise Blvd",
    state: "Queensland",
    city: "Surfers Paradise",
    zip_code: "4217",
    currency_code: "AUD"
  },
  {
    id: 149,
    name: "Swan Institute Australia",
    website: "http://sia.wa.edu.au/",
    email: "admission@sia.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_245286.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "1/440 William Street",
    state: "Western Australia",
    city: "Perth ",
    zip_code: "6000",
    currency_code: "AUD"
  },
  {
    id: 151,
    name: "Swinburne University of Technology",
    website: "https://www.swinburne.edu.au/",
    email: "study@swinburne.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_279114.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "John Street",
    state: "Victoria",
    city: " Hawthorn",
    zip_code: "3122",
    currency_code: "AUD"
  },
  {
    id: 152,
    name: "Sydney Business And Travel Academy",
    website: "http://www.sbta.com.au/",
    email: "info@sbta.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_215939.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, 401 Sussex Street",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 153,
    name: "Sydney Institute of Business and Technology (SIBT)",
    website: "https://www.sibt.nsw.edu.au/",
    email: "study@sibt.nsw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253637.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 4 255 Elizabeth Street ",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 154,
    name: "Sydney Institute of Traditional Chinese Medicine",
    website: "https://www.sitcm.edu.au/",
    email: "administration@sitcm.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_210102.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 5, 25 Dixon Street,Haymarket ",
    state: "",
    city: "",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 155,
    name: "Tabor College of Higher Education",
    website: "https://tabor.edu.au/",
    email: "enquiry@tabor.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_231745.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "181 Goodwood Rd",
    state: "South Australia",
    city: " Millswood ",
    zip_code: "5034",
    currency_code: "AUD"
  },
  {
    id: 156,
    name: "TAFE International Western Australia",
    website: "https://www.tafeinternational.wa.edu.au/",
    email: "study.tiwa@dtwd.wa.gov.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_215832.png",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Building B, Level 2, 140 Royal Street",
    state: "Western Australia",
    city: "East Perth",
    zip_code: "6004",
    currency_code: "AUD"
  },
  {
    id: 157,
    name: "TAFE NSW",
    website: "https://www.studyintafe.edu.au/home",
    email: "anna.wu@tafensw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_273633.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Poole St",
    state: "NSW ",
    city: "Albury ",
    zip_code: "2640",
    currency_code: "AUD"
  },
  {
    id: 158,
    name: "TAFE Queensland",
    website: "https://international.tafeqld.edu.au",
    email: "Admin.Ec.TQI@tafe.qld.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_119712.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "66 Ernest St",
    state: "Queensland",
    city: "South Brisbane",
    zip_code: "4101",
    currency_code: "AUD"
  },
  {
    id: 159,
    name: "TAFE SA",
    website: "https://www.tafesa.edu.au",
    email: "info@tafesa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253795.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Gordon St",
    state: "South Australia",
    city: "Naracoorte",
    zip_code: "5271",
    currency_code: "AUD"
  },
  {
    id: 160,
    name: "TasTAFE",
    website: "https://www.tastafe.tas.edu.au/",
    email: "webmaster@tastafe.tas.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253886.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "19 Bathurst St",
    state: "Tasmania",
    city: "Hobart",
    zip_code: "7000",
    currency_code: "AUD"
  },
  {
    id: 161,
    name: "The Gordon",
    website: "http://www.thegordon.edu.au/international",
    email: "courinfo@gordontafe.edu.au  ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253850.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Gordon Ave",
    state: "Victoria",
    city: "Geelong",
    zip_code: "3220",
    currency_code: "AUD"
  },
  {
    id: 162,
    name: "The Hotel School",
    website: "https://hotelschool.scu.edu.au/",
    email: "hotelschool@scu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_249571.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 3, 399 Lonsdale Street",
    state: "Victoria",
    city: " Melbourne ",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 164,
    name: "The University of Adelaide",
    website: "https://international.adelaide.edu.au/",
    email: "iss@adelaide.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254382.jpeg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: " 55 King William Rd",
    state: "South Australia",
    city: "North Adelaide",
    zip_code: "5006",
    currency_code: "AUD"
  },
  {
    id: 165,
    name: "The University of Notre Dame Australia",
    website: "http://www.notredame.edu.au/",
    email: "fremantle.reception@nd.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_94936.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Mouat St",
    state: "Western Australia",
    city: "Fremantle",
    zip_code: "6160",
    currency_code: "AUD"
  },
  {
    id: 166,
    name: "The University of Queensland",
    website: "http://www.hass.uq.edu.au/",
    email: "help@its.uq.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_243617.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "342 Carmody Rd",
    state: "Queensland",
    city: "St Lucia",
    zip_code: "4067",
    currency_code: "AUD"
  },
  {
    id: 167,
    name: "The University of Sydney",
    website:
      "https://sydney.edu.au/study/admissions/why-study-in-australia/contact-our-regional-experts.html",
    email: "campus.assist@sydney.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254386.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 3, Jane Foss Russell Building ",
    state: "New South Wales",
    city: "Darlington ",
    zip_code: "",
    currency_code: "AUD"
  },
  {
    id: 168,
    name: "The University of Western Australia (UWA)",
    website: "https://study.uwa.edu.au/",
    email: "international@uwa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254387.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "35 Stirling Highway ",
    state: "Western Australia",
    city: "Perth",
    zip_code: "6009",
    currency_code: "AUD"
  },
  {
    id: 169,
    name: "Think Education Group",
    website: "http://www.think.edu.au/",
    email: "corporate@laureate.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254498.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 24, 680 George Street ",
    state: "New South Wales",
    city: "Sydney ",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 170,
    name: "Torrens University Australia",
    website: "http://www.torrens.edu.au/",
    email: "industry@tua.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254388.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "88 Wakefield St",
    state: "South Australia",
    city: "Adelaide ",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 171,
    name: "Trinity College - The University of Melbourne",
    website:
      "http://www.trinity.unimelb.edu.au/learning/foundation-studies.html",
    email: "enquiries@trinity.unimelb.edu.au ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_283086.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "100 Royal Parade",
    state: "Victoria",
    city: " Parkville",
    zip_code: "3052",
    currency_code: "AUD"
  },
  {
    id: 172,
    name: "University of Canberra",
    website: "http://www.canberra.edu.au/int-future-students",
    email: "study@canberra.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_281966.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Building 1/11 Kirinari St",
    state: " Australian Capital Territory",
    city: "Bruce",
    zip_code: "2617",
    currency_code: "AUD"
  },
  {
    id: 173,
    name: "University of Canberra College",
    website: "http://www.canberra.edu.au/uc-college",
    email: "student.centre@canberra.edu.au ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254478.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Building level B 2617/5 University Ave",
    state: " Australian Capital Territory",
    city: "Canberra",
    zip_code: "2601",
    currency_code: "AUD"
  },
  {
    id: 174,
    name: "University of Melbourne",
    website: "https://www.unimelb.edu.au/",
    email: "news@media.unimelb.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_198185.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Grattan Street",
    state: "Victoria",
    city: "Parkville",
    zip_code: "3010",
    currency_code: "AUD"
  },
  {
    id: 175,
    name: "University of New England (UNE)",
    website: "http://www.une.edu.au/study/international",
    email: "servicedesk@une.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_281710.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "",
    state: "New South Wales",
    city: "Armidale ",
    zip_code: "2351",
    currency_code: "AUD"
  },
  {
    id: 176,
    name: "University of New South Wales - UNSW",
    website: "http://www.international.unsw.edu.au",
    email: "info@unsw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254384.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2052",
    currency_code: "AUD"
  },
  {
    id: 177,
    name: "University of Newcastle",
    website: "https://www.newcastle.edu.au/",
    email: "enquirycentre@newcastle.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_146506.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Cnr King and Auckland Streets",
    state: "New South Wales",
    city: "Newcastle ",
    zip_code: "2300",
    currency_code: "AUD"
  },
  {
    id: 178,
    name:
      "University of Queensland Foundation Year (International Education Services)",
    website: "https://economics.uq.edu.au/foundation-year",
    email: "s.abdullah@uq.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253616.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "",
    state: "Queensland",
    city: "St Lucia",
    zip_code: "4072",
    currency_code: "AUD"
  },
  {
    id: 179,
    name: "University of South Australia",
    website: "http://www.unisa.edu.au/international",
    email: "ask@campuscentral.unisa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_224502.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "101 Currie St",
    state: "",
    city: "Adelaide ",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 180,
    name: "University of Southern Queensland (USQ)",
    website: "http://www.usq.edu.au/international",
    email: "study@usq.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_274271.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "487-535 West Street ",
    state: "Queensland",
    city: "Toowoomba ",
    zip_code: "4350",
    currency_code: "AUD"
  },
  {
    id: 181,
    name: "University of Tasmania (UTAS)",
    website: "http://utas.edu.au/international",
    email: "Course.Info@utas.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_284966.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Churchill Avenue ",
    state: "Tasmania ",
    city: "Sandy Bay ",
    zip_code: "7005",
    currency_code: "AUD"
  },
  {
    id: 182,
    name: "University of Technology Sydney - UTS",
    website: "http://www.international.uts.edu.au",
    email: "international@uts.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254399.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "15 Broadway ",
    state: "New South Wales",
    city: "Ultimo ",
    zip_code: "2007",
    currency_code: "AUD"
  },
  {
    id: 183,
    name: "University of the Sunshine Coast",
    website: "https://www.usc.edu.au/",
    email: "itservicedesk@usc.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254412.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "90 Sippy Downs Dr",
    state: "Queensland",
    city: "Sippy Downs ",
    zip_code: "4556",
    currency_code: "AUD"
  },
  {
    id: 184,
    name: "University of Wollongong",
    website: "https://www.uow.edu.au/future/index.html",
    email: "kearp@uow.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_266117.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Northfields Ave ",
    state: "New South Wales",
    city: "Wollongong ",
    zip_code: "2522",
    currency_code: "AUD"
  },
  {
    id: 185,
    name: "UNSW Foundation Studies",
    website: "https://www.unswglobal.unsw.edu.au/",
    email: "marketing@unswglobal.unsw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254392.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "12-22 Rothschild Avenue",
    state: "New South Wales",
    city: "Rosebery ",
    zip_code: "2018",
    currency_code: "AUD"
  },
  {
    id: 186,
    name: "UNSW Institute of Languages",
    website: "https://www.languages.unsw.edu.au/",
    email: "Enquiries@unswglobal.unsw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254393.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "223 Anzac Parade",
    state: "New South Wales",
    city: "Kensington ",
    zip_code: "2033",
    currency_code: "AUD"
  },
  {
    id: 187,
    name: "UOW College",
    website: "https://www.uowcollege.edu.au/index.html",
    email: "futurestudents@uow.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_281786.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Northfields Avenue",
    state: "New South Wales",
    city: "Gwynneville ",
    zip_code: "2522",
    currency_code: "AUD"
  },
  {
    id: 188,
    name: "USQ - Sydney Education Centre",
    website: "http://www.usqsydney.nsw.edu.au/",
    email: "info@usqsydney.nsw.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254394.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "29-35 Bellevue Street ",
    state: "New South Wales",
    city: "Surry Hills",
    zip_code: "2010",
    currency_code: "AUD"
  },
  {
    id: 189,
    name: "UTS: INSEARCH",
    website: "https://www.insearch.edu.au/",
    email: "info@insearch.com.cn",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_253615.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: " 187 Thomas Street ",
    state: "New South Wales",
    city: "Haymarket",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 190,
    name: "Victoria University",
    website: "https://www.vu.edu.au/study-at-vu/international-students",
    email: "social.media@vu.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254402.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Ballarat Rd",
    state: "Victoria",
    city: "Footscray  ",
    zip_code: "3011",
    currency_code: "AUD"
  },
  {
    id: 191,
    name: "Victorian Institute of Technology",
    website: "https://www.vit.edu.au/",
    email: "support@vit.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_171934.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 14, 123 Queen Street",
    state: " Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 192,
    name: "West Australian Institute of Further Studies",
    website: "http://waifs.wa.edu.au/",
    email: "international@waifs.wa.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_225021.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 1, 160 Central Arcade, Hay Street",
    state: "Western Australia",
    city: "Perth",
    zip_code: "6000",
    currency_code: "AUD"
  },
  {
    id: 193,
    name: "Western Institute of Technology",
    website: "http://wit.vic.edu.au/",
    email: "info@wit.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_176612.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 4-5, 220 Albert Road",
    state: "Victoria",
    city: "South Melbourne",
    zip_code: "3205",
    currency_code: "AUD"
  },
  {
    id: 194,
    name: "Western Sydney University",
    website: "http://www.westernsydney.edu.au/future.html",
    email: "study@westernsydney.edu.au ",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_285246.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "48 Martin Pl",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 195,
    name: "William Angliss Institute",
    website: "https://www.angliss.edu.au/",
    email: "enquiry@angliss.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_254484.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "555 La Trobe Street",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 196,
    name: "Windsor College",
    website: "https://www.windsorcollege.edu.au/",
    email: "info@windsorcollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248486.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Lv 5, 123 Lonsdale St ",
    state: "Victoria",
    city: "Melbourne ",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 256,
    name: "Baxter Institute",
    website: "https://www.baxter.vic.edu.au/campuses/",
    email: "info@baxter.vic.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/logo11.png",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "Level 2, 399 Lonsdale St",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 257,
    name: "Cambridge International College",
    website: "https://vet.cambridgecollege.com.au",
    email: "info@cambridgecollege.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/CIC-logo.png",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "108 Lonsdale St",
    state: "Victoria",
    city: "Melbourne",
    zip_code: "3000",
    currency_code: "AUD"
  },
  {
    id: 258,
    name: "Carnegie Mellon University",
    website: "https://www.australia.cmu.edu",
    email: "info@australia.cmu.edu",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/logo-long.svg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "220 Victoria Square",
    state: "South Australia",
    city: "Adelaide",
    zip_code: "5000",
    currency_code: "AUD"
  },
  {
    id: 259,
    name: "Harvest Bible College",
    website: "http://www.harvest.edu.au/",
    email: "studentsupport@ac.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/180px-Harvest_Bible_College_logo.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "1 Keith Campbell Ct",
    state: "Victoria",
    city: "",
    zip_code: "3179",
    currency_code: "AUD"
  },
  {
    id: 260,
    name: "Hills Academic Centre",
    website: "http://www.hiie.edu.au",
    email: "enquiries@hiie.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/myhc_248457.jpg",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "3 Zamia Street",
    state: "Queensland",
    city: "Sunnybank",
    zip_code: "4109",
    currency_code: "AUD"
  },
  {
    id: 261,
    name: "ILSC - Australia",
    website: "https://www.ilsc.com",
    email: "info@ilsc.com.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/logo.png",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "540 George Street, Level 6 & 7",
    state: "New South Wales",
    city: "Sydney",
    zip_code: "2000",
    currency_code: "AUD"
  },
  {
    id: 262,
    name: "Taylors College",
    website: "http://www.taylorscollege.edu.au",
    email: "info@taylorscollege.edu.au",
    logo:
      "https://agentcisapp.s3.ap-southeast-2.amazonaws.com/import/partner/logo/logo.ashx",
    country: {
      id: 11,
      name: "Australia",
      currency_code: "AUD",
      currency_name: "Australian dollar"
    },
    street: "965 Bourke St",
    state: "New South Wales",
    city: "Waterloo",
    zip_code: "2017",
    currency_code: "AUD"
  }
];

export default partners;
