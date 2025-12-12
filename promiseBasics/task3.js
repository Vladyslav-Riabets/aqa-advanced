async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred: ", error);
    throw error;
  }
}

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Request failde");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred: ", error);
    throw error;
  }
}

async function runFunctions() {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);

    console.log("Result for Todo:", todo);
    console.log("Result for User:", user);

    const result = await Promise.race([getTodo, getUser]);

    console.log("Executed first: ", result);
  } catch (error) {
    console.error("Error during run: ", error);
  }
}

runFunctions();
