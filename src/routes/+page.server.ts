import { GIT_TOKEN } from '$env/static/private'

/**@type {import('./¤types').PageLoad} */
async function load(){
  const URL = "https://api.github.com/repos/christonn93"
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `bearer ${GIT_TOKEN}`,
      "Content-Type:": "application/json"
    },
  })
  const data = await res.json()
  console.log(data)
}