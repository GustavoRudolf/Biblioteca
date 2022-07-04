<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [
        {
          id: "c9001f05-3c7b-447e-b1e7-83139d893025",
          nome: "J. K. Rowling",
          idade: "56",
        },
        {
          id: "ff6923d3-6c9c-43fd-8c70-6ed292d1eda9",
          nome: "David Baldacci",
          idade: "61",
        },
        {
          id: "fd9cd903-439e-4eb7-a2f2-7f8b4eaae4c4",
          nome: "Stephenie Meyer",
          idade: "48",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.autores.push({
        id: novo_id,
        nome: this.novo_autor,
        idade: this.novo_idade,
      });
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Autores</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_autor" />
      <input type="text" v-model="novo_idade" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>Autor ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.nome }}</td>
            <td>{{ autor.idade }}</td>
            <button @click="excluir(autor)">Excluir</button>
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
  border: 1px solid rgb(255, 0, 0);
  border-radius: 10px;
  background-color: rgb(56, 20, 113);
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
