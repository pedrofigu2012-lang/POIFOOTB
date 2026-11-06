// Elencos-base publicados em janeiro de 2026; nomes reais, não necessariamente elenco atual completo.
// Formato: nome do clube: [sigla, cor, "GOL|DEF|MEI|ATA" (cada grupo separado por ponto e vírgula)]
const DADOS = {
"Athletico-PR":["CAP","#e33535","Santos;Benavídez,Carlos Terán,Arthur Dias,Lucas Esquivel;Jadson,Portilla,Felipinho,Bruno Zapelli;Kevin Viveros,Julimar"],
"Atlético-MG":["CAM","#dddddd","Everson;Preciado,Ruan,Vitor Hugo,Renan Lodi;Alan Franco,Maycon,Bernard,Cuello;Dudu,Hulk"],
"Bahia":["BAH","#4a95ed","Ronaldo;Román Gómez,Gabriel Xavier,Kanu,Luciano Juba;Acevedo,Erick,Michel Araújo,Ademir;Iago,Willian José"],
"Botafogo":["BOT","#eeeeee","Neto;Alexander Barboza,Newton,Bastos,Vitinho;Allan,Danilo,Alex Telles,Álvaro Montoro;Artur,Arthur Cabral"],
"Chapecoense":["CHA","#50b96c","Rafael Santos;Victor Caetano,Eduardo Doma,João Paulo,Marcos Vinícius,Walter Clar;Camilo,Rafael Carvalheira,Giovanni Augusto;Marcinho,Ítalo"],
"Corinthians":["COR","#dddddd","Hugo Souza;Matheuzinho,André Ramalho,Gustavo Henrique,Matheus Bidu;André Carrillo,Raniele,Breno Bidon,Rodrigo Garro;Memphis Depay,Yuri Alberto"],
"Coritiba":["CFC","#54bf6a","Pedro Morisco;Tinga,Maicon,Jacy,Bruno Melo;Willian Oliveira,Sebastián Gómez,Josué,Lucas Ronier;Pedro Rocha,Breno Lopes"],
"Cruzeiro":["CRU","#4a79ed","Cássio;William,Fabrício Bruno,Jonathan Jesus,Kaiki;Lucas Silva,Lucas Romero,Gerson,Matheus Pereira;Keny Arroyo,Kaio Jorge"],
"Flamengo":["FLA","#ec4d4d","Rossi;Varela,Léo Ortiz,Léo Pereira,Alex Sandro;Erick Pulgar,Jorginho,Arrascaeta,Carrascal;Pedro,Bruno Henrique"],
"Fluminense":["FLU","#a03d65","Fábio;Samuel Xavier,Freytes,Jemmes,Guilherme Arana;Martinelli,Hércules,Savarino,Serna;Canobbio,Everaldo"],
"Grêmio":["GRE","#63b3ed","Weverton;Marcos Rocha,Gustavo Martins,Wagner Leonardo,Caio Paulista;Arthur,Edenilson,Cristaldo,Tetê;Carlos Vinícius,Enamorado"],
"Internacional":["INT","#e34c50","Rochet;Bruno Gomes,Mercado,Félix Torres,Bernabei;Thiago Maia,Rodrigo Villagra,Alan Patrick,Carbonero;Borré,Vitinho"],
"Mirassol":["MIR","#e2bd3f","Walter;Daniel Borges,João Victor,Luiz Otávio,Reinaldo;Neto Moura,Yuri Lara,Shaylon,Lucas Mugni;Alesson,André Luís"],
"Palmeiras":["PAL","#50a66c","Carlos Miguel;Khellven,Gustavo Gómez,Murilo,Piquerez;Marlon Freitas,Andreas Pereira,Felipe Anderson,Allan;Flaco López,Vitor Roque"],
"Red Bull Bragantino":["RBB","#e4e4e4","Cleiton;Agustín Sant'Anna,Gustavo Marques,Alix Vinícius,Juninho Capixaba;Gabriel,Eric Ramires,Jhon Jhon,Lucas Barbosa;Henry Mosquera,Eduardo Sasha"],
"Remo":["REM","#5886d8","Marcelo Rangel;João Lucas,Klaus,Léo Andrade,Sávio;Zé Ricardo,Patrick de Paula,Patrick,Yago Pikachu;João Pedro,Nicolás Ferreira"],
"Santos":["SAN","#e6e6e6","Gabriel Brazão;Igor Vinícius,Adonis Frías,Zé Ivaldo,Souza;Willian Arão,João Schmidt,Neymar,Rollheiser;Gabigol,Barreal"],
"São Paulo":["SAO","#e67c76","Rafael;Ferraresi,Arboleda,Alan Franco,Maik;Pablo Maia,Bobadilla,Marcos Antônio,Enzo Díaz;Lucas Moura,Calleri,Luciano"],
"Vasco":["VAS","#d6d6d6","Léo Jardim;Paulo Henrique,Cuesta,Robert Renan,Lucas Piton;Thiago Mendes,Barros,Philippe Coutinho,Andrés Gómez;Nuno Moreira,GB"],
"Vitória":["VIT","#ed5151","Gabriel Vasconcellos;Matheuzinho,Camutanga,Riccieli,Mateus Silva;Gabriel Baralhas,Ronald,Ramon,Aitor Cantalapiedra;Erick,Renato Kayzer"]
};
const ESTRELAS={"Neymar":89,"Arrascaeta":88,"Pedro":87,"Hulk":85,"Vitor Roque":85,"Gerson":84,"Kaio Jorge":85,"Gustavo Gómez":85,"Andreas Pereira":84,"Memphis Depay":85,"Yuri Alberto":83,"Lucas Moura":83,"Philippe Coutinho":83,"Alan Patrick":83,"Savarino":83,"Léo Ortiz":83,"Léo Pereira":82,"Rossi":83,"Hugo Souza":82,"Fábio":81,"Cássio":80,"Carlos Miguel":80,"Gabigol":81,"Matheus Pereira":84,"Bruno Henrique":82,"Arthur Cabral":80,"Borré":80,"Flaco López":82,"Guilherme Arana":81,"Gustavo Henrique":78,"Lucas Ronier":75};
