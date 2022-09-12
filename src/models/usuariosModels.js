const fs = require('fs');
const path = require('path');

const usuariosPath = path.join(__dirname, '../database/usuarios.json'); //pega os dados do JSON usuarios

const allUsers = {
  
  findAllUsers(){
    return JSON.parse(fs.readFileSync(usuariosPath, "utf-8")); // transforma o JSON e uma array e só lê eles

  },

  datesUsers(){
    return JSON.parse(fs.appendFileSync(usuariosPath, "utf-8")); // transforma o JSON e uma array e cria um novo dado na array usuarios
  },

<<<<<<< HEAD
  armazena(dates){
    
  let usuarios = allUsers.findAllUsers()
=======

  procuraCPF(receivedcpf){
   
    let procuraUsuario = allUsers.findAllUsers();
    let procuraCPF = procuraUsuario.find(item => item.cpf2 == receivedcpf); // pega o cpf e compara com o passado no parametro
    return procuraCPF

  },

  procuraNoBody (campo,valor){
    let procuraUsuario = allUsers.findAllUsers();
    let procuraCampo = procuraUsuario.find(item => item[campo] == valor); // compara o que recebi no campo com o que esta na array
    return procuraCampo

  },

  armazena(dates){
    
  let usuarios = allUsers.findAllUsers();
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
   const users  = {
    ...dates,
    id: usuarios.length + 1
   }

   usuarios.push(users)
   fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, ' '));
   return usuarios;

  },

  atualiza(receivedcpf,receivedcpfEdit) {
     let cpfEdit = this.findAllUsers(); // pega a array toda
<<<<<<< HEAD
     let cpfEditBeingUpdated = cpfEdit.find(item => item.cpf == receivedcpf); // pega o cpf e compara com o passado no parametro
    
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////
    cpfEditBeingUpdated.username = receivedcpfEdit.username;
    cpfEditBeingUpdated.email    = receivedcpfEdit.email;
    cpfEditBeingUpdated.cpf      = receivedcpfEdit.cpf;
    cpfEditBeingUpdated.telefone = receivedcpfEdit.telefone
    cpfEditBeingUpdated.password = receivedcpfEdit.password
    cpfEditBeingUpdated.passwordConfirmation = receivedcpfEdit.passwordConfirmation
=======
     let cpfEditBeingUpdated = cpfEdit.find(item => item.cpf2 == receivedcpf); // pega o cpf e compara com o passado no parametro
    
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////
    cpfEditBeingUpdated.username2 = receivedcpfEdit.username2;
    cpfEditBeingUpdated.email2   = receivedcpfEdit.email2;
    cpfEditBeingUpdated.cpf2      = receivedcpfEdit.cpf2;
    cpfEditBeingUpdated.telefone2 = receivedcpfEdit.telefone2
    cpfEditBeingUpdated.password2 = receivedcpfEdit.password2
    cpfEditBeingUpdated.passwordConfirmation2 = receivedcpfEdit.passwordConfirmation2
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
   
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////


    fs.writeFileSync(usuariosPath, JSON.stringify(cpfEdit, null, ' ')); // salva os dados na array 
   
  },

  delete(receivedcpf){
    let cpfEdit = this.findAllUsers(); // pega a array toda
<<<<<<< HEAD
    let reduceUsers = cpfEdit.filter(item => item.cpf != receivedcpf);
=======
    let reduceUsers = cpfEdit.filter(item => item.cpf2 != receivedcpf);
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb

    fs.writeFileSync(usuariosPath, JSON.stringify(reduceUsers, null, ' ')); // salva os dados na array 
  }
 
 
}
<<<<<<< HEAD
module.exports = allUsers;
=======

//console.log(allUsers.procuraNoBody("email","alxnvn@yahoo.com"));

module.exports = allUsers;
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
