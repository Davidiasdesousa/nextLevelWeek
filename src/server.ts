import express, { request, response } from 'express';

const app = express();
app.use(express.json());
const users = [{ id: 1, nome: "Davi" }, { id: 2, nome: "Ivani" }, { id: 3, nome: "Silane" }];

app.get('/users', (request, response) => {
  const search = request.query.search?.toString();
  const userFiltered = search ? users.filter(users => users.nome.includes(search)) : users;
  response.json(userFiltered);
});
app.get('/users', (request, response) => {
  response.json(users)
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  const user = users.find(e => e.id = id);
  response.json(user);
});


app.post('/users', (request, response) => {
  const user = {
    name: "Davi",
    email: "davi@davi.com"
  }
  response.json(user);
});

app.listen(3333);