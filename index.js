require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;
const githubData = {
  
  "login": "sumit2027",
  "id": 121666746,
  "node_id": "U_kgDOB0B8ug",
  "avatar_url": "https://avatars.githubusercontent.com/u/121666746?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sumit2027",
  "html_url": "https://github.com/sumit2027",
  "followers_url": "https://api.github.com/users/sumit2027/followers",
  "following_url": "https://api.github.com/users/sumit2027/following{/other_user}",
  "gists_url": "https://api.github.com/users/sumit2027/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sumit2027/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sumit2027/subscriptions",
  "organizations_url": "https://api.github.com/users/sumit2027/orgs",
  "repos_url": "https://api.github.com/users/sumit2027/repos",
  "events_url": "https://api.github.com/users/sumit2027/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sumit2027/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sumit Kashyap",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I'm Sumit Kashyap, a BCA student at Invertis University, Bareilly. I am passionate about technology and focused on learning new skills to build a successful.",
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-12-30T09:30:02Z",
  "updated_at": "2026-03-13T13:51:25Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req, res)=>{
    res.send('SumitKashyap2027');
})

app.get('/login', (req, res) => {
  res.send('<h1>plase login at chai or code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Sumit Vlog bly</h2>")
})

app.get('/github',(req,res)=> {
  get.json(githubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});