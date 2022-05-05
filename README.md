
<p align="center">
  <img src="https://user-images.githubusercontent.com/85764731/166106858-11ee5567-85e0-49d4-bcb8-51c84886fbeb.gif" alt="animated" width="400" />
</p>
<h1 align="center"> Desafio Coleta - GRX</h1>

<h2> Tabela de conteúdos :bookmark_tabs:  </h2>

   * [Sobre](#sobre)
   * [Desafios](#desafios)
   * [Tecnologias](#tecnologias)
   * [Melhorias](#melhorias)
   * [Feedback](#feedback)

<h2 id="sobre"> Sobre :speech_balloon: </h2>
Esse é um projeto FullStack, com o objetivo de manipular os dados preenchidos em um formulário. Se trata de uma aplicação MERN, ou seja, uma aplicação que utiliza as seguintes stacks: MongoDB, Express, React e NodeJS.

<h2 id="desafios"> Desafios :anger: </h2> 
O maior desafio desse projeto ocorreu durante a manipulação de dados. Tanto no frontend quanto no backend, tive que tomar decisões em relação ao formato dos objetos, levando em conta como que eles seriam utilizados em outros pontos do código. Nessa parte em específico, exercitei bastante a lógica de programação e o pensamento crítico.

<h2 id="tecnologias"> Tecnologias 🛠 </h2>

<details>
  <summary> Gerais </summary>
    <ul> 
      <li><a href="https://eslint.org/"> ESLint </a></li>
      <li><a href="https://www.docker.com/"> Docker </a></li>
      <li><a href="https://www.typescriptlang.org/"> TypeScript </a></li>
    </ul>
</details>

<details>
  <summary> FrontEnd </summary>
    <ul> 
      <li><a href="https://pt-br.reactjs.org/"> React </a></li>
      <li><a href="https://testing-library.com/docs/react-testing-library/intro/"> React Testing Library </a></li>
      <li><a href="https://react-hook-form.com/"> React Hook Form</a></li>
      <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
    </ul>
</details>

<details>
  <summary> BackEnd </summary>
    <ul> 
      <li><a href="https://nodejs.org/en/">Node.js</a></li>
      <li><a href="https://expressjs.com/pt-br/">Express</a></li>
      <li><a href="https://www.mongodb.com/docs/"> MongoDB</a></li>
      <li><a href="https://mongoosejs.com/docs/api.html">Mongoose</a></li>
    </ul>
</details>

<h2 id="melhorias"> Melhorias :wrench: </h2>
O projeto apresenta todos os requisitos pedidos no documento, mas ainda é passível de melhorias. Foram criados os arquivos dockerfile do frontend e do backend, e o docker-compose da aplicação, mas ainda não foi feito um deploy. Também é possível incrementar os testes na aplicação como um todo, e criar middlewares de tratamento de erro no backend.

<h2 id="feedback"> Feedback :black_nib: </h2>
<p> Esse foi um desafio que me proporcionou bastante aprendizado. Pude revisitar alguns conceitos que estavam meio "enferrujados" e também usar novas ferramentas. Apesar de não ter requerido uma alta complexidade, é um projeto que ainda tem o seu caráter desafiador. Achei o prazo suficiente para cumprir com todos os requisitos.</p>


<details>
  <summary> Possível erro no documento</summary>
  
  <p>Regras de negócio:</p>
  <img src="https://user-images.githubusercontent.com/85764731/166719666-b632f201-9d9b-446f-825f-084e7d6696d3.png" width="800" />
  <p>Na seção das regras de validação, está explícito que não é preciso nenhuma regra, apenas armazenar o valor da pergunta.</p>
  
  <p>Exemplo de JSON:</p>
  <img src="https://user-images.githubusercontent.com/85764731/166720077-908f77f8-bca1-43e8-97cf-34d9f895780d.png" width="800" />
  
  
  <p>No exemplo da imagem, as três primeiras perguntas são afirmativas, logo, a chave "QuantidadePositiva" deveria ter o valor "3" e não "4".</p>
  
 

</details>

