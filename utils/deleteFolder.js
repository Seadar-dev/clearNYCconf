import egnyteAuth from "./auth.js";
import fetch from "node-fetch";


export default async function deleteFolder(filepath, token) {

  const res = await fetch(`https://seadar.egnyte.com/pubapi/v1/fs/${filepath}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "text/plain"
    }
  })

  console.log("Deleted")
  return res;

  console.log("Completed")

}