import fetch from "node-fetch";


export default async function newFolder(filepath, token) {

  const res = await fetch(`https://seadar.egnyte.com/pubapi/v1/fs/${filepath}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "text/plain"
    },
    body: JSON.stringify({ action: "add_folder" })
  })

  console.log("Uploaded")
  return res;

}