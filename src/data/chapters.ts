export const chapters = [
    {
        id: 1,
        title: "Deskriptiv statistikk",
        emoji: "📊",
        intro:
            "Deskriptiv statistikk handler om å beskrive og oppsummere data ved hjelp av mål på sentraltendens og variasjon.",
        concepts: [
            { term: "Gjennomsnitt", definition: "Summen av observasjoner delt på antallet observasjoner." },
            { term: "Median", definition: "Den midterste verdien i et sortert datasett." },
            { term: "Varians", definition: "Måler hvor mye verdiene varierer rundt gjennomsnittet." },
            { term: "Standardavvik", definition: "Kvadratroten av variansen, i samme enhet som data." },
            { term: "Interkvartilbredde", definition: "Forskjellen mellom øvre og nedre kvartil $Q_3 - Q_1$." },
            { term: "Histogram", definition: "Grafisk representasjon av fordeling i klasser." },
            { term: "Boksplott", definition: "Viser median, kvartiler og ekstreme verdier." },
            { term: "Spredningsplott", definition: "Plotter to målinger mot hverandre for å se korrelasjon." },
        ],
        formulas: [
            {
                title: "Utvalgs-gjennomsnitt",
                formula: "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i",
                explanation: "Måler gjennomsnittet i et utvalg.",
                importance: "Høy",
            },
            {
                title: "Utvalgs-varians",
                formula: "s^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2",
                explanation: "Måler spredningen i et utvalg.",
                importance: "Høy",
            },
            {
                title: "Standardavvik",
                formula: "s = \\sqrt{s^2}",
                explanation: "Gir gjennomsnittlig avvik fra gjennomsnittet.",
                importance: "Middels",
            },
            {
                title: "Interkvartilbredde",
                formula: "\\text{IQR} = Q_3 - Q_1",
                explanation: "Viser spredningen til de midterste 50\\% av dataene.",
                importance: "Lav",
            },
            {
                title: "Variasjonsbredde",
                formula: "\\text{Range} = \\max(x_i) - \\min(x_i)",
                explanation: "Forskjellen mellom største og minste verdi.",
                importance: "Lav",
            },
        ],
        quiz: [
            {
                question: "Hva representerer $\\bar{x}$?",
                options: ["Median", "Gjennomsnitt", "Varians", "Standardavvik"],
                answer: 1,
            },
            {
                question: "Hva måler varians?",
                options: ["Sammenhenger", "Spredning", "Sentral tendens", "Form"],
                answer: 1,
            },
            {
                question: "Hva er IQR et mål på?",
                options: ["Gjennomsnitt", "Midtre spredning", "Avvik fra null", "Varians"],
                answer: 1,
            },
            {
                question: "Hvordan finner man standardavviket?",
                options: ["Kvadrer gjennomsnittet", "Rot av variansen", "Del på n", "Sum av verdier"],
                answer: 1,
            },
            {
                question: "Hva er variasjonsbredden hvis maks = 12 og min = 3?",
                options: ["9", "15", "36", "4.5"],
                answer: 0,
            },
        ],
    },
    {
        id: 2,
        title: "Hendelser og sannsynlighet",
        emoji: "🎲",
        intro:
            "Dette kapittelet handler om hvordan vi kvantifiserer usikkerhet ved hjelp av sannsynligheter og hendelser.",
        concepts: [
            { term: "Hendelse", definition: "Et utfall eller en samling av utfall i et stokastisk forsøk." },
            { term: "Komplement", definition: "Hendelsen at noe ikke skjer, altså $A^c$." },
            { term: "Betinget sannsynlighet", definition: "Sannsynlighet gitt at en annen hendelse har inntruffet, $P(A\\mid B)$." },
            { term: "Uavhengighet", definition: "To hendelser er uavhengige hvis $P(A \\cap B) = P(A)P(B)$." },
            { term: "Uniform sannsynlighet", definition: "Alle utfall har lik sannsynlighet i uniform modell." },
            { term: "Urnemodell", definition: "Modell der kuler trekkes fra en urne med eller uten tilbakelegging." },
        ],
        formulas: [
            {
                title: "Komplementregel",
                formula: "P(A^c) = 1 - P(A)",
                explanation: "Sannsynligheten for at A ikke skjer.",
                importance: "Middels",
            },
            {
                title: "Addisjonsregel",
                formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
                explanation: "Kombinerer sannsynligheter for to hendelser.",
                importance: "Høy",
            },
            {
                title: "Betinget sannsynlighet",
                formula: "P(A\\mid B) = \\frac{P(A \\cap B)}{P(B)}",
                explanation: "Sannsynligheten for A gitt at B har skjedd.",
                importance: "Høy",
            },
            {
                title: "Multiplikasjonsregel",
                formula: "P(A \\cap B) = P(A\\mid B) \\cdot P(B)",
                explanation: "Knytter sammen betinget og felles sannsynlighet.",
                importance: "Middels",
            },
            {
                title: "Bayes’ regel",
                formula: "P(A\\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}",
                explanation: "Oppdaterer sannsynlighet basert på ny informasjon.",
                importance: "Høy",
            },
        ],
        quiz: [
            {
                question: "Hva er $P(A^c)$ hvis $P(A)=0.3$?",
                options: ["0.3", "0.7", "1.3", "0"],
                answer: 1,
            },
            {
                question: "Hvis A og B er uavhengige, hva gjelder?",
                options: ["$P(A\\cap B) = P(A)P(B)$", "$P(A\\cap B) = P(A) + P(B)$", "$P(A)=P(B)$", "Ingen regel"],
                answer: 0,
            },
            {
                question: "Hva beskriver $P(A\\mid B)$?",
                options: ["Felles sannsynlighet", "Betinget sannsynlighet", "Total sannsynlighet", "Komplement"],
                answer: 1,
            },
            {
                question: "Hva brukes Bayes’ regel til?",
                options: ["Beregn gjennomsnitt", "Oppdatere sannsynlighet", "Finne varians", "Sammenligne hendelser"],
                answer: 1,
            },
            {
                question: "Hvis $P(A)=0.4$ og $P(B)=0.5$ og de er uavhengige, hva er $P(A\\cap B)$?",
                options: ["0.9", "0.2", "0.45", "0.4"],
                answer: 1,
            },
        ],
    },
    {
        id: 3,
        title: "Stokastiske variabler og fordelinger",
        emoji: "📈",
        intro: "Stokastiske variabler knytter numeriske verdier til utfall i tilfeldige eksperimenter.",
        concepts: [
            { term: "Stokastisk variabel", definition: "Tilknytning av numerisk verdi til utfall." },
            { term: "Punktsannsynlighet", definition: "$P(X = x)$ for diskrete variabler." },
            { term: "Sannsynlighetstetthet", definition: "Funksjon $f(x)$ slik at $P(a\\le X\\le b)=\\int_a^b f(x)\\,dx$." },
            { term: "Kumulativ fordeling", definition: "$F(x)=P(X\\le x)$." },
            { term: "Kvantil", definition: "Den minste $x$ slik at $F(x) \\ge p$ for en gitt $p$." },
            { term: "Simultanfordeling", definition: "Felles fordeling $f_{X,Y}(x,y)$." },
            { term: "Betinget fordeling", definition: "$f_{X|Y}(x|y) = \\frac{f_{X,Y}(x,y)}{f_Y(y)}$." },
            { term: "Uavhengighet", definition: "To variabler er uavhengige hvis $f_{X,Y}(x,y) = f_X(x) f_Y(y)$." },
        ],
        formulas: [
            {
                title: "Sum sannsynligheter (diskret)",
                formula: "\\sum_i P(X = x_i) = 1",
                explanation: "Summen av alle sannsynligheter må være 1.",
                importance: "Høy",
            },
            {
                title: "Integral (kontinuerlig)",
                formula: "\\int_{-\\infty}^{\\infty} f(x) \\, dx = 1",
                explanation: "Arealet under tetthetsfunksjonen er 1.",
                importance: "Høy",
            },
            {
                title: "Kumulativ fordeling",
                formula: "F(x) = \\int_{-\\infty}^{x} f(t) \\, dt",
                explanation: "Sannsynlighet for at $X\\le x$.",
                importance: "Høy",
            },
            {
                title: "Tetthet som derivert",
                formula: "f(x) = \\frac{d}{dx} F(x)",
                explanation: "Relasjonen mellom tetthet og kumulativ fordeling.",
                importance: "Middels",
            },
            {
                title: "Uavhengighet",
                formula: "f_{X,Y}(x,y) = f_X(x) \\, f_Y(y)",
                explanation: "To variable er uavhengige dersom fellesfordeling faktoriseres.",
                importance: "Middels",
            },
        ],
        quiz: [
            {
                question: "Hva er forskjellen mellom diskret og kontinuerlig variabel?",
                options: [
                    "Diskret tar spesifikke verdier, kontinuerlig alle i et intervall",
                    "De er like",
                    "Diskret bruker integraler",
                    "Kontinuerlig kan ikke måles",
                ],
                answer: 0,
            },
            {
                question: "Hva er $\\int f(x) \\, dx$ over hele området?",
                options: ["∞", "0", "1", "Avhenger av x"],
                answer: 2,
            },
            {
                question: "Hva er $F(x)$?",
                options: ["PDF", "CDF", "Gjennomsnitt", "Varians"],
                answer: 1,
            },
            {
                question: "Hvordan finner man $f(x)$ fra $F(x)$?",
                options: ["Integrer", "Deriver", "Summer", "Divider"],
                answer: 1,
            },
            {
                question: "Når er $X$ og $Y$ uavhengige?",
                options: ["$f_{X,Y} = f_X + f_Y$", "$f_{X,Y} = f_X f_Y$", "$f_X = f_Y$", "$f_{X,Y} = 0$"],
                answer: 1,
            },
        ],
    }, // LITT UVISST HVOR BRA DET ER NED HERFRA
    {
        id: 4,
        title: "Forventningsverdi og varians",
        emoji: "📐",
        intro:
            "Forventningsverdi og varians beskriver gjennomsnitt og spredning av stokastiske variabler.",
        concepts: [
            { term: "Forventningsverdi", definition: "Det teoretiske gjennomsnittet: $E[X]$." },
            { term: "Varians", definition: "Spredningen rundt forventningsverdien: $Var(X)$." },
            { term: "Standardavvik", definition: "Kvadratroten av variansen: $\\sigma = \\sqrt{Var(X)}$." },
            { term: "Kovarians", definition: "Måler samvariasjon mellom $X$ og $Y$: $Cov(X,Y)$." },
            { term: "Korrelasjon", definition: "Standardisert kovarians: $\\rho = \\frac{Cov(X,Y)}{\\sigma_X\\sigma_Y}$." },
        ],
        formulas: [
            {
                title: "Forventningsverdi (diskret)",
                formula: "E[X] = \\sum_i x_i P(X = x_i)",
                explanation: "Vektet gjennomsnitt av mulige utfall.",
                importance: "Høy",
            },
            {
                title: "Forventningsverdi (kontinuerlig)",
                formula: "E[X] = \\int_{-\\infty}^{\\infty} x f(x)\\,dx",
                explanation: "Integrert forventning over tetthetsfunksjonen.",
                importance: "Høy",
            },
            {
                title: "Varians",
                formula: "Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2",
                explanation: "Måler gjennomsnittlig kvadrert avvik fra forventningen.",
                importance: "Høy",
            },
            {
                title: "Kovarians",
                formula: "Cov(X,Y) = E[(X - E[X])(Y - E[Y])]",
                explanation: "Positiv hvis X og Y tenderer til å øke sammen.",
                importance: "Middels",
            },
            {
                title: "Korrelasjon",
                formula: "\\rho_{XY} = \\frac{Cov(X,Y)}{\\sigma_X\\sigma_Y}",
                explanation: "Måler styrken på lineær sammenheng mellom X og Y.",
                importance: "Høy",
            },
        ],
        quiz: [
            {
                question: "Hva er forventningsverdien til $X$?",
                options: [
                    "Gjennomsnittlig verdi man forventer at $X$ tar",
                    "Største verdi $X$ kan ta",
                    "Medianen til $X$",
                    "Variansen til $X$",
                ],
                answer: 0,
            },
            {
                question: "Hva er sammenhengen mellom varians og standardavvik?",
                options: ["$\\sigma^2 = Var(X)$", "$\\sigma = Var(X)^2$", "$Var(X)=0$", "$Var(X)=\\sigma$"],
                answer: 0,
            },
            {
                question: "Når er to variabler ukorrelerte?",
                options: [
                    "Når $Cov(X,Y)=0$",
                    "Når $E[X]=E[Y]$",
                    "Når $Var(X)=Var(Y)$",
                    "Når $X=Y$",
                ],
                answer: 0,
            },
            {
                question: "Hva beskriver korrelasjonskoeffisienten?",
                options: [
                    "Retning og styrke på lineær sammenheng",
                    "Bare styrken på sammenhengen",
                    "Bare retningen",
                    "Variansen til X og Y",
                ],
                answer: 0,
            },
            {
                question: "Hva er $Var(aX + b)$?",
                options: ["$a^2 Var(X)$", "$Var(X)+b$", "$a Var(X)$", "$Var(X)$"],
                answer: 0,
            },
        ],
    },
    {
        id: 5,
        title: "Viktige diskrete fordelinger",
        emoji: "🎯",
        intro:
            "Dette kapittelet introduserer de vanligste diskrete sannsynlighetsfordelingene som brukes i praksis.",
        concepts: [
            { term: "Bernoulli-fordeling", definition: "Utfallsrom med to muligheter (suksess/fiasko)." },
            { term: "Binomisk fordeling", definition: "Antall suksesser i n uavhengige Bernoulli-forsøk." },
            { term: "Geometrisk fordeling", definition: "Antall forsøk inntil første suksess." },
            { term: "Poisson-fordeling", definition: "Antall hendelser i gitt tidsintervall med rate $\\lambda$." },
            { term: "Multinomial fordeling", definition: "Utvidelse av binomisk til flere kategorier." },
        ],
        formulas: [
            {
                title: "Binomisk sannsynlighet",
                formula: "P(X=k) = {n \\choose k} p^k (1-p)^{n-k}",
                explanation: "Sannsynligheten for k suksesser i n forsøk.",
                importance: "Høy",
            },
            {
                title: "Poisson-fordeling",
                formula: "P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}",
                explanation: "Modellerer antall hendelser i et gitt tidsrom.",
                importance: "Høy",
            },
            {
                title: "Bernoulli-fordeling",
                formula: "P(X=1)=p, \\quad P(X=0)=1-p",
                explanation: "Ett enkelt forsøk med sannsynlighet p for suksess.",
                importance: "Middels",
            },
            {
                title: "Forventning og varians (binomisk)",
                formula: "E[X]=np, \\quad Var(X)=np(1-p)",
                explanation: "Forventet antall suksesser og spredning.",
                importance: "Høy",
            },
            {
                title: "Poisson som grenseverdi",
                formula: "Bin(n,p) \\to Poisson(\\lambda=np) \\text{ når } n\\to\\infty, p\\to0",
                explanation: "Sammenheng mellom binomisk og Poisson.",
                importance: "Middels",
            },
        ],
        quiz: [
            {
                question: "Hva modellerer binomisk fordeling?",
                options: [
                    "Antall suksesser i n uavhengige forsøk",
                    "Tid mellom hendelser",
                    "Gjennomsnittlig avvik",
                    "Sannsynlighet for én hendelse",
                ],
                answer: 0,
            },
            {
                question: "Hva er forventningen til $X\\sim Bin(n,p)$?",
                options: ["$np$", "$n/p$", "$p/n$", "$p(1-p)$"],
                answer: 0,
            },
            {
                question: "Hva er parameteren i en Poisson-fordeling?",
                options: ["$\\lambda$", "$p$", "$n$", "$k$"],
                answer: 0,
            },
            {
                question: "Hva er variansen til $X\\sim Poisson(\\lambda)$?",
                options: ["$\\lambda$", "$\\sqrt{\\lambda}$", "$1/\\lambda$", "$\\lambda^2$"],
                answer: 0,
            },
            {
                question: "Når brukes Poisson-approksimasjon til binomisk fordeling?",
                options: [
                    "Når n er stor og p er liten",
                    "Når n er liten",
                    "Når p≈0.5",
                    "Når X er kontinuerlig",
                ],
                answer: 0,
            },
        ],
    },
    {
        id: 6,
        title: "Viktige kontinuerlige fordelinger",
        emoji: "📉",
        intro:
            "Dette kapittelet handler om de mest brukte kontinuerlige sannsynlighetsfordelingene.",
        concepts: [
            { term: "Uniform fordeling", definition: "Alle verdier i et intervall er like sannsynlige." },
            { term: "Eksponentialfordeling", definition: "Tid mellom hendelser i Poisson-prosess." },
            { term: "Normalfordeling", definition: "Klokkeformet fordeling bestemt av $\\mu$ og $\\sigma$." },
            { term: "Standard normalfordeling", definition: "$Z\\sim N(0,1)$, brukes til standardisering." },
            { term: "Sentralgrenseteoremet", definition: "Summen av mange uavhengige variabler blir tilnærmet normalfordelt." },
        ],
        formulas: [
            {
                title: "Uniform fordeling",
                formula: "f(x)=\\frac{1}{b-a}, \\quad a\\le x\\le b",
                explanation: "Konstant tetthet over intervallet [a,b].",
                importance: "Middels",
            },
            {
                title: "Eksponentialfordeling",
                formula: "f(x)=\\lambda e^{-\\lambda x}, \\quad x\\ge0",
                explanation: "Tid til neste hendelse i Poisson-prosess.",
                importance: "Høy",
            },
            {
                title: "Normalfordeling",
                formula: "f(x)=\\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)}",
                explanation: "Vanligste kontinuerlige fordeling, klokkeformet.",
                importance: "Høy",
            },
            {
                title: "Standardisering",
                formula: "Z=\\frac{X-\\mu}{\\sigma}",
                explanation: "Transformerer $X\\sim N(\\mu,\\sigma^2)$ til standard normal.",
                importance: "Høy",
            },
            {
                title: "Sentralgrenseteoremet (CLT)",
                formula: "\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\to N(0,1)",
                explanation: "Gjennomsnitt av mange uavhengige observasjoner blir tilnærmet normalfordelt.",
                importance: "Høy",
            },
        ],
        quiz: [
            {
                question: "Hva er tetthetsfunksjonen for $U(a,b)$?",
                options: [
                    "$1/(b-a)$",
                    "$b-a$",
                    "$a/b$",
                    "Avhenger av x",
                ],
                answer: 0,
            },
            {
                question: "Hva er forventningen for $X\\sim N(\\mu,\\sigma^2)$?",
                options: ["$\\mu$", "$\\sigma$", "$0$", "$1$"],
                answer: 0,
            },
            {
                question: "Hva beskriver CLT?",
                options: [
                    "Summen av mange uavhengige variabler er tilnærmet normalfordelt",
                    "Variansen blir uendelig",
                    "Alle fordelinger blir like",
                    "Det finnes ingen variasjon",
                ],
                answer: 0,
            },
            {
                question: "Hva er $E[X]$ for $X\\sim Exp(\\lambda)$?",
                options: ["$1/\\lambda$", "$\\lambda$", "$0$", "$e^{-\\lambda}$"],
                answer: 0,
            },
            {
                question: "Hva er standardisering?",
                options: [
                    "Å trekke fra gjennomsnittet og dele på standardavviket",
                    "Å multiplisere med gjennomsnittet",
                    "Å kvadrere data",
                    "Å gjøre fordelingen uniform",
                ],
                answer: 0,
            },
        ],
    },
    {
        id: 7,
        title: "Funksjoner av stokastiske variabler",
        emoji: "🔀",
        intro:
            "Ofte er vi interessert i sannsynlighetsfordelingen til en funksjon av stokastiske variabler.",
        concepts: [
            { term: "Transformasjon", definition: "Hvis $Y=g(X)$, finner vi fordelingen til Y basert på X." },
            { term: "Jacobian-metoden", definition: "Brukes ved transformasjon mellom flere variable." },
            { term: "Summasjon", definition: "Når vi legger sammen uavhengige variable, konvolverer vi fordelinger." },
            { term: "Lineær kombinasjon", definition: "Eks. $aX+bY$, ofte brukt i regresjon og estimering." },
            { term: "Forventning av funksjon", definition: "$E[g(X)] = \\int g(x)f(x)dx$." },
        ],
        formulas: [
            {
                title: "Transformasjon for kontinuerlig X",
                formula: "f_Y(y) = f_X(g^{-1}(y)) \\left| \\frac{d}{dy} g^{-1}(y) \\right|",
                explanation: "Endrer variabel i tetthetsfunksjonen.",
                importance: "Høy",
            },
            {
                title: "Summen av uavhengige variable",
                formula: "f_{X+Y}(z) = \\int f_X(x)f_Y(z-x)dx",
                explanation: "Konvolusjon av fordelinger.",
                importance: "Høy",
            },
            {
                title: "Lineær transformasjon",
                formula: "E[aX+b]=aE[X]+b",
                explanation: "Forventningen påvirkes lineært.",
                importance: "Middels",
            },
        ],
        quiz: [
            {
                question: "Hva beskriver en transformasjon $Y=g(X)$?",
                options: [
                    "En ny stokastisk variabel basert på X",
                    "Et deterministisk tall",
                    "En differensiallikning",
                    "Et datasett",
                ],
                answer: 0,
            },
            {
                question: "Hva er $E[aX+b]$?",
                options: ["$aE[X]+b$", "$E[X]+b$", "$aE[X]$", "$E[X]$"],
                answer: 0,
            },
            {
                question: "Hva brukes Jacobian til?",
                options: [
                    "Å endre mål ved transformasjon av flere variable",
                    "Å finne gjennomsnitt",
                    "Å løse ligninger",
                    "Å beregne sannsynlighet direkte",
                ],
                answer: 0,
            },
            {
                question: "Hva betyr konvolusjon?",
                options: [
                    "Sammenslåing av fordelinger ved addisjon",
                    "Multiplikasjon av forventninger",
                    "Integrasjon av konstante funksjoner",
                    "Sammenligning av uavhengighet",
                ],
                answer: 0,
            },
            {
                question: "Hva er $E[g(X)]$?",
                options: [
                    "$\\int g(x)f(x)dx$",
                    "$g(E[X])$",
                    "$\\sum g(x)$",
                    "$E[X]\\cdot g(x)$",
                ],
                answer: 0,
            },
        ],
    },
] as const;
