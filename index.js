const productRouters = require("./src/features/products/routes.js");
const userRouters = require('./src/features/users/routes.js')

const express = require("express");
const app = express();

const PORT = 3000;

app.use("/products", productRouters);
app.use("/users", userRouters);

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
;
