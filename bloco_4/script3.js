let situacao = "aprovado(a)";

switch (situacao) {
    case "aprovado(a)":
        console.log("Você foi aprovado(a)");
        break;
    case "reprovado(a)":
        console.log("Você foi reprovado(a)");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    default:
        console.log("Não se aplica!");
}