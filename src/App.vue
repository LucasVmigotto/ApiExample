<template>
  <div id="app">
    <div class="form">
      <form>
        <input id="id" name="id" type="hidden" value=""><br/>
        <label>Name:</label>
        <input id="name" name="name"><br/>
        <label>E-Mail:</label>
        <input id="email" name="email" type="email"><br/>
        <label>Birthday:</label>
        <input id="birthday" name="birthday" type="date"><br/>
        <input type="submit" :value="submit">
      </form>
    </div>
    <div class="container">
      <table class="table">
        <tr>
          <th>Name</th><th>E-Mail</th><th>Birthday</th>
          <th>Create at:</th><th>Last edit:</th><th>Configs</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><span>Search</span>
            <span>Delete</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      submit: 'Submit'
    }
  },
  created() {},
  methods: {}
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