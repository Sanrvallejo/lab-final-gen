// Task 2: listUsers()
import * as task1 from "./task1.js";

export async function listUsers() {

  const response = await fetch(`${task1.getServerURL()}/users`);
  const data = await response.json();

  data.forEach(u => {
    u.id = parseInt(u.id);
  });
  
  console.log(data);
}