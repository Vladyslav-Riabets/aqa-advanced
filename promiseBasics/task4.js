class Todo {
  async getTodo() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error("Error during getTodo run");
    }

    return response.json();
  }
}

class User {
  async getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Error during getUSer execurion");
    }

    return response.json();
  }
}

async function main() {
  const todoExec = new Todo();
  const userExec = new User();

  try {
    const [todo, user] = await Promise.all([
      todoExec.getTodo(),
      userExec.getUser(),
    ]);

    console.log("Result for ToDo: ", todo);
    console.log("Result for User: ", user);

    const result = await Promise.race([todoExec.getTodo(), userExec.getUser()]);

    console.log("Result received first: ", result);
  } catch (error) {
    console.error("Error during runnig main function: ", error);
  }
}

main();
