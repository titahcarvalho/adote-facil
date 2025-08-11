Especificação de Requisitos

Informações Gerais
Nome: Adote-Fácil  
Função: Plataforma que visa compartilhar informações sobre a disponibilidade para adoção de animais.  
Usuários: Doador e Adotante.  


1. Histórias de Usuário

Adotante
1. Como adotante, quero visualizar fotos dos animais para adoção, para conhecer melhor as opções disponíveis.  
2. Como adotante, quero conversar com o doador diretamente por mensagens, para saber mais detalhes do animal e possíveis negociações de busca.  
3. Como adotante, quero criar um perfil para também me tornar doador.  
4. Como adotante, quero me cadastrar na plataforma e receber notificações de novos animais disponíveis.  
5. Como adotante, quero visualizar as informações completas dos animais para adoção, como idade, raça e localização.

Doador
1. Como doador, quero fazer upload das fotos dos animais disponíveis para adoção.  
2. Como doador, quero especificar informações detalhadas sobre o animal, como porte, idade, raça e histórico de saúde.  
3. Como doador, quero conversar diretamente com o adotante para esclarecer dúvidas e combinar detalhes da entrega.  
4. Como doador, quero visualizar o perfil e as informações do adotante interessado.  
5. Como doador, quero cadastrar mais de um animal para adoção.  


2. Cenários de Teste

História 1
Título: Criar anúncio de novo animal
Ator: Doador  
Cenário Principal:
1. Doador acessa seu perfil.  
2. Clica no botão "Cadastrar novo animal".  
3. Preenche todos os campos obrigatórios com as informações do animal.  
4. Faz upload de até 5 fotos do animal.  
5. Marca a opção "Animal disponível".  
6. Clica em "Confirmar".  
7. O sistema salva as informações e exibe a mensagem "Animal cadastrado com sucesso".  

Cenários Alternativos:
- 3a: Se o upload das fotos exceder 5 unidades → sistema exibe a mensagem "Quantidade de foto excedido".  
- 5a: Se algum campo obrigatório não for preenchido → sistema exibe a mensagem "Preencha todos os campos".  
- 4a: Se o formato da foto não for compatível (ex.: `.exe`, `.txt`) → sistema exibe a mensagem "Formato de arquivo inválido".  



História 2
Título: Visualizar informações de um animal
Ator: Adotante  
Cenário Principal:
1. Adotante acessa a página inicial e a lista de animais disponíveis.  
2. Adotante filtra os animais por gênero, tipo ou nome.
3. Seleciona um animal para visualizar.  
4. Sistema exibe foto, nome, idade, raça, porte, localização e descrição do animal.  

Cenários Alternativos:
- 2a: Se o animal tiver sido removido antes do acesso → sistema exibe a mensagem "Este animal não está mais disponível".  


História 3
Título: Enviar mensagem ao doador
Ator: Adotante  
Cenário Principal:
1. Adotante acessa a página de um animal.  
2. Clica no botão "Enviar mensagem ao doador".  
3. Digita a mensagem e clica em "Enviar".  
4. Sistema confirma envio e exibe "Mensagem enviada com sucesso".  

Cenários Alternativos:
-3a: Se o campo da mensagem estiver vazio → sistema exibe "Digite uma mensagem".  
-4a: Se o doador não tiver mais o animal disponível → sistema exibe "Este animal não está mais disponível".  


História 4 
Título: Criar um novo usuário
Ator: Adotante ou Doador  

Cenário Principal:
1. Usuário acessa a página de cadastro.  
2. Preenche nome, e-mail e senha.
3. Clica em "Cadastrar".  
4. Sistema confirma cadastro.  

Cenários Alternativos:
- 2a: Campos obrigatórios não preenchidos → mensagem "Preencha todos os campos".  
- 2b: E-mail já cadastrado → mensagem "Este e-mail já está em uso".  

Observações
- As histórias e cenários foram elaborados com base nas funcionalidades previstas no código disponível no repositório.  
 
