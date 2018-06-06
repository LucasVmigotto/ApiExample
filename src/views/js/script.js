const axios = require('axios')
const $ = require('jquery')
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8000
const urlApi = `http://${host}:${port}/users`

const loadUsers = () => {
  axios.post(urlApi, {
    query: `{
      list{
        id
        name
        email
        birthday
        createAt
        updateAt
      }
    }`
  }).then(({ data }) => {
    const users = Array.from(data.data.list)
    let table
    users.map(el => {
      table += `<tr>
        <td>${el.name}</td>
        <td>${el.email}</td>
        <td>${el.birthday}</td>
        <td>${el.createAt}</td>
        <td>${el.updateAt}</td>
      </tr>`
    })
    $('#users').html(table)
  })
}

const resetForm = () => {}

const registerUser = () => {}

const searchUser = () => {}

const deleteUser = () => {}

resetForm()
