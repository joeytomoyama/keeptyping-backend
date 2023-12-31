import { Pool } from 'pg'

const pool = new Pool({
    user: 'joey',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

export function getUsers() {
    return pool.query('SELECT * FROM users')
}

export const englishWords = ["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","hot","but","some","what","there","we","can","out","other","were","all","your","when","up","use","word","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","would","write","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","my","sound","no","most","number","who","over","know","water","than","call","first","people","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","much","great","think","say","help","low","line","before","turn","cause","same","mean","differ","move","right","boy","old","too","does","tell","sentence","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","thought","let","keep","eye","never","last","door","between","city","tree","cross","since","hard","start","might","story","saw","far","sea","draw","left","late","run","don","while","press","close","night","real","life","few","stop","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","often","always","music","those","both","mark","book","letter","until","mile","river","car","feet","care","second","group","carry","took","rain","eat","room","friend","began","idea","fish","mountain","north","once","base","hear","horse","cut","sure","watch","color","face","wood","main"]

export const germanWords = [
    "der, die, das",
    "von",
    "zu, an, nach",
    "und",
    "ein, eine",
    "in, im",
    "ist",
    "es",
    "du, Sie",
    "dass, das",
    "er",
    "war",
    "für",
    "auf, an",
    "sind, seid",
    "mit",
    "als, wie",
    "ich",
    "sein",
    "sie",
    "sein",
    "an, bei",
    "ein, eine",
    "haben",
    "dieses, diese",
    "von, aus",
    "oder",
    "hatte, hatten",
    "von, durch",
    "heiß",
    "aber, sondern",
    "einige, manche",
    "was",
    "da, dort",
    "wir",
    "können",
    "aus, hinaus, heraus",
    "andere",
    "waren",
    "alle",
    "dein, eure, Ihr",
    "wann, als",
    "hoch, auf",
    "benutzen, verwenden",
    "Wort",
    "wie",
    "sagte, gesagt",
    "ein, eine",
    "jede, jeder, jedes",
    "sie",
    "welche, welcher, welches",
    "tun, machen",
    "ihr, ihre",
    "Zeit",
    "wenn, falls",
    "werden, will",
    "Weg, Art",
    "über, etwa",
    "viele",
    "dann, danach",
    "sie, ihnen",
    "würde, würden",
    "schreiben",
    "mögen, wie",
    "so, also",
    "diese",
    "ihr, ihre, sie",
    "lang",
    "machen, erstellen",
    "Ding, Sache",
    "sehen",
    "ihm, ihn, er",
    "zwei",
    "hat",
    "schauen, sehen, Blick",

    "mehr",
    "Tag",
    "könnte, könnten",
    "gehen",
    "kommen",
    "tat, gemacht",
    "mein, meine",
    "Klang, Ton",
    "nein, kein",
    "meisten, am meisten",
    "Nummer, Zahl",
    "wer",
    "über, hinüber",
    "wissen, kennen",
    "Wasser",
    "als",
    "anrufen, Ruf",
    "erste, erster, erstes",
    "Menschen, Leute",
    "kann, dürfen",
    "runter, ab, hinunter",
    "Seite",
    "gewesen",
    "jetzt, nun",
    "finden",
    "irgendein, irgendwelche",
    "neu",
    "Arbeit, arbeiten",
    "Teil",
    "nehmen",
    "bekommen, erhalten",
    "Ort, Platz, Stelle",
    "gemacht",
    "leben, wohnen",
    "wo",
    "nach, danach",
    "zurück, Rücken",
    "klein, wenig",
    "nur, allein",
    "rund, Kreis",
    "Mann",
    "Jahr",
    "kam, gekommen",
    "zeigen, Show",
    "jeder, jede, jedes",
    "gut",
    "mich, mir",
    "geben",
    "unser, unsere",
    "unter",
    "Name",
    "sehr",
    "durch, hindurch",
    "gerade, nur",
    "Form, bilden",
    "viel",
    "groß, großartig",
    "denken",
    "sagen",
    "helfen, Hilfe",
    "niedrig, tief",
    "Linie, Zeile",
    "vor, bevor",
    "drehen, wenden",
    "Ursache, verursachen",
    "gleich, selbe",
    "bedeuten, meinen",
    "unterscheiden, abweichen",
    "bewegen, Bewegung",
    "rechts, richtig",
    "Junge",
    "alt",
    "auch, zu",
    "tut, macht",
    "sagen, erzählen",

    "Satz",
    "setzen, Set, Reihe",
    "drei",
    "wollen",
    "Luft",
    "gut, Brunnen",
    "auch",
    "spielen",
    "klein",
    "Ende, beenden",
    "setzen, legen, stellen",
    "Zuhause, Heim",
    "lesen",
    "Hand",
    "Hafen, Port",
    "groß",
    "buchstabieren, Zauber",
    "hinzufügen, addieren",
    "sogar, auch, gleich",
    "Land, landen",
    "hier",
    "müssen",
    "groß",
    "hoch",
    "solch, solche",
    "folgen",
    "handeln, Akt",
    "warum",
    "fragen",
    "Männer",
    "ändern, Wechsel",
    "ging, gegangen",
    "Licht, hell",
    "Art, freundlich",
    "aus, ab, weg",
    "brauchen, Bedarf",
    "Haus",
    "Bild, Foto",
    "versuchen, probieren",
    "uns, wir",
    "wieder, nochmal",
    "Tier",
    "Punkt, zeigen",
    "Mutter",
    "Welt",
    "nah, in der Nähe",
    "bauen",
    "Selbst",
    "Erde",
    "Vater",
    "Kopf, leiten",
    "stehen, Stand",
    "eigen, besitzen",
    "Seite",
    "sollte, sollten",
    "Land, Staat",
    "gefunden, gründen",
    "Antwort, beantworten",
    "Schule",
    "wachsen, anbauen",
    "studieren, Studie",
    "immer noch, still",
    "lernen",
    "Pflanze, pflanzen",
    "Abdeckung, decken",
    "Essen, Nahrung",
    "Sonne",
    "vier",
    "Gedanke, dachte",
    "lassen",
    "behalten, halten",
    "Auge",
    "nie",
    "letzte, dauern",
    "Tür",

    "zwischen",
    "Stadt",
    "Baum",
    "kreuzen, Kreuz",
    "seit, da",
    "hart, schwer",
    "starten, Anfang",
    "könnte, Macht",
    "Geschichte, Erzählung",
    "sah, Säge",
    "weit, fern",
    "Meer",
    "zeichnen, ziehen",
    "links, verlassen",
    "spät",
    "laufen, rennen",
    "anziehen, Don",
    "während",
    "drücken, Presse",
    "schließen, nahe",
    "Nacht",
    "echt, wirklich",
    "Leben",
    "wenige",
    "stoppen, Halt",
    "öffnen, offen",
    "scheinen",
    "zusammen",
    "nächste, danach",
    "weiß",
    "Kinder",
    "beginnen, anfangen",
    "bekommen, hat",
    "gehen, Spaziergang",
    "Beispiel",
    "Leichtigkeit, erleichtern",
    "Papier",
    "oft",
    "immer",
    "Musik",
    "jene, die",
    "beide",
    "markieren, Mark",
    "Buch",
    "Brief, Buchstabe",
    "bis",
    "Meile",
    "Fluss",
    "Auto",
    "Füße",
    "Sorge, pflegen",
    "zweite, Sekunde",
    "Gruppe",
    "tragen, befördern",
    "nahm, genommen",
    "Regen",
    "essen",
    "Zimmer",
    "Freund",
    "begann, begonnen",
    "Idee",
    "Fisch",
    "Berg",
    "Norden",
    "einmal",
    "Basis, Grundlage",
    "hören",
    "Pferd",
    "schneiden, Schnitt",
    "sicher",
    "Uhr, beobachten",
    "Farbe",
    "Gesicht",
    "Holz",
    "Haupt-, hauptsächlich"
]