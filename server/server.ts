import express from "express";
const port = 5000;

const app = express();

app.get('/api', (_req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.get('/hi', (_req, res) => {
  res.json({ "users": ["Jianna", "Felix", "Rough Anal"] })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
