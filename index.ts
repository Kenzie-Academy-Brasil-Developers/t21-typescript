//Typescript ele tem TUDOOOOOOOOOO que o Javascript tem

import { Person, User } from "./interfaces";

// Previnir problemas

//import { name, person } from "./variables";

function sum(a: number, b: number): number {
   return a + b;
}

sum(1, 2);
sum(1, 123);

//sum(1);

// Tipos primitivos = Dados primitivos
// string, number, boolean, array e object

function sayMyName(name: string) {
   console.log(name);
}

sayMyName("Alex");

// DEVE (SEMPRE)
// Parâmetros de função
// Listas vazias deverão ser tipadas
// Qualquer situação que haja variação de tipo
// PODE
// Variáveis
// Retornos de função

// Infererência - "Inteligencia artificial" deduzir os tipos para nós.

let name = "Alex";
let nameList = ["Alex", "Julia", "Thiago", "Lucas", "Camille", "Amauri"];
let ageList: number[] = [];
let user: User | null = null;

// Interface - recurso do Typescript voltando para descrever objetos

// Vantagem - melhora a qualidade de feedback (auto complete e prevenção)
// Desvantagem - o código ficará muito verboso e varios de tipagem podem prejudica na refatoração do código no futuro

export const person: Person = {
    name: "Alex",
    age: 33,
    isOkay: false,
    petName: "Luz",
}

function printPerson({ name, age, isOkay }: Person){
    console.log(`Nome ${name}`);
    console.log(`Idade ${age}`);
    if(!isOkay){
        console.log("Tá doentinho!")
    }
}

printPerson(person);