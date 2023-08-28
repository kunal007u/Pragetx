const phones = {
    'AF': /^(\+?93|0)?[2-7]\d{8}$/, // Afghanistan
    'AL': /^(\+?355|0)?[4-9]\d{7}$/, // Albania
    'DZ': /^(\+?213|0)(5|6)\d{8}$/, // Algeria
    'AS': /^(\+?1)?684\d{7}$/, // American Samoa
    'AD': /^(\+?376)?[346]\d{5}$/, // Andorra
    'AO': /^(\+?244|0)?[29]\d{8}$/, // Angola
    'AI': /^(\+?1)?264\d{7}$/, // Anguilla
    'AQ': /^(\+?672)?[1-9]\d{6,7}$/, // Antarctica
    'AG': /^(\+?1)?268\d{7}$/, // Antigua and Barbuda
    'AR': /^(\+?54|0)?9\d{8}$/, // Argentina
    'AM': /^(\+?374|0)((10|[9|7]\d)\d{6}$|[2-4]\d{7}$)$/, // Armenia
    'AW': /^(\+?297)?[56]\d{5}$/, // Aruba
    'AU': /^(\+?61|0)4\d{8}$/, // Australia
    'AT': /^(\+?43|0)6\d{7}$/, // Austria
    'AZ': /^(\+?994|0)?[123]\d{8}$/,// Azerbaijan

    'BS': /^(\+?1)?242\d{7}$/, // Bahamas (the)
    'BH': /^(\+?973|0)?[369]\d{7}$/, // Bahrain
    'BD': /^(\+?880|0)?1[13456789]\d{8}$/, // Bangladesh
    'BB': /^(\+?1)?246\d{7}$/, // Barbados
    'BY': /^(\+?375|8)?\d{9}$/, // Belarus
    'BE': /^(\+?32|0)?[2-9]\d{7,8}$/, // Belgium
    'BZ': /^(\+?501)?\d{7}$/, // Belize
    'BJ': /^(\+?229)?\d{8}$/, // Benin
    'BM': /^(\+?1)?441\d{7}$/, // Bermuda
    'BT': /^(\+?975)?[2-7]\d{7}$/, // Bhutan
    'BO': /^(\+?591|0)?[67]\d{7,8}$/, // Bolivia (Plurinational State of)
    'BQ': /^(\+?599|0)?[567]\d{6}$/, // Bonaire, Sint Eustatius and Saba
    'BA': /^(\+?387|0)?[6-9]\d{7,8}$/, // Bosnia and Herzegovina
    'BW': /^(\+?267)?\d{7,8}$/, // Botswana
    'BV': /^$/, // Bouvet Island (No specific phone number format)
    'BR': /^(\+?55|0)?[1-9]\d{7,8}$/, // Brazil
    'IO': /^$/, // British Indian Ocean Territory (No specific phone number format)
    'BN': /^(\+?673)?\d{7,8}$/, // Brunei Darussalam
    'BG': /^(\+?359|0)?[2-9]\d{6,7}$/, // Bulgaria
    'BF': /^(\+?226)?\d{7,8}$/, // Burkina Faso
    'BI': /^(\+?257)?\d{7,8}$/, // Burundi

    'CV': /^(\+?238)?\d{7}$/, // Cabo Verde
    'KH': /^(\+?855|0)?[1-9]\d{7,8}$/, // Cambodia
    'CM': /^(\+?237)?\d{8,9}$/, // Cameroon
    'CA': /^(\+?1)?[2-9]\d{9}$/, // Canada
    'KY': /^(\+?1)?345\d{7}$/, // Cayman Islands (the)
    'CF': /^(\+?236)?\d{7,8}$/, // Central African Republic (the)
    'TD': /^(\+?235)?\d{6,8}$/, // Chad
    'CL': /^(\+?56|0)?[2-9]\d{7,8}$/, // Chile
    'CN': /^(\+?86|0)?1[3456789]\d{9}$/, // China
    'CX': /^$/, // Christmas Island (No specific phone number format)
    'CC': /^$/, // Cocos (Keeling) Islands (No specific phone number format)
    'CO': /^(\+?57|0)?[1-9]\d{7,10}$/, // Colombia
    'KM': /^(\+?269|0)?[239]\d{6}$/, // Comoros (the)
    'CD': /^(\+?243|0)?\d{9,10}$/, // Congo (the Democratic Republic of the)
    'CG': /^(\+?242|0)?\d{6,9}$/, // Congo (the)
    'CK': /^$/, // Cook Islands (No specific phone number format)
    'CR': /^(\+?506)?\d{8,10}$/, // Costa Rica
    'HR': /^(\+?385|0)?\d{8,9}$/, // Croatia
    'CU': /^(\+?53)?[1-9]\d{7}$/, // Cuba
    'CW': /^(\+?599|0)?[1-9]\d{6}$/, // Curaçao
    'CY': /^(\+?357|0)?[26]\d{7,8}$/, // Cyprus
    'CZ': /^(\+?420)?\d{9,10}$/, // Czechia
    'CI': /^(\+?225)?\d{8,10}$/, // Côte d'Ivoire

    'DK': /^(\+?45)?\d{8}$/, // Denmark
    'DJ': /^(\+?253)?\d{6}$/, // Djibouti
    'DM': /^(\+?1)?767\d{7}$/, // Dominica
    'DO': /^(\+?1)?809\d{7}$/, // Dominican Republic (the)

    'EC': /^(\+?593|0)?[2-9]\d{6,7}$/, // Ecuador
    'EG': /^(\+?20|0)?1[0-9]{9}$/, // Egypt
    'SV': /^(\+?503)?[267]\d{7}$/, // El Salvador
    'GQ': /^(\+?240)?\d{8}$/, // Equatorial Guinea
    'ER': /^(\+?291)?\d{7,8}$/, // Eritrea
    'EE': /^(\+?372)?\d{7,8}$/, // Estonia
    'SZ': /^(\+?268)?\d{7,8}$/, // Eswatini (Swaziland)
    'ET': /^(\+?251|0)?[1-9]\d{8}$/, // Ethiopia

    'FK': /^(\+?500)?\d{5}$/, // Falkland Islands (the) [Malvinas]
    'FO': /^(\+?298)?\d{6}$/, // Faroe Islands (the)
    'FJ': /^(\+?679)?\d{7,8}$/, // Fiji
    'FI': /^(\+?358|0)?[1-9]\d{4,8}$/, // Finland
    'FR': /^(\+?33|0)?[1-9]\d{8,9}$/, // France
    'GF': /^(\+?594|0)?\d{9}$/, // French Guiana
    'PF': /^(\+?689)?\d{6}$/, // French Polynesia
    'TF': /^$/, // French Southern Territories (No specific phone number format)
    'GA': /^(\+?241)?\d{6,7}$/, // Gabon
    'GM': /^(\+?220)?\d{7}$/, // Gambia (the)
    'GE': /^(\+?995|0)?[5-9]\d{8}$/, // Georgia
    'DE': /^(\+?49|0)?[1-9]\d{6,12}$/, // Germany
    'GH': /^(\+?233|0)?[2-9]\d{8,9}$/, // Ghana
    'GI': /^(\+?350)?\d{5,8}$/, // Gibraltar
    'GR': /^(\+?30|0)?[1-9]\d{9}$/, // Greece
    'GL': /^(\+?299)?\d{6}$/, // Greenland
    'GD': /^(\+?1)?473\d{7}$/, // Grenada
    'GP': /^(\+?590|0)?\d{9}$/, // Guadeloupe
    'GU': /^(\+?1)?671\d{7}$/, // Guam
    'GT': /^(\+?502)?\d{7,8}$/, // Guatemala
    'GG': /^(\+?44|0)?1481\d{6}$/, // Guernsey
    'GN': /^(\+?224)?\d{8}$/, // Guinea
    'GW': /^(\+?245)?\d{7,8}$/, // Guinea-Bissau
    'GY': /^(\+?592)?\d{7,8}$/,// Guyana

    'HT': /^(\+?509)?[2-9]\d{7}$/, // Haiti
    'HM': /^$/, // Heard Island and McDonald Islands (No specific phone number format)
    'VA': /^$/, // Holy See (the) (No specific phone number format)
    'HN': /^(\+?504)?\d{8}$/, // Honduras
    'HK': /^(\+?852)?\d{8}$/, // Hong Kong
    'HU': /^(\+?36|06)?[2378]\d{7}$/, // Hungary
    'IS': /^(\+?354)?\d{7}$/, // Iceland
    'IN': /^(\+?91|0)?[6789]\d{9}$/, // India
    'ID': /^(\+?62|0)?[2-9]\d{7,11}$/, // Indonesia
    'IR': /^(\+?98|0)?9[0-9]{9}$/, // Iran (Islamic Republic of)
    'IQ': /^(\+?964|0)?7[0-9]{9}$/, // Iraq
    'IE': /^(\+?353|0)?[1-9]\d{7,8}$/, // Ireland
    'IM': /^(\+?44|0)?1624\d{6}$/, // Isle of Man
    'IL': /^(\+?972|0)?[2-9]\d{7,8}$/, // Israel
    'IT': /^(\+?39|0)?[2679]\d{8,10}$/, // Italy

    'JM': /^(\+?1)?876\d{7}$/, // Jamaica
    'JP': /^(\+?81|0)\d{9,10}$/, // Japan
    'JE': /^(\+?44|0)?1534\d{6}$/, // Jersey
    'JO': /^(\+?962|0)?[79]\d{7}$/, // Jordan
    'KZ': /^(\+?7|8)?[7-8]\d{9}$/, // Kazakhstan
    'KE': /^(\+?254|0)?[2457]\d{8,9}$/, // Kenya
    'KI': /^(\+?686)?\d{5}$/, // Kiribati
    'KP': /^$/, // Korea (the Democratic People's Republic of) (No specific phone number format)
    'KR': /^(\+?82|0)?[1-9]\d{7,10}$/, // Korea (the Republic of)
    'KW': /^(\+?965)?\d{7}$/, // Kuwait
    'KG': /^(\+?996|0)?[5-7]\d{8}$/, // Kyrgyzstan

    'LA': /^(\+?856|0)?[20]\d{8,9}$/, // Lao People's Democratic Republic (the)
    'LV': /^(\+?371)?\d{8,9}$/, // Latvia
    'LB': /^(\+?961|0)?[3-9]\d{7}$/, // Lebanon
    'LS': /^(\+?266)?\d{8}$/, // Lesotho
    'LR': /^(\+?231)?\d{7,8}$/, // Liberia
    'LY': /^(\+?218|0)?\d{8,9}$/, // Libya
    'LI': /^(\+?423)?\d{7,8}$/, // Liechtenstein
    'LT': /^(\+?370|8)?[3467]\d{7,8}$/, // Lithuania
    'LU': /^(\+?352)?\d{6}$/, // Luxembourg

    'MO': /^(\+?853)?[28]\d{6,7}$/, // Macao
    'MG': /^(\+?261|0)?[2368]\d{8,9}$/, // Madagascar
    'MW': /^(\+?265)?[1-9]\d{7,8}$/, // Malawi
    'MY': /^(\+?60|0)?[1-9]\d{7,9}$/, // Malaysia
    'MV': /^(\+?960)?\d{7}$/, // Maldives
    'ML': /^(\+?223)?\d{7,8}$/, // Mali
    'MT': /^(\+?356)?\d{8}$/, // Malta
    'MH': /^(\+?692)?\d{7}$/, // Marshall Islands (the)
    'MQ': /^(\+?596|0)?\d{9}$/, // Martinique
    'MR': /^(\+?222)?\d{6,8}$/, // Mauritania
    'MU': /^(\+?230)?\d{7}$/, // Mauritius
    'YT': /^(\+?262|0)?[269]\d{8}$/, // Mayotte
    'MX': /^(\+?52|0)?1[0-9]{10}$/, // Mexico
    'FM': /^(\+?691)?\d{7}$/, // Micronesia (Federated States of)
    'MD': /^(\+?373|0)?[2-8]\d{7}$/, // Moldova (the Republic of)
    'MC': /^(\+?377|0)?[3467]\d{7}$/, // Monaco
    'MN': /^(\+?976)?\d{7,8}$/, // Mongolia
    'ME': /^(\+?382|0)?\d{8}$/, // Montenegro
    'MS': /^(\+?1)?664\d{7}$/, // Montserrat
    'MA': /^(\+?212|0)?[5-9]\d{8}$/, // Morocco
    'MZ': /^(\+?258)?\d{8,9}$/, // Mozambique
    'MM': /^(\+?95|0)?[1-9]\d{7,9}$/, // Myanmar

    'NA': /^(\+?264|0)?[67]\d{7,8}$/, // Namibia
    'NR': /^(\+?674)?\d{4,7}$/, // Nauru
    'NP': /^(\+?977|0)?[1-9]\d{6,9}$/, // Nepal
    'NL': /^(\+?31|0)?[1-9]\d{8,9}$/, // Netherlands (the)
    'NC': /^(\+?687)?\d{6}$/, // New Caledonia
    'NZ': /^(\+?64|0)?[28]\d{7,9}$/, // New Zealand
    'NI': /^(\+?505)?\d{8}$/, // Nicaragua
    'NE': /^(\+?227)?\d{7,8}$/, // Niger (the)
    'NG': /^(\+?234|0)?[7-9]\d{9}$/, // Nigeria
    'NU': /^$/, // Niue (No specific phone number format)
    'NF': /^(\+?672)?\d{5,6}$/, // Norfolk Island
    'MP': /^(\+?1)?670\d{7}$/, // Northern Mariana Islands (the)
    'NO': /^(\+?47)?[2-9]\d{7,8}$/, // Norway
    'OM': /^(\+?968)?\d{8}$/, // Oman

    'PK': /^(\+?92|0)?[3-9]\d{9}$/, // Pakistan
    'PW': /^(\+?680)?\d{7}$/, // Palau
    'PS': /^$/, // Palestine, State of (No specific phone number format)
    'PA': /^(\+?507)?\d{7,8}$/, // Panama
    'PG': /^(\+?675)?\d{5,7}$/, // Papua New Guinea
    'PY': /^(\+?595|0)?[2469]\d{6,7}$/, // Paraguay
    'PE': /^(\+?51|0)?[1-9]\d{7,9}$/, // Peru
    'PH': /^(\+?63|0)?[24579]\d{9}$/, // Philippines (the)
    'PN': /^$/, // Pitcairn (No specific phone number format)
    'PL': /^(\+?48|0)?[1-9]\d{8,9}$/, // Poland
    'PT': /^(\+?351)?[289]\d{7,8}$/, // Portugal
    'PR': /^(\+?1)?787\d{7}$/, // Puerto Rico

    'QA': /^(\+?974)?\d{7,8}$/, // Qatar
    'MK': /^(\+?389|0)?[2-5]\d{7,8}$/, // Republic of North Macedonia
    'RO': /^(\+?40|0)?[2-9]\d{7,8}$/, // Romania
    'RU': /^(\+?7|8)?[3489]\d{9}$/, // Russian Federation (the)
    'RW': /^(\+?250)?\d{9,10}$/, // Rwanda
    'RE': /^(\+?262|0)?[268]\d{8}$/,// Réunion

    'BL': /^(\+?590|0)?\d{9}$/, // Saint Barthélemy
    'SH': /^(\+?290|0)?[2-4]\d{4}$/, // Saint Helena, Ascension and Tristan da Cunha
    'KN': /^(\+?1)?869\d{7}$/, // Saint Kitts and Nevis
    'LC': /^(\+?1)?758\d{7}$/, // Saint Lucia
    'MF': /^(\+?590|0)?\d{9}$/, // Saint Martin (French part)
    'PM': /^(\+?508)?\d{6}$/, // Saint Pierre and Miquelon
    'VC': /^(\+?1)?784\d{7}$/, // Saint Vincent and the Grenadines
    'WS': /^(\+?685)?\d{7}$/, // Samoa
    'SM': /^(\+?378|0)?[6]\d{7}$/, // San Marino
    'ST': /^(\+?239)?\d{7}$/, // Sao Tome and Principe
    'SA': /^(\+?966|0)?5\d{8}$/, // Saudi Arabia
    'SN': /^(\+?221|0)?[7-9]\d{8}$/, // Senegal
    'RS': /^(\+?381|0)?[6-7]\d{7,8}$/, // Serbia
    'SC': /^(\+?248)?\d{6}$/, // Seychelles
    'SL': /^(\+?232)?\d{8}$/, // Sierra Leone
    'SG': /^(\+?65)?\d{8,11}$/, // Singapore
    'SX': /^(\+?1)?721\d{7}$/, // Sint Maarten (Dutch part)
    'SK': /^(\+?421|0)?[2-9]\d{7,8}$/, // Slovakia
    'SI': /^(\+?386|0)?[1-9]\d{7}$/, // Slovenia
    'SB': /^(\+?677)?\d{5,7}$/, // Solomon Islands
    'SO': /^(\+?252|0)?[1-9]\d{6,7}$/, // Somalia
    'ZA': /^(\+?27|0)?[67]\d{8,9}$/, // South Africa
    'GS': /^$/, // South Georgia and the South Sandwich Islands (No specific phone number format)
    'SS': /^(\+?211)?\d{9}$/, // South Sudan
    'ES': /^(\+?34)?[6789]\d{8}$/, // Spain
    'LK': /^(\+?94|0)?[1-9]\d{8,9}$/, // Sri Lanka
    'SD': /^(\+?249|0)?[1-9]\d{8}$/, // Sudan (the)
    'SR': /^(\+?597)?\d{6}$/, // Suriname
    'SJ': /^$/, // Svalbard and Jan Mayen (No specific phone number format)
    'SE': /^(\+?46|0)?[7-9]\d{8,9}$/, // Sweden
    'CH': /^(\+?41|0)?[2-9]\d{8,9}$/, // Switzerland
    'SY': /^(\+?963|0)?9\d{8}$/, // Syrian Arab Republic

    'TW': /^(\+?886|0)?[1-9]\d{8}$/, // Taiwan (Province of China)
    'TJ': /^(\+?992|0)?[5-8]\d{8}$/, // Tajikistan
    'TZ': /^(\+?255|0)?[67]\d{8,9}$/, // Tanzania, United Republic of
    'TH': /^(\+?66|0)?[1-9]\d{8,9}$/, // Thailand
    'TL': /^(\+?670)?\d{6}$/, // Timor-Leste
    'TG': /^(\+?228)?\d{7,8}$/, // Togo
    'TK': /^$/, // Tokelau (No specific phone number format)
    'TO': /^(\+?676)?\d{5,6}$/, // Tonga
    'TT': /^(\+?1)?868\d{7}$/, // Trinidad and Tobago
    'TN': /^(\+?216)?[2459]\d{7}$/, // Tunisia
    'TR': /^(\+?90|0)?[1-9]\d{9}$/, // Turkey
    'TM': /^(\+?993|0)?[1-7]\d{7}$/, // Turkmenistan
    'TC': /^(\+?1)?649\d{7}$/, // Turks and Caicos Islands (the)
    'TV': /^$/, // Tuvalu (No specific phone number format)

    'UG': /^(\+?256|0)?\d{9}$/, // Uganda
    'UA': /^(\+?380|0)?[3-79]\d{8,9}$/, // Ukraine
    'AE': /^((\+?971)|0)?5[024568]\d{7}$/,

    'GB': /^(\+?44|0)?[1-9]\d{8,9}$/, // United Kingdom of Great Britain and Northern Ireland (the)
    'UM': /^$/, // United States Minor Outlying Islands (the) (No specific phone number format)
    'US': /^(\+?1)?[2-9]\d{9}$/, // United States of America (the)
    'UY': /^(\+?598|0)?9\d{7}$/, // Uruguay
    'UZ': /^(\+?998|0)?[13-79]\d{8}$/, // Uzbekistan
    'VU': /^(\+?678)?\d{5,7}$/, // Vanuatu
    'VE': /^(\+?58|0)?[1245679]\d{9}$/, // Venezuela (Bolivarian Republic of)
    'VN': /^(\+?84|0)?[3-9]\d{8,9}$/, // Viet Nam
    'VG': /^(\+?1)?284\d{7}$/, // Virgin Islands (British)
    'VI': /^(\+?1)?340\d{7}$/,// Virgin Islands (U.S.)

    'WF': /^(\+?681)?\d{6}$/, // Wallis and Futuna
    'EH': /^$/, // Western Sahara (No specific phone number format)
    'YE': /^(\+?967|0)?[1-9]\d{6,7}$/, // Yemen
    'ZM': /^(\+?260|0)?[1-9]\d{8,9}$/, // Zambia
    'ZW': /^(\+?263|0)?[1-9]\d{8,9}$/, // Zimbabwe
    'AX': /^$/, // Åland Islands (No specific phone number format)


}

export default phones;
