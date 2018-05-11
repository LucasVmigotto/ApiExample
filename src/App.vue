<template>
  <div id="app">
    <div class="form">
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
    </div>
    <div class="container">
      <table class="table">
        <tr>
          <th>Name</th><th>E-Mail</th><th>Birthday</th>
          <th>Create at:</th><th>Last edit:</th><th>Configs</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ formatDate(user.birthday, '') }}</td>
          <td>{{ formatDate(user.create,  '') }}</td>
          <td>{{ formatDate(user.update, '') }}</td>
          <td><span @click="searchUser(user._id)">Search</span>
            <span @click="deleteUser(user._id)">Delete</span></td>
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
      birthday: '',
      create: '',
      update: '',
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
        (data) => {
          if (data.data.err) { return alert(data.data.data) }
          this.users = data.data.data
        }
      )
    },
    resetForm() {
      this.id = ''
      this.name = ''
      this.email = ''
      this.birthday = ''
      this.create = ''
      this.update = ''
      this.submit = 'Submit'
      this.loadUsers()
    },
    registerUser() {
      if (!this.validateForm()) {
        return alert('There is some empty fields to be filled.')
      }
      if (this.id === '') {
        axios.post(api,
        {
          name: this.name,
          email: this.email,
          birthday: this.birthday
        }).then((data) => {
          if (data.data.err) {
            alert(data.data.data)
          }
          this.resetForm()
        })
      } else{
        axios.put(api,
        {
          id: this.id,
          name: this.name,
          email: this.email,
          birthday: this.birthday
        }).then((data) => {
          if (data.data.err) {
            alert(data.data.data)
          }
          this.loadUsers()
        })
      }
    },
    searchUser(id) {
      axios.get(`${api}/${id}`).then((data) => {
        if (data.data.err) { return alert(data.data.data) }
        let user = data.data.data
        this.id = user._id
        this.name = user.name
        this.email = user.email
        this.birthday = this.formatDate(user.birthday, 'yyyy-mm-dd')
        this.create = user.create
        this.update = user.update
        this.submit = 'Update'
      })
    },
    deleteUser(id) {
      axios.delete(`${api}/${id}`).then(
        (data) => {
          if (data.data.err) { return alert(data.data.data) }
          this.loadUsers()
        }
      )
    },
    formatDate(dateToFormat, pattern) {
      const date = new Date(`${dateToFormat}`)
      let day = `${date.getUTCDate()}`
      let month = `${date.getMonth()+1}`
      const year = `${date.getFullYear()}`
      
      if (day.length < 2 ) { day = `0${day}` }
      if (month.length < 2 ) { month = `0${month}` }

      if (pattern === 'yyyy-mm-dd') {
        return `${year}-${month}-${day}`
      } else {
        return `${day}/${month}/${year}`
      }
    },
    validateForm() {
      if (this.name.trim() === '' || this.email.trim() === '') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
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

form {
  width: 30em;
  background-color: #eee;
  margin: 0 auto;
  border-radius: .4em;
}
form * {
  margin: 1em 0;
}
form label {
  margin-right: 9em;
}

.container {
  margin: 0 auto;
  padding: .5em;
  background: #eee;
  border-radius: .4em;
  margin-top: 1em;
}

.table {
  text-align: center;
}

.table th {
  border: .2em solid #bbb;
  background-color: #ccc;
  font-size: 1.3em;
  padding: .7em 3em;
}

.table td {
  background-color: #ddd;
  border: .1em solid #ccc;
  font-size: 1.2em;
  padding: .5em 3em;
}

.table tr:hover {
  td {
    background-color: #999;
    border: .1em solid #ddd;
    color: #fff;
    transition: .1s;
  }
  a {
    color: #fff;
  }
}

span:hover {
  text-decoration-line: underline;
}
</style>
