const express = require("express");
const router = express.Router();

const {createImage} = require('../../src/modules/openai.js')

// Home page route.
router.get("/", function (req, res) {
  res.send("Ai Route");
});

router.use(express.json())

//POST ai/generate
//curl -d '{"prompt":"Camel with wings", "n":1}' -H "Content-Type: application/json" -X POST http://localhost:3000/ai/generate
router.post('/generate', (req, res) => {
  let img = createImage(req.body.prompt, req.body.n).then((img) => {
    res.send(img)
  })
})

module.exports = router;