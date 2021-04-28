let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = "Sim";

let info2 = {
    personagem: 'TIo Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim"
};

//console.log("Bem-vinda, " + info.personagem);
//console.log(info);

// for (let key in info) {
//     console.log(key);
// };

// for (let value in info) {
//     console.log(info[value]);
// };

// for (let value in info) {
//     for (let value2 in info2) {
//         console.log(info[value] + " e " + info2[value]);
//     };
// ;} 

// GABARITO

for (let key in info) {
    if (key === "recorrente" && info.recorrente === "Sim" && info2.recorrente === "Sim") {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[key] + " e " + info2[key]);
    }
}