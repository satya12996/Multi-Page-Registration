const { model } = require("mongoose");
const { userSchema } = require("../db/Schema");

async function adminRouter(req, res) {
  req.on("data", async data => {
    const { name, pass } = JSON.parse(data.toString());
    const db = model('users', userSchema);

    res.send({ name, validationStatus: true })

   
  })
}

module.exports = adminRouter;
