import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


var data = [
{
  name: "The Honourable Ed Fast",
  id: "35904",
  party: "Conservative",
  riding: "Abbotsford",
  riding_id: "898",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FastEd_CPC.jpg",
  phone: "604-557-7888",
  address: [
  "2825 Clearbrook Road (Main Office)",
  "Suite 205",
  "Abbotsford, British Columbia",
  "V2T 6S3"
  ],
  email: "ed.fast@parl.gc.ca"
},
{
  name: "Romeo Saganash",
  id: "71482",
  party: "NDP",
  riding: "Abitibi—Baie-James—Nunavik—Eeyou",
  riding_id: "637",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SaganashRomeo_NDP.jpg",
  phone: "418-748-7870",
  address: [
  "888 3rd Avenue (Main Office)",
  "Suite 204",
  "Val-d'Or, Quebec",
  "J9P 5E6",
  "333 3rd Street ",
  "Suite 10",
  "Chibougamau, Quebec",
  "G8P 1N4"
  ],
  email: "Romeo.Saganash@parl.gc.ca"
},
{
  name: "Christine Moore",
  id: "232",
  party: "NDP",
  riding: "Abitibi—Témiscamingue",
  riding_id: "638",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MooreChristine_NPD.jpg",
  phone: "819-339-2266",
  address: [
  "33-A Gamble Street West (Main Office)",
  "RC 15",
  "Rouyn-noranda, Quebec",
  "J9X 2R3",
  "3 Industrielle Street ",
  "Suite 7",
  "Ville-marie, Quebec",
  "J9V 1S3",
  "644 1st Avenue West ",
  "Suite 210",
  "Amos, Quebec",
  "J9T 1V3",
  "29 Road 111 E ",
  "La Sarre, Quebec",
  "J9Z 1R8"
  ],
  email: "Christine.Moore@parl.gc.ca"
},
{
  name: "Serge Cormier",
  id: "88350",
  party: "Liberal",
  riding: "Acadie—Bathurst",
  riding_id: "627",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CormierSerge_LIB.jpg",
  phone: "506-726-5398",
  address: [
  "220 St-Pierre Blvd West (Main Office)",
  "Suite 314",
  "Caraquet, New Brunswick",
  "E1W 1B5"
  ],
  email: "Serge.Cormier@parl.gc.ca"
},
{
  name: "The Honourable Mélanie Joly",
  id: "88384",
  party: "Liberal",
  riding: "Ahuntsic-Cartierville",
  riding_id: "639",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JolyMélanie_Lib.jpg",
  phone: "514-383-3709",
  address: [
  "225 Chabanel West (Main Office)",
  "Suite 1109",
  "Montréal, Quebec",
  "H2N 2C9"
  ],
  email: "Melanie.Joly@parl.gc.ca"
},
{
  name: "Mark Holland",
  id: "25508",
  party: "Liberal",
  riding: "Ajax",
  riding_id: "715",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HollandMark_Lib.jpg",
  phone: "905-426-6808",
  address: [
  "100 Old Kingston Road (Main Office)",
  "Suite 1",
  "Ajax, Ontario",
  "L1T 2Z9"
  ],
  email: "Mark.Holland@parl.gc.ca"
},
{
  name: "Angelo Iacono",
  id: "71337",
  party: "Liberal",
  riding: "Alfred-Pellan",
  riding_id: "640",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/IaconoAngelo_Lib.jpg",
  phone: "450-661-4117",
  address: [
  "3131 de la Concorde East (Main Office)",
  "Suite 300",
  "Laval, Quebec",
  "H7E 4W4"
  ],
  email: "Angelo.Iacono@parl.gc.ca"
},
{
  name: "Carol Hughes",
  id: "31289",
  party: "NDP",
  riding: "Algoma—Manitoulin—Kapuskasing",
  riding_id: "716",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HughesCarol_NDP.jpg",
  phone: "",
  address: [ ],
  email: "carol.hughes@parl.gc.ca"
},
{
  name: "Stéphane Lauzon",
  id: "88394",
  party: "Liberal",
  riding: "Argenteuil—La Petite-Nation",
  riding_id: "641",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LauzonStéphane_Lib.jpg",
  phone: "819-281-2626",
  address: [
  "505 Bethany Avenue (Main Office)",
  "Suite 204",
  "Lachute, Quebec",
  "J8H 4A6",
  "127 Joseph Street ",
  "Gatineau, Quebec",
  "J8L 1G1"
  ],
  email: "Stephane.Lauzon@parl.gc.ca"
},
{
  name: "Leona Alleslev",
  id: "88671",
  party: "Liberal",
  riding: "Aurora—Oak Ridges—Richmond Hill",
  riding_id: "717",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlleslevLeona_Lib.jpg",
  phone: "905-773-8358",
  address: [
  "12820 Yonge Street (Main Office)",
  "Suite 202",
  "Richmond Hill, Ontario",
  "L4E 4H1"
  ],
  email: "Leona.Alleslev@parl.gc.ca"
},
{
  name: "Ken McDonald",
  id: "88283",
  party: "Liberal",
  riding: "Avalon",
  riding_id: "605",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McDonaldKen_Lib.jpg",
  phone: "709-834-3424",
  address: [
  "120 Conception Bay Highway (Main Office)",
  "Suite 105",
  "Conception Bay South, Newfoundland and Labrador",
  "A1W 3A6"
  ],
  email: "Ken.McDonald@parl.gc.ca"
},
{
  name: "Rémi Massé",
  id: "88397",
  party: "Liberal",
  riding: "Avignon—La Mitis—Matane—Matapédia",
  riding_id: "642",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MasséRémi_Lib.jpg",
  phone: "418-364-6254",
  address: [
  "290 Saint-Jérôme Avenue (Main Office)",
  "Matane, Quebec",
  "G4W 3A9",
  "598 C Perron Blvd ",
  "Carleton-sur-Mer, Quebec",
  "G0C 1J0"
  ],
  email: "Remi.Masse@parl.gc.ca"
},
{
  name: "Blake Richards",
  id: "59235",
  party: "Conservative",
  riding: "Banff—Airdrie",
  riding_id: "864",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RichardsBlake_CPC.jpg",
  phone: "403-948-5103",
  address: [
  "620 - 1st Avenue NW (Main Office)",
  "Suite 16",
  "Airdrie, Alberta",
  "T4B 2R3"
  ],
  email: "blake.richards@parl.gc.ca"
},
{
  name: "John Brassard",
  id: "88674",
  party: "Conservative",
  riding: "Barrie—Innisfil",
  riding_id: "718",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrassardJohn_CPC.jpg",
  phone: "705-726-5959",
  address: [
  "480 Huronia Road (Main Office)",
  "Suite 204-B",
  "Barrie, Ontario",
  "L4N 6M2"
  ],
  email: "John.Brassard@parl.gc.ca"
},
{
  name: "Alexander Nuttall",
  id: "88679",
  party: "Conservative",
  riding: "Barrie—Springwater—Oro-Medonte",
  riding_id: "719",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NuttallAlex_CPC.jpg",
  phone: "",
  address: [ ],
  email: "Alex.Nuttall@parl.gc.ca"
},
{
  name: "The Honourable Kevin Sorenson",
  id: "1832",
  party: "Conservative",
  riding: "Battle River—Crowfoot",
  riding_id: "865",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SorensonKevin_CPC.jpg",
  phone: "780-608-4600",
  address: [
  "4945 - 50th Street (Main Office)",
  "Camrose, Alberta",
  "T4V 1P9"
  ],
  email: "kevin.sorenson@parl.gc.ca"
},
{
  name: "The Honourable Gerry Ritz",
  id: "1209",
  party: "Conservative",
  riding: "Battlefords—Lloydminster",
  riding_id: "850",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RitzGerry_CPC.jpg",
  phone: "306-445-2004",
  address: [
  "1322 - 100th Street (Main Office)",
  "North Battleford, Saskatchewan",
  "S9A 0V8"
  ],
  email: "gerry.ritz@parl.gc.ca"
},
{
  name: "Neil R. Ellis",
  id: "88683",
  party: "Liberal",
  riding: "Bay of Quinte",
  riding_id: "720",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EllisNeil_Lib.jpg",
  phone: "613-969-3300",
  address: [
  "100 Station Street (Main Office)",
  "Belleville, Ontario",
  "K8N 2S5"
  ],
  email: "Neil.Ellis@parl.gc.ca"
},
{
  name: "Nathaniel Erskine-Smith",
  id: "88687",
  party: "Liberal",
  riding: "Beaches—East York",
  riding_id: "721",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ErskineSmithNathaniel_Lib.jpg",
  phone: "416-467-0860",
  address: [
  "1902 Danforth Avenue (Main Office)",
  "Toronto, Ontario",
  "M4C 1J4"
  ],
  email: "Nathaniel.Erskine-Smith@parl.gc.ca"
},
{
  name: "The Honourable Maxime Bernier",
  id: "35309",
  party: "Conservative",
  riding: "Beauce",
  riding_id: "643",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BernierMaxime_CPC.jpg",
  phone: "418-387-4224",
  address: [
  "11535 1st Avenue (Main Office)",
  "Suite 430",
  "Saint-georges, Quebec",
  "G5Y 7H5",
  "1068 Vachon Blvd North ",
  "Suite 225",
  "Sainte-marie, Quebec",
  "G6E 1M6"
  ],
  email: "maxime.bernier@parl.gc.ca"
},
{
  name: "Sylvie Boucher",
  id: "35320",
  party: "Conservative",
  riding: "Beauport—Côte-de-Beaupré—Île d'Orléans—Charlevoix",
  riding_id: "656",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoucherSylvie_CPC.jpg",
  phone: "418-827-6776",
  address: [
  "9749 Sainte-Anne Blvd. (Main Office)",
  "Ste-anne-de-beaupre, Quebec",
  "G0A 3C0",
  "32 Patrick-Morgan Street ",
  "La Malbaie, Quebec",
  "G5A 1T1",
  "Telephone: "
  ],
  email: "Sylvie.Boucher@parl.gc.ca"
},
{
  name: "Alupa A. Clarke",
  id: "88404",
  party: "Conservative",
  riding: "Beauport—Limoilou",
  riding_id: "644",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ClarkeAlupa_CPC.jpg",
  phone: "418-663-2113",
  address: [
  "2000 Sanfaçon Avenue (Main Office)",
  "Suite 101",
  "Québec, Quebec",
  "G1E 3R7"
  ],
  email: "Alupa.Clarke@parl.gc.ca"
},
{
  name: "The Honourable Dominic LeBlanc",
  id: "1813",
  party: "Liberal",
  riding: "Beauséjour",
  riding_id: "628",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LeblancDominic_Lib.jpg",
  phone: "506-533-5700",
  address: [
  "328 Main Street (Main Office)",
  "Suite I",
  "Shediac, New Brunswick",
  "E4P 2E3"
  ],
  email: "dominic.leblanc@parl.gc.ca"
},
{
  name: "Louis Plamondon",
  id: "413",
  party: "Bloc Québécois",
  riding: "Bécancour—Nicolet—Saurel",
  riding_id: "645",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PlamondonLouis_BQ.jpg",
  phone: "819-293-2041",
  address: [
  "307 Marie-Victorin Road (Main Office)",
  "Sorel-Tracy, Quebec",
  "J3R 1K6",
  "702 de Mgr Panet Street ",
  "Nicolet, Quebec",
  "J3T 1C6"
  ],
  email: "louis.plamondon@parl.gc.ca"
},
{
  name: "The Honourable Steven Blaney",
  id: "35389",
  party: "Conservative",
  riding: "Bellechasse—Les Etchemins—Lévis",
  riding_id: "646",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlaneySteven_CPC.jpg",
  phone: "",
  address: [ ],
  email: "steven.blaney@parl.gc.ca"
},
{
  name: "Matthew Dubé",
  id: "71368",
  party: "NDP",
  riding: "Beloeil—Chambly",
  riding_id: "647",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DubéMatthew_NDP.jpg",
  phone: "450-658-0088",
  address: [
  "1991 Blvd De Périgny (Main Office)",
  "Suite 105",
  "Chambly, Quebec",
  "J3L 4C3"
  ],
  email: "Matthew.Dube@parl.gc.ca"
},
{
  name: "Ruth Ellen Brosseau",
  id: "71357",
  party: "NDP",
  riding: "Berthier—Maskinongé",
  riding_id: "648",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrosseauRuthEllen_NDP.jpg",
  phone: "819-228-1210",
  address: [
  "343 St-Laurent Avenue (Main Office)",
  "Louiseville, Quebec",
  "J5V 1K2"
  ],
  email: "RuthEllen.Brosseau@parl.gc.ca"
},
{
  name: "The Honourable Judy Foote",
  id: "58519",
  party: "Liberal",
  riding: "Bonavista—Burin—Trinity",
  riding_id: "606",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FooteJudy_Lib.jpg",
  phone: "709-832-1383",
  address: [
  "3 Church Street (Main Office)",
  "PO Box 370",
  "Grand Bank, Newfoundland and Labrador",
  "A0E 1W0"
  ],
  email: "judy.foote@parl.gc.ca"
},
{
  name: "Emmanuel Dubourg",
  id: "84660",
  party: "Liberal",
  riding: "Bourassa",
  riding_id: "651",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DubourgEmmanuel_Lib.jpg",
  phone: "514-323-1212",
  address: [
  "5835 Leger Blvd (Main Office)",
  "Suite 203",
  "Montreal-Nord, Quebec",
  "H1G 6E1"
  ],
  email: "Emmanuel.Dubourg@parl.gc.ca"
},
{
  name: "Martin Shields",
  id: "89109",
  party: "Conservative",
  riding: "Bow River",
  riding_id: "866",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ShieldsMartin_CPC.jpg",
  phone: "",
  address: [
  "403 - 2nd Avenue W (Main Office)",
  "Suite 2",
  "Brooks, Alberta",
  "T1R 0S3",
  "Telephone: 1-844-241-0020"
  ],
  email: "Martin.Shields@parl.gc.ca"
},
{
  name: "Ramesh Sangha",
  id: "88692",
  party: "Liberal",
  riding: "Brampton Centre",
  riding_id: "722",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SanghaRamesh_Lib.jpg",
  phone: "",
  address: [ ],
  email: "Ramesh.Sangha@parl.gc.ca"
},
{
  name: "Raj Grewal",
  id: "88694",
  party: "Liberal",
  riding: "Brampton East",
  riding_id: "723",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GrewalRaj_Lib.jpg",
  phone: "905-458-1474",
  address: [
  "1 Gateway Blvd (Main Office)",
  "Suite 204",
  "Brampton, Ontario",
  "L6T 0G3"
  ],
  email: "Raj.Grewal@parl.gc.ca"
},
{
  name: "Ruby Sahota",
  id: "88698",
  party: "Liberal",
  riding: "Brampton North",
  riding_id: "724",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SahotaRuby_Lib.jpg",
  phone: "905-840-0505",
  address: [
  "50 Sunny Meadow Blvd (Main Office)",
  "Suite 307",
  "Brampton, Ontario",
  "L6R 0Y7"
  ],
  email: "Ruby.Sahota@parl.gc.ca"
},
{
  name: "Sonia Sidhu",
  id: "88703",
  party: "Liberal",
  riding: "Brampton South",
  riding_id: "725",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SidhuSonia_Lib.jpg",
  phone: "905-846-0076",
  address: [
  "24 Queen Street East (Main Office)",
  "Suite 600",
  "Brampton, Ontario",
  "L6V 1A3"
  ],
  email: "Sonia.Sidhu@parl.gc.ca"
},
{
  name: "Kamal Khera",
  id: "88705",
  party: "Liberal",
  riding: "Brampton West",
  riding_id: "726",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KheraKamal_Lib.jpg",
  phone: "905-454-4758",
  address: [
  "35 Van Kirk Drive (Main Office)",
  "Suite 10/10A",
  "Brampton, Ontario",
  "L7A 1A5"
  ],
  email: "Kamal.Khera@parl.gc.ca"
},
{
  name: "Larry Maguire",
  id: "7251",
  party: "Conservative",
  riding: "Brandon—Souris",
  riding_id: "836",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MaguireLarry_CPC.jpg",
  phone: "204-726-7600",
  address: [
  "223 - 18th Street North (Main Office)",
  "Suite 8",
  "Brandon, Manitoba",
  "R7A 2V8"
  ],
  email: "Larry.Maguire@parl.gc.ca"
},
{
  name: "Phil McColeman",
  id: "35539",
  party: "Conservative",
  riding: "Brantford—Brant",
  riding_id: "727",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McColemanPhil_CPC.jpg",
  phone: "519-754-4300",
  address: [
  "108 St. George Street (Main Office)",
  "Suite 3",
  "Brantford, Ontario",
  "N3R 1V6"
  ],
  email: "phil.mccoleman@parl.gc.ca"
},
{
  name: "The Honourable Denis Paradis",
  id: "198",
  party: "Liberal",
  riding: "Brome—Missisquoi",
  riding_id: "652",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ParadisDenis_Lib.jpg",
  phone: "450-248-3144",
  address: [
  "353 Principale West Street (Main Office)",
  "Magog, Quebec",
  "J1X 2B1",
  "351 Principale Street ",
  "Cowansville, Quebec",
  "J2K 1J4",
  "106 Principale Street ",
  "Bedford, Quebec",
  "J0J 1A0"
  ],
  email: "Denis.Paradis@parl.gc.ca"
},
{
  name: "Alexandra Mendès",
  id: "58621",
  party: "Liberal",
  riding: "Brossard—Saint-Lambert",
  riding_id: "653",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MendesAlexandra_Lib.jpg",
  phone: "450-466-6872",
  address: [
  "6955 Taschereau Blvd. (Main Office)",
  "Suite 225",
  "Brossard, Quebec",
  "J4Z 1A7"
  ],
  email: "Alexandra.Mendes@parl.gc.ca"
},
{
  name: "Larry Miller",
  id: "25522",
  party: "Conservative",
  riding: "Bruce—Grey—Owen Sound",
  riding_id: "728",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MillerLarry_CPC.jpg",
  phone: "519-371-1059",
  address: [
  "1131 - 2nd Avenue East (Main Office)",
  "Suite 208",
  "Owen Sound, Ontario",
  "N4K 2J1"
  ],
  email: "larry.miller@parl.gc.ca"
},
{
  name: "Karina Gould",
  id: "88715",
  party: "Liberal",
  riding: "Burlington",
  riding_id: "729",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GouldKarina_Lib.jpg",
  phone: "905-639-5757",
  address: [
  "777 Guelph Line (Main Office)",
  "Suite 209",
  "Burlington, Ontario",
  "L7R 3N2"
  ],
  email: "Karina.Gould@parl.gc.ca"
},
{
  name: "Terry Beech",
  id: "89236",
  party: "Liberal",
  riding: "Burnaby North—Seymour",
  riding_id: "899",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BeechTerry_Lib.jpg",
  phone: "604-718-8870",
  address: [
  "3906 Hastings Street (Main Office)",
  "Burnaby, British Columbia",
  "V5C 6C1"
  ],
  email: "Terry.Beech@parl.gc.ca"
},
{
  name: "Kennedy Stewart",
  id: "31701",
  party: "NDP",
  riding: "Burnaby South",
  riding_id: "900",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StewartKennedy_NDP.jpg",
  phone: "604-291-8863",
  address: [
  "4940 Kingsway (Main Office)",
  "Burnaby, British Columbia",
  "V5H 2E2"
  ],
  email: "Kennedy.Stewart@parl.gc.ca"
},
{
  name: "The Honourable Kent Hehr",
  id: "89111",
  party: "Liberal",
  riding: "Calgary Centre",
  riding_id: "867",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HehrKent_Lib.jpg",
  phone: "403-244-1880",
  address: [
  "950 - 6th Avenue SW (Main Office)",
  "Calgary, Alberta",
  "T2P 1E4"
  ],
  email: "Kent.Hehr@parl.gc.ca"
},
{
  name: "Len Webber",
  id: "89116",
  party: "Conservative",
  riding: "Calgary Confederation",
  riding_id: "868",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WebberLen_CPC.jpg",
  phone: "",
  address: [ ],
  email: "Len.Webber@parl.gc.ca"
},
{
  name: "The Honourable Deepak Obhrai",
  id: "1287",
  party: "Conservative",
  riding: "Calgary Forest Lawn",
  riding_id: "869",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ObhraiDeepak_CPC.jpg",
  phone: "403-207-3030",
  address: [
  "525 - 28th Street SE (Main Office)",
  "Suite 225",
  "Calgary, Alberta",
  "T2A 6W9"
  ],
  email: "deepak.obhrai@parl.gc.ca"
},
{
  name: "The Right Honourable Stephen Harper",
  id: "1733",
  party: "Conservative",
  riding: "Calgary Heritage",
  riding_id: "870",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HarperStephen_CPC.jpg",
  phone: "403-253-7990",
  address: [
  "1600 - 90th Avenue SW Suite A-203 (Main Office)",
  "Calgary, Alberta",
  "T2V 5A8"
  ],
  email: "stephen.harper@parl.gc.ca"
},
{
  name: "The Honourable Jason Kenney",
  id: "1302",
  party: "Conservative",
  riding: "Calgary Midnapore",
  riding_id: "871",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KenneyJason_CPC.jpg",
  phone: "403-225-3480",
  address: [
  "1168 - 137th Avenue South East (Main Office)",
  "Calgary, Alberta",
  "T2J 6T6"
  ],
  email: "jason.kenney@parl.gc.ca"
},
{
  name: "The Honourable Michelle Rempel",
  id: "71902",
  party: "Conservative",
  riding: "Calgary Nose Hill",
  riding_id: "872",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RempelMichelle_CPC.jpg",
  phone: "",
  address: [ ],
  email: "Michelle.Rempel@parl.gc.ca"
},
{
  name: "Pat Kelly",
  id: "89130",
  party: "Conservative",
  riding: "Calgary Rocky Ridge",
  riding_id: "873",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KellyPat_CPC.jpg",
  phone: "403-282-7980",
  address: [
  "400 Crowfoot Crescent (Main Office)",
  "Suite 202",
  "Calgary, Alberta",
  "T3G 5H6"
  ],
  email: "Pat.Kelly@parl.gc.ca"
},
{
  name: "Tom Kmiec",
  id: "89136",
  party: "Conservative",
  riding: "Calgary Shepard",
  riding_id: "874",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KmiecTom_CPC.jpg",
  phone: "",
  address: [
  "2784 Glenmore Trail SE (Main Office)",
  "Suite 1220",
  "Calgary, Alberta",
  "T2C 2E6",
  "Telephone: 1-855-852-5710"
  ],
  email: "Tom.Kmiec@parl.gc.ca"
},
{
  name: "Ron Liepert",
  id: "89139",
  party: "Conservative",
  riding: "Calgary Signal Hill",
  riding_id: "875",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LiepertRon_CPC.jpg",
  phone: "403-292-6666",
  address: [
  "8561 - 8A Avenue SW (Main Office)",
  "Suite 2216",
  "Calgary, Alberta",
  "T3H 0V5"
  ],
  email: "Ron.Liepert@parl.gc.ca"
},
{
  name: "Darshan Singh Kang",
  id: "89144",
  party: "Liberal",
  riding: "Calgary Skyview",
  riding_id: "876",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KangDarshanSingh_Lib.jpg",
  phone: "403-291-0018",
  address: [
  "2635 - 37th Avenue NE (Main Office)",
  "Suite 140",
  "Calgary, Alberta",
  "T1Y 5Z6"
  ],
  email: "Darshan.Kang@parl.gc.ca"
},
{
  name: "Bryan May",
  id: "71599",
  party: "Liberal",
  riding: "Cambridge",
  riding_id: "730",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MayBryan_Lib.jpg",
  phone: "519-624-7440",
  address: [
  "534 Hespeler Road (Main Office)",
  "Suite A4",
  "Cambridge, Ontario",
  "N1R 6J7"
  ],
  email: "Bryan.May@parl.gc.ca"
},
{
  name: "Rodger Cuzner",
  id: "1804",
  party: "Liberal",
  riding: "Cape Breton—Canso",
  riding_id: "616",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CuznerRodger_Lib.jpg",
  phone: "902-842-9763",
  address: [
  "78 Commercial Street (Main Office)",
  "Suite G and E",
  "Dominion, Nova Scotia",
  "B1G 1B4"
  ],
  email: "rodger.cuzner@parl.gc.ca"
},
{
  name: "The Honourable Lawrence MacAulay",
  id: "33",
  party: "Liberal",
  riding: "Cardigan",
  riding_id: "612",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacAulayLawrence_Lib.jpg",
  phone: "902-838-4139",
  address: [
  "551 Main Street (Main Office)",
  "PO Box 1150",
  "Montague, Prince Edward Island",
  "C0A 1R0"
  ],
  email: "lawrence.macaulay@parl.gc.ca"
},
{
  name: "Todd Doherty",
  id: "89249",
  party: "Conservative",
  riding: "Cariboo—Prince George",
  riding_id: "901",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DohertyTodd_CPC.jpg",
  phone: "250-564-7771",
  address: [
  "1520 - 3rd Avenue (Main Office)",
  "Prince George, British Columbia",
  "V2L 3G4"
  ],
  email: "Todd.Doherty@parl.gc.ca"
},
{
  name: "The Honourable Pierre Poilievre",
  id: "25524",
  party: "Conservative",
  riding: "Carleton",
  riding_id: "802",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PoilievrePierre_CPC.jpg",
  phone: "613-692-3331",
  address: [
  "1139 Mill Street (Main Office)",
  "Manotick, Ontario",
  "K4M 1A5"
  ],
  email: "pierre.poilievre@parl.gc.ca"
},
{
  name: "Kelly Block",
  id: "59156",
  party: "Conservative",
  riding: "Carlton Trail—Eagle Creek",
  riding_id: "853",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlockKelly_CPC.jpg",
  phone: "306-882-6447",
  address: [
  "725 Centennial Drive S. (Main Office)",
  "Unit 2-B",
  "Martensville, Saskatchewan",
  "S0K 2T0",
  "634 Main Street, Box 3400 ",
  "Humboldt, Saskatchewan",
  "S0K 2A0",
  "309 Main Street, Box 1808 ",
  "Unit 4",
  "Rosetown, Saskatchewan",
  "S0L 2V0"
  ],
  email: "kelly.block@parl.gc.ca"
},
{
  name: "Sean Fraser",
  id: "88316",
  party: "Liberal",
  riding: "Central Nova",
  riding_id: "617",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FraserSean_Lib.jpg",
  phone: "902-867-2919",
  address: [
  "2A - 115 MacLean Street (Main Office)",
  "New Glasgow, Nova Scotia",
  "B2H 4M5",
  "Telephone: 1-844-641-5886",
  "155 Main Street ",
  "Suite 200",
  "Antigonish, Nova Scotia",
  "B2G 2B6"
  ],
  email: "Sean.Fraser@parl.gc.ca"
},
{
  name: "Dan Albas",
  id: "72029",
  party: "Conservative",
  riding: "Central Okanagan—Similkameen—Nicola",
  riding_id: "902",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlbasDan_CPC.jpg",
  phone: "",
  address: [
  "2562B Main Street (Main Office)",
  "West Kelowna, British Columbia",
  "V4T 2N5",
  "Telephone: 1-800-665-8711",
  "10122-B Main Street ",
  "Summerland, British Columbia",
  "V0H 1Z0",
  "Telephone: 1-800-665-8711"
  ],
  email: "Dan.Albas@parl.gc.ca"
},
{
  name: "Pierre Paul-Hus",
  id: "71454",
  party: "Conservative",
  riding: "Charlesbourg—Haute-Saint-Charles",
  riding_id: "655",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PaulHusPierre_CPC.jpg",
  phone: "418-624-0022",
  address: [
  "8400 Henri-Bourassa Blvd (Main Office)",
  "Suite 204",
  "Québec, Quebec",
  "G1G 4E2"
  ],
  email: "Pierre.Paul-Hus@parl.gc.ca"
},
{
  name: "Doug Eyolfson",
  id: "89027",
  party: "Liberal",
  riding: "Charleswood—St. James—Assiniboia—Headingley",
  riding_id: "837",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EyolfsonDoug_Lib.jpg",
  phone: "204-984-6432",
  address: [
  "3092 Portage Avenue (Main Office)",
  "Unit D",
  "Winnipeg, Manitoba",
  "R3K 0Y2"
  ],
  email: "Doug.Eyolfson@parl.gc.ca"
},
{
  name: "Sean Casey",
  id: "71270",
  party: "Liberal",
  riding: "Charlottetown",
  riding_id: "613",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaseySean_Lib.jpg",
  phone: "902-566-7770",
  address: [
  "75 Fitzroy Road (Main Office)",
  "Suite 201",
  "Charlottetown, Prince Edward Island",
  "C1A 1R6"
  ],
  email: "Sean.Casey@parl.gc.ca"
},
{
  name: "Brenda Shanahan",
  id: "88442",
  party: "Liberal",
  riding: "Châteauguay—Lacolle",
  riding_id: "657",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ShanahanBrenda_Lib.jpg",
  phone: "450-691-7044",
  address: [
  "253 D'Anjou Blvd (Main Office)",
  "Châteauguay, Quebec",
  "J6J 2R4"
  ],
  email: "Brenda.Shanahan@parl.gc.ca"
},
{
  name: "Dave Van Kesteren",
  id: "31765",
  party: "Conservative",
  riding: "Chatham-Kent—Leamington",
  riding_id: "731",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VanKesterenDave_CPC.jpg",
  phone: "",
  address: [ ],
  email: "dave.vankesteren@parl.gc.ca"
},
{
  name: "Denis Lemieux",
  id: "88446",
  party: "Liberal",
  riding: "Chicoutimi—Le Fjord",
  riding_id: "658",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LemieuxDenis_Lib.jpg",
  phone: "418-698-5648",
  address: [
  "345 Des Saguenéens Street (Main Office)",
  "Suite 70",
  "Chicoutimi, Quebec",
  "G7H 6K9"
  ],
  email: "Denis.Lemieux@parl.gc.ca"
},
{
  name: "Mark Strahl",
  id: "71986",
  party: "Conservative",
  riding: "Chilliwack—Hope",
  riding_id: "903",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StrahlMark_CPC.jpg",
  phone: "604-847-9711",
  address: [
  "7388 Vedder Road (Main Office)",
  "Suite 102",
  "Chilliwack, British Columbia",
  "V2R 4E4"
  ],
  email: "Mark.Strahl@parl.gc.ca"
},
{
  name: "Niki Ashton",
  id: "36037",
  party: "NDP",
  riding: "Churchill—Keewatinook Aski",
  riding_id: "838",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AshtonNiki_NDP.jpg",
  phone: "204-627-8716",
  address: [
  "83 Churchill Drive (Main Office)",
  "Thompson, Manitoba",
  "R8N 0L6",
  "1416 Gordon Avenue ",
  "The Pas, Manitoba",
  "R9A 1M6"
  ],
  email: "niki.ashton@parl.gc.ca"
},
{
  name: "John Aldag",
  id: "89258",
  party: "Liberal",
  riding: "Cloverdale—Langley City",
  riding_id: "904",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AldagJohn_Lib.jpg",
  phone: "604-575-6595",
  address: [
  "19211 Fraser Highway (Main Office)",
  "Suite 105",
  "Surrey, British Columbia",
  "V3S 2C9"
  ],
  email: "John.Aldag@parl.gc.ca"
},
{
  name: "Scott Simms",
  id: "25456",
  party: "Liberal",
  riding: "Coast of Bays—Central—Notre Dame",
  riding_id: "607",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SimmsScott_Lib.jpg",
  phone: "",
  address: [ ],
  email: "scott.simms@parl.gc.ca"
},
{
  name: "The Honourable Marie-Claude Bibeau",
  id: "88449",
  party: "Liberal",
  riding: "Compton—Stanstead",
  riding_id: "659",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BibeauMarieClaude_Lib.jpg",
  phone: "819-347-2598",
  address: [
  "175 Queen Street (Main Office)",
  "Suite 204",
  "Sherbrooke, Quebec",
  "J1M 1K1"
  ],
  email: "Marie-Claude.Bibeau@parl.gc.ca"
},
{
  name: "Ron McKinnon",
  id: "59293",
  party: "Liberal",
  riding: "Coquitlam—Port Coquitlam",
  riding_id: "905",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McKinnonRon_Lib.jpg",
  phone: "604-927-1080",
  address: [
  "3278 Westwood Street (Main Office)",
  "Suite 101",
  "Port Coquitlam, British Columbia",
  "V3C 3L8"
  ],
  email: "Ron.McKinnon@parl.gc.ca"
},
{
  name: "Gord Johns",
  id: "89263",
  party: "NDP",
  riding: "Courtenay—Alberni",
  riding_id: "906",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JohnsGord_NDP.jpg",
  phone: "250-947-2140",
  address: [
  "1209 East Island (Main Office)",
  "Suite 12A",
  "Parksville, British Columbia",
  "V9P 1R5"
  ],
  email: "Gord.Johns@parl.gc.ca"
},
{
  name: "Alistair MacGregor",
  id: "89269",
  party: "NDP",
  riding: "Cowichan—Malahat—Langford",
  riding_id: "907",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacGregorAlistair_NDP.jpg",
  phone: "250-746-4896",
  address: [
  "126 Ingram Street (Main Office)",
  "Suite 101",
  "Duncan, British Columbia",
  "V9L 1P1"
  ],
  email: "Alistair.MacGregor@parl.gc.ca"
},
{
  name: "Bill Casey",
  id: "51",
  party: "Liberal",
  riding: "Cumberland—Colchester",
  riding_id: "618",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaseyBill_Lib.jpg",
  phone: "902-895-2863",
  address: [
  "35 Church Street (Main Office)",
  "Amherst, Nova Scotia",
  "B4H 3A7",
  "40 Inglis Place ",
  "Truro, Nova Scotia",
  "B2N 4B4"
  ],
  email: "Bill.Casey@parl.gc.ca"
},
{
  name: "David Anderson",
  id: "1795",
  party: "Conservative",
  riding: "Cypress Hills—Grasslands",
  riding_id: "851",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AndersonDavid_CPC.jpg",
  phone: "306-778-4480",
  address: [
  "240 Central Avenue North (Main Office)",
  "Suite 2",
  "Swift Current, Saskatchewan",
  "S9H 0L2"
  ],
  email: "david.anderson@parl.gc.ca"
},
{
  name: "Darren Fisher",
  id: "88323",
  party: "Liberal",
  riding: "Dartmouth—Cole Harbour",
  riding_id: "619",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FisherDarren_Lib.jpg",
  phone: "902-462-6453",
  address: [
  "82 Tacoma Drive (Main Office)",
  "Suite 200",
  "Dartmouth, Nova Scotia",
  "B2W 3E5"
  ],
  email: "Darren.Fisher@parl.gc.ca"
},
{
  name: "Robert Sopuck",
  id: "69488",
  party: "Conservative",
  riding: "Dauphin—Swan River—Neepawa",
  riding_id: "839",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SopuckRobert_CPC.jpg",
  phone: "",
  address: [ ],
  email: "robert.sopuck@parl.gc.ca"
},
{
  name: "Julie Dzerowicz",
  id: "88721",
  party: "Liberal",
  riding: "Davenport",
  riding_id: "732",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DzerowiczJulie_Lib.jpg",
  phone: "416-654-8048",
  address: [
  "1202 Bloor Street West (Main Office)",
  "Toronto, Ontario",
  "M6H 1N2"
  ],
  email: "Julie.Dzerowicz@parl.gc.ca"
},
{
  name: "The Honourable Carla Qualtrough",
  id: "89272",
  party: "Liberal",
  riding: "Delta",
  riding_id: "908",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/QualtroughCarla_Lib.jpg",
  phone: "778-591-0549",
  address: [
  "8295 - 120th Street (Main Office)",
  "Suite 110",
  "Delta, British Columbia",
  "V4C 0R1"
  ],
  email: "Carla.Qualtrough@parl.gc.ca"
},
{
  name: "Georgina Jolibois",
  id: "89065",
  party: "NDP",
  riding: "Desnethé—Missinippi—Churchill River",
  riding_id: "852",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JoliboisGeorgina_NDP.jpg",
  phone: "306-425-2643",
  address: [
  "23 La Loche Avenue (Main Office)",
  "Suite 117",
  "La Loche, Saskatchewan",
  "S0M 1G0",
  "207 La Ronge Avenue ",
  "Suite 5",
  "La Ronge, Saskatchewan",
  "S0J 1L0"
  ],
  email: "Georgina.Jolibois@parl.gc.ca"
},
{
  name: "Yasmin Ratansi",
  id: "25449",
  party: "Liberal",
  riding: "Don Valley East",
  riding_id: "733",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RatansiYasmin_LIB.jpg",
  phone: "416-443-0343",
  address: [
  "220 Duncan Mill Road (Main Office)",
  "Suite 309",
  "Toronto, Ontario",
  "M3B 3J5"
  ],
  email: "Yasmin.Ratansi@parl.gc.ca"
},
{
  name: "Geng Tan",
  id: "88726",
  party: "Liberal",
  riding: "Don Valley North",
  riding_id: "734",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TanGeng_Lib.jpg",
  phone: "416-443-0623",
  address: [
  "442 McNicoll Avenue (Main Office)",
  "Toronto, Ontario",
  "M2H 2E1"
  ],
  email: "Geng.Tan@parl.gc.ca"
},
{
  name: "Robert Oliphant",
  id: "58858",
  party: "Liberal",
  riding: "Don Valley West",
  riding_id: "735",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OliphantRobert_Lib.jpg",
  phone: "416-467-7275",
  address: [
  "1670 Bayview Avenue (Main Office)",
  "Suite 310",
  "Toronto, Ontario",
  "M4G 3C2"
  ],
  email: "Rob.Oliphant@parl.gc.ca"
},
{
  name: "Anju Dhillon",
  id: "88453",
  party: "Liberal",
  riding: "Dorval—Lachine—LaSalle",
  riding_id: "660",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DhillonAnju_Lib.jpg",
  phone: "514-639-4497",
  address: [
  "735 Notre-Dame Street (Main Office)",
  "Lachine, Quebec",
  "H8S 2B5"
  ],
  email: "Anju.Dhillon@parl.gc.ca"
},
{
  name: "François Choquette",
  id: "35351",
  party: "NDP",
  riding: "Drummond",
  riding_id: "661",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChoquetteFrançois_NDP.jpg",
  phone: "819-477-3611",
  address: [
  "150 Marchand Street (Main Office)",
  "Suite 100",
  "Drummondville, Quebec",
  "J2C 4N1"
  ],
  email: "Francois.Choquette@parl.gc.ca"
},
{
  name: "David Tilson",
  id: "25461",
  party: "Conservative",
  riding: "Dufferin—Caledon",
  riding_id: "736",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TilsonDavid_CPC.jpg",
  phone: "905-857-6080",
  address: [
  "229 Broadway (Main Office)",
  "Suite 2",
  "Orangeville, Ontario",
  "L9W 1K4",
  "12596 Regional Road 50 ",
  "Bolton, Ontario",
  "L7E 1T6"
  ],
  email: "david.tilson@parl.gc.ca"
},
{
  name: "The Honourable Erin O'Toole",
  id: "72773",
  party: "Conservative",
  riding: "Durham",
  riding_id: "737",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OTooleErin_CPC.jpg",
  phone: "905-697-1699",
  address: [
  "54 King Street East (Main Office)",
  "Suite 103",
  "Bowmanville, Ontario",
  "L1C 1N3"
  ],
  email: "Erin.OToole@parl.gc.ca"
},
{
  name: "Randy Boissonnault",
  id: "89147",
  party: "Liberal",
  riding: "Edmonton Centre",
  riding_id: "877",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoissonnaultRandy_Lib.jpg",
  phone: "780-442-1888",
  address: [
  "10235 - 124 Street (Main Office)",
  "Suite 103",
  "Edmonton, Alberta",
  "T5N 1P9"
  ],
  email: "Randy.Boissonnault@parl.gc.ca"
},
{
  name: "Kerry Diotte",
  id: "89150",
  party: "Conservative",
  riding: "Edmonton Griesbach",
  riding_id: "878",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DiotteKerry_CPC.jpg",
  phone: "780-495-3261",
  address: [
  "10212 - 127th Avenue NW (Main Office)",
  "Suite 102",
  "Edmonton, Alberta",
  "T5E 0B8"
  ],
  email: "Kerry.Diotte@parl.gc.ca"
},
{
  name: "Ziad Aboultaif",
  id: "89156",
  party: "Conservative",
  riding: "Edmonton Manning",
  riding_id: "879",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AboultaifZiad_CPC.jpg",
  phone: "780-822-1540",
  address: [
  "8119 - 160 Avenue (Main Office)",
  "Suite 204A",
  "Edmonton, Alberta",
  "T5Z 0G3"
  ],
  email: "Ziad.Aboultaif@parl.gc.ca"
},
{
  name: "The Honourable Amarjeet Sohi",
  id: "89163",
  party: "Liberal",
  riding: "Edmonton Mill Woods",
  riding_id: "880",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SohiAmarjeet_Lib.jpg",
  phone: "780-497-3524",
  address: [
  "9225 - 28th Avenue (Main Office)",
  "Edmonton, Alberta",
  "T6N 1N1"
  ],
  email: "Amarjeet.Sohi@parl.gc.ca"
},
{
  name: "Matt Jeneroux",
  id: "89167",
  party: "Conservative",
  riding: "Edmonton Riverbend",
  riding_id: "881",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JenerouxMatt_CPC.jpg",
  phone: "780-495-4351",
  address: [
  "596 Riverbend Square (Main Office)",
  "Suite 204",
  "Edmonton, Alberta",
  "T6R 2E3"
  ],
  email: "Matt.Jeneroux@parl.gc.ca"
},
{
  name: "Linda Duncan",
  id: "35873",
  party: "NDP",
  riding: "Edmonton Strathcona",
  riding_id: "882",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuncanLinda_NDP.jpg",
  phone: "780-495-8404",
  address: [
  "10049 - 81st Avenue (Main Office)",
  "Edmonton, Alberta",
  "T6E 1W7"
  ],
  email: "linda.duncan@parl.gc.ca"
},
{
  name: "Kelly McCauley",
  id: "89179",
  party: "Conservative",
  riding: "Edmonton West",
  riding_id: "883",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McCauleyKelly_CPC.jpg",
  phone: "780-392-2515",
  address: [
  "5613 - 199th Street (Main Office)",
  "Edmonton, Alberta",
  "T6M 0M8"
  ],
  email: "Kelly.McCauley@parl.gc.ca"
},
{
  name: "The Honourable Mike Lake",
  id: "35857",
  party: "Conservative",
  riding: "Edmonton—Wetaskiwin",
  riding_id: "884",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LakeMike_CPC.jpg",
  phone: "780-495-2149",
  address: [
  "1230 - 91 Street SW (Main Office)",
  "Edmonton, Alberta",
  "T6X 0P2"
  ],
  email: "mike.lake@parl.gc.ca"
},
{
  name: "Marco Mendicino",
  id: "88738",
  party: "Liberal",
  riding: "Eglinton—Lawrence",
  riding_id: "738",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MendicinoMarco_Lib.jpg",
  phone: "416-781-5583",
  address: [
  "511 Lawrence Avenue West (Main Office)",
  "Toronto, Ontario",
  "M6A 1A3"
  ],
  email: "Marco.Mendicino@parl.gc.ca"
},
{
  name: "Robert J. Morrissey",
  id: "88308",
  party: "Liberal",
  riding: "Egmont",
  riding_id: "614",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MorrisseyRobert_Lib.jpg",
  phone: "",
  address: [
  "263 Heather Moyse Drive (Main Office)",
  "Summerside, Prince Edward Island",
  "C1N 5P1",
  "Telephone: 1-800-224-0018"
  ],
  email: "Robert.Morrissey@parl.gc.ca"
},
{
  name: "Karen Vecchio",
  id: "88742",
  party: "Conservative",
  riding: "Elgin—Middlesex—London",
  riding_id: "739",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VecchioKaren_CPC.jpg",
  phone: "519-637-2255",
  address: [
  "750 Talbot Street (Main Office)",
  "Suite 203",
  "St. Thomas, Ontario",
  "N5P 1E2"
  ],
  email: "Karen.Vecchio@parl.gc.ca"
},
{
  name: "Daniel Blaikie",
  id: "89032",
  party: "NDP",
  riding: "Elmwood—Transcona",
  riding_id: "840",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlaikieDaniel_NDP.jpg",
  phone: "204-984-2499",
  address: [
  "1100 Concordia Avenue (Main Office)",
  "Suite 210",
  "Winnipeg, Manitoba",
  "R2K 4B8"
  ],
  email: "Daniel.Blaikie@parl.gc.ca"
},
{
  name: "Randall Garrison",
  id: "71995",
  party: "NDP",
  riding: "Esquimalt—Saanich—Sooke",
  riding_id: "923",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GarrisonRandall_NDP.jpg",
  phone: "250-405-6550",
  address: [
  "2904 Tillicum Road (Main Office)",
  "Victoria, British Columbia",
  "V9A 2A5"
  ],
  email: "Randall.Garrison@parl.gc.ca"
},
{
  name: "Tracey Ramsey",
  id: "88745",
  party: "NDP",
  riding: "Essex",
  riding_id: "740",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RamseyTracey_NDP.jpg",
  phone: "519-776-4700",
  address: [
  "316 Talbot Street North (Main Office)",
  "Essex, Ontario",
  "N8M 2E1"
  ],
  email: "Tracey.Ramsey@parl.gc.ca"
},
{
  name: "Borys Wrzesnewskyj",
  id: "25468",
  party: "Liberal",
  riding: "Etobicoke Centre",
  riding_id: "741",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WrzesnewskyjBorys_Lib.jpg",
  phone: "416-249-7322",
  address: [
  "577 Burnhamthorpe Road (Main Office)",
  "Suite 2",
  "Etobicoke, Ontario",
  "M9C 2Y3"
  ],
  email: "Borys.Wrzesnewskyj@parl.gc.ca"
},
{
  name: "The Honourable Kirsty Duncan",
  id: "58877",
  party: "Liberal",
  riding: "Etobicoke North",
  riding_id: "743",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuncanKirsty_Lib.jpg",
  phone: "416-747-6003",
  address: [
  "815 Albion Rd (Main Office)",
  "Etobicoke, Ontario",
  "M9V 1A3"
  ],
  email: "kirsty.duncan@parl.gc.ca"
},
{
  name: "James Maloney",
  id: "88748",
  party: "Liberal",
  riding: "Etobicoke—Lakeshore",
  riding_id: "742",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MaloneyJames_Lib.jpg",
  phone: "416-251-5510",
  address: [
  "1092 Islington Avenue (Main Office)",
  "Suite 203",
  "Toronto, Ontario",
  "M8Z 4R9"
  ],
  email: "James.Maloney@parl.gc.ca"
},
{
  name: "David Sweet",
  id: "31715",
  party: "Conservative",
  riding: "Flamborough—Glanbrook",
  riding_id: "744",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SweetDavid_CPC.jpg",
  phone: "905-574-0474",
  address: [
  "1760 Upper James St. (Main Office)",
  "Suite 4",
  "Hamilton, Ontario",
  "L9B 1K9"
  ],
  email: "david.sweet@parl.gc.ca"
},
{
  name: "Ken Hardie",
  id: "89274",
  party: "Liberal",
  riding: "Fleetwood—Port Kells",
  riding_id: "909",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HardieKen_Lib.jpg",
  phone: "604-501-5900",
  address: [
  "16088 - 84th Avenue (Main Office)",
  "Suite 301",
  "Surrey, British Columbia",
  "V4N 0V9"
  ],
  email: "Ken.Hardie@parl.gc.ca"
},
{
  name: "John Barlow",
  id: "86261",
  party: "Conservative",
  riding: "Foothills",
  riding_id: "885",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BarlowJohn_CPC.jpg",
  phone: "403-603-3665",
  address: [
  "109 - 4th Avenue South West (Main Office)",
  "High River, Alberta",
  "T1V 1M5"
  ],
  email: "John.Barlow@parl.gc.ca"
},
{
  name: "David Yurdiga",
  id: "86260",
  party: "Conservative",
  riding: "Fort McMurray—Cold Lake",
  riding_id: "886",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/YurdigaDavid_CPC.jpg",
  phone: "780-639-1700",
  address: [
  "10021 Biggs Avenue (Main Office)",
  "Suite 112",
  "Fort McMurray, Alberta",
  "T9H 1S4",
  "901 - 10 Strret ",
  "Suite 3",
  "Cold Lake, Alberta",
  "T9M 1H8"
  ],
  email: "David.Yurdiga@parl.gc.ca"
},
{
  name: "Matt DeCourcey",
  id: "88355",
  party: "Liberal",
  riding: "Fredericton",
  riding_id: "629",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DeCourceyMatt_Lib.jpg",
  phone: "506-452-4110",
  address: [
  "494 Queen Street (Main Office)",
  "Suite 300",
  "Fredericton, New Brunswick",
  "E3B 1B6"
  ],
  email: "Matt.DeCourcey@parl.gc.ca"
},
{
  name: "Alaina Lockhart",
  id: "88357",
  party: "Liberal",
  riding: "Fundy Royal",
  riding_id: "630",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LockhartAlaina_Lib.jpg",
  phone: "506-832-4200",
  address: [
  "599 Main Street (Main Office)",
  "Suite 104",
  "Hampton, New Brunswick",
  "E5N 6C2"
  ],
  email: "Alaina.Lockhart@parl.gc.ca"
},
{
  name: "The Honourable Diane Lebouthillier",
  id: "88460",
  party: "Liberal",
  riding: "Gaspésie—Les Îles-de-la-Madeleine",
  riding_id: "662",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LebouthillierDiane_Lib.jpg",
  phone: "418-764-2890",
  address: [
  "153 La Grande Allée East (Main Office)",
  "Suite 104",
  "Grande-Rivière, Quebec",
  "G0C 1V0",
  "350 Principale Road ",
  "Suite 101",
  "Cap-aux-Meules, Quebec",
  "G4T 1C9",
  "464 Ste-Anne Blvd West ",
  "Suite 27",
  "Ste-Anne-Des-Monts, Quebec",
  "G4V 1T5"
  ],
  email: "Diane.Lebouthillier@parl.gc.ca"
},
{
  name: "Steven MacKinnon",
  id: "88468",
  party: "Liberal",
  riding: "Gatineau",
  riding_id: "663",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacKinnonSteven_Lib.jpg",
  phone: "819-561-5555",
  address: [
  "160 de l'Hôpital Blvd (Main Office)",
  "Suite 204",
  "Gatineau, Quebec",
  "J8T 8J1"
  ],
  email: "Steven.MacKinnon@parl.gc.ca"
},
{
  name: "Francis Drouin",
  id: "88756",
  party: "Liberal",
  riding: "Glengarry—Prescott—Russell",
  riding_id: "745",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DrouinFrancis_Lib.jpg",
  phone: "613-632-5214",
  address: [
  "1468 Laurier Street (Main Office)",
  "Suite 201",
  "Rockland, Ontario",
  "K4K 1C8",
  "179 Main Street East ",
  "Hawkesbury, Ontario",
  "K6A 1A1",
  "90 Main Street South ",
  "Alexandria, Ontario",
  "K0C 1A0",
  "Telephone: "
  ],
  email: "Francis.Drouin@parl.gc.ca"
},
{
  name: "Chris Warkentin",
  id: "35886",
  party: "Conservative",
  riding: "Grande Prairie—Mackenzie",
  riding_id: "887",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WarkentinChris_CPC.jpg",
  phone: "780-538-1677",
  address: [
  "10625 West Side Drive (Main Office)",
  "Suite 201",
  "Grande Prairie, Alberta",
  "T8V 8E6"
  ],
  email: "chris.warkentin@parl.gc.ca"
},
{
  name: "Lloyd Longfield",
  id: "88761",
  party: "Liberal",
  riding: "Guelph",
  riding_id: "746",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LongfieldLloyd_Lib.jpg",
  phone: "519-837-8276",
  address: [
  "40 Cork Street East (Main Office)",
  "Guelph, Ontario",
  "N1H 2W8"
  ],
  email: "Lloyd.Longfield@parl.gc.ca"
},
{
  name: "The Honourable Diane Finley",
  id: "25501",
  party: "Conservative",
  riding: "Haldimand—Norfolk",
  riding_id: "747",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FinleyDiane_CPC.jpg",
  phone: "519-426-3400",
  address: [
  "76 Kent Street South (Main Office)",
  "Simcoe, Ontario",
  "N3Y 2Y1"
  ],
  email: "diane.finley@parl.gc.ca"
},
{
  name: "Jamie Schmale",
  id: "88770",
  party: "Conservative",
  riding: "Haliburton—Kawartha Lakes—Brock",
  riding_id: "748",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SchmaleJamie_CPC.jpg",
  phone: "705-324-2400",
  address: [
  "68 McLaughlin Road (Main Office)",
  "Lindsay, Ontario",
  "K9V 6B5"
  ],
  email: "Jamie.Schmale@parl.gc.ca"
},
{
  name: "Andy Fillmore",
  id: "88325",
  party: "Liberal",
  riding: "Halifax",
  riding_id: "620",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FillmoreAndy_Lib.jpg",
  phone: "902-426-8691",
  address: [
  "1888 Brunswick Street (Main Office)",
  "Suite 808",
  "Halifax, Nova Scotia",
  "B3J 3J8"
  ],
  email: "Andy.Fillmore@parl.gc.ca"
},
{
  name: "The Honourable Geoff Regan",
  id: "1760",
  party: "Liberal",
  riding: "Halifax West",
  riding_id: "621",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ReganGeoff_Lib.jpg",
  phone: "902-426-2217",
  address: [
  "1496 Bedford Highway (Main Office)",
  "Suite 222",
  "Bedford, Nova Scotia",
  "B4A 1E5"
  ],
  email: "geoff.regan@parl.gc.ca"
},
{
  name: "David Christopherson",
  id: "25489",
  party: "NDP",
  riding: "Hamilton Centre",
  riding_id: "749",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChristophersonDavid_NDP.jpg",
  phone: "905-526-0770",
  address: [
  "22 Tisdale Street South (Main Office)",
  "Hamilton, Ontario",
  "L8N 2V9"
  ],
  email: "david.christopherson@parl.gc.ca"
},
{
  name: "Bob Bratina",
  id: "88775",
  party: "Liberal",
  riding: "Hamilton East—Stoney Creek",
  riding_id: "750",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BratinaBob_Lib.jpg",
  phone: "905-662-4763",
  address: [
  "40 Centennial Parkway North (Main Office)",
  "Unit 2",
  "Hamilton, Ontario",
  "L8E 1H6"
  ],
  email: "Bob.Bratina@parl.gc.ca"
},
{
  name: "Scott Duvall",
  id: "88780",
  party: "NDP",
  riding: "Hamilton Mountain",
  riding_id: "751",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuvallScott_NDP.jpg",
  phone: "905-574-3331",
  address: [
  "555 Concession Street (Main Office)",
  "Unit 2, Level 2",
  "Hamilton, Ontario",
  "L8V 1A8"
  ],
  email: "Scott.Duvall@parl.gc.ca"
},
{
  name: "Filomena Tassi",
  id: "88784",
  party: "Liberal",
  riding: "Hamilton West—Ancaster—Dundas",
  riding_id: "752",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TassiFilomena_Lib.jpg",
  phone: "905-529-5435",
  address: [
  "1686 Main Street West (Main Office)",
  "Hamilton, Ontario",
  "L8S 0A2"
  ],
  email: "Filomena.Tassi@parl.gc.ca"
},
{
  name: "Mike Bossio",
  id: "88786",
  party: "Liberal",
  riding: "Hastings—Lennox and Addington",
  riding_id: "753",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BossioMike_Lib.jpg",
  phone: "",
  address: [
  "20-B Richmond Blvd (Main Office)",
  "Napanee, Ontario",
  "K7R 4A4",
  "Telephone: 1-866-471-3800"
  ],
  email: "Mike.Bossio@parl.gc.ca"
},
{
  name: "Marjolaine Boutin-Sweet",
  id: "71395",
  party: "NDP",
  riding: "Hochelaga",
  riding_id: "664",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoutinSweetMarjolaine_NDP.jpg",
  phone: "514-283-2655",
  address: [
  "2030 Pie-IX Blvd (Main Office)",
  "Suite 225",
  "Montréal, Quebec",
  "H1V 2C8"
  ],
  email: "Marjolaine.Boutin-Sweet@parl.gc.ca"
},
{
  name: "Pablo Rodriguez",
  id: "25451",
  party: "Liberal",
  riding: "Honoré-Mercier",
  riding_id: "665",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RodriguezPablo_Lib.jpg",
  phone: "514-353-5044",
  address: [
  "8595 Maurice-Duplessis Blvd (Main Office)",
  "Suite 208",
  "Montréal, Quebec",
  "H1E 4H7"
  ],
  email: "Pablo.Rodriguez@parl.gc.ca"
},
{
  name: "Greg Fergus",
  id: "88478",
  party: "Liberal",
  riding: "Hull—Aylmer",
  riding_id: "666",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FergusGreg_Lib.jpg",
  phone: "819-682-1125",
  address: [
  "179 Du Portage Promenade (Main Office)",
  "Suite 301",
  "Gatineau, Quebec",
  "J8X 2K5",
  "115, Principale Street ",
  "Suite 102",
  "Gatineau, Quebec",
  "J9H 3M2"
  ],
  email: "Greg.Fergus@parl.gc.ca"
},
{
  name: "The Honourable Judy A. Sgro",
  id: "1787",
  party: "Liberal",
  riding: "Humber River—Black Creek",
  riding_id: "835",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SgroJudy_Lib.jpg",
  phone: "416-744-1882",
  address: [
  "2201 Finch Avenue West (Main Office)",
  "Suite 25",
  "Toronto, Ontario",
  "M9M 2Y9"
  ],
  email: "judy.sgro@parl.gc.ca"
},
{
  name: "Ben Lobb",
  id: "35600",
  party: "Conservative",
  riding: "Huron—Bruce",
  riding_id: "754",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LobbBen_CPC.jpg",
  phone: "",
  address: [ ],
  email: "ben.lobb@parl.gc.ca"
},
{
  name: "Gabriel Ste-Marie",
  id: "88485",
  party: "Bloc Québécois",
  riding: "Joliette",
  riding_id: "667",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SteMarieGabriel_BQ.jpg",
  phone: "450-752-1940",
  address: [
  "436 St-Viateur (Main Office)",
  "Joliette, Quebec",
  "J6E 3B2"
  ],
  email: "Gabriel.Ste-Marie@parl.gc.ca"
},
{
  name: "Karine Trudel",
  id: "88488",
  party: "NDP",
  riding: "Jonquière",
  riding_id: "668",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TrudelKarine_NDP.jpg",
  phone: "418-695-4477",
  address: [
  "1930 Davis Street (Main Office)",
  "Jonquiere, Quebec",
  "G7S 3B6"
  ],
  email: "Karine.Trudel@parl.gc.ca"
},
{
  name: "Cathy McLeod",
  id: "59265",
  party: "Conservative",
  riding: "Kamloops—Thompson—Cariboo",
  riding_id: "910",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McLeodCathy_CPC.jpg",
  phone: "250-851-4991",
  address: [
  "275 Seymour Street (Main Office)",
  "Suite 6",
  "Kamloops, British Columbia",
  "V2C 2E7"
  ],
  email: "cathy.mcleod@parl.gc.ca"
},
{
  name: "Karen McCrimmon",
  id: "71602",
  party: "Liberal",
  riding: "Kanata—Carleton",
  riding_id: "755",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McCrimmonKaren_Lib.jpg",
  phone: "613-592-3469",
  address: [
  "555 Legget Drive (Main Office)",
  "Suite 121",
  "Kanata, Ontario",
  "K2K 2X3"
  ],
  email: "Karen.McCrimmon@parl.gc.ca"
},
{
  name: "Stephen Fuhr",
  id: "89279",
  party: "Liberal",
  riding: "Kelowna—Lake Country",
  riding_id: "911",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FuhrStephen_Lib.jpg",
  phone: "250-470-5075",
  address: [
  "1420 St. Paul Street (Main Office)",
  "Suite 102",
  "Kelowna, British Columbia",
  "V1Y 2E6"
  ],
  email: "Stephen.Fuhr@parl.gc.ca"
},
{
  name: "The Honourable Robert D. Nault",
  id: "709",
  party: "Liberal",
  riding: "Kenora",
  riding_id: "756",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NaultRobert_Lib.jpg",
  phone: "807-737-4934",
  address: [
  "301 First Avenue S (Main Office)",
  "Suite 202",
  "Kenora, Ontario",
  "P9N 1W2",
  "54 Front Street ",
  "Unit 1A",
  "Sioux Lookout, Ontario",
  "P8T 1A1"
  ],
  email: "Bob.Nault@parl.gc.ca"
},
{
  name: "The Honourable MaryAnn Mihychuk",
  id: "89037",
  party: "Liberal",
  riding: "Kildonan—St. Paul",
  riding_id: "841",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MihychukMaryAnn_Lib.jpg",
  phone: "204-984-6322",
  address: [
  "1575 Main Street (Main Office)",
  "Winnipeg, Manitoba",
  "R2W 3W5"
  ],
  email: "MaryAnn.Mihychuk@parl.gc.ca"
},
{
  name: "The Honourable Scott Brison",
  id: "74",
  party: "Liberal",
  riding: "Kings—Hants",
  riding_id: "622",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrisonScott_Lib.jpg",
  phone: "902-542-4010",
  address: [
  "24 Harbourside Drive (Main Office)",
  "Suite 101A",
  "Wolfville, Nova Scotia",
  "B4P 2C1"
  ],
  email: "scott.brison@parl.gc.ca"
},
{
  name: "Mark Gerretsen",
  id: "88802",
  party: "Liberal",
  riding: "Kingston and the Islands",
  riding_id: "758",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GerretsenMark_Lib.jpg",
  phone: "613-542-3243",
  address: [
  "841 Princess Street (Main Office)",
  "Kingston, Ontario",
  "K7L 1G7"
  ],
  email: "Mark.Gerretsen@parl.gc.ca"
},
{
  name: "Deborah Schulte",
  id: "88799",
  party: "Liberal",
  riding: "King—Vaughan",
  riding_id: "757",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SchulteDeb_Lib.jpg",
  phone: "905-303-5000",
  address: [
  "9401 Jane Street (Main Office)",
  "Suite 115",
  "Vaughan, Ontario",
  "L6A 4H7"
  ],
  email: "Deb.Schulte@parl.gc.ca"
},
{
  name: "Raj Saini",
  id: "88807",
  party: "Liberal",
  riding: "Kitchener Centre",
  riding_id: "759",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SainiRaj_Lib.jpg",
  phone: "519-741-2001",
  address: [
  "209 Frederick Street (Main Office)",
  "Suite 202",
  "Kitchener, Ontario",
  "N2H 2M7"
  ],
  email: "Raj.Saini@parl.gc.ca"
},
{
  name: "Marwan Tabbara",
  id: "88813",
  party: "Liberal",
  riding: "Kitchener South—Hespeler",
  riding_id: "761",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TabbaraMarwan_Lib.jpg",
  phone: "519-571-5509",
  address: [
  "153 Country Hill Drive (Main Office)",
  "Suite 2A",
  "Kitchener, Ontario",
  "N2E 2G7"
  ],
  email: "Marwan.Tabbara@parl.gc.ca"
},
{
  name: "Harold Albrecht",
  id: "35607",
  party: "Conservative",
  riding: "Kitchener—Conestoga",
  riding_id: "760",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlbrechtHarold_CPC.jpg",
  phone: "519-578-3777",
  address: [
  "1187 Fischer-Hallman Road (Main Office)",
  "Unit 624",
  "Kitchener, Ontario",
  "N2E 4H9"
  ],
  email: "harold.albrecht@parl.gc.ca"
},
{
  name: "Wayne Stetski",
  id: "89281",
  party: "NDP",
  riding: "Kootenay—Columbia",
  riding_id: "912",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StetskiWayne_NDP.jpg",
  phone: "250-354-2610",
  address: [
  "111 - 7th Avenue South (Main Office)",
  "Cranbrook, British Columbia",
  "V1C 2J3",
  "310 Ward Street ",
  "Suite 501",
  "Nelson, British Columbia",
  "V1L 5S4"
  ],
  email: "Wayne.Stetski@parl.gc.ca"
},
{
  name: "Mario Beaulieu",
  id: "376",
  party: "Bloc Québécois",
  riding: "La Pointe-de-l'Île",
  riding_id: "669",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BeaulieuMario_BQ.jpg",
  phone: "514-645-0101",
  address: [
  "12500 Industriel Blvd (Main Office)",
  "Suite 100",
  "Montréal, Quebec",
  "H1B 5P5"
  ],
  email: "Mario.Beaulieu@parl.gc.ca"
},
{
  name: "Jean-Claude Poissant",
  id: "88493",
  party: "Liberal",
  riding: "La Prairie",
  riding_id: "670",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PoissantJeanClaude_Lib.jpg",
  phone: "450-632-3383",
  address: [
  "66 Road 132 (Main Office)",
  "Suite 200",
  "Delson, Quebec",
  "J5B 0A1"
  ],
  email: "Jean-Claude.Poissant@parl.gc.ca"
},
{
  name: "Yvonne Jones",
  id: "13218",
  party: "Liberal",
  riding: "Labrador",
  riding_id: "608",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JonesYvonne_Lib.jpg",
  phone: "709-944-2146",
  address: [
  "217 Hamilton River Road, PO Box 119 Station B (Main Office)",
  "Happy Valley-Goose Bay, Newfoundland and Labrador",
  "A0P 1E0",
  "53 Main Highway, PO Box 242 ",
  "L'Anse au Loup, Newfoundland and Labrador",
  "A0K 3L0",
  "201 Humber Avenue ",
  "Suite 202",
  "Labrador City, Newfoundland and Labrador",
  "A2V 2Y3"
  ],
  email: "Yvonne.Jones@parl.gc.ca"
},
{
  name: "The Honourable Denis Lebel",
  id: "38633",
  party: "Conservative",
  riding: "Lac-Saint-Jean",
  riding_id: "671",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LebelDenis_CPC.jpg",
  phone: "418-275-2768",
  address: [
  "797 Saint-Joseph Blvd (Main Office)",
  "Suite 102",
  "Roberval, Quebec",
  "G8H 2L4",
  "173 St-Michel Blvd ",
  "Dolbeau-Mistassini, Quebec",
  "G8L 4N9",
  "570 de l'Aéroport Road ",
  "Suite 112",
  "Alma, Quebec",
  "G8B 5V2"
  ],
  email: "denis.lebel@parl.gc.ca"
},
{
  name: "Francis Scarpaleggia",
  id: "25453",
  party: "Liberal",
  riding: "Lac-Saint-Louis",
  riding_id: "672",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ScarpaleggiaFrancis_Lib.jpg",
  phone: "514-695-6661",
  address: [
  "1 Holiday Avenue (Main Office)",
  "635 East Tower",
  "Pointe-Claire, Quebec",
  "H9R 5N3"
  ],
  email: "francis.scarpaleggia@parl.gc.ca"
},
{
  name: "Shannon Stubbs",
  id: "89198",
  party: "Conservative",
  riding: "Lakeland",
  riding_id: "888",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StubbsShannon_CPC.jpg",
  phone: "780-657-7075",
  address: [
  "5009 - 40 Street (Main Office)",
  "Two Hills, Alberta",
  "T0B 4K0"
  ],
  email: "Shannon.Stubbs@parl.gc.ca"
},
{
  name: "Bev Shipley",
  id: "31664",
  party: "Conservative",
  riding: "Lambton—Kent—Middlesex",
  riding_id: "762",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ShipleyBev_CPC.jpg",
  phone: "",
  address: [
  "380 Albert Street (Main Office)",
  "Strathroy, Ontario",
  "N7G 1W7",
  "Telephone: 1-800-586-4614",
  "21 Arnold Street ",
  "Suite 5",
  "Wallaceburg, Ontario",
  "N7G 3P3",
  "Telephone: 1-800-585-2640"
  ],
  email: "bev.shipley@parl.gc.ca"
},
{
  name: "Scott Reid",
  id: "1827",
  party: "Conservative",
  riding: "Lanark—Frontenac—Kingston",
  riding_id: "763",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ReidScott_CPC.jpg",
  phone: "",
  address: [ ],
  email: "scott.reid@parl.gc.ca"
},
{
  name: "Mark Warawa",
  id: "25467",
  party: "Conservative",
  riding: "Langley—Aldergrove",
  riding_id: "913",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WarawaMark_CPC.jpg",
  phone: "604-534-5955",
  address: [
  "4769 - 222nd Street (Main Office)",
  "Suite 104",
  "Langley, British Columbia",
  "V2Z 3C1"
  ],
  email: "mark.warawa@parl.gc.ca"
},
{
  name: "David Lametti",
  id: "88501",
  party: "Liberal",
  riding: "LaSalle—Émard—Verdun",
  riding_id: "673",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LamettiDavid_Lib.jpg",
  phone: "514-363-0954",
  address: [
  "6415 Monk Blvd. (Main Office)",
  "Montréal, Quebec",
  "H4E 3H8"
  ],
  email: "David.Lametti@parl.gc.ca"
},
{
  name: "David de Burgh Graham",
  id: "88504",
  party: "Liberal",
  riding: "Laurentides—Labelle",
  riding_id: "674",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GrahamDavid_Lib.jpg",
  phone: "819-440-3091",
  address: [
  "80A Norbert-Morin Blvd (Main Office)",
  "Sainte-Agathe-des-Monts, Quebec",
  "J8C 2V8",
  "424 du Pont Street ",
  "Mont-Laurier, Quebec",
  "J9L 2R7"
  ],
  email: "David.Graham@parl.gc.ca"
},
{
  name: "Hélène Laverdière",
  id: "71434",
  party: "NDP",
  riding: "Laurier—Sainte-Marie",
  riding_id: "675",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LaverdièreHélène_NDP.jpg",
  phone: "514-522-1339",
  address: [
  "1001 Maisonneuve Blvd East (Main Office)",
  "suite 507",
  "Montréal, Quebec",
  "H2L 4P9"
  ],
  email: "Helene.Laverdiere@parl.gc.ca"
},
{
  name: "Fayçal El-Khoury",
  id: "88515",
  party: "Liberal",
  riding: "Laval—Les Îles",
  riding_id: "676",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ElKhouryFayçal_Lib.jpg",
  phone: "450-689-4594",
  address: [
  "674 Place Publique (Main Office)",
  "Suite 200",
  "Laval, Quebec",
  "H7X 1G1"
  ],
  email: "Faycal.El-Khoury@parl.gc.ca"
},
{
  name: "Gordon Brown",
  id: "25483",
  party: "Conservative",
  riding: "Leeds—Grenville—Thousand Islands and Rideau Lakes",
  riding_id: "764",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrownGordon_CPC.jpg",
  phone: "613-498-3096",
  address: [
  "2399 Parkedale Avenue (Main Office)",
  "Suite 120",
  "Brockville, Ontario",
  "K6V 3G9"
  ],
  email: "gord.brown@parl.gc.ca"
},
{
  name: "Rachael Harder",
  id: "89200",
  party: "Conservative",
  riding: "Lethbridge",
  riding_id: "889",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HarderRachael_CPC.jpg",
  phone: "403-320-0070",
  address: [
  "255 - 8th Street South (Main Office)",
  "Lethbridge, Alberta",
  "T1J 4Y1"
  ],
  email: "Rachael.Harder@parl.gc.ca"
},
{
  name: "Jacques Gourde",
  id: "35397",
  party: "Conservative",
  riding: "Lévis—Lotbinière",
  riding_id: "678",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GourdeJaques_CPC.jpg",
  phone: "418-836-0970",
  address: [
  "2677 Lagueux Road (Main Office)",
  "Lévis, Quebec",
  "G6J 1B7"
  ],
  email: "jacques.gourde@parl.gc.ca"
},
{
  name: "Peter Fragiskatos",
  id: "88827",
  party: "Liberal",
  riding: "London North Centre",
  riding_id: "766",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FragiskatosPeter_Lib.jpg",
  phone: "519-663-9777",
  address: [
  "885 Adelaide Street North (Main Office)",
  "London, Ontario",
  "N5Y 2M2"
  ],
  email: "Peter.Fragiskatos@parl.gc.ca"
},
{
  name: "Kate Young",
  id: "88832",
  party: "Liberal",
  riding: "London West",
  riding_id: "767",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/YoungKate_Lib.jpg",
  phone: "519-473-5955",
  address: [
  "390 Commissioners Road West (Main Office)",
  "Suite 200",
  "London, Ontario",
  "N6J 1Y3"
  ],
  email: "Kate.Young@parl.gc.ca"
},
{
  name: "Irene Mathyssen",
  id: "764",
  party: "NDP",
  riding: "London—Fanshawe",
  riding_id: "765",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MathyssenIrene_NDP.jpg",
  phone: "519-685-4745",
  address: [
  "1700 Dundas Street (Main Office)",
  "Unit D",
  "London, Ontario",
  "N5W 3C9"
  ],
  email: "irene.mathyssen@parl.gc.ca"
},
{
  name: "Gudie Hutchings",
  id: "88292",
  party: "Liberal",
  riding: "Long Range Mountains",
  riding_id: "609",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HutchingsGudie_Lib.jpg",
  phone: "709-637-4540",
  address: [
  "49-51 Park Street (Main Office)",
  "Corner Brook, Newfoundland and Labrador",
  "A2H 2X1"
  ],
  email: "Gudie.Hutchings@parl.gc.ca"
},
{
  name: "Sherry Romanado",
  id: "88521",
  party: "Liberal",
  riding: "Longueuil—Charles-LeMoyne",
  riding_id: "677",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RomanadoSherry_Lib.jpg",
  phone: "450-671-1222",
  address: [
  "2120 Victoria Avenue (Main Office)",
  "Suite 150",
  "Greenfield Park, Quebec",
  "J4V 1M9"
  ],
  email: "Sherry.Romanado@parl.gc.ca"
},
{
  name: "Pierre Nantel",
  id: "71447",
  party: "NDP",
  riding: "Longueuil—Saint-Hubert",
  riding_id: "679",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NantelPierre_NDP.jpg",
  phone: "450-928-4288",
  address: [
  "192 Saint-Jean Street (Main Office)",
  "Suite 200",
  "Longueuil, Quebec",
  "J4H 2X5"
  ],
  email: "Pierre.Nantel@parl.gc.ca"
},
{
  name: "Joël Lightbound",
  id: "88532",
  party: "Liberal",
  riding: "Louis-Hébert",
  riding_id: "680",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LightboundJoël_Lib.jpg",
  phone: "418-648-3244",
  address: [
  "3700 du Campanile Street (Main Office)",
  "Suite 110",
  "Québec, Quebec",
  "G1X 4G6"
  ],
  email: "Joel.Lightbound@parl.gc.ca"
},
{
  name: "Gérard Deltell",
  id: "88535",
  party: "Conservative",
  riding: "Louis-Saint-Laurent",
  riding_id: "681",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DeltellGérard_CPC.jpg",
  phone: "418-842-5552",
  address: [
  "9195 de L'Ormière Blvd. (Main Office)",
  "Suite 200",
  "Québec, Quebec",
  "G2B 3K2"
  ],
  email: "Gerard.Deltell@parl.gc.ca"
},
{
  name: "René Arseneault",
  id: "89383",
  party: "Liberal",
  riding: "Madawaska—Restigouche",
  riding_id: "631",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ArseneaultRené_Lib.jpg",
  phone: "506-739-0285",
  address: [
  "19 Aberdeen Street (Main Office)",
  "Suite 204",
  "Campbellton, New Brunswick",
  "E3N 3G4",
  "71 St-François Street ",
  "Edmundston, New Brunswick",
  "E3V 1E5"
  ],
  email: "Rene.Arseneault@parl.gc.ca"
},
{
  name: "The Honourable Wayne Easter",
  id: "43",
  party: "Liberal",
  riding: "Malpeque",
  riding_id: "615",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EasterWayne_Lib.jpg",
  phone: "",
  address: [
  "4283 Route 13 (Main Office)",
  "Unit 1",
  "Hunter River, Prince Edward Island",
  "C0A 1N0",
  "Telephone: 1-800-442-4050"
  ],
  email: "wayne.easter@parl.gc.ca"
},
{
  name: "Marilène Gill",
  id: "88538",
  party: "Bloc Québécois",
  riding: "Manicouagan",
  riding_id: "682",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GillMarilène_BQ.jpg",
  phone: "418-960-1411",
  address: [
  "955 de Parfondeval Street (Main Office)",
  "Baie-Comeau, Quebec",
  "G5C 2W8",
  "700 Laure Blvd ",
  "Suite 235",
  "Sept-Îles, Quebec",
  "G4R 1Y5"
  ],
  email: "Marilene.Gill@parl.gc.ca"
},
{
  name: "Yves Robillard",
  id: "88617",
  party: "Liberal",
  riding: "Marc-Aurèle-Fortin",
  riding_id: "701",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RobillardYves_Lib.jpg",
  phone: "450-622-2992",
  address: [
  "2968 Dagenais Blvd West (Main Office)",
  "Suite 101",
  "Laval, Quebec",
  "H7P 1T1"
  ],
  email: "Yves.Robillard@parl.gc.ca"
},
{
  name: "The Honourable Jane Philpott",
  id: "88835",
  party: "Liberal",
  riding: "Markham—Stouffville",
  riding_id: "768",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PhilpottJane_Lib.jpg",
  phone: "905-640-1125",
  address: [
  "6060 Main Street (Main Office)",
  "Stouffville, Ontario",
  "L4A 1B8"
  ],
  email: "Jane.Philpott@parl.gc.ca"
},
{
  name: "The Honourable John McCallum",
  id: "1817",
  party: "Liberal",
  riding: "Markham—Thornhill",
  riding_id: "769",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McCallumJohn_LIB.jpg",
  phone: "905-479-8100",
  address: [
  "7750 Birchmount Road (Main Office)",
  "Unit 21-22",
  "Markham, Ontario",
  "L3R 0B4"
  ],
  email: "john.mccallum@parl.gc.ca"
},
{
  name: "Bob Saroya",
  id: "58878",
  party: "Conservative",
  riding: "Markham—Unionville",
  riding_id: "770",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SaroyaBob_CPC.jpg",
  phone: "905-470-2024",
  address: [
  "8300 Woodbine Avenue (Main Office)",
  "Suite 201",
  "Markham, Ontario",
  "L3R 9Y7"
  ],
  email: "Bob.Saroya@parl.gc.ca"
},
{
  name: "Luc Berthold",
  id: "88541",
  party: "Conservative",
  riding: "Mégantic—L'Érable",
  riding_id: "683",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BertholdLuc_CPC.jpg",
  phone: "819-583-0074",
  address: [
  "105A Notre-Dame Street East (Main Office)",
  "Thetford Mines, Quebec",
  "G6G 2J9",
  "1470 Trudelle Avenue ",
  "Suite 302",
  "Plessisville, Quebec",
  "G6L 3K4",
  "5527 Frontenac Street ",
  "Suite 212",
  "Lac-Mégantic, Quebec",
  "G6B 1H6"
  ],
  email: "Luc.Berthold@parl.gc.ca"
},
{
  name: "The Honourable Lisa Raitt",
  id: "54325",
  party: "Conservative",
  riding: "Milton",
  riding_id: "771",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RaittLisa_CPC.jpg",
  phone: "905-693-0166",
  address: [
  "86 Main Street East (Main Office)",
  "Milton, Ontario",
  "L9T 1N3"
  ],
  email: "lisa.raitt@parl.gc.ca"
},
{
  name: "Simon Marcil",
  id: "88544",
  party: "Bloc Québécois",
  riding: "Mirabel",
  riding_id: "684",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MarcilSimon_BQ.jpg",
  phone: "450-430-5535",
  address: [
  "13479 Curé-Labelle Blvd (Main Office)",
  "Suite 102",
  "Mirabel, Quebec",
  "J7J 1H1"
  ],
  email: "Simon.Marcil@parl.gc.ca"
},
{
  name: "Pat Finnigan",
  id: "88360",
  party: "Liberal",
  riding: "Miramichi—Grand Lake",
  riding_id: "632",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FinniganPat_Lib.jpg",
  phone: "506-778-8448",
  address: [
  "514 Water Street (Main Office)",
  "Miramichi, New Brunswick",
  "E1V 3G5"
  ],
  email: "Pat.Finnigan@parl.gc.ca"
},
{
  name: "Jati Sidhu",
  id: "89288",
  party: "Liberal",
  riding: "Mission—Matsqui—Fraser Canyon",
  riding_id: "914",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SidhuJati_Lib.jpg",
  phone: "604-814-5710",
  address: [
  "32081 Lougheed Highway (Main Office)",
  "Suite B3",
  "Mission, British Columbia",
  "V2V 1A3"
  ],
  email: "Jati.Sidhu@parl.gc.ca"
},
{
  name: "Omar Alghabra",
  id: "89535",
  party: "Liberal",
  riding: "Mississauga Centre",
  riding_id: "772",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlghabraOmar_Lib.jpg",
  phone: "905-848-8595",
  address: [
  "151 City Centre Drive (Main Office)",
  "Suite 400",
  "Mississauga, Ontario",
  "L5B 1M7"
  ],
  email: "Omar.Alghabra@parl.gc.ca"
},
{
  name: "Peter Fonseca",
  id: "71692",
  party: "Liberal",
  riding: "Mississauga East—Cooksville",
  riding_id: "773",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FonsecaPeter_Lib.jpg",
  phone: "905-566-0009",
  address: [
  "918 Dundas Street East (Main Office)",
  "Suite 303",
  "Mississauga, Ontario",
  "L4Y 4H9"
  ],
  email: "Peter.Fonseca@parl.gc.ca"
},
{
  name: "Iqra Khalid",
  id: "88849",
  party: "Liberal",
  riding: "Mississauga—Erin Mills",
  riding_id: "774",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KhalidIqra_Lib.jpg",
  phone: "905-820-8814",
  address: [
  "3100 Ridgeway Drive (Main Office)",
  "Suite 35",
  "Mississauga, Ontario",
  "L5L 5M5"
  ],
  email: "Iqra.Khalid@parl.gc.ca"
},
{
  name: "Sven Spengemann",
  id: "88852",
  party: "Liberal",
  riding: "Mississauga—Lakeshore",
  riding_id: "775",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SpengemannSven_Lib.jpg",
  phone: "905-273-8033",
  address: [
  "1077 North Service Road (Main Office)",
  "Suite 30",
  "Mississauga, Ontario",
  "L4Y 1A6"
  ],
  email: "Sven.Spengemann@parl.gc.ca"
},
{
  name: "The Honourable Navdeep Bains",
  id: "25471",
  party: "Liberal",
  riding: "Mississauga—Malton",
  riding_id: "776",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BainsNavdeep_Lib.jpg",
  phone: "905-564-0228",
  address: [
  "6660 Kennedy Road (Main Office)",
  "Unit 210",
  "Mississauga, Ontario",
  "L5T 2M9"
  ],
  email: "Navdeep.Bains@parl.gc.ca"
},
{
  name: "Gagan Sikand",
  id: "88858",
  party: "Liberal",
  riding: "Mississauga—Streetsville",
  riding_id: "777",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SikandGagan_Lib.jpg",
  phone: "905-812-1811",
  address: [
  "6990 Financial Drive (Main Office)",
  "Unit 8G",
  "Mississauga, Ontario",
  "L5N 8J4"
  ],
  email: "Gagan.Sikand@parl.gc.ca"
},
{
  name: "The Honourable Ginette Petitpas Taylor",
  id: "88364",
  party: "Liberal",
  riding: "Moncton—Riverview—Dieppe",
  riding_id: "633",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PetitpasTaylorGinette_Lib.jpg",
  phone: "506-851-3310",
  address: [
  "272 St-George Street (Main Office)",
  "Suite 110",
  "Moncton, New Brunswick",
  "E1C 1W6"
  ],
  email: "Ginette.PetitpasTaylor@parl.gc.ca"
},
{
  name: "Michel Picard",
  id: "71529",
  party: "Liberal",
  riding: "Montarville",
  riding_id: "685",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PicardMichel_Lib.jpg",
  phone: "450-653-8383",
  address: [
  "1428 Montarville Street (Main Office)",
  "Suite 203",
  "Saint-Bruno-de-Montarville, Quebec",
  "J3V 3T5"
  ],
  email: "Michel.Picard@parl.gc.ca"
},
{
  name: "Luc Thériault",
  id: "88552",
  party: "Bloc Québécois",
  riding: "Montcalm",
  riding_id: "686",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ThériaultLuc_BQ.jpg",
  phone: "",
  address: [
  "1095 Montée Masson (Main Office)",
  "Mascouche, Quebec",
  "J7K 2M1",
  "Telephone: 1-800-263-5726"
  ],
  email: "Luc.Theriault@parl.gc.ca"
},
{
  name: "Bernard Généreux",
  id: "63908",
  party: "Conservative",
  riding: "Montmagny—L'Islet—Kamouraska—Rivière-du-Loup",
  riding_id: "687",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GénéreuxBernard_CPC.jpg",
  phone: "418-868-1280",
  address: [
  "6 St-Jean Baptiste Street East (Main Office)",
  "Suite 101",
  "Montmagny, Quebec",
  "G5V 1J7",
  "277 Lafontaine Street ",
  "Riviere-du-loup, Quebec",
  "G5R 3A9"
  ],
  email: "Bernard.Genereux@parl.gc.ca"
},
{
  name: "Tom Lukiwski",
  id: "25520",
  party: "Conservative",
  riding: "Moose Jaw—Lake Centre—Lanigan",
  riding_id: "854",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LukiwskiTom_CPC.jpg",
  phone: "306-691-3577",
  address: [
  "54 Stadacona Street W. (Main Office)",
  "Suite 1",
  "Moose Jaw, Saskatchewan",
  "S6H 1Z1"
  ],
  email: "tom.lukiwski@parl.gc.ca"
},
{
  name: "Anthony Housefather",
  id: "88558",
  party: "Liberal",
  riding: "Mount Royal",
  riding_id: "688",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HousefatherAnthony_Lib.jpg",
  phone: "514-283-0171",
  address: [
  "4770 Kent Avenue (Main Office)",
  "Suite 316",
  "Montréal, Quebec",
  "H3W 1H2"
  ],
  email: "Anthony.Housefather@parl.gc.ca"
},
{
  name: "Sheila Malcolmson",
  id: "89486",
  party: "NDP",
  riding: "Nanaimo—Ladysmith",
  riding_id: "915",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MalcolmsonSheila_NDP.jpg",
  phone: "250-734-6400",
  address: [
  "495 Dunsmuir Street (Main Office)",
  "Suite 103",
  "Nanaimo, British Columbia",
  "V9R 6B9"
  ],
  email: "Sheila.Malcolmson@parl.gc.ca"
},
{
  name: "Chandra Arya",
  id: "88860",
  party: "Liberal",
  riding: "Nepean",
  riding_id: "778",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AryaChandra_Lib.jpg",
  phone: "613-825-5505",
  address: [
  "240 Kennevale Drive (Main Office)",
  "Suite 201A",
  "Nepean, Ontario",
  "K2J 6B6"
  ],
  email: "Chandra.Arya@parl.gc.ca"
},
{
  name: "Karen Ludwig",
  id: "88365",
  party: "Liberal",
  riding: "New Brunswick Southwest",
  riding_id: "634",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LudwigKaren_Lib.jpg",
  phone: "506-738-3634",
  address: [
  "49 King Street (Main Office)",
  "St. Stephen, New Brunswick",
  "E3L 2C1",
  "192 River Valley Drive ",
  "Suite 1",
  "Grand Bay - Westfield, New Brunswick",
  "E5K 1A4"
  ],
  email: "Karen.Ludwig@parl.gc.ca"
},
{
  name: "Peter Julian",
  id: "16399",
  party: "NDP",
  riding: "New Westminster—Burnaby",
  riding_id: "916",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JulianPeter_NDP.jpg",
  phone: "604-775-5707",
  address: [
  "888 Carnarvon Street (Main Office)",
  "Suite 110",
  "New Westminster, British Columbia",
  "V3M 0C6"
  ],
  email: "peter.julian@parl.gc.ca"
},
{
  name: "Kyle Peterson",
  id: "71702",
  party: "Liberal",
  riding: "Newmarket—Aurora",
  riding_id: "779",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PetersonKyle_Lib.jpg",
  phone: "905-953-7515",
  address: [
  "16600 Bayview Avenue (Main Office)",
  "Suite 202",
  "Newmarket, Ontario",
  "L3X 1Z9"
  ],
  email: "Kyle.Peterson@parl.gc.ca"
},
{
  name: "Vance Badawey",
  id: "88867",
  party: "Liberal",
  riding: "Niagara Centre",
  riding_id: "780",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BadaweyVance_Lib.jpg",
  phone: "905-788-2204",
  address: [
  "136 East Main Street (Main Office)",
  "Suite 103",
  "Welland, Ontario",
  "L3B 3W6"
  ],
  email: "Vance.Badawey@parl.gc.ca"
},
{
  name: "The Honourable Rob Nicholson",
  id: "820",
  party: "Conservative",
  riding: "Niagara Falls",
  riding_id: "781",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NicholsonRob_CPC.jpg",
  phone: "",
  address: [ ],
  email: "rob.nicholson@parl.gc.ca"
},
{
  name: "Dean Allison",
  id: "25446",
  party: "Conservative",
  riding: "Niagara West",
  riding_id: "782",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AllisonDean_CPC.jpg",
  phone: "905-563-7900",
  address: [
  "4994 King Street (Main Office)",
  "Beamsville, Ontario",
  "L0R 1B0"
  ],
  email: "dean.allison@parl.gc.ca"
},
{
  name: "Marc Serré",
  id: "88874",
  party: "Liberal",
  riding: "Nickel Belt",
  riding_id: "783",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SerréMarc_Lib.jpg",
  phone: "705-580-2584",
  address: [
  "2945 Highway 69 North (Main Office)",
  "Suite 203",
  "Val Caron, Ontario",
  "P3N 1N3",
  "94 King Street ",
  "Suite 1",
  "Sturgeon Falls, Ontario",
  "P2B 2Z5"
  ],
  email: "Marc.Serre@parl.gc.ca"
},
{
  name: "Anthony Rota",
  id: "25452",
  party: "Liberal",
  riding: "Nipissing—Timiskaming",
  riding_id: "784",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RotaAnthony_Lib.jpg",
  phone: "705-647-6262",
  address: [
  "375 Main Street West (Main Office)",
  "North Bay, Ontario",
  "P1B 2T9",
  "112 Whitewood Avenue ",
  "Temiskaming Shores, Ontario",
  "P0J 1P0"
  ],
  email: "Anthony.Rota@parl.gc.ca"
},
{
  name: "Rachel Blaney",
  id: "89354",
  party: "NDP",
  riding: "North Island—Powell River",
  riding_id: "934",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlaneyRachel_NDP.jpg",
  phone: "250-287-9388",
  address: [
  "908 Island Highway (Main Office)",
  "Campbell River, British Columbia",
  "V9W 4B2"
  ],
  email: "Rachel.Blaney@parl.gc.ca"
},
{
  name: "Mel Arnold",
  id: "89294",
  party: "Conservative",
  riding: "North Okanagan—Shuswap",
  riding_id: "917",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ArnoldMel_CPC.jpg",
  phone: "250-260-5020",
  address: [
  "3105 - 29th Street (Main Office)",
  "Vernon, British Columbia",
  "V1T 5A8"
  ],
  email: "Mel.Arnold@parl.gc.ca"
},
{
  name: "Jonathan Wilkinson",
  id: "89300",
  party: "Liberal",
  riding: "North Vancouver",
  riding_id: "918",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WilkinsonJonathan_Lib.jpg",
  phone: "604-775-6333",
  address: [
  "102 - 3rd Street West (Main Office)",
  "North Vancouver, British Columbia",
  "V7M 1E8"
  ],
  email: "Jonathan.Wilkinson@parl.gc.ca"
},
{
  name: "Kim Rudd",
  id: "71718",
  party: "Liberal",
  riding: "Northumberland—Peterborough South",
  riding_id: "785",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RuddKim_Lib.jpg",
  phone: "905-372-8757",
  address: [
  "12 Elgin Street East (Main Office)",
  "Unit No. 4",
  "Cobourg, Ontario",
  "K9A 0C5"
  ],
  email: "Kim.Rudd@parl.gc.ca"
},
{
  name: "Michael V. McLeod",
  id: "89374",
  party: "Liberal",
  riding: "Northwest Territories",
  riding_id: "941",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McLeodMichael_Lib.jpg",
  phone: "867-873-6995",
  address: [
  "5109 - 48th Street (Main Office)",
  "Suite 114",
  "Yellowknife, Northwest Territories",
  "X1A 1N5"
  ],
  email: "Michael.McLeod@parl.gc.ca"
},
{
  name: "The Honourable Marc Garneau",
  id: "10524",
  party: "Liberal",
  riding: "Notre-Dame-de-Grâce—Westmount",
  riding_id: "689",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GarneauMarc_Lib.jpg",
  phone: "514-283-2013",
  address: [
  "4060 Sainte-Catherine Street West (Main Office)",
  "Suite 340",
  "Westmount, Quebec",
  "H3Z 2Z3"
  ],
  email: "marc.garneau@parl.gc.ca"
},
{
  name: "The Honourable Hunter Tootoo",
  id: "1665",
  party: "Liberal",
  riding: "Nunavut",
  riding_id: "942",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TootooHunter_Lib.jpg",
  phone: "867-979-4193",
  address: [
  "922 Niagunngusiaq Road (Main Office)",
  "Suite 101",
  "Iqaluit, Nunavut",
  "X0A 0H0"
  ],
  email: "Hunter.Tootoo@parl.gc.ca"
},
{
  name: "John Oliver",
  id: "88881",
  party: "Liberal",
  riding: "Oakville",
  riding_id: "786",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OliverJohn_Lib.jpg",
  phone: "905-338-2008",
  address: [
  "301 Robinson Street (Main Office)",
  "Oakville, Ontario",
  "L6J 1G7"
  ],
  email: "John.Oliver@parl.gc.ca"
},
{
  name: "Pam Damoff",
  id: "88884",
  party: "Liberal",
  riding: "Oakville North—Burlington",
  riding_id: "787",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DamoffPam_Lib.jpg",
  phone: "905-847-4043",
  address: [
  "2525 Old Bronte Road (Main Office)",
  "Suite 590",
  "Oakville, Ontario",
  "L6M 4J2"
  ],
  email: "Pam.Damoff@parl.gc.ca"
},
{
  name: "The Honourable Andrew Leslie",
  id: "88894",
  party: "Liberal",
  riding: "Orléans",
  riding_id: "790",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LeslieAndrew_Lib.jpg",
  phone: "613-834-1800",
  address: [
  "255 Centrum Blvd (Main Office)",
  "Orléans, Ontario",
  "K1E 3W3"
  ],
  email: "Andrew.Leslie@parl.gc.ca"
},
{
  name: "Colin Carrie",
  id: "25486",
  party: "Conservative",
  riding: "Oshawa",
  riding_id: "788",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CarrieColin_CPC.jpg",
  phone: "905-440-4868",
  address: [
  "57 Simcoe Street South (Main Office)",
  "Suite 2B",
  "Oshawa, Ontario",
  "L1H 4G4"
  ],
  email: "colin.carrie@parl.gc.ca"
},
{
  name: "The Honourable Catherine McKenna",
  id: "88892",
  party: "Liberal",
  riding: "Ottawa Centre",
  riding_id: "789",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McKennaCatherine_Lib.jpg",
  phone: "613-946-8682",
  address: [
  "107 Catherine Street (Main Office)",
  "Ottawa, Ontario",
  "K2P 0P4"
  ],
  email: "Catherine.McKenna@parl.gc.ca"
},
{
  name: "David J. McGuinty",
  id: "9486",
  party: "Liberal",
  riding: "Ottawa South",
  riding_id: "791",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McGuintyDavid_Lib.jpg",
  phone: "613-990-8640",
  address: [
  "1883 Bank Street (Main Office)",
  "Unit A",
  "Ottawa, Ontario",
  "K1V 7Z9"
  ],
  email: "david.mcguinty@parl.gc.ca"
},
{
  name: "Anita Vandenbeld",
  id: "71738",
  party: "Liberal",
  riding: "Ottawa West—Nepean",
  riding_id: "793",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VandenbeldAnita_Lib.jpg",
  phone: "613-990-7720",
  address: [
  "1315 Richmond road (Main Office)",
  "Ottawa, Ontario",
  "K2B 7Y4"
  ],
  email: "Anita.Vandenbeld@parl.gc.ca"
},
{
  name: "The Honourable Mauril Bélanger",
  id: "873",
  party: "Liberal",
  riding: "Ottawa—Vanier",
  riding_id: "792",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BélangerMauril_Lib.jpg",
  phone: "613-947-7961",
  address: [
  "168 Charlotte Street (Main Office)",
  "Suite 504",
  "Ottawa, Ontario",
  "K1N 8K6"
  ],
  email: "mauril.belanger@parl.gc.ca"
},
{
  name: "The Honourable Thomas J. Mulcair",
  id: "26684",
  party: "NDP",
  riding: "Outremont",
  riding_id: "690",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MulcairThomas_NDP.jpg",
  phone: "514-736-2727",
  address: [
  "154 Laurier Avenue West (Main Office)",
  "Suite 302",
  "Montréal, Quebec",
  "H2T 2N7"
  ],
  email: "thomas.mulcair@parl.gc.ca"
},
{
  name: "Dave MacKenzie",
  id: "891",
  party: "Conservative",
  riding: "Oxford",
  riding_id: "794",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacKenzieDave_CPC.jpg",
  phone: "",
  address: [ ],
  email: "dave.mackenzie@parl.gc.ca"
},
{
  name: "The Right Honourable Justin Trudeau",
  id: "58733",
  party: "Liberal",
  riding: "Papineau",
  riding_id: "691",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TrudeauJustin_LIB.jpg",
  phone: "514-277-6020",
  address: [
  "529 Jarry Street East (Main Office)",
  "Suite 302",
  "Montréal, Quebec",
  "H2P 1V4"
  ],
  email: "justin.trudeau@parl.gc.ca"
},
{
  name: "Arif Virani",
  id: "88910",
  party: "Liberal",
  riding: "Parkdale—High Park",
  riding_id: "795",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ViraniArif_Lib.jpg",
  phone: "416-769-5072",
  address: [
  "1596 Bloor Street West (Main Office)",
  "Toronto, Ontario",
  "M6P 1A7"
  ],
  email: "Arif.Virani@parl.gc.ca"
},
{
  name: "The Honourable Tony Clement",
  id: "15975",
  party: "Conservative",
  riding: "Parry Sound—Muskoka",
  riding_id: "796",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ClementTony_CPC.jpg",
  phone: "",
  address: [ ],
  email: "tony.clement@parl.gc.ca"
},
{
  name: "Arnold Viersen",
  id: "89211",
  party: "Conservative",
  riding: "Peace River—Westlock",
  riding_id: "891",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ViersenArnold_CPC.jpg",
  phone: "",
  address: [
  "5124 - 50th Street, Box 4458 (Main Office)",
  "Barrhead, Alberta",
  "T7N 1A3",
  "Telephone: 1-800-667-8450"
  ],
  email: "Arnold.Viersen@parl.gc.ca"
},
{
  name: "John Nater",
  id: "88917",
  party: "Conservative",
  riding: "Perth—Wellington",
  riding_id: "797",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NaterJohn_CPC.jpg",
  phone: "519-338-3589",
  address: [
  "59 Lorne Avenue East (Main Office)",
  "Unit A",
  "Stratford, Ontario",
  "N5A 6S4",
  "39 Elora Street South ",
  "Unit 1",
  "Harriston, Ontario",
  "N0G 1Z0"
  ],
  email: "John.Nater@parl.gc.ca"
},
{
  name: "The Honourable Maryam Monsef",
  id: "88922",
  party: "Liberal",
  riding: "Peterborough—Kawartha",
  riding_id: "798",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MonsefMaryam_Lib.jpg",
  phone: "705-745-2108",
  address: [
  "417 Bethune Street (Main Office)",
  "Suite 4",
  "Peterborough, Ontario",
  "K9H 3Z1"
  ],
  email: "Maryam.Monsef@parl.gc.ca"
},
{
  name: "Jennifer O'Connell",
  id: "88925",
  party: "Liberal",
  riding: "Pickering—Uxbridge",
  riding_id: "799",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OConnellJennifer_Lib.jpg",
  phone: "905-839-2878",
  address: [
  "1154 Kingston Road (Main Office)",
  "Unit 4",
  "Pickering, Ontario",
  "L1V 1B4"
  ],
  email: "Jennifer.OConnell@parl.gc.ca"
},
{
  name: "Xavier Barsalou-Duval",
  id: "88422",
  party: "Bloc Québécois",
  riding: "Pierre-Boucher—Les Patriotes—Verchères",
  riding_id: "650",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BarsalouDuvalXavier_BQ.jpg",
  phone: "450-652-4442",
  address: [
  "1625 Lionel-Boulet Blvd. (Main Office)",
  "Suite 202",
  "Varennes, Quebec",
  "J3X 1P7"
  ],
  email: "Xavier.Barsalou-Duval@parl.gc.ca"
},
{
  name: "Frank Baylis",
  id: "88578",
  party: "Liberal",
  riding: "Pierrefonds—Dollard",
  riding_id: "692",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BaylisFrank_Lib.jpg",
  phone: "514-624-5725",
  address: [
  "3883 Blvd St-Jean (Main Office)",
  "Suite 501",
  "Dollard-des-Ormeaux, Quebec",
  "H9G 3B9"
  ],
  email: "Frank.Baylis@parl.gc.ca"
},
{
  name: "Dan Ruimy",
  id: "89304",
  party: "Liberal",
  riding: "Pitt Meadows—Maple Ridge",
  riding_id: "919",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RuimyDan_Lib.jpg",
  phone: "604-466-2761",
  address: [
  "22369 Lougheed Hwy (Main Office)",
  "Maple Ridge, British Columbia",
  "V2X 2T3"
  ],
  email: "Dan.Ruimy@parl.gc.ca"
},
{
  name: "William Amos",
  id: "89527",
  party: "Liberal",
  riding: "Pontiac",
  riding_id: "693",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AmosWilliam_Lib.jpg",
  phone: "819-648-2138",
  address: [
  "164 Old Chelsea Road (Main Office)",
  "Chelsea, Quebec",
  "J9B 1J4",
  "87-D St Joseph Street ",
  "Gracefield, Quebec",
  "J0X 1W0",
  "110 Front Street ",
  "Campbell's Bay, Quebec",
  "J0X 1V0"
  ],
  email: "William.Amos@parl.gc.ca"
},
{
  name: "Fin Donnelly",
  id: "63592",
  party: "NDP",
  riding: "Port Moody—Coquitlam",
  riding_id: "920",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DonnellyFin_NDP.jpg",
  phone: "604-664-9229",
  address: [
  "1116 Austin Avenue (Main Office)",
  "Coquitlam, British Columbia",
  "V3K 3P5"
  ],
  email: "fin.donnelly@parl.gc.ca"
},
{
  name: "The Honourable Candice Bergen",
  id: "59110",
  party: "Conservative",
  riding: "Portage—Lisgar",
  riding_id: "842",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BergenCandice_CPC.jpg",
  phone: "",
  address: [ ],
  email: "candice.bergen@parl.gc.ca"
},
{
  name: "Joël Godin",
  id: "89407",
  party: "Conservative",
  riding: "Portneuf—Jacques-Cartier",
  riding_id: "694",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GodinJoël_CPC.jpg",
  phone: "418-870-1571",
  address: [
  "334 Road 138 (Main Office)",
  "Unit 230",
  "Saint-Augustin-de-Desmaures, Quebec",
  "G3A 1G8"
  ],
  email: "Joel.Godin@parl.gc.ca"
},
{
  name: "Randy Hoback",
  id: "59148",
  party: "Conservative",
  riding: "Prince Albert",
  riding_id: "855",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HobackRandy_CPC.jpg",
  phone: "",
  address: [ ],
  email: "randy.hoback@parl.gc.ca"
},
{
  name: "Bob Zimmer",
  id: "72035",
  party: "Conservative",
  riding: "Prince George—Peace River—Northern Rockies",
  riding_id: "921",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ZimmerBob_CPC.jpg",
  phone: "250-719-6848",
  address: [
  "9916 - 100th Avenue (Main Office)",
  "Fort St John, British Columbia",
  "V1J 1Y5",
  "1520 - 3rd Avenue ",
  "Prince George, British Columbia",
  "V2L 3G4",
  "Telephone: 1-855-767-4567",
  "10421 - 10th Street ",
  "Dawson Creek, British Columbia",
  "V1G 3T4"
  ],
  email: "Bob.Zimmer@parl.gc.ca"
},
{
  name: "Ted Falk",
  id: "84672",
  party: "Conservative",
  riding: "Provencher",
  riding_id: "843",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FalkTed_CPC.jpg",
  phone: "204-326-9889",
  address: [
  "76 Provincial Trunk Hwy 12 N (Main Office)",
  "Steinbach, Manitoba",
  "R5G 1T4"
  ],
  email: "Ted.Falk@parl.gc.ca"
},
{
  name: "The Honourable Jean-Yves Duclos",
  id: "89408",
  party: "Liberal",
  riding: "Québec",
  riding_id: "695",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuclosJeanYves_Lib.jpg",
  phone: "418-523-6666",
  address: [
  "275 Charest Blvd East (Main Office)",
  "Québec, Quebec",
  "G1K 3G8"
  ],
  email: "Jean-Yves.Duclos@parl.gc.ca"
},
{
  name: "Blaine Calkins",
  id: "35897",
  party: "Conservative",
  riding: "Red Deer—Lacombe",
  riding_id: "893",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CalkinsBlaine_CPC.jpg",
  phone: "403-783-5530",
  address: [
  "4612 - 50th Street (Main Office)",
  "Suite 6A",
  "Ponoka, Alberta",
  "T4J 1S7"
  ],
  email: "blaine.calkins@parl.gc.ca"
},
{
  name: "Earl Dreeshen",
  id: "59226",
  party: "Conservative",
  riding: "Red Deer—Mountain View",
  riding_id: "892",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DreeshenEarl_CPC.jpg",
  phone: "",
  address: [ ],
  email: "earl.dreeshen@parl.gc.ca"
},
{
  name: "Erin Weir",
  id: "31796",
  party: "NDP",
  riding: "Regina—Lewvan",
  riding_id: "856",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WeirErin_NDP.jpg",
  phone: "306-790-4747",
  address: [
  "2024-A Albert Street (Main Office)",
  "Regina, Saskatchewan",
  "S4P 2T7"
  ],
  email: "Erin.Weir@parl.gc.ca"
},
{
  name: "Andrew Scheer",
  id: "25454",
  party: "Conservative",
  riding: "Regina—Qu'Appelle",
  riding_id: "857",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ScheerAndrew_CPC.jpg",
  phone: "306-790-4727",
  address: [
  "160 C Broadway Avenue West (Main Office)",
  "Fort Qu'appelle, Saskatchewan",
  "S0G 1S0",
  "984 A Albert Street ",
  "Regina, Saskatchewan",
  "S4R 2P7"
  ],
  email: "andrew.scheer@parl.gc.ca"
},
{
  name: "The Honourable Ralph Goodale",
  id: "1265",
  party: "Liberal",
  riding: "Regina—Wascana",
  riding_id: "858",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GoodaleRalph_Lib.jpg",
  phone: "306-585-2202",
  address: [
  "310 University Park Drive (Main Office)",
  "Regina, Saskatchewan",
  "S4V 0Y8"
  ],
  email: "ralph.goodale@parl.gc.ca"
},
{
  name: "Cheryl Gallant",
  id: "1809",
  party: "Conservative",
  riding: "Renfrew—Nipissing—Pembroke",
  riding_id: "800",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GallantCheryl_CPC.jpg",
  phone: "613-732-4404",
  address: [
  "84 Isabella Street (Main Office)",
  "1st Floor",
  "Pembroke, Ontario",
  "K8A 5S5"
  ],
  email: "cheryl.gallant@parl.gc.ca"
},
{
  name: "Monique Pauzé",
  id: "88595",
  party: "Bloc Québécois",
  riding: "Repentigny",
  riding_id: "696",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PauzéMonique_BQ.jpg",
  phone: "450-581-3896",
  address: [
  "184 Notre-Dame Street (Main Office)",
  "Suite 201",
  "Repentigny, Quebec",
  "J6A 2P9"
  ],
  email: "Monique.Pauze@parl.gc.ca"
},
{
  name: "The Honourable Alice Wong",
  id: "30812",
  party: "Conservative",
  riding: "Richmond Centre",
  riding_id: "922",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WongAlice_CPC.jpg",
  phone: "604-775-5790",
  address: [
  "5951 Number 3 Road (Main Office)",
  "Suite 360",
  "Richmond, British Columbia",
  "V6X 2E3"
  ],
  email: "alice.wong@parl.gc.ca"
},
{
  name: "Majid Jowhari",
  id: "88929",
  party: "Liberal",
  riding: "Richmond Hill",
  riding_id: "801",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JowhariMajid_Lib.jpg",
  phone: "905-707-9701",
  address: [
  "9140 Leslie Street (Main Office)",
  "Suite 407",
  "Richmond Hill, Ontario",
  "L4B 0A9"
  ],
  email: "Majid.Jowhari@parl.gc.ca"
},
{
  name: "Alain Rayes",
  id: "88600",
  party: "Conservative",
  riding: "Richmond—Arthabaska",
  riding_id: "697",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RayesAlain_CPC.jpg",
  phone: "819-751-1375",
  address: [
  "3 de la Gare Street (Main Office)",
  "Victoriaville, Quebec",
  "G6P 6S4",
  "22-A Saint-Georges Street ",
  "Windsor, Quebec",
  "J1S 2L7",
  "Telephone: "
  ],
  email: "Alain.Rayes@parl.gc.ca"
},
{
  name: "Guy Caron",
  id: "23915",
  party: "NDP",
  riding: "Rimouski-Neigette—Témiscouata—Les Basques",
  riding_id: "654",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaronGuy_NDP.jpg",
  phone: "418-725-2562",
  address: [
  "140 Saint-Germain Street (Main Office)",
  "Suite 109",
  "Rimouski, Quebec",
  "G5L 4B5"
  ],
  email: "Guy.Caron@parl.gc.ca"
},
{
  name: "Linda Lapointe",
  id: "88601",
  party: "Liberal",
  riding: "Rivière-des-Mille-Îles",
  riding_id: "698",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LapointeLinda_Lib.jpg",
  phone: "450-420-5525",
  address: [
  "61 de la Grande-Côte Road (Main Office)",
  "Boisbriand, Quebec",
  "J7G 1C8"
  ],
  email: "Linda.Lapointe@parl.gc.ca"
},
{
  name: "Rhéal Éloi Fortin",
  id: "88605",
  party: "Bloc Québécois",
  riding: "Rivière-du-Nord",
  riding_id: "699",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FortinRhéal_BQ.jpg",
  phone: "450-565-0061",
  address: [
  "161 de la Gare Street (Main Office)",
  "Suite 305",
  "Saint-Jérôme, Quebec",
  "J7Z 2B9"
  ],
  email: "Rheal.Fortin@parl.gc.ca"
},
{
  name: "Alexandre Boulerice",
  id: "58775",
  party: "NDP",
  riding: "Rosemont—La Petite-Patrie",
  riding_id: "700",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoulericeAlexandre_NDP.jpg",
  phone: "514-729-5342",
  address: [
  "1453 Beaubien Street East (Main Office)",
  "Suite 208",
  "Montréal, Quebec",
  "H2G 3C6"
  ],
  email: "Alexandre.Boulerice@parl.gc.ca"
},
{
  name: "Elizabeth May",
  id: "2897",
  party: "Green Party",
  riding: "Saanich—Gulf Islands",
  riding_id: "924",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MayElizabeth_GP.jpg",
  phone: "250-657-2000",
  address: [
  "9711 Fourth Street (Main Office)",
  "Suite 1",
  "Sidney, British Columbia",
  "V8L 2Y8"
  ],
  email: "Elizabeth.May@parl.gc.ca"
},
{
  name: "Darrell Samson",
  id: "88333",
  party: "Liberal",
  riding: "Sackville—Preston—Chezzetcook",
  riding_id: "623",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SamsonDarrell_Lib.jpg",
  phone: "902-861-2311",
  address: [
  "2900 Highway 2 (Main Office)",
  "Suite 2nd Floor",
  "Fall River, Nova Scotia",
  "B2T 1W4"
  ],
  email: "Darrell.Samson@parl.gc.ca"
},
{
  name: "Dan Vandal",
  id: "89045",
  party: "Liberal",
  riding: "Saint Boniface—Saint Vital",
  riding_id: "844",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VandalDaniel_Lib.jpg",
  phone: "204-983-3183",
  address: [
  "213 St.Mary's Road (Main Office)",
  "Suite 4",
  "Winnipeg, Manitoba",
  "R2H 1J2"
  ],
  email: "Dan.Vandal@parl.gc.ca"
},
{
  name: "Wayne Long",
  id: "88368",
  party: "Liberal",
  riding: "Saint John—Rothesay",
  riding_id: "635",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LongWayne_Lib.jpg",
  phone: "506-657-2500",
  address: [
  "1 Market Square (Main Office)",
  "Suite N306",
  "Saint John, New Brunswick",
  "E2L 4Z6"
  ],
  email: "Wayne.Long@parl.gc.ca"
},
{
  name: "Brigitte Sansoucy",
  id: "53569",
  party: "NDP",
  riding: "Saint-Hyacinthe—Bagot",
  riding_id: "702",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SansoucyBrigitte_NDP.jpg",
  phone: "450-771-0505",
  address: [
  "2193 Sainte-Anne Avenue (Main Office)",
  "Saint-Hyacinthe, Quebec",
  "J2S 5H5"
  ],
  email: "Brigitte.Sansoucy@parl.gc.ca"
},
{
  name: "Jean R. Rioux",
  id: "88623",
  party: "Liberal",
  riding: "Saint-Jean",
  riding_id: "703",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RiouxJean_Lib.jpg",
  phone: "450-357-9100",
  address: [
  "211 Mayrand (Main Office)",
  "Suite 1",
  "Saint-Jean-sur-Richelieu, Quebec",
  "J3B 3L1"
  ],
  email: "Jean.Rioux@parl.gc.ca"
},
{
  name: "The Honourable Stéphane Dion",
  id: "460",
  party: "Liberal",
  riding: "Saint-Laurent",
  riding_id: "704",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DionStéphane_Lib.jpg",
  phone: "514-335-6655",
  address: [
  "750 Marcel Laurin Blvd (Main Office)",
  "Suite 440",
  "Saint-Laurent, Quebec",
  "H4M 2M4"
  ],
  email: "stephane.dion@parl.gc.ca"
},
{
  name: "Nicola Di Iorio",
  id: "88627",
  party: "Liberal",
  riding: "Saint-Léonard—Saint-Michel",
  riding_id: "705",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DiIorioNicola_Lib.jpg",
  phone: "514-256-4548",
  address: [
  "8370 Lacordaire Blvd (Main Office)",
  "Saint-Léonard, Quebec",
  "H1R 3Y6"
  ],
  email: "Nicola.Diiorio@parl.gc.ca"
},
{
  name: "François-Philippe Champagne",
  id: "88633",
  party: "Liberal",
  riding: "Saint-Maurice—Champlain",
  riding_id: "706",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChampagneFrançoisPhilippe_Lib.jpg",
  phone: "819-523-2696",
  address: [
  "632 - 6th Avenue (Main Office)",
  "Suite 01",
  "Shawinigan, Quebec",
  "G9T 2H5",
  "290 Saint-Joseph Street ",
  "La Tuque, Quebec",
  "G9X 3Z8"
  ],
  email: "Francois-Philippe.Champagne@parl.gc.ca"
},
{
  name: "Anne Minh-Thu Quach",
  id: "71350",
  party: "NDP",
  riding: "Salaberry—Suroît",
  riding_id: "707",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/QuachAnneMinhThu_NDP.jpg",
  phone: "450-371-0644",
  address: [
  "30 Du Centenaire Avenue (Main Office)",
  "Suite 230",
  "Salaberry-de-Valleyfield, Quebec",
  "J6S 5X4"
  ],
  email: "AnneMinh-Thu.Quach@parl.gc.ca"
},
{
  name: "Marilyn Gladu",
  id: "88938",
  party: "Conservative",
  riding: "Sarnia—Lambton",
  riding_id: "805",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GladuMarilyn_CPC.jpg",
  phone: "519-383-6600",
  address: [
  "1000 Finch Drive (Main Office)",
  "Unit 2",
  "Sarnia, Ontario",
  "N7S 6G5"
  ],
  email: "Marilyn.Gladu@parl.gc.ca"
},
{
  name: "Sheri Benson",
  id: "89090",
  party: "NDP",
  riding: "Saskatoon West",
  riding_id: "861",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BensonSheri_NDP.jpg",
  phone: "306-975-6555",
  address: [
  "904E - 22nd Street West (Main Office)",
  "Saskatoon, Saskatchewan",
  "S7M 0S1"
  ],
  email: "Sheri.Benson@parl.gc.ca"
},
{
  name: "Kevin Waugh",
  id: "89084",
  party: "Conservative",
  riding: "Saskatoon—Grasswood",
  riding_id: "859",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WaughKevin_CPC.jpg",
  phone: "306-975-6472",
  address: [
  "2720 - 8th Street East (Main Office)",
  "Suite 5",
  "Saskatoon, Saskatchewan",
  "S7H 0V8"
  ],
  email: "Kevin.Waugh@parl.gc.ca"
},
{
  name: "Brad Trost",
  id: "25462",
  party: "Conservative",
  riding: "Saskatoon—University",
  riding_id: "860",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TrostBrad_CPC.jpg",
  phone: "306-975-6133",
  address: [
  "505-B Nelson Road (Main Office)",
  "Saskatoon, Saskatchewan",
  "S7S 1P4"
  ],
  email: "brad.trost@parl.gc.ca"
},
{
  name: "Terry Sheehan",
  id: "88944",
  party: "Liberal",
  riding: "Sault Ste. Marie",
  riding_id: "806",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SheehanTerry_Lib.jpg",
  phone: "705-941-2900",
  address: [
  "369 Queen Street East (Main Office)",
  "Suite 102",
  "Sault Ste Marie, Ontario",
  "P6A 1Z4"
  ],
  email: "Terry.Sheehan@parl.gc.ca"
},
{
  name: "Salma Zahid",
  id: "88950",
  party: "Liberal",
  riding: "Scarborough Centre",
  riding_id: "808",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ZahidSalma_Lib.jpg",
  phone: "416-752-2358",
  address: [
  "2155 Lawrence Avenue East (Main Office)",
  "Unit 5",
  "Scarborough, Ontario",
  "M1R 5G9"
  ],
  email: "Salma.Zahid@parl.gc.ca"
},
{
  name: "Shaun Chen",
  id: "88953",
  party: "Liberal",
  riding: "Scarborough North",
  riding_id: "810",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChenShaun_Lib.jpg",
  phone: "416-321-2436",
  address: [
  "4386 Sheppard Ave East (Main Office)",
  "Unit C",
  "Scarborough, Ontario",
  "M1S 1T8"
  ],
  email: "Shaun.Chen@parl.gc.ca"
},
{
  name: "Bill Blair",
  id: "88961",
  party: "Liberal",
  riding: "Scarborough Southwest",
  riding_id: "812",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlairBill_Lib.jpg",
  phone: "416-261-8613",
  address: [
  "2263 Kingston Road (Main Office)",
  "Scarborough, Ontario",
  "M1N 1T8"
  ],
  email: "Bill.Blair@parl.gc.ca"
},
{
  name: "Arnold Chan",
  id: "86249",
  party: "Liberal",
  riding: "Scarborough—Agincourt",
  riding_id: "807",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChanArnold_Lib.jpg",
  phone: "416-321-5454",
  address: [
  "2190 McNicoll Avenue (Main Office)",
  "Suite 110",
  "Scarborough, Ontario",
  "M1V 0B3"
  ],
  email: "Arnold.Chan@parl.gc.ca"
},
{
  name: "The Honourable John McKay",
  id: "957",
  party: "Liberal",
  riding: "Scarborough—Guildwood",
  riding_id: "809",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McKayJohn_Lib.jpg",
  phone: "416-283-1226",
  address: [
  "3785 Kingston Road (Main Office)",
  "Suite 10",
  "Scarborough, Ontario",
  "M1J 3H4"
  ],
  email: "john.mckay@parl.gc.ca"
},
{
  name: "Gary Anandasangaree",
  id: "89449",
  party: "Liberal",
  riding: "Scarborough—Rouge Park",
  riding_id: "811",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AnandasangareeGary_Lib.jpg",
  phone: "416-283-1414",
  address: [
  "3600 Ellesmere Road (Main Office)",
  "Unit 3",
  "Toronto, Ontario",
  "M1C 4Y8"
  ],
  email: "Gary.Anand@parl.gc.ca"
},
{
  name: "James Bezan",
  id: "25475",
  party: "Conservative",
  riding: "Selkirk—Interlake—Eastman",
  riding_id: "845",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BezanJames_CPC.jpg",
  phone: "204-785-6151",
  address: [
  "374 Main Street (Main Office)",
  "Selkirk, Manitoba",
  "R1A 1T7"
  ],
  email: "james.bezan@parl.gc.ca"
},
{
  name: "Pierre Breton",
  id: "58707",
  party: "Liberal",
  riding: "Shefford",
  riding_id: "708",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BretonPierre_Lib.jpg",
  phone: "450-378-3221",
  address: [
  "400 Principale Street (Main Office)",
  "Suite 101",
  "Granby, Quebec",
  "J2G 2W6"
  ],
  email: "Pierre.Breton@parl.gc.ca"
},
{
  name: "Pierre-Luc Dusseault",
  id: "71553",
  party: "NDP",
  riding: "Sherbrooke",
  riding_id: "709",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DusseaultPierreLuc_NDP.jpg",
  phone: "819-564-4200",
  address: [
  "100 Belvédère Street South (Main Office)",
  "Suite 130",
  "Sherbrooke, Quebec",
  "J1H 4B5"
  ],
  email: "Pierre-Luc.Dusseault@parl.gc.ca"
},
{
  name: "Garnett Genuis",
  id: "89226",
  party: "Conservative",
  riding: "Sherwood Park—Fort Saskatchewan",
  riding_id: "895",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GenuisGarnett_CPC.jpg",
  phone: "780-467-4944",
  address: [
  "2018 Sherwood Drive (Main Office)",
  "Suite 214",
  "Sherwood Park, Alberta",
  "T8A 5V3"
  ],
  email: "Garnett.Genuis@parl.gc.ca"
},
{
  name: "Bruce Stanton",
  id: "35724",
  party: "Conservative",
  riding: "Simcoe North",
  riding_id: "814",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StantonBruce_CPC.jpg",
  phone: "",
  address: [ ],
  email: "bruce.stanton@parl.gc.ca"
},
{
  name: "The Honourable K. Kellie Leitch",
  id: "71786",
  party: "Conservative",
  riding: "Simcoe—Grey",
  riding_id: "813",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LeitchKKellie_CPC.jpg",
  phone: "",
  address: [ ],
  email: "Kellie.Leitch@parl.gc.ca"
},
{
  name: "Nathan Cullen",
  id: "25493",
  party: "NDP",
  riding: "Skeena—Bulkley Valley",
  riding_id: "925",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CullenNathan_NDP.jpg",
  phone: "250-622-2413",
  address: [
  "3891 - 1st Avenue (Main Office)",
  "Suite 100",
  "Smithers, British Columbia",
  "V0J 2N0",
  "4716 Lazelle Avenue ",
  "Suite 112",
  "Terrace, British Columbia",
  "V8G 1T2",
  "818 - 3rd Avenue West ",
  "Prince Rupert, British Columbia",
  "V8J 1M7"
  ],
  email: "nathan.cullen@parl.gc.ca"
},
{
  name: "Robert Kitchen",
  id: "89095",
  party: "Conservative",
  riding: "Souris—Moose Mountain",
  riding_id: "862",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KitchenRobert_CPC.jpg",
  phone: "306-634-3000",
  address: [
  "1133 - 4th Street (Main Office)",
  "Suite 308",
  "Estevan, Saskatchewan",
  "S4A 0W6"
  ],
  email: "Robert.Kitchen@parl.gc.ca"
},
{
  name: "Richard Cannings",
  id: "89327",
  party: "NDP",
  riding: "South Okanagan—West Kootenay",
  riding_id: "926",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CanningsRichard_NDP.jpg",
  phone: "250-365-2792",
  address: [
  "301 Main Street (Main Office)",
  "Suite202",
  "Penticton, British Columbia",
  "V2A 5B7",
  "1695A Columbia Avenue ",
  "Castlegar, British Columbia",
  "V1N 1J1"
  ],
  email: "Richard.Cannings@parl.gc.ca"
},
{
  name: "Bernadette Jordan",
  id: "88340",
  party: "Liberal",
  riding: "South Shore—St. Margarets",
  riding_id: "624",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JordanBernadette_Lib.jpg",
  phone: "902-527-5655",
  address: [
  "129 Aberdeen Road (Main Office)",
  "Suite 106",
  "Bridgewater, Nova Scotia",
  "B4V 2S7"
  ],
  email: "Bernadette.Jordan@parl.gc.ca"
},
{
  name: "Dianne L. Watts",
  id: "89333",
  party: "Conservative",
  riding: "South Surrey—White Rock",
  riding_id: "927",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WattsDianneLynn_CPC.jpg",
  phone: "",
  address: [ ],
  email: "Dianne.Watts@parl.gc.ca"
},
{
  name: "Adam Vaughan",
  id: "54434",
  party: "Liberal",
  riding: "Spadina—Fort York",
  riding_id: "815",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VaughanAdam_Lib.jpg",
  phone: "416-533-2710",
  address: [
  "215 Spadina Avenue (Main Office)",
  "4th Floor",
  "Toronto, Ontario",
  "M5T 2C7"
  ],
  email: "Adam.Vaughan@parl.gc.ca"
},
{
  name: "Michael Cooper",
  id: "89219",
  party: "Conservative",
  riding: "St. Albert—Edmonton",
  riding_id: "894",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CooperMichael_CPC.jpg",
  phone: "780-459-0809",
  address: [
  "20 Perron Street (Main Office)",
  "Suite 220",
  "St Albert, Alberta",
  "T8N 1E4"
  ],
  email: "Michael.Cooper@parl.gc.ca"
},
{
  name: "Chris Bittle",
  id: "88934",
  party: "Liberal",
  riding: "St. Catharines",
  riding_id: "803",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BittleChris_Lib.jpg",
  phone: "905-934-6767",
  address: [
  "61 Geneva Street (Main Office)",
  "Unit 1",
  "St Catharines, Ontario",
  "L2M 4M6"
  ],
  email: "Chris.Bittle@parl.gc.ca"
},
{
  name: "Nick Whalen",
  id: "88296",
  party: "Liberal",
  riding: "St. John's East",
  riding_id: "610",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WhalenNick_Lib.jpg",
  phone: "709-772-7171",
  address: [
  "120 Torbay Road (Main Office)",
  "Suite E130",
  "St. John's, Newfoundland and Labrador",
  "A1A 2G8"
  ],
  email: "Nick.Whalen@parl.gc.ca"
},
{
  name: "Seamus O'Regan",
  id: "88299",
  party: "Liberal",
  riding: "St. John's South—Mount Pearl",
  riding_id: "611",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OReganSeamus_Lib.jpg",
  phone: "709-772-4608",
  address: [
  "689 Topsail Road (Main Office)",
  "2nd Floor",
  "St. John's, Newfoundland and Labrador",
  "A1E 2E3"
  ],
  email: "Seamus.ORegan@parl.gc.ca"
},
{
  name: "Joe Peschisolido",
  id: "1825",
  party: "Liberal",
  riding: "Steveston—Richmond East",
  riding_id: "928",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PeschisolidoJoe_Lib.jpg",
  phone: "604-257-2900",
  address: [
  "120 - 11080 No.5 Road (Main Office)",
  "Richmond, British Columbia",
  "V7A 4E7"
  ],
  email: "Joe.Peschisolido@parl.gc.ca"
},
{
  name: "Guy Lauzon",
  id: "25516",
  party: "Conservative",
  riding: "Stormont—Dundas—South Glengarry",
  riding_id: "816",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LauzonGuy_CPC.jpg",
  phone: "613-937-3331",
  address: [
  "621 Pitt Street (Main Office)",
  "Cornwall, Ontario",
  "K6J 3R8"
  ],
  email: "guy.lauzon@parl.gc.ca"
},
{
  name: "The Honourable Rona Ambrose",
  id: "25447",
  party: "Conservative",
  riding: "Sturgeon River—Parkland",
  riding_id: "896",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AmbroseRona_CPC.jpg",
  phone: "780-823-2050",
  address: [
  "4807 - 44 Avenue (Main Office)",
  "Suite 102",
  "Stony Plain, Alberta",
  "T7Z 1V5"
  ],
  email: "rona.ambrose@parl.gc.ca"
},
{
  name: "Paul Lefebvre",
  id: "88973",
  party: "Liberal",
  riding: "Sudbury",
  riding_id: "817",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LefebvrePaul_Lib.jpg",
  phone: "705-673-7107",
  address: [
  "152 Durham Street (Main Office)",
  "Sudbury, Ontario",
  "P3E 3M7"
  ],
  email: "Paul.Lefebvre@parl.gc.ca"
},
{
  name: "Randeep Sarai",
  id: "89339",
  party: "Liberal",
  riding: "Surrey Centre",
  riding_id: "929",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SaraiRandeep_Lib.jpg",
  phone: "604-589-2441",
  address: [
  "10362 King George Blvd (Main Office)",
  "Suite 170",
  "Surrey, British Columbia",
  "V3T 2W5"
  ],
  email: "Randeep.Sarai@parl.gc.ca"
},
{
  name: "Sukh Dhaliwal",
  id: "31098",
  party: "Liberal",
  riding: "Surrey—Newton",
  riding_id: "930",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DhaliwalSukh_Lib.jpg",
  phone: "604-598-2200",
  address: [
  "12992 - 76th Avenue (Main Office)",
  "Unit 202",
  "Surrey, British Columbia",
  "V3W 2V6"
  ],
  email: "Sukh.Dhaliwal@parl.gc.ca"
},
{
  name: "The Honourable Mark Eyking",
  id: "1806",
  party: "Liberal",
  riding: "Sydney—Victoria",
  riding_id: "625",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EykingMark_Lib.jpg",
  phone: "902-567-6275",
  address: [
  "500 Kings Road (Main Office)",
  "Sydney, Nova Scotia",
  "B1S 1B2"
  ],
  email: "mark.eyking@parl.gc.ca"
},
{
  name: "Michel Boudrias",
  id: "88651",
  party: "Bloc Québécois",
  riding: "Terrebonne",
  riding_id: "711",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoudriasMichel_BQ.jpg",
  phone: "450-964-9417",
  address: [
  "730-732 St. Louis Street (Main Office)",
  "Terrebonne, Quebec",
  "J6W 1J6"
  ],
  email: "Michel.Boudrias@parl.gc.ca"
},
{
  name: "Ramez Ayoub",
  id: "88419",
  party: "Liberal",
  riding: "Thérèse-De Blainville",
  riding_id: "649",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AyoubRamez_Lib.jpg",
  phone: "450-965-1188",
  address: [
  "201 Curé-Labelle Blvd (Main Office)",
  "Suite 401",
  "Sainte-Thérèse, Quebec",
  "J7E 2X6"
  ],
  email: "Ramez.Ayoub@parl.gc.ca"
},
{
  name: "The Honourable Peter Kent",
  id: "35699",
  party: "Conservative",
  riding: "Thornhill",
  riding_id: "818",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KentPeter_CPC.jpg",
  phone: "905-886-9911",
  address: [
  "7378 Yonge Street (Main Office)",
  "Suite 41B",
  "Thornhill, Ontario",
  "L4J 8J1"
  ],
  email: "peter.kent@parl.gc.ca"
},
{
  name: "Don Rusnak",
  id: "88982",
  party: "Liberal",
  riding: "Thunder Bay—Rainy River",
  riding_id: "819",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RusnakDon_Lib.jpg",
  phone: "807-625-1160",
  address: [
  "905 E Victoria Avenue (Main Office)",
  "Unit 1",
  "Thunder Bay, Ontario",
  "P7C 1B3"
  ],
  email: "Don.Rusnak@parl.gc.ca"
},
{
  name: "The Honourable Patty Hajdu",
  id: "88984",
  party: "Liberal",
  riding: "Thunder Bay—Superior North",
  riding_id: "820",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HajduPatty_Lib.jpg",
  phone: "807-766-2090",
  address: [
  "705 Red River Road (Main Office)",
  "Suite 3",
  "Thunder Bay, Ontario",
  "P7B 1J3"
  ],
  email: "Patty.Hajdu@parl.gc.ca"
},
{
  name: "Charlie Angus",
  id: "25470",
  party: "NDP",
  riding: "Timmins—James Bay",
  riding_id: "821",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AngusCharlie_NDP.jpg",
  phone: "",
  address: [ ],
  email: "charlie.angus@parl.gc.ca"
},
{
  name: "T.J. Harvey",
  id: "88370",
  party: "Liberal",
  riding: "Tobique—Mactaquac",
  riding_id: "636",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HarveyTJ_Lib.jpg",
  phone: "506-392-5807",
  address: [
  "9160 Main Street (Main Office)",
  "Florenceville, New Brunswick",
  "E7L 2A6"
  ],
  email: "TJ.Harvey@parl.gc.ca"
},
{
  name: "The Honourable Bill Morneau",
  id: "88992",
  party: "Liberal",
  riding: "Toronto Centre",
  riding_id: "822",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MorneauBill_Lib.jpg",
  phone: "416-972-9749",
  address: [
  "430 Parliament Street (Main Office)",
  "Toronto, Ontario",
  "M5A 3A2"
  ],
  email: "Bill.Morneau@parl.gc.ca"
},
{
  name: "Julie Dabrusin",
  id: "88994",
  party: "Liberal",
  riding: "Toronto—Danforth",
  riding_id: "823",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DabrusinJulie_Lib.jpg",
  phone: "416-405-8914",
  address: [
  "1180 Danforth Avenue (Main Office)",
  "Toronto, Ontario",
  "M4J 1M3"
  ],
  email: "Julie.Dabrusin@parl.gc.ca"
},
{
  name: "The Honourable Carolyn Bennett",
  id: "992",
  party: "Liberal",
  riding: "Toronto—St. Paul's",
  riding_id: "804",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BennettCarolyn_Lib.jpg",
  phone: "416-952-3990",
  address: [
  "1650 Yonge Street (Main Office)",
  "Suite 103",
  "Toronto, Ontario",
  "M4T 2A2"
  ],
  email: "carolyn.bennett@parl.gc.ca"
},
{
  name: "Robert Aubin",
  id: "71560",
  party: "NDP",
  riding: "Trois-Rivières",
  riding_id: "712",
  languages: "French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AubinRobert_NDP.jpg",
  phone: "819-371-5901",
  address: [
  "214 Bonaventure Street (Main Office)",
  "Trois-Rivières, Quebec",
  "G9A 2B1"
  ],
  email: "Robert.Aubin@parl.gc.ca"
},
{
  name: "The Honourable Chrystia Freeland",
  id: "84665",
  party: "Liberal",
  riding: "University—Rosedale",
  riding_id: "824",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FreelandChrystia_LIB.jpg",
  phone: "416-928-1451",
  address: [
  "344 Bloor Street West (Main Office)",
  "Suite 510",
  "Toronto, Ontario",
  "M5S 3A7"
  ],
  email: "Chrystia.Freeland@parl.gc.ca"
},
{
  name: "The Honourable Hedy Fry",
  id: "1589",
  party: "Liberal",
  riding: "Vancouver Centre",
  riding_id: "931",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FryHedy_Lib.jpg",
  phone: "604-666-0135",
  address: [
  "1030 Denman Street (Main Office)",
  "Suite 106",
  "Vancouver, British Columbia",
  "V6G 2M6"
  ],
  email: "hedy.fry@parl.gc.ca"
},
{
  name: "Jenny Kwan",
  id: "89346",
  party: "NDP",
  riding: "Vancouver East",
  riding_id: "932",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KwanJenny_NDP.jpg",
  phone: "",
  address: [ ],
  email: "Jenny.Kwan@parl.gc.ca"
},
{
  name: "The Honourable Jody Wilson-Raybould",
  id: "89494",
  party: "Liberal",
  riding: "Vancouver Granville",
  riding_id: "933",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WilsonRaybouldJody_Lib.jpg",
  phone: "604-717-1140",
  address: [
  "1245 West Broadway (Main Office)",
  "Suite 104",
  "Vancouver, British Columbia",
  "V6H 1G7"
  ],
  email: "Jody.Wilson-Raybould@parl.gc.ca"
},
{
  name: "Don Davies",
  id: "59325",
  party: "NDP",
  riding: "Vancouver Kingsway",
  riding_id: "935",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DaviesDon_NDP.jpg",
  phone: "604-775-6263",
  address: [
  "2951 Kingsway (Main Office)",
  "Vancouver, British Columbia",
  "V5R 5J4"
  ],
  email: "don.davies@parl.gc.ca"
},
{
  name: "Joyce Murray",
  id: "35950",
  party: "Liberal",
  riding: "Vancouver Quadra",
  riding_id: "936",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MurrayJoyce_Lib.jpg",
  phone: "604-664-9220",
  address: [
  "2112, West Broadway (Main Office)",
  "Suite 206",
  "Vancouver, British Columbia",
  "V6K 2C8"
  ],
  email: "joyce.murray@parl.gc.ca"
},
{
  name: "The Honourable Harjit S. Sajjan",
  id: "89497",
  party: "Liberal",
  riding: "Vancouver South",
  riding_id: "937",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SajjanHarjitS_Lib.jpg",
  phone: "604-775-5323",
  address: [
  "6406 Victoria Drive (Main Office)",
  "Vancouver, British Columbia",
  "V5P 3X7"
  ],
  email: "Harjit.Sajjan@parl.gc.ca"
},
{
  name: "Peter Schiefke",
  id: "88649",
  party: "Liberal",
  riding: "Vaudreuil—Soulanges",
  riding_id: "710",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SchiefkePeter_Lib.jpg",
  phone: "450-510-2305",
  address: [
  "223 St. Charles Avenue (Main Office)",
  "Vaudreuil-Dorion, Quebec",
  "J7V 2L6"
  ],
  email: "Peter.Schiefke@parl.gc.ca"
},
{
  name: "Francesco Sorbara",
  id: "88999",
  party: "Liberal",
  riding: "Vaughan—Woodbridge",
  riding_id: "825",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SorbaraFrancesco_Lib.jpg",
  phone: "905-264-6446",
  address: [
  "8633 Weston Road (Main Office)",
  "Suite 6A",
  "Woodbridge, Ontario",
  "L4L 9R6"
  ],
  email: "Francesco.Sorbara@parl.gc.ca"
},
{
  name: "Murray Rankin",
  id: "60078",
  party: "NDP",
  riding: "Victoria",
  riding_id: "938",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RankinMurray_NDP.jpg",
  phone: "250-363-3600",
  address: [
  "1057 Fort Street (Main Office)",
  "Victoria, British Columbia",
  "V8V 3K5"
  ],
  email: "Murray.Rankin@parl.gc.ca"
},
{
  name: "Marc Miller",
  id: "88660",
  party: "Liberal",
  riding: "Ville-Marie—Le Sud-Ouest—Île-des-Soeurs",
  riding_id: "713",
  languages: "French / English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MillerMarc_Lib.jpg",
  phone: "514-496-4885",
  address: [
  "3175 Saint-Jacques Street (Main Office)",
  "Montréal, Quebec",
  "H4C 1G7"
  ],
  email: "Marc.Miller@parl.gc.ca"
},
{
  name: "Eva Nassif",
  id: "58806",
  party: "Liberal",
  riding: "Vimy",
  riding_id: "714",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NassifEva_Lib.jpg",
  phone: "450-967-3641",
  address: [
  "1695 Laval Blvd (Main Office)",
  "Suite 415",
  "Laval, Quebec",
  "H7S 2M2"
  ],
  email: "Eva.Nassif@parl.gc.ca"
},
{
  name: "The Honourable Bardish Chagger",
  id: "89000",
  party: "Liberal",
  riding: "Waterloo",
  riding_id: "826",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChaggerBardish_Lib.jpg",
  phone: "519-746-1573",
  address: [
  "100 Regina Street South (Main Office)",
  "Suite 360",
  "Waterloo, Ontario",
  "N2J 4A8"
  ],
  email: "Bardish.Chagger@parl.gc.ca"
},
{
  name: "The Honourable Michael D. Chong",
  id: "25488",
  party: "Conservative",
  riding: "Wellington—Halton Hills",
  riding_id: "827",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChongMichael_CPC.jpg",
  phone: "",
  address: [ ],
  email: "michael.chong@parl.gc.ca"
},
{
  name: "Colin Fraser",
  id: "88346",
  party: "Liberal",
  riding: "West Nova",
  riding_id: "626",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FraserColin_Lib.jpg",
  phone: "902-825-3327",
  address: [
  "396 Main Street (Main Office)",
  "Suite 103",
  "Yarmouth, Nova Scotia",
  "B5A 1E9",
  "2 George Street ",
  "Middleton, Nova Scotia",
  "B0S 1P0"
  ],
  email: "Colin.Fraser@parl.gc.ca"
},
{
  name: "Pam Goldsmith-Jones",
  id: "89370",
  party: "Liberal",
  riding: "West Vancouver—Sunshine Coast—Sea to Sky Country",
  riding_id: "939",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GoldsmithJonesPamela_Lib.jpg",
  phone: "604-913-2660",
  address: [
  "6367 Bruce Street West (Main Office)",
  "West Vancouver, British Columbia",
  "V7W 2B8"
  ],
  email: "Pam.Goldsmith-Jones@parl.gc.ca"
},
{
  name: "Celina Caesar-Chavannes",
  id: "86786",
  party: "Liberal",
  riding: "Whitby",
  riding_id: "828",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaesarChavannesCelina_Lib.jpg",
  phone: "905-665-8182",
  address: [
  "701 Rossland Road East (Main Office)",
  "Suite 206",
  "Whitby, Ontario",
  "L1N 8Y9"
  ],
  email: "Celina.Caesar-Chavannes@parl.gc.ca"
},
{
  name: "Ali Ehsassi",
  id: "89010",
  party: "Liberal",
  riding: "Willowdale",
  riding_id: "829",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EhsassiAli_Lib.jpg",
  phone: "416-223-2858",
  address: [
  "115 Sheppard Avenue West (Main Office)",
  "Toronto, Ontario",
  "M2N 1M7"
  ],
  email: "Ali.Ehsassi@parl.gc.ca"
},
{
  name: "Brian Masse",
  id: "9137",
  party: "NDP",
  riding: "Windsor West",
  riding_id: "831",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MasseBrian_NDP.jpg",
  phone: "519-255-1631",
  address: [
  "1398 Ouellette Avenue (Main Office)",
  "Suite 2",
  "Windsor, Ontario",
  "N8X 1J8"
  ],
  email: "brian.masse@parl.gc.ca"
},
{
  name: "Cheryl Hardcastle",
  id: "89012",
  party: "NDP",
  riding: "Windsor—Tecumseh",
  riding_id: "830",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HardcastleCheryl_NDP.jpg",
  phone: "519-979-2707",
  address: [
  "9733 Tecumseh Road East (Main Office)",
  "Suite 2",
  "Windsor, Ontario",
  "N8R 1A5"
  ],
  email: "Cheryl.Hardcastle@parl.gc.ca"
},
{
  name: "Robert-Falcon Ouellette",
  id: "89466",
  party: "Liberal",
  riding: "Winnipeg Centre",
  riding_id: "846",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OuelletteRobertFalcon_Lib.jpg",
  phone: "204-984-1675",
  address: [
  "594 Ellice Avenue (Main Office)",
  "Winnipeg, Manitoba",
  "R3G 0A3"
  ],
  email: "robert.falcon@parl.gc.ca"
},
{
  name: "Kevin Lamoureux",
  id: "30552",
  party: "Liberal",
  riding: "Winnipeg North",
  riding_id: "847",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LamoureuxKevin_Lib.jpg",
  phone: "204-984-1767",
  address: [
  "98 Mandalay Drive (Main Office)",
  "Winnipeg, Manitoba",
  "R2P 1V8"
  ],
  email: "kevin.lamoureux@parl.gc.ca"
},
{
  name: "Terry Duguid",
  id: "31119",
  party: "Liberal",
  riding: "Winnipeg South",
  riding_id: "848",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuguidTerry_Lib.jpg",
  phone: "204-984-6787",
  address: [
  "2800 Pembina Highway (Main Office)",
  "Suite 103",
  "Winnipeg, Manitoba",
  "R3T 5P3"
  ],
  email: "Terry.Duguid@parl.gc.ca"
},
{
  name: "The Honourable Jim Carr",
  id: "89059",
  party: "Liberal",
  riding: "Winnipeg South Centre",
  riding_id: "849",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CarrJim_Lib.jpg",
  phone: "204-983-1355",
  address: [
  "611 Corydon Avenue (Main Office)",
  "Suite 102",
  "Winnipeg, Manitoba",
  "R3L 0P3"
  ],
  email: "Jim.Carr@parl.gc.ca"
},
{
  name: "Jim Eglinski",
  id: "48292",
  party: "Conservative",
  riding: "Yellowhead",
  riding_id: "897",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EglinskiJim_CPC.jpg",
  phone: "",
  address: [ ],
  email: "Jim.Eglinski@parl.gc.ca"
},
{
  name: "Michael Levitt",
  id: "89018",
  party: "Liberal",
  riding: "York Centre",
  riding_id: "832",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LevittMichael_Lib.jpg",
  phone: "416-638-3700",
  address: [
  "660 Wilson Avenue (Main Office)",
  "Toronto, Ontario",
  "M3K 1E1"
  ],
  email: "Michael.Levitt@parl.gc.ca"
},
{
  name: "Ahmed Hussen",
  id: "89020",
  party: "Liberal",
  riding: "York South—Weston",
  riding_id: "834",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HussenAhmed_Lib.jpg",
  phone: "416-656-2526",
  address: [
  "99D Ingram Drive (Main Office)",
  "Toronto, Ontario",
  "M6M 2L7"
  ],
  email: "Ahmed.Hussen@parl.gc.ca"
},
{
  name: "The Honourable Peter Van Loan",
  id: "25465",
  party: "Conservative",
  riding: "York—Simcoe",
  riding_id: "833",
  languages: "English",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VanLoanPeter_CPC.jpg",
  phone: "905-898-1600",
  address: [
  "45 Grist Mill Road (Main Office)",
  "Suite 10",
  "Holland Landing, Ontario",
  "L9N 1M7"
  ],
  email: "peter.vanloan@parl.gc.ca"
},
{
  name: "Cathay Wagantall",
  id: "89098",
  party: "Conservative",
  riding: "Yorkton—Melville",
  riding_id: "863",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WagantallCathay_CPC.jpg",
  phone: "306-782-3309",
  address: [
  "43 Betts Avenue (Main Office)",
  "Yorkton, Saskatchewan",
  "S3N 1M1"
  ],
  email: "Cathay.Wagantall@parl.gc.ca"
},
{
  name: "The Honourable Larry Bagnell",
  id: "1796",
  party: "Liberal",
  riding: "Yukon",
  riding_id: "940",
  languages: "English / French",
  photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BagnellLarry_Lib.jpg",
  phone: "867-668-6565",
  address: [
  "204 Black Street (Main Office)",
  "Suite 204",
  "Whitehorse, Yukon",
  "Y1A 2M9"
  ],
  email: "Larry.Bagnell@parl.gc.ca"
}
]

ReactDOM.render(<App data={data}/>, document.getElementById('app'));