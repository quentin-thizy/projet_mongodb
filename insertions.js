//Création de la collection equipes
db.createCollection("equipes", {});

//Insertion de l'équipe de Saint-Etienne
db.equipes.insert(
{
   "_id": 1, 
   "nom": "Saint-Etienne",
   "couleurs": ["vert", "blanc"],
   "stade": "Geoffroy Guichard",
   "effectif": [
       {"prenom": "Stefan", "nom": "Bajic", "poste": "GAR"},
       {"prenom": "Jessy", "nom": "Moulin", "poste": "GAR"},
       {"prenom": "Stéphane", "nom": "Ruffier", "poste": "GAR"},
       {"prenom": "Mathieu", "nom": "Debuchy", "poste": "DEF"},
       {"prenom": "Timothée", "nom": "Kolodziejczak", "poste": "DEF"},
       {"prenom": "Loïc", "nom": "Perrin", "poste": "DEF"},
       {"prenom": "Pierre-Yves", "nom": "Polomat", "poste": "DEF"},
       {"prenom": "William", "nom": "Saliba", "poste": "DEF"},
       {"prenom": "Gabriel", "nom": "Silva", "poste": "DEF"},
       {"prenom": "Neven", "nom": "Subotic", "poste": "DEF"},
       {"prenom": "Youssef", "nom": "Aït-Bennasser", "poste": "MIL"},
       {"prenom": "Rémy", "nom": "Cabella", "poste": "MIL"},
       {"prenom": "Romain", "nom": "Hamouma", "poste": "MIL"},
       {"prenom": "Wahbi", "nom": "Khazri", "poste": "MIL"},
       {"prenom": "Yann", "nom": "MVila", "poste": "MIL"},
       {"prenom": "Arnaud", "nom": "Nordin", "poste": "MIL"},
       {"prenom": "Kenny", "nom": "Rocha Santos", "poste": "MIL"},
       {"prenom": "Yannis", "nom": "Salibur", "poste": "MIL"},
       {"prenom": "Valentin", "nom": "Vada", "poste": "MIL"},
       {"prenom": "Charles", "nom": "Abi", "poste": "ATT"},
       {"prenom": "Robert", "nom": "Beric", "poste": "ATT"},
       {"prenom": "Loïs", "nom": "Diony", "poste": "ATT"},
       {"prenom": "Kevin", "nom": "Monnet-Paquet", "poste": "ATT"}
   ]
}
)

//Insertion de l'équipe de Paris
db.equipes.insert(
{
   "_id": 2, 
   "nom": "Paris",
   "couleurs": ["bleu", "rouge"],
   "stade": "Parc des Princes",
   "effectif": [
       {"prenom": "Alphonse", "nom": "Areola", "poste": "GAR"},
       {"prenom": "Gianluigi", "nom": "Buffon", "poste": "GAR"},
       {"prenom": "Sébastien", "nom": "Cibois", "poste": "GAR"},
       {"prenom": "Daniel", "nom": "Alves", "poste": "DEF"},
       {"prenom": "Juan", "nom": "Bernat", "poste": "DEF"},
       {"prenom": "Colin", "nom": "Dagba", "poste": "DEF"},
       {"prenom": "Alec", "nom": "Georgen", "poste": "DEF"},
       {"prenom": "Thilo", "nom": "Kehrer", "poste": "DEF"},
       {"prenom": "Presnel", "nom": "Kimpembe", "poste": "DEF"},
       {"prenom": "Layvin", "nom": "Kurzawa", "poste": "DEF"},
       {"prenom": "", "nom": "Marquinhos", "poste": "DEF"},
       {"prenom": "Thomas", "nom": "Meunier", "poste": "DEF"},
       {"prenom": "Stanley", "nom": "Nsoki", "poste": "DEF"},
       {"prenom": "Thiago", "nom": "Silva", "poste": "DEF"},
       {"prenom": "Moussa", "nom": "Diaby", "poste": "MIL"},
       {"prenom": "Julian", "nom": "Draxler", "poste": "MIL"},
       {"prenom": "Christopher", "nom": "Nkunku", "poste": "MIL"},
       {"prenom": "Leandro", "nom": "Paredes", "poste": "MIL"},
       {"prenom": "Adrien", "nom": "Rabiot", "poste": "MIL"},
       {"prenom": "Azzedine", "nom": "Toufiqui", "poste": "MIL"},
       {"prenom": "Marco", "nom": "Verratti", "poste": "MIL"},
       {"prenom": "Edinson", "nom": "Cavani", "poste": "ATT"},
       {"prenom": "Eric", "nom": "Choupo Moting", "poste": "ATT"},
       {"prenom": "Angel", "nom": "Di Maria", "poste": "ATT"},
       {"prenom": "Kylian", "nom": "Mbappé", "poste": "ATT"},
       {"prenom": "", "nom": "Neymar", "poste": "ATT"}
   ]
}
)



