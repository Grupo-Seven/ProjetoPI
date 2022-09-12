const {body} = require("express-validator");// pega o body para conseguir fazer a validação com express-validator 

const validations = [

<<<<<<< HEAD
  body("username")
=======
  body("username2")
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
  .notEmpty().withMessage("O nome deve ser preenchido")
  .isString().withMessage("Só é permitido letras"),
  
  
<<<<<<< HEAD
  body("email")
=======
  body("email2")
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
  .notEmpty().withMessage("O e-mail deve ser preenchido")
  .isEmail().withMessage("O e-mail deve ser preenchido"),
  
  
<<<<<<< HEAD
  body("cpf")
=======
  body("cpf2")
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
  .notEmpty().withMessage("O CPF deve ser preenchido")
  .isNumeric().withMessage("Só é permitido números")
  .isLength({min:11,max:11}).withMessage("O CPF deve conter 11 números"),

  
<<<<<<< HEAD
  body("telefone")
  .notEmpty().withMessage("O telefone deve ser preenchido")
  .isMobilePhone().withMessage("O telefone deve ser preenchido"),
  
  body("password")
  .notEmpty().withMessage("A senha deve ser preenchido")
  .isLength({min:6,max:15}).withMessage("Senha entre 6 caracteres e  15 caracteres"),
  
  body("passwordConfirmation")
=======
  body("telefone2")
  .notEmpty().withMessage("O telefone deve ser preenchido")
  .isMobilePhone().withMessage("O telefone deve ser preenchido"),
  
  body("password2")
  .notEmpty().withMessage("A senha deve ser preenchido")
  .isLength({min:6,max:15}).withMessage("Senha entre 6 caracteres e  15 caracteres"),
  
  body("passwordConfirmation2")
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
  .notEmpty().withMessage("A senha deve ser confirmada")
  .isLength({min:6,max:15}).withMessage("A senha deve ser confirmada")
  
  ]

  module.exports = validations;