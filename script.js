// Base ilustrativa de atletas conhecidos. Clubes, vínculos, idades e notas não são um cadastro oficial atualizado.
const teams=[
['Flamengo','FLA',[['Pedro','ATA',87],['Arrascaeta','MEI',88],['Léo Ortiz','ZAG',83],['Agustín Rossi','GOL',83],['Léo Pereira','ZAG',82],['Bruno Henrique','ATA',81]]],
['Palmeiras','PAL',[['Vitor Roque','ATA',84],['Gustavo Gómez','ZAG',85],['Andreas Pereira','MEI',83],['Flaco López','ATA',82],['Piquerez','LE',82],['Weverton','GOL',81]]],
['Corinthians','COR',[['Yuri Alberto','ATA',83],['Hugo Souza','GOL',82],['Breno Bidon','MEI',79],['Rodrigo Garro','MEI',83],['Memphis Depay','ATA',84],['Raniele','VOL',78]]],
['Santos','SAN',[['Neymar','ATA',87],['Gabigol','ATA',82],['Gabriel Brazão','GOL',79],['João Schmidt','VOL',77],['Guilherme','ATA',77],['Zé Ivaldo','ZAG',75]]],
['São Paulo','SAO',[['Lucas Moura','ATA',82],['Calleri','ATA',81],['Rafael','GOL',79],['Arboleda','ZAG',79],['Ferreira','ATA',77],['Alisson','VOL',77]]],
['Fluminense','FLU',[['Germán Cano','ATA',80],['Fábio','GOL',80],['Thiago Silva','ZAG',83],['Martinelli','VOL',79],['Samuel Xavier','LD',76],['Lima','MEI',76]]],
['Botafogo','BOT',[['Marlon Freitas','VOL',81],['Alexander Barboza','ZAG',81],['John','GOL',79],['Savarino','MEI',81],['Vitinho','LD',77],['Cuiabano','LE',76]]],
['Cruzeiro','CRU',[['Kaio Jorge','ATA',85],['Matheus Pereira','MEI',85],['Cássio','GOL',79],['Lucas Romero','VOL',79],['William','LD',79],['Gerson','MEI',83]]],
['Atlético-MG','CAM',[['Hulk','ATA',84],['Everson','GOL',82],['Guilherme Arana','LE',82],['Gustavo Scarpa','MEI',81],['Alan Franco','VOL',78],['Lyanco','ZAG',78]]],
['Grêmio','GRE',[['Cristaldo','MEI',79],['Villasanti','VOL',79],['Braithwaite','ATA',79],['Kannemann','ZAG',77],['João Pedro','LD',76],['Marchesín','GOL',77]]],
['Internacional','INT',[['Alan Patrick','MEI',84],['Rochet','GOL',80],['Borré','ATA',79],['Vitão','ZAG',80],['Bruno Henrique','VOL',76],['Bernabei','LE',78]]],
['Bahia','BAH',[['Everton Ribeiro','MEI',82],['Cauly','MEI',79],['Jean Lucas','VOL',78],['Luciano Juba','LE',79],['Caio Alexandre','VOL',79],['Willian José','ATA',79]]],
['Fortaleza','FOR',[['Lucero','ATA',79],['Pochettino','MEI',78],['João Ricardo','GOL',78],['Marinho','ATA',76],['Brítez','ZAG',76],['Moisés','ATA',76]]],
['Vasco','VAS',[['Philippe Coutinho','MEI',83],['Vegetti','ATA',80],['Léo Jardim','GOL',81],['Paulo Henrique','LD',78],['Rayan','ATA',79],['Hugo Moura','VOL',75]]],
['Athletico-PR','CAP',[['Santos','GOL',79],['Fernandinho','VOL',79],['Zapelli','MEI',78],['Pablo','ATA',75],['Canobbio','ATA',77],['Erick','VOL',76]]],
['Coritiba','CFC',[['Pedro Morisco','GOL',77],['Lucas Ronier','ATA',76],['Josué','MEI',77],['Sebastián Gómez','VOL',76],['Bruno Melo','ZAG',74],['Robson','ATA',74]]],
['Red Bull Bragantino','RBB',[['Cleiton','GOL',79],['Eduardo Sasha','ATA',77],['Lucas Evangelista','MEI',78],['Juninho Capixaba','LE',77],['Jadsom','VOL',76],['Henry Mosquera','ATA',75]]],
['Vitória','VIT',[['Matheuzinho','MEI',78],['Lucas Arcanjo','GOL',77],['Osvaldo','ATA',75],['Wagner Leonardo','ZAG',77],['Willian Oliveira','VOL',74],['Janderson','ATA',73]]],
['Remo','REM',[['Pedro Rocha','ATA',77],['Pavani','MEI',73],['Marcelo Rangel','GOL',74],['Daniel Felipe','ZAG',72],['Ytalo','ATA',73],['Sávio','LE',72]]],
['Chapecoense','CHA',[['Perotti','ATA',75],['Mário Sérgio','ATA',73],['João Paulo','GOL',74],['Bruno Leonardo','ZAG',73],['Marcinho','MEI',72],['Giovanni Augusto','MEI',73]]]
];

// Clubes sul-americanos representativos para o modo carreira; escalações estrangeiras geradas para simulação.

// Liga inglesa: clubes e 18 referências de atletas por clube (não são elencos oficiais de 2026).
const englishClubs=["Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham", "Newcastle United", "Aston Villa", "Brighton", "Nottingham Forest", "Crystal Palace", "Fulham", "Brentford", "Bournemouth", "West Ham United", "Everton", "Wolverhampton", "Leeds United", "Burnley", "Sunderland"];
const englishPlayers={"Arsenal": ["David Raya", "William Saliba", "Gabriel Magalhães", "Jurriën Timber", "Ben White", "Riccardo Calafiori", "Piero Hincapié", "Declan Rice", "Martín Zubimendi", "Martin Ødegaard", "Mikel Merino", "Eberechi Eze", "Bukayo Saka", "Gabriel Martinelli", "Leandro Trossard", "Kai Havertz", "Viktor Gyökeres", "Noni Madueke"], "Manchester City": ["Gianluigi Donnarumma", "James Trafford", "Rúben Dias", "John Stones", "Joško Gvardiol", "Nathan Aké", "Rayan Aït-Nouri", "Matheus Nunes", "Rodri", "Tijjani Reijnders", "Bernardo Silva", "Phil Foden", "Rayan Cherki", "Jérémy Doku", "Savinho", "Erling Haaland", "Omar Marmoush", "Nico González"], "Liverpool": ["Alisson Becker", "Giorgi Mamardashvili", "Virgil van Dijk", "Ibrahima Konaté", "Joe Gomez", "Milos Kerkez", "Jeremie Frimpong", "Conor Bradley", "Alexis Mac Allister", "Ryan Gravenberch", "Dominik Szoboszlai", "Curtis Jones", "Wataru Endo", "Florian Wirtz", "Mohamed Salah", "Cody Gakpo", "Hugo Ekitiké", "Alexander Isak"], "Chelsea": ["Robert Sánchez", "Filip Jörgensen", "Reece James", "Malo Gusto", "Wesley Fofana", "Levi Colwill", "Trevoh Chalobah", "Marc Cucurella", "Moisés Caicedo", "Enzo Fernández", "Cole Palmer", "Roméo Lavia", "Andrey Santos", "Pedro Neto", "Estêvão", "Alejandro Garnacho", "João Pedro", "Liam Delap"], "Manchester United": ["André Onana", "Altay Bayındır", "Matthijs de Ligt", "Lisandro Martínez", "Harry Maguire", "Leny Yoro", "Diogo Dalot", "Patrick Dorgu", "Luke Shaw", "Manuel Ugarte", "Casemiro", "Bruno Fernandes", "Kobbie Mainoo", "Mason Mount", "Amad Diallo", "Bryan Mbeumo", "Matheus Cunha", "Benjamin Šeško"], "Tottenham": ["Guglielmo Vicario", "Antonín Kinský", "Cristian Romero", "Micky van de Ven", "Pedro Porro", "Destiny Udogie", "Kevin Danso", "Djed Spence", "João Palhinha", "Rodrigo Bentancur", "Pape Matar Sarr", "Lucas Bergvall", "James Maddison", "Dejan Kulusevski", "Mohammed Kudus", "Brennan Johnson", "Richarlison", "Dominic Solanke"], "Newcastle United": ["Nick Pope", "Aaron Ramsdale", "Fabian Schär", "Sven Botman", "Dan Burn", "Tino Livramento", "Kieran Trippier", "Lewis Hall", "Bruno Guimarães", "Sandro Tonali", "Joelinton", "Joe Willock", "Jacob Ramsey", "Anthony Gordon", "Harvey Barnes", "Anthony Elanga", "Nick Woltemade", "Yoane Wissa"], "Aston Villa": ["Emiliano Martínez", "Marco Bizot", "Ezri Konsa", "Pau Torres", "Tyrone Mings", "Matty Cash", "Lucas Digne", "Ian Maatsen", "Boubacar Kamara", "Amadou Onana", "Youri Tielemans", "John McGinn", "Morgan Rogers", "Emiliano Buendía", "Leon Bailey", "Jadon Sancho", "Ollie Watkins", "Donyell Malen"], "Brighton": ["Bart Verbruggen", "Jason Steele", "Lewis Dunk", "Jan Paul van Hecke", "Adam Webster", "Ferdi Kadıoğlu", "Pervis Estupiñán", "Mats Wieffer", "Carlos Baleba", "Yasin Ayari", "Jack Hinshelwood", "Diego Gómez", "Kaoru Mitoma", "Yankuba Minteh", "Brajan Gruda", "Georginio Rutter", "Danny Welbeck", "Charalampos Kostoulas"], "Nottingham Forest": ["Matz Sels", "Angus Gunn", "Murillo", "Nikola Milenković", "Morato", "Neco Williams", "Ola Aina", "Nicolò Savona", "Ibrahim Sangaré", "Ryan Yates", "Elliot Anderson", "Morgan Gibbs-White", "Callum Hudson-Odoi", "Dan Ndoye", "Omari Hutchinson", "Dilane Bakwa", "Chris Wood", "Igor Jesus"], "Crystal Palace": ["Dean Henderson", "Walter Benítez", "Marc Guéhi", "Maxence Lacroix", "Chris Richards", "Daniel Muñoz", "Tyrick Mitchell", "Nathaniel Clyne", "Adam Wharton", "Will Hughes", "Daichi Kamada", "Jefferson Lerma", "Ismaïla Sarr", "Yeremy Pino", "Justin Devenny", "Jean-Philippe Mateta", "Eddie Nketiah", "Brennan Johnson"], "Fulham": ["Bernd Leno", "Benjamin Lecomte", "Joachim Andersen", "Calvin Bassey", "Issa Diop", "Kenny Tete", "Antonee Robinson", "Timothy Castagne", "Sander Berge", "Saša Lukić", "Alex Iwobi", "Emile Smith Rowe", "Harry Wilson", "Adama Traoré", "Samuel Chukwueze", "Oscar Bobb", "Raúl Jiménez", "Rodrigo Muniz"], "Brentford": ["Caoimhín Kelleher", "Hákon Valdimarsson", "Nathan Collins", "Sepp van den Berg", "Ethan Pinnock", "Kristoffer Ajer", "Rico Henry", "Aaron Hickey", "Vitaly Janelt", "Jordan Henderson", "Mathias Jensen", "Yegor Yarmolyuk", "Mikkel Damsgaard", "Kevin Schade", "Keane Lewis-Potter", "Dango Ouattara", "Igor Thiago", "Fábio Carvalho"], "Bournemouth": ["Djordje Petrović", "Mark Travers", "Marcos Senesi", "Illia Zabarnyi", "Dean Huijsen", "James Hill", "Adam Smith", "Milos Kerkez", "Tyler Adams", "Lewis Cook", "Alex Scott", "Ryan Christie", "Marcus Tavernier", "Justin Kluivert", "Antoine Semenyo", "David Brooks", "Evanilson", "Enes Ünal"], "West Ham United": ["Alphonse Areola", "Mads Hermansen", "Jean-Clair Todibo", "Max Kilman", "Konstantinos Mavropanos", "Aaron Wan-Bissaka", "Emerson Palmieri", "El Hadji Malick Diouf", "Tomáš Souček", "Edson Álvarez", "James Ward-Prowse", "Lucas Paquetá", "Mohammed Kudus", "Jarrod Bowen", "Crysencio Summerville", "Luis Guilherme", "Niclas Füllkrug", "Callum Wilson"], "Everton": ["Jordan Pickford", "Mark Travers", "James Tarkowski", "Jarrad Branthwaite", "Michael Keane", "Jake O’Brien", "Vitaliy Mykolenko", "Nathan Patterson", "Idrissa Gueye", "James Garner", "Tim Iroegbunam", "Kiernan Dewsbury-Hall", "Iliman Ndiaye", "Dwight McNeil", "Jack Grealish", "Tyler Dibling", "Beto", "Thierno Barry"], "Wolverhampton": ["José Sá", "Sam Johnstone", "Toti Gomes", "Santiago Bueno", "Yerson Mosquera", "Emmanuel Agbadou", "Matt Doherty", "Hugo Bueno", "André", "João Gomes", "Jean-Ricner Bellegarde", "Marshall Munetsi", "Rodrigo Gomes", "Jhon Arias", "Hwang Hee-chan", "Matheus Mané", "Jørgen Strand Larsen", "Tolu Arokodare"], "Leeds United": ["Lucas Perri", "Karl Darlow", "Joe Rodon", "Pascal Struijk", "Jaka Bijol", "Jayden Bogle", "Gabriel Gudmundsson", "Sam Byram", "Ethan Ampadu", "Ao Tanaka", "Anton Stach", "Ilia Gruev", "Brenden Aaronson", "Daniel James", "Wilfried Gnonto", "Noah Okafor", "Dominic Calvert-Lewin", "Lukas Nmecha"], "Burnley": ["Martin Dúbravka", "Max Weiss", "Maxime Estève", "Hjalmar Ekdal", "Bashir Humphreys", "Kyle Walker", "Quilindschy Hartman", "Connor Roberts", "Josh Cullen", "Florentino Luís", "Hannibal Mejbri", "Lesley Ugochukwu", "Josh Laurent", "Jaidon Anthony", "Jacob Bruun Larsen", "Loum Tchaouna", "Zian Flemming", "Lyle Foster"], "Sunderland": ["Robin Roefs", "Anthony Patterson", "Dan Ballard", "Omar Alderete", "Nordi Mukiele", "Reinildo Mandava", "Trai Hume", "Dennis Cirkin", "Granit Xhaka", "Habib Diarra", "Noah Sadiki", "Enzo Le Fée", "Chris Rigg", "Chemsdine Talbi", "Simon Adingra", "Wilson Isidor", "Eliezer Mayenda", "Brian Brobbey"]};
const englishPositions=["GOL","GOL","ZAG","ZAG","ZAG","LD","LE","LD","VOL","MC","MC","MEI","MEI","PD","PE","ATA","ATA","ATA"];
const englishOvr={"Arsenal":85,"Manchester City":86,"Liverpool":86,"Chelsea":83,"Manchester United":81,"Tottenham":81,"Newcastle United":82,"Aston Villa":82};


const spanishClubs=["Real Madrid", "Barcelona", "Atlético de Madrid", "Athletic Club", "Real Sociedad", "Villarreal", "Real Betis", "Sevilla", "Valencia", "Girona", "Celta de Vigo", "Osasuna", "Getafe", "Rayo Vallecano", "Mallorca", "Espanyol", "Alavés", "Las Palmas", "Leganés", "Real Valladolid"];
const spanishPlayers={"Real Madrid": ["Thibaut Courtois", "Andriy Lunin", "Dani Carvajal", "Éder Militão", "Antonio Rüdiger", "David Alaba", "Ferland Mendy", "Fran García", "Aurélien Tchouaméni", "Federico Valverde", "Eduardo Camavinga", "Jude Bellingham", "Arda Güler", "Brahim Díaz", "Vinícius Júnior", "Rodrygo", "Kylian Mbappé", "Endrick"], "Barcelona": ["Marc-André ter Stegen", "Iñaki Peña", "Jules Koundé", "Ronald Araújo", "Pau Cubarsí", "Iñigo Martínez", "Alejandro Balde", "Héctor Fort", "Frenkie de Jong", "Pedri", "Gavi", "Fermín López", "Dani Olmo", "Raphinha", "Lamine Yamal", "Ferran Torres", "Robert Lewandowski", "Marc Casadó"], "Atlético de Madrid": ["Jan Oblak", "Juan Musso", "Nahuel Molina", "José María Giménez", "Robin Le Normand", "Clément Lenglet", "Reinildo", "Javi Galán", "Marcos Llorente", "Koke", "Rodrigo De Paul", "Pablo Barrios", "Conor Gallagher", "Samuel Lino", "Giuliano Simeone", "Antoine Griezmann", "Julián Álvarez", "Alexander Sørloth"], "Athletic Club": ["Unai Simón", "Julen Agirrezabala", "Óscar de Marcos", "Dani Vivian", "Yeray Álvarez", "Aitor Paredes", "Yuri Berchiche", "Iñigo Lekue", "Mikel Vesga", "Iñigo Ruiz de Galarreta", "Oihan Sancet", "Beñat Prados", "Unai Gómez", "Nico Williams", "Iñaki Williams", "Álex Berenguer", "Gorka Guruzeta", "Álvaro Djaló"], "Real Sociedad": ["Álex Remiro", "Unai Marrero", "Hamari Traoré", "Igor Zubeldia", "Nayef Aguerd", "Jon Pacheco", "Aihen Muñoz", "Javi López", "Martín Zubimendi", "Brais Méndez", "Luka Sučić", "Beñat Turrientes", "Sergio Gómez", "Takefusa Kubo", "Mikel Oyarzabal", "Ander Barrenetxea", "Orri Óskarsson", "Sheraldo Becker"], "Villarreal": ["Diego Conde", "Luiz Júnior", "Kiko Femenía", "Juan Foyth", "Raúl Albiol", "Logan Costa", "Sergi Cardona", "Alfonso Pedraza", "Dani Parejo", "Santi Comesaña", "Pape Gueye", "Álex Baena", "Denis Suárez", "Yeremy Pino", "Nicolas Pépé", "Thierno Barry", "Ayoze Pérez", "Gerard Moreno"], "Real Betis": ["Rui Silva", "Adrián", "Héctor Bellerín", "Marc Bartra", "Diego Llorente", "Natan", "Romain Perraud", "Ricardo Rodríguez", "Johnny Cardoso", "Sergi Altimira", "Isco", "Giovani Lo Celso", "Pablo Fornals", "Abde Ezzalzouli", "Antony", "Jesús Rodríguez", "Cédric Bakambu", "Vitor Roque"], "Sevilla": ["Ørjan Nyland", "Álvaro Fernández", "José Ángel Carmona", "Loïc Badé", "Nemanja Gudelj", "Kike Salas", "Adrià Pedrosa", "Juanlu Sánchez", "Djibril Sow", "Lucien Agoumé", "Saúl Ñíguez", "Albert Sambi Lokonga", "Dodi Lukébakio", "Rubén Vargas", "Chidera Ejuke", "Peque Fernández", "Isaac Romero", "Akor Adams"], "Valencia": ["Giorgi Mamardashvili", "Stole Dimitrievski", "Thierry Correia", "Cristhian Mosquera", "César Tárrega", "Mouctar Diakhaby", "José Gayà", "Jesús Vázquez", "Pepelu", "Javi Guerra", "André Almeida", "Enzo Barrenechea", "Hugo Guillamón", "Diego López", "Luis Rioja", "Fran Pérez", "Hugo Duro", "Umar Sadiq"], "Girona": ["Paulo Gazzaniga", "Pau López", "Arnau Martínez", "David López", "Daley Blind", "Ladislav Krejčí", "Miguel Gutiérrez", "Alejandro Francés", "Yangel Herrera", "Iván Martín", "Oriol Romeu", "Donny van de Beek", "Portu", "Viktor Tsygankov", "Bryan Gil", "Arnaut Danjuma", "Cristhian Stuani", "Abel Ruiz"], "Celta de Vigo": ["Vicente Guaita", "Iván Villar", "Óscar Mingueza", "Carl Starfelt", "Marcos Alonso", "Javi Rodríguez", "Mihailo Ristić", "Manu Sánchez", "Fran Beltrán", "Ilaix Moriba", "Hugo Sotelo", "Damián Rodríguez", "Iago Aspas", "Williot Swedberg", "Jonathan Bamba", "Pablo Durán", "Borja Iglesias", "Alfon González"], "Osasuna": ["Sergio Herrera", "Aitor Fernández", "Jesús Areso", "Alejandro Catena", "Flavien Boyomo", "Jorge Herrando", "Juan Cruz", "Abel Bretones", "Lucas Torró", "Jon Moncayola", "Iker Muñoz", "Aimar Oroz", "Rubén García", "Moi Gómez", "Bryan Zaragoza", "Kike Barja", "Ante Budimir", "Raúl García de Haro"], "Getafe": ["David Soria", "Jiří Letáček", "Djené Dakonam", "Domingos Duarte", "Omar Alderete", "Juan Berrocal", "Diego Rico", "Juan Iglesias", "Mauro Arambarri", "Luis Milla", "Yellu Santiago", "Carles Aleñá", "Christantus Uche", "Álex Sola", "Coba da Costa", "Bertug Yildirim", "Borja Mayoral", "Álvaro Rodríguez"], "Rayo Vallecano": ["Augusto Batalla", "Dani Cárdenas", "Andrei Rațiu", "Florian Lejeune", "Abdul Mumin", "Aridane Hernández", "Pep Chavarría", "Pacha Espino", "Óscar Valentín", "Pathé Ciss", "Unai López", "Isi Palazón", "Jorge de Frutos", "Álvaro García", "Adrián Embarba", "Pedro Díaz", "Sergio Camello", "Randy Nteka"], "Mallorca": ["Dominik Greif", "Leo Román", "Pablo Maffeo", "Martin Valjent", "Antonio Raíllo", "José Copete", "Johan Mojica", "Toni Lato", "Samú Costa", "Omar Mascarell", "Sergi Darder", "Manu Morlanes", "Dani Rodríguez", "Robert Navarro", "Takuma Asano", "Cyle Larin", "Vedat Muriqi", "Abdón Prats"], "Espanyol": ["Joan García", "Fernando Pacheco", "Omar El Hilali", "Marash Kumbulla", "Leandro Cabrera", "Sergi Gómez", "Carlos Romero", "Brian Oliván", "Pol Lozano", "José Gragera", "Álex Král", "Edu Expósito", "Javi Puado", "Jofre Carreras", "Pere Milla", "Antoniu Roca", "Roberto Fernández", "Walid Cheddira"], "Alavés": ["Antonio Sivera", "Jesús Owono", "Nahuel Tenaglia", "Abdel Abqar", "Santiago Mouriño", "Moussa Diarra", "Manu Sánchez", "Carlos Martín", "Antonio Blanco", "Joan Jordán", "Jon Guridi", "Ander Guevara", "Tomás Conechny", "Carlos Vicente", "Stoichkov", "Kike García", "Toni Martínez", "Asier Villalibre"], "Las Palmas": ["Jasper Cillessen", "Dinko Horkaš", "Viti Rozada", "Álex Suárez", "Scott McKenna", "Mika Mármol", "Álex Muñoz", "Daley Sinkgraven", "Kirian Rodríguez", "Javi Muñoz", "Dário Essugo", "Enzo Loiodice", "Alberto Moleiro", "Sandro Ramírez", "Fábio Silva", "Marvin Park", "Benito Ramírez", "Oli McBurnie"], "Leganés": ["Marko Dmitrović", "Juan Soriano", "Valentin Rosier", "Sergio González", "Matija Nastasić", "Jorge Sáenz", "Javi Hernández", "Enric Franquesa", "Seydouba Cissé", "Yvan Neyou", "Darko Brašanac", "Renato Tapia", "Óscar Rodríguez", "Juan Cruz", "Dani Raba", "Munir El Haddadi", "Miguel de la Fuente", "Diego García"], "Real Valladolid": ["Karl Hein", "André Ferreira", "Luis Pérez", "Javi Sánchez", "David Torres", "Eray Cömert", "Lucas Rosa", "Adam Aznou", "Mario Martín", "Stanko Jurić", "Selim Amallah", "Kike Pérez", "Raúl Moro", "Iván Sánchez", "Anuar Tuhami", "Darwin Machís", "Marcos André", "Mamadou Sylla"]};
const spanishPositions=["GOL", "GOL", "LD", "ZAG", "ZAG", "ZAG", "LE", "LE", "VOL", "MC", "MC", "MEI", "MEI", "PD", "PE", "ATA", "ATA", "ATA"];
const spanishOvr={"Real Madrid":87,"Barcelona":86,"Atlético de Madrid":84,"Athletic Club":82,"Real Sociedad":81,"Villarreal":81,"Real Betis":80};


