import {criptografar} from "./criptografar.js";
import {descriptografar} from "./descriptografar.js";

// Criptografar

const c_input_mensagem = document.getElementById("c_mensagem");
const c_input_chave = document.getElementById("c_chave");

const btn_criptografar = document.getElementById("btn_criptografar");

btn_criptografar.addEventListener('click', function() {
	const c_mensagem = c_input_mensagem.value;
	const c_chave = c_input_chave.value;
	
	const criptografada = document.getElementById("c_criptografada");
	criptografada.value = criptografar(c_mensagem, c_chave);
})  

// Descriptografar

const d_input_criptografada = document.getElementById("d_criptografada");
const d_input_chave = document.getElementById("d_chave");

const btn_descriptografar = document.getElementById("btn_descriptografar");

btn_descriptografar.addEventListener('click', async function() {
	const d_criptografada = d_input_criptografada.value;
	const d_chave = d_input_chave.value;
	
	const d_mensagem = document.getElementById("d_mensagem");
	d_mensagem.value = await descriptografar(d_criptografada, d_chave);
})