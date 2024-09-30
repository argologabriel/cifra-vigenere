function criptografar(mensagem, chave) {

	const alfabeto = [
		'a', 'b', 'c', 'd', 'e',
		 'f', 'g', 'h', 'i', 'j', 
		'k', 'l', 'm', 'n', 'o', 
		'p', 'q', 'r', 's', 't', 
		'u', 'v', 'w', 'x', 'y', 
		'z'];

	let criptografada = '';
	let espacos_vazios = 0;

	for (let i = 0; i < mensagem.length; i++) {
		
		let maiuscula = false;
		if (mensagem[i] != alfabeto[alfabeto.indexOf(mensagem[i].toLowerCase())]) {
			maiuscula = true;
		}

		if (mensagem[i] == ' ') {
			espacos_vazios ++;
			criptografada += ' ';
		} 
		else {
			let letra_criptografada = alfabeto[(alfabeto.indexOf(mensagem[i].toLowerCase()) + alfabeto.indexOf(chave[(i - espacos_vazios) % chave.length].toLowerCase())) % 26];

			if (maiuscula) {
				criptografada += letra_criptografada.toUpperCase();
			}
			else{
				criptografada += letra_criptografada;
			}
		}
	}

	return(criptografada);
}