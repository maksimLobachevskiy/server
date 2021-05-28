const express = require("express");

const app = express();

const port = process.env.PORT || 8085;

const emails = [
  {
    id: 1,
    topic: "Email 1",
    text: "Email 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate enim saepe doloribus. Nisi est, neque fugiat quo dolor nemo libero rem, qui similique impedit sequi aliquam ea, blanditiis corporis molestiae sapiente unde? Iste minus iusto earum deleniti accusantium commodi totam, atque dicta expedita, reiciendis amet quos nihil consequuntur repellendus.",
  },
  {
    id: 2,
    topic: "Email 2",
    hidden: true,
    text: "Email 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate enim saepe doloribus. Nisi est, neque fugiat quo dolor nemo libero rem, qui similique impedit sequi aliquam ea, blanditiis corporis molestiae sapiente unde? Iste minus iusto earum deleniti accusantium commodi totam, atque dicta expedita, reiciendis amet quos nihil consequuntur repellendus.",
  },
  {
    id: 3,
    topic: "Email 3",
    text: "Email 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate enim saepe doloribus. Nisi est, neque fugiat quo dolor nemo libero rem, qui similique impedit sequi aliquam ea, blanditiis corporis molestiae sapiente unde? Iste minus iusto earum deleniti accusantium commodi totam, atque dicta expedita, reiciendis amet quos nihil consequuntur repellendus.",
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
