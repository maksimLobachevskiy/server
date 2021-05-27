import express from "express";

const app = express();

const port = process.env.PORT || 8085;

const emails = [
  {
    id: 1,
    topic: "Email 1",
  },
  {
    id: 2,
    topic: "Email 2",
    hidden: true,
  },
  {
    id: 3,
    topic: "Email 3",
  },
];

const user = {
  name: "Andrew",
  age: 31,
  hasEmail: true,
};

app.get("/api/emails", (req, res) => {
  res.send(emails);
});

app.get("/api/currentUser", (req, res) => {
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
