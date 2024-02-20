const express = require("express");
const { todo } = require("./db.js");
const { updateTodo, createTodo } = require("./types.js");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// body {
//     title: String,
//     description: String
// }

app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const parsedPayload = createTodo.safeParse({ title, description });

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wromg input",
    });
    return;
  }
  // put it in mongodb
  const newTodo = await todo.create({
    title: title,
    description: description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wromg input",
    });
    return;
  }

  // put it in mongodb
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo Marked as Completed",
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
