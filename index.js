import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
 
const diretor = new Diretor("Caio", 11000, 44433322211);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Felipe", 6000, 55566677788);
gerente.cadastrarSenha("1234")

const cliente = new Cliente("Larissa" , 77766655544, "9876");
const gerenteEstaLogado = SistemaAutenticacao.login( gerente, "1234" );
const diretorEstaLogado = SistemaAutenticacao.login( diretor, "123456" );

const clienteEstaLogado = SistemaAutenticacao.login( cliente, "9876" );


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);