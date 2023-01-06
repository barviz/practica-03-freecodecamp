import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const citas = [
    {
        text: `“Nací para esto, para asumir los grandes desafíos.”`,
        author: "Marcelo Gallardo"
    },
    {
        text: `“River está por encima de todo: primero River, segundo River y tercero River”`,
        author: "Muñeco Gallardo"
    },
    { text: `“Ahora que venga el que sea”`, author: "Muñeco Gallardo" },
    {
        text: `“Que la gente crea porque tiene con qué creer.”`,
        author: "Marcelo Daniel Gallardo"
    },
    { text: ` “No hay nada más que esto.”`, author: "Marcelo 'Muñeco' Gallardo" },
    {
        text: `“El partido de mi vida ya lo jugué, fue en Madrid.”`,
        author: "Marcelo Gallardo"
    },
    {
        text: `“Tengo que sincerarme, estos dos meses que nosotros venimos jugando muy mal fue parte de la estrategia.”`,
        author: "Marcelo Gallardo"
    },
    {
        text: `“En estos tiempos aprendimos a jugar contra Boca. Nos hemos hecho fuertes mentalmente.”`,
        author: "Muñeco Gallardo"
    },
    { text: `“Elijo seguir estando.”`, author: "Marcelo Daniel Gallardo" },
    {
        text: ` “Teníamos todo para pasarla bien y la pasamos como el culo.”`,
        author: "Marcelo 'Muñeco' Gallardo"
    }
];

const CardQuote = ({ quote, handleNewQuote }) => (
    <div id="quote-box">
        <p id="text">{quote.text}</p>
        <h2 id="author">{quote.author}</h2>
        <div class="acciones">
            <button id="new-quote" class="button" onClick={handleNewQuote}>
                Nueva Cita
            </button>
            <a
                href="https://twitter.com/intent/tweet"
                id="tweet-quote"
                target="_blank"
            >
                Twittear
            </a>
        </div>
    </div>
);

const indAleatorio = (max) =>
    Math.round(Math.random() * (citas.length - 1 - 0) + 0);

const App = () => {
    const [quote, setQuote] = React.useState(citas[indAleatorio()]);

    const handleNewQuote = () => {
        setQuote(citas[indAleatorio()]);
    };

    return (
        <div class="main">
            <CardQuote handleNewQuote={handleNewQuote} quote={quote} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#app"));