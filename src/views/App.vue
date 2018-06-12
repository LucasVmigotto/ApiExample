<template>
  <div id="app">
    <div class="form">
      <form>
        <input id="id" name="id" type="hidden" v-model="user.id">
        <label for="name">Name:</label>
        <input id="name" name="name" v-model="user.name"><br/>
        <label for="email">E-Mail:</label>
        <input id="email" name="email" v-model="user.email"><br/>
        <label for="birthday">Birthday:</label>
        <input id="birthday" name="birthday" type="date" v-model="user.birthday"><br/>
        <input type="submit" :value="submit" @click.prevent="registerUser()">
      </form>
    </div>
    <div class="container">
      <table class="table">
        <tr>
          <td>Name</td>
          <td>E-Mail</td>
          <td>Birthday</td>
          <td>Create At</td>
          <td>Update At</td>
          <td>Configs</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ formatDate(user.birthday) }}</td>
          <td>{{ formatDate(user.createAt, 'dmyhms') }}</td>
          <td>{{ formatDate(user.updateAt, 'dmyhms') }}</td>
          <td>
            <span @click="searchUser(user.id)">
              <i class="material-icons icon">search</i>
            </span>
            <span @click="deleteUser(user.id)">
              <i class="material-icons icon">delete</i>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'http://localhost:8000/users'
const { reqList, reqCreate,
  reqRead, reqUpdate, reqDelete } = require('./requests')
export default {
  name: 'app',
  data () {
    return {
      users: [],
      user: {
        id: '',
        name: '',
        email: '',
        birthday: '',
        createAt: '',
        updateAt: ''
      },
      submit: 'Submit'
    }
  },
  created() {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      axios.post(api, { query: reqList }).then(({ data }) => {
        this.users = Array.from(data.data.list)
      })
    },
    resetForm () {
      this.user = {
        id: '',
        name: '',
        email: '',
        birthday: '',
        createAt: '',
        updateAt: ''
      }
      this.submit = 'Submit'
      this.loadUsers()
    },
    registerUser () {
      const input = `{"name":"${this.user.name}"` +
        `,"email":"${this.user.email}"` +
        `${this.user.birthday !== ''
          ? `,"birthday":"${this.user.birthday}"`
          : ''}}`
      if (this.user.id === '') {
        axios.post(`${api}?variables={"input":${input}}`,
          {query: reqCreate }).then(({ data }) => {
            const { create } = data.data
            !create
              ? alert('Error saving the user')
              : alert(`Success saving the user ${create.name}` +
                `\nCreate at: ${this.formatDate(create.createAt, 'dmyhms')}`)
        })
      } else {
        axios.post(`${api}?variables={"id":"${this.user.id}",` +
          `"input":${input}}`, { query: reqUpdate }).then(({ data }) => {
            const { update } = data.data
            !update
              ? alert('Error updating the user')
              : alert(`Success updating the user ${update.name}` +
                `\nUpdate at: ${this.formatDate(update.updateAt, 'dmyhms')}`)
        })
      }
      this.resetForm()
    },
    searchUser (id) {
      axios.post(`${api}?variables={"id":"${id}"}`,
        { query: reqRead }).then(({ data }) => {
          const { read } = data.data
          this.user.id = read.id
          this.user.name = read.name
          this.user.email = read.email
          this.user.birthday = this.formatDate(read.birthday, 'ymd')
          this.submit = 'Update'
        })
    },
    deleteUser (id) {
      axios.post(`${api}?variables={"id":"${id}"}`, {
        query: reqDelete
      }).then(({data}) => {
        if (!data.data.delete) {
          alert("Error deleting this user")
        }
        this.loadUsers()
      })
    },
    formatDate (dateToFormat, pattern = 'dmy') {
      if (!dateToFormat) {
        if (pattern === 'ymd') return
        return this.birthday = 'Not informed'
      }

      const date = new Date(dateToFormat)
      const year = `${date.getUTCFullYear()}`
      let month = `${date.getUTCMonth()+1}`
      let day = `${date.getUTCDate()}`
      let hour = `${date.getUTCHours()}`
      let minute = `${date.getUTCMinutes()}`
      let second = `${date.getUTCSeconds()}`

      if (month.length < 2) month = `0${month}`
      if (day.length < 2) day = `0${day}`
      if (hour.length < 2) hour = `0${hour}`
      if (minute.length < 2) minute = `0${minute}`
      if (second.length < 2) second = `0${second}`

      switch (pattern) {
        case 'dmyhms':
          return `${day}/${month}/${year} ${hour}:${minute}:${second}`
        case 'dmy':
          return `${day}/${month}/${year}`
        case 'ymd':
          return `${year}-${month}-${day}`
        default:
          return date
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
    align-items: center
  }
  h1, h2 { font-weight: normal; }
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
  form * { margin: 1em 0; }
  form label { margin-right: 9em; }
  .container {
    padding: .5em;
    background: #eee;
    border-radius: .4em;
    margin-top: 1em;
  }
  .table { text-align: center; }
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
    padding: .5em 1em;
  }
  .table tr:hover {
    td {
      background-color: #999;
      border: .1em solid #ddd;
      color: #fff;
      transition: .1s;
    }
    a { color: #fff; }
  }
  i {
    width: 1em;
    height: 1em;
  }
  .icon:hover { cursor: pointer; }
</style>
