const countries = [
  {
    id: 1,
    country_name: "Afghanistan",
    currency_name: "afghani",
    currency_code: "AFN",
    value: "Afghanistan - AFN [afghani]"
  },
  {
    id: 74,
    country_name: "Åland Islands",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Åland Islands - EUR [euro]"
  },
  {
    id: 2,
    country_name: "Albania",
    currency_name: "lek",
    currency_code: "ALL",
    value: "Albania - ALL [lek]"
  },
  {
    id: 4,
    country_name: "Algeria",
    currency_name: "Algerian dinar",
    currency_code: "DZD",
    value: "Algeria - DZD [Algerian dinar]"
  },
  {
    id: 5,
    country_name: "American Samoa",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "American Samoa - USD [US dollar]"
  },
  {
    id: 6,
    country_name: "Andorra",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Andorra - EUR [euro]"
  },
  {
    id: 7,
    country_name: "Angola",
    currency_name: "kwanza",
    currency_code: "AOA",
    value: "Angola - AOA [kwanza]"
  },
  {
    id: 190,
    country_name: "Anguilla",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Anguilla - XCD [East Caribbean dollar]"
  },
  {
    id: 8,
    country_name: "Antigua and Barbuda",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Antigua and Barbuda - XCD [East Caribbean dollar]"
  },
  {
    id: 10,
    country_name: "Argentina",
    currency_name: "Argentine peso",
    currency_code: "ARS",
    value: "Argentina - ARS [Argentine peso]"
  },
  {
    id: 16,
    country_name: "Armenia",
    currency_name: "dram (inv.)",
    currency_code: "AMD",
    value: "Armenia - AMD [dram (inv.)]"
  },
  {
    id: 153,
    country_name: "Aruba",
    currency_name: "Aruban guilder",
    currency_code: "AWG",
    value: "Aruba - AWG [Aruban guilder]"
  },
  {
    id: 11,
    country_name: "Australia",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Australia - AUD [Australian dollar]"
  },
  {
    id: 12,
    country_name: "Austria",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Austria - EUR [euro]"
  },
  {
    id: 9,
    country_name: "Azerbaijan",
    currency_name: "Azerbaijani manat",
    currency_code: "AZN",
    value: "Azerbaijan - AZN [Azerbaijani manat]"
  },
  {
    id: 13,
    country_name: "Bahamas",
    currency_name: "Bahamian dollar",
    currency_code: "BSD",
    value: "Bahamas - BSD [Bahamian dollar]"
  },
  {
    id: 14,
    country_name: "Bahrain",
    currency_name: "Bahraini dinar",
    currency_code: "BHD",
    value: "Bahrain - BHD [Bahraini dinar]"
  },
  {
    id: 15,
    country_name: "Bangladesh",
    currency_name: "taka (inv.)",
    currency_code: "BDT",
    value: "Bangladesh - BDT [taka (inv.)]"
  },
  {
    id: 17,
    country_name: "Barbados",
    currency_name: "Barbados dollar",
    currency_code: "BBD",
    value: "Barbados - BBD [Barbados dollar]"
  },
  {
    id: 34,
    country_name: "Belarus",
    currency_name: "Belarusian rouble",
    currency_code: "BYR",
    value: "Belarus - BYR [Belarusian rouble]"
  },
  {
    id: 18,
    country_name: "Belgium",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Belgium - EUR [euro]"
  },
  {
    id: 26,
    country_name: "Belize",
    currency_name: "Belize dollar",
    currency_code: "BZD",
    value: "Belize - BZD [Belize dollar]"
  },
  {
    id: 59,
    country_name: "Benin",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Benin - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 19,
    country_name: "Bermuda",
    currency_name: "Bermuda dollar",
    currency_code: "BMD",
    value: "Bermuda - BMD [Bermuda dollar]"
  },
  {
    id: 20,
    country_name: "Bhutan",
    currency_name: "ngultrum (inv.)",
    currency_code: "BTN",
    value: "Bhutan - BTN [ngultrum (inv.)]"
  },
  {
    id: 21,
    country_name: "Bolivia, Plurinational State of",
    currency_name: "boliviano",
    currency_code: "BOB",
    value: "Bolivia, Plurinational State of - BOB [boliviano]"
  },
  {
    id: 155,
    country_name: "Bonaire, Sint Eustatius and Saba",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Bonaire, Sint Eustatius and Saba - USD [US dollar]"
  },
  {
    id: 22,
    country_name: "Bosnia and Herzegovina",
    currency_name: "convertible mark",
    currency_code: "BAM",
    value: "Bosnia and Herzegovina - BAM [convertible mark]"
  },
  {
    id: 23,
    country_name: "Botswana",
    currency_name: "pula (inv.)",
    currency_code: "BWP",
    value: "Botswana - BWP [pula (inv.)]"
  },
  {
    id: 25,
    country_name: "Brazil",
    currency_name: "real (pl. reais)",
    currency_code: "BRL",
    value: "Brazil - BRL [real (pl. reais)]"
  },
  {
    id: 27,
    country_name: "British Indian Ocean Territory",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "British Indian Ocean Territory - USD [US dollar]"
  },
  {
    id: 30,
    country_name: "Brunei Darussalam",
    currency_name: "Brunei dollar",
    currency_code: "BND",
    value: "Brunei Darussalam - BND [Brunei dollar]"
  },
  {
    id: 31,
    country_name: "Bulgaria",
    currency_name: "lev (pl. leva)",
    currency_code: "BGN",
    value: "Bulgaria - BGN [lev (pl. leva)]"
  },
  {
    id: 242,
    country_name: "Burkina Faso",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Burkina Faso - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 33,
    country_name: "Burundi",
    currency_name: "Burundi franc",
    currency_code: "BIF",
    value: "Burundi - BIF [Burundi franc]"
  },
  {
    id: 35,
    country_name: "Cambodia",
    currency_name: "riel",
    currency_code: "KHR",
    value: "Cambodia - KHR [riel]"
  },
  {
    id: 36,
    country_name: "Cameroon",
    currency_name: "CFA franc (BEAC)",
    currency_code: "XAF",
    value: "Cameroon - XAF [CFA franc (BEAC)]"
  },
  {
    id: 37,
    country_name: "Canada",
    currency_name: "Canadian dollar",
    currency_code: "CAD",
    value: "Canada - CAD [Canadian dollar]"
  },
  {
    id: 38,
    country_name: "Cape Verde",
    currency_name: "Cape Verde escudo",
    currency_code: "CVE",
    value: "Cape Verde - CVE [Cape Verde escudo]"
  },
  {
    id: 39,
    country_name: "Cayman Islands",
    currency_name: "Cayman Islands dollar",
    currency_code: "KYD",
    value: "Cayman Islands - KYD [Cayman Islands dollar]"
  },
  {
    id: 40,
    country_name: "Central African Republic",
    currency_name: "CFA franc (BEAC)",
    currency_code: "XAF",
    value: "Central African Republic - XAF [CFA franc (BEAC)]"
  },
  {
    id: 42,
    country_name: "Chad",
    currency_name: "CFA franc (BEAC)",
    currency_code: "XAF",
    value: "Chad - XAF [CFA franc (BEAC)]"
  },
  {
    id: 43,
    country_name: "Chile",
    currency_name: "Chilean peso",
    currency_code: "CLP",
    value: "Chile - CLP [Chilean peso]"
  },
  {
    id: 44,
    country_name: "China",
    currency_name: "renminbi-yuan (inv.)",
    currency_code: "CNY",
    value: "China - CNY [renminbi-yuan (inv.)]"
  },
  {
    id: 46,
    country_name: "Christmas Island",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Christmas Island - AUD [Australian dollar]"
  },
  {
    id: 47,
    country_name: "Cocos (Keeling) Islands",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Cocos (Keeling) Islands - AUD [Australian dollar]"
  },
  {
    id: 48,
    country_name: "Colombia",
    currency_name: "Colombian peso",
    currency_code: "COP",
    value: "Colombia - COP [Colombian peso]"
  },
  {
    id: 49,
    country_name: "Comoros",
    currency_name: "Comorian franc",
    currency_code: "KMF",
    value: "Comoros - KMF [Comorian franc]"
  },
  {
    id: 51,
    country_name: "Congo",
    currency_name: "CFA franc (BEAC)",
    currency_code: "XAF",
    value: "Congo - XAF [CFA franc (BEAC)]"
  },
  {
    id: 52,
    country_name: "Congo, the Democratic Republic of the",
    currency_name: "Congolese franc",
    currency_code: "CDF",
    value: "Congo, the Democratic Republic of the - CDF [Congolese franc]"
  },
  {
    id: 53,
    country_name: "Cook Islands",
    currency_name: "New Zealand dollar",
    currency_code: "NZD",
    value: "Cook Islands - NZD [New Zealand dollar]"
  },
  {
    id: 54,
    country_name: "Costa Rica",
    currency_name: "Costa Rican colón (pl. colones)",
    currency_code: "CRC",
    value: "Costa Rica - CRC [Costa Rican colón (pl. colones)]"
  },
  {
    id: 110,
    country_name: "Côte d'Ivoire",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Côte d'Ivoire - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 55,
    country_name: "Croatia",
    currency_name: "kuna (inv.)",
    currency_code: "HRK",
    value: "Croatia - HRK [kuna (inv.)]"
  },
  {
    id: 56,
    country_name: "Cuba",
    currency_name: "Cuban peso",
    currency_code: "CUP",
    value: "Cuba - CUP [Cuban peso]"
  },
  {
    id: 152,
    country_name: "Curaçao",
    currency_name: "Netherlands Antillean guilder (CW1)",
    currency_code: "ANG",
    value: "Curaçao - ANG [Netherlands Antillean guilder (CW1)]"
  },
  {
    id: 57,
    country_name: "Cyprus",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Cyprus - EUR [euro]"
  },
  {
    id: 58,
    country_name: "Czech Republic",
    currency_name: "Czech koruna (pl. koruny)",
    currency_code: "CZK",
    value: "Czech Republic - CZK [Czech koruna (pl. koruny)]"
  },
  {
    id: 60,
    country_name: "Denmark",
    currency_name: "Danish krone",
    currency_code: "DKK",
    value: "Denmark - DKK [Danish krone]"
  },
  {
    id: 79,
    country_name: "Djibouti",
    currency_name: "Djibouti franc",
    currency_code: "DJF",
    value: "Djibouti - DJF [Djibouti franc]"
  },
  {
    id: 61,
    country_name: "Dominica",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Dominica - XCD [East Caribbean dollar]"
  },
  {
    id: 62,
    country_name: "Dominican Republic",
    currency_name: "Dominican peso",
    currency_code: "DOP",
    value: "Dominican Republic - DOP [Dominican peso]"
  },
  {
    id: 63,
    country_name: "Ecuador",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Ecuador - USD [US dollar]"
  },
  {
    id: 234,
    country_name: "Egypt",
    currency_name: "Egyptian pound",
    currency_code: "EGP",
    value: "Egypt - EGP [Egyptian pound]"
  },
  {
    id: 64,
    country_name: "El Salvador",
    currency_name: "Salvadorian colón (pl. colones)",
    currency_code: "SVC",
    value: "El Salvador - SVC [Salvadorian colón (pl. colones)]"
  },
  {
    id: 65,
    country_name: "Equatorial Guinea",
    currency_name: "CFA franc (BEAC)",
    currency_code: "XAF",
    value: "Equatorial Guinea - XAF [CFA franc (BEAC)]"
  },
  {
    id: 67,
    country_name: "Eritrea",
    currency_name: "nakfa",
    currency_code: "ERN",
    value: "Eritrea - ERN [nakfa]"
  },
  {
    id: 68,
    country_name: "Estonia",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Estonia - EUR [euro]"
  },
  {
    id: 66,
    country_name: "Ethiopia",
    currency_name: "birr (inv.)",
    currency_code: "ETB",
    value: "Ethiopia - ETB [birr (inv.)]"
  },
  {
    id: 70,
    country_name: "Falkland Islands (Malvinas)",
    currency_name: "Falkland Islands pound",
    currency_code: "FKP",
    value: "Falkland Islands (Malvinas) - FKP [Falkland Islands pound]"
  },
  {
    id: 69,
    country_name: "Faroe Islands",
    currency_name: "Danish krone",
    currency_code: "DKK",
    value: "Faroe Islands - DKK [Danish krone]"
  },
  {
    id: 72,
    country_name: "Fiji",
    currency_name: "Fiji dollar",
    currency_code: "FJD",
    value: "Fiji - FJD [Fiji dollar]"
  },
  {
    id: 73,
    country_name: "Finland",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Finland - EUR [euro]"
  },
  {
    id: 75,
    country_name: "France",
    currency_name: "euro",
    currency_code: "EUR",
    value: "France - EUR [euro]"
  },
  {
    id: 76,
    country_name: "French Guiana",
    currency_name: "euro",
    currency_code: "EUR",
    value: "French Guiana - EUR [euro]"
  },
  {
    id: 77,
    country_name: "French Polynesia",
    currency_name: "CFP franc",
    currency_code: "XPF",
    value: "French Polynesia - XPF [CFP franc]"
  },
  {
    id: 78,
    country_name: "French Southern Territories",
    currency_name: "euro",
    currency_code: "EUR",
    value: "French Southern Territories - EUR [euro]"
  },
  {
    id: 80,
    country_name: "Gabon",
    currency_name: "CFA franc (BEAC)",
    currency_code: "XAF",
    value: "Gabon - XAF [CFA franc (BEAC)]"
  },
  {
    id: 82,
    country_name: "Gambia",
    currency_name: "dalasi (inv.)",
    currency_code: "GMD",
    value: "Gambia - GMD [dalasi (inv.)]"
  },
  {
    id: 81,
    country_name: "Georgia",
    currency_name: "lari",
    currency_code: "GEL",
    value: "Georgia - GEL [lari]"
  },
  {
    id: 84,
    country_name: "Germany",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Germany - EUR [euro]"
  },
  {
    id: 85,
    country_name: "Ghana",
    currency_name: "Ghana cedi",
    currency_code: "GHS",
    value: "Ghana - GHS [Ghana cedi]"
  },
  {
    id: 86,
    country_name: "Gibraltar",
    currency_name: "Gibraltar pound",
    currency_code: "GIP",
    value: "Gibraltar - GIP [Gibraltar pound]"
  },
  {
    id: 88,
    country_name: "Greece",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Greece - EUR [euro]"
  },
  {
    id: 89,
    country_name: "Greenland",
    currency_name: "Danish krone",
    currency_code: "DKK",
    value: "Greenland - DKK [Danish krone]"
  },
  {
    id: 90,
    country_name: "Grenada",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Grenada - XCD [East Caribbean dollar]"
  },
  {
    id: 91,
    country_name: "Guadeloupe",
    currency_name: "euro",
    currency_code: "EUR ",
    value: "Guadeloupe - EUR  [euro]"
  },
  {
    id: 92,
    country_name: "Guam",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Guam - USD [US dollar]"
  },
  {
    id: 93,
    country_name: "Guatemala",
    currency_name: "quetzal (pl. quetzales)",
    currency_code: "GTQ",
    value: "Guatemala - GTQ [quetzal (pl. quetzales)]"
  },
  {
    id: 236,
    country_name: "Guernsey",
    currency_name: "Guernsey pound (GG2)",
    currency_code: "GGP (GG2)",
    value: "Guernsey - GGP (GG2) [Guernsey pound (GG2)]"
  },
  {
    id: 94,
    country_name: "Guinea",
    currency_name: "Guinean franc",
    currency_code: "GNF",
    value: "Guinea - GNF [Guinean franc]"
  },
  {
    id: 179,
    country_name: "Guinea-Bissau",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Guinea-Bissau - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 95,
    country_name: "Guyana",
    currency_name: "Guyana dollar",
    currency_code: "GYD",
    value: "Guyana - GYD [Guyana dollar]"
  },
  {
    id: 96,
    country_name: "Haiti",
    currency_name: "gourde",
    currency_code: "HTG",
    value: "Haiti - HTG [gourde]"
  },
  {
    id: 98,
    country_name: "Holy See (Vatican City State)",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Holy See (Vatican City State) - EUR [euro]"
  },
  {
    id: 99,
    country_name: "Honduras",
    currency_name: "lempira",
    currency_code: "HNL",
    value: "Honduras - HNL [lempira]"
  },
  {
    id: 100,
    country_name: "Hong Kong",
    currency_name: "Hong Kong dollar",
    currency_code: "HKD",
    value: "Hong Kong - HKD [Hong Kong dollar]"
  },
  {
    id: 101,
    country_name: "Hungary",
    currency_name: "forint (inv.)",
    currency_code: "HUF",
    value: "Hungary - HUF [forint (inv.)]"
  },
  {
    id: 102,
    country_name: "Iceland",
    currency_name: "króna (pl. krónur)",
    currency_code: "ISK",
    value: "Iceland - ISK [króna (pl. krónur)]"
  },
  {
    id: 103,
    country_name: "India",
    currency_name: "Indian rupee",
    currency_code: "INR",
    value: "India - INR [Indian rupee]"
  },
  {
    id: 104,
    country_name: "Indonesia",
    currency_name: "Indonesian rupiah (inv.)",
    currency_code: "IDR",
    value: "Indonesia - IDR [Indonesian rupiah (inv.)]"
  },
  {
    id: 105,
    country_name: "Iran, Islamic Republic of",
    currency_name: "Iranian rial",
    currency_code: "IRR",
    value: "Iran, Islamic Republic of - IRR [Iranian rial]"
  },
  {
    id: 106,
    country_name: "Iraq",
    currency_name: "Iraqi dinar",
    currency_code: "IQD",
    value: "Iraq - IQD [Iraqi dinar]"
  },
  {
    id: 107,
    country_name: "Ireland",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Ireland - EUR [euro]"
  },
  {
    id: 238,
    country_name: "Isle of Man",
    currency_name: "Manx pound (IM2)",
    currency_code: "IMP (IM2)",
    value: "Isle of Man - IMP (IM2) [Manx pound (IM2)]"
  },
  {
    id: 108,
    country_name: "Israel",
    currency_name: "shekel",
    currency_code: "ILS",
    value: "Israel - ILS [shekel]"
  },
  {
    id: 109,
    country_name: "Italy",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Italy - EUR [euro]"
  },
  {
    id: 111,
    country_name: "Jamaica",
    currency_name: "Jamaica dollar",
    currency_code: "JMD",
    value: "Jamaica - JMD [Jamaica dollar]"
  },
  {
    id: 112,
    country_name: "Japan",
    currency_name: "yen (inv.)",
    currency_code: "JPY",
    value: "Japan - JPY [yen (inv.)]"
  },
  {
    id: 237,
    country_name: "Jersey",
    currency_name: "Jersey pound (JE2)",
    currency_code: "JEP (JE2)",
    value: "Jersey - JEP (JE2) [Jersey pound (JE2)]"
  },
  {
    id: 114,
    country_name: "Jordan",
    currency_name: "Jordanian dinar",
    currency_code: "JOD",
    value: "Jordan - JOD [Jordanian dinar]"
  },
  {
    id: 113,
    country_name: "Kazakhstan",
    currency_name: "tenge (inv.)",
    currency_code: "KZT",
    value: "Kazakhstan - KZT [tenge (inv.)]"
  },
  {
    id: 115,
    country_name: "Kenya",
    currency_name: "Kenyan shilling",
    currency_code: "KES",
    value: "Kenya - KES [Kenyan shilling]"
  },
  {
    id: 87,
    country_name: "Kiribati",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Kiribati - AUD [Australian dollar]"
  },
  {
    id: 116,
    country_name: "Korea, Democratic People's Republic of",
    currency_name: "North Korean won (inv.)",
    currency_code: "KPW",
    value:
      "Korea, Democratic People's Republic of - KPW [North Korean won (inv.)]"
  },
  {
    id: 117,
    country_name: "Korea, Republic of",
    currency_name: "South Korean won (inv.)",
    currency_code: "KRW",
    value: "Korea, Republic of - KRW [South Korean won (inv.)]"
  },
  {
    id: 118,
    country_name: "Kuwait",
    currency_name: "Kuwaiti dinar",
    currency_code: "KWD",
    value: "Kuwait - KWD [Kuwaiti dinar]"
  },
  {
    id: 119,
    country_name: "Kyrgyzstan",
    currency_name: "som",
    currency_code: "KGS",
    value: "Kyrgyzstan - KGS [som]"
  },
  {
    id: 120,
    country_name: "Lao People's Democratic Republic",
    currency_name: "kip (inv.)",
    currency_code: "LAK",
    value: "Lao People's Democratic Republic - LAK [kip (inv.)]"
  },
  {
    id: 123,
    country_name: "Latvia",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Latvia - EUR [euro]"
  },
  {
    id: 121,
    country_name: "Lebanon",
    currency_name: "Lebanese pound",
    currency_code: "LBP",
    value: "Lebanon - LBP [Lebanese pound]"
  },
  {
    id: 122,
    country_name: "Lesotho",
    currency_name: "loti (pl. maloti)",
    currency_code: "LSL",
    value: "Lesotho - LSL [loti (pl. maloti)]"
  },
  {
    id: 124,
    country_name: "Liberia",
    currency_name: "Liberian dollar",
    currency_code: "LRD",
    value: "Liberia - LRD [Liberian dollar]"
  },
  {
    id: 125,
    country_name: "Libya",
    currency_name: "Libyan dinar",
    currency_code: "LYD",
    value: "Libya - LYD [Libyan dinar]"
  },
  {
    id: 126,
    country_name: "Liechtenstein",
    currency_name: "Swiss franc",
    currency_code: "CHF",
    value: "Liechtenstein - CHF [Swiss franc]"
  },
  {
    id: 127,
    country_name: "Lithuania",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Lithuania - EUR [euro]"
  },
  {
    id: 128,
    country_name: "Luxembourg",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Luxembourg - EUR [euro]"
  },
  {
    id: 129,
    country_name: "Macao",
    currency_name: "pataca",
    currency_code: "MOP",
    value: "Macao - MOP [pataca]"
  },
  {
    id: 233,
    country_name: "Macedonia, the former Yugoslav Republic of",
    currency_name: "denar (pl. denars)",
    currency_code: "MKD",
    value:
      "Macedonia, the former Yugoslav Republic of - MKD [denar (pl. denars)]"
  },
  {
    id: 130,
    country_name: "Madagascar",
    currency_name: "ariary",
    currency_code: "MGA",
    value: "Madagascar - MGA [ariary]"
  },
  {
    id: 131,
    country_name: "Malawi",
    currency_name: "Malawian kwacha (inv.)",
    currency_code: "MWK",
    value: "Malawi - MWK [Malawian kwacha (inv.)]"
  },
  {
    id: 132,
    country_name: "Malaysia",
    currency_name: "ringgit (inv.)",
    currency_code: "MYR",
    value: "Malaysia - MYR [ringgit (inv.)]"
  },
  {
    id: 133,
    country_name: "Maldives",
    currency_name: "rufiyaa",
    currency_code: "MVR",
    value: "Maldives - MVR [rufiyaa]"
  },
  {
    id: 134,
    country_name: "Mali",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Mali - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 135,
    country_name: "Malta",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Malta - EUR [euro]"
  },
  {
    id: 168,
    country_name: "Marshall Islands",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Marshall Islands - USD [US dollar]"
  },
  {
    id: 136,
    country_name: "Martinique",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Martinique - EUR [euro]"
  },
  {
    id: 137,
    country_name: "Mauritania",
    currency_name: "ouguiya",
    currency_code: "MRO",
    value: "Mauritania - MRO [ouguiya]"
  },
  {
    id: 138,
    country_name: "Mauritius",
    currency_name: "Mauritian rupee",
    currency_code: "MUR",
    value: "Mauritius - MUR [Mauritian rupee]"
  },
  {
    id: 50,
    country_name: "Mayotte",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Mayotte - EUR [euro]"
  },
  {
    id: 139,
    country_name: "Mexico",
    currency_name: "Mexican peso",
    currency_code: "MXN",
    value: "Mexico - MXN [Mexican peso]"
  },
  {
    id: 167,
    country_name: "Micronesia, Federated States of",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Micronesia, Federated States of - USD [US dollar]"
  },
  {
    id: 142,
    country_name: "Moldova, Republic of",
    currency_name: "Moldovan leu (pl. lei)",
    currency_code: "MDL",
    value: "Moldova, Republic of - MDL [Moldovan leu (pl. lei)]"
  },
  {
    id: 140,
    country_name: "Monaco",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Monaco - EUR [euro]"
  },
  {
    id: 141,
    country_name: "Mongolia",
    currency_name: "tugrik",
    currency_code: "MNT",
    value: "Mongolia - MNT [tugrik]"
  },
  {
    id: 143,
    country_name: "Montenegro",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Montenegro - EUR [euro]"
  },
  {
    id: 144,
    country_name: "Montserrat",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Montserrat - XCD [East Caribbean dollar]"
  },
  {
    id: 145,
    country_name: "Morocco",
    currency_name: "Moroccan dirham",
    currency_code: "MAD",
    value: "Morocco - MAD [Moroccan dirham]"
  },
  {
    id: 146,
    country_name: "Mozambique",
    currency_name: "metical",
    currency_code: "MZN",
    value: "Mozambique - MZN [metical]"
  },
  {
    id: 32,
    country_name: "Myanmar",
    currency_name: "kyat",
    currency_code: "MMK",
    value: "Myanmar - MMK [kyat]"
  },
  {
    id: 148,
    country_name: "Namibia",
    currency_name: "Namibian dollar",
    currency_code: "NAD",
    value: "Namibia - NAD [Namibian dollar]"
  },
  {
    id: 149,
    country_name: "Nauru",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Nauru - AUD [Australian dollar]"
  },
  {
    id: 150,
    country_name: "Nepal",
    currency_name: "Nepalese rupee",
    currency_code: "NPR",
    value: "Nepal - NPR [Nepalese rupee]"
  },
  {
    id: 151,
    country_name: "Netherlands",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Netherlands - EUR [euro]"
  },
  {
    id: 156,
    country_name: "New Caledonia",
    currency_name: "CFP franc",
    currency_code: "XPF",
    value: "New Caledonia - XPF [CFP franc]"
  },
  {
    id: 158,
    country_name: "New Zealand",
    currency_name: "New Zealand dollar",
    currency_code: "NZD",
    value: "New Zealand - NZD [New Zealand dollar]"
  },
  {
    id: 159,
    country_name: "Nicaragua",
    currency_name: "córdoba oro",
    currency_code: "NIO",
    value: "Nicaragua - NIO [córdoba oro]"
  },
  {
    id: 160,
    country_name: "Niger",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Niger - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 161,
    country_name: "Nigeria",
    currency_name: "naira (inv.)",
    currency_code: "NGN",
    value: "Nigeria - NGN [naira (inv.)]"
  },
  {
    id: 162,
    country_name: "Niue",
    currency_name: "New Zealand dollar",
    currency_code: "NZD",
    value: "Niue - NZD [New Zealand dollar]"
  },
  {
    id: 163,
    country_name: "Norfolk Island",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Norfolk Island - AUD [Australian dollar]"
  },
  {
    id: 165,
    country_name: "Northern Mariana Islands",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Northern Mariana Islands - USD [US dollar]"
  },
  {
    id: 164,
    country_name: "Norway",
    currency_name: "Norwegian krone (pl. kroner)",
    currency_code: "NOK",
    value: "Norway - NOK [Norwegian krone (pl. kroner)]"
  },
  {
    id: 147,
    country_name: "Oman",
    currency_name: "Omani rial",
    currency_code: "OMR",
    value: "Oman - OMR [Omani rial]"
  },
  {
    id: 170,
    country_name: "Pakistan",
    currency_name: "Pakistani rupee",
    currency_code: "PKR",
    value: "Pakistan - PKR [Pakistani rupee]"
  },
  {
    id: 169,
    country_name: "Palau",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Palau - USD [US dollar]"
  },
  {
    id: 171,
    country_name: "Panama",
    currency_name: "balboa",
    currency_code: "PAB",
    value: "Panama - PAB [balboa]"
  },
  {
    id: 172,
    country_name: "Papua New Guinea",
    currency_name: "kina (inv.)",
    currency_code: "PGK",
    value: "Papua New Guinea - PGK [kina (inv.)]"
  },
  {
    id: 173,
    country_name: "Paraguay",
    currency_name: "guaraní",
    currency_code: "PYG",
    value: "Paraguay - PYG [guaraní]"
  },
  {
    id: 174,
    country_name: "Peru",
    currency_name: "new sol",
    currency_code: "PEN",
    value: "Peru - PEN [new sol]"
  },
  {
    id: 175,
    country_name: "Philippines",
    currency_name: "Philippine peso",
    currency_code: "PHP",
    value: "Philippines - PHP [Philippine peso]"
  },
  {
    id: 176,
    country_name: "Pitcairn",
    currency_name: "New Zealand dollar",
    currency_code: "NZD",
    value: "Pitcairn - NZD [New Zealand dollar]"
  },
  {
    id: 177,
    country_name: "Poland",
    currency_name: "zloty",
    currency_code: "PLN",
    value: "Poland - PLN [zloty]"
  },
  {
    id: 178,
    country_name: "Portugal",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Portugal - EUR [euro]"
  },
  {
    id: 181,
    country_name: "Puerto Rico",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Puerto Rico - USD [US dollar]"
  },
  {
    id: 182,
    country_name: "Qatar",
    currency_name: "Qatari riyal",
    currency_code: "QAR",
    value: "Qatar - QAR [Qatari riyal]"
  },
  {
    id: 183,
    country_name: "Réunion",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Réunion - EUR [euro]"
  },
  {
    id: 184,
    country_name: "Romania",
    currency_name: "Romanian leu (pl. lei)",
    currency_code: "RON",
    value: "Romania - RON [Romanian leu (pl. lei)]"
  },
  {
    id: 185,
    country_name: "Russian Federation",
    currency_name: "Russian rouble",
    currency_code: "RUB",
    value: "Russian Federation - RUB [Russian rouble]"
  },
  {
    id: 186,
    country_name: "Rwanda",
    currency_name: "Rwandese franc",
    currency_code: "RWF",
    value: "Rwanda - RWF [Rwandese franc]"
  },
  {
    id: 187,
    country_name: "Saint Barthélemy",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Saint Barthélemy - EUR [euro]"
  },
  {
    id: 188,
    country_name: "Saint Helena, Ascension and Tristan da Cunha",
    currency_name: "Saint Helena pound",
    currency_code: "SHP",
    value:
      "Saint Helena, Ascension and Tristan da Cunha - SHP [Saint Helena pound]"
  },
  {
    id: 189,
    country_name: "Saint Kitts and Nevis",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Saint Kitts and Nevis - XCD [East Caribbean dollar]"
  },
  {
    id: 191,
    country_name: "Saint Lucia",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Saint Lucia - XCD [East Caribbean dollar]"
  },
  {
    id: 192,
    country_name: "Saint Martin (French part)",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Saint Martin (French part) - EUR [euro]"
  },
  {
    id: 193,
    country_name: "Saint Pierre and Miquelon",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Saint Pierre and Miquelon - EUR [euro]"
  },
  {
    id: 194,
    country_name: "Saint Vincent and the Grenadines",
    currency_name: "East Caribbean dollar",
    currency_code: "XCD",
    value: "Saint Vincent and the Grenadines - XCD [East Caribbean dollar]"
  },
  {
    id: 247,
    country_name: "Samoa",
    currency_name: "tala (inv.)",
    currency_code: "WST",
    value: "Samoa - WST [tala (inv.)]"
  },
  {
    id: 195,
    country_name: "San Marino",
    currency_name: "euro",
    currency_code: "EUR ",
    value: "San Marino - EUR  [euro]"
  },
  {
    id: 196,
    country_name: "Sao Tome and Principe",
    currency_name: "dobra",
    currency_code: "STD",
    value: "Sao Tome and Principe - STD [dobra]"
  },
  {
    id: 197,
    country_name: "Saudi Arabia",
    currency_name: "riyal",
    currency_code: "SAR",
    value: "Saudi Arabia - SAR [riyal]"
  },
  {
    id: 198,
    country_name: "Senegal",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Senegal - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 199,
    country_name: "Serbia",
    currency_name: "Serbian dinar",
    currency_code: "RSD",
    value: "Serbia - RSD [Serbian dinar]"
  },
  {
    id: 200,
    country_name: "Seychelles",
    currency_name: "Seychelles rupee",
    currency_code: "SCR",
    value: "Seychelles - SCR [Seychelles rupee]"
  },
  {
    id: 201,
    country_name: "Sierra Leone",
    currency_name: "leone",
    currency_code: "SLL",
    value: "Sierra Leone - SLL [leone]"
  },
  {
    id: 202,
    country_name: "Singapore",
    currency_name: "Singapore dollar",
    currency_code: "SGD",
    value: "Singapore - SGD [Singapore dollar]"
  },
  {
    id: 154,
    country_name: "Sint Maarten (Dutch part)",
    currency_name: "Netherlands Antillean guilder (SX1)",
    currency_code: "ANG",
    value:
      "Sint Maarten (Dutch part) - ANG [Netherlands Antillean guilder (SX1)]"
  },
  {
    id: 203,
    country_name: "Slovakia",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Slovakia - EUR [euro]"
  },
  {
    id: 205,
    country_name: "Slovenia",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Slovenia - EUR [euro]"
  },
  {
    id: 28,
    country_name: "Solomon Islands",
    currency_name: "Solomon Islands dollar",
    currency_code: "SBD",
    value: "Solomon Islands - SBD [Solomon Islands dollar]"
  },
  {
    id: 206,
    country_name: "Somalia",
    currency_name: "Somali shilling",
    currency_code: "SOS",
    value: "Somalia - SOS [Somali shilling]"
  },
  {
    id: 207,
    country_name: "South Africa",
    currency_name: "rand",
    currency_code: "ZAR",
    value: "South Africa - ZAR [rand]"
  },
  {
    id: 210,
    country_name: "South Sudan",
    currency_name: "South Sudanese pound",
    currency_code: "SSP",
    value: "South Sudan - SSP [South Sudanese pound]"
  },
  {
    id: 209,
    country_name: "Spain",
    currency_name: "euro",
    currency_code: "EUR",
    value: "Spain - EUR [euro]"
  },
  {
    id: 41,
    country_name: "Sri Lanka",
    currency_name: "Sri Lankan rupee",
    currency_code: "LKR",
    value: "Sri Lanka - LKR [Sri Lankan rupee]"
  },
  {
    id: 211,
    country_name: "Sudan",
    currency_name: "Sudanese pound",
    currency_code: "SDG",
    value: "Sudan - SDG [Sudanese pound]"
  },
  {
    id: 213,
    country_name: "Suriname",
    currency_name: "Surinamese dollar",
    currency_code: "SRD",
    value: "Suriname - SRD [Surinamese dollar]"
  },
  {
    id: 214,
    country_name: "Svalbard and Jan Mayen",
    currency_name: "Norwegian krone (pl. kroner)",
    currency_code: "NOK",
    value: "Svalbard and Jan Mayen - NOK [Norwegian krone (pl. kroner)]"
  },
  {
    id: 215,
    country_name: "Swaziland",
    currency_name: "lilangeni",
    currency_code: "SZL",
    value: "Swaziland - SZL [lilangeni]"
  },
  {
    id: 216,
    country_name: "Sweden",
    currency_name: "krona (pl. kronor)",
    currency_code: "SEK",
    value: "Sweden - SEK [krona (pl. kronor)]"
  },
  {
    id: 217,
    country_name: "Switzerland",
    currency_name: "Swiss franc",
    currency_code: "CHF",
    value: "Switzerland - CHF [Swiss franc]"
  },
  {
    id: 218,
    country_name: "Syrian Arab Republic",
    currency_name: "Syrian pound",
    currency_code: "SYP",
    value: "Syrian Arab Republic - SYP [Syrian pound]"
  },
  {
    id: 45,
    country_name: "Taiwan, Province of China",
    currency_name: "new Taiwan dollar",
    currency_code: "TWD",
    value: "Taiwan, Province of China - TWD [new Taiwan dollar]"
  },
  {
    id: 219,
    country_name: "Tajikistan",
    currency_name: "somoni",
    currency_code: "TJS",
    value: "Tajikistan - TJS [somoni]"
  },
  {
    id: 239,
    country_name: "Tanzania, United Republic of",
    currency_name: "Tanzanian shilling",
    currency_code: "TZS",
    value: "Tanzania, United Republic of - TZS [Tanzanian shilling]"
  },
  {
    id: 220,
    country_name: "Thailand",
    currency_name: "baht (inv.)",
    currency_code: "THB",
    value: "Thailand - THB [baht (inv.)]"
  },
  {
    id: 180,
    country_name: "Timor-Leste",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Timor-Leste - USD [US dollar]"
  },
  {
    id: 221,
    country_name: "Togo",
    currency_name: "CFA franc (BCEAO)",
    currency_code: "XOF",
    value: "Togo - XOF [CFA franc (BCEAO)]"
  },
  {
    id: 222,
    country_name: "Tokelau",
    currency_name: "New Zealand dollar",
    currency_code: "NZD",
    value: "Tokelau - NZD [New Zealand dollar]"
  },
  {
    id: 223,
    country_name: "Tonga",
    currency_name: "pa’anga (inv.)",
    currency_code: "TOP",
    value: "Tonga - TOP [pa’anga (inv.)]"
  },
  {
    id: 224,
    country_name: "Trinidad and Tobago",
    currency_name: "Trinidad and Tobago dollar",
    currency_code: "TTD",
    value: "Trinidad and Tobago - TTD [Trinidad and Tobago dollar]"
  },
  {
    id: 226,
    country_name: "Tunisia",
    currency_name: "Tunisian dinar",
    currency_code: "TND",
    value: "Tunisia - TND [Tunisian dinar]"
  },
  {
    id: 227,
    country_name: "Turkey",
    currency_name: "Turkish lira (inv.)",
    currency_code: "TRY",
    value: "Turkey - TRY [Turkish lira (inv.)]"
  },
  {
    id: 228,
    country_name: "Turkmenistan",
    currency_name: "Turkmen manat (inv.)",
    currency_code: "TMT",
    value: "Turkmenistan - TMT [Turkmen manat (inv.)]"
  },
  {
    id: 229,
    country_name: "Turks and Caicos Islands",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Turks and Caicos Islands - USD [US dollar]"
  },
  {
    id: 230,
    country_name: "Tuvalu",
    currency_name: "Australian dollar",
    currency_code: "AUD",
    value: "Tuvalu - AUD [Australian dollar]"
  },
  {
    id: 231,
    country_name: "Uganda",
    currency_name: "Uganda shilling",
    currency_code: "UGX",
    value: "Uganda - UGX [Uganda shilling]"
  },
  {
    id: 232,
    country_name: "Ukraine",
    currency_name: "hryvnia",
    currency_code: "UAH",
    value: "Ukraine - UAH [hryvnia]"
  },
  {
    id: 225,
    country_name: "United Arab Emirates",
    currency_name: "UAE dirham",
    currency_code: "AED",
    value: "United Arab Emirates - AED [UAE dirham]"
  },
  {
    id: 235,
    country_name: "United Kingdom",
    currency_name: "pound sterling",
    currency_code: "GBP",
    value: "United Kingdom - GBP [pound sterling]"
  },
  {
    id: 240,
    country_name: "United States",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "United States - USD [US dollar]"
  },
  {
    id: 166,
    country_name: "United States Minor Outlying Islands",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "United States Minor Outlying Islands - USD [US dollar]"
  },
  {
    id: 243,
    country_name: "Uruguay",
    currency_name: "Uruguayan peso",
    currency_code: "UYU",
    value: "Uruguay - UYU [Uruguayan peso]"
  },
  {
    id: 244,
    country_name: "Uzbekistan",
    currency_name: "sum (inv.)",
    currency_code: "UZS",
    value: "Uzbekistan - UZS [sum (inv.)]"
  },
  {
    id: 157,
    country_name: "Vanuatu",
    currency_name: "vatu (inv.)",
    currency_code: "VUV",
    value: "Vanuatu - VUV [vatu (inv.)]"
  },
  {
    id: 245,
    country_name: "Venezuela, Bolivarian Republic of",
    currency_name: "bolívar fuerte (pl. bolívares fuertes)",
    currency_code: "VEF",
    value:
      "Venezuela, Bolivarian Republic of - VEF [bolívar fuerte (pl. bolívares fuertes)]"
  },
  {
    id: 204,
    country_name: "Viet Nam",
    currency_name: "dong",
    currency_code: "VND",
    value: "Viet Nam - VND [dong]"
  },
  {
    id: 29,
    country_name: "Virgin Islands, British",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Virgin Islands, British - USD [US dollar]"
  },
  {
    id: 241,
    country_name: "Virgin Islands, U.S.",
    currency_name: "US dollar",
    currency_code: "USD",
    value: "Virgin Islands, U.S. - USD [US dollar]"
  },
  {
    id: 246,
    country_name: "Wallis and Futuna",
    currency_name: "CFP franc",
    currency_code: "XPF",
    value: "Wallis and Futuna - XPF [CFP franc]"
  },
  {
    id: 212,
    country_name: "Western Sahara",
    currency_name: "Moroccan dirham",
    currency_code: "MAD",
    value: "Western Sahara - MAD [Moroccan dirham]"
  },
  {
    id: 248,
    country_name: "Yemen",
    currency_name: "Yemeni rial",
    currency_code: "YER",
    value: "Yemen - YER [Yemeni rial]"
  },
  {
    id: 249,
    country_name: "Zambia",
    currency_name: "Zambian kwacha (inv.)",
    currency_code: "ZMW",
    value: "Zambia - ZMW [Zambian kwacha (inv.)]"
  },
  {
    id: 208,
    country_name: "Zimbabwe",
    currency_name: "Zimbabwe dollar (ZW1)",
    currency_code: "ZWL",
    value: "Zimbabwe - ZWL [Zimbabwe dollar (ZW1)]"
  }
];

export default countries;