//Création de la collection joueurs
db.createCollection("joueurs", {});

//Insertion des joueurs
db.joueurs.insert(
{
   "_id": 1, 
   "nom": "Bajic",
   "prenom": "Stefan",
   "date_naissance": "15/02/2002",
   "taille": "1.80",
   "poids": "70",
   "poste": "GAR"
}
)

db.joueurs.insert(
{
   "_id": 2, 
   "nom": "Moulin",
   "prenom": "Jessy",
   "date_naissance": "25/06/1986",
   "taille": "1.84",
   "poids": "80",
   "poste": "GAR"
}
)

db.joueurs.insert(
{
   "_id": 3, 
   "nom": "Ruffier",
   "prenom": "Stéphane",
   "date_naissance": "02/02/1987",
   "taille": "1.86",
   "poids": "90",
   "poste": "GAR"
}
)

db.joueurs.insert(
{
   "_id": 4, 
   "nom": "Debuchy",
   "prenom": "Mathieu",
   "date_naissance": "07/05/1986",
   "taille": "1.76",
   "poids": "76",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 5, 
   "nom": "Kolodziejczak",
   "prenom": "Timothée",
   "date_naissance": "14/01/1992",
   "taille": "1.85",
   "poids": "75",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 6, 
   "nom": "Perrin",
   "prenom": "Loïc",
   "date_naissance": "24/03/1986",
   "taille": "1.80",
   "poids": "76",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 7, 
   "nom": "Polomat",
   "prenom": "Pierre-Yves",
   "date_naissance": "23/04/1994",
   "taille": "1.80",
   "poids": "75",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 8, 
   "nom": "Saliba",
   "prenom": "William",
   "date_naissance": "30/04/2001",
   "taille": "1.93",
   "poids": "80",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 9, 
   "nom": "Silva",
   "prenom": "Gabriel",
   "date_naissance": "17/12/1991",
   "taille": "1.79",
   "poids": "70",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 10, 
   "nom": "Subotic",
   "prenom": "Neven",
   "date_naissance": "09/04/1986",
   "taille": "1.93",
   "poids": "85",
   "poste": "DEF"
}
)

db.joueurs.insert(
{
   "_id": 11, 
   "nom": "Aït-Benasser",
   "prenom": "Youssef",
   "date_naissance": "14/02/1997",
   "taille": "1.85",
   "poids": "75",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 12, 
   "nom": "Cabella",
   "prenom": "Rémy",
   "date_naissance": "08/03/1990",
   "taille": "1.71",
   "poids": "68",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 13, 
   "nom": "Hamouma",
   "prenom": "Romain",
   "date_naissance": "01/06/1987",
   "taille": "1.77",
   "poids": "74",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 14, 
   "nom": "Khazri",
   "prenom": "Wahbi",
   "date_naissance": "23/09/1990",
   "taille": "1.82",
   "poids": "76",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 15, 
   "nom": "M'Vila",
   "prenom": "Yann",
   "date_naissance": "08/10/1990",
   "taille": "1.82",
   "poids": "80",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 16, 
   "nom": "Nordin",
   "prenom": "Arnaud",
   "date_naissance": "25/05/1998",
   "taille": "1.70",
   "poids": "66",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 17, 
   "nom": "Rocha Santos",
   "prenom": "Kenny",
   "date_naissance": "04/04/2000",
   "taille": "1.75",
   "poids": "70",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 18, 
   "nom": "Salibur",
   "prenom": "Yannis",
   "date_naissance": "02/11/1990",
   "taille": "1.77",
   "poids": "76",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 19, 
   "nom": "Vada",
   "prenom": "Valentin",
   "date_naissance": "31/01/1996",
   "taille": "1.75",
   "poids": "69",
   "poste": "MIL"
}
)

