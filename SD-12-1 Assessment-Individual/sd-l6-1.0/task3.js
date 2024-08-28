// Task 3: addUser(first_name, last_name, email)
import * as task1 from "./task1.js";

export async function addUser(first_name, last_name, email) {
  const newUser = { id: '6', first_name: first_name, last_name: last_name, email: email };

  const response = await fetch(`${task1.getServerURL()}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(newUser),
  })

  return await response.json();
  //console.log(data);
  
}

