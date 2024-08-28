// Task 4: delUser(number)

import * as task1 from "./task1.js";
import * as task2 from "./task2.js";

export async function delUser(id) {
  const response = await fetch(`${task1.getServerURL()}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })

  return await response.json();
}