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
4. Como adotante, quero me cadastrar na plataforma e visualizar os animais disponíveis.  
5. Como adotante, quero visualizar as informações completas dos animais para adoção, como raça, gênero e tipo.

Doador
1. Como doador, quero fazer upload das fotos dos animais disponíveis para adoção.  
2. Como doador, quero especificar informações detalhadas sobre o animal, como raça e tipo.  
3. Como doador, quero conversar diretamente com o adotante para esclarecer dúvidas e combinar detalhes da entrega.  
4. Como doador, quero visualizar o perfil e as informações do adotante interessado. //Sugestão de implementação  
5. Como doador, quero cadastrar mais de um animal para adoção.  


2. Cenários de Teste

História 1
Título: Disponibilizar animal para adoção
Ator: Doador  
Cenário Principal:
1. Doador acessa seu perfil.  
2. Clica no botão "Disponibilizar animal para adoção".  
3. Preenche todos os campos obrigatórios com as informações do animal.  
4. Faz upload de até 5 fotos do animal.   
5. Clica em "Cadastrar".  
6. O sistema salva as informações e exibe a mensagem "Animal cadastrado com sucesso!".  

Cenários Alternativos:
- 4a: Se o upload das fotos exceder 5 unidades → sistema inibe o usuário de adicionar mais fotos.  
- 5a: Se algum campo obrigatório não for preenchido → sistema exibe a mensagem para preencher determinado campo.    



História 2
Título: Visualizar animais disponíveis para adoção
Ator: Adotante  
Cenário Principal:
1. Adotante acessa a página inicial e a aba "Animais disponíveis para adoção".  
2. Adotante filtra os animais por gênero, tipo ou nome. //No sistema não está funcionando a aba de filtragem
3. Seleciona um animal para visualizar clicando em "Saiba mais".  
4. Sistema exibe foto, tipo, gênero, raça, descrição do animal e o botão "Entrar em contato com o dono".   


História 3
Título: Enviar mensagem ao doador
Ator: Adotante  
Cenário Principal:
1. Visualizar informações de um animal.
2. Adotante escreve a mensagem para ser enviada ao dono.
3. Clica no botão de enviar a mensagem.  
4. A mensagem é enviada contendo hora e data de envio.  

Cenários Alternativos:
-3a: Se o campo da mensagem estiver vazio → sistema exibe "Digite uma mensagem".  
-4a: Se o doador não tiver mais o animal disponível → o sistema ainda permite a troca de mensagens.  


História 4 
Título: Criar um novo usuário
Ator: Adotante ou Doador  

Cenário Principal:
1. Usuário acessa a página de cadastro.  
2. Preenche nome, e-mail, senha e confirmação da senha.
3. Clica em "Cadastrar".  
4. Sistema confirma cadastro.  

Cenários Alternativos:
- 2a: Campos obrigatórios não preenchidos → mensagem personalizada para cada campo não preenchido.  
- 2b: E-mail já cadastrado → mensagem "E-mail já cadastrado".
- 2C: Senha não coincidindo -> mensagem do sistema "Senhas não coincidem"


História 5
Título: Editar dados pessoais
Ator: Usuário

Cenário Principal:
1. Usuário acessa a aba "Editar dados pessoais".
2. O sistema exibe campos para a possibilidade de trocar nome e e-mail.
3. Um botão de trocar senha é disponibilizado.
4. O usuário preenche a nova senha e a confirma.
5. Clica em "salvar alterações".
6. O sistema exibe a mensagem "Dados editados com sucesso!"

Cenários Alternativos:
4a. Se as senhas não coincidirem, o sistema avisa o usuário com a mensagem "As senhas não coincidem".
6a. Se o usuário confirmar alterações mesmo sem editar nada, a mensagem ainda aparece.

Observações
- As histórias e cenários foram elaborados com base nas funcionalidades previstas no código disponível no repositório.  
 

 
