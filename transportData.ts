export interface Conjugation {
  person: string;
  word: string;
}

export interface VerbInfo {
  verb: string;
  translation: string;
  conjugations: Conjugation[];
}

export interface TransportChallenge {
  question: string;
  translation: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
  type: 'subir' | 'tomar' | 'montar' | 'bajar' | 'sentarse';
}

export const TRANSPORT_VERBS: VerbInfo[] = [
  {
    verb: "Tomar",
    translation: "Օգտվել / Վերցնել",
    conjugations: [
      { person: "Yo", word: "tomo" },
      { person: "Tú", word: "tomas" },
      { person: "Él/Ella/Ud.", word: "toma" },
      { person: "Nosotros", word: "tomamos" },
      { person: "Vosotros", word: "tomáis" },
      { person: "Ellos/Ellas/Uds.", word: "toman" }
    ]
  },
  {
    verb: "Subir",
    translation: "Բարձրանալ / Նստել",
    conjugations: [
      { person: "Yo", word: "subo" },
      { person: "Tú", word: "subes" },
      { person: "Él/Ella/Ud.", word: "sube" },
      { person: "Nosotros", word: "subimos" },
      { person: "Vosotros", word: "subís" },
      { person: "Ellos/Ellas/Uds.", word: "suben" }
    ]
  },
  {
    verb: "Montar",
    translation: "Քշել / Հեծնել",
    conjugations: [
      { person: "Yo", word: "monto" },
      { person: "Tú", word: "montas" },
      { person: "Él/Ella/Ud.", word: "monta" },
      { person: "Nosotros", word: "montamos" },
      { person: "Vosotros", word: "montáis" },
      { person: "Ellos/Ellas/Uds.", word: "montan" }
    ]
  },
  {
    verb: "Bajar",
    translation: "Իջնել",
    conjugations: [
      { person: "Yo", word: "bajo" },
      { person: "Tú", word: "bajas" },
      { person: "Él/Ella/Ud.", word: "baja" },
      { person: "Nosotros", word: "bajamos" },
      { person: "Vosotros", word: "bajáis" },
      { person: "Ellos/Ellas/Uds.", word: "bajan" }
    ]
  },
  {
    verb: "Sentarse",
    translation: "Նստել (աթոռին և այլն)",
    conjugations: [
      { person: "Yo", word: "me siento" },
      { person: "Tú", word: "te sientas" },
      { person: "Él/Ella/Ud.", word: "se sienta" },
      { person: "Nosotros", word: "nos sentamos" },
      { person: "Vosotros", word: "os sentáis" },
      { person: "Ellos/Ellas/Uds.", word: "se sientan" }
    ]
  }
];

export const TRANSPORT_CHALLENGES: TransportChallenge[] = [
  {
    question: "Yo ___ al autobús en la parada.",
    translation: "Ես բարձրանում եմ ավտոբուս կանգառում (ֆիզիկապես):",
    options: [
      { text: "subo", correct: true },
      { text: "tomo", correct: false },
      { text: "monto", correct: false }
    ],
    explanation: "Subir օգտագործվում է, երբ շեշտում ենք տրանսպորտ բարձրանալու/մտնելու ֆիզիկական գործողությունը:",
    type: 'subir'
  },
  {
    question: "Para ir al trabajo, ___ el metro.",
    translation: "Աշխատանքի գնալու համար ես օգտվում եմ մետրոյից (որպես ընտրություն):",
    options: [
      { text: "subo", correct: false },
      { text: "tomo", correct: true },
      { text: "monto", correct: false }
    ],
    explanation: "Tomar նշանակում է օգտվել տրանսպորտից, ընտրել տվյալ փոխադրամիջոցը:",
    type: 'tomar'
  },
  {
    question: "Juan ___ en bicicleta por el parque.",
    translation: "Խուանը հեծանիվ է քշում այգում:",
    options: [
      { text: "sube", correct: false },
      { text: "toma", correct: false },
      { text: "monta", correct: true }
    ],
    explanation: "Montar en օգտագործվում է հեծանիվի, մոտոյի կամ ինքնագլորի դեպքում (երբ նստում ենք վրան):",
    type: 'montar'
  },
  {
    question: "Ellos ___ del tren ahora.",
    translation: "Նրանք հիմա իջնում են գնացքից:",
    options: [
      { text: "bajan", correct: true },
      { text: "suben", correct: false },
      { text: "toman", correct: false }
    ],
    explanation: "Bajar de նշանակում է իջնել տրանսպորտից:",
    type: 'bajar'
  },
  {
    question: "Yo ___ a caballo el domingo.",
    translation: "Կիրակի օրը ես ձի եմ հեծնում:",
    options: [
      { text: "monto", correct: true },
      { text: "subo", correct: false },
      { text: "tomo", correct: false }
    ],
    explanation: "Montar a caballo՝ ձի հեծնել (քշել):",
    type: 'montar'
  },
  {
    question: "Me ___ en el sofá.",
    translation: "Ես նստում եմ բազմոցին:",
    options: [
      { text: "siento", correct: true },
      { text: "monto", correct: false },
      { text: "subo", correct: false }
    ],
    explanation: "Sentarse օգտագործվում է աթոռի, բազմոցի և այլ նստատեղերի դեպքում:",
    type: 'sentarse'
  }
];
