<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "c9001f05-3c7b-447e-b1e7-83139d893025",
          nome: "Bloomsbury Publishing Rocco ",
          local: "Curitiba",
        },
        { id: "ff6923d3-6c9c-43fd-8c70-6ed292d1eda9", nome: "Gutenberg", local: "Porto Alegre",},
        { id: "fd9cd903-439e-4eb7-a2f2-7f8b4eaae4c4", nome: "Little, Brown and Company", local: "Lisboa", },
      ],
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.editoras.push({
        id: novo_id,
        nome: this.novo_editora,
        local: this.novo_local,
      });
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    },
  },
};
</script>


<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Editoras</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_editora" />
      <input type="text" v-model="novo_local" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>Editora ID</th>
            <th>Nome</th>
            <th>Localização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.nome }}</td>
            <td>{{ editora.local }}</td>
            <button @click="excluir(editora)">Excluir</button>
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
