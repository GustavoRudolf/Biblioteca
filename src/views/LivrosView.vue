<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "c9001f05-3c7b-447e-b1e7-83139d893025",
          nome: "Harry Potter",
          categoria: "Fantasia,Aventura",
          editora: "Bloomsbury Publishing Rocco",
          preco: "R$259,90",
        },
        {
          id: "ff6923d3-6c9c-43fd-8c70-6ed292d1eda9",
          nome: "O Limiar",
          categoria: "Romance , Fantasia",
          editora: "Gutenberg",
          preco: "R$32,37",
        },
        {
          id: "fd9cd903-439e-4eb7-a2f2-7f8b4eaae4c4",
          nome: "Crepúsculo",
          categoria: "Romance de Amor,Terror",
          editora: "Little, Brown and Company",
          preco: "R$170,17",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.livros.push({
        id: novo_id,
        nome: this.novo_livro,
        preco: this.novo_preco,
        categoria: this.novo_categoria,
        editora: this.novo_editora,
      });
    },

    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Livros</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_livro" placeholder="livro" />
      <input type="text" v-model="novo_categoria" placeholder="categoria" />
      <input type="text" v-model="novo_editora" placeholder="editora" />
      <input type="text" v-model="novo_preco" placeholder="preco" />

      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categorias</th>
            <th>Editora</th>
            <th>Preços</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.editora }}</td>
            <td>{{ livro.preco }}</td>
            <button @click="excluir(livro)">Excluir</button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.title {
  text-align: center;
  margin: 2rem 0;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.form-input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 1px solid rgb(20, 113, 20);
  border-radius: 10px;
  background-color: rgb(20, 113, 20);
  color: white;
  font-weight: bold;
  margin-left: 1%;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: rgb(42, 24, 98);
  color: white;
}

table thead th {
  font-weight: bolder;
}

table tbody tr:nth-child(odd) {
  background-color: rgb(189, 182, 182);
}
</style>
