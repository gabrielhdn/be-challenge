![](https://i.imgur.com/tJ2RKzL.png)

## BeTalent - Projeto de teste prático

Seja bem-vindo (a) ao repositório com a resolução do desafio front-end da BeTalent! Optei por React, TypeScript e Styled Components como ferramentas para o desenvolvimento da aplicação. Siga os passos abaixo para executá-la localmente da forma correta.

## Acessando o repositório

Primeiro, clone este repositório para a sua máquina e acesse a pasta be-challenge. Você pode fazer isso com os seguintes comandos:

```
git clone https://github.com/gabrielhdn/be-challenge.git
cd be-challenge/
```

## Criando o arquivo .env

O projeto utiliza um arquivo de variáveis de ambiente para simular a proteção de endpoints em uma aplicação real. Para utilizá-lo, você deve renomear o arquivo .env.example para .env - ou então criar uma cópia já renomeada via linha de comando:

```
cp .env.example .env
```

## Instalando as dependências

Instale as dependências do projeto. Se optar pelo yarn como package manager, execute:

```
yarn
```

Se estiver utilizando npm, execute:

```
npm install
```

## Rodando o json-server

Agora, precisamos rodar o json-server - pacote que nos dará acesso aos dados necessários para popular a tabela. Por padrão, o servidor abre na porta 3000. Se você quiser alterá-la, deve mudar o valor da variável VITE_API_PORT no arquivo .env para a porta desejada.

É fundamental que você esteja utilizando uma versão mais atualizada do Node para que o json-server funcione. Recomendo a versão 18.18.0 ou qualquer uma acima da 20. Para executar o servidor na porta padrão, utilize o seguinte comando:

```
npx json-server db.json
```

Para outra porta, execute o comando abaixo (trocando PORT pelo número da porta escolhida).

```
npx json-server db.json --port PORT
```

## Rodando o front-end

Com o json-server funcionando, basta executar o front-end do projeto. Certique-se de que não há nenhuma aplicação ocupando a porta 5173 (padrão do Vite). Em outra aba do terminal, execute um dos comandos abaixo.

Para yarn:

```
yarn dev
```

Para npm:

```
npm run dev
```

Pronto! Você já pode abrir o navegador e conferir o projeto por meio da URL indicada pelo Vite (http://localhost:5173/) :)