db.joueurs.insert(
{
   "_id": 20, 
   "nom": "Abi",
   "prenom": "Charles",
   "date_naissance": "06/06/2000",
   "taille": "1.78",
   "poids": "72",
   "poste": "ATT"
}
)

db.joueurs.insert(
{
   "_id": 21, 
   "nom": "Beric",
   "prenom": "Robert",
   "date_naissance": "12/08/1991",
   "taille": "1.88",
   "poids": "80",
   "poste": "ATT"
}
)

db.joueurs.insert(
{
   "_id": 22, 
   "nom": "Diony",
   "prenom": "Loïs",
   "date_naissance": "29/11/1992",
   "taille": "1.83",
   "poids": "82",
   "poste": "ATT"
}
)

db.joueurs.insert(
{
   "_id": 23, 
   "nom": "Monnet-Paquet",
   "prenom": "Kevin",
   "date_naissance": "27/02/1989",
   "taille": "1.83",
   "poids": "73",
   "poste": "ATT"
}
)

db.joueurs.insert(
{
   "_id": 24, 
   "nom": "Neymar",
   "prenom": "",
   "date_naissance": "05/02/1992",
   "taille": "1.75",
   "poids": "68",
   "poste": "ATT"
}
)

db.joueurs.insert(
{
   "_id": 25, 
   "nom": "Mbappé",
   "prenom": "Kylian",
   "date_naissance": "20/12/1998",
   "taille": "1.78",
   "poids": "73",
   "poste": "ATT"
}
)



//Création de la collection matchs
db.createCollection("matchs", {});

//Insertion des matchs
db.matchs.insert(
{
   "_id": 1, 
   "equipe_dom": "Saint-Etienne",
   "equipe_ext": "Paris",
   "competition": "Ligue 1",
   "score_dom": "1",
   "score_ext": "1",
   "notes_dom": [
       {"prenom": "Stéphane", "nom": "Ruffier", "note": "7"},
       {"prenom": "Mathieu", "nom": "Debuchy", "note": "5"},
       {"prenom": "Timothée", "nom": "Kolodziejczak", "note": "6"},
       {"prenom": "Loïc", "nom": "Perrin", "note": "6"},
       {"prenom": "William", "nom": "Saliba", "note": "7"},
       {"prenom": "Rémy", "nom": "Cabella", "note": "8"},
       {"prenom": "Romain", "nom": "Hamouma", "note": "6"},
       {"prenom": "Wahbi", "nom": "Khazri", "note": "7"},
       {"prenom": "Yann", "nom": "MVila", "note": "7"},
       {"prenom": "Arnaud", "nom": "Nordin", "note": "8"},
       {"prenom": "Robert", "nom": "Beric", "note": "7"}
   ],
   "notes_ext": [
       {"prenom": "Gianluigi", "nom": "Buffon", "note": "7"},
       {"prenom": "Juan", "nom": "Bernat", "note": "5"},
       {"prenom": "Presnel", "nom": "Kimpembe", "note": "5"},
       {"prenom": "", "nom": "Marquinhos", "note": "6"},
       {"prenom": "Thiago", "nom": "Silva", "note": "6"},
       {"prenom": "Julian", "nom": "Draxler", "note": "6"},
       {"prenom": "Marco", "nom": "Verratti", "note": "5"},
       {"prenom": "Edinson", "nom": "Cavani", "note": "7"},
       {"prenom": "Angel", "nom": "Di Maria", "note": "5"},
       {"prenom": "Kylian", "nom": "Mbappé", "note": "8"},
       {"prenom": "", "nom": "Neymar", "note": "7"}
   ]
}
)

