function criptografar(mensagem, chave) {

	const alfabeto = [
		'a', 'b', 'c', 'd', 'e',
		 'f', 'g', 'h', 'i', 'j', 
		'k', 'l', 'm', 'n', 'o', 
		'p', 'q', 'r', 's', 't', 
		'u', 'v', 'w', 'x', 'y', 
		'z'];

	let criptografada = '';

	for (let i = 0; i < mensagem.length; i++) {

		let letra_criptografada = alfabeto[(alfabeto.indexOf(mensagem[i]) + alfabeto.indexOf(chave[i % chave.length])) % 26];
		criptografada += letra_criptografada;
	}

	return(criptografada);
}