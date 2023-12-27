# Informações de Anime Para PDF (automatizado)

## Descrição

Inspirado no projeto de Felipe Dechamps, o "Criação de Informações de Anime automatizado" é um sistema inovador que utiliza uma série de robôs para automatizar a coleta de informações sobre animes. Ao receber o nome de um anime como entrada do usuário, os robôs iniciam uma pesquisa abrangente em diversas fontes.

O processo começa com o robô de entrada, que formata os dados necessários. 
Em seguida, o robô de texto consome os dados da IBM Watson para formatar as palavras-chave do texto. Após isso, o próximo robô realiza a pesquisa dessas informações. 
O robô subsequente busca imagens relacionadas no Google. 
No final, após todas essas etapas, um último robô formata e gera todas essas informações em um PDF detalhado. 
Este projeto representa um avanço significativo na maneira como os fãs de anime podem acessar e consumir informações sobre seus animes favoritos.

## Instalação

Siga os passos abaixo para instalar e configurar este projeto:

1. Clone o repositório: `git clone https://github.com/jvitorn/test-robots-thread.git`
2. Entre no diretório do projeto: `cd test-robots-thread`
3. Instale as dependências: 
    - algorithmia: `npm install algorithmia@0.3.10`
    - axios: `npm install axios@0.21.4`
    - googleapis: `npm install googleapis@87.0.0`
    - ibm: `npm install ibm@0.0.1`
    - ibm-watson: `npm install ibm-watson@6.2.1`
    - image-downloader: `npm install image-downloader@4.0.3`
    - readline-sync: `npm install readline-sync@1.4.10`
    - sbd: `npm install sbd@1.0.19`

4. Configure as credenciais:
    - Para a biblioteca Algorithmia, você precisa de uma chave de API. Você pode obter essa chave na sua conta Algorithmia.
    - Para a biblioteca Googleapis, você precisa de credenciais de autenticação. Isso pode ser uma chave de API ou um ID de cliente OAuth 2.0. Você pode obter essas credenciais na sua conta Google Cloud.
    - Para as bibliotecas IBM e IBM-Watson, você precisa de uma chave de API da IBM Cloud. Você pode obter essa chave na sua conta IBM Cloud.

## Licença

Este projeto é open source e sem fins lucrativos. Ele é distribuído sob a licença MIT, que é uma licença permissiva de código aberto. 
Isso significa que você tem permissão para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software, desde que inclua o aviso de direitos autorais original e o aviso de permissão em todas as cópias ou partes substanciais do software.
