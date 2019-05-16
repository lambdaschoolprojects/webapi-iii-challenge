// code away!
const server = require("./server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("The server has started on port 4000");
});
