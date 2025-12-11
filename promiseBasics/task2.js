function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error execution: ", error);
      throw error;
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error execution: ", error);
      throw error;
    });
}

const promiseAll = Promise.all([getTodo(), getUser()]);

promiseAll
  .then(([todo, user]) => {
    console.log("Result for ToDo: ", todo);
    console.log("Result for Users: ", user);
  })
  .catch((error) => {
    console.log("Promise.all error: ", error);
  });

const promiceRace = Promise.race([getTodo(), getUser()]);

promiceRace
  .then((result) => {
    console.log("First result: ", result);
  })
  .catch((error) => {
    console.log("Promice.race error: ", error);
  });
