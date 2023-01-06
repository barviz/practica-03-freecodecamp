import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const elemCalc = [
    { id: "clear", value: "AC" },
    { id: "divide", value: "/" },
    { id: "multiply", value: "x" },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "subtract", value: "-" },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "add", value: "+" },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "equals", value: "=" },
    { id: "zero", value: 0 },
    { id: "decimal", value: "." },
];

const operadores = ["AC", "/", "x", "+", "-", "="];

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Display = ({ input, output }) => (
    <div className="output">
        <span className="resultado">{output}</span>
        <span id="display" className="input">{input}</span>
    </div>
);

const Tecla = ({ teclaData: { id, value }, handleInput }) => (
    <button id={id} onClick={() => handleInput(value)}>
        {value}
    </button>
);

const Teclado = ({ handleInput }) => (
    <div className="teclas">
        {elemCalc.map((tecla) => (
            <Tecla tecla={tecla.id} teclaData={tecla} handleInput={handleInput} />
        ))}
    </div>
);

const App = () => {
    const [input, setInput] = React.useState("0");
    const [output, setOutput] = React.useState("");
    const [calculadoraData, setCalculadoraData] = React.useState("");

    const handleSubmit = () => {
        console.log({ calculadoraData });

        const total = eval(calculadoraData);
        setInput(total);
        setOutput(`${total} = ${total}`);
        setCalculadoraData(`${total}`);
    };

    const handleClear = () => {
        setInput("0");
        setCalculadoraData("");
    };

    const handleNumbers = (value) => {
        if (!calculadoraData.length) {
            setInput(`${value}`);
            setCalculadoraData(`${value}`);
        } else {
            if (value === 0 && (calculadoraData === "0" || input === "0")) {
                setCalculadoraData(`${calculadoraData}`);
            } else {
                const lastChat = calculadoraData.charAt(calculadoraData.length - 1);
                const isLastChatOperator =
                    lastChat === "*" || operadores.includes(lastChat);

                setInput(isLastChatOperator ? `${value}` : `${input}${value}`);
                setCalculadoraData(`${calculadoraData}${value}`);
            }
        }
    };

    const dotOperator = () => {
        const lastChat = calculadoraData.charAt(calculadoraData.length - 1);
        if (!calculadoraData.length) {
            setInput("0.");
            setCalculadoraData("0.");
        } else {
            if (lastChat === "*" || operadores.includes(lastChat)) {
                setInput("0.");
                setCalculadoraData(`${calculadoraData} 0.`);
            } else {
                setInput(
                    lastChat === "." || input.includes(".") ? `${input}` : `${input}.`
                );
                const formattedValue =
                    lastChat === "." || input.includes(".")
                        ? `${calculadoraData}`
                        : `${calculadoraData}.`;
                setCalculadoraData(formattedValue);
            }
        }
    };


    const handleOperators = (value) => {
        if (calculadoraData.length) {
            setInput(`${value}`);
            const beforeLastChat = calculadoraData.charAt(calculadoraData.length - 2);

            const beforeLastChatIsOperator =
                operadores.includes(beforeLastChat) || beforeLastChat === "*";

            const lastChat = calculadoraData.charAt(calculadoraData.length - 1);

            const lastChatIsOperator = operadores.includes(lastChat) || lastChat === "*";

            const validOp = value === "x" ? "*" : value;
            if (
                (lastChatIsOperator && value !== "-") ||
                beforeLastChatIsOperator && lastChatIsOperator
            ) {
                if (beforeLastChatIsOperator) {
                    const updatedValue = `${calculadoraData.substring(
                        0,
                        calculadoraData.length - 2
                    )}${value}`;
                    setCalculadoraData(updatedValue);
                } else {
                    setCalculadoraData(`${calculadoraData.substring(0, calculadoraData.length - 1)}${validOp}`);
                }
            } else {
                setCalculadoraData(`${calculadoraData}${validOp}`);
            }
        }
    };

    const handleInput = (value) => {
        const number = numeros.find((num) => num === value);
        const operator = operadores.find((op) => op === value);

        switch (value) {
            case "=":
                handleSubmit();
                break;
            case "AC":
                handleClear();
                break;
            case number:
                handleNumbers(value);
                break;
            case ".":
                dotOperator(value);
                break;
            case operator:
                handleOperators(value);
                break;
            default:
                break;
        }
    };

    const handleOutput = () => {
        setOutput(calculadoraData);
    };

    React.useEffect(() => {
        handleOutput();
    }, [calculadoraData]);

    return (
        <div className="container">
            <div className="calculadora">
                <Display input={input} output={output} />
                <Teclado handleInput={handleInput} />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))