// Itália: referências de elencos 2024/25 para fins de jogo, não cadastro atualizado.
const italianPlayers={"Inter": ["Yann Sommer", "Josep Martínez", "Benjamin Pavard", "Alessandro Bastoni", "Francesco Acerbi", "Stefan de Vrij", "Federico Dimarco", "Denzel Dumfries", "Matteo Darmian", "Hakan Çalhanoğlu", "Nicolò Barella", "Henrikh Mkhitaryan", "Davide Frattesi", "Piotr Zieliński", "Kristjan Asllani", "Lautaro Martínez", "Marcus Thuram", "Mehdi Taremi"], "Milan": ["Mike Maignan", "Marco Sportiello", "Theo Hernández", "Fikayo Tomori", "Matteo Gabbia", "Malick Thiaw", "Strahinja Pavlović", "Emerson Royal", "Davide Calabria", "Tijjani Reijnders", "Youssouf Fofana", "Ruben Loftus-Cheek", "Ismaël Bennacer", "Christian Pulisic", "Rafael Leão", "Samuel Chukwueze", "Álvaro Morata", "Tammy Abraham"], "Juventus": ["Michele Di Gregorio", "Mattia Perin", "Bremer", "Federico Gatti", "Pierre Kalulu", "Andrea Cambiaso", "Nicolò Savona", "Juan Cabal", "Manuel Locatelli", "Khéphren Thuram", "Teun Koopmeiners", "Douglas Luiz", "Weston McKennie", "Kenan Yıldız", "Francisco Conceição", "Nicolás González", "Dušan Vlahović", "Randal Kolo Muani"], "Napoli": ["Alex Meret", "Simone Scuffet", "Giovanni Di Lorenzo", "Amir Rrahmani", "Alessandro Buongiorno", "Juan Jesus", "Mathías Olivera", "Leonardo Spinazzola", "Stanislav Lobotka", "André-Frank Zambo Anguissa", "Scott McTominay", "Billy Gilmour", "Philip Billing", "David Neres", "Matteo Politano", "Giacomo Raspadori", "Romelu Lukaku", "Noah Okafor"], "Atalanta": ["Marco Carnesecchi", "Rui Patrício", "Berat Djimsiti", "Isak Hien", "Giorgio Scalvini", "Sead Kolašinac", "Raoul Bellanova", "Davide Zappacosta", "Matteo Ruggeri", "Éderson", "Marten de Roon", "Mario Pašalić", "Lazar Samardžić", "Charles De Ketelaere", "Ademola Lookman", "Mateo Retegui", "Gianluca Scamacca", "Daniel Maldini"], "Roma": ["Mile Svilar", "Mathew Ryan", "Gianluca Mancini", "Evan Ndicka", "Mats Hummels", "Zeki Çelik", "Angeliño", "Alexis Saelemaekers", "Leandro Paredes", "Manu Koné", "Bryan Cristante", "Lorenzo Pellegrini", "Niccolò Pisilli", "Paulo Dybala", "Matías Soulé", "Stephan El Shaarawy", "Artem Dovbyk", "Eldor Shomurodov"], "Lazio": ["Ivan Provedel", "Christos Mandas", "Mario Gila", "Alessio Romagnoli", "Samuel Gigot", "Adam Marušić", "Nuno Tavares", "Luca Pellegrini", "Mattéo Guendouzi", "Nicolò Rovella", "Fisayo Dele-Bashiru", "Matías Vecino", "Gustav Isaksen", "Mattia Zaccagni", "Pedro", "Boulaye Dia", "Tijjani Noslin", "Valentín Castellanos"], "Fiorentina": ["David de Gea", "Pietro Terracciano", "Dodô", "Pietro Comuzzo", "Luca Ranieri", "Marin Pongračić", "Robin Gosens", "Fabiano Parisi", "Danilo Cataldi", "Rolando Mandragora", "Yacine Adli", "Nicolò Fagioli", "Albert Guðmundsson", "Andrea Colpani", "Lucas Beltrán", "Moise Kean", "Riccardo Sottil", "Michael Folorunsho"], "Bologna": ["Łukasz Skorupski", "Federico Ravaglia", "Emil Holm", "Sam Beukema", "Jhon Lucumí", "Nicolò Casale", "Juan Miranda", "Charalampos Lykogiannis", "Remo Freuler", "Lewis Ferguson", "Nikola Moro", "Tommaso Pobega", "Giovanni Fabbian", "Riccardo Orsolini", "Dan Ndoye", "Benjamín Domínguez", "Santiago Castro", "Thijs Dallinga"], "Torino": ["Vanja Milinković-Savić", "Alberto Paleari", "Saúl Coco", "Guillermo Maripán", "Ardian Ismajli", "Valentino Lazaro", "Marcus Pedersen", "Cristiano Biraghi", "Samuele Ricci", "Ivan Ilić", "Karol Linetty", "Nikola Vlašić", "Gvidas Gineitis", "Eljif Elmas", "Che Adams", "Duván Zapata", "Antonio Sanabria", "Yann Karamoh"], "Genoa": ["Nicola Leali", "Pierluigi Gollini", "Koni De Winter", "Johan Vásquez", "Mattia Bani", "Alessandro Vogliacco", "Stefano Sabelli", "Aarón Martín", "Morten Frendrup", "Milan Badelj", "Patrizio Masini", "Fabio Miretti", "Junior Messias", "Ruslan Malinovskyi", "Vitinha", "Andrea Pinamonti", "Caleb Ekuban", "Maxwel Cornet"], "Udinese": ["Maduka Okoye", "Răzvan Sava", "Jaka Bijol", "Thomas Kristensen", "Oumar Solet", "Christian Kabasele", "Kingsley Ehizibue", "Hassane Kamara", "Jesper Karlström", "Sandi Lovrić", "Jurgen Ekkelenkamp", "Martín Payero", "Arthur Atta", "Florian Thauvin", "Lorenzo Lucca", "Keinan Davis", "Alexis Sánchez", "Iker Bravo"], "Como": ["Jean Butez", "Emil Audero", "Ignace Van der Brempt", "Marc-Oliver Kempf", "Alberto Dossena", "Edoardo Goldaniga", "Álex Valle", "Alberto Moreno", "Máximo Perrone", "Lucas Da Cunha", "Sergi Roberto", "Nico Paz", "Gabriel Strefezza", "Assane Diao", "Jesús Rodríguez", "Patrick Cutrone", "Anastasios Douvikas", "Andrea Belotti"], "Parma": ["Zion Suzuki", "Leandro Chichizola", "Enrico Delprato", "Botond Balogh", "Alessandro Circati", "Giovanni Leoni", "Emanuele Valeri", "Woyo Coulibaly", "Adrián Bernabé", "Mandela Keita", "Nahuel Estévez", "Simon Sohm", "Hernani", "Dennis Man", "Pontus Almqvist", "Matteo Cancellieri", "Ange-Yoan Bonny", "Milan Đurić"], "Cagliari": ["Elia Caprile", "Simone Scuffet", "Yerry Mina", "Sebastiano Luperto", "José Luis Palomino", "Gabriele Zappa", "Tommaso Augello", "Adam Obert", "Antoine Makoumbou", "Răzvan Marin", "Alessandro Deiola", "Michel Adopo", "Nicolas Viola", "Gianluca Gaetano", "Nadir Zortea", "Zito Luvumbo", "Roberto Piccoli", "Leonardo Pavoletti"], "Lecce": ["Wladimiro Falcone", "Christian Früchtl", "Federico Baschirotto", "Kialonda Gaspar", "Tiago Gabriel", "Antonino Gallo", "Frédéric Guilbert", "Patrick Dorgu", "Ylber Ramadani", "Balthazar Pierret", "Lassana Coulibaly", "Hamza Rafia", "Thorir Helgason", "Santiago Pierotti", "Tete Morente", "Nikola Krstović", "Ante Rebić", "Jesper Karlsson"], "Verona": ["Lorenzo Montipò", "Simone Perilli", "Diego Coppola", "Paweł Dawidowicz", "Daniele Ghilardi", "Nicolás Valentini", "Jackson Tchatchoua", "Domagoj Bradarić", "Ondrej Duda", "Suat Serdar", "Reda Belahyane", "Daniel Silva", "Tomáš Suslov", "Grigoris Kastanos", "Amin Sarr", "Casper Tengstedt", "Daniel Mosquera", "Mathis Lambourde"], "Empoli": ["Devis Vásquez", "Marco Silvestri", "Ardian Ismajli", "Mattia Viti", "Saba Goglichidze", "Sebastiano Walukiewicz", "Giuseppe Pezzella", "Emmanuel Gyasi", "Liam Henderson", "Alberto Grassi", "Jacopo Fazzini", "Youssef Maleh", "Tino Anjorin", "Sebastiano Esposito", "Lorenzo Colombo", "Liberato Cacace", "Junior Sambia", "Christian Kouamé"], "Venezia": ["Filip Stanković", "Jesse Joronen", "Jay Idzes", "Michael Svoboda", "Giorgio Altare", "Fali Candé", "Francesco Zampano", "Mikael Ellertsson", "Hans Nicolussi Caviglia", "Alfred Duncan", "Gianluca Busio", "Issa Doumbia", "Gaetano Oristanio", "John Yeboah", "Alessio Zerbin", "Joel Pohjanpalo", "Christian Gytkjær", "Daniel Fila"], "Monza": ["Stefano Turati", "Alessandro Sorrentino", "Pablo Marí", "Armando Izzo", "Andrea Carboni", "Luca Caldirola", "Pedro Pereira", "Georgios Kyriakopoulos", "Matteo Pessina", "Roberto Gagliardini", "Warren Bondo", "Alessandro Bianco", "Samuele Vignato", "Gianluca Caprari", "Dany Mota", "Daniel Maldini", "Milan Đurić", "Andrea Petagna"]};
const italianClubs=Object.keys(italianPlayers);
// Bundesliga e Ligue 1: clubes representativos e elencos ilustrativos, não oficiais de 2026.
const germanClubs=["Bayern de Munique", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig", "Eintracht Frankfurt", "VfB Stuttgart", "Wolfsburg", "Borussia Mönchengladbach", "Freiburg", "Werder Bremen", "Hoffenheim", "Mainz 05", "Augsburg", "Union Berlin", "Hamburgo", "St. Pauli", "Heidenheim", "Colônia"];
const frenchClubs=["Paris Saint-Germain", "Olympique de Marseille", "Monaco", "Lyon", "Lille", "Nice", "Lens", "Rennes", "Strasbourg", "Brest", "Toulouse", "Nantes", "Auxerre", "Angers", "Le Havre", "Lorient", "Paris FC", "Metz"];
const newEuropeanRosters={"Bayern de Munique": ["Manuel Neuer", "Jonas Urbig", "Dayot Upamecano", "Kim Min-jae", "Jonathan Tah", "Hiroki Ito", "Alphonso Davies", "Josip Stanišić", "Konrad Laimer", "Joshua Kimmich", "Leon Goretzka", "Aleksandar Pavlović", "Jamal Musiala", "Michael Olise", "Serge Gnabry", "Kingsley Coman", "Harry Kane", "Luis Díaz"], "Borussia Dortmund": ["Gregor Kobel", "Alexander Meyer", "Nico Schlotterbeck", "Waldemar Anton", "Niklas Süle", "Ramy Bensebaini", "Julian Ryerson", "Yan Couto", "Emre Can", "Felix Nmecha", "Marcel Sabitzer", "Jobe Bellingham", "Julian Brandt", "Karim Adeyemi", "Maximilian Beier", "Serhou Guirassy", "Jamie Gittens", "Carney Chukwuemeka"], "Bayer Leverkusen": ["Mark Flekken", "Lukáš Hrádecký", "Edmond Tapsoba", "Jonathan Tah", "Piero Hincapié", "Jarell Quansah", "Alejandro Grimaldo", "Arthur", "Exequiel Palacios", "Robert Andrich", "Aleix García", "Granit Xhaka", "Florian Wirtz", "Martin Terrier", "Nathan Tella", "Patrik Schick", "Victor Boniface", "Amine Adli"], "RB Leipzig": ["Péter Gulácsi", "Maarten Vandevoordt", "Willi Orbán", "Castello Lukeba", "Lutsharel Geertruida", "David Raum", "Benjamin Henrichs", "El Chadaille Bitshiabu", "Xaver Schlager", "Amadou Haidara", "Nicolas Seiwald", "Christoph Baumgartner", "Assan Ouédraogo", "Antonio Nusa", "Xavi Simons", "Loïs Openda", "Benjamin Šeško", "Yussuf Poulsen"], "Eintracht Frankfurt": ["Kevin Trapp", "Kauã Santos", "Robin Koch", "Arthur Theate", "Tuta", "Nnamdi Collins", "Rasmus Kristensen", "Nathaniel Brown", "Ellyes Skhiri", "Hugo Larsson", "Oscar Højlund", "Mario Götze", "Can Uzun", "Ansgar Knauff", "Farès Chaïbi", "Jean-Mattéo Bahoya", "Hugo Ekitiké", "Jonathan Burkardt"], "Paris Saint-Germain": ["Gianluigi Donnarumma", "Matvey Safonov", "Marquinhos", "Willian Pacho", "Lucas Hernández", "Lucas Beraldo", "Achraf Hakimi", "Nuno Mendes", "Vitinha", "João Neves", "Fabián Ruiz", "Warren Zaïre-Emery", "Lee Kang-in", "Désiré Doué", "Ousmane Dembélé", "Khvicha Kvaratskhelia", "Bradley Barcola", "Gonçalo Ramos"], "Olympique de Marseille": ["Gerónimo Rulli", "Jeffrey de Lange", "Leonardo Balerdi", "Derek Cornelius", "CJ Egan-Riley", "Facundo Medina", "Amir Murillo", "Ulisses Garcia", "Pierre-Emile Højbjerg", "Geoffrey Kondogbia", "Valentin Rongier", "Adrien Rabiot", "Mason Greenwood", "Amine Harit", "Luis Henrique", "Jonathan Rowe", "Pierre-Emerick Aubameyang", "Neal Maupay"], "Monaco": ["Philipp Köhn", "Radosław Majecki", "Wilfried Singo", "Thilo Kehrer", "Mohammed Salisu", "Christian Mawissa", "Vanderson", "Caio Henrique", "Denis Zakaria", "Lamine Camara", "Aleksandr Golovin", "Maghnes Akliouche", "Takumi Minamino", "Eliesse Ben Seghir", "Krépin Diatta", "Breel Embolo", "Folarin Balogun", "George Ilenikhena"], "Lyon": ["Lucas Perri", "Rémy Descamps", "Clinton Mata", "Duje Ćaleta-Car", "Moussa Niakhaté", "Nicolás Tagliafico", "Ainsley Maitland-Niles", "Abner Vinícius", "Nemanja Matić", "Corentin Tolisso", "Jordan Veretout", "Tanner Tessmann", "Rayan Cherki", "Ernest Nuamah", "Malick Fofana", "Saïd Benrahma", "Alexandre Lacazette", "Georges Mikautadze"], "Lille": ["Lucas Chevalier", "Vito Mannone", "Bafodé Diakité", "Alexsandro Ribeiro", "Aïssa Mandi", "Tiago Santos", "Ismaily", "Gabriel Gudmundsson", "Benjamin André", "Ngal’ayel Mukau", "André Gomes", "Ayyoub Bouaddi", "Hákon Arnar Haraldsson", "Rémy Cabella", "Edon Zhegrova", "Osame Sahraoui", "Jonathan David", "Matias Fernandez-Pardo"], "Nice": ["Marcin Bułka", "Maxime Dupé", "Dante", "Mohamed Abdelmonem", "Youssouf Ndayishimiye", "Moïse Bombito", "Jonathan Clauss", "Melvin Bard", "Hicham Boudaoui", "Pablo Rosario", "Morgan Sanson", "Tanguy Ndombélé", "Sofiane Diop", "Jérémie Boga", "Gaëtan Laborde", "Evann Guessand", "Terem Moffi", "Mohamed-Ali Cho"]};
const newEuropeanPositions=["GOL", "GOL", "ZAG", "ZAG", "ZAG", "ZAG", "LD", "LE", "VOL", "MC", "MC", "MEI", "MEI", "PD", "PE", "ATA", "ATA", "ATA"];

const italianPositions=["GOL","GOL","LD","ZAG","ZAG","ZAG","LE","LE","VOL","MC","MC","MEI","MEI","PD","PE","ATA","ATA","ATA"];

const countryLeagues = [
 {name:'Brasil',flag:'🇧🇷',clubs:teams.map(t=>t[0])},
 {name:'Argentina',flag:'🇦🇷',clubs:['River Plate','Boca Juniors','Racing Club','Independiente','San Lorenzo','Estudiantes','Vélez Sarsfield','Lanús','Rosario Central','Newell’s Old Boys','Talleres','Belgrano']},
 {name:'Uruguai',flag:'🇺🇾',clubs:['Peñarol','Nacional','Defensor Sporting','Danubio','Liverpool (URU)','Montevideo City Torque','Wanderers','Cerro Largo','Boston River','River Plate (URU)']},
 {name:'Chile',flag:'🇨🇱',clubs:['Colo-Colo','Universidad de Chile','Universidad Católica','Palestino','Huachipato','Cobresal','Everton (CHI)','Unión Española','Coquimbo Unido','O’Higgins']},
 {name:'Colômbia',flag:'🇨🇴',clubs:['Atlético Nacional','Millonarios','América de Cali','Junior','Independiente Medellín','Deportes Tolima','Santa Fe','Once Caldas','Deportivo Cali','Águilas Doradas']},
 {name:'Equador',flag:'🇪🇨',clubs:['LDU Quito','Independiente del Valle','Barcelona SC','Emelec','Aucas','Universidad Católica (ECU)','El Nacional','Delfín','Orense','Mushuc Runa']},
 {name:'Paraguai',flag:'🇵🇾',clubs:['Olimpia','Cerro Porteño','Libertad','Guaraní','Nacional (PAR)','Sportivo Luqueño','Trinidense','2 de Mayo','General Caballero','Tacuary']},
 {name:'Peru',flag:'🇵🇪',clubs:['Universitario','Alianza Lima','Sporting Cristal','Melgar','Cienciano','Cusco FC','Sport Huancayo','ADT','Atlético Grau','Los Chankas']},
 {name:'Bolívia',flag:'🇧🇴',clubs:['Bolívar','The Strongest','Always Ready','Oriente Petrolero','Blooming','Wilstermann','Aurora','Nacional Potosí','Real Tomayapo','Independiente Petrolero']},
 {name:'Venezuela',flag:'🇻🇪',clubs:['Deportivo Táchira','Caracas FC','Monagas','Carabobo','Metropolitanos','Puerto Cabello','Zamora','La Guaira','Estudiantes de Mérida','Portuguesa']},
 {name:'Inglaterra',flag:'🏴',clubs:englishClubs},
 {name:'Espanha',flag:'🇪🇸',clubs:spanishClubs},
 {name:'Itália',flag:'🇮🇹',clubs:italianClubs},
 {name:'Alemanha',flag:'🇩🇪',clubs:germanClubs},
 {name:'França',flag:'🇫🇷',clubs:frenchClubs}

 ,{name:'Brasil Série B',flag:'🇧🇷',clubs:['Athletico-PR','Coritiba','Goiás','Cuiabá','América-MG','Atlético-GO','Vila Nova','Novorizontino','Criciúma','Avaí','Chapecoense','Operário-PR','CRB','CSA','Paysandu','Remo','Amazonas','Botafogo-SP','Ponte Preta','Ferroviária']}
 ,{name:'Brasil Série C',flag:'🇧🇷',clubs:['Náutico','Santa Cruz','Sport','Figueirense','Londrina','Maringá','Ypiranga-RS','Caxias','São Bernardo','Brusque','Ituano','Guarani','ABC','Confiança','Botafogo-PB','Floresta','Tombense','Retrô','Anápolis','Itabaiana']}
 ,{name:'Brasil Série D',flag:'🇧🇷',clubs:['Portuguesa','América-RN','Treze','Campinense','ASA','Juazeirense','Sergipe','Tocantinópolis','Brasiliense','Ceilândia','Mixto','Luverdense','Inter de Limeira','Água Santa','Santo André','Portuguesa-RJ','Nova Iguaçu','Cianorte','Joinville','Brasil de Pelotas']}
];

// Elencos de 18 atletas por clube. Nomes não verificados ficam explicitamente pendentes.
const knownForeign = {
 'River Plate': [['Franco Armani','GOL',81],['Paulo Díaz','ZAG',79],['Gonzalo Montiel','LD',80],['Marcos Acuña','LE',80],['Enzo Pérez','VOL',77],['Juan Fernando Quintero','MEI',79]],
 'Boca Juniors': [['Leandro Paredes','VOL',83],['Edinson Cavani','ATA',77],['Miguel Merentiel','ATA',79],['Agustín Marchesín','GOL',78]],
 'Racing Club': [['Adrián Martínez','ATA',80],['Gabriel Arias','GOL',77],['Santiago Sosa','VOL',78]],
 'Independiente': [['Rodrigo Rey','GOL',77]],
 'San Lorenzo': [['Iker Muniain','MEI',78]],
 'Peñarol': [['Leonardo Fernández','MEI',79],['Maximiliano Silvera','ATA',76]],
 'Nacional': [['Nicolás López','ATA',78]],
 'Colo-Colo': [['Arturo Vidal','VOL',77],['Brayan Cortés','GOL',76]],
 'Universidad de Chile': [['Charles Aránguiz','VOL',78],['Marcelo Díaz','VOL',75]],
 'Atlético Nacional': [['David Ospina','GOL',78],['Edwin Cardona','MEI',78]],
 'Millonarios': [['Radamel Falcao','ATA',76]],
 'LDU Quito': [['Alexander Domínguez','GOL',76]],
 'Independiente del Valle': [['Junior Sornoza','MEI',78]],
 'Olimpia': [['Derlis González','ATA',77]],
 'Libertad': [['Óscar Cardozo','ATA',76]],
 'Universitario': [['Andy Polo','LD',77],['Alex Valera','ATA',77]],
 'Alianza Lima': [['Paolo Guerrero','ATA',76],['Hernán Barcos','ATA',76]],
 'Sporting Cristal': [['Martín Cauteruccio','ATA',78]],
 'Bolívar': [['Ramiro Vaca','MEI',78]],
 'The Strongest': [['Enrique Triverio','ATA',76]],
 'Deportivo Táchira': [['Maurice Cova','MEI',74]]
};
// Referências de jogadores argentinos conhecidos de temporadas recentes.
// NÃO são elencos oficiais de novembro de 2026: confirmar transferências antes de usar como base real.
const argentinaReferences={"River Plate": [["Miguel Borja", "ATA", 80], ["Facundo Colidio", "ATA", 79], ["Maximiliano Meza", "MEI", 78], ["Nacho Fernández", "MEI", 77], ["Manuel Lanzini", "MEI", 77], ["Santiago Simón", "MC", 75], ["Fabricio Bustos", "LD", 77], ["Germán Pezzella", "ZAG", 79], ["Leandro González Pírez", "ZAG", 76], ["Jeremías Ledesma", "GOL", 77], ["Rodrigo Aliendro", "MC", 76], ["Sebastián Driussi", "ATA", 80]], "Boca Juniors": [["Exequiel Zeballos", "PE", 79], ["Kevin Zenón", "MEI", 78], ["Milton Giménez", "ATA", 77], ["Alan Velasco", "MEI", 78], ["Carlos Palacios", "MEI", 77], ["Tomás Belmonte", "VOL", 76], ["Milton Delgado", "VOL", 75], ["Luis Advíncula", "LD", 77], ["Marcos Rojo", "ZAG", 77], ["Lautaro Di Lollo", "ZAG", 75], ["Frank Fabra", "LE", 75], ["Nicolás Figal", "ZAG", 76], ["Cristian Lema", "ZAG", 75], ["Sergio Romero", "GOL", 76]], "Racing Club": [["Maximiliano Salas", "ATA", 78], ["Juan Nardoni", "VOL", 78], ["Agustín Almendra", "MC", 77], ["Luciano Vietto", "MEI", 78], ["Santiago Solari", "PD", 76], ["Facundo Mura", "LD", 76], ["Marco Di Césare", "ZAG", 77], ["Gastón Martirena", "LD", 76], ["Nazareno Colombo", "ZAG", 76], ["Martín Barrios", "MC", 74], ["Bruno Zuculini", "VOL", 75], ["Johan Carbonero", "PE", 76], ["Matías Zaracho", "MEI", 79], ["Germán Conti", "ZAG", 74], ["Matías Tagliamonte", "GOL", 73]], "Independiente": [["Gabriel Ávalos", "ATA", 77], ["Kevin Lomónaco", "ZAG", 79], ["Felipe Loyola", "MC", 78], ["Luciano Cabral", "MEI", 77], ["Santiago Montiel", "PD", 76], ["Iván Marcone", "VOL", 76], ["Federico Vera", "LD", 75], ["Álvaro Angulo", "LE", 76], ["Nicolás Freire", "ZAG", 75], ["Diego Tarzia", "PE", 74], ["Lautaro Millán", "MEI", 74], ["Pablo Galdames", "MC", 75], ["Santiago Hidalgo", "ATA", 74], ["Rodrigo Fernández Cedrés", "VOL", 74], ["Joaquín Blázquez", "GOL", 73], ["Alexis Canelo", "ATA", 74], ["Federico Mancuello", "MEI", 75]], "San Lorenzo": [["Andrés Vombergar", "ATA", 77], ["Ezequiel Cerutti", "PD", 75], ["Jhohan Romaña", "ZAG", 77], ["Gastón Campi", "ZAG", 75], ["Elián Irala", "VOL", 76], ["Malcom Braida", "LE", 76], ["Alexis Cuello", "ATA", 76], ["Nahuel Barrios", "MEI", 76], ["Facundo Altamirano", "GOL", 75], ["Gastón Hernández", "ZAG", 77], ["Nicolás Tripichio", "LD", 76], ["Matías Reali", "PE", 75], ["Santiago Sosa", "VOL", 76], ["Daniel Herrera", "ZAG", 74], ["Manuel Insaurralde", "MC", 74], ["Francisco Perruzzi", "VOL", 74], ["Cristian Tarragona", "ATA", 74]], "Estudiantes": [["Guido Carrillo", "ATA", 78], ["José Sosa", "MEI", 77], ["Santiago Ascacíbar", "VOL", 79], ["Tiago Palacios", "PD", 77], ["Edwuin Cetré", "PE", 78], ["Fernando Muslera", "GOL", 78], ["Luciano Lollo", "ZAG", 75], ["Facundo Rodríguez", "ZAG", 75], ["Eric Meza", "LD", 75], ["Alexis Manyoma", "MEI", 75], ["Joaquín Tobio Burgos", "MEI", 74], ["Ezequiel Piovi", "VOL", 77], ["Gastón Benedetti", "LE", 75], ["Cristian Medina", "MC", 79], ["Leandro Díaz", "ATA", 75], ["Matías Mansilla", "GOL", 75], ["Nehuén Benedetti", "MEI", 73], ["Román Gómez", "LD", 73]]};
for(const [club,players] of Object.entries(argentinaReferences)){
 const existing=knownForeign[club]||[];
 const seen=new Set(existing.map(p=>p[0].toLowerCase()));
 for(const p of players)if(!seen.has(p[0].toLowerCase())){existing.push(p);seen.add(p[0].toLowerCase());}
 knownForeign[club]=existing.slice(0,18);
}
const positions18=['GOL','GOL','LD','ZAG','ZAG','ZAG','LE','VOL','VOL','MC','MC','MEI','PD','PE','ATA','ATA','MEI','ZAG'];
function rosterSlot(club,k,li,ci){
 const real=li===0 ? (teams[ci][2][k] || null) : li===10 ? [englishPlayers[club][k],englishPositions[k],Math.min(91,Math.max(69,(englishOvr[club]||77)+(k%5)-2))] : li===11 ? [spanishPlayers[club][k],spanishPositions[k],Math.min(92,Math.max(68,(spanishOvr[club]||76)+(k%5)-2))] : (knownForeign[club]||[])[k];
 if(real) return {id:'s'+li+'_'+ci+'_'+k,name:real[0],pos:real[1],ovr:real[2],value:3*Math.max(1,Math.round((real[2]-65)*1.1*10)/10),verified:false};
 const ovr=Math.max(61,76-(ci%5)-(li>0?2:0)+(k%4));
 return {id:'s'+li+'_'+ci+'_'+k,name:'Atleta a confirmar '+(k+1),pos:positions18[k],ovr,value:3*Math.max(1,Math.round((ovr-65)*1.1*10)/10),placeholder:true};
}
function completeRoster(list,club,li,ci){
 const result=list.slice(0,18).map(x=>({...x}));
 for(let k=result.length;k<18;k++)result.push(rosterSlot(club,k,li,ci));
 return result;
}
const leaguePools=countryLeagues.map((league,li)=>league.clubs.map((name,i)=>({id:li+':'+i,name,country:li,ovr:li===0?Math.round(teams[i][2].reduce((s,p)=>s+p[2],0)/teams[i][2].length):Math.max(58,82-i%7+(li===1?2:0)-(li>=15?(li-14)*5:0)),players:li===0?null:Array.from({length:18},(_,k)=>rosterSlot(name,k,li,i))})));
function countryOfTeam(id){return Math.floor(id/1000)}
function clubUid(li,i){return li*1000+i}
function getClubByUid(uid){return leaguePools[Math.floor(uid/1000)]?.[uid%1000]}
function makeLeagueTable(li){return leaguePools[li].map((t,i)=>({id:i,pts:0,p:0,w:0,d:0,l:0,gf:0,ga:0}))}
function circleSchedule(n){let arr=Array.from({length:n},(_,i)=>i);if(n%2){arr.push(-1);n++}const out=[];for(let r=0;r<n-1;r++){let matches=[];for(let j=0;j<n/2;j++){const a=arr[j],b=arr[n-1-j];if(a>=0&&b>=0)matches.push([a,b])}out.push(matches);arr=[arr[0],arr[n-1],...arr.slice(1,n-1)]}return out}
function ensureExpansion(){
 if(state.brazilDivisionNames)syncBrazilDivisions();
 if(!state.country && state.country!==0)state.country=0;
 if(!state.countryTables)state.countryTables=countryLeagues.map((_,li)=>makeLeagueTable(li));
 while(state.countryTables.length<countryLeagues.length)state.countryTables.push(makeLeagueTable(state.countryTables.length));
 if(!state.countryRounds)state.countryRounds=countryLeagues.map(()=>0);
 while(state.countryRounds.length<countryLeagues.length)state.countryRounds.push(0);
 if(!state.foreignPlayers)state.foreignPlayers=leaguePools.map((league,li)=>li===0?null:league.map(t=>t.players.map(p=>({...p}))));
 state.players=state.players.map((arr,i)=>completeRoster(arr,teams[i][0],0,i));
 state.foreignPlayers=leaguePools.map((league,li)=>li===0?null:league.map((t,i)=>completeRoster((state.foreignPlayers[li]?.[i]||[]).map((p,k)=>p.name?.startsWith('Jogador ')?rosterSlot(t.name,k,li,i):p),t.name,li,i)));
 // Preencher vagas provisórias dos clubes argentinos com referências nomeadas, sem apagar transferências feitas.
 for(let ci=0;ci<countryLeagues[1].clubs.length;ci++){
  const club=countryLeagues[1].clubs[ci], refs=knownForeign[club]||[], roster=state.foreignPlayers[1][ci];
  const named=new Set(roster.filter(p=>!p.placeholder).map(p=>p.name));
  for(const ref of refs){if(named.has(ref[0]))continue;const slot=roster.findIndex(p=>p.placeholder);
   if(slot<0)break;roster[slot]={id:'ar'+ci+'_'+slot,name:ref[0],pos:ref[1],ovr:ref[2],value:3*Math.max(1,Math.round((ref[2]-65)*1.1*10)/10),verified:false};named.add(ref[0]);}
 }
 // Converter apenas vagas provisórias italianas em atletas identificados, sem sobrescrever transferências.
 const it=countryLeagues.findIndex(l=>l.name==='Itália');
 for(let ci=0;ci<italianClubs.length;ci++){
  const roster=state.foreignPlayers[it][ci], names=italianPlayers[italianClubs[ci]];
  const existing=new Set(roster.filter(p=>!p.placeholder).map(p=>p.name));
  for(let k=0;k<names.length;k++){
   if(existing.has(names[k]))continue;
   const idx=roster.findIndex(p=>p.placeholder||p.name?.startsWith('Atleta a confirmar'));
   if(idx<0)break;
   const ovr=Math.max(68,Math.min(91,Math.round(79+(ci<5?4:ci<10?1:-2)-(k===1?3:0)+(k>=15?1:0))));
   roster[idx]={id:'it'+ci+'_'+k,name:names[k],pos:italianPositions[k],ovr,value:3*Math.round((ovr-65)*11)/10,verified:false};existing.add(names[k]);
  }
 }
 // Inserir referências de jogadores nas novas ligas, preservando contratações já realizadas.
 for(const li of [13,14]){
  for(let ci=0;ci<countryLeagues[li].clubs.length;ci++){
   const club=countryLeagues[li].clubs[ci],names=newEuropeanRosters[club]||[];
   const roster=state.foreignPlayers[li][ci], existing=new Set(roster.filter(p=>!p.placeholder).map(p=>p.name));
   for(let k=0;k<names.length;k++){
    if(existing.has(names[k]))continue;
    const idx=roster.findIndex(p=>p.placeholder||p.name?.startsWith('Atleta a confirmar'));
    if(idx<0)break;
    const ovr=Math.max(68,Math.min(92,Math.round(82-(ci>4?5:ci>1?2:0)+(k>=14?1:0))));
    roster[idx]={id:'eu'+li+'_'+ci+'_'+k,name:names[k],pos:newEuropeanPositions[k],ovr,value:3*Math.round((ovr-65)*11)/10,verified:false};existing.add(names[k]);
   }
  }
 }
 if(state.viewClub===undefined)state.viewClub=null;
 if(!state.continental)state.continental={year:state.year,round:0,fixtures:[],results:[],champion:null,qualified:false};
 if(!state.careerCountry && state.careerCountry!==0)state.careerCountry=0;
 if(!state.careerClub && state.careerClub!==0)state.careerClub=state.club;
 if(!state.continentalHistory)state.continentalHistory=[];
 if(!state.payroll)state.payroll={year:state.year,monthsPaid:0,history:[]};
 if(!state.champions||state.champions.year!==state.year||(!state.champions.results?.length && state.champions.remaining?.length===16))initChampions();
}

// Estatísticas fictícias geradas por partida; não representam dados oficiais.
function statsInit(){if(!state.scorers||state.scorers.year!==state.year)state.scorers={year:state.year,competitions:{}}}
function playerForEvent(uid){const li=Math.floor(uid/1000),ci=uid%1000;const roster=li===0?state.players[ci]:state.foreignPlayers[li]?.[ci];return (roster||[]).filter(p=>!p.placeholder&&p.name&&!p.name.startsWith('Atleta a confirmar'));}
function pickEventPlayer(uid,assist=false){const players=playerForEvent(uid);if(!players.length)return null;const weights=players.map(p=>{const pos=(p.pos||'').toUpperCase();let w=assist?(/MEI|MC|PD|PE|VOL|LD|LE/.test(pos)?4:1):(/ATA|PD|PE/.test(pos)?6:/MEI|MC/.test(pos)?3:1);return w*Math.max(.5,(p.ovr||70)/75)});let n=Math.random()*weights.reduce((a,b)=>a+b,0);for(let i=0;i<players.length;i++){n-=weights[i];if(n<=0)return players[i]}return players[players.length-1]}
function recordGoals(comp,a,b,x,y){statsInit();const stats=state.scorers.competitions[comp]||(state.scorers.competitions[comp]={});for(const [uid,goals] of [[a,x],[b,y]])for(let i=0;i<goals;i++){const scorer=pickEventPlayer(uid);if(!scorer)continue;const key=uid+'|'+String(scorer.id??scorer.name);const row=stats[key]||(stats[key]={name:scorer.name,uid,goals:0,assists:0});row.goals++;if(Math.random()<.73){const helpers=playerForEvent(uid).filter(p=>p!==scorer&&String(p.id??p.name)!==String(scorer.id??scorer.name));if(helpers.length){const helper=helpers[Math.floor(Math.random()*helpers.length)];const hk=uid+'|'+String(helper.id??helper.name);const hrow=stats[hk]||(stats[hk]={name:helper.name,uid,goals:0,assists:0});hrow.assists++}}}}
function statsCompetitionNames(){return [...countryLeagues.map((l,i)=>({key:'league-'+i,name:l.flag+' '+l.name})),{key:'libertadores',name:'🏆 Libertadores'},{key:'sudamericana',name:'🏆 Sul-Americana'},...countryLeagues.map((l,i)=>({key:'cup-'+i,name:'🏆 Copa Nacional — '+l.name})),{key:'world',name:'🌍 Super Mundial'},{key:'champions',name:'⭐ Champions League'}]}
function statsTable(comp,kind){statsInit();const arr=Object.values(state.scorers.competitions[comp]||{}).filter(x=>x[kind]>0).sort((a,b)=>b[kind]-a[kind]||(kind==='goals'?b.assists-a.assists:b.goals-a.goals)).slice(0,15);return `<div class="tablewrap"><table><thead><tr><th>#</th><th>JOGADOR</th><th>CLUBE</th><th>${kind==='goals'?'GOLS':'ASSIST.'}</th></tr></thead><tbody>${arr.map((x,i)=>`<tr><td>${i+1}</td><td>${x.name}</td><td>${getClubByUid(x.uid)?.name||'Clube'}</td><td><b>${x[kind]}</b></td></tr>`).join('')||'<tr><td colspan="4">Ainda não há estatísticas registradas nesta competição.</td></tr>'}</tbody></table></div>`}
function statsWidget(comp){return `<section class="panel"><h3>⚽ Artilharia</h3>${statsTable(comp,'goals')}</section><section class="panel"><h3>🎯 Líderes em assistências</h3>${statsTable(comp,'assists')}</section>`}
function renderStatistics(){const names=statsCompetitionNames();const selected=names.find(n=>n.key===state.statsComp)||names[0];return `<section class="panel"><h3>⚽ Artilharia e 🎯 assistências — ${state.year}</h3><p class="muted">Estatísticas fictícias das partidas simuladas nesta versão. Partidas de versões anteriores não possuem autores de gols registrados.</p><select id="statsSelect" style="width:100%;padding:12px;border-radius:8px;background:#17251b;color:white;border:1px solid #516453">${names.map(n=>`<option value="${n.key}" ${n.key===selected.key?'selected':''}>${n.name}</option>`).join('')}</select></section>${statsWidget(selected.key)}`}

// Cada clube tem fases diferentes a cada temporada: elencos fortes continuam favoritos,
// mas o desempenho oscila e permite mais campeoes ao longo de carreiras longas.
function seasonalForm(uid){
 const year=Number(state.year)||2026;
 const n=Math.sin((uid+17)*12.9898+(year-2000)*78.233)*43758.5453;
 const v=(n-Math.floor(n))*2-1;
 const n2=Math.sin((uid+41)*29.17+(year-2000)*11.91)*15678.231;
 return v*5.3+((n2-Math.floor(n2))*2-1)*2.1;
}
function poissonGoals(lambda){
 let k=0,prod=1,limit=Math.exp(-Math.max(.12,Math.min(5,lambda)));
 do{k++;prod*=Math.random()}while(prod>limit&&k<10);
 return k-1;
}
function scorePower(ovrA,ovrB,uidA=null,uidB=null){
 const formA=uidA===null?0:seasonalForm(uidA);
 const formB=uidB===null?0:seasonalForm(uidB);
 const gap=Math.max(-38,Math.min(38,(ovrA||70)-(ovrB||70)+formA-formB));
 // Favoritos vencem mais vezes, mas zebras, empates e goleadas seguem possiveis.
 const upset=Math.random()<.17?(Math.random()-.5)*18:0;
 const tempo=.85+Math.random()*.45;
 return poissonGoals(Math.max(.3,Math.min(3.8,(1.35+gap*.042+upset*.035)*tempo)));
}
function getPower(uid){let li=Math.floor(uid/1000),idx=uid%1000;if(li===0)return strength(idx);let p=state.foreignPlayers[li][idx];return p.reduce((s,x)=>s+x.ovr,0)/p.length}
function allClubNames(){return leaguePools.flat().map(t=>t.name)}
function simulateForeignRound(li){const rounds=circleSchedule(leaguePools[li].length),r=state.countryRounds[li];if(r>=rounds.length)return false;for(let [a,b] of rounds[r]){let x=scorePower(getPower(clubUid(li,a)),getPower(clubUid(li,b)),clubUid(li,a),clubUid(li,b)),y=scorePower(getPower(clubUid(li,b)),getPower(clubUid(li,a)),clubUid(li,b),clubUid(li,a));if(state.liveResult&&state.liveResult.li===li&&state.liveResult.round===r&&(a===state.careerClub||b===state.careerClub)){const home=a===state.careerClub;x=home?state.liveResult.own:state.liveResult.away;y=home?state.liveResult.away:state.liveResult.own}updateLeagueTable(state.countryTables[li],a,b,x,y);recordGoals("league-"+li,clubUid(li,a),clubUid(li,b),x,y)}state.countryRounds[li]++;return true}
function updateLeagueTable(table,a,b,x,y){let A=table[a],B=table[b];A.p++;B.p++;A.gf+=x;A.ga+=y;B.gf+=y;B.ga+=x;if(x>y){A.w++;B.l++;A.pts+=3}else if(y>x){B.w++;A.l++;B.pts+=3}else{A.d++;B.d++;A.pts++;B.pts++}}
function leagueRank(table){return [...table].sort((a,b)=>b.pts-a.pts||((b.gf-b.ga)-(a.gf-a.ga))||b.gf-a.gf)}
function newLibertadores(){
 // 32 participantes de 10 países, incluindo 4 do Brasil e 4 da Argentina.
 const quota=[4,4,3,3,3,3,3,3,3,3];let entrants=[];
 for(let li=0;li<10;li++){const ranks=li===0?tableSorted():leagueRank(state.countryTables[li]);for(let t of ranks.slice(0,quota[li]))entrants.push(clubUid(li,t.id))}
 // Embaralhamento determinístico da ordem por país para distribuir grupos.
 entrants=entrants.sort((a,b)=>(a%1000)-(b%1000)||Math.floor(a/1000)-Math.floor(b/1000));
 const groups=Array.from({length:8},(_,i)=>entrants.slice(i*4,i*4+4));
 state.continental={year:state.year,round:0,groups,groupTables:groups.map(g=>g.map(uid=>({uid,pts:0,p:0,gf:0,ga:0}))),results:[],knockout:null,champion:null,qualified:groups.some(g=>g.includes(clubUid(state.careerCountry,state.careerClub)))};
}
function newSudamericana(){
 const quotas=[4,4,3,3,3,3,3,3,3,3];let entrants=[];
 for(let li=0;li<10;li++){
  const rank=li===0?tableSorted():leagueRank(state.countryTables[li]);
  const picked=rank.slice(quotas[li],quotas[li]*2);
  // Leagues with 10 teams have enough slots; Brazilian league has 20.
  for(const t of picked)entrants.push(clubUid(li,t.id));
 }
 // Ensure 32 unique entries if a league is small.
 const used=new Set(entrants);
 for(let li=0;li<countryLeagues.length&&entrants.length<32;li++)for(let ci=0;ci<countryLeagues[li].clubs.length&&entrants.length<32;ci++){
  const uid=clubUid(li,ci);if(!used.has(uid)){entrants.push(uid);used.add(uid)}
 }
 entrants=entrants.slice(0,32);
 const groups=Array.from({length:8},(_,i)=>entrants.slice(i*4,i*4+4));
 state.sudamericana={year:state.year,round:0,groups,groupTables:groups.map(g=>g.map(uid=>({uid,pts:0,p:0,gf:0,ga:0}))),results:[],knockout:null,champion:null,qualified:groups.some(g=>g.includes(clubUid(state.careerCountry,state.careerClub)))};
}
function simulateSudamericana(){
 const c=state.sudamericana;if(!c||c.champion!==null)return;
 if(c.round<6){let fixtures=[[0,1],[2,3]];
  if(c.round%3===1)fixtures=[[0,2],[1,3]];
  if(c.round%3===2)fixtures=[[0,3],[1,2]];
  if(c.round>=3)fixtures=fixtures.map(([a,b])=>[b,a]);
  for(let gi=0;gi<8;gi++)for(const [a,b] of fixtures){
   const u=c.groups[gi][a],v=c.groups[gi][b],[x,y]=cupPairScores(u,v);
   const A=c.groupTables[gi][a],B=c.groupTables[gi][b];
   A.p++;B.p++;A.gf+=x;A.ga+=y;B.gf+=y;B.ga+=x;
   if(x>y)A.pts+=3;else if(y>x)B.pts+=3;else{A.pts++;B.pts++}
   c.results.push({round:'Grupos '+(c.round+1),a:u,b:v,x,y});recordGoals('libertadores',u,v,x,y);recordGoals('sudamericana',u,v,x,y);
  }
  c.round++;
  if(c.round===6)c.knockout=c.groupTables.flatMap(t=>[...t].sort((a,b)=>b.pts-a.pts||(b.gf-b.ga)-(a.gf-a.ga)).slice(0,2).map(x=>x.uid));
 }else{
  const winners=[];for(let i=0;i<c.knockout.length;i+=2){const a=c.knockout[i],b=c.knockout[i+1];let [x,y]=cupPairScores(a,b);
   if(x===y){if(Math.random()<.5)x++;else y++}
   winners.push(x>y?a:b);c.results.push({round:['Oitavas','Quartas','Semifinal','Final'][c.round-6],a,b,x,y});recordGoals('libertadores',a,b,x,y);recordGoals('sudamericana',a,b,x,y);
  }
  c.knockout=winners;c.round++;
  if(winners.length===1){c.champion=winners[0];state.budget+=c.champion===clubUid(state.careerCountry,state.careerClub)?22:0;}
 }
 save();render();alertMsg(c.champion!==null?'🏆 Campeão da Sul-Americana: '+getClubByUid(c.champion).name:'Sul-Americana: etapa avançada!');
}
function isEuropeanCareer(){return careerLeague()>=10}
function cupsFinished(){
 // Clubes europeus não dependem das copas continentais sul-americanas.
 const continentalsDone=isEuropeanCareer() ? state.champions?.champion!=null : (state.continental?.champion!=null && state.sudamericana?.champion!=null);
 return continentalsDone && extraCupsFinished();
}
function simulateLibertadores(){const c=state.continental;if(c.champion!==null)return;
 if(c.round<6){let fixtures=[[0,1],[2,3]];if(c.round%3===1)fixtures=[[0,2],[1,3]];if(c.round%3===2)fixtures=[[0,3],[1,2]];if(c.round>=3)fixtures=fixtures.map(([a,b])=>[b,a]);
 for(let gi=0;gi<8;gi++){for(let [a,b] of fixtures){let u=c.groups[gi][a],v=c.groups[gi][b],[x,y]=cupPairScores(u,v);let A=c.groupTables[gi][a],B=c.groupTables[gi][b];A.p++;B.p++;A.gf+=x;A.ga+=y;B.gf+=y;B.ga+=x;if(x>y)A.pts+=3;else if(y>x)B.pts+=3;else{A.pts++;B.pts++}c.results.push({round:'Grupos '+(c.round+1),a:u,b:v,x,y})}}c.round++;
 if(c.round===6){const qualifiers=c.groupTables.flatMap(t=>[...t].sort((a,b)=>b.pts-a.pts||(b.gf-b.ga)-(a.gf-a.ga)).slice(0,2).map(x=>x.uid));c.knockout=qualifiers;}
 }else{
 let winners=[];for(let i=0;i<c.knockout.length;i+=2){const a=c.knockout[i],b=c.knockout[i+1];let [x,y]=cupPairScores(a,b);if(x===y){if(Math.random()<.5)x++;else y++}winners.push(x>y?a:b);c.results.push({round:['Oitavas','Quartas','Semifinal','Final'][c.round-6],a,b,x,y})}c.knockout=winners;c.round++;if(winners.length===1){c.champion=winners[0];state.continentalHistory.push({year:state.year,champion:c.champion});state.budget+=c.champion===clubUid(state.careerCountry,state.careerClub)?35:0;}}
 save();render();alertMsg(c.champion!==null?'🏆 Campeão: '+getClubByUid(c.champion).name:'Libertadores: etapa avançada!');
}
function renderSouth(){let li=state.country;let league=countryLeagues[li],rank=li===0?tableSorted():leagueRank(state.countryTables[li]);let max=circleSchedule(league.clubs.length).length;return `<section class="panel"><h3>🌍 Ligas nacionais e divisões brasileiras</h3><p class="muted">Explore ligas sul-americanas, europeias e as Séries A, B, C e D do Brasil. Clubes são representativos, e resultados são fictícios. Formatos simplificados.</p><div class="leaguechips">${countryLeagues.map((l,i)=>`<button class="chip ${i===li?'selected':''}" data-country="${i}">${l.flag} ${l.name}</button>`).join('')}</div><div class="row"><b>${league.flag} ${league.name}</b><span>Rodada ${li===0?state.round:state.countryRounds[li]}/${max}</span></div>${li!==0?`<button class="primary" id="simcountry" ${state.countryRounds[li]>=max||li===careerLeague()?'disabled':''}>▶ Simular rodada da liga</button>`:'<p class="muted">A Série A brasileira avança pela Central do Treinador.</p>'}<div class="tablewrap"><table><thead><tr><th>#</th><th>CLUBE</th><th>PTS</th><th>J</th><th>V</th><th>SG</th></tr></thead><tbody>${rank.map((t,i)=>`<tr><td>${i+1}</td><td><button class="club-link" data-viewclub="${li}:${t.id}">${league.clubs[t.id]}</button></td><td><b>${t.pts}</b></td><td>${t.p}</td><td>${t.w}</td><td>${t.gf-t.ga}</td><td><small>${qualificationZone(careerLeague(),i+1,careerRank().length)[0]}</small></td></tr>`).join('')}</tbody></table></div></section>`}
function renderClubRoster(){const [li,ci]=(state.viewClub||'0:0').split(':').map(Number);const team=leaguePools[li][ci];const roster=li===0?state.players[ci]:state.foreignPlayers[li][ci];return `<section class="panel"><button class="secondary" id="backclubs">← Voltar às ligas</button><h3>${team.name} — ${countryLeagues[li].flag} ${countryLeagues[li].name}</h3><p class="muted">18 vagas por equipe. Nomes identificados são referências históricas/recentes, sem vínculo confirmado em novembro de 2026. “Atleta a confirmar” não representa jogador real cadastrado.</p><div class="tablewrap"><table><thead><tr><th>#</th><th>JOGADOR</th><th>POSIÇÃO</th><th>GER</th><th>VALOR</th></tr></thead><tbody>${roster.map((p,i)=>`<tr><td>${i+1}</td><td>${p.name}</td><td>${p.pos}</td><td class="rating">${p.ovr}</td><td title="${marketValueInfo(p)}">${fmt(p.value)}${Number.isFinite(p.transfermarktEUR)?' ✓':' *'}</td></tr>`).join('')}</tbody></table></div></section>`}
function renderLibertadores(){const c=state.continental;const stage=c.champion!==null?'Finalizada':c.round<6?'Fase de grupos • Rodada '+(c.round+1)+'/6':['Oitavas','Quartas','Semifinal','Final'][c.round-6];return `<section class="hero"><div><span class="eyebrow">COPA LIBERTADORES DA AMÉRICA</span><h2>🏆 Libertadores ${c.year}</h2><p>${stage}</p><button class="primary" id="simlib" ${c.champion!==null?'disabled':''}>▶ ${c.champion!==null?'COMPETIÇÃO ENCERRADA':'SIMULAR PRÓXIMA ETAPA'}</button></div><div class="ball">🏆</div></section><section class="panel"><h3>${c.champion!==null?'🏆 Campeão: '+getClubByUid(c.champion).name:'Fase de grupos'}</h3><p class="muted">32 clubes • 8 grupos de 4 • 6 rodadas e mata-mata em jogo único. Participantes simulados; não é o sorteio oficial da CONMEBOL.</p><div class="groupgrid">${c.groupTables.map((group,gi)=>`<div class="groupcard"><h4>GRUPO ${'ABCDEFGH'[gi]}</h4>${[...group].sort((a,b)=>b.pts-a.pts||(b.gf-b.ga)-(a.gf-a.ga)).map(t=>`<div class="groupteam"><span>${getClubByUid(t.uid).name}</span><b>${t.pts}</b></div>`).join('')}</div>`).join('')}</div></section><section class="panel"><h3>Últimos jogos</h3>${c.results.slice(-16).reverse().map(r=>`<div class="row"><span>${getClubByUid(r.a).name} × ${getClubByUid(r.b).name}</span><b>${r.x} - ${r.y}</b></div>`).join('')||'<p class="muted">A competição ainda não começou.</p>'}</section>${bracketHTML(c,false,true)}`}

function renderSudamericana(){
 const c=state.sudamericana;
 const stage=c.champion!==null?'Finalizada':c.round<6?'Fase de grupos • Rodada '+(c.round+1)+'/6':['Oitavas','Quartas','Semifinal','Final'][c.round-6];
 return `<section class="hero"><div><span class="eyebrow">COPA SUL-AMERICANA</span><h2>🏆 Sul-Americana ${c.year}</h2><p>${stage}</p><button class="primary" id="simsud" ${c.champion!==null?'disabled':''}>▶ ${c.champion!==null?'COMPETIÇÃO ENCERRADA':'SIMULAR PRÓXIMA ETAPA'}</button></div><div class="ball">🌎</div></section><section class="panel"><h3>${c.champion!==null?'🏆 Campeão: '+getClubByUid(c.champion).name:'Fase de grupos'}</h3><p class="muted">Simulação simplificada: 32 clubes, oito grupos, mata-mata em jogo único. Não reproduz o regulamento oficial da CONMEBOL.</p><div class="groupgrid">${c.groupTables.map((group,gi)=>`<div class="groupcard"><h4>GRUPO ${'ABCDEFGH'[gi]}</h4>${[...group].sort((a,b)=>b.pts-a.pts||(b.gf-b.ga)-(a.gf-a.ga)).map(t=>`<div class="groupteam"><span>${getClubByUid(t.uid).name}</span><b>${t.pts}</b></div>`).join('')}</div>`).join('')}</div></section><section class="panel"><h3>Últimos jogos</h3>${c.results.slice(-16).reverse().map(r=>`<div class="row"><span>${getClubByUid(r.a).name} × ${getClubByUid(r.b).name}</span><b>${r.x} - ${r.y}</b></div>`).join('')||'<p class="muted">A competição ainda não começou.</p>'}</section>${bracketHTML(c,false,true)}`;
}
const SINGLE_KEY='poifootb_carreira_v1';
const MULTI_KEY='poifootb_multiplayer_local_v1';
const WORLD_KEY='poifootb_multiplayer_world_v2';
let multiplayer=null;
try{multiplayer=JSON.parse(localStorage.getItem(MULTI_KEY))}catch(e){}
// Salas antigas possuíam carreiras independentes: não misturar os saves antigos.
if(multiplayer&&!multiplayer.sharedWorld)multiplayer=null;
function activeKey(){return multiplayer?WORLD_KEY:SINGLE_KEY}
let state;try{state=JSON.parse(localStorage.getItem(activeKey()))}catch(e){}
function makeState(){return {marketPricesVersion:3,year:2026,club:null,round:0,budget:35,players:teams.map((t,i)=>completeRoster(t[2].map((p,j)=>({id:i*100+j+1,name:p[0],pos:p[1],ovr:p[2],value:3*Math.max(1,Math.round((p[2]-65)*1.1*10)/10)})),t[0],0,i)),results:[],history:[],standings:teams.map((t,i)=>({id:i,pts:0,p:0,w:0,d:0,l:0,gf:0,ga:0})),page:'home',nextId:9999};}
if(!state||!Array.isArray(state.players)||state.players.length!==20)state=makeState();
ensureExpansion();if(!state.continental.groups)newLibertadores();if(!state.sudamericana||state.sudamericana.year!==state.year)newSudamericana();initExtraCups();
const $=id=>document.getElementById(id);const fmt=n=>'R$ '+Number(n).toFixed(1).replace('.',',')+' mi';
// Os preços antigos são estimativas do simulador em R$ milhões, NÃO dados do Transfermarkt.
// Importação opcional de valores verificados pelo usuário, em euros (valor absoluto).
const TM_EUR_TO_GAME_BRL=6; // taxa de conversão de referência do jogo, não cotação atual
function allPlayerRosters(){return [...(state.players||[]),...(state.foreignPlayers||[]).filter(Array.isArray).flat()].filter(Array.isArray)}
function marketValueInfo(p){
 if(p.placeholder)return 'Sem valor real (vaga provisória)';
 if(Number.isFinite(p.transfermarktEUR))return 'Transfermarkt de referência (preço do jogo 3×): € '+(p.transfermarktEUR/1e6).toLocaleString('pt-BR',{maximumFractionDigits:2})+' mi'+(p.transfermarktDate?' • '+p.transfermarktDate:'');
 return 'Estimativa do jogo (não verificada no Transfermarkt)';
}
// Amostra de valores de mercado publicados em páginas do Transfermarkt, consultadas em 06/11/2026.
// Não representa atualização integral nem automática dos elencos; preserva importações existentes.
const VERIFIED_TM_VALUES=[
 {club:'Flamengo',names:{'Agustín Rossi':10000000,'Arrascaeta':14000000,'Léo Pereira':12000000}},
 {club:'Real Madrid',names:{'Kylian Mbappé':200000000,'Jude Bellingham':160000000,'Vinícius Júnior':140000000,'Federico Valverde':90000000,'Arda Güler':90000000}}
];
function applyVerifiedMarketValues(){
 for(const entry of VERIFIED_TM_VALUES){
  const li=countryLeagues.findIndex(l=>l.clubs.includes(entry.club));if(li<0)continue;
  const ci=countryLeagues[li].clubs.indexOf(entry.club);
  const roster=li===0?state.players?.[ci]:state.foreignPlayers?.[li]?.[ci];if(!roster)continue;
  for(const p of roster){if(p.placeholder||Number.isFinite(p.transfermarktEUR))continue;
   const normalized=n=>n.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
   const key=Object.keys(entry.names).find(k=>normalized(k)===normalized(p.name));
   if(!key)continue;
   p.transfermarktEUR=entry.names[key];p.transfermarktDate='consulta 2026-11-06';
   p.transfermarktSource='https://www.transfermarkt.com/';
   p.value=3*Math.round(p.transfermarktEUR/1e6*TM_EUR_TO_GAME_BRL*10)/10;
  }
 }
}
applyVerifiedMarketValues();
// Migração única dos saves antigos: triplica os preços já existentes sem repetir a cada abertura.
function ensureTripleMarketPrices(){
 if(state.marketPricesVersion===3)return;
 for(const roster of allPlayerRosters())for(const p of roster){if(Number.isFinite(p.value))p.value=Math.round(p.value*30)/10;}
 state.marketPricesVersion=3;
 localStorage.setItem(activeKey(),JSON.stringify(state));
}
ensureTripleMarketPrices();
function importMarketValues(){
 const field=$('tm-import'),status=$('tm-import-status');if(!field)return;
 let rows;try{rows=JSON.parse(field.value)}catch(e){status.textContent='JSON inválido. Confira vírgulas e aspas.';return}
 if(!Array.isArray(rows)){status.textContent='O conteúdo precisa ser uma lista JSON.';return}
 let changed=0,ambiguous=0,invalid=0;
 const rosterByClub=new Map();countryLeagues.forEach((league,li)=>league.clubs.forEach((club,ci)=>{
 const roster=li===0?state.players[ci]:state.foreignPlayers?.[li]?.[ci];
 if(roster)rosterByClub.set((league.name+'|'+club).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(),roster)
 }));
 for(const row of rows){
  if(!row||typeof row.jogador!=='string'||typeof row.clube!=='string'||typeof row.liga!=='string'||!Number.isFinite(row.valorEUR)||row.valorEUR<0||row.valorEUR>500000000||!/^\d{4}-\d{2}-\d{2}$/.test(row.data||'')){invalid++;continue}
  const key=(row.liga+'|'+row.clube).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const roster=rosterByClub.get(key);
  const matches=(roster||[]).filter(p=>!p.placeholder&&p.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()===row.jogador.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase());
  if(matches.length!==1){ambiguous++;continue}
  const player=matches[0];player.transfermarktEUR=row.valorEUR;player.transfermarktDate=row.data;player.value=3*Math.round(row.valorEUR/1e6*TM_EUR_TO_GAME_BRL*10)/10;changed++;
 }
 save();status.textContent=`${changed} valores importados • ${ambiguous} nomes não encontrados/ambíguos • ${invalid} entradas inválidas.`;render();
 const after=$('tm-import-status');if(after)after.textContent=`${changed} valores importados • ${ambiguous} não encontrados/ambíguos • ${invalid} inválidos.`;
}

function currentProfile(){return multiplayer?.players[multiplayer.active]}
function persistProfile(){const p=currentProfile();if(!p)return;p.club=state.club;p.careerClub=state.careerClub;p.careerCountry=state.careerCountry;p.budget=state.budget;p.lineup=state.lineup;p.payroll=state.payroll;p.managerCareer=state.managerCareer;p.jobStatus=state.jobStatus;p.noDismissal=!!state.noDismissal;p.satisfaction=state.satisfaction;p.history=state.history;p.results=state.results;}
function loadProfile(p){state.club=p.club??null;state.careerClub=p.careerClub??0;state.careerCountry=p.careerCountry??0;state.budget=p.budget??35;state.lineup=p.lineup||null;state.payroll=p.payroll||{year:state.year,monthsPaid:0,history:[]};state.managerCareer=p.managerCareer||null;state.jobStatus=p.jobStatus||'employed';state.noDismissal=!!p.noDismissal;state.satisfaction=p.satisfaction||null;state.history=p.history||[];state.results=p.results||[];state.page='home';}
let bulkYearsRunning=false;
function save(){if(bulkYearsRunning)return;captureCurrentTrophies();if(multiplayer){persistProfile();localStorage.setItem(MULTI_KEY,JSON.stringify(multiplayer));}localStorage.setItem(activeKey(),JSON.stringify(state))}
function alertMsg(s){if(bulkYearsRunning)return;$('toast').textContent=s;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),2600)}
function safeName(name){return String(name||'Treinador').replace(/[&<>"']/g,'').trim().slice(0,28)||'Treinador'}
function saveMultiplayer(){if(multiplayer)localStorage.setItem(MULTI_KEY,JSON.stringify(multiplayer));else localStorage.removeItem(MULTI_KEY)}
function createMultiplayer(){
 const raw=prompt('Quantas pessoas vão jogar no mesmo computador? (2 a 8)','2');if(raw===null)return;
 const n=Number(raw);if(!Number.isInteger(n)||n<2||n>8){alertMsg('Escolha de 2 a 8 jogadores.');return}
 if(multiplayer&&!confirm('Substituir a sala sincronizada atual?'))return;
 const names=[];for(let i=0;i<n;i++){const name=prompt('Nome do treinador '+(i+1),'Jogador '+(i+1));if(name===null)return;names.push(safeName(name))}
 multiplayer={sharedWorld:true,active:0,cycle:0,roundDone:{},players:names.map((name,i)=>({name,id:i,club:null,careerCountry:0,careerClub:0,budget:35,ready:false,history:[],results:[]}))};
 state=makeState();ensureExpansion();newLibertadores();newSudamericana();initExtraCups();initChampions();loadProfile(multiplayer.players[0]);save();render();alertMsg('Sala sincronizada criada: escolha o clube do primeiro treinador!');
}
function switchManager(i,force=false){
 if(liveMatch){alertMsg('Termine a partida ao vivo antes de trocar de treinador.');return}
 if(!multiplayer||!multiplayer.players[i]||(!force&&i===multiplayer.active))return;
 if(!force&&multiplayer.players[multiplayer.active]?.club===null){alertMsg('Escolha um clube antes de passar a vez.');return}
 persistProfile();multiplayer.active=i;loadProfile(multiplayer.players[i]);save();render();alertMsg('Vez de '+multiplayer.players[i].name+'!');
}
function finishTurn(){
 if(!multiplayer)return;
 if(liveMatch){alertMsg('Finalize a partida antes de encerrar seu turno.');return}
 const p=currentProfile();if(p.club===null){alertMsg('Escolha um clube primeiro.');return}
 p.ready=true;save();
 const next=multiplayer.players.findIndex((x,i)=>i>multiplayer.active&&!x.ready);
 const any=next>=0?next:multiplayer.players.findIndex(x=>!x.ready);
 if(any>=0){switchManager(any,true);return}
 multiplayer.cycle++;multiplayer.roundDone={};multiplayer.players.forEach(x=>x.ready=false);
 switchManager(0,true);alertMsg('Todos concluíram o turno! Calendário liberado para a próxima rodada.');
}
function endMultiplayer(){if(!multiplayer)return;if(!confirm('Sair da sala sincronizada? O progresso continuará salvo neste navegador.'))return;save();multiplayer=null;saveMultiplayer();try{state=JSON.parse(localStorage.getItem(SINGLE_KEY))}catch(e){state=null}if(!state||!Array.isArray(state.players))state=makeState();ensureExpansion();if(!state.continental.groups)newLibertadores();if(!state.sudamericana||state.sudamericana.year!==state.year)newSudamericana();initExtraCups();applyVerifiedMarketValues();ensureTripleMarketPrices();render()}
function resumeMultiplayer(){if(!multiplayer)return;loadProfile(multiplayer.players[multiplayer.active]);render()}
function multiplayerBar(){return `<section class="panel multiplayer-bar"><div class="row"><div><h3>🎮 ${multiplayer?'Sala sincronizada • '+multiplayer.players.length+' treinadores':'Multiplayer local (2 a 8 pessoas)'}</h3><p class="muted">${multiplayer?'Temporada, tabelas, transferências e competições compartilhadas. Cada treinador precisa concluir sua vez antes do próximo turno.':'Crie uma sala com mundo compartilhado e turnos obrigatórios.'}</p></div><button class="secondary" id="newmulti">${multiplayer?'Nova sala':'Criar sala'}</button></div>${multiplayer?`<div class="leaguechips">${multiplayer.players.map((p,i)=>`<button class="chip ${multiplayer.active===i?'selected':''}" data-manager="${i}" ${i!==multiplayer.active?'disabled':''}>${p.name}${p.ready?' ✓':''}${multiplayer.active===i?' • sua vez':''}</button>`).join('')}</div><p>Turno coletivo ${multiplayer.cycle+1} • ${multiplayer.players.filter(p=>p.ready).length}/${multiplayer.players.length} concluídos</p><span class="notice">🔄 A vez passa automaticamente após sua partida. Use o botão abaixo caso não haja jogo disponível.</span> <button class="secondary" id="finishturn" ${currentProfile().ready?'disabled':''}>Pular vez sem jogar</button> <button class="secondary" id="exitmulti">Voltar ao modo solo</button>`:''}</section>`}
function bindMultiplayer(){if($('newmulti'))$('newmulti').onclick=createMultiplayer;if($('exitmulti'))$('exitmulti').onclick=endMultiplayer;if($('finishturn'))$('finishturn').onclick=finishTurn;document.querySelectorAll('[data-manager]').forEach(b=>b.onclick=()=>switchManager(Number(b.dataset.manager)))}
function synchronizedRoundGuard(){if(!multiplayer)return true;if(currentProfile().ready){alertMsg('Você já encerrou sua vez.');return false}if(currentProfile().playedCycle===multiplayer.cycle){alertMsg('Você já disputou sua rodada neste turno. Passe a vez.');return false}const key=careerLeague()+':'+careerRound();if(multiplayer.roundDone[key]){alertMsg('Esta rodada já foi simulada por outro treinador da mesma liga. Encerre sua vez para continuar.');return false}return true}
function markSynchronizedRound(li,round){if(multiplayer){multiplayer.roundDone[li+':'+round]=true;currentProfile().playedCycle=multiplayer.cycle;save();const active=multiplayer.active,cycle=multiplayer.cycle;setTimeout(()=>{if(multiplayer&&multiplayer.active===active&&multiplayer.cycle===cycle&&!liveMatch&&!currentProfile().ready){finishTurn();alertMsg('🔄 Vez passada automaticamente!')}},750)}}
function tableSorted(){return [...state.standings].sort((a,b)=>b.pts-a.pts||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf)}
function fixtures(){let arr=teams.map((_,i)=>i),rounds=[];for(let r=0;r<19;r++){let pairs=[];for(let j=0;j<10;j++)pairs.push([arr[j],arr[19-j]]);rounds.push(pairs);arr=[arr[0],arr[19],...arr.slice(1,19)];}return rounds}
const schedule=fixtures();
function opponent(){return schedule[state.round]?.find(p=>p.includes(state.club))?.find(id=>id!==state.club)}
function strength(i){const arr=[...state.players[i]].sort((a,b)=>b.ovr-a.ovr).slice(0,11);return arr.reduce((s,p)=>s+p.ovr,0)/arr.length}
function goals(i,j){return scorePower(strength(i),strength(j),clubUid(0,i),clubUid(0,j))}
function updateTable(a,b,x,y){const A=state.standings[a],B=state.standings[b];A.p++;B.p++;A.gf+=x;A.ga+=y;B.gf+=y;B.ga+=x;if(x>y){A.w++;B.l++;A.pts+=3}else if(x<y){B.w++;A.l++;B.pts+=3}else{A.d++;B.d++;A.pts++;B.pts++}}
function play(){if(state.club===null)return;if(state.round>=19)return;const pairs=schedule[state.round];let summary;for(const [a,b] of pairs){let x=goals(a,b),y=goals(b,a);if(state.liveResult&&state.liveResult.li===0&&state.liveResult.round===state.round&&(a===state.club||b===state.club)){const home=a===state.club;x=home?state.liveResult.own:state.liveResult.away;y=home?state.liveResult.away:state.liveResult.own}updateTable(a,b,x,y);recordGoals("league-0",clubUid(0,a),clubUid(0,b),x,y);if(a===state.club||b===state.club){const mine=a===state.club,own=mine?x:y,other=mine?y:x,opp=mine?b:a;summary={round:state.round+1,opponent:teams[opp][0],own,other,year:state.year};state.budget+=own>other?2:own===other?0.8:0.25;}}state.results.push(summary);state.round++;payMonthlyWages();if(summary)satisfactionAfterMatch(summary.own,summary.other);save();render();alertMsg('Rodada '+state.round+': '+summary.own+' x '+summary.other)}
function nextSeason(){if(state.round<19)return;const ranking=tableSorted(),pos=ranking.findIndex(t=>t.id===state.club)+1;state.history.push({year:state.year,position:pos,points:state.standings[state.club].pts});state.budget+=Math.max(5,40-pos*1.5);state.year++;state.dayOfYear=1;state.transferOffers={inbox:[],history:transferOffersInit().history,lastChecked:null,seq:transferOffersInit().seq};const retired=processRetirements();developYouth();const contractResult=expireContracts();state.nationalWorldCup=null;state.scorers={year:state.year,competitions:{}};state.round=0;state.countryTables=countryLeagues.map((_,li)=>makeLeagueTable(li));state.countryRounds=countryLeagues.map(()=>0);state.results=[];state.standings=teams.map((t,i)=>({id:i,pts:0,p:0,w:0,d:0,l:0,gf:0,ga:0}));for(const team of state.players)for(const p of team){if(Math.random()<.4)p.ovr=Math.max(65,Math.min(93,p.ovr+(Math.random()<.65?1:-1)));if(!Number.isFinite(p.transfermarktEUR))p.value=3*Math.max(1,Math.round((p.ovr-65)*1.1*10)/10)}newLibertadores();newSudamericana();initExtraCups();if(fired){state.page='jobs';jobInit().offers=[];jobOffers(true)}save();render();alertMsg(fired?'Você foi demitido! Confira as propostas em Empregos.':'Bem-vindo à temporada '+state.year+'!')}
function transfer(from,index,to){if(from===to)return;const p=state.players[from][index];if(!p)return;const cost=p.value;if(to===state.club&&state.budget<cost){alertMsg('Saldo insuficiente!');return}if(from===state.club){if(state.players[from].length<=4){alertMsg('Mantenha pelo menos quatro jogadores!');return}state.budget+=cost}else if(to===state.club)state.budget-=cost;state.players[from].splice(index,1);state.players[to].push(p);save();render();alertMsg(p.name+(to===state.club?' contratado!':' vendido!'))}
function chooseClub(id,li=0){const noDismissalChoice=!!document.getElementById('noDismissalStart')?.checked;state.noDismissal=noDismissalChoice;state.archiveWorldHistory=!!document.getElementById('archiveWorldHistoryStart')?.checked;delete state.noDismissalDraft;delete state.archiveWorldHistoryDraft;if(multiplayer&&multiplayer.players.some((p,i)=>i!==multiplayer.active&&p.club!==null&&p.careerCountry===li&&p.careerClub===id)){alertMsg('Esse clube já pertence a outro treinador da sala.');return}state.scorers={year:state.year,competitions:{}};state.club=id;state.careerClub=id;state.careerCountry=li;state.page='home';state.lineup=null;state.budget=35;state.payroll={year:state.year,monthsPaid:0,history:[]};state.jobStatus='employed';state.satisfaction={board:65,fans:70,seen:0,lastMessage:'Início do trabalho'};state.managerCareer={reputation:50,events:[{year:state.year,text:'Início da carreira no '+countryLeagues[li].clubs[id]}],clubFunds:{},offers:[],lastReview:null};newLibertadores();newSudamericana();initExtraCups();initChampions();save();render();alertMsg('Bem-vindo ao '+countryLeagues[li].clubs[id]+'!')}
function careerLeague(){return state.careerCountry||0}
function careerName(){return countryLeagues[careerLeague()].clubs[state.careerClub]}
function careerRoster(){return careerLeague()===0?state.players[state.careerClub]:state.foreignPlayers[careerLeague()][state.careerClub]}
function careerTable(){return careerLeague()===0?state.standings:state.countryTables[careerLeague()]}
function careerRank(){return careerLeague()===0?tableSorted():leagueRank(careerTable())}
function careerRound(){return careerLeague()===0?state.round:state.countryRounds[careerLeague()]}
function careerSchedule(){return careerLeague()===0?schedule:circleSchedule(countryLeagues[careerLeague()].clubs.length)}
function careerOpponent(){return careerSchedule()[careerRound()]?.find(p=>p.includes(state.careerClub))?.find(id=>id!==state.careerClub)}
function careerSeasonEnd(){return careerRound()>=careerSchedule().length}
function playCareer(){if(!synchronizedRoundGuard())return;const syncLi=careerLeague(),syncRound=careerRound();if(careerLeague()===0){play();markSynchronizedRound(syncLi,syncRound);return;}if(careerSeasonEnd())return;const li=careerLeague(),round=careerRound(),pairs=careerSchedule()[round];let summary;for(const [a,b] of pairs){let x=scorePower(getPower(clubUid(li,a)),getPower(clubUid(li,b)),clubUid(li,a),clubUid(li,b)),y=scorePower(getPower(clubUid(li,b)),getPower(clubUid(li,a)),clubUid(li,b),clubUid(li,a));if(state.liveResult&&state.liveResult.li===li&&state.liveResult.round===round&&(a===state.careerClub||b===state.careerClub)){const home=a===state.careerClub;x=home?state.liveResult.own:state.liveResult.away;y=home?state.liveResult.away:state.liveResult.own}updateLeagueTable(state.countryTables[li],a,b,x,y);recordGoals("league-"+li,clubUid(li,a),clubUid(li,b),x,y);if(a===state.careerClub||b===state.careerClub){let mine=a===state.careerClub,own=mine?x:y,other=mine?y:x,opp=mine?b:a;summary={round:round+1,opponent:countryLeagues[li].clubs[opp],own,other,year:state.year};state.budget+=own>other?2:own===other?.8:.25;}}state.results.push(summary);state.countryRounds[li]++;payMonthlyWages();if(summary)satisfactionAfterMatch(summary.own,summary.other);markSynchronizedRound(syncLi,syncRound);save();render();alertMsg('Rodada '+(round+1)+': '+summary.own+' x '+summary.other)}
// Retrospectiva persistente de todas as competições simuladas no mundo do jogo.
function seasonTopScorer(key){
 const rows=Object.values(state.scorers?.competitions?.[key]||{}).filter(r=>r.goals>0).sort((a,b)=>b.goals-a.goals||b.assists-a.assists);
 return rows.length?rows[0].name+' ('+rows[0].goals+' gols)':'Não registrado';
}
function seasonCupRunner(c){
 const final=(c?.results||[]).filter(r=>r.stage==='Final'||r.round==='Final').slice(-1)[0];
 if(!final)return null;
 return final.x>final.y?final.b:final.a;
}
function seasonCompetitionReport(){
 if(state.archiveWorldHistory===false)return;
 if(!state.seasonReports)state.seasonReports=[];
 if(state.seasonReports.some(r=>r.year===state.year))return;
 // As demais ligas terminam sua temporada ao mesmo tempo que a liga do treinador.
 for(let li=0;li<countryLeagues.length;li++){
  if(li===careerLeague())continue;
  const total=circleSchedule(countryLeagues[li].clubs.length).length;
  while(state.countryRounds[li]<total)simulateForeignRound(li);
 }
 // Copas nacionais dos outros países também são concluídas ao fechar o calendário.
 for(let li=0;li<(state.nationalCups||[]).length;li++){
  const c=state.nationalCups[li];
  if(li===careerLeague()||!c||c.notScheduled)continue;
  let guard=0;
  while(c.champion===null&&guard++<8){
   const winners=[];const stage={32:'16 avos',16:'Oitavas',8:'Quartas',4:'Semifinal',2:'Final'}[c.remaining.length]||'Mata-mata';
   for(let i=0;i<c.remaining.length;i+=2){const a=c.remaining[i],b=c.remaining[i+1];if(b===undefined){winners.push(a);continue}let [x,y]=cupPairScores(a,b);if(x===y)Math.random()<.5?x++:y++;c.results.push({stage,a,b,x,y});recordGoals('cup-'+li,a,b,x,y);winners.push(x>y?a:b)}
   c.remaining=winners;c.round++;if(winners.length===1)c.champion=winners[0];
  }
 }
 const items=[];
 const add=(name,champion,runner,scorer,status='Concluída')=>items.push({name,champion:champion||'Não definido',runner:runner||'Não definido',scorer:scorer||'Não registrado',status});
 for(let li=0;li<countryLeagues.length;li++){
  const ranked=li===0?tableSorted():leagueRank(state.countryTables[li]);
  add(countryLeagues[li].flag+' '+countryLeagues[li].name,countryLeagues[li].clubs[ranked[0]?.id],countryLeagues[li].clubs[ranked[1]?.id],seasonTopScorer('league-'+li));
 }
 for(let li=0;li<countryLeagues.length;li++){
  const c=state.nationalCups?.[li],runner=seasonCupRunner(c);
  add('🏆 Copa Nacional — '+countryLeagues[li].name,c?.champion!=null?getClubByUid(c.champion)?.name:null,runner!=null?getClubByUid(runner)?.name:null,seasonTopScorer('cup-'+li),c?.champion!=null?'Concluída':'Não concluída');
 }
 for(const [name,c,key] of [['⭐ Champions League',state.champions,'champions'],['🏆 Libertadores',state.continental,'libertadores'],['🌎 Sul-Americana',state.sudamericana,'sudamericana'],['🌍 Super Mundial',state.worldCup,'world']]){
  if(c?.notScheduled){add(name,'Não disputado','Não disputado','Não disputado','Não realizado neste ano');continue}
  const runner=seasonCupRunner(c);
  add(name,c?.champion!=null?getClubByUid(c.champion)?.name:null,runner!=null?getClubByUid(runner)?.name:null,seasonTopScorer(key),c?.champion!=null?'Concluída':'Não concluída');
 }
 const wc=state.nationalWorldCup;
 if(wc?.champion!=null){const runner=seasonCupRunner(wc);add('🌐 Copa do Mundo de Seleções',nationalTeams[wc.champion]?.name,runner!=null?nationalTeams[runner]?.name:null,'Não registrado')}
 else add('🌐 Copa do Mundo de Seleções',wc?'Não definido':'Não disputada',wc?'Não definido':'Não disputada','Não registrado',wc?'Não concluída':'Não disputada');
 state.seasonReports.push({year:state.year,competitions:items});
}
function worldTitleRankings(){
 const byCompetition=new Map(),overall=new Map();
 for(const report of state.seasonReports||[]){
  for(const c of report.competitions||[]){
   if(c.status!=='Concluída'||!c.champion||['Não definido','Não disputado','Não disputada','Não registrado'].includes(c.champion))continue;
   const competition=String(c.name||'Competição');
   const club=String(c.champion);
   if(!byCompetition.has(competition))byCompetition.set(competition,new Map());
   const counts=byCompetition.get(competition);
   if(!counts.has(club))counts.set(club,{name:club,count:0,years:[]});
   const entry=counts.get(club);entry.count++;entry.years.push(report.year);
   if(!overall.has(club))overall.set(club,{name:club,count:0,competitions:new Set()});
   const total=overall.get(club);total.count++;total.competitions.add(competition);
  }
 }
 const sort=(a,b)=>b.count-a.count||a.name.localeCompare(b.name,'pt-BR');
 return {competitions:[...byCompetition.keys()].sort((a,b)=>a.localeCompare(b,'pt-BR')),byCompetition,overall:[...overall.values()].sort(sort)};
}
function renderSeasonReports(){
 const reports=state.seasonReports||[];
 const selected=Number(state.reportYear||reports[reports.length-1]?.year||state.year);
 const report=reports.find(r=>r.year===selected);
 const ranks=worldTitleRankings();
 const filter=state.worldRankingFilter||'all';
 const options=['all',...ranks.competitions];
 const chosen=options.includes(filter)?filter:'all';
 const rows=chosen==='all'?ranks.overall:[...(ranks.byCompetition.get(chosen)?.values()||[])].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name,'pt-BR'));
 const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
 return `<section class="hero"><div><span class="eyebrow">ARQUIVO MUNDIAL</span><h2>📜 Retrospectiva da temporada</h2><p>Campeões, vice-campeões, artilheiros e ranking histórico de títulos.</p></div><div class="ball">🏆</div></section>
 <section class="panel"><h3>🏆 Ranking histórico de títulos</h3><p class="muted">Contagem acumulada das temporadas registradas nesta carreira. Selecione uma competição para ver quantas vezes cada time conquistou aquele título.</p>
 <label for="worldRankingFilter"><b>Competição</b></label><select id="worldRankingFilter" style="display:block;max-width:520px;width:100%;margin:10px 0 16px;padding:10px;border-radius:8px;background:#17253a;color:white;border:1px solid #56637b"><option value="all" ${chosen==='all'?'selected':''}>🌍 Todos os títulos (ranking geral)</option>${ranks.competitions.map(c=>`<option value="${esc(c)}" ${chosen===c?'selected':''}>${esc(c)}</option>`).join('')}</select>
 ${rows.length?`<div class="tablewrap"><table><thead><tr><th>POSIÇÃO</th><th>TIME</th><th>TÍTULOS 🏆</th><th>${chosen==='all'?'COMPETIÇÕES DIFERENTES':'ANOS DOS TÍTULOS'}</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><b>${i+1}º</b></td><td>${esc(r.name)}</td><td><b>${r.count}</b></td><td>${chosen==='all'?r.competitions.size:r.years.slice().sort((a,b)=>a-b).join(', ')}</td></tr>`).join('')}</tbody></table></div>`:'<p class="muted">Nenhum título concluído foi registrado ainda. Termine temporadas com o histórico ativado para preencher este ranking.</p>'}</section>
 <section class="panel"><h3>Escolha a temporada</h3>${reports.length?`<div class="leaguechips">${[...reports].reverse().map(r=>`<button class="chip ${selected===r.year?'selected':''}" data-report-year="${r.year}">${r.year}</button>`).join('')}</div>`:'<p class="muted">Termine uma temporada para criar o primeiro relatório.</p>'}<p class="muted">Competições simuladas do jogo, não resultados reais. Temporadas sem registro não são contadas no ranking.</p></section>${report?`<section class="panel"><h3>🌍 Resultados de ${report.year} — ${report.competitions.length} competições</h3><div class="tablewrap"><table><thead><tr><th>COMPETIÇÃO</th><th>CAMPEÃO 🥇</th><th>VICE 🥈</th><th>ARTILHEIRO ⚽</th></tr></thead><tbody>${report.competitions.map(c=>`<tr><td><b>${esc(c.name)}</b>${c.status!=='Concluída'?`<small style="display:block;opacity:.7">${esc(c.status)}</small>`:''}</td><td>${esc(c.champion)}</td><td>${esc(c.runner)}</td><td>${esc(c.scorer)}</td></tr>`).join('')}</tbody></table></div></section>`:''}`;
}
// Calendário, categorias de base e aposentadorias (persistidos no save).
const FIRST_MATCH_DAY=7;
function calendarInit(){if(!Number.isFinite(state.dayOfYear))state.dayOfYear=1;if(!state.academies)state.academies={};if(!state.retirementHistory)state.retirementHistory=[];if(!state.calendarEvents)state.calendarEvents=[];}
function dateLabel(){calendarInit();const d=new Date(state.year,0,Math.max(1,state.dayOfYear));return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});}
function nextMatchDay(){return FIRST_MATCH_DAY+careerRound()*7;}
function canPlayToday(){calendarInit();return state.dayOfYear>=nextMatchDay();}
function calendarDayText(day){return new Date(state.year,0,day).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});}
function calendarCupSources(){const li=careerLeague();return [
 {key:'national',name:'🏆 Copa Nacional',cup:state.nationalCups?.[li]},
 {key:'champions',name:'⭐ Champions League',cup:state.champions},
 {key:'libertadores',name:'🏆 Libertadores',cup:state.continental},
 {key:'sudamericana',name:'🌎 Sul-Americana',cup:state.sudamericana},
 {key:'world',name:'🌍 Super Mundial',cup:state.worldCup}
 ];}
function calendarFixtures(){calendarInit();if(state.club===null)return [];
 const out=[];const li=careerLeague(),lg=countryLeagues[li];
 for(let r=careerRound();r<careerSchedule().length;r++){
  const pair=careerSchedule()[r]?.find(p=>p.includes(state.careerClub));if(!pair)continue;
  const opponent=pair.find(id=>id!==state.careerClub);
  out.push({day:FIRST_MATCH_DAY+r*7,kind:'league',page:'league',label:lg.flag+' '+lg.name+' • Rodada '+(r+1),opponent:lg.clubs[opponent]||'A definir',ready:r===careerRound()});
 }
 for(const src of calendarCupSources()){
  const cup=src.cup;if(!cup||cup.notScheduled||cup.champion!==null)continue;
  const pair=controlledCupPair(cupFixtures(cup));if(!pair)continue;
  const mine=clubUid(li,state.careerClub),opp=pair.find(id=>id!==mine);
  const stages=[...new Set((cup.results||[]).map(x=>x.stage||x.round||'etapa'))].length;
  // Datas fictícias para cada fase; nunca se marca um confronto já resolvido.
  const base=src.key==='national'?12:src.key==='champions'?17:src.key==='libertadores'?19:src.key==='sudamericana'?23:27;
  const scheduled=Math.min(365,base+stages*28);
  out.push({day:scheduled,kind:'cup',page:src.key,label:src.name,opponent:getClubByUid(opp)?.name||'A definir',ready:true});
 }
 return out.sort((a,b)=>a.day-b.day||a.label.localeCompare(b.label));
}
function calendarPendingToday(){return calendarFixtures().filter(x=>x.day<=state.dayOfYear);}
// Simula jogos do clube sem abrir a tela de partida, usando os motores oficiais.
function skipCalendarFixture(kind){
 if(liveMatch){alertMsg('Finalize a partida em andamento primeiro.');return false}
 if(multiplayer){alertMsg('Pular jogos pelo calendário está disponível no modo carreira individual.');return false}
 const fixture=calendarFixtures().find(e=>e.kind===kind||e.page===kind);
 if(!fixture){alertMsg('Nenhum jogo pendente nesta competição.');return false}
 if(fixture.day>state.dayOfYear){alertMsg('Avance até a data do jogo para simulá-lo.');return false}
 if(kind==='league'){
  if(careerSeasonEnd())return false;
  const before=careerRound();playCareer();return careerRound()>before;
 }
 const src=calendarCupSources().find(e=>e.key===kind);
 if(!src||!src.cup||src.cup.champion!==null)return false;
 const before=JSON.stringify({round:src.cup.round,results:src.cup.results?.length,remaining:src.cup.remaining?.length,champion:src.cup.champion});
 if(kind==='national'||kind==='champions'||kind==='world')simulateKnockout(src.cup);
 else if(kind==='libertadores')simulateLibertadores();
 else if(kind==='sudamericana')simulateSudamericana();
 return before!==JSON.stringify({round:src.cup.round,results:src.cup.results?.length,remaining:src.cup.remaining?.length,champion:src.cup.champion});
}
function calendarSkipSelected(kind){
 const fixture=calendarFixtures().find(e=>e.kind===kind||e.page===kind);
 if(!fixture)return;
 if(state.dayOfYear<fixture.day){state.dayOfYear=fixture.day;generateClubOffers();}
 if(skipCalendarFixture(kind)){state.page='calendar';save();render();alertMsg('⚡ Partida simulada! Confira o resultado na competição.');}
}
// Avança até uma data simulando automaticamente os compromissos, sem exigir partida 2D.
function calendarAutoSimulate(dateString){
 if(liveMatch||multiplayer){alertMsg('Use esta função no modo carreira individual, fora de partidas ao vivo.');return}
 const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString||'');if(!m){alertMsg('Selecione uma data válida.');return}
 const target=new Date(+m[1],+m[2]-1,+m[3]);
 if(target.getFullYear()!==+m[1]||target.getMonth()!==+m[2]-1||target.getDate()!==+m[3]||+m[1]<state.year||+m[1]>state.year+20){alertMsg('Data fora do intervalo permitido.');return}
 let simulated=0,steps=0,blocked='';
 while(steps++<1400){
  const targetDay=+m[1]===state.year?Math.floor((target-new Date(state.year,0,1))/86400000)+1:366;
  const pending=calendarFixtures().filter(e=>e.day<=targetDay).sort((a,b)=>a.day-b.day);
  if(pending.length){
   const next=pending[0];state.dayOfYear=Math.max(state.dayOfYear,next.day);
   if(!skipCalendarFixture(next.kind==='league'?'league':next.page)){blocked='Não foi possível simular '+next.label;break}
   simulated++;continue;
  }
  if(state.year===+m[1]){state.dayOfYear=Math.max(state.dayOfYear,targetDay);break}
  if(!careerSeasonEnd()||!cupsFinished()){blocked='Há competições que precisam ser concluídas antes da próxima temporada.';break}
  const oldYear=state.year;nextCareerSeason();
  if(state.year===oldYear||state.jobStatus==='fired'){blocked='A carreira precisa de uma decisão antes de continuar.';break}
 }
 if(steps>=1400)blocked='Limite de segurança alcançado.';
 generateClubOffers();state.page=state.jobStatus==='fired'?'jobs':'calendar';save();render();
 alertMsg('⏩ '+simulated+' jogo(s) simulados. Data: '+dateLabel()+(blocked?' • '+blocked:''));
}
// Avanço automático de anos: executa em lotes para manter a página responsiva.
function simulateWholeYears(){
 if(bulkYearsRunning)return;
 if(liveMatch||multiplayer||state.club===null){alertMsg('Disponível apenas na carreira individual, fora de partidas ao vivo.');return;}
 const input=document.getElementById('calendarYearsCount');
 const count=Number(input?.value);
 if(!Number.isSafeInteger(count)||count<1||count>1000){alertMsg('Escolha de 1 a 1000 anos por execução.');return;}
 const startYear=state.year,targetYear=startYear+count;
 if(!Number.isSafeInteger(targetYear)||targetYear>9999){alertMsg('Ano final inválido.');return;}
 const btn=document.getElementById('calendarYearsButton'),status=document.getElementById('calendarYearsStatus');
 const label=msg=>{if(status)status.textContent=msg};
 if(btn)btn.disabled=true;
 bulkYearsRunning=true;
 let matches=0,iterations=0;
 const restore=msg=>{
  // Destrava a interface ANTES de salvar/renderizar; mesmo se o armazenamento falhar.
  bulkYearsRunning=false;
  state.page=state.jobStatus==='fired'?'jobs':'calendar';
  try{save();}catch(error){console.error('Falha ao salvar a carreira após simulação',error);msg+=' (Aviso: armazenamento cheio; exporte ou libere espaço no navegador.)';}
  try{render();}catch(error){console.error('Falha ao redesenhar o calendário',error);}
  const currentStatus=document.getElementById('calendarYearsStatus');
  if(currentStatus)currentStatus.textContent=msg;
  const currentButton=document.getElementById('calendarYearsButton');
  if(currentButton)currentButton.disabled=false;
  alertMsg(msg);
 };
 function autoJob(){
  if(state.jobStatus!=='fired')return true;
  const offers=jobOffers(true);
  if(!offers.length)return false;
  // Em modo automático, aceita um novo emprego para não exigir cliques.
  const offer=offers[0];switchCoachingClub(offer.li,offer.ci,'Emprego automático durante simulação longa');
  return state.jobStatus!=='fired';
 }
 function tick(){
  try{
   let work=0;
   while(state.year<targetYear&&work++<14){
    if(++iterations>count*200+500){restore('Simulação interrompida pelo limite de segurança.');return;}
    if(!autoJob()){restore('Simulação pausada: não foi possível encontrar um novo clube.');return;}
    if(!careerSeasonEnd()){
     // Usa o mesmo motor de resultados e classificação da carreira.
     const before=careerRound();playCareer();
     if(careerRound()===before){restore('Não foi possível avançar uma rodada.');return;}
     matches++;continue;
    }
    // Finaliza também as copas que não envolvem o clube, sem pedir ações.
    const cups=[...(state.nationalCups||[]),state.champions,state.worldCup];
    let advanced=false;
    for(const cup of cups){if(cup&&!cup.notScheduled&&cup.champion==null){simulateKnockout(cup);advanced=true;break;}}
    if(advanced)continue;
    if(state.continental&&state.continental.champion==null){simulateLibertadores();continue;}
    if(state.sudamericana&&state.sudamericana.champion==null){simulateSudamericana();continue;}
    if(!cupsFinished()){restore('Uma competição não pôde ser concluída automaticamente.');return;}
    const before=state.year;
    nextCareerSeason();
    if(state.year===before){restore('Não foi possível iniciar a próxima temporada.');return;}
   }
   label('⏳ '+(state.year-startYear)+' de '+count+' temporada(s) • '+matches+' rodadas simuladas');
   if(state.year>=targetYear){
    state.dayOfYear=1;
    label('✅ Simulação concluída! Finalizando e salvando...');
    // Permite que a mensagem de conclusão apareça antes de salvar a carreira.
    setTimeout(()=>restore('✅ '+count+' temporada(s) simulada(s)! Ano atual: '+state.year+'. '+(state.archiveWorldHistory===false?'Histórico mundial desativado.':'Veja os resultados em Retrospectiva Mundial.')),0);
    return;
   }
   setTimeout(tick,0);
  }catch(err){console.error('POIFOOTB: erro na simulação de anos',err);restore('Simulação interrompida: '+(err?.message||'erro inesperado'));}
 }
 label('⏳ Iniciando simulação...');setTimeout(tick,0);
}
function advanceDay(){calendarInit();if(liveMatch){alertMsg('Finalize a partida antes de avançar o dia.');return}const pending=calendarPendingToday();if(pending.length){alertMsg('⚽ Jogo pendente: '+pending[0].label+'. Abra a competição e dispute a partida.');return}if(state.dayOfYear>=365){alertMsg('Conclua a temporada para iniciar o próximo ano.');return}state.dayOfYear++;generateClubOffers();save();render();}
function simulateCalendarTo(target){calendarInit();if(liveMatch){alertMsg('Finalize a partida ao vivo primeiro.');return}
 const day=Math.floor(Number(target)),maxDay=new Date(state.year,1,29).getMonth()===1?366:365;
 if(!Number.isInteger(day)||day<=state.dayOfYear||day>maxDay){alertMsg('Selecione uma data futura nesta temporada.');return}
 const pending=calendarFixtures().find(e=>e.day<=day);
 if(pending){state.dayOfYear=Math.max(state.dayOfYear,pending.day);generateClubOffers();save();render();alertMsg('⏸ Simulação pausada: '+pending.label+' contra '+pending.opponent+'. Jogue a partida para continuar.');return}
 state.dayOfYear=day;generateClubOffers();save();render();alertMsg('⏩ Calendário avançado até '+dateLabel());
}
// Permite selecionar datas em anos posteriores sem ignorar jogos, contratos e decisões da carreira.
function simulateCalendarAcrossSeasons(dateString){
 if(liveMatch){alertMsg('Finalize a partida ao vivo antes de avançar.');return}
 if(multiplayer){alertMsg('O avanço entre temporadas deve ser feito por todos os treinadores no multiplayer local.');return}
 const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString||'');if(!m){alertMsg('Escolha uma data válida.');return}
 const y=Number(m[1]),mo=Number(m[2]),d=Number(m[3]);const date=new Date(y,mo-1,d);
 if(date.getFullYear()!==y||date.getMonth()!==mo-1||date.getDate()!==d||y<state.year||y>state.year+20){alertMsg('Escolha uma data válida nos próximos 20 anos.');return}
 const day=Math.round((date-new Date(y,0,1))/86400000)+1;
 if(y===state.year){simulateCalendarTo(day);return}
 // Não ultrapassar partidas pendentes, decisões de copas ou viradas de temporada.
 const pending=calendarFixtures().find(e=>e.day>=state.dayOfYear);
 if(pending){state.dayOfYear=Math.max(state.dayOfYear,pending.day);generateClubOffers();save();render();alertMsg('⏸ Parou em '+dateLabel()+': '+pending.label+'. Dispute a partida antes de continuar até '+dateString+'.');return}
 if(!careerSeasonEnd()){alertMsg('Finalize as rodadas do campeonato para avançar para o próximo ano.');return}
 if(!cupsFinished()){alertMsg('Finalize as copas obrigatórias antes de avançar para a próxima temporada.');return}
 // Usa o fluxo oficial da virada: aposentadorias, contratos, base e retrospectiva.
 nextCareerSeason();
 if(state.jobStatus==='fired'){alertMsg('Aceite uma proposta de emprego para continuar a simulação.');return}
 if(state.year<y){const next=calendarFixtures()[0];if(next){state.dayOfYear=Math.max(1,next.day);save();render();alertMsg('⏸ Nova temporada '+state.year+'. Próximo jogo: '+next.label+'. Continue após disputá-lo.');}return}
 simulateCalendarTo(day);
}
function renderCalendarPage(){calendarInit();const fixtures=calendarFixtures();const current=state.dayOfYear;const end=new Date(state.year,11,31);const iso=d=>new Date(state.year,0,d,12).toISOString().slice(0,10);
 const next=fixtures.filter(e=>e.day>=current).slice(0,30);
 const pending=fixtures.filter(e=>e.day<=current);
 return `<section class="panel"><h2>🗓️ Calendário ${state.year}</h2><p class="muted">Hoje: <strong>${dateLabel()}</strong> • Agendas fictícias do POIFOOTB. Os confrontos de copas aparecem quando seu clube participa da fase atual.</p><div class="calendar-controls"><label>Simular até <input type="date" id="calendarTarget" min="${iso(current+1)}" max="${state.year+20}-12-31" value="${iso(Math.min(current+7,365))}"></label><button class="primary" id="calendarFastForward">⏩ Simular até a data</button><button class="secondary" id="calendarNextMatch">⚽ Ir ao próximo jogo</button><button class="secondary" id="calendarOneDay">Avançar 1 dia</button><button class="primary" id="calendarAutoSkip">⚡ Simular jogos até a data</button></div><div class="calendar-controls" style="margin-top:14px;align-items:end"><label>Quantos anos deseja simular? <input id="calendarYearsCount" type="number" min="1" max="1000" step="1" value="5" style="max-width:120px"></label><button class="primary" id="calendarYearsButton">🚀 Simular todos os anos com 1 botão</button></div><p class="muted" id="calendarYearsStatus">Todas as partidas de liga e copas serão simuladas automaticamente. ${state.archiveWorldHistory===false?'O registro de Retrospectiva Mundial foi desativado ao criar esta carreira.':'Cada temporada finalizada será registrada na Retrospectiva Mundial.'} Até 1000 anos por execução. Se houver demissão, o treinador aceita outro emprego automaticamente.</p><p class="muted">Você pode escolher uma data em até 20 anos futuros. Use “Simular jogos até a data” para pular as partidas automaticamente, ou “Simular até a data” para parar antes dos jogos. Os resultados, contratos e competições são registrados normalmente.</p></section><section class="panel"><h3>📅 Próximos jogos do ${careerName()}</h3>${pending.length?`<p class="calendar-alert">⚠️ ${pending.length} jogo(s) aguardando sua ação.</p>`:''}<div class="calendar-match-list">${next.map(e=>`<div class="calendar-match ${e.day<=current?'calendar-due':''}"><div><b>${calendarDayText(e.day)}</b><small>${e.label}</small><strong>⚽ ${careerName()} × ${e.opponent}</strong></div><button class="secondary" data-calendar-page="${e.page}">${e.day<=current?'▶ Jogar / abrir':'Ver competição'}</button><button class="primary" data-calendar-skip="${e.kind==='league'?'league':e.page}">⚡ Simular jogo</button></div>`).join('')||'<p class="muted">Nenhuma partida futura programada. Confira as competições e a próxima temporada.</p>'}</div></section>`;
}

const YOUTH_FIRST=['Lucas','Gabriel','Matheus','Rafael','João','Pedro','Thiago','Gustavo','André','Caio','Bruno','Henrique','Vitor','Diego','Felipe','Samuel'];
const YOUTH_LAST=['Silva','Oliveira','Santos','Costa','Pereira','Almeida','Souza','Ferreira','Lima','Ribeiro','Carvalho','Rocha','Martins'];
function rosterLocations(){const loc=[];state.players.forEach((r,ci)=>loc.push({li:0,ci,roster:r}));(state.foreignPlayers||[]).forEach((teams,li)=>{if(li===0||!Array.isArray(teams))return;teams.forEach((r,ci)=>{if(Array.isArray(r))loc.push({li,ci,roster:r})})});return loc;}
function initPlayerAges(){calendarInit();for(const {roster} of rosterLocations())for(const p of roster){if(!Number.isFinite(p.age))p.age=p.placeholder?19:Math.max(17,Math.min(36,Math.round(25+(Math.random()-.5)*16)));}}
function academyKey(li=careerLeague(),ci=state.careerClub){return li+':'+ci;}
function makeYouth(li,ci){const first=YOUTH_FIRST[Math.floor(Math.random()*YOUTH_FIRST.length)],last=YOUTH_LAST[Math.floor(Math.random()*YOUTH_LAST.length)];return {id:++state.nextId,name:first+' '+last,pos:['GOL','ZAG','LAT','VOL','MEI','ATA'][Math.floor(Math.random()*6)],age:15+Math.floor(Math.random()*4),ovr:48+Math.floor(Math.random()*18),potential:68+Math.floor(Math.random()*25),value:1,academy:true};}
function getAcademy(li=careerLeague(),ci=state.careerClub){calendarInit();const k=academyKey(li,ci);if(!state.academies[k])state.academies[k]=Array.from({length:5},()=>makeYouth(li,ci));return state.academies[k];}
function promoteYouth(i){const a=getAcademy(),p=a[i],r=careerRoster();if(!p)return;if(p.age<16){alertMsg('O jogador precisa ter pelo menos 16 anos.');return}if(r.length>=30){alertMsg('O elenco principal está cheio (30 jogadores).');return}a.splice(i,1);p.academy=false;p.value=Math.max(1,Math.round((p.ovr-45)*.5));p.contractEnd=state.year+3;r.push(p);state.lineup=null;save();render();alertMsg(p.name+' promovido ao elenco principal!');}
function developYouth(){calendarInit();for(const [key,a] of Object.entries(state.academies)){const [li,ci]=key.split(':').map(Number);for(const p of a){p.age++;if(p.ovr<p.potential)p.ovr=Math.min(p.potential,p.ovr+1+Math.floor(Math.random()*4))}while(a.length<5)a.push(makeYouth(li,ci));}}
function processRetirements(){initPlayerAges();let count=0;for(const {li,ci,roster} of rosterLocations()){for(let i=roster.length-1;i>=0;i--){const p=roster[i];p.age++;const chance=p.age>=40?.75:p.age>=38?.42:p.age>=36?.2:p.age>=34?.06:0;if(chance&&Math.random()<chance){state.retirementHistory.push({year:state.year-1,name:p.name,club:countryLeagues[li]?.clubs[ci]||'Clube',age:p.age});roster.splice(i,1);count++;}}}state.lineup=null;return count;}
function renderAcademy(){initPlayerAges();const academy=getAcademy();return `<section class="panel"><h3>🌱 Categorias de base — ${careerName()}</h3><p class="muted">Jovens de 15 a 18 anos. Evoluem a cada temporada conforme o potencial. Promova jogadores com pelo menos 16 anos; eles assinam contrato de três anos.</p><div class="tablewrap"><table><thead><tr><th>Jogador</th><th>Idade</th><th>Pos.</th><th>GER</th><th>Potencial</th><th>Ação</th></tr></thead><tbody>${academy.map((p,i)=>`<tr><td>${p.name}</td><td>${p.age}</td><td>${p.pos}</td><td>${p.ovr}</td><td>${p.potential}</td><td><button class="secondary" data-promote="${i}" ${p.age<16?'disabled':''}>Promover</button></td></tr>`).join('')}</tbody></table></div></section><section class="panel"><h3>👴 Últimas aposentadorias</h3>${state.retirementHistory.slice(-20).reverse().map(x=>`<div class="row"><span>${x.year} • ${x.name} (${x.club})</span><b>${x.age} anos</b></div>`).join('')||'<p class="muted">Nenhuma aposentadoria registrada ainda.</p>'}</section>`;}
function calendarWidget(){calendarInit();const ready=calendarPendingToday().length>0;return `<section class="panel"><div class="row" style="gap:12px;flex-wrap:wrap"><div><h3>📆 ${dateLabel()}</h3><p class="muted">${careerSeasonEnd()?'Temporada de liga encerrada':ready?'⚽ Dia de jogo! Dispute a rodada para continuar.':'Próximo compromisso: '+(calendarFixtures().find(x=>x.day>=state.dayOfYear)?.label||'sem jogos agendados')}</p></div><button class="primary" id="advanceCalendarDay" ${ready||state.dayOfYear>=365?'disabled':''}>⏭ Avançar 1 dia</button></div></section>`;}
function syncBrazilDivisions(){
 const divisions=[0,15,16,17];
 if(!state.brazilDivisionNames)state.brazilDivisionNames=divisions.map(li=>countryLeagues[li].clubs.slice());
 divisions.forEach((li,k)=>state.brazilDivisionNames[k].forEach((name,i)=>{if(countryLeagues[li].clubs[i]!==undefined){countryLeagues[li].clubs[i]=name;leaguePools[li][i].name=name}}));
}
function applyBrazilPromotionRelegation(){
 syncBrazilDivisions();const divisions=[0,15,16,17];const changes=[];
 for(let d=0;d<3;d++){
  const upper=divisions[d],lower=divisions[d+1];
  const top=leagueRank(upper===0?state.standings:state.countryTables[upper]);
  const bottom=leagueRank(state.countryTables[lower]);
  for(let j=0;j<4;j++){
   const a=top[top.length-4+j]?.id,b=bottom[j]?.id;if(a===undefined||b===undefined)continue;
   const nameA=countryLeagues[upper].clubs[a],nameB=countryLeagues[lower].clubs[b];
   const rosterA=upper===0?state.players[a]:state.foreignPlayers[upper][a];
   const rosterB=state.foreignPlayers[lower][b];
   if(upper===0)state.players[a]=rosterB;else state.foreignPlayers[upper][a]=rosterB;
   state.foreignPlayers[lower][b]=rosterA;
   countryLeagues[upper].clubs[a]=nameB;countryLeagues[lower].clubs[b]=nameA;
   leaguePools[upper][a].name=nameB;leaguePools[lower][b].name=nameA;
   // Acompanhamos o clube controlado quando ele sobe ou desce.
   if(state.careerCountry===upper&&state.careerClub===a){state.careerCountry=lower;state.careerClub=b;state.club=b;}
   else if(state.careerCountry===lower&&state.careerClub===b){state.careerCountry=upper;state.careerClub=a;state.club=a;}
   changes.push(nameB+' ↑ '+countryLeagues[upper].name+' / '+nameA+' ↓ '+countryLeagues[lower].name);
  }
 }
 state.brazilDivisionNames=divisions.map(li=>countryLeagues[li].clubs.slice());
 state.brazilMovements=state.brazilMovements||[];
 state.brazilMovements.push({year:state.year,changes});
}
function nextCareerSeason(){if(state.jobStatus==='fired'){state.page='jobs';render();alertMsg('Aceite um novo emprego antes de continuar.');return}if(multiplayer&&multiplayer.players.some(p=>!p.ready)){alertMsg('Todos os treinadores precisam encerrar suas vezes antes da nova temporada.');return}if(!careerSeasonEnd())return;if(!cupsFinished()){alertMsg(isEuropeanCareer()?'Finalize a Champions League, a copa nacional do seu país e o Super Mundial (quando houver) antes de avançar!':'Finalize a Libertadores, a Sul-Americana, a copa nacional do seu país e o Super Mundial (quando houver) antes de avançar!');return;}seasonCompetitionReport();captureCurrentTrophies();captureLeagueTrophies();applyBrazilPromotionRelegation();const fired=reviewManagerSeason();const pos=careerRank().findIndex(t=>t.id===state.careerClub)+1;state.history.push({year:state.year,position:pos,points:careerTable()[state.careerClub].pts,club:careerName(),league:countryLeagues[careerLeague()].name});state.budget+=Math.max(5,40-pos*1.5);state.year++;state.dayOfYear=1;const retired=processRetirements();developYouth();const contractResult=expireContracts();state.nationalWorldCup=null;state.payroll={year:state.year,monthsPaid:0,history:[]};state.round=0;state.results=[];state.standings=teams.map((t,i)=>({id:i,pts:0,p:0,w:0,d:0,l:0,gf:0,ga:0}));state.countryTables=countryLeagues.map((_,li)=>makeLeagueTable(li));state.countryRounds=countryLeagues.map(()=>0);for(const roster of [...state.players,...state.foreignPlayers.filter(Boolean).flat()])for(const p of roster){if(Math.random()<.4)p.ovr=Math.max(60,Math.min(94,p.ovr+(Math.random()<.65?1:-1)));if(!Number.isFinite(p.transfermarktEUR))p.value=3*Math.max(1,Math.round((p.ovr-65)*1.1*10)/10)}newLibertadores();newSudamericana();initExtraCups();initChampions();save();render();alertMsg('Temporada '+state.year+'! Contratos encerrados: '+contractResult.released+' • renovações emergenciais: '+contractResult.emergency+' • aposentados: '+retired)}
// Satisfação da diretoria e da torcida: 0 a 100, persistida por treinador.
function satisfactionInit(){
 if(!state.satisfaction||typeof state.satisfaction.board!=='number')state.satisfaction={board:65,fans:70,seen:0,lastMessage:'Início do trabalho'};
 state.satisfaction.board=Math.max(0,Math.min(100,state.satisfaction.board));
 state.satisfaction.fans=Math.max(0,Math.min(100,state.satisfaction.fans));
 return state.satisfaction;
}
function satisfactionColor(n){return n<25?'#d44b4b':n<50?'#e7aa42':'#43b978'}
function satisfactionWidget(){const v=satisfactionInit();return `<section class="panel"><h3>📊 Confiança no treinador</h3><p class="muted">Os resultados da liga alteram a satisfação. ${state.noDismissal?'Demissões desativadas nesta carreira.':'Abaixo de 20 pontos em qualquer barra, você é demitido.'}</p>${[['Diretoria',v.board],['Torcedores',v.fans]].map(([name,n])=>`<div class="trust-row"><div class="row"><b>${name}</b><strong>${n}/100</strong></div><div class="trust-track"><span style="width:${n}%;background:${satisfactionColor(n)}"></span></div></div>`).join('')}<p class="muted">Última avaliação: ${v.lastMessage}</p></section>`}
function checkSatisfactionDismissal(){if(state.noDismissal)return false;const v=satisfactionInit();if(state.jobStatus==='fired'||(v.board>=20&&v.fans>=20))return false;state.jobStatus='fired';const j=jobInit();j.events.push({year:state.year,text:'Demitido por baixa satisfação • Diretoria '+v.board+'/100 • Torcida '+v.fans+'/100'});j.clubFunds[clubKey(careerLeague(),state.careerClub)]=state.budget;j.offers=[];jobOffers(true);state.page='jobs';save();alertMsg('Você foi demitido! A confiança da diretoria ou da torcida caiu abaixo de 20.');return true}
function satisfactionAfterMatch(own,other){if(state.jobStatus==='fired')return;const v=satisfactionInit();const delta=own>other?6:own===other?-2:-9;const fanDelta=own>other?8:own===other?-3:-12;const r=managerRating();const positionBonus=r.pos<=3?2:r.pos>Math.ceil(r.total*.8)?-3:0;
 v.board=Math.max(0,Math.min(100,v.board+delta+positionBonus+(state.budget<0?-2:0)));
 v.fans=Math.max(0,Math.min(100,v.fans+fanDelta+positionBonus));
 v.seen++;v.lastMessage=(own>other?'Vitória':own===other?'Empate':'Derrota')+' por '+own+' × '+other+' • rodada '+careerRound();
 checkSatisfactionDismissal();}
// Mercado de treinadores: ofertas, reputação e demissões fictícias.
function jobInit(){if(!state.managerCareer)state.managerCareer={reputation:50,events:[],clubFunds:{},offers:[],lastReview:null};return state.managerCareer}
function clubKey(li,ci){return li+':'+ci}
function jobOffers(refresh=false){const j=jobInit();if(!refresh&&j.offers.length)return j.offers;const all=countryLeagues.flatMap((l,li)=>l.clubs.map((name,ci)=>({li,ci,name,level:Math.round(getPower(clubUid(li,ci)))}))).filter(c=>c.li!==careerLeague()||c.ci!==state.careerClub);const rep=j.reputation;const eligible=all.filter(c=>c.level<=rep+43);const pool=(eligible.length?eligible:all).sort(()=>Math.random()-.5);j.offers=pool.slice(0,8);return j.offers}
function managerRating(){const rank=careerRank(),pos=rank.findIndex(t=>t.id===state.careerClub)+1,total=rank.length,played=careerRound(),pts=careerTable()[state.careerClub]?.pts||0;const rate=played?pts/(played*3):0.5;return {pos,total,played,pts,rate}}
function switchCoachingClub(li,ci,reason='Troca de clube'){
 if(liveMatch){alertMsg('Finalize a partida ao vivo antes de trocar de clube.');return}
 const j=jobInit(),old=state.club===null?'Sem clube':careerName(),oldKey=state.club===null?null:clubKey(careerLeague(),state.careerClub);
 if(oldKey)j.clubFunds[oldKey]=state.budget;
 const key=clubKey(li,ci);state.careerCountry=li;state.careerClub=ci;state.club=ci;state.budget=j.clubFunds[key]??Math.max(20,Math.round(getPower(clubUid(li,ci))*.55));
 state.lineup=null;state.satisfaction={board:65,fans:70,seen:0,lastMessage:'Novo clube, nova confiança'};state.results=[];state.liveResult=null;state.payroll={year:state.year,monthsPaid:Math.floor((li===0?state.round:state.countryRounds[li])/4),history:[]};
 state.page='home';j.events.push({year:state.year,text:reason+': '+old+' → '+careerName()});j.offers=[];state.jobStatus='employed';
 // Os torneios da temporada não reiniciam ao mudar de clube.
 save();render();alertMsg('Novo contrato: '+careerName()+'!');
}
function acceptJob(li,ci){if(!jobOffers().some(o=>o.li===li&&o.ci===ci)){alertMsg('Esta proposta não está disponível.');return}if(!confirm('Aceitar proposta de '+countryLeagues[li].clubs[ci]+'? Você deixará seu clube atual.'))return;switchCoachingClub(li,ci,'Contrato assinado')}
function reviewManagerSeason(){if(checkSatisfactionDismissal())return true;const j=jobInit();if(j.lastReview===state.year)return false;const r=managerRating();const weak=r.pos>Math.ceil(r.total*.72)&&r.rate<.38;const veryWeak=r.pos>Math.ceil(r.total*.85);const debt=state.budget< -40;const fired=!state.noDismissal&&(weak||veryWeak||debt);j.reputation=Math.max(20,Math.min(95,j.reputation+(r.pos<=3?9:r.pos<=Math.ceil(r.total*.45)?4:fired?-9:-2)));
 j.lastReview=state.year;j.events.push({year:state.year,text:(fired?'Demitido':'Mantido')+' por '+careerName()+' • '+r.pos+'º de '+r.total+' • '+r.pts+' pontos'});
 if(fired){state.jobStatus='fired';j.clubFunds[clubKey(careerLeague(),state.careerClub)]=state.budget;j.offers=[];jobOffers(true);return true}return false}
function renderJobs(){const j=jobInit(),r=managerRating();return satisfactionWidget()+`<section class="panel"><h3>💼 Carreira de treinador</h3><p><b>Demissões:</b> ${state.noDismissal?'Desativadas (modo protegido)':'Ativadas'}</p><p><b>Clube:</b> ${careerName()} • <b>Situação:</b> ${state.jobStatus==='fired'?'Demitido — procure outro clube':'Empregado'} • <b>Reputação:</b> ${j.reputation}/95</p><p class="muted">Posição atual: ${r.pos}º de ${r.total}. A diretoria avalia os resultados ao fim da temporada. ${state.noDismissal?'Você não pode ser demitido nesta carreira.':'Campanhas ruins e dívidas graves podem causar demissão.'} As propostas são fictícias.</p><button class="secondary" id="refreshJobs">🔄 Procurar propostas</button></section><section class="panel"><h3>📨 Propostas de clubes</h3>${jobOffers().map(o=>`<div class="row" style="gap:10px;flex-wrap:wrap"><span>${countryLeagues[o.li].flag} <b>${o.name}</b> • ${countryLeagues[o.li].name}</span><button class="secondary" data-acceptjob="${o.li}:${o.ci}">Aceitar proposta</button></div>`).join('')||'<p>Sem propostas no momento.</p>'}</section><section class="panel"><h3>📜 Histórico profissional</h3>${j.events.slice().reverse().map(e=>`<div class="row"><span>${e.year} • ${e.text}</span></div>`).join('')||'<p class="muted">Sua carreira está começando.</p>'}</section>`}
// Finanças em milhões de unidades monetárias fictícias. Salários são mensais.
function playerSalary(p){
 // Versão 11: redução única de 25% sobre os salários da versão x10.
 // Valores são milhões fictícios, com precisão de 0,001 milhão.
 if(!Number.isFinite(p.salary)||p.salary<=0){
   p.salary=Math.round((0.025+Math.pow(Math.max(0,(p.ovr||65)-55)/35,2)*0.38)*7500)/1000;
 }else if(p.salaryVersion!==11){
   // Salários da versão x10 (10) e de versões antigas são migrados apenas uma vez.
   const previous=p.salaryVersion===10?p.salary:p.salary*10;
   p.salary=Math.round(previous*0.75*1000)/1000;
 }
 p.salaryVersion=11;
 return p.salary;
}
// Contratos em temporadas: dados fictícios do simulador, persistidos nos jogadores.
function ensureContracts(){
 if(!Array.isArray(state.freeAgents))state.freeAgents=[];
 for(const roster of [...state.players,...state.foreignPlayers.filter(Boolean).flat()])for(const p of roster){
  if(!Number.isFinite(p.contractUntil))p.contractUntil=state.year+1+(Math.abs([...p.name].reduce((n,c)=>n+c.charCodeAt(0),0))%4);
  if(!Number.isFinite(p.contractSalary))p.contractSalary=playerSalary(p);
 }
}
// Moral individual: persistida no próprio atleta, inclusive em transferências.
function happinessOf(p){if(!Number.isFinite(p.happiness))p.happiness=75;return p.happiness=Math.max(0,Math.min(100,Math.round(p.happiness)));}
function happinessBar(p){const h=happinessOf(p),color=h<25?'#e25555':h<50?'#f0a347':h<80?'#f1cf5b':'#47bd86';return `<div class="player-happiness" title="Felicidade ${h}%"><div class="happiness-track"><span style="width:${h}%;background:${color}"></span></div><strong>${h}%</strong></div><small class="muted">${h<25?'Passes livres':h<50?'À venda':h<80?'Satisfeito':'Muito feliz'}</small>`;}
function updatePlayerHappinessAfterMatch(){
 if(state.club===null||state.jobStatus==='fired')return;
 const roster=careerRoster();if(!roster?.length)return;
 const selected=new Set(setupLineup().players);
 for(let i=0;i<roster.length;i++){const p=roster[i];p.happiness=Math.max(0,Math.min(100,happinessOf(p)+(selected.has(i)?4:-9)));p.transferListed=p.happiness>=25&&p.happiness<=49;}
 const leaving=[];
 for(let i=roster.length-1;i>=0;i--){const p=roster[i];if(happinessOf(p)>24)continue;
  roster.splice(i,1);p.transferListed=false;p.freeAgentReason='Insatisfação';ensureContracts();state.freeAgents.push(p);leaving.push(p.name);
 }
 // Mantém a carreira jogável: jovens de emergência preenchem as vagas se houver menos de 11 atletas.
 while(roster.length<11){const youth=makeYouth(careerLeague(),state.careerClub);youth.age=18;youth.ovr=Math.max(55,youth.ovr);youth.happiness=75;youth.contractUntil=state.year+2;youth.academy=false;roster.push(youth);}
 if(leaving.length){state.lineup=null;alertMsg('Jogadores insatisfeitos foram para os passes livres: '+leaving.join(', '));}
}
function contractYears(p){return Math.max(0,Math.ceil(p.contractUntil-state.year))}
function renewalOffer(p,years){const wage=playerSalary(p),factor=1.08+0.055*(years-1);return {wage:Math.round(wage*factor*1000)/1000,bonus:Math.round(Math.max(.05,p.value*.012*years)*100)/100}}
function renewContract(index,years){
 ensureContracts();const p=careerRoster()[index];years=Number(years);
 if(!p||!Number.isInteger(years)||years<1||years>5)return;
 const offer=renewalOffer(p,years);
 if(state.budget<offer.bonus){alertMsg('Saldo insuficiente para o bônus de renovação: '+fmt(offer.bonus));return}
 state.budget=Math.round((state.budget-offer.bonus)*1000)/1000;
 p.salary=offer.wage;p.contractSalary=offer.wage;p.salaryVersion=11;
 p.contractUntil=state.year+years;
 save();render();alertMsg('✍️ '+p.name+' renovou até '+p.contractUntil+'! Bônus: '+fmt(offer.bonus));
}
function expireContracts(){
 ensureContracts();let released=0,emergency=0;
 for(const roster of [...state.players,...state.foreignPlayers.filter(Boolean).flat()]){
  for(let i=roster.length-1;i>=0;i--){const p=roster[i];if(p.contractUntil>state.year)continue;
   if(roster.length<=11){p.contractUntil=state.year+1;emergency++;continue}
   roster.splice(i,1);state.freeAgents.push(p);released++;
  }
 }
 state.lineup=null;
 return {released,emergency};
}
function signFreeAgent(index){
 ensureContracts();const p=state.freeAgents[index];if(!p)return;
 const bonus=Math.round(Math.max(.1,p.value*.08)*100)/100;
 if(state.budget<bonus){alertMsg('Saldo insuficiente para contratar: '+fmt(bonus));return}
 state.budget=Math.round((state.budget-bonus)*1000)/1000;
 state.freeAgents.splice(index,1);p.contractUntil=state.year+2;
 p.salary=Math.round(playerSalary(p)*1.12*1000)/1000;p.salaryVersion=11;p.contractSalary=p.salary;
 careerRoster().push(p);state.lineup=null;save();render();alertMsg('✍️ '+p.name+' contratado sem clube até '+p.contractUntil);
}
function renderContracts(){ensureContracts();const roster=careerRoster();const ending=roster.filter(p=>contractYears(p)<=1).length;
 return `<section class="panel"><h3>📝 Contratos de ${careerName()}</h3><p class="muted">${ending} jogador(es) com contrato terminando nesta temporada ou na próxima. Renove antes de avançar a temporada. Valores de salários e bônus são fictícios e em milhões de R$.</p><p>Saldo disponível: <b>${fmt(state.budget)}</b></p><div class="tablewrap"><table><thead><tr><th>JOGADOR</th><th>VENCIMENTO</th><th>SALÁRIO/MÊS</th><th>RENOVAR</th></tr></thead><tbody>${roster.map((p,i)=>`<tr><td>${p.name}</td><td><b style="color:${contractYears(p)<=1?'#ffb86b':'inherit'}">${p.contractUntil}</b>${contractYears(p)<=1?' ⚠️':''}</td><td>${fmt(playerSalary(p))}</td><td><select id="contract-years-${i}" aria-label="Anos de contrato para ${p.name}"><option value="1">1 ano</option><option value="2" selected>2 anos</option><option value="3">3 anos</option><option value="4">4 anos</option><option value="5">5 anos</option></select> <button class="secondary" data-renew="${i}">Renovar</button></td></tr>`).join('')}</tbody></table></div></section><section class="panel"><h3>🆓 Jogadores livres (${state.freeAgents.length})</h3><p class="muted">Jogadores que encerraram seus contratos podem ser contratados sem taxa de transferência, mediante bônus de assinatura.</p>${state.freeAgents.slice(0,80).map((p,i)=>`<div class="row" style="gap:10px;flex-wrap:wrap"><span>${p.name} • ${p.pos} • GER ${p.ovr}</span><button class="secondary" data-sign-free="${i}">Contratar • ${fmt(Math.round(Math.max(.1,p.value*.08)*100)/100)}</button></div>`).join('')||'<p class="muted">Nenhum jogador livre no momento.</p>'}</section>`;
}
function salaryBill(){return careerRoster().reduce((sum,p)=>sum+playerSalary(p),0)}
function initPayroll(){if(!state.payroll||state.payroll.year!==state.year)state.payroll={year:state.year,monthsPaid:0,history:[]};for(const roster of [...state.players,...state.foreignPlayers.filter(Boolean).flat()])for(const p of roster)playerSalary(p)}
function payMonthlyWages(){initPayroll();const due=Math.floor(careerRound()/4);let paid=0;while(state.payroll.monthsPaid<due){const amount=salaryBill();state.budget=Math.round((state.budget-amount)*1000)/1000;state.payroll.monthsPaid++;paid+=amount;state.payroll.history.push({year:state.year,month:state.payroll.monthsPaid,amount:Math.round(amount*1000)/1000});}if(paid>0)alertMsg('💸 Salários pagos: '+fmt(paid)+' • Saldo: '+fmt(state.budget));}
function renderFinances(){initPayroll();const bill=salaryBill();return `<section class="panel"><h3>💰 Finanças e salários mensais</h3><p>Saldo do clube: <b>${fmt(state.budget)}</b> • Folha mensal: <b>${fmt(bill)}</b> • Meses pagos nesta temporada: ${state.payroll.monthsPaid}</p><p class="muted">A cada 4 rodadas do seu campeonato nacional passa um mês financeiro. Os salários estão 25% menores que na versão x10 e são descontados automaticamente, inclusive quando o caixa fica negativo. Valores fictícios em milhões; por exemplo, 0,100 = 100 mil por mês.</p><div class="tablewrap"><table><thead><tr><th>Jogador</th><th>Posição</th><th>GER</th><th>Salário mensal</th></tr></thead><tbody>${careerRoster().map(p=>`<tr><td>${p.name}</td><td>${p.pos}</td><td>${p.ovr}</td><td>${fmt(playerSalary(p))}</td></tr>`).join('')}</tbody></table></div></section><section class="panel"><h3>Extrato salarial</h3>${state.payroll.history.slice().reverse().map(x=>`<div class="row"><span>${x.year} • Mês ${x.month}</span><b>− ${fmt(x.amount)}</b></div>`).join('')||'<p class="muted">Nenhum pagamento realizado ainda.</p>'}</section>`}
function allTransferClubs(){return countryLeagues.flatMap((l,li)=>l.clubs.map((name,ci)=>({li,ci,name,roster:li===0?state.players[ci]:state.foreignPlayers[li][ci]})))}
function transferInternational(fromLi,fromCi,index){const toLi=careerLeague(),toCi=state.careerClub;if(fromLi===toLi&&fromCi===toCi)return;const source=fromLi===0?state.players[fromCi]:state.foreignPlayers[fromLi][fromCi];const p=source[index];if(!p)return;if(p.placeholder){alertMsg('Este atleta ainda não tem identidade real confirmada.');return}if(source.length<=11){alertMsg('O clube vendedor precisa manter ao menos 11 jogadores.');return}if(state.budget<p.value){alertMsg('Saldo insuficiente!');return}state.budget-=p.value;source.splice(index,1);careerRoster().push(p);p.contractUntil=state.year+2;p.contractSalary=playerSalary(p);state.lineup=null;save();render();alertMsg(p.name+' contratado de '+countryLeagues[fromLi].clubs[fromCi]+'!')}
// Propostas de compra geradas por clubes controlados pela IA; persistem no save.
function transferOffersInit(){
 if(!state.transferOffers||typeof state.transferOffers!=='object')state.transferOffers={inbox:[],history:[],lastChecked:null,seq:0};
 return state.transferOffers;
}
function generateClubOffers(){
 if(state.club===null||state.jobStatus==='fired')return;
 const t=transferOffersInit(),day=state.year+':'+(state.dayOfYear||1);
 if(t.lastChecked===day)return;
 t.lastChecked=day;
 t.inbox=t.inbox.filter(o=>o.year===state.year&&o.expires>=state.dayOfYear);
 const roster=careerRoster();
 if(roster.length<=11||t.inbox.length>=4||Math.random()>.24)return;
 const eligible=roster.map((p,i)=>({p,i})).filter(x=>!x.p.placeholder&&!t.inbox.some(o=>o.playerName===x.p.name));
 if(!eligible.length)return;
 const selected=eligible[Math.floor(Math.random()*eligible.length)];
 const buyers=allTransferClubs().filter(c=>!(c.li===careerLeague()&&c.ci===state.careerClub)&&c.roster.length<28);
 if(!buyers.length)return;
 const buyer=buyers[Math.floor(Math.random()*buyers.length)];
 const base=Math.max(.1,Number(selected.p.value)||1);
 const amount=Math.round(base*(.85+Math.random()*.55)*100)/100;
 t.inbox.push({id:++t.seq,year:state.year,day:state.dayOfYear,expires:state.dayOfYear+14,li:buyer.li,ci:buyer.ci,playerName:selected.p.name,playerId:selected.p.id,amount});
}
function resolveClubOffer(id,accept){
 const t=transferOffersInit(),index=t.inbox.findIndex(o=>o.id===id);
 if(index<0){alertMsg('Proposta não encontrada.');return}
 const o=t.inbox[index],roster=careerRoster(),pi=roster.findIndex(p=>p.name===o.playerName&&p.id===o.playerId);
 if(pi<0){t.inbox.splice(index,1);save();render();alertMsg('O jogador não está mais no clube.');return}
 if(accept&&roster.length<=11){alertMsg('Você precisa manter ao menos 11 jogadores.');return}
 const buyer=allTransferClubs().find(c=>c.li===o.li&&c.ci===o.ci);
 if(accept&&!buyer){alertMsg('Clube comprador não encontrado.');return}
 if(accept){const [player]=roster.splice(pi,1);buyer.roster.push(player);state.budget=Math.round((state.budget+o.amount)*100)/100;state.lineup=null}
 t.history.unshift({...o,accepted:!!accept,decidedYear:state.year,decidedDay:state.dayOfYear});
 t.history=t.history.slice(0,100);t.inbox.splice(index,1);save();render();alertMsg(accept?'Proposta aceita! '+o.playerName+' foi vendido.':'Proposta recusada.');
}
function renderClubOffers(){
 const t=transferOffersInit();
 return `<section class="panel"><h3>📨 Propostas recebidas de outros clubes</h3><p class="muted">Clubes da IA podem oferecer valores pelos seus atletas. Você decide aceitar ou recusar. Ofertas expiram após 14 dias do calendário. Os valores são fictícios do POIFOOTB.</p>${t.inbox.length?t.inbox.map(o=>`<div class="row" style="flex-wrap:wrap;gap:12px;border-bottom:1px solid #39483e;padding:12px 0"><div><b>${o.playerName}</b><p class="muted">${countryLeagues[o.li].clubs[o.ci]} • ${fmt(o.amount)} • expira no dia ${o.expires}</p></div><div><button class="primary" data-offer-accept="${o.id}">Aceitar</button> <button class="secondary" data-offer-reject="${o.id}">Recusar</button></div></div>`).join(''):'<p class="muted">Nenhuma proposta pendente. Avance os dias para receber ofertas.</p>'}</section><section class="panel"><h3>📋 Histórico de propostas</h3>${t.history.slice(0,12).map(o=>`<div class="row"><span>${o.playerName} • ${countryLeagues[o.li].clubs[o.ci]}</span><b>${fmt(o.amount)} • ${o.accepted?'Aceita':'Recusada'}</b></div>`).join('')||'<p class="muted">Nenhuma proposta respondida.</p>'}</section>`;
}
function sellInternational(index){const source=careerRoster(),p=source[index];if(!p)return;if(source.length<=11){alertMsg('Mantenha ao menos 11 jogadores no elenco!');return}const destinations=allTransferClubs().filter(t=>!(t.li===careerLeague()&&t.ci===state.careerClub));const buyer=destinations[Math.floor(Math.random()*destinations.length)];source.splice(index,1);buyer.roster.push(p);state.budget+=p.value;state.lineup=null;save();render();alertMsg(p.name+' vendido para '+buyer.name+'!')}

const FORMATIONS={'4-3-3':['GOL','LD','ZAG','ZAG','LE','MC','MC','MEI','PD','ATA','PE'],'4-4-2':['GOL','LD','ZAG','ZAG','LE','MC','MC','MEI','MEI','ATA','ATA'],'4-2-3-1':['GOL','LD','ZAG','ZAG','LE','VOL','VOL','PD','MEI','PE','ATA'],'3-5-2':['GOL','ZAG','ZAG','ZAG','LD','VOL','MC','MEI','LE','ATA','ATA'],'5-3-2':['GOL','LD','ZAG','ZAG','ZAG','LE','MC','MC','MEI','ATA','ATA']};
// A chave de escalação é o índice do atleta no elenco, evitando IDs duplicados de jogadores transferidos.
function setupLineup(){
 const roster=careerRoster(),uid=careerLeague()+':'+state.careerClub;
 if(!state.lineup||state.lineup.uid!==uid)state.lineup={uid,formation:'4-3-3',players:[],indexBased:true};
 const l=state.lineup;
 if(!FORMATIONS[l.formation])l.formation='4-3-3';
 if(!l.indexBased){l.players=(l.players||[]).map(id=>roster.findIndex(p=>String(p.id)===String(id)));l.indexBased=true;}
 let picks=(l.players||[]).map(Number).filter((n,i,arr)=>Number.isInteger(n)&&n>=0&&n<roster.length&&arr.indexOf(n)===i);
 const slots=FORMATIONS[l.formation];
 while(picks.length<Math.min(11,roster.length)){
  const slot=slots[picks.length];let best=-1,bestScore=-Infinity;
  roster.forEach((p,i)=>{if(picks.includes(i))return;const score=(p.ovr||65)+positionBonus(p.pos,slot);if(score>bestScore){best=i;bestScore=score}});
  if(best<0)break;picks.push(best);
 }
 l.players=picks.slice(0,11);return l;
}
function positionBonus(actual,needed){if(actual===needed)return 9;if(['MC','VOL','MEI'].includes(actual)&&['MC','VOL','MEI'].includes(needed))return 3;if(['LD','LE'].includes(actual)&&['LD','LE'].includes(needed))return 2;if(['PD','PE','ATA'].includes(actual)&&['PD','PE','ATA'].includes(needed))return 2;return -7}
function lineupPower(){const l=setupLineup(),roster=careerRoster();if(l.players.length!==11)return 55;return l.players.reduce((total,id,i)=>{const p=roster[id];return total+(p?(p.ovr||65)+positionBonus(p.pos,FORMATIONS[l.formation][i]):45)},0)/11}
function renderTactics(){const l=setupLineup(),roster=careerRoster(),slots=FORMATIONS[l.formation];return `<section class="panel"><h3>📋 Escalação titular</h3><p class="muted">Escolha a formação e os 11 titulares. Cada atleta só pode ocupar uma vaga. A escalação é salva automaticamente e afeta o desempenho nas partidas ao vivo.</p><label for="formation">Formação</label> <select id="formation" class="tactic-select">${Object.keys(FORMATIONS).map(f=>`<option value="${f}" ${f===l.formation?'selected':''}>${f}</option>`).join('')}</select><div class="pitch"><div class="pitch-title">⚽ CAMPO • ${l.formation}</div>${slots.map((pos,i)=>`<div class="pitch-player"><span class="position-tag">${pos}</span><select class="tactic-select" data-lineup-slot="${i}" aria-label="Titular ${i+1}, posição ${pos}">${roster.map((p,j)=>`<option value="${j}" ${j===l.players[i]?'selected':''} ${l.players.includes(j)&&l.players[i]!==j?'disabled':''}>${p.name} (${p.pos} • ${p.ovr})</option>`).join('')}</select></div>`).join('')}</div><p class="muted">Titulares diferentes: <b>${new Set(l.players).size}/11</b> • Força estimada: <b>${lineupPower().toFixed(1)}</b></p><button class="secondary" id="autoLineup">Montar melhor escalação automaticamente</button></section>`}
let cupLiveOverride=null;
function cupPairScores(a,b){
 if(cupLiveOverride&&cupLiveOverride.a===a&&cupLiveOverride.b===b)return [cupLiveOverride.x,cupLiveOverride.y];
 // Mata-mata: a diferenca de forca pesa menos e a variacao do confronto e maior.
 // O modificador e compartilhado entre os dois lados para evitar duas rolagens independentes.
 const powerA=getPower(a),powerB=getPower(b);
 const gap=Math.max(-35,Math.min(35,(powerA-powerB)*.69+(seasonalForm(a)-seasonalForm(b))*.6));
 const swing=(Math.random()-.5)*13;
 const pace=.83+Math.random()*.48;
 return [poissonGoals(Math.max(.25,Math.min(4,(1.4+gap*.043+swing*.055)*pace))),
         poissonGoals(Math.max(.25,Math.min(4,(1.4-gap*.043-swing*.055)*pace)))];
}
function controlledCupPair(pairs){
 const mine=clubUid(careerLeague(),state.careerClub);
 return pairs.find(([a,b])=>b!==undefined&&(a===mine||b===mine));
}
function cupFixtures(cup){
 if(!cup||cup.champion!==null||cup.notScheduled)return [];
 if(cup.remaining)return cup.remaining.reduce((out,a,i,arr)=>{if(i%2===0&&arr[i+1]!==undefined)out.push([a,arr[i+1]]);return out},[]);
 if(cup.round>=6&&cup.knockout)return cupFixtures({remaining:cup.knockout,champion:null});
 if(cup.round<6&&cup.groups){let fixtures=[[0,1],[2,3]];if(cup.round%3===1)fixtures=[[0,2],[1,3]];if(cup.round%3===2)fixtures=[[0,3],[1,2]];if(cup.round>=3)fixtures=fixtures.map(([a,b])=>[b,a]);return cup.groups.flatMap(g=>fixtures.map(([a,b])=>[g[a],g[b]]));}
 return [];
}
function startCupStage(cup,simulate){
 if(liveMatch){alertMsg('Finalize a partida atual primeiro.');return}
 const pair=controlledCupPair(cupFixtures(cup));
 if(!pair){simulate();return}
 const [a,b]=pair,mine=clubUid(careerLeague(),state.careerClub),opp=a===mine?b:a;
 setupLineup();const ownGoals=scorePower(lineupPower(),getPower(opp)),awayGoals=scorePower(getPower(opp),lineupPower());
 const starters=setupLineup().players.map(i=>careerRoster()[i]).filter(Boolean);
 const opponents=playerForEvent(opp),events=[];
 const pick=arr=>arr[Math.floor(Math.random()*arr.length)];
 for(let i=0;i<ownGoals;i++){const p=pick(starters.filter(x=>x.pos!=='GOL').length?starters.filter(x=>x.pos!=='GOL'):starters);events.push({minute:3+Math.floor(Math.random()*86),team:'own',text:'⚽ GOL! '+(p?.name||careerName())});}
 for(let i=0;i<awayGoals;i++){const p=opponents.length?pick(opponents):null;events.push({minute:3+Math.floor(Math.random()*86),team:'away',text:'⚽ GOL! '+getClubByUid(opp).name+(p?' — '+p.name:'')});}
 for(let i=0;i<15;i++)events.push({minute:2+Math.floor(Math.random()*87),team:'neutral',text:['🧤 Defesa do goleiro!','🚩 Escanteio!','🎯 Finalização perigosa!','🟨 Falta marcada!','⚡ Contra-ataque!'][i%5]});
 events.sort((x,y)=>x.minute-y.minute);
 liveMatch={minute:0,own:0,away:0,events,shown:0,paused:false,speed:3,cup:true,cupName:cup.label||'Competição continental',oppName:getClubByUid(opp).name,pair,simulate,awaitingMode:true};state.page='live';render();
}
let liveTimer=null,liveMatch=null;
function liveStart(){if(!canPlayToday()){alertMsg("A partida ainda não chegou. Avance o calendário até "+new Date(state.year,0,nextMatchDay()).toLocaleDateString("pt-BR"));return}
 if(!synchronizedRoundGuard())return;
 if(state.jobStatus==='fired'){state.page='jobs';render();alertMsg('Você precisa aceitar uma proposta para voltar a treinar.');return}
 if(careerSeasonEnd()){alertMsg('A temporada nacional já terminou.');return}
 if(liveTimer||liveMatch){alertMsg('Uma partida já está acontecendo.');return}
 const l=setupLineup(),roster=careerRoster();
 if(l.players.length!==11||new Set(l.players).size!==11){alertMsg('Você precisa de 11 titulares diferentes.');state.page='tactics';render();return}
 const li=careerLeague(),opp=careerOpponent();if(opp===undefined){alertMsg('Não foi encontrado adversário nesta rodada.');return}
 const ownGoals=scorePower(lineupPower(),getPower(clubUid(li,opp))),awayGoals=scorePower(getPower(clubUid(li,opp)),lineupPower());
 const starters=l.players.map(i=>roster[i]),oppPlayers=playerForEvent(clubUid(li,opp));
 const scorerPool=starters.filter(p=>p.pos!=='GOL');
 const pick=(arr)=>arr[Math.floor(Math.random()*arr.length)];
 const events=[];
 for(let i=0;i<ownGoals;i++){const p=pick(scorerPool.length?scorerPool:starters);const assist=starters.filter(x=>x!==p&&x.pos!=='GOL');const helper=assist.length&&Math.random()<.72?pick(assist):null;events.push({minute:4+Math.floor(Math.random()*86),team:'own',text:'⚽ GOL! '+p.name+(helper?' (assistência: '+helper.name+')':'')});}
 for(let i=0;i<awayGoals;i++){const p=oppPlayers.length?pick(oppPlayers):null;events.push({minute:4+Math.floor(Math.random()*86),team:'away',text:'⚽ GOL do '+countryLeagues[li].clubs[opp]+(p?'! '+p.name:'!')});}
 const phrases=['🧤 Grande defesa do goleiro!','🚩 Escanteio perigoso.','🎯 Finalização passou perto.','🟨 Falta marcada pelo árbitro.','⚡ Contra-ataque veloz.','🥅 Chute bloqueado pela defesa.'];
 for(let i=0;i<15;i++)events.push({minute:2+Math.floor(Math.random()*88),team:'neutral',text:phrases[i%phrases.length]});
 events.sort((a,b)=>a.minute-b.minute);
 liveMatch={minute:0,own:0,away:0,events,shown:0,opp,li,year:state.year,round:careerRound(),paused:false,speed:3,awaitingMode:true};state.page='live';render();
}
// Modo tático 2D: 90 segundos de relógio corrido, decisões com tempo congelado.
let manualGame=null,manualFrame=0,manualLast=0;
const manualClamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function manualStrength(roster){const top=(roster||[]).map(p=>Number(p.ovr)||65).sort((a,b)=>b-a).slice(0,11);return top.reduce((a,b)=>a+b,0)/(top.length||1)}
function manualStart(){
 if(!liveMatch||liveMatch.manual)return;
 clearInterval(liveTimer);liveTimer=null;
 const m=liveMatch,li=m.li,own=manualStrength(careerRoster());
 let rival=[];if(!m.cup&&state.players){rival=li===0?state.players[m.opp]:state.foreignPlayers?.[li]?.[m.opp]}
 const opp=manualStrength(rival);const share=manualClamp(.5+(own-opp)/85,.24,.76);
 m.manual=true;m.minute=0;m.own=0;m.away=0;m.shown=0;
 manualGame={clock:0,phase:'between',phaseClock:0,attackShare:share,turn:0,turns:0,attack:null,owner:0,ball:{x:0,y:0},players:[],foes:[],drag:null,aim:null,notice:'Aguarde o próximo ataque. A força dos times influencia as chances.',shots:0,animation:null,streak:0,keeper:{x:766,y:250,dive:0,targetY:250,save:false},stealFlash:0};
 state.page='live';render();manualMount();
}
function manualSetupAttack(ours){
 const g=manualGame;if(!g)return;
 g.phase=ours?'attack':'defense';g.phaseClock=0;g.keeper={x:766,y:250,dive:0,targetY:250,save:false};g.stealFlash=0;g.aim=null;g.drag=null;g.animation=null;g.turns++;
 g.players=[{x:190,y:245},{x:320,y:135},{x:350,y:340},{x:470,y:210},{x:500,y:385}];
 g.foes=[{x:285,y:220},{x:430,y:300},{x:555,y:160},{x:610,y:350},{x:690,y:250}];
 if(ours){g.owner=0;g.ball={x:190,y:245};g.notice='⏸ Tempo congelado! Toque em um companheiro para PASSAR, no gramado para CORRER ou arraste do jogador para CHUTAR.'}
 else{g.owner=-1;g.ball={x:585,y:250};g.notice='🛡️ DEFESA: desenhe um traço na direção do adversário para dar um carrinho.'}
}
function manualMount(){
 const c=document.getElementById('manualPitch');if(!c||!manualGame)return;c.width=800;c.height=500;
 const xy=e=>{const r=c.getBoundingClientRect(),sx=(e.clientX-r.left)*800/r.width,sy=(e.clientY-r.top)*500/r.height;return manualUnproject(sx,sy)};
 c.onpointerdown=e=>{e.preventDefault();const g=manualGame;if(!g||g.animation||liveMatch?.paused||!['attack','defense'].includes(g.phase))return;const p=xy(e);g.drag={start:p,end:p,points:[p]};try{c.setPointerCapture(e.pointerId)}catch(_){}};
 c.onpointermove=e=>{if(!manualGame?.drag)return;const d=manualGame.drag,p=xy(e);d.end=p;const prev=d.points[d.points.length-1];if(Math.hypot(p.x-prev.x,p.y-prev.y)>3)d.points.push(p)};
 c.onpointerup=e=>{const g=manualGame;if(!g?.drag)return;g.drag.end=xy(e);const {start,end,points}=g.drag;g.drag=null;manualGesture(start,end,points)};
 c.onpointercancel=()=>{if(manualGame)manualGame.drag=null};
 const pause=document.getElementById('pauseLive');if(pause)pause.onclick=()=>{liveMatch.paused=!liveMatch.paused;pause.textContent=liveMatch.paused?'▶ Continuar':'⏸ Pausar'};
 document.getElementById('manualEnd').onclick=()=>{manualStop();liveMatch.minute=90;finishLive()};
 cancelAnimationFrame(manualFrame);manualLast=0;manualFrame=requestAnimationFrame(manualTick);
}
function manualGesture(start,end,points=[]){
 const g=manualGame;if(!g||g.animation||!['attack','defense'].includes(g.phase))return;
 const dist=Math.hypot(end.x-start.x,end.y-start.y);
 if(g.phase==='defense'){
  if(dist<18){g.notice='Desenhe um traço na direção do atacante para dar o carrinho.';return}
  const defender=g.players.reduce((best,p,i)=>Math.hypot(p.x-start.x,p.y-start.y)<Math.hypot(g.players[best].x-start.x,g.players[best].y-start.y)?i:best,0);
  const player=g.players[defender],foe=g.foes.reduce((best,p,i)=>Math.hypot(p.x-g.ball.x,p.y-g.ball.y)<Math.hypot(g.foes[best].x-g.ball.x,g.foes[best].y-g.ball.y)?i:best,0);
  const target=g.foes[foe],ex=manualClamp(player.x+(end.x-start.x),10,790),ey=manualClamp(player.y+(end.y-start.y),10,490);
  const gap=Math.hypot(ex-target.x,ey-target.y);
  const success=Math.random()<manualClamp(.88-gap/230,.08,.9);
  const goal=!success&&Math.random()<manualClamp(.22+(g.attackShare<.5?.13:0),.14,.48);
  g.notice=success?'🛡️ Carrinho perfeito! Você recuperou a bola.':goal?'⚽ O adversário escapou e marcou!':'O atacante escapou, mas chutou para fora.';
  g.animation={kind:'tackle',elapsed:0,duration:.48,from:{...player},to:{x:ex,y:ey},index:defender,finish:()=>manualFinishAttack(false,goal)};
  return;
 }
 const p=g.players[g.owner];if(!p)return;
 // Um toque sobre outro atleta é passe. Um toque no campo é corrida.
 if(dist<24){const target=g.players.findIndex((q,i)=>i!==g.owner&&Math.hypot(q.x-end.x,q.y-end.y)<28);
  if(target>=0){
   const dest=g.players[target],distance=Math.hypot(p.x-dest.x,p.y-dest.y);
   // Marcadores se deslocam para fechar a linha do passe e podem interceptar a bola.
   const nearest=Math.min(...g.foes.map(f=>Math.hypot(f.x-dest.x,f.y-dest.y)));
   const interceptors=g.foes.map((f,i)=>({i,d:manualPointSegmentDistance(f,p,dest)})).sort((a,b)=>a.d-b.d);
   const intercepted=Math.random()<manualClamp(.035+distance/2100+(nearest<55?.13:0)+(interceptors[0].d<30?.38:interceptors[0].d<55?.19:0),.04,.82);
   g.notice=intercepted?'🛡️ O marcador cortou o passe e roubou a bola!':'⚽ Passe realizado! Escolha a próxima jogada.';
   const marker=g.foes[interceptors[0].i];
   g.animation={kind:'pass',elapsed:0,duration:manualClamp(distance/520,.25,.85),from:{...p},to:{...dest},finish:()=>{if(intercepted){marker.x=dest.x;marker.y=dest.y;g.stealFlash=.9;manualFinishAttack(true,false)}else{g.owner=target;g.ball={...dest};g.streak++}}};
   return;
  }
  const runDist=Math.hypot(end.x-p.x,end.y-p.y);if(runDist<20){g.notice='Toque mais longe para correr ou em um colega para passar.';return}
  const step=manualClamp(runDist,0,135),vx=(end.x-p.x)/runDist,vy=(end.y-p.y)/runDist;
  const dest={x:manualClamp(p.x+vx*step,28,768),y:manualClamp(p.y+vy*step,30,470)};
  const marker=g.foes.reduce((best,f,i)=>Math.hypot(f.x-dest.x,f.y-dest.y)<Math.hypot(g.foes[best].x-dest.x,g.foes[best].y-dest.y)?i:best,0);
  const foe=g.foes[marker],pressure=Math.hypot(foe.x-dest.x,foe.y-dest.y);
  const tackled=Math.random()<manualClamp(.035+step/1250+(pressure<35?.56:pressure<65?.32:pressure<100?.13:0),.04,.78);
  g.notice=tackled?'🛡️ O marcador se aproximou e roubou a bola!':'🏃 Boa arrancada! Escolha o próximo movimento.';
  g.animation={kind:'run',elapsed:0,duration:manualClamp(step/280,.28,.8),from:{...p},to:dest,index:g.owner,marker,finish:()=>{if(tackled){foe.x=dest.x+8;foe.y=dest.y;g.stealFlash=.9;manualFinishAttack(true,false)}else g.streak++}};
  return;
 }
 // Arrastar a partir do atleta ou usar o botão CHUTAR: direção e comprimento definem a força.
 const fromPlayer=Math.hypot(start.x-p.x,start.y-p.y)<65;
 if(fromPlayer){manualShootGesture(start,end,points);return}
 g.notice='Para chutar, comece o traço no jogador com a bola. Para correr, dê um toque no destino.';
}
function manualPointSegmentDistance(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=manualClamp(((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)}
function manualShotPosition(path,t){
 const lengths=[0];for(let i=1;i<path.length;i++)lengths.push(lengths[i-1]+Math.hypot(path[i].x-path[i-1].x,path[i].y-path[i-1].y));
 const total=lengths[lengths.length-1]||1,target=t*total;
 for(let i=1;i<lengths.length;i++)if(target<=lengths[i]){const f=(target-lengths[i-1])/Math.max(.001,lengths[i]-lengths[i-1]);return{x:path[i-1].x+(path[i].x-path[i-1].x)*f,y:path[i-1].y+(path[i].y-path[i-1].y)*f}}
 return {...path[path.length-1]};
}
function manualShootGesture(start,end,points=[]){
 const g=manualGame;if(!g||g.phase!=='attack')return;
 const p=g.players[g.owner];if(!p)return;
 // A bola segue os pontos percorridos pelo mouse ou dedo enquanto está pressionado.
 const raw=[{x:p.x,y:p.y},...points.filter(q=>Number.isFinite(q.x)&&Number.isFinite(q.y))];
 if(Math.hypot(end.x-raw[raw.length-1].x,end.y-raw[raw.length-1].y)>2)raw.push(end);
 const path=[raw[0]];for(const q of raw.slice(1)){const prev=path[path.length-1];if(Math.hypot(q.x-prev.x,q.y-prev.y)>3)path.push({x:manualClamp(q.x,0,800),y:manualClamp(q.y,0,500)})}
 const length=path.slice(1).reduce((sum,q,i)=>sum+Math.hypot(q.x-path[i].x,q.y-path[i].y),0);
 if(length<25){g.notice='Segure e arraste o mouse ou dedo para desenhar o caminho do chute.';return}
 const power=manualClamp(Math.round(length/2.3),12,100);
 // Se o desenho terminar antes do gol, a bola mantém a direção do último trecho.
 const last=path[path.length-1],prev=path[Math.max(0,path.length-2)],dx=last.x-prev.x,dy=last.y-prev.y;
 const norm=Math.hypot(dx,dy)||1,ux=dx/norm,uy=dy/norm;
 if(last.x<786&&ux>.08){const extra=Math.min((786-last.x)/ux,Math.max(0,power*9-length));if(extra>0)path.push({x:last.x+ux*extra,y:last.y+uy*extra})}
 const crossing=path.findIndex((q,i)=>i>0&&q.x>=766&&path[i-1].x<766);
 let impactY=last.y;
 if(crossing>=0){const a=path[crossing-1],b=path[crossing],f=(766-a.x)/(b.x-a.x);impactY=a.y+(b.y-a.y)*f}
 const onTarget=crossing>=0&&impactY>188&&impactY<312;
 const distance=786-p.x,nearest=Math.min(...g.foes.map(f=>Math.hypot(f.x-p.x,f.y-p.y)));
 const accuracy=manualClamp(.83-distance/1050+power/500-(power>90?.16:0)-(nearest<45?.13:0)-Math.abs(impactY-250)/420,.06,.91);
 const keeper=g.keeper||(g.keeper={x:766,y:250,dive:0,targetY:250,save:false});
 const reaction=manualClamp(.74-power/300+distance/2200,.24,.85),diveReach=42+reaction*74;
 const saved=onTarget&&Math.abs(impactY-keeper.y)<diveReach&&Math.random()<manualClamp(reaction+.18,.18,.92);
 const goal=onTarget&&!saved&&Math.random()<accuracy;
 keeper.targetY=manualClamp(impactY,120,380);keeper.dive=1;keeper.save=saved;
 g.shots++;g.aim={path:path.map(q=>({...q})),power};
 g.notice=goal?`⚽ GOLAÇO! Chute desenhado com ${power}% de força!`:saved?'🧤 DEFESA! O goleiro saltou para alcançar o chute!':`🥅 Chute de ${power}%: ${onTarget?'não entrou!':'para fora!'}`;
 g.animation={kind:'shot',elapsed:0,duration:manualClamp(length/540,.4,1.5),from:{...p},to:{...path[path.length-1]},path,finish:()=>{keeper.dive=0;manualFinishAttack(true,goal)}};
}
function manualFinishAttack(ours,goal){const g=manualGame,m=liveMatch;if(!g||!m)return;if(goal){if(ours)m.own++;else m.away++}g.phase='resolution';g.phaseClock=0;g.drag=null;}
function manualStop(){cancelAnimationFrame(manualFrame);manualFrame=0;manualGame=null;manualLast=0;}
function manualTick(ts){
 const g=manualGame,m=liveMatch,c=document.getElementById('manualPitch');if(!g||!m||!c)return;
 const dt=Math.min(.08,(ts-(manualLast||ts))/1000);manualLast=ts;
 if(!m.paused){
  // O relógio de 90 segundos para apenas durante as decisões de ataque e defesa.
  if(g.phase==='between'||g.phase==='resolution'){g.clock+=dt;g.phaseClock+=dt;}g.stealFlash=Math.max(0,(g.stealFlash||0)-dt);
  if(g.animation){const a=g.animation;a.elapsed+=dt;const t=manualClamp(a.elapsed/a.duration,0,1);g.ball=a.kind==='shot'&&a.path?manualShotPosition(a.path,t):{x:a.from.x+(a.to.x-a.from.x)*t,y:a.from.y+(a.to.y-a.from.y)*t};if(a.kind==='run'||a.kind==='tackle'){const p=g.players[a.index];p.x=g.ball.x;p.y=g.ball.y;}if(a.kind==='run'&&a.marker!==undefined){const f=g.foes[a.marker],dx=g.ball.x-f.x,dy=g.ball.y-f.y,d=Math.hypot(dx,dy)||1;f.x+=dx/d*dt*95;f.y+=dy/d*dt*95;}if(a.kind==='shot'&&g.keeper){g.keeper.dive=t;g.keeper.y=250+(g.keeper.targetY-250)*Math.sin(t*Math.PI*.65);}if(t>=1){g.animation=null;a.finish();}}
  m.minute=Math.min(90,Math.floor(g.clock));
  if(g.phase==='between'&&g.phaseClock>=manualClamp(4.2-g.turns*.08,2.4,4.2))manualSetupAttack(Math.random()<g.attackShare);
  if(g.phase==='resolution'&&g.phaseClock>=2.0){g.phase='between';g.phaseClock=0;g.aim=null;g.notice='⚽ Bola rolando no meio-campo. Próxima oportunidade em breve.'}
  if(g.clock>=90){manualStop();m.minute=90;finishLive();return}
 }
 manualDraw(c.getContext('2d'),g,m);
 const score=document.getElementById('manualScore');if(score)score.textContent=`${careerName()} ${m.own} × ${m.away} ${m.cup?m.oppName:countryLeagues[m.li].clubs[m.opp]} • ${Math.floor(g.clock)} / 90 segundos`;
 const notice=document.getElementById('manualNotice');if(notice)notice.textContent=g.notice;
 const status=document.getElementById('manualPhase');if(status)status.textContent=g.phase==='attack'?'⏸ ATAQUE — TEMPO CONGELADO':g.phase==='defense'?'⏸ DEFESA — TEMPO CONGELADO':g.phase==='resolution'?'⚽ LANCE ENCERRADO':'▶ BOLA EM JOGO';
 manualFrame=requestAnimationFrame(manualTick);
}
// Câmera atrás do ataque: o gol adversário fica na parte inferior da tela.
// A transformação inversa mantém os toques, passes, corridas e traços funcionais.
function manualProject(x,y){const depth=.66+.00052*x;return {x:400+(y-250)*depth,y:45+x*.51}}
function manualUnproject(sx,sy){const x=manualClamp((sy-45)/.51,0,800);return {x,y:manualClamp(250+(sx-400)/(.66+.00052*x),0,500)}}
function manualDraw(ctx,g,m){
 const W=800,H=500;ctx.clearRect(0,0,W,H);
 ctx.fillStyle='#799c0c';ctx.fillRect(0,0,W,H);
 // Faixas de gramado vistas da arquibancada.
 for(let i=0;i<12;i++){ctx.fillStyle=i%2?'#789b0d':'#83a711';ctx.fillRect(0,i*46,W,46)}
 const pt=(x,y)=>manualProject(x,y);
 function line(points,width=3,color='#f5f6d5'){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();points.forEach(([x,y],i)=>{const q=pt(x,y);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y)});ctx.stroke()}
 function box(x1,y1,x2,y2){line([[x1,y1],[x2,y1],[x2,y2],[x1,y2],[x1,y1]])}
 box(0,0,800,500);line([[130,0],[130,500]]);line([[630,0],[630,500]]);box(600,105,800,395);box(730,175,800,325);
 // Arco frontal da grande área, diante do gol.
 ctx.beginPath();for(let i=0;i<=48;i++){const t=Math.PI+(i/48)*Math.PI;const q=pt(600+72*Math.sin(t),250+72*Math.cos(t));i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y)}ctx.strokeStyle='#f5f6d5';ctx.lineWidth=3;ctx.stroke();
 // Gol frontal com rede em perspectiva.
 const L=pt(790,188),R=pt(790,312),BL={x:L.x+15,y:498},BR={x:R.x-15,y:498};
 ctx.fillStyle='rgba(220,237,221,.13)';ctx.beginPath();ctx.moveTo(L.x,L.y);ctx.lineTo(R.x,R.y);ctx.lineTo(BR.x,BR.y);ctx.lineTo(BL.x,BL.y);ctx.closePath();ctx.fill();
 ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.strokeRect(L.x,L.y,R.x-L.x,498-L.y);
 ctx.strokeStyle='rgba(255,255,255,.43)';ctx.lineWidth=.8;
 for(let i=1;i<17;i++){const x=L.x+(R.x-L.x)*i/17;ctx.beginPath();ctx.moveTo(x,L.y);ctx.lineTo(x,498);ctx.stroke()}
 for(let i=1;i<10;i++){const y=L.y+(498-L.y)*i/10;ctx.beginPath();ctx.moveTo(L.x,y);ctx.lineTo(R.x,y);ctx.stroke()}
 function athlete(p,shirt,num,selected=false,keeper=false){
  const q=pt(p.x,p.y),scale=.72+p.x/1000;ctx.save();ctx.translate(q.x,q.y);ctx.scale(scale,scale);
  ctx.fillStyle='rgba(15,27,10,.3)';ctx.beginPath();ctx.ellipse(10,16,13,5,0,0,7);ctx.fill();
  ctx.fillStyle='#262b39';ctx.fillRect(-8,4,6,14);ctx.fillRect(3,4,6,14);
  ctx.fillStyle=keeper?'#33b867':shirt;ctx.beginPath();ctx.ellipse(0,-3,12,12,0,0,7);ctx.fill();
  ctx.fillStyle='#f0b889';ctx.fillRect(-15,-8,5,13);ctx.fillRect(10,-8,5,13);ctx.beginPath();ctx.arc(0,-18,9,0,7);ctx.fill();
  ctx.fillStyle='#30251d';ctx.beginPath();ctx.arc(0,-22,8,Math.PI,2*Math.PI);ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 11px system-ui';ctx.textAlign='center';ctx.fillText(num,0,0);
  if(selected){ctx.strokeStyle='#f9ef54';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,13,23,9,0,0,7);ctx.stroke();ctx.fillStyle='#fff';ctx.font='bold 20px system-ui';ctx.fillText('▼',0,-40)}ctx.restore();
 }
 // Goleiro dentro da baliza, jogadores com aparência de bonecos.
 const kp=g.keeper||{x:766,y:250,dive:0};athlete({x:kp.x,y:kp.y},'#36b869',1,false,true);if(kp.dive>0){const q=pt(kp.x,kp.y);ctx.save();ctx.translate(q.x,q.y);ctx.rotate((kp.targetY>250?1:-1)*Math.min(1,kp.dive)*.65);ctx.strokeStyle='#d7ffe6';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-14,0);ctx.lineTo(14,0);ctx.stroke();ctx.restore();}
 if(['attack','defense','resolution'].includes(g.phase)){
  const all=[...g.foes.map((p,i)=>({p,shirt:'#e4483d',n:i+2,selected:false})),...g.players.map((p,i)=>({p,shirt:'#244fc4',n:i+6,selected:g.phase==='attack'&&i===g.owner}))];
  all.sort((a,b)=>a.p.x-b.p.x).forEach(o=>athlete(o.p,o.shirt,o.n,o.selected));
  const ball=g.animation?g.ball:g.phase==='attack'?g.players[g.owner]:g.ball;if(ball){const q=pt(ball.x,ball.y);ctx.fillStyle='#fff';ctx.strokeStyle='#161616';ctx.lineWidth=2;ctx.beginPath();ctx.arc(q.x+12,q.y+8,7,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#111';ctx.beginPath();ctx.arc(q.x+12,q.y+8,3,0,7);ctx.fill()}
 }else{athlete({x:300,y:210},'#244fc4',10);athlete({x:440,y:275},'#e4483d',9);const q=pt(400,250);ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(q.x,q.y,7,0,7);ctx.fill()}
 if(g.animation&&g.animation.kind==='pass'){const a=pt(g.animation.from.x,g.animation.from.y),b=pt(g.animation.to.x,g.animation.to.y);ctx.save();ctx.setLineDash([8,7]);ctx.strokeStyle='#f9f8d2';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.restore()}
 if(g.drag){const points=[...(g.drag.points||[g.drag.start]),g.drag.end];ctx.strokeStyle=g.phase==='defense'?'#ffcf4e':'#fff';ctx.lineWidth=5;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();points.forEach((q,i)=>{const z=pt(q.x,q.y);i?ctx.lineTo(z.x,z.y):ctx.moveTo(z.x,z.y)});ctx.stroke();const b=pt(g.drag.end.x,g.drag.end.y);ctx.beginPath();ctx.arc(b.x,b.y,7,0,7);ctx.fill()}
 if(g.stealFlash>0){ctx.fillStyle='rgba(255,215,40,.95)';ctx.font='bold 19px system-ui';ctx.textAlign='center';ctx.fillText('BOLA ROUBADA!',400,105)}
 if(g.aim?.path){ctx.strokeStyle='#fff';ctx.lineWidth=4;ctx.lineJoin='round';ctx.beginPath();g.aim.path.forEach((q,i)=>{const z=pt(q.x,q.y);i?ctx.lineTo(z.x,z.y):ctx.moveTo(z.x,z.y)});ctx.stroke()}
 // HUD permanece fixo, independente da câmera.
 ctx.fillStyle='rgba(17,29,29,.88)';ctx.fillRect(12,9,360,50);ctx.fillStyle='#fff';ctx.font='italic bold 23px system-ui';ctx.textAlign='left';ctx.fillText(`${careerName().slice(0,3).toUpperCase()} ${m.own} - ${m.away} ${(m.cup?m.oppName:countryLeagues[m.li].clubs[m.opp]).slice(0,3).toUpperCase()}`,24,42);
 ctx.fillStyle='rgba(17,29,29,.88)';ctx.fillRect(638,12,150,42);ctx.fillStyle='#fff';ctx.font='bold 19px system-ui';ctx.fillText(`${Math.floor(g.clock)} / 90 s`,650,40);
 if(['attack','defense'].includes(g.phase)){ctx.fillStyle='rgba(13,24,29,.83)';ctx.fillRect(220,460,360,30);ctx.fillStyle='#fff';ctx.font='bold 16px system-ui';ctx.textAlign='center';ctx.fillText(g.animation?'▶ EXECUTANDO JOGADA':'⏸ TEMPO CONGELADO',400,481)}
}
function renderManual(){return `<section class="panel manual-match"><h3>🎮 Partida 2D • Lances interativos</h3><h2 id="manualScore"></h2><strong id="manualPhase">▶ BOLA EM JOGO</strong><canvas id="manualPitch" style="width:100%;height:auto;touch-action:none;cursor:crosshair" aria-label="Campo de futebol interativo"></canvas><p id="manualNotice" class="muted"></p><p class="muted">⏱️ 90 segundos de bola rolando. Durante um ataque ou defesa o relógio congela para você decidir. A câmera frontal acompanha os lances, com passes, corridas e chutes animados. <b>Atacando:</b> toque em um companheiro para passar; toque no campo para correr; segure o mouse ou dedo sobre o jogador e desenhe o percurso da bola até o gol (comprimento = força). <b>Defendendo:</b> desenhe um traço na direção do adversário para dar carrinho. Funciona com mouse ou toque.</p><div class="row"><button class="secondary" id="pauseLive">${liveMatch.paused?'▶ Continuar':'⏸ Pausar'}</button><button class="secondary" id="manualEnd">⏭ Encerrar partida</button></div></section>`;}
function advanceLive(){
 const m=liveMatch;if(!m||m.paused)return;
 m.minute=Math.min(90,m.minute+m.speed);
 while(m.shown<m.events.length&&m.events[m.shown].minute<=m.minute){const e=m.events[m.shown++];if(e.team==='own')m.own++;if(e.team==='away')m.away++}
 if(m.minute>=90){finishLive();return}render();
}
function finishLive(){
 if(!liveMatch)return;
 if(manualGame)manualStop();
 const m=liveMatch;clearInterval(liveTimer);liveTimer=null;
 if(m.cup){
  updatePlayerHappinessAfterMatch();
  const mine=clubUid(careerLeague(),state.careerClub),[a,b]=m.pair;
  let x=a===mine?m.own:m.away,y=a===mine?m.away:m.own;
  if(x===y){if(Math.random()<.5)x++;else y++;}
  liveMatch=null;cupLiveOverride={a,b,x,y};
  try{m.simulate()}finally{cupLiveOverride=null}
  state.page='home';save();render();alertMsg('🏁 Fim de jogo da copa: '+m.own+' × '+m.away+(m.own===m.away?' • Desempate realizado':'') );return;
 }
 // O resultado da narração é o mesmo que entra na tabela; não é sorteado novamente.
 updatePlayerHappinessAfterMatch();
 state.liveResult={li:m.li,round:m.round,own:m.own,away:m.away};
 liveMatch=null;playCareer();state.liveResult=null;state.page='home';save();render();alertMsg('🏁 Fim de jogo! Resultado: '+m.own+' × '+m.away);
}
function chooseMatchMode(mode){
 if(!liveMatch||!liveMatch.awaitingMode)return;
 liveMatch.awaitingMode=false;
 if(mode==='2d'){manualStart();return;}
 if(mode==='simulation'){state.page='live';render();liveTimer=setInterval(advanceLive,600);return;}
 liveMatch.awaitingMode=true;
}
function renderMatchModeChoice(){
 const m=liveMatch;
 const opponent=m.cup?m.oppName:countryLeagues[m.li].clubs[m.opp];
 return `<section class="panel match-mode-panel"><span class="eyebrow">⚽ DIA DE JOGO</span><h2>Escolha como jogar</h2><p class="muted">${careerName()} × ${opponent} ${m.cup?'• '+m.cupName:'• '+countryLeagues[careerLeague()].name}</p><div class="match-mode-options"><button id="chooseSimulation" class="match-mode-card"><span class="match-mode-icon">📻</span><strong>Simulação</strong><small>Assista ao placar, narração e lances. Você pode acelerar ou pular até o fim.</small><span class="match-mode-action">▶ Simular partida</span></button><button id="choose2D" class="match-mode-card"><span class="match-mode-icon">🎮</span><strong>Partida 2D</strong><small>Decida cada ataque e defesa: passe por toque, corrida por destino, chute e carrinho por traço. O relógio congela nos lances.</small><span class="match-mode-action">⚽ Jogar em 2D</span></button></div><p class="muted">A partida só começa depois que você escolher. O resultado conta normalmente na competição.</p></section>`;
}
function renderLive(){if(liveMatch?.awaitingMode)return renderMatchModeChoice();if(liveMatch?.manual)return renderManual();if(!liveMatch)return `<section class="panel"><h3>Partida encerrada</h3><button class="primary" id="backhome">Voltar</button></section>`;const m=liveMatch;return `<section class="panel live-panel"><h3>🔴 ${m.cup?(m.cupName+" • "):""}PARTIDA AO VIVO • ${m.minute}' / 90'</h3><div class="live-score"><div>${careerName()}</div><strong>${m.own} × ${m.away}</strong><div>${m.cup?m.oppName:countryLeagues[m.li].clubs[m.opp]}</div></div><div class="live-progress"><span style="width:${m.minute/90*100}%"></span></div><div class="row" style="flex-wrap:wrap;gap:8px"><button class="primary" id="manualStart">🎮 Controlar jogadores</button><button class="secondary" id="pauseLive">${m.paused?'▶ Continuar':'⏸ Pausar'}</button><button class="secondary" id="speedLive">Velocidade: ${m.speed===3?'normal':'rápida'}</button><button class="secondary" id="finishLive">⏭ Ir ao fim</button></div><h3>📻 Narração minuto a minuto</h3>${m.events.slice(0,m.shown).reverse().map(e=>`<div class="live-event"><b>${e.minute}'</b> ${e.text}</div>`).join('')||'<p class="muted">A bola vai rolar!</p>'}<p class="muted">Simulação acelerada com gols, placar e comentários atualizados.</p></section>`}
function renderHome(){
 const own=careerTable()[state.careerClub],rank=careerRank(),pos=rank.findIndex(t=>t.id===state.careerClub)+1,opp=careerOpponent(),ended=careerSeasonEnd(),lg=countryLeagues[careerLeague()],next=lg.clubs[opp]||'A definir';
 const recent=state.results.slice(-5).reverse();
 const results=recent.length?recent.map(r=>`<div class="fm-fixture"><span>⚽ ${r.opponent}</span><strong>${r.own} - ${r.other}</strong></div>`).join(''):'<p class="muted">A temporada ainda não começou.</p>';
 const standings=rank.slice(0,10).map((t,i)=>{const st=careerTable()[t.id];return `<div class="fm-standing ${t.id===state.careerClub?'fm-mine':''}"><span>${i+1}</span><b>${lg.clubs[t.id]}</b><small>${st.pts} pts</small></div>`}).join('');
 const cards=[['📨','Mensagens','Acompanhe o desempenho e as decisões da diretoria.'],['👥','Elenco',`Gerencie os jogadores do ${careerName()}.`],['📝','Contratos','Renove os vínculos antes do vencimento.'],['🏆','Competições','Veja tabelas, resultados e mata-matas.']];
 const links=['home','squad','contracts','league'];
 return `<div class="fm-dashboard">
 <section class="fm-widget fm-inbox"><div class="fm-widget-head"><h3>📨 Central do treinador</h3><span class="fm-kicker">TEMPORADA ${state.year}</span></div><div class="fm-message-list">${cards.map((c,i)=>`<button class="fm-message" data-dash-page="${links[i]}"><span class="fm-message-icon">${c[0]}</span><span><strong>${c[1]}</strong><small>${c[2]}</small></span><span class="fm-arrow">›</span></button>`).join('')}</div><div class="fm-inbox-footer">● Salvo automaticamente • ${careerName()}</div></section>
 <section class="fm-widget fm-news"><div class="fm-widget-head"><h3>📰 Destaques do clube</h3><span class="fm-kicker">VISÃO GERAL</span></div><div class="fm-feature"><span class="fm-feature-label">${ended?'TEMPORADA ENCERRADA':'PRÓXIMA PARTIDA'}</span><h2>${ended?'Fim de temporada':careerName()+' × '+next}</h2><p>${lg.flag} ${lg.name} • ${ended?'Confira os resultados':'Rodada '+(careerRound()+1)+' de '+careerSchedule().length}</p><button class="primary" id="play">${ended?(cupsFinished()?'AVANÇAR TEMPORADA →':'🏆 CONCLUIR COMPETIÇÕES'):'▶ JOGAR AO VIVO'}</button></div><div class="fm-mini-metrics"><div><span>POSIÇÃO</span><strong>${pos}º</strong></div><div><span>PONTOS</span><strong>${own.pts}</strong></div><div><span>VITÓRIAS</span><strong>${own.w}</strong></div></div></section>
 <section class="fm-widget fm-schedule"><div class="fm-widget-head"><h3>📅 Próximos jogos</h3></div><div class="fm-next-opponent"><span>${lg.flag}</span><div><small>${lg.name}</small><strong>${ended?'Temporada encerrada':careerName()+' × '+next}</strong><small>${ended?'Aguardando nova temporada':'Rodada '+(careerRound()+1)}</small></div></div><div class="fm-widget-head"><h3>Últimos resultados</h3></div>${results}</section>
 <section class="fm-widget fm-calendar"><div class="fm-widget-head"><h3>🗓️ Calendário da temporada</h3><button class="fm-text-button" data-dash-page="history">Histórico ›</button></div><div class="fm-calendar-grid">${Array.from({length:14},(_,i)=>`<div class="fm-day ${i===0?'fm-today':''}"><small>${i+1}</small><span>${i===0?'⚽':i%4===0?'📋':i%5===0?'🏆':'·'}</span></div>`).join('')}</div><p class="muted fm-calendar-note">Agenda ilustrativa • A rodada oficial aparece em Próximos jogos.</p><div class="fm-quick-actions"><button data-dash-page="tactics">📋 Escalação</button><button data-dash-page="market">⇄ Mercado</button><button data-dash-page="trophies">🏆 Troféus</button></div></section>
 <section class="fm-widget fm-table"><div class="fm-widget-head"><h3>📊 Classificação</h3><button class="fm-text-button" data-dash-page="league">Tabela completa ›</button></div><div class="fm-standings">${standings}</div></section>
 </div>${satisfactionWidget()}`;
}
function renderSquad(){return `<section class="panel"><h3>Elenco de ${careerName()} (${careerRoster().length} jogadores)</h3><p class="notice">Elencos de demonstração: alguns nomes não estão verificados para novembro de 2026. As vagas “Atleta a confirmar” são provisórias.</p><div class="tablewrap"><table><thead><tr><th>JOGADOR</th><th>POSIÇÃO</th><th>OVERALL</th><th>VALOR</th><th>SALÁRIO/MÊS</th><th>CONTRATO</th><th>FELICIDADE</th><th>AÇÃO</th></tr></thead><tbody>${careerRoster().map((p,i)=>`<tr><td>${p.name}</td><td>${p.pos}</td><td class="rating">${p.ovr}</td><td title="${marketValueInfo(p)}">${fmt(p.value)}${Number.isFinite(p.transfermarktEUR)?' ✓':' *'}</td><td>${fmt(playerSalary(p))}</td><td>${p.contractUntil}</td><td>${happinessBar(p)}</td><td><button class="secondary" data-sell="${i}" ${careerRoster().length<=11?'disabled':''}>Vender</button></td></tr>`).join('')}</tbody></table></div></section>`}
function renderMarket(){let available=[];allTransferClubs().forEach(t=>{if(t.li!==careerLeague()||t.ci!==state.careerClub)t.roster.forEach((p,i)=>{if(!p.placeholder)available.push({...t,p,i})})});available.sort((a,b)=>b.p.ovr-a.p.ovr);const listed=careerRoster().map((p,i)=>({p,i})).filter(({p})=>happinessOf(p)>=25&&happinessOf(p)<=49);return renderClubOffers()+`<section class="panel"><h3>📋 Lista de transferências por insatisfação</h3><p class="muted">Jogadores entre 25% e 49% de felicidade são colocados automaticamente à venda. Com 24% ou menos, deixam o clube e ficam disponíveis nos passes livres.</p>${listed.length?listed.map(({p,i})=>`<div class="marketrow"><div><b>${p.name}</b><small>${p.pos} • GER ${p.ovr} • Felicidade ${happinessOf(p)}%</small></div><span class="price">${fmt(p.value)}</span><button class="secondary" data-sell="${i}">Vender</button></div>`).join(''):'<p class="muted">Nenhum jogador insatisfeito listado.</p>'}</section><section class="panel"><h3>🌍 Mercado internacional</h3><p class="muted">* Preço estimado pelo POIFOOTB. ✓ Valor de referência do Transfermarkt, com preço de negociação 3× maior, convertido para R$ à taxa fixa ilustrativa de R$ 6/€. Os dados importados pelo usuário não são verificados automaticamente; valores pré-carregados são uma amostra de consultas de 2026.</p><p class="muted">Saldo: ${fmt(state.budget)} • Jogadores das 15 ligas. Clubes e vínculos são ilustrativos, não cadastros oficiais atualizados.</p><input id="filter" placeholder="Buscar jogador, clube ou país" aria-label="Buscar jogador, clube ou país" style="width:100%;margin:12px 0;padding:12px;border-radius:8px;border:1px solid #425844;background:#101a13;color:white"><details class="panel" style="margin:12px 0"><summary>📥 Importar valores do Transfermarkt (JSON)</summary><p class="muted">Insira dados conferidos manualmente: nome, clube e liga precisam coincidir com o cadastro. valorEUR é o valor total em euros, e data é a data da consulta.</p><textarea id="tm-import" rows="5" style="width:100%;background:#101a13;color:white;border:1px solid #425844;border-radius:8px;padding:10px" placeholder='[{"jogador":"Pedro","clube":"Flamengo","liga":"Brasil","valorEUR":10000000,"data":"2026-11-06"}]'></textarea><button class="secondary" id="tm-import-button">Importar valores</button><p id="tm-import-status" class="muted"></p></details><div id="marketlist">${available.map(({p,li,ci,name,i})=>`<div class="marketrow" data-search="${(p.name+' '+name+' '+countryLeagues[li].name).toLowerCase()}"><div><b>${p.name}</b><small>${countryLeagues[li].flag} ${name} • ${p.pos} • GER ${p.ovr}</small></div><span class="price" title="${marketValueInfo(p)}">${fmt(p.value)}${Number.isFinite(p.transfermarktEUR)?' ✓':' *'}</span><button class="secondary" data-buy="${li}:${ci}:${i}" ${state.budget<p.value?'disabled':''}>Contratar</button></div>`).join('')}</div></section>`}
function qualificationZone(li,position,total){
 if(li===0||li===15||li===16||li===17){
  if(li!==0&&position<=4)return ['Acesso','zone-promote'];
  if(li===0&&position<=4)return ['Libertadores','zone-champions'];
  if(li===0&&position<=6)return ['Pré-Libertadores','zone-europe'];
  if(li===0&&position<=12)return ['Sul-Americana','zone-continental'];
  if(li!==17&&position>total-4)return ['Rebaixamento','zone-relegate'];
  return ['Permanência',''];
 }
 if(li>=10&&li<=14){if(position<=4)return ['Champions League','zone-champions'];if(position<=6)return ['Competição continental','zone-continental'];if(position>total-3)return ['Rebaixamento*','zone-relegate'];return ['Permanência','']}
 if(position<=Math.min(4,Math.ceil(total*.3)))return ['Libertadores','zone-champions'];
 if(position<=Math.min(7,Math.ceil(total*.6)))return ['Sul-Americana','zone-continental'];
 if(position>total-2)return ['Zona inferior','zone-relegate'];return ['Permanência',''];
}
function renderLeague(){return `<section class="panel"><h3>${countryLeagues[careerLeague()].flag} ${countryLeagues[careerLeague()].name} ${state.year}</h3><p class="muted">Formato simplificado de turno único. As zonas indicam vagas e risco; acesso e rebaixamento são processados entre as Séries A, B, C e D ao fim da temporada.</p><div class="tablewrap"><table><thead><tr><th>#</th><th>CLUBE</th><th>PTS</th><th>J</th><th>V</th><th>E</th><th>D</th><th>SG</th><th>ZONA</th></tr></thead><tbody>${careerRank().map((t,i)=>`<tr class="${t.id===state.careerClub?'mine':''} ${qualificationZone(careerLeague(),i+1,careerRank().length)[1]}"><td>${i+1}</td><td>${countryLeagues[careerLeague()].clubs[t.id]}</td><td><b>${t.pts}</b></td><td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf-t.ga}</td><td><small>${qualificationZone(careerLeague(),i+1,careerRank().length)[0]}</small></td></tr>`).join('')}</tbody></table></div></section>`}
// Sala de troféus: conquistas persistentes por clube, inclusive após mudança de treinador.
function trophyCabinetInit(){if(!state.trophyCabinet||typeof state.trophyCabinet!=='object')state.trophyCabinet={};}
function awardTrophy(uid,competition,year,kind='club'){
 if(uid===null||uid===undefined)return;
 trophyCabinetInit();const key=kind==='nation'?'nation:'+uid:'club:'+uid;
 const records=state.trophyCabinet[key]||(state.trophyCabinet[key]=[]);
 if(records.some(t=>t.year===year&&t.competition===competition))return;
 const manager=kind==='club'&&uid===clubUid(careerLeague(),state.careerClub)?(multiplayer?.players[multiplayer.active]?.name||'Seu treinador'):null;
 records.push({competition,year,manager});
}
function captureCurrentTrophies(){
 trophyCabinetInit();
 if(state.continental?.champion!=null)awardTrophy(state.continental.champion,'Copa Libertadores',state.continental.year);
 if(state.sudamericana?.champion!=null)awardTrophy(state.sudamericana.champion,'Copa Sul-Americana',state.sudamericana.year);
 if(state.champions?.champion!=null)awardTrophy(state.champions.champion,'Champions League',state.champions.year);
 for(let li=0;li<(state.nationalCups||[]).length;li++){const c=state.nationalCups[li];if(c?.champion!=null)awardTrophy(c.champion,'Copa Nacional — '+countryLeagues[li].name,c.year);}
 if(state.worldCup?.champion!=null)awardTrophy(state.worldCup.champion,'Super Mundial de Clubes',state.worldCup.year);
 if(state.nationalWorldCup?.champion!=null)awardTrophy(state.nationalWorldCup.champion,'Copa do Mundo de Seleções',state.nationalWorldCup.year,'nation');
}
function captureLeagueTrophies(){
 for(let li=0;li<countryLeagues.length;li++){
  const rounds=li===0?state.round:state.countryRounds?.[li]||0;
  if(rounds<circleSchedule(countryLeagues[li].clubs.length).length)continue;
  const ranked=li===0?tableSorted():leagueRank(state.countryTables[li]);
  if(ranked.length)awardTrophy(clubUid(li,ranked[0].id),'Campeonato — '+countryLeagues[li].name,state.year);
 }
}
function renderTrophyRoom(){
 captureCurrentTrophies();
 const li=careerLeague(),uid=clubUid(li,state.careerClub),selected=state.trophyRoomFilter||'club',clubRecords=state.trophyCabinet['club:'+uid]||[];
 const records=selected==='manager'?Object.values(state.trophyCabinet).flat().filter(t=>t.manager&&(t.manager===(multiplayer?.players[multiplayer.active]?.name||'Seu treinador'))):clubRecords;
 const ordered=[...records].sort((a,b)=>b.year-a.year||a.competition.localeCompare(b.competition));
 const counts={};for(const t of ordered)counts[t.competition]=(counts[t.competition]||0)+1;
 return `<section class="hero"><div><span class="eyebrow">GALERIA DE CONQUISTAS</span><h2>🏆 Sala de Troféus</h2><p>${careerName()} • Temporada ${state.year}</p></div><div class="ball">🏆</div></section>
 <section class="panel"><div class="row"><b>Conquistas registradas</b><strong>${ordered.length} 🏆</strong></div><div class="leaguechips"><button class="chip ${selected==='club'?'selected':''}" data-trophy-filter="club">🏟️ Clube atual</button><button class="chip ${selected==='manager'?'selected':''}" data-trophy-filter="manager">🧑‍💼 Meu treinador</button></div><p class="muted">Os títulos são registrados a partir desta atualização, quando uma competição termina. Títulos de temporadas anteriores não podem ser reconstruídos automaticamente. As competições são simulações do POIFOOTB.</p></section>
 ${ordered.length?`<section class="trophy-grid">${Object.entries(counts).map(([name,count])=>`<div class="trophy-card"><div class="trophy-icon">${name.includes('Mundo')?'🌍':name.includes('Champions')?'⭐':name.includes('Campeonato')?'🥇':'🏆'}</div><h3>${name}</h3><div class="trophy-count">${count} ${count===1?'título':'títulos'}</div><small>${ordered.filter(t=>t.competition===name).map(t=>t.year).join(' • ')}</small></div>`).join('')}</section><section class="panel"><h3>📜 Histórico de títulos</h3>${ordered.map(t=>`<div class="row"><span>🏆 ${t.competition}${t.manager?' <small>• '+t.manager+'</small>':''}</span><b>${t.year}</b></div>`).join('')}</section>`:`<section class="panel"><h3>🏆 Sua galeria está esperando!</h3><p class="muted">Conquiste campeonatos, copas nacionais ou torneios internacionais para encher esta sala de troféus.</p></section>`}`;
}

function renderHistory(){return `<section class="panel"><h3>Histórico do treinador</h3>${state.history.length?state.history.map(h=>`<div class="row"><b>Temporada ${h.year} • ${h.club||"Brasil"}</b><span>${h.position}º lugar • ${h.points} pontos</span></div>`).join(''):'<p class="muted">Termine a primeira temporada para registrar sua trajetória.</p>'}</section>`}


// Champions League fictícia: 20 clubes das cinco ligas europeias em mata-mata.
function initChampions(){
 const participants=[10,11,12,13,14].flatMap(li=>cupEntrants(li).slice(0,4));
 state.champions=makeKnockout(participants,'UEFA Champions League (simulação)',state.year);
}
function renderChampions(){
 const cup=state.champions;
 return `<section class="hero"><div><span class="eyebrow">FUTEBOL EUROPEU</span><h2>⭐ Champions League ${state.year}</h2><p>Competição obrigatória para treinadores europeus. Simulação simplificada com 20 clubes de Inglaterra, Espanha, Itália, Alemanha e França.</p></div><div class="ball">⭐</div></section>${cupCard(cup,'simchampions')}${statsWidget('champions')}<p class="muted">Os participantes e o formato não representam a UEFA Champions League oficial. Times sul-americanos não precisam simular esta competição para avançar.</p>`;
}

// Copas nacionais e Mundial de Clubes: formatos próprios simplificados, sem calendário oficial.
function makeKnockout(ids, label, year){return {year,label,round:0,remaining:[...ids],bracketEntrants:[...ids],results:[],champion:null};}
function cupEntrants(li){const count=countryLeagues[li].clubs.length;const ids=Array.from({length:count},(_,i)=>clubUid(li,i));return ids.sort((a,b)=>getPower(b)-getPower(a)).slice(0,8);}
function initExtraCups(){
 if(!state.nationalCups||state.nationalCups.length!==countryLeagues.length||state.nationalCups.some(c=>c.year!==state.year))state.nationalCups=countryLeagues.map((l,li)=>makeKnockout(cupEntrants(li),'Copa Nacional - '+l.name,state.year));
 if(!state.worldCup||state.worldCup.year!==state.year){
  if((state.year-2029)%4===0){
   // Super Mundial misto: 12 sul-americanos e 20 europeus; vagas ilustrativas.
   const entrants=[];for(let li=0;li<10;li++)for(const uid of cupEntrants(li).slice(0,li<2?2:1))entrants.push(uid);for(let li=10;li<=14;li++)for(const uid of cupEntrants(li).slice(0,4))entrants.push(uid);
   state.worldCup=makeKnockout(entrants.slice(0,32),'Super Mundial (simulação)',state.year);
  }else state.worldCup={year:state.year,notScheduled:true,champion:null};
 }
}
function simulateKnockout(cup){
 if(!cup||cup.notScheduled||cup.champion!==null)return;
 if(!cup.bracketEntrants)cup.bracketEntrants=(cup.results.length?cup.results.filter(r=>r.stage===cup.results[0].stage).flatMap(r=>[r.a,r.b]):[...cup.remaining]);
 const winners=[];const stage={32:'16 avos',16:'Oitavas',8:'Quartas',4:'Semifinal',2:'Final'}[cup.remaining.length]||'Mata-mata';
 for(let i=0;i<cup.remaining.length;i+=2){const a=cup.remaining[i],b=cup.remaining[i+1];if(b===undefined){winners.push(a);continue}
 let [x,y]=cupPairScores(a,b);if(x===y){if(Math.random()<.5)x++;else y++}
 cup.results.push({stage,a,b,x,y});recordGoals(cup.label.startsWith('Super')?'world':cup.label.startsWith('UEFA Champions')?'champions':'cup-'+Math.floor(a/1000),a,b,x,y);winners.push(x>y?a:b);
 }
 cup.remaining=winners;cup.round++;if(winners.length===1){cup.champion=winners[0];if(winners[0]===clubUid(careerLeague(),state.careerClub))state.budget+=cup.label.startsWith('Super')?65:12;}
 save();render();alertMsg(cup.champion!==null?'🏆 Campeão: '+getClubByUid(cup.champion).name:'Etapa '+stage+' concluída!');
}
function extraCupsFinished(){const copaDoPais=state.nationalCups?.[careerLeague()];return !!copaDoPais && copaDoPais.champion!==null && (!state.worldCup||state.worldCup.notScheduled||state.worldCup.champion!==null)}
// Chaves eliminatórias: preservam o caminho de cada confronto por posição na rodada.
function bracketHTML(cup, national=false, continental=false){
 if(!cup||cup.notScheduled)return '';
 const names= national ? id=>nationalTeams[id]?.flag+' '+nationalTeams[id]?.name : id=>getClubByUid(id)?.name||'A definir';
 const games=(cup.results||[]).filter(r=>continental?['Oitavas','Quartas','Semifinal','Final'].includes(r.round):national?r.stage!=='Grupos':true);
 const initial=continental?(games.filter(r=>r.round==='Oitavas').length?games.filter(r=>r.round==='Oitavas').flatMap(r=>[r.a,r.b]):cup.knockout||[]):
  national?(games.filter(r=>r.stage==='Oitavas').length?games.filter(r=>r.stage==='Oitavas').flatMap(r=>[r.a,r.b]):cup.remaining||[]):
  (cup.bracketEntrants|| (games.length?games.filter(r=>r.stage===games[0].stage).flatMap(r=>[r.a,r.b]):cup.remaining||[]));
 if(initial.length<2)return `<section class="panel"><h3>🗂️ Chave do mata-mata</h3><p class="muted">A chave aparecerá quando os classificados forem definidos.</p></section>`;
 const rounds=Math.ceil(Math.log2(initial.length));
 const stageName=n=>({32:'16 avos',16:'Oitavas',8:'Quartas',4:'Semifinal',2:'Final'}[n]||'Fase eliminatória');
 const cols=[];
 for(let r=0;r<rounds;r++){
  const count=Math.ceil(initial.length/Math.pow(2,r+1)),stage=stageName(count*2);
  const played=games.filter(g=>(g.stage||g.round)===stage);
  const matches=[];
  for(let j=0;j<count;j++){
   let a=null,b=null,score=null;
   if(r===0){a=initial[j*2];b=initial[j*2+1]}
   else{
    const prev=cols[r-1].matches;
    const left=prev[j*2],right=prev[j*2+1];
    a=left?.score?left.score.x>left.score.y?left.a:left.b:null;
    b=right?.score?right.score.x>right.score.y?right.a:right.b:null;
   }
   const result=played[j];
   if(result){a=result.a;b=result.b;score=result}
   matches.push({a,b,score});
  }
  cols.push({stage,matches});
 }
 const cell=(id,score,win)=>`<div class="bracket-team ${win?'bracket-winner':''}"><span>${id===null||id===undefined?'A definir':names(id)}</span><b>${score===null?'–':score}</b></div>`;
 return `<section class="panel"><h3>🗂️ Chave do mata-mata</h3><p class="muted">Deslize para o lado no celular para ver todas as fases. Os classificados aparecem conforme as partidas são simuladas.</p><div class="bracket-scroll"><div class="bracket-grid">${cols.map(col=>`<div class="bracket-round"><h4>${col.stage}</h4><div class="bracket-matches">${col.matches.map(m=>`<div class="bracket-match">${cell(m.a,m.score?.x??null,m.score&&m.score.x>m.score.y)}${cell(m.b,m.score?.y??null,m.score&&m.score.y>m.score.x)}</div>`).join('')}</div></div>`).join('')}${cup.champion!==null?`<div class="bracket-round bracket-champion"><h4>🏆 Campeão</h4><div class="bracket-match">${cell(cup.champion,null,true)}</div></div>`:''}</div></div></section>`;
}
function cupCard(cup,buttonId){if(cup.notScheduled)return `<section class="panel"><h3>🌍 Super Mundial</h3><p class="muted">Nesta simulação, acontece a cada quatro temporadas a partir de 2029. Próxima edição: ${state.year+(4-((state.year-2029)%4+4)%4)%4}.</p></section>`;
 return `<section class="panel"><h3>${cup.label} ${cup.year}</h3><p class="muted">${cup.champion!==null?'🏆 Campeão: '+getClubByUid(cup.champion).name:'Equipes restantes: '+cup.remaining.length+' • próxima fase eliminatória'}</p><button class="primary" id="${buttonId}" ${cup.champion!==null?'disabled':''}>▶ ${cup.champion!==null?'ENCERRADA':'SIMULAR PRÓXIMA FASE'}</button><div style="margin-top:18px">${cup.results.slice(-12).reverse().map(r=>`<div class="row"><span>${getClubByUid(r.a).name} × ${getClubByUid(r.b).name}</span><b>${r.x} - ${r.y}</b></div>`).join('')||'<p class="muted">Nenhum jogo disputado.</p>'}</div></section>${bracketHTML(cup)}`}
function renderNationalCups(){return `<section class="hero"><div><span class="eyebrow">COPAS NACIONAIS</span><h2>🏆 Copa nacional do seu país</h2><p>É obrigatório concluir apenas a copa do país do seu clube. As outras copas são opcionais.</p></div><div class="ball">🏆</div></section><div class="leaguechips">${countryLeagues.map((l,i)=>`<button class="chip ${state.cupCountry===i?'selected':''}" data-cupcountry="${i}">${l.flag} ${l.name}</button>`).join('')}</div>${cupCard(state.nationalCups[state.cupCountry||0],'simnational')}${statsWidget('cup-'+(state.cupCountry||0))}<p class="muted">Somente a copa nacional do país do seu clube é obrigatória para avançar a temporada. As copas dos demais países são opcionais. Os participantes são escolhidos por força estimada, não por sorteio oficial.</p>`}
function renderWorldCup(){return `<section class="hero"><div><span class="eyebrow">TORNEIO INTERNACIONAL</span><h2>🌍 Super Mundial de Clubes</h2><p>Edição fictícia com 32 participantes sul-americanos; mata-mata simplificado, sem clubes europeus.</p></div><div class="ball">🌍</div></section>${cupCard(state.worldCup,'simworld')}${statsWidget('world')}<p class="muted">Este Super Mundial é uma versão demonstrativa, não o Mundial de Clubes FIFA oficial. Na temporada em que ocorrer, será obrigatório concluí-lo para avançar.</p>`}


// Copa do Mundo de seleções: universo fictício de 32 equipes, independente do Mundial de Clubes.
const nationalTeams=[
['🇧🇷','Brasil','Alisson;Ederson;Marquinhos;Gabriel Magalhães;Éder Militão;Danilo;Guilherme Arana;Bruno Guimarães;Casemiro;Lucas Paquetá;Rodrygo;Vinícius Júnior;Raphinha;Neymar;Endrick;Gabriel Martinelli;João Gomes;Richarlison'],
['🇦🇷','Argentina','Emiliano Martínez;Gerónimo Rulli;Cristian Romero;Lisandro Martínez;Nicolás Otamendi;Nahuel Molina;Nicolás Tagliafico;Rodrigo De Paul;Enzo Fernández;Alexis Mac Allister;Leandro Paredes;Giovani Lo Celso;Lionel Messi;Julián Álvarez;Lautaro Martínez;Ángel Di María;Nicolás González;Thiago Almada'],
['🇫🇷','França','Mike Maignan;Brice Samba;William Saliba;Ibrahima Konaté;Dayot Upamecano;Jules Koundé;Theo Hernández;Aurélien Tchouaméni;Eduardo Camavinga;Adrien Rabiot;Warren Zaïre-Emery;Michael Olise;Ousmane Dembélé;Kylian Mbappé;Marcus Thuram;Bradley Barcola;Désiré Doué;Randal Kolo Muani'],
['🏴','Inglaterra','Jordan Pickford;Dean Henderson;John Stones;Marc Guéhi;Ezri Konsa;Trent Alexander-Arnold;Luke Shaw;Declan Rice;Jude Bellingham;Cole Palmer;Phil Foden;Bukayo Saka;Harry Kane;Anthony Gordon;Eberechi Eze;Morgan Rogers;Kobbie Mainoo;Ollie Watkins'],
['🇪🇸','Espanha','Unai Simón;David Raya;Pau Cubarsí;Robin Le Normand;Aymeric Laporte;Dani Carvajal;Marc Cucurella;Rodri;Martín Zubimendi;Pedri;Fabián Ruiz;Dani Olmo;Lamine Yamal;Nico Williams;Álvaro Morata;Ferran Torres;Mikel Oyarzabal;Fermín López'],
['🇩🇪','Alemanha','Marc-André ter Stegen;Oliver Baumann;Antonio Rüdiger;Jonathan Tah;Nico Schlotterbeck;Joshua Kimmich;David Raum;Robert Andrich;Leon Goretzka;Aleksandar Pavlović;Florian Wirtz;Jamal Musiala;Kai Havertz;Serge Gnabry;Leroy Sané;Niclas Füllkrug;Karim Adeyemi;Deniz Undav'],
['🇵🇹','Portugal','Diogo Costa;José Sá;Rúben Dias;Gonçalo Inácio;António Silva;João Cancelo;Nuno Mendes;João Palhinha;Vitinha;Bruno Fernandes;Bernardo Silva;João Neves;Rafael Leão;Pedro Neto;Cristiano Ronaldo;Gonçalo Ramos;Diogo Jota;Francisco Conceição'],
['🇮🇹','Itália','Gianluigi Donnarumma;Guglielmo Vicario;Alessandro Bastoni;Riccardo Calafiori;Federico Gatti;Giovanni Di Lorenzo;Federico Dimarco;Nicolò Barella;Sandro Tonali;Davide Frattesi;Manuel Locatelli;Lorenzo Pellegrini;Federico Chiesa;Giacomo Raspadori;Mateo Retegui;Moise Kean;Mattia Zaccagni;Andrea Cambiaso'],
['🇳🇱','Holanda','Bart Verbruggen;Mark Flekken;Virgil van Dijk;Matthijs de Ligt;Micky van de Ven;Denzel Dumfries;Nathan Aké;Frenkie de Jong;Ryan Gravenberch;Tijjani Reijnders;Xavi Simons;Teun Koopmeiners;Cody Gakpo;Memphis Depay;Donyell Malen;Jeremie Frimpong;Wout Weghorst;Brian Brobbey'],
['🇧🇪','Bélgica','Thibaut Courtois;Koen Casteels;Wout Faes;Arthur Theate;Zeno Debast;Timothy Castagne;Maxim De Cuyper;Amadou Onana;Youri Tielemans;Kevin De Bruyne;Charles De Ketelaere;Jérémy Doku;Leandro Trossard;Romelu Lukaku;Loïs Openda;Dodi Lukébakio;Johan Bakayoko;Orel Mangala'],
['🇺🇾','Uruguai','Sergio Rochet;Franco Israel;Ronald Araújo;José María Giménez;Sebastián Cáceres;Guillermo Varela;Mathías Olivera;Federico Valverde;Manuel Ugarte;Rodrigo Bentancur;Nicolás de la Cruz;Giorgian de Arrascaeta;Facundo Pellistri;Maximiliano Araújo;Darwin Núñez;Luis Suárez;Brian Rodríguez;Agustín Canobbio'],
['🇨🇴','Colômbia','Camilo Vargas;David Ospina;Davinson Sánchez;Jhon Lucumí;Yerry Mina;Daniel Muñoz;Johan Mojica;Jefferson Lerma;Richard Ríos;Kevin Castaño;Jorge Carrascal;James Rodríguez;Luis Díaz;Jhon Arias;Jhon Durán;Rafael Borré;Luis Sinisterra;Juan Fernando Quintero'],
['🇭🇷','Croácia','Dominik Livaković;Ivica Ivušić;Joško Gvardiol;Josip Šutalo;Duje Ćaleta-Car;Josip Juranović;Borna Sosa;Luka Modrić;Mateo Kovačić;Marcelo Brozović;Mario Pašalić;Lovro Majer;Ivan Perišić;Andrej Kramarić;Ante Budimir;Martin Baturina;Luka Sučić;Petar Sučić'],
['🇲🇦','Marrocos','Yassine Bounou;Munir Mohamedi;Achraf Hakimi;Noussair Mazraoui;Nayef Aguerd;Romain Saïss;Adam Masina;Sofyan Amrabat;Azzedine Ounahi;Bilal El Khannouss;Brahim Díaz;Hakim Ziyech;Abde Ezzalzouli;Youssef En-Nesyri;Ayoub El Kaabi;Amine Adli;Ismael Saibari;Eliesse Ben Seghir'],
['🇯🇵','Japão','Zion Suzuki;Daniel Schmidt;Takehiro Tomiyasu;Ko Itakura;Hiroki Ito;Yukinari Sugawara;Yuta Nakayama;Wataru Endo;Hidemasa Morita;Daichi Kamada;Takefusa Kubo;Kaoru Mitoma;Ritsu Doan;Takumi Minamino;Ayase Ueda;Daizen Maeda;Keito Nakamura;Ao Tanaka'],
['🇺🇸','Estados Unidos','Matt Turner;Ethan Horvath;Chris Richards;Tim Ream;Cameron Carter-Vickers;Antonee Robinson;Sergiño Dest;Tyler Adams;Weston McKennie;Yunus Musah;Gio Reyna;Malik Tillman;Christian Pulisic;Timothy Weah;Folarin Balogun;Ricardo Pepi;Brenden Aaronson;Haji Wright'],
['🇲🇽','México','Guillermo Ochoa;Luis Malagón;César Montes;Johan Vásquez;Israel Reyes;Jorge Sánchez;Jesús Gallardo;Edson Álvarez;Luis Chávez;Orbelín Pineda;Carlos Rodríguez;Erick Sánchez;Hirving Lozano;Santiago Giménez;Raúl Jiménez;Julián Quiñones;Alexis Vega;Roberto Alvarado'],
['🇨🇭','Suíça','Gregor Kobel;Yann Sommer;Manuel Akanji;Nico Elvedi;Ricardo Rodríguez;Silvan Widmer;Michel Aebischer;Granit Xhaka;Remo Freuler;Denis Zakaria;Fabian Rieder;Xherdan Shaqiri;Dan Ndoye;Breel Embolo;Zeki Amdouni;Noah Okafor;Ruben Vargas;Vincent Sierro'],
['🇩🇰','Dinamarca','Kasper Schmeichel;Mads Hermansen;Andreas Christensen;Joachim Andersen;Jannik Vestergaard;Rasmus Kristensen;Victor Kristiansen;Pierre-Emile Højbjerg;Christian Eriksen;Morten Hjulmand;Mikkel Damsgaard;Matt O’Riley;Andreas Skov Olsen;Rasmus Højlund;Jonas Wind;Yussuf Poulsen;Jesper Lindstrøm;Kasper Dolberg'],
['🇸🇳','Senegal','Édouard Mendy;Seny Dieng;Kalidou Koulibaly;Moussa Niakhaté;Abdou Diallo;Krépin Diatta;Ismail Jakobs;Idrissa Gueye;Pape Matar Sarr;Lamine Camara;Nampalys Mendy;Habib Diarra;Sadio Mané;Ismaïla Sarr;Nicolas Jackson;Boulaye Dia;Iliman Ndiaye;Habib Diallo'],
['🇳🇬','Nigéria','Stanley Nwabali;Maduka Okoye;William Troost-Ekong;Calvin Bassey;Semi Ajayi;Ola Aina;Zaidu Sanusi;Wilfred Ndidi;Alex Iwobi;Frank Onyeka;Raphael Onyedika;Joe Aribo;Ademola Lookman;Victor Osimhen;Victor Boniface;Samuel Chukwueze;Moses Simon;Kelechi Iheanacho'],
['🇨🇲','Camarões','André Onana;Devis Epassy;Jean-Charles Castelletto;Michael Ngadeu;Christopher Wooh;Nouhou Tolo;Olivier Mbaizo;André-Frank Zambo Anguissa;Carlos Baleba;Pierre Kunde;Olivier Ntcham;Martin Hongla;Bryan Mbeumo;Vincent Aboubakar;Eric Maxim Choupo-Moting;Karl Toko Ekambi;Christian Bassogog;Frank Magri'],
['🇨🇮','Costa do Marfim','Yahia Fofana;Badra Ali Sangaré;Evan Ndicka;Odilon Kossounou;Willy Boly;Serge Aurier;Ghislain Konan;Franck Kessié;Seko Fofana;Ibrahim Sangaré;Jean Michaël Seri;Hamed Traorè;Simon Adingra;Nicolas Pépé;Sébastien Haller;Oumar Diakité;Karim Konaté;Wilfried Zaha'],
['🇰🇷','Coreia do Sul','Jo Hyeon-woo;Kim Seung-gyu;Kim Min-jae;Kim Young-gwon;Seol Young-woo;Lee Ki-je;Hwang In-beom;Lee Jae-sung;Jung Woo-young;Hong Hyun-seok;Lee Kang-in;Son Heung-min;Hwang Hee-chan;Cho Gue-sung;Oh Hyeon-gyu;Yang Hyun-jun;Bae Jun-ho;Paik Seung-ho'],
['🇦🇺','Austrália','Mathew Ryan;Joe Gauci;Harry Souttar;Kye Rowles;Cameron Burgess;Nathaniel Atkinson;Aziz Behich;Jackson Irvine;Aiden O’Neill;Keanu Baccus;Riley McGree;Ajdin Hrustic;Martin Boyle;Craig Goodwin;Mitchell Duke;Kusini Yengi;Brandon Borrello;Nestory Irankunda'],
['🇨🇦','Canadá','Maxime Crépeau;Dayne St. Clair;Alphonso Davies;Alistair Johnston;Moïse Bombito;Derek Cornelius;Richie Laryea;Stephen Eustáquio;Ismaël Koné;Jonathan Osorio;Tajon Buchanan;Liam Millar;Jonathan David;Cyle Larin;Jacob Shaffelburg;Theo Bair;Ali Ahmed;Promise David'],
['🇪🇨','Equador','Hernán Galíndez;Moisés Ramírez;Piero Hincapié;Willian Pacho;Félix Torres;Pervis Estupiñán;Ángelo Preciado;Moisés Caicedo;Alan Franco;Carlos Gruezo;Kendry Páez;Gonzalo Plata;Jeremy Sarmiento;Enner Valencia;Kevin Rodríguez;John Yeboah;Ángel Mena;Jordy Caicedo'],
['🇵🇾','Paraguai','Roberto Fernández;Carlos Coronel;Gustavo Gómez;Omar Alderete;Fabián Balbuena;Junior Alonso;Juan Cáceres;Andrés Cubas;Mathías Villasanti;Diego Gómez;Miguel Almirón;Julio Enciso;Ramón Sosa;Antonio Sanabria;Alex Arce;Gabriel Ávalos;Matías Rojas;Damián Bobadilla'],
['🇷🇸','Sérvia','Predrag Rajković;Vanja Milinković-Savić;Nikola Milenković;Strahinja Pavlović;Miloš Veljković;Filip Kostić;Andrija Živković;Sergej Milinković-Savić;Nemanja Gudelj;Saša Lukić;Ivan Ilić;Dušan Tadić;Lazar Samardžić;Dušan Vlahović;Aleksandar Mitrović;Luka Jović;Filip Đuričić;Nemanja Radonjić'],
['🇹🇷','Turquia','Mert Günok;Uğurcan Çakır;Merih Demiral;Abdülkerim Bardakcı;Çağlar Söyüncü;Zeki Çelik;Ferdi Kadıoğlu;Hakan Çalhanoğlu;Orkun Kökçü;İsmail Yüksek;Salih Özcan;Arda Güler;Kenan Yıldız;Kerem Aktürkoğlu;Barış Alper Yılmaz;Cenk Tosun;Yunus Akgün;İrfan Can Kahveci'],
['🇵🇱','Polônia','Wojciech Szczęsny;Łukasz Skorupski;Jan Bednarek;Jakub Kiwior;Paweł Dawidowicz;Matty Cash;Nicola Zalewski;Piotr Zieliński;Jakub Moder;Sebastian Szymański;Bartosz Slisz;Przemysław Frankowski;Robert Lewandowski;Karol Świderski;Krzysztof Piątek;Adam Buksa;Kamil Grosicki;Michał Skóraś'],
['🇸🇦','Arábia Saudita','Mohammed Al-Owais;Nawaf Al-Aqidi;Ali Al-Bulaihi;Hassan Al-Tambakti;Abdulelah Al-Amri;Saud Abdulhamid;Yasser Al-Shahrani;Mohamed Kanno;Salem Al-Dawsari;Firas Al-Buraikan;Saleh Al-Shehri;Abdulrahman Ghareeb;Sultan Al-Ghannam;Nasser Al-Dawsari;Abdullah Al-Khaibari;Ayman Yahya;Musab Al-Juwayr;Abdulaziz Al-Bishi']
].map(([flag,name,names],i)=>({id:i,flag,name,players:names.split(';').map((name,j)=>({name,pos:j<2?'GOL':j<8?'DEF':j<13?'MEI':'ATA',ovr:Math.min(92,Math.max(69,77+(i<10?5:i<20?2:0)+((j*7+i)%9)-4))}))}));
function newNationalWorldCup(){const year=state.year;const teams=nationalTeams.map(t=>t.id);for(let i=teams.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[teams[i],teams[j]]=[teams[j],teams[i]]}state.nationalWorldCup={year,phase:'groups',round:0,groups:Array.from({length:8},(_,i)=>teams.slice(i*4,i*4+4)),tables:Object.fromEntries(teams.map(id=>[id,{id,p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0}])),results:[],remaining:[],champion:null};}
function ensureNationalWorldCup(){if(!state.nationalWorldCup||state.nationalWorldCup.year!==state.year)newNationalWorldCup()}
function worldNationalPower(id){return nationalTeams[id].players.reduce((s,p)=>s+p.ovr,0)/18}
function simulateNationalGame(a,b,stage){const pa=worldNationalPower(a),pb=worldNationalPower(b);let x=Math.max(0,Math.round(Math.random()*3+(pa-pb)/15)),y=Math.max(0,Math.round(Math.random()*3+(pb-pa)/15));if(stage!=='Grupos'&&x===y){if(Math.random()<.5)x++;else y++}const r={a,b,x,y,stage};state.nationalWorldCup.results.push(r);if(stage==='Grupos'){const ta=state.nationalWorldCup.tables[a],tb=state.nationalWorldCup.tables[b];ta.p++;tb.p++;ta.gf+=x;ta.ga+=y;tb.gf+=y;tb.ga+=x;if(x>y){ta.w++;ta.pts+=3;tb.l++}else if(y>x){tb.w++;tb.pts+=3;ta.l++}else{ta.d++;tb.d++;ta.pts++;tb.pts++}}return r}
function simulateNationalWorldCup(){ensureNationalWorldCup();const c=state.nationalWorldCup;if(c.champion!==null)return;if(c.phase==='groups'){const pairs=[[[0,3],[1,2]],[[0,2],[3,1]],[[0,1],[2,3]]][c.round];for(const g of c.groups)for(const [i,j] of pairs)simulateNationalGame(g[i],g[j],'Grupos');c.round++;if(c.round===3){c.remaining=[];for(const g of c.groups){const rank=[...g].sort((a,b)=>c.tables[b].pts-c.tables[a].pts||(c.tables[b].gf-c.tables[b].ga)-(c.tables[a].gf-c.tables[a].ga));c.remaining.push(rank[0],rank[1])}c.phase='knockout'}}else{const stage={16:'Oitavas',8:'Quartas',4:'Semifinal',2:'Final'}[c.remaining.length];const winners=[];for(let i=0;i<c.remaining.length;i+=2){const r=simulateNationalGame(c.remaining[i],c.remaining[i+1],stage);winners.push(r.x>r.y?r.a:r.b)}c.remaining=winners;c.round++;if(winners.length===1)c.champion=winners[0]}save();render();alertMsg(c.champion!==null?'🏆 Campeã mundial: '+nationalTeams[c.champion].name:'Etapa da Copa do Mundo concluída!')}
function renderNationalWorldCup(){ensureNationalWorldCup();const c=state.nationalWorldCup;const stage=c.champion!==null?'Campeã: '+nationalTeams[c.champion].name:c.phase==='groups'?'Grupos — rodada '+(c.round+1)+'/3':'Mata-mata — '+c.remaining.length+' seleções';return `<section class="hero"><div><span class="eyebrow">SELEÇÕES NACIONAIS</span><h2>🌎 Copa do Mundo ${c.year}</h2><p>${stage}</p><button class="primary" id="simNationalWorld" ${c.champion!==null?'disabled':''}>▶ Simular próxima etapa</button></div><div class="ball">🌍</div></section><section class="panel"><h3>32 seleções • 18 jogadores cada</h3><p class="muted">Copa do Mundo fictícia do jogo, com participantes e escalações ilustrativas. Não representa as seleções classificadas ou convocadas oficialmente para 2026. Esta competição é opcional e não bloqueia a temporada dos clubes.</p><div class="leaguechips">${nationalTeams.map(t=>`<button class="chip ${state.selectedNation===t.id?'selected':''}" data-nation="${t.id}">${t.flag} ${t.name}</button>`).join('')}</div>${(()=>{const t=nationalTeams[state.selectedNation||0];return `<h3>${t.flag} ${t.name} — elenco</h3><div class="tablewrap"><table><thead><tr><th>JOGADOR</th><th>POS.</th><th>GER</th></tr></thead><tbody>${t.players.map(p=>`<tr><td>${p.name}</td><td>${p.pos}</td><td>${p.ovr}</td></tr>`).join('')}</tbody></table></div>`})()}</section><section class="panel"><h3>Fase de grupos</h3><div class="groupgrid">${c.groups.map((g,i)=>`<div class="groupcard"><h4>Grupo ${'ABCDEFGH'[i]}</h4>${[...g].sort((a,b)=>c.tables[b].pts-c.tables[a].pts||(c.tables[b].gf-c.tables[b].ga)-(c.tables[a].gf-c.tables[a].ga)).map(id=>`<div class="groupteam"><span>${nationalTeams[id].flag} ${nationalTeams[id].name}</span><b>${c.tables[id].pts} pts</b></div>`).join('')}</div>`).join('')}</div></section><section class="panel"><h3>Últimas partidas</h3>${c.results.slice(-16).reverse().map(r=>`<div class="row"><span>${nationalTeams[r.a].flag} ${nationalTeams[r.a].name} × ${nationalTeams[r.b].flag} ${nationalTeams[r.b].name} <small>${r.stage}</small></span><b>${r.x} - ${r.y}</b></div>`).join('')||'<p class="muted">Aguardando início.</p>'}</section>${bracketHTML(c,true,false)}`}

function render(){if(bulkYearsRunning)return;document.body.classList.toggle('bg-brasileirao',state.club!==null&&((state.page==='league'&&careerLeague()===0)||(state.page==='south'&&Number(state.country)===0)));ensureContracts();if(liveMatch&&state.page!=='live')state.page='live';const club=state.club,li=careerLeague();jobInit();$('year').textContent='📅 '+dateLabel();$('cash').textContent=club===null?'':'💰 '+fmt(state.budget);$('round').textContent=club===null?'NOVA CARREIRA':'RODADA '+Math.min(careerRound()+1,careerSchedule().length)+'/'+careerSchedule().length;$('clubtitle').textContent=club===null?'Seu próximo desafio':careerName();$('shield').textContent=club===null?'PF':li===0?teams[state.careerClub][1]:careerName().slice(0,3).toUpperCase();$('clubsubtitle').textContent=countryLeagues[li].flag+' '+countryLeagues[li].name;$('heading').textContent=({home:'Visão geral',squad:'Elenco',contracts:'Contratos',academy:'Categorias de base',market:'Mercado internacional',league:'Campeonato',history:'Histórico',calendar:'Calendário',seasonreports:'Retrospectiva Mundial',trophies:'Sala de Troféus',finances:'Finanças',tactics:'Escalação',live:'Partida ao vivo',south:'Ligas Sul-Americanas',clubroster:'Elenco do clube',libertadores:'Libertadores',sudamericana:'Sul-Americana',national:'Copas Nacionais',world:'Super Mundial',nationalworld:'Copa do Mundo',champions:'Champions League',statistics:'Artilharia e Assistências',jobs:'Empregos e demissões'})[state.page];document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===state.page));if(club===null){$('heading').textContent='Escolha seu clube';const sel=Number(state.selectCountry||0);$('app').innerHTML=`<div class="panel"><h3>🌎 Comece sua carreira no mundo</h3><p class="muted">Escolha clubes das ligas disponíveis, incluindo as Séries A, B, C e D. Os elencos são uma base ilustrativa e incluem vagas a confirmar.</p><div class="leaguechips">${countryLeagues.map((l,i)=>`<button class="chip ${sel===i?'selected':''}" data-selectcountry="${i}">${l.flag} ${l.name}</button>`).join('')}</div><div class="choice">${countryLeagues[sel].clubs.map((name,i)=>`<button class="teamchoice" data-club="${i}"><span class="mini">${countryLeagues[sel].flag}</span>${name}</button>`).join('')}</div></div>`;document.querySelectorAll('[data-selectcountry]').forEach(b=>b.onclick=()=>{state.selectCountry=+b.dataset.selectcountry;state.noDismissalDraft=!!document.getElementById('noDismissalStart')?.checked;state.archiveWorldHistoryDraft=!!document.getElementById('archiveWorldHistoryStart')?.checked;render()});$('app').insertAdjacentHTML('afterbegin',`<section class="panel" style="margin-bottom:18px"><h3>⚙️ Configurações da nova carreira</h3><label style="display:flex;align-items:center;gap:12px;cursor:pointer;font-weight:700"><input type="checkbox" id="noDismissalStart" ${state.noDismissalDraft?'checked':''} style="width:22px;height:22px;accent-color:#56c891"> Impedir que eu seja demitido</label><p class="muted">Se ativado, você permanece no comando do clube mesmo com resultados ruins ou baixa confiança. Esta escolha fica salva na carreira.</p><label style="display:flex;align-items:center;gap:12px;cursor:pointer;font-weight:700;margin-top:16px"><input type="checkbox" id="archiveWorldHistoryStart" ${state.archiveWorldHistoryDraft!==false?'checked':''} style="width:22px;height:22px;accent-color:#56c891"> 📜 Guardar retrospectiva mundial de todas as temporadas simuladas</label><p class="muted">Ativado: cada temporada, inclusive as simuladas com um botão, entra na Retrospectiva Mundial com campeões, vices e artilheiros disponíveis. Desativado: não cria novos relatórios mundiais e economiza espaço no navegador. Escolha antes de começar a carreira.</p></section>`);document.querySelectorAll('[data-club]').forEach(b=>b.onclick=()=>chooseClub(+b.dataset.club,sel));$('app').insertAdjacentHTML('afterbegin',multiplayerBar());bindMultiplayer();return}const pages={home:renderHome,calendar:renderCalendarPage,tactics:renderTactics,live:renderLive,squad:renderSquad,contracts:renderContracts,academy:renderAcademy,market:renderMarket,league:renderLeague,history:renderHistory,seasonreports:renderSeasonReports,trophies:renderTrophyRoom,finances:renderFinances,south:renderSouth,clubroster:renderClubRoster,libertadores:renderLibertadores,sudamericana:renderSudamericana,national:renderNationalCups,world:renderWorldCup,nationalworld:renderNationalWorldCup,champions:renderChampions,statistics:renderStatistics,jobs:renderJobs};$('app').innerHTML=multiplayerBar()+(state.page==='home'?calendarWidget():'')+pages[state.page]();bindMultiplayer();document.querySelectorAll('[data-dash-page]').forEach(b=>b.onclick=()=>{state.page=b.dataset.dashPage;save();render()});if($('advanceCalendarDay'))$('advanceCalendarDay').onclick=advanceDay;if($('calendarOneDay'))$('calendarOneDay').onclick=advanceDay;if($('calendarFastForward'))$('calendarFastForward').onclick=()=>{const v=$('calendarTarget').value;if(!v)return;const [y,m,d]=v.split('-').map(Number);simulateCalendarAcrossSeasons(v)};if($('calendarAutoSkip'))$('calendarAutoSkip').onclick=()=>calendarAutoSimulate($('calendarTarget').value);if($('calendarYearsButton'))$('calendarYearsButton').onclick=simulateWholeYears;document.querySelectorAll('[data-calendar-skip]').forEach(b=>b.onclick=()=>calendarSkipSelected(b.dataset.calendarSkip));if($('calendarNextMatch'))$('calendarNextMatch').onclick=()=>{const n=calendarFixtures()[0];if(n)simulateCalendarTo(Math.max(state.dayOfYear+1,n.day));else alertMsg('Não há jogos pendentes.');};document.querySelectorAll('[data-calendar-page]').forEach(b=>b.onclick=()=>{state.page=b.dataset.calendarPage;save();render()});document.querySelectorAll('[data-promote]').forEach(b=>b.onclick=()=>promoteYouth(Number(b.dataset.promote)));if($('refreshJobs'))$('refreshJobs').onclick=()=>{jobOffers(true);save();render()};document.querySelectorAll('[data-acceptjob]').forEach(b=>b.onclick=()=>{const [li,ci]=b.dataset.acceptjob.split(':').map(Number);acceptJob(li,ci)});if(state.page==='league')$('app').innerHTML+=statsWidget('league-'+careerLeague());if(state.page==='south')$('app').innerHTML+=statsWidget('league-'+state.country);if(state.page==='libertadores')$('app').innerHTML+=statsWidget('libertadores');if(state.page==='sudamericana')$('app').innerHTML+=statsWidget('sudamericana');if($('worldRankingFilter'))$('worldRankingFilter').onchange=e=>{state.worldRankingFilter=e.target.value;save();render()};document.querySelectorAll('[data-report-year]').forEach(b=>b.onclick=()=>{state.reportYear=Number(b.dataset.reportYear);save();render()});document.querySelectorAll('[data-trophy-filter]').forEach(b=>b.onclick=()=>{state.trophyRoomFilter=b.dataset.trophyFilter;save();render()});if($('statsSelect'))$('statsSelect').onchange=e=>{state.statsComp=e.target.value;save();render()};document.querySelectorAll('[data-cupcountry]').forEach(b=>b.onclick=()=>{state.cupCountry=+b.dataset.cupcountry;save();render()});if($('simnational'))$('simnational').onclick=()=>startCupStage(state.nationalCups[state.cupCountry||0],()=>simulateKnockout(state.nationalCups[state.cupCountry||0]));if($('simNationalWorld'))$('simNationalWorld').onclick=simulateNationalWorldCup;document.querySelectorAll('[data-nation]').forEach(b=>b.onclick=()=>{state.selectedNation=+b.dataset.nation;save();render()});if($('simworld'))$('simworld').onclick=()=>startCupStage(state.worldCup,()=>simulateKnockout(state.worldCup));if($('simchampions'))$('simchampions').onclick=()=>startCupStage(state.champions,()=>simulateKnockout(state.champions));const sudBtn=$('simsud');if(sudBtn)sudBtn.onclick=()=>startCupStage(state.sudamericana,simulateSudamericana);const playBtn=$('play');if(playBtn)playBtn.onclick=careerSeasonEnd()?nextCareerSeason:liveStart;if($('formation'))$('formation').onchange=e=>{state.lineup.formation=e.target.value;state.lineup.players=[];save();render()};if($('autoLineup'))$('autoLineup').onclick=()=>{state.lineup.players=[];setupLineup();save();render()};if($('chooseSimulation'))$('chooseSimulation').onclick=()=>chooseMatchMode('simulation');if($('choose2D'))$('choose2D').onclick=()=>chooseMatchMode('2d');if($('manualStart'))$('manualStart').onclick=manualStart;if(state.page==='live'&&liveMatch?.manual)manualMount();if($('pauseLive'))$('pauseLive').onclick=()=>{liveMatch.paused=!liveMatch.paused;render()};if($('speedLive'))$('speedLive').onclick=()=>{liveMatch.speed=liveMatch.speed===3?9:3;render()};if($('finishLive'))$('finishLive').onclick=()=>{liveMatch.paused=false;liveMatch.minute=90;while(liveMatch.shown<liveMatch.events.length){const e=liveMatch.events[liveMatch.shown++];if(e.team==='own')liveMatch.own++;if(e.team==='away')liveMatch.away++}finishLive()};document.querySelectorAll('[data-lineup-slot]').forEach(b=>b.onchange=e=>{const lineup=setupLineup(),slot=Number(b.dataset.lineupSlot),id=Number(e.target.value);if(lineup.players.some((p,i)=>i!==slot&&p===id)){alertMsg('Este jogador já está escalado em outra posição.');render();return}lineup.players[slot]=id;save();render()});if($('backhome'))$('backhome').onclick=()=>{state.page='home';save();render()};document.querySelectorAll('[data-offer-accept]').forEach(b=>b.onclick=()=>resolveClubOffer(Number(b.dataset.offerAccept),true));document.querySelectorAll('[data-offer-reject]').forEach(b=>b.onclick=()=>resolveClubOffer(Number(b.dataset.offerReject),false));document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>{let [li,ci,i]=b.dataset.buy.split(':').map(Number);transferInternational(li,ci,i)});document.querySelectorAll('[data-renew]').forEach(b=>b.onclick=()=>{const i=+b.dataset.renew;renewContract(i,+document.getElementById('contract-years-'+i).value)});document.querySelectorAll('[data-sign-free]').forEach(b=>b.onclick=()=>signFreeAgent(+b.dataset.signFree));document.querySelectorAll('[data-sell]').forEach(b=>b.onclick=()=>sellInternational(+b.dataset.sell));document.querySelectorAll('[data-country]').forEach(b=>b.onclick=()=>{state.country=+b.dataset.country;save();render()});document.querySelectorAll('[data-viewclub]').forEach(b=>b.onclick=()=>{state.viewClub=b.dataset.viewclub;state.page='clubroster';save();render()});if($('backclubs'))$('backclubs').onclick=()=>{state.page='south';save();render()};if($('simcountry'))$('simcountry').onclick=()=>{if(state.country===careerLeague()){alertMsg('Sua liga avança pela Central do Treinador.');return}simulateForeignRound(state.country);save();render()};if($('simlib'))$('simlib').onclick=()=>startCupStage(state.continental,simulateLibertadores);if($('tm-import-button'))$('tm-import-button').onclick=importMarketValues;if($('filter'))$('filter').oninput=e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('[data-search]').forEach(el=>el.style.display=el.dataset.search.includes(q)?'':'none')}}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{state.page=b.dataset.page;closeMobileMenu();save();render()});$('reset').onclick=()=>{if(multiplayer){alertMsg('No multiplayer sincronizado, use Nova sala para recomeçar.');return}if(confirm('Apagar esta carreira e começar outra?')){state=makeState();ensureExpansion();newLibertadores();newSudamericana();initExtraCups();save();render()}};render();

if(multiplayer){loadProfile(multiplayer.players[multiplayer.active]);save();render();}

// Menu de navegação para telas pequenas
function closeMobileMenu(){document.body.classList.remove('mobile-menu-open');const btn=document.getElementById('mobileMenuButton');if(btn){btn.setAttribute('aria-expanded','false');btn.textContent='☰ Menu'}}
(function initMobileMenu(){const btn=document.getElementById('mobileMenuButton');if(!btn)return;btn.addEventListener('click',()=>{const open=document.body.classList.toggle('mobile-menu-open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'✕ Fechar':'☰ Menu'});document.getElementById('mobileMenuBackdrop')?.addEventListener('click',closeMobileMenu);window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileMenu()});window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMobileMenu()})})();

// Navegação superior do novo painel
document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{state.page=b.dataset.jump;closeMobileMenu();save();render()}));
