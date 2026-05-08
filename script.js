// TRANSCRIPT — via SpotScribe & ChatGPT
const transcript = [
  // 🎵 intro sound
  { type: 'sound',  time: 1,    icon: '🎵', label: 'Tonny Media intro' },

  // INTRO SPEAKERS
  { type: 'speech', time: 22,   speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Hallo lieve mensen, wat leuk dat jullie luisteren naar de podcast! Ik doe dit samen met Soundos—" },
  { type: 'speech', time: 27,   speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Top. Dat ben ik." },
  { type: 'speech', time: 30,   speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "En Edson." },

  { type: 'speech', time: 33,   speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "En ook ik ben er, Quinty! Dit is een podcast waar we praten over alles wat wij hebben geleerd in het leven, in onder andere de Bijlmer — de plek waar we allemaal zijn opgegroeid." },
  { type: 'speech', time: 52,   speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Dat doen we over elke keer weer een random onderwerp. En dit keer is het: restaurants!" },
  { type: 'speech', time: 63,   speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Restaurants. Veel over te vertellen." },
  { type: 'speech', time: 68,   speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Ja toch! Maar voordat we dat doen — hoe is het met jullie?" },
  { type: 'speech', time: 74,   speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Goed." },

  { type: 'speech', time: 76,   speaker: 'Soundos', color: '#c084fc', emoji: '😩', text: "Met een zucht. Ik vind succes dood vermoeiend. Ik ben moe, man." },
  { type: 'speech', time: 81,   speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Waar ben je moe van?" },
  { type: 'speech', time: 84,   speaker: 'Soundos', color: '#c084fc', emoji: '😩', text: "Van reizen naar België. Maar wat wel zo fijn is... ik zit alleen in Gerts talkshow af en toe. Dus rustig aan." },

  { type: 'speech', time: 104,  speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Kijk, ik ga nu andersom met mijn problemen. Als ik niet lekker in mijn velletje zit — vroeger ging ik met iemand praten, onderzoeken waar de pijn vandaan komt. Tegenwoordig als ik niet in mijn sasje ben open ik mijn ABN AMRO app en ik voel me meteen weer heerlijk." },

  { type: 'speech', time: 125,  speaker: 'Edson',   color: '#4ade80', emoji: '😂', text: "Nice, man. Alles is weer opgelost. Het is allemaal relatief." },

  { type: 'speech', time: 136,  speaker: 'Quinty',  color: '#e8a838', emoji: '😅', text: "Mijn baby slaapt nog steeds niet door..." },

  { type: 'speech', time: 141,  speaker: 'Soundos', color: '#c084fc', emoji: '😬', text: "Nee. Maar je wilt in de buurt met een coach, hè? Een slaapcoach." },

  { type: 'speech', time: 148,  speaker: 'Quinty',  color: '#e8a838', emoji: '😬', text: "Jawel, als je 95 euro per 3 kwartier hebt voor een slaapcoach. Maar we gaan de goede kant op. En ik kan je één ding zeggen over mijn zoontje van 1: als dit niet mijn zoon was geweest, zou ik niet met deze gast hangen." },

  { type: 'speech', time: 171,  speaker: 'Quinty',  color: '#e8a838', emoji: '😂', text: "Hij kan niet praten, maar hij zegt wel duidelijk dingen. Ik probeer hem 's nachts geen melk meer te geven. Ik geef hem water. Hij kijkt me aan van... wat gaat me doen? Maar ik ben niet achterlijk. Het is 3 uur 's nachts, ik ben een baby." },

  { type: 'speech', time: 210,  speaker: 'Edson',   color: '#4ade80', emoji: '😂', text: "En dan — ik zeg tegen Daniël: mijn baby heeft een beetje een scheef bekje. Een scheef bekje? Toen zei die: maar jij ook, als je praat. En nu ben ik opeens bewust van mijn scheve bek. Na 42 jaar!" },

  { type: 'speech', time: 234,  speaker: 'Soundos', color: '#c084fc', emoji: '😂', text: "Jij bent een beetje André van Dijk!" },

  { type: 'speech', time: 238,  speaker: 'Edson',   color: '#4ade80', emoji: '😂', text: "Ik heb een André-bek. En mijn baby ook. En ik dacht: waarom heeft dat kind een scheve bek? Van mij. Hij lijkt precies op mij met een scheve bek en een rot karakter." },

  // 🎙️ rubriek
  { type: 'sound',  time: 256,  icon: '🎙️', label: 'Rubriek: Wij Hebben Altijd Gelijk' },

  { type: 'speech', time: 281,  speaker: 'Quinty',  color: '#e8a838', emoji: '🤔', text: "Anne heeft het volgende ingestuurd: ik merk dat ik vaak validatie bij andere mensen zoek, met name bij mannen, en dus niet bij mezelf. Hebben jullie tips om hierin te switchen?" },

  { type: 'speech', time: 300,  speaker: 'Soundos', color: '#c084fc', emoji: '🤔', text: "Wat is de band met je vader? Dat is mijn eerste vraag. Dat is vaak waar het fout gaat." },

  { type: 'speech', time: 312,  speaker: 'Edson',   color: '#4ade80', emoji: '🤔', text: "Ja, nee, serieus. Vrouwen waarbij het fout gaat — dan heb je niet die connectie gevoeld met de vaderfiguur en ga je het ergens anders vandaan halen." },

  { type: 'speech', time: 329,  speaker: 'Quinty',  color: '#e8a838', emoji: '😌', text: "Dit is waarschijnlijk waar het vandaan komt. En dan vervolgens beseffen: zoek het niet daar. Als je het ergens gaat zoeken, zoek het niet bij mannen." },

  { type: 'speech', time: 353,  speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Maar wat wel tof is: ze is zich er bewust van! Dat is stap nummer één." },

  { type: 'speech', time: 360,  speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Stap één gezet. Applausje voor Anne!" },

  { type: 'speech', time: 376,  speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Lieve Anne, vraag geen bevestiging bij eigenlijk niemand. Alleen bij jezelf, als jij blij bent met jezelf. Maar ga niet bij mannen die het zelf ook allemaal niet weten." },

  { type: 'speech', time: 400,  speaker: 'Quinty',  color: '#e8a838', emoji: '😤', text: "Want dan trek je ook echt de meest nasty sukkels aan. Gewoon troep, restjes van de maatschappij. Wat je aantrekt wordt je realiteit — en dan denk je, dit is wat het is." },

  { type: 'speech', time: 433,  speaker: 'Soundos', color: '#c084fc', emoji: '😌', text: "Misschien even celibaat zijn. Dat is een goeie. Maar ik denk niet dat ze een probleem heeft met iedereen — ik denk dat we het over romantische bevestiging hebben." },

  { type: 'speech', time: 469,  speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Jullie riepse poesjes. Inmiddels zou ik mezelf een professioneel restaurantganger durven noemen." },

  { type: 'speech', time: 479,  speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Ik ook! Ik ben gek op naar restaurants gaan." },

  { type: 'speech', time: 491,  speaker: 'Quinty',  color: '#e8a838', emoji: '🥺', text: "Maar er was een tijd in mijn leven dat dit absoluut niet mijn werkelijkheid was. En ik kan me nog het eerste moment herinneren dat ik naar een restaurant ging — met een familiediner." },

  { type: 'speech', time: 516,  speaker: 'Quinty',  color: '#e8a838', emoji: '😬', text: "Mijn moeder had ons basically op de bank neergezet: jullie gaan je gedragen. Je gaat niet zomaar schreeuwen, je gaat niet achter elkaar aanrennen. Mijn broertje en ik waren kapot nerveus." },

  { type: 'speech', time: 537,  speaker: 'Quinty',  color: '#e8a838', emoji: '😬', text: "Ik dacht: nu moet ik met mes en vork netjes gaan eten." },

  { type: 'speech', time: 543,  speaker: 'Edson',   color: '#4ade80', emoji: '😂', text: "Ik bedoel — zeg maar als Surinamer, ze doen alles met de lepel. Je kan je niet bedenken wat ik allemaal met een lepel kan eten. Alles. Behalve soep. Of ook soep — dat sloeg ik zo naar achter." },

  { type: 'speech', time: 571,  speaker: 'Quinty',  color: '#e8a838', emoji: '😂', text: "Wij kwamen in dat restaurant — we hadden een sjieke tante. Ik dacht al: oeh, dit moet ik goed gaan doen. We zitten daar. Het gaat denk ik 5 minuten goed. Er is al iets kapot gevallen, er is al geschreeuwd, er wordt al veel te hard gelachen." },

  { type: 'speech', time: 611,  speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Gewoon geluid maken en bombarie — dat voelt voor mij als me gedragen. Naar mijn zin. Maar de scheve ogen die ik toen kreeg..." },

  { type: 'speech', time: 633,  speaker: 'Quinty',  color: '#e8a838', emoji: '😢', text: "Dat was het moment dat ik besefte: mijn plezier is niet in elke ruimte geaccepteerd. In deze ruimte is plezier: rustig eten met mes en vork, vriendelijk naar elkaar lachen." },

  { type: 'speech', time: 657,  speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Ik vind dat er wel een bepaalde etiquette moet zijn. Als jij kinderen hebt die apen zijn die zich niet kunnen gedragen — blijf thuis met je rotkinderen. Ik heb geen emotionele band met jouw kinderen!" },

  { type: 'speech', time: 679,  speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Kijk, er is duidelijk een tekort in de horeca, dat snap ik. Maar... ik was in een hotel in België. Ik wilde even wat eten. Basis dingen als: jij weet dat ik bestek nodig heb aan de rechterkant. En jij gaat van links met jouw hele lichaam en jouw borsten in mijn gezicht. Ik word gemotoorboofd tegen mijn zin!" },

  { type: 'speech', time: 731,  speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Jij brengt brood met die hand waarmee je het brood neerlegt — je hebt de helft van mijn brood aangeraakt. Dit zijn basisdingetjes die je gewoon moet weten." },

  { type: 'speech', time: 752,  speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Ga gewoon naar sterrenrestaurants, dan heb je dit gezeur niet. Betaal gewoon 1000 euro en heb het gewoon leuk." },

  { type: 'speech', time: 770,  speaker: 'Quinty',  color: '#e8a838', emoji: '😤', text: "Dit is toch totaal de schuld van horeca-eigenaren die fucking gierig zijn en hun mensen niet betalen en niet trainen. En veel mensen zijn tijdens corona ook iets anders gaan doen." },

  { type: 'speech', time: 812,  speaker: 'Edson',   color: '#4ade80', emoji: '😒', text: "Je verdient echt geen reet in de horeca. Jonge mensen doen het omdat je het vaak met vrienden kan doen. Maar mensen krijgen echt minimaal betaald." },

  { type: 'speech', time: 851,  speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Ik heb in een winkel gestaan voor 5 euro per uur. Ook onderbetaald — maar ik maak het niet andermans probleem. Je bent hier nu, is ook een keus. Doe gewoon aardig." },

  { type: 'speech', time: 888,  speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Ik haat het: mag ik een cappuccino — en iemand loopt weg. Terwijl ik ook nog appeltaart wil. En sparkling water. En misschien nog een vraag. Waar is trouwens het toilet? Maar ga niet meteen een sprintje trekken als een Formule 1-coureur!" },

  { type: 'speech', time: 913,  speaker: 'Soundos', color: '#c084fc', emoji: '😌', text: "Muziek niet te hard. Ik wil dat mijn spijsvertering ook ontspannen gaat. En ik wil niet het gevoel hebben dat ik onaangekondigd in jouw woonkamer sta. Ik kom eten. Ik wil dat jij mij als gast verwelkomt. Doe alsof je blij bent — lieg gewoon tegen me!" },

  { type: 'speech', time: 949,  speaker: 'Quinty',  color: '#e8a838', emoji: '💪', text: "Ik heb in een baller gestaan voor 3 euro. Maar als ik het deed, deed ik het goed. Al die gasten zagen gewoon een vrolijke Quinty. Als jij je werk niet dope vindt omdat je onderbetaald bent — ga iets anders doen." },

  { type: 'speech', time: 970,  speaker: 'Edson',   color: '#4ade80', emoji: '🥰', text: "Ik heb ook heel lang niet geweten dat restaurants zo'n ding waren, totdat ik Maud tegenkwam. Zij was echt een horecatijger. Ik wist niet eens dat dat een ding was." },

  { type: 'speech', time: 986,  speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Als ze citytrips deed, zocht ze goed restaurants uit. Toen dacht ik: ja, verkering! Zoveel shit geleerd." },

  { type: 'speech', time: 1007, speaker: 'Edson',   color: '#4ade80', emoji: '😱', text: "We waren een keer op Capri. Ze nam een soort tonijn carpaccio. Ze wilde een hap nemen — het was bevroren! Ik zeg tegen de ober: het is bevroren. Hij zegt: maar je kan gewoon wachten tot het ontdooid." },

  { type: 'speech', time: 1039, speaker: 'Edson',   color: '#4ade80', emoji: '😂', text: "Hij neemt het mee en zet het gewoon op de magnetron. Als je in de horeca werkt, het gaat om hospitality! Het is belachelijk." },

  { type: 'speech', time: 1060, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Weet je waar ze goed zijn? In Marokko, man! Ze doen alles voor je. Als je zegt 'kan je mijn auto voltanken?' — ja, ja, dat doen ze. Ze zijn echt blij dat je er bent." },

  { type: 'speech', time: 1090, speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Want dan kunnen zij... Ja, precies. Ze zijn niet in de luxe positie om stoer te doen." },

  { type: 'speech', time: 1105, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Als ik dan met een groep ben, en ik heb iedereen ergens neergezet en ze doen allemaal wat ze lekker vinden — dat gevoel vind ik zo satisfying." },

  { type: 'speech', time: 1122, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Ik ben ook de zieke kling met Google Maps met opgeslagen dingetjes. Voor bijna elke plek. Als iemand zegt 'ik ga naar Barcelona' — ik heb voor elke straat alles. Ik zet notities erbij welke dingen." },

  { type: 'speech', time: 1146, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Ergens in mijn hoofd zou ik misschien ook reisleider moeten zijn. Of dictator — lekker kiezen." },

  { type: 'speech', time: 1169, speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "En ik wil NIET aan de bar zitten. Ik wil niet op die hoge kruk aan de bar, omdat ik alleen aan het eten ben. Dat is die rotplek waar niemand wil zitten — bij de tocht, bij het toilet." },

  { type: 'speech', time: 1209, speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "In mijn eentje wil ik ook een leuke plek. Ik hoef geen tafel van 8, maar ik wil wel een leuke plek. Maud heeft mij dit ook geleerd. Ik was altijd die sukkel van: ja, moet ik aan de bar, ga ik aan de bar." },

  { type: 'speech', time: 1223, speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Zij is wit, dus heeft ze privileges vanuit huis meegekregen. Zij loopt gewoon naar binnen en zegt: nee, we gaan niet aan de bar. Gewoon. Ze is altijd gewoon een rotwijf geweest." },

  { type: 'speech', time: 1244, speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "We hebben een emmertje gehad — iemand vroeg ons om een tip over een restaurant in de Bijlmer. Naast Iewey Treats zit Oma Ietje. Bij Bullewijk, als je uitstapt gelijk naar beneden. Het ontbijt is zo lekker!" },

  { type: 'speech', time: 1266, speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Het is opeens internationaal geworden. Mensen praten Engels. Het is heel extra. Heel leuk." },

  { type: 'speech', time: 1282, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Er is ook een heel leuk Turks restaurant bij de Bijlmer — Miram! Bij Amsterdam Sport. Dan heb je allemaal lekkere pasta gerechten, Turkse gerechten, pizza's, van alles. En gastvrij — ze rennen nog net niet. Echt top." },

  { type: 'speech', time: 1325, speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Nou, dit was over restaurants — we kunnen hier uren over praten." },

  { type: 'speech', time: 1348, speaker: 'Edson',   color: '#4ade80', emoji: '🤢', text: "Ik kreeg een flashback. Mijn vader was ooit... we gingen bami halen bij een zaak in de Bijlmer. Mijn vader doet de deksel open — hij zag een kakkerlak." },

  { type: 'speech', time: 1367, speaker: 'Edson',   color: '#4ade80', emoji: '🤢', text: "Hij heeft die bak de winkel ingesmeten. De gedachte dat dit aan hem en zijn kinderen was gegeven maakte hem ziekelijk. Hij werd niet goed." },

  { type: 'speech', time: 1411, speaker: 'Quinty',  color: '#e8a838', emoji: '😂', text: "Even voor de duidelijkheid, lieve luisteraar buiten de Randstad: dat is geen delicatesse." },

  { type: 'sound',  time: 1437, icon: '⭐', label: 'BIMS Advisor: eten terugsturen' },

  { type: 'speech', time: 1462, speaker: 'Soundos', color: '#c084fc', emoji: '💪', text: "Boodschappenlijst heeft ingestuurd: eten terugsturen. 100 procent moet je dat leren! Als het niet goed is, is het niet goed." },

  { type: 'speech', time: 1482, speaker: 'Quinty',  color: '#e8a838', emoji: '😂', text: "Ik was eens een keer met comedians aan het eten — dat zijn vaak slappe zakken. We gingen eten. Ons comedy-gezelschap betaalde. En ik had zand in mijn spinazie. Zand! Ik zeg: sorry, mag het terug?" },

  { type: 'speech', time: 1499, speaker: 'Quinty',  color: '#e8a838', emoji: '😤', text: "Mijn collega's: 'Ik vind het echt asociaal dat je terugstuurt.' Er zit zand in, pardon! Ze zeggen: maar dan kan je toch die frietjes eten. Nee! Jij bent gek." },

  { type: 'speech', time: 1545, speaker: 'Quinty',  color: '#e8a838', emoji: '😤', text: "Ik heb het teruggestuurd. Maar die pasta stond nog op de rekening. De jongens van: maar wij betalen toch niet? Ik zeg: nou en. Het is een principekwestie. Maar zij hebben geen principes — slappe zakken." },

  { type: 'speech', time: 1576, speaker: 'Soundos', color: '#c084fc', emoji: '💪', text: "Terugsturen: ja. Maar ga ook niet wachten — doe het ook gewoon. Netjes. Ik doe het ook. Sorry meneer, ik ga even eerlijk zijn: dit is niet goed. Het spijt me, maar ik moet echt een nieuwe. Gewoon aardig." },

  { type: 'speech', time: 1609, speaker: 'Edson',   color: '#4ade80', emoji: '😅', text: "Ik denk dat ik gewoon een kleine bitch ben, man. Ik kan geen nee zeggen. Dan komt de ober — smaakt alles? En ik zeg... ja. En die ober loopt weg." },

  { type: 'speech', time: 1627, speaker: 'Edson',   color: '#4ade80', emoji: '😅', text: "Ik was een tosti aan het eten. Ik zag de kaas niet. Ik weet niet hoe je dat kan verpesten. Wat voor stukjes kaas heb je gedaan?" },

  { type: 'speech', time: 1642, speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Ik wil een tosti openklappen en een cheese accordion zien — zo groot. Er was gewoon niks. Twee droge tosti-helften. Ik zeg: sorry, de meest droge tosti. Ik wil echt kaas. Ik heb hem teruggestuurd." },

  { type: 'speech', time: 1678, speaker: 'Soundos', color: '#c084fc', emoji: '😬', text: "Maar ik wilde net dit gesprek voeren en ik zie een altaartje van iemand uit het restaurant die pas is overleden. Met kaarsjes. Iedereen was een beetje sip. En ik had dit hele gesprek zo in mijn hoofd — en dacht: ik kan dit nu echt niet hardop zeggen." },

  { type: 'speech', time: 1724, speaker: 'Soundos', color: '#c084fc', emoji: '😂', text: "Die heeft misschien alle kaas meegenomen het graf in. Of zij was vergeten om extra te bestellen voordat ze het loodje legde. Dus ik heb dat gesprek helemaal in me opgekropt." },

  { type: 'speech', time: 1745, speaker: 'Soundos', color: '#c084fc', emoji: '😂', text: "En ik kon niet meer. Droge tosti gegeten en betaald met een glimlach. Als een kleine bitch." },

  { type: 'sound',  time: 1762, icon: '⭐', label: 'Sterren geven: eten terugsturen' },

  { type: 'speech', time: 1780, speaker: 'Quinty',  color: '#e8a838', emoji: '😬', text: "Het moet 5 sterren hebben maar ik zit er zelf op 2 eigenlijk. Het moet 5 zijn, maar ik kan het gewoon niet zo goed. Ik snap het wel en dan zeg ik 'lekker' en dan zie ik Maud erachter kijken van: het was niet lekker. Ik geef het 4 sterren." },

  { type: 'speech', time: 1817, speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Nogmaals: als ik in een brasserie ben en ik krijg iets waarvan ik denk 'medium', maar dat is gewoon de kwaliteit — dan ga ik niet de hele tijd dingen terugsturen. Maar als het echt niet goed is, dan gaat het terug. 4 sterren." },

  { type: 'speech', time: 1833, speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Ik geef 3 sterren. Ik hoop dat ik ooit op het punt kom dat ik het kan. Later als ik groot ben." },

  { type: 'speech', time: 1881, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Als je jarig bent en je wilt geen cadeautjes — zeg tegen iedereen die op je verjaardag komt: als cadeau wil ik dat je me een keer uiteten neemt." },

  { type: 'speech', time: 1923, speaker: 'Quinty',  color: '#e8a838', emoji: '😄', text: "Dan heb je een heel jaar lang leuke etentjes die je niet hoeft te betalen. En je connectet ook nog eens met diegene. Dit staat sowieso op de nominatie van beste advies ooit." },

  { type: 'speech', time: 1941, speaker: 'Edson',   color: '#4ade80', emoji: '😄', text: "Ik doe dit altijd al andersom — ik neem mensen mee uit eten. Maar ik denk dat er niet heel veel vrienden van mij zijn die het geld hebben om echt een dinertje cadeau te geven." },

  { type: 'speech', time: 1963, speaker: 'Quinty',  color: '#e8a838', emoji: '😂', text: "Wat voor verkeerde vrienden heb jij?! Jij hebt toch alle succesvolle vrienden?" },

  { type: 'speech', time: 1994, speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Mijn tip is voor de restaurants: zorg ervoor dat als er iemand met een allergie binnenkomt die lekker wil eten, je een chef hebt die creativiteit in zijn ziel heeft. In plaats van gewoon 28 dingen eraf te halen." },

  { type: 'speech', time: 2017, speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "Dan komt hij met die bord: hier alstublieft, mevrouw — niks. Gewoon niks. Sommige schil... maar daar ben ik ook al lekker zonder schil. Is helemaal niet leuk." },

  { type: 'speech', time: 2046, speaker: 'Soundos', color: '#c084fc', emoji: '😄', text: "Ik ben blij dat ik dat niet heb — maar mensen met allergieën verdienen ook echt gewoon lekker eten. In Nederland gaan we hier zo slecht mee om." },

  { type: 'speech', time: 2106, speaker: 'Soundos', color: '#c084fc', emoji: '😤', text: "In Spanje snappen ze het helemaal. Die hebben die shit helemaal goed. Hier zeggen ze: we kunnen niks verzekeren. Maak dan gewoon iets weg! Fix je shit als het gaat om allergieën." },

  // 🎵 outro
  { type: 'sound',  time: 2137, icon: '🎵', label: 'Outro muziek' },

  { type: 'speech', time: 2161, speaker: 'Quinty',  color: '#e8a838', emoji: '👋', text: "Laat ons weten welke les jullie het allerbeste vond — via Instagram of TikTok: @bimsdepodcast. Ik hoop dat we jullie de volgende keer weer zien!" },

  { type: 'speech', time: 2175, speaker: 'Soundos', color: '#c084fc', emoji: '👋', text: "Dag!" },

  { type: 'speech', time: 2177, speaker: 'Edson',   color: '#4ade80', emoji: '👋', text: "Dag!" },
];

const TOTAL = 2216; // totale lengte van de aflevering

// States
let playing     = false;
let currentTime = 0;
let ticker      = null;
let lezenMode   = false;
const entries   = [];

// Transcript UI, Loopt door lijst van Transcript, controleert welk type item het is en vult de elementen met inhoud.
transcript.forEach(item => { 
  let el; //

  if (item.type === 'sound') { //aside voor geluiden en bijzaken 
    el = document.createElement('aside');
    el.innerHTML = `<span class="sound-icon">${item.icon}</span><span class="sound-label">${item.label}</span>`;
  } else {
    el = document.createElement('article'); //article voor belangrijke stukjes, Als mensen spreken
    el.style.borderColor = item.color + '66';
    const initials = item.speaker.split(' ').map(w => w[0]).join('');
    el.innerHTML = `
      <div class="speaker-row">
        <div class="avatar" style="background:${item.color}22;color:${item.color};border:1px solid ${item.color}44">${initials}</div>
        <span class="speaker-name" style="color:${item.color}">${item.speaker}</span>
        <span class="emotion">${item.emoji}</span>
      </div>
      <p class="speech-text">${item.text}</p>`;
  }

  entries.push(el); //gemaakte elementen worden opgeslagen in entries
  document.getElementById('transcriptList').appendChild(el);  //zet elementen op de pagina
});

// Format, Zet seconden naar minuten, ook op komma getallen
function fmt(s) {
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

// Playback, Zorgt ervoor dat de tijd loopt en dat data uit de transcript zichtbaar wordt
function tick() { 
  currentTime = Math.min(currentTime + 0.5, TOTAL); // Tijd gaat vooruit, niet verder dan de TOTAL

  const pct = currentTime / TOTAL * 100; // Percentage voor de timeline
  document.getElementById('timeline').value = pct; // timelines/sliders updaten
  document.getElementById('stickyTimeline').value = pct;

  document.getElementById('timeDisplay').textContent = fmt(currentTime) + ' / ' + fmt(TOTAL); // Laat zichtbare tijd zien
  document.getElementById('stickyTimeDisplay').textContent = fmt(currentTime);

  entries.forEach((el, i) => { // Loopt door de entries heen
    const item = transcript[i]; 

    if (currentTime >= item.time && !el.hasAttribute('data-visible')) { // Checkt de tijd, en als het element data visible attribute heeft
      el.dataset.visible = ''; //maakt het visible

      if (!lezenMode) { // Automatisch scrollen gaat uit in lezenmode
        setTimeout(() => {
          const rect = el.getBoundingClientRect(); //Haalt positie van het element op
          const footerH = document.getElementById('stickyBottom').offsetHeight; 
          const overlap = rect.bottom - (window.innerHeight - footerH - 16); // Klapt de stickybottom in
          if (overlap > 0) window.scrollBy({ top: overlap, behavior: 'smooth' }); // Pagina scrollt smooth mee
        }, 50);
      }
    }

    if (item.type === 'speech') { 
      const next = transcript[i + 1];
      el.toggleAttribute('data-active', currentTime >= item.time && (!next || currentTime < next.time));
    }
  });

  if (currentTime >= TOTAL) stop(); // Ticker stopt als de totale tijd is bereikt
}

// CONTROLS
function stop() {
  playing = false;
  clearInterval(ticker); ticker = null;
  document.getElementById('playBtn').textContent = '▶';
  document.getElementById('stickyPlayBtn').textContent = '▶';
}

function togglePlay() {
  playing = !playing;
  const label = playing ? '⏸' : '▶';
  document.getElementById('playBtn').textContent = label;
  document.getElementById('stickyPlayBtn').textContent = label;

  if (playing) ticker = setInterval(tick, 500);
  else clearInterval(ticker);
}

function scrub(val) {
  currentTime = parseFloat(val) / 100 * TOTAL;

  entries.forEach(el => {
    el.removeAttribute('data-visible');
    el.removeAttribute('data-active');
  });

  transcript.forEach((item, i) => {
    if (item.time <= currentTime) entries[i].dataset.visible = '';
  });

  tick();
}

function toggleMode() {
  lezenMode = !lezenMode;

  const btn = document.getElementById('modeBtn');
  document.body.classList.toggle('lezen-mode', lezenMode);
  btn.classList.toggle('active', lezenMode);
  btn.textContent = lezenMode ? 'Live' : 'Lezen';

  if (lezenMode) {
    entries.forEach(el => el.dataset.visible = '');
  } else {
    entries.forEach((el, i) => {
      if (transcript[i].time > currentTime) el.removeAttribute('data-visible');
    });
  }
}

// sticky player zichtbaar maken wanneer main player uit beeld is
new IntersectionObserver(([e]) => {
  document.querySelector('.sticky-player')
    .toggleAttribute('data-visible', !e.isIntersecting);
}, { rootMargin: '0px 0px -40px 0px' })
.observe(document.getElementById('episodeCard'));