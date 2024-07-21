![](https://private-user-images.githubusercontent.com/100055011/350799603-fe1ed0b8-0edf-4435-95e2-b4fc7d5de821.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE2MDA4MjAsIm5iZiI6MTcyMTYwMDUyMCwicGF0aCI6Ii8xMDAwNTUwMTEvMzUwNzk5NjAzLWZlMWVkMGI4LTBlZGYtNDQzNS05NWUyLWI0ZmM3ZDVkZTgyMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMVQyMjIyMDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNDViMzM2MDExN2QzNzQ2YWVlZjI1ODUyMjlhODc2N2EyNzM5OTE4YzdhMmE5ZGU5YjQwZjllYzQ0MWVjODk2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.e4avkFzkCVW6QyflHDEVrYvHcrN-dfN1Pk3jlMHcnLc)

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
