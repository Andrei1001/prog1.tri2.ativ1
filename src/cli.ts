import TodoListClass, { Item } from "./core";


const todoList = new TodoListClass("todolist.Json");
const params = process.argv;
const command = params[2];

if (command === "add") {
    const value = params[3];
    if(!value){
        console.error("Valor do item é obrigado");
        process.exit(1);
    }
    try{
           await todoList.addItem(new Item(value));
    }
    catch(error){
        console.error("Erro ao adicionar Item:", error);
        process.exit(10);
    }
    console.log(`Deu certo "${value}" `);
    process.exit(0);
}
if(command)
    console.log(`Comando não reconhecido`);


console.log("não entrou em if nenhum");