db.matchs.insert(
{
   "_id": 2, 
   "equipe_dom": "Paris",
   "equipe_ext": "Saint-Etienne",
   "competition": "Ligue 1",
   "score_dom": "3",
   "score_ext": "1",
   "notes_dom": [
       {"prenom": "Gianluigi", "nom": "Buffon", "note": "8"},
       {"prenom": "Juan", "nom": "Bernat", "note": "6"},
       {"prenom": "Presnel", "nom": "Kimpembe", "note": "6"},
       {"prenom": "", "nom": "Marquinhos", "note": "7"},
       {"prenom": "Thiago", "nom": "Silva", "note": "7"},
       {"prenom": "Julian", "nom": "Draxler", "note": "6"},
       {"prenom": "Marco", "nom": "Verratti", "note": "6"},
       {"prenom": "Edinson", "nom": "Cavani", "note": "7"},
       {"prenom": "Angel", "nom": "Di Maria", "note": "6"},
       {"prenom": "Kylian", "nom": "Mbappé", "note": "9"},
       {"prenom": "", "nom": "Neymar", "note": "8"}
   ],
   "notes_ext": [
       {"prenom": "Stéphane", "nom": "Ruffier", "note": "6"},
       {"prenom": "Mathieu", "nom": "Debuchy", "note": "6"},
       {"prenom": "Timothée", "nom": "Kolodziejczak", "note": "5"},
       {"prenom": "Loïc", "nom": "Perrin", "note": "5"},
       {"prenom": "William", "nom": "Saliba", "note": "7"},
       {"prenom": "Rémy", "nom": "Cabella", "note": "7"},
       {"prenom": "Romain", "nom": "Hamouma", "note": "5"},
       {"prenom": "Wahbi", "nom": "Khazri", "note": "6"},
       {"prenom": "Yann", "nom": "MVila", "note": "6"},
       {"prenom": "Arnaud", "nom": "Nordin", "note": "7"},
       {"prenom": "Robert", "nom": "Beric", "note": "6"}
   ]
}
)

db.matchs.insert(
{
   "_id": 3, 
   "equipe_dom": "Paris",
   "equipe_ext": "Saint-Etienne",
   "competition": "Ligue des champions",
   "score_dom": "2",
   "score_ext": "4",
   "notes_dom": [
       {"prenom": "Gianluigi", "nom": "Buffon", "note": "6"},
       {"prenom": "Juan", "nom": "Bernat", "note": "5"},
       {"prenom": "Presnel", "nom": "Kimpembe", "note": "3"},
       {"prenom": "", "nom": "Marquinhos", "note": "6"},
       {"prenom": "Thiago", "nom": "Silva", "note": "6"},
       {"prenom": "Julian", "nom": "Draxler", "note": "5"},
       {"prenom": "Marco", "nom": "Verratti", "note": "5"},
       {"prenom": "Edinson", "nom": "Cavani", "note": "6"},
       {"prenom": "Angel", "nom": "Di Maria", "note": "6"},
       {"prenom": "Kylian", "nom": "Mbappé", "note": "9"},
       {"prenom": "", "nom": "Neymar", "note": "7"}
   ],
   "notes_ext": [
       {"prenom": "Stéphane", "nom": "Ruffier", "note": "8"},
       {"prenom": "Mathieu", "nom": "Debuchy", "note": "7"},
       {"prenom": "Timothée", "nom": "Kolodziejczak", "note": "6"},
       {"prenom": "Loïc", "nom": "Perrin", "note": "6"},
       {"prenom": "William", "nom": "Saliba", "note": "8"},
       {"prenom": "Rémy", "nom": "Cabella", "note": "9"},
       {"prenom": "Romain", "nom": "Hamouma", "note": "7"},
       {"prenom": "Wahbi", "nom": "Khazri", "note": "7"},
       {"prenom": "Yann", "nom": "MVila", "note": "6"},
       {"prenom": "Arnaud", "nom": "Nordin", "note": "8"},
       {"prenom": "Robert", "nom": "Beric", "note": "8"}
   ]
}
)
