export async function descriptografar(criptografada, chave) {

	const url = 'https://desafio9.onrender.com/decrypt_message';
	const dados_enviados = {
		"encrypted_message": criptografada,
		"keyword": chave
	}

	const resultado = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dados_enviados)
	});

	const dados_recebidos = await resultado.json();

	return(dados_recebidos['decrypted_message']);
}