<template>
  <div id="app">
    <form>
      <input id="id" name="id" type="hidden" v-model="id" value=""><br/>
      <label>Name:</label>
      <input id="name" name="name" v-model="name"><br/>
      <label>E-Mail:</label>
      <input id="email" name="email" type="email" v-model="email"><br/>
      <label>Birthday:</label>
      <input id="birthday" name="birthday" type="date" v-model="birthday"><br/>
      <input type="submit" :value="submit" @click="registerUser()">
    </form>
    <div>
      <table class="table">
        <tr>
          <th>Name</th><th>E-Mail</th><th>Birthday</th>
          <th>Create at:</th><th>Last edit:</th><th>Configs</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.birthday }}</td>
          <td>{{ user.create }}</td>
          <td>{{ user.update }}</td>
          <td><a href="#" @click="searchUser(user._id)">Search</a>
            <a href="#" @click="deleteUser(user._id)">Delete</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const api = 'http://localhost:8000/user'
export default {
  name: 'app',
  data () {
    return {
      id: '',
      name: '',
      email: '',
      birthday: Date,
      create: Date,
      update: Date,
      submit: 'Submit',
      users: []
    }
  },
  created() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios.get(api).then(
        (data) => { this.users = data.data.data }
      )
    },
    resetForm() {
      this.id = ''
      this.name = ''
      this.email = ''
      this.birthday = Date
      this.create = Date
      this.update = Date
      this.submit = 'Submit'
      this.loadUsers()
    },
    registerUser() {
      if (this.id === '') {
        axios.post(api,
        {
          name: this.name,
          email: this.email,
          birthday: this.birthday
        }).then((data) => {
          this.resetForm()
        })
      }else{
        axios.put(api,
        {
          id: this.id,
          name: this.name,
          email: this.email,
          birthday: this.birthday
        }).then((data) => {
          this.loadUsers()
        })
      }
    },
    searchUser(id){
      axios.get(`${api}/${id}`).then((data) => {
        let user = data.data.data
        this.id = user._id
        this.name = user.name
        this.email = user.email
        this.birthday = user.birthday
        this.create = user.create
        this.update = user.update
        this.submit = 'Update'
      })
    },
    deleteUser(id){
      axios.delete(`${api}/${id}`).then(
        (data) => { this.loadUsers() }
      )
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: column;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #50f;
  text-decoration-line: none;
}

.table {
  text-align: center;
}
.table th{
  border: 0.2em solid #bbb;
  background-color: #ccc;
  font-size: 1.3em;
}
.table td {
  border: 0.2em solid #ccc;
  background-color: #ddd;
  font-size: 1.2em;
}
</style>
