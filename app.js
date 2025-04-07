const express = require("express");
const path = require("path");

const app = express();

// ✅ Set EJS as the view engine
app.set("view engine", "ejs");

// ✅ Define static folder (Optional)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Root route
app.get("/", (req, res) => {
  const items = [
    { name: "BTC" },
    { name: "ETH" },
    { name: "SOL" },
    { name: "ALTCOINS" },
  ];
  res.render("index", { items });
});

// ✅ Route to add items
app.get("/add-item", (req, res) => {
  res.render("add-item");
});

// ✅ Mocked route to create item (No DB)
app.get("/create-item", (req, res) => {
  const item = {
    name: "HMSTR",
    price: 0.01,
  };
  res.send(item);
});

// ✅ Error route for undefined paths
app.use((req, res) => {
  res.status(404).render("error");
});

// ✅ Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
