const express = require("express");
const cors = require("cors");
const path = require("path");


const contentful = require("contentful");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

app.get("/contentful/homeContent", async (req, res) => {
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    environment: "master",
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCES_TOKEN,
  });
  const homeContent = await client.getEntry("6qEtbqFKX5CXcj6jPTg4VR");
  res.send(homeContent);
});
app.get("/contentful/testimonialsHome", async (req, res) => {
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    environment: "master",
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCES_TOKEN,
  });
  const testimonialsHome = await client.getEntries({content_type:'testimonial'});
  res.send(testimonialsHome);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server running on port" + port);
});
