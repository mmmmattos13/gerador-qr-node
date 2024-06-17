import chalk from "chalk";


const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode: ")
    },
    {
        name: "type",
        description: chalk.yellow("Escokha entre o tipo de QRCode: 1-Normal 2-Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        require: true
    }
];

export default promptQRCode;