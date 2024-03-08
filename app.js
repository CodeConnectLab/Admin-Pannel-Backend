const dotenv = require('dotenv');

dotenv.config({ path: "./config/config.env" });


const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4001;
const connectDatabase = require("./config/database");
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
connectDatabase();
const Hosting = require("./models/hostingModel");
const SMSPack = require("./models/smsPackageModel");
const WTSPPack = require("./models/wtspPackageModel");
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
app.post("/api/v1/add_hosting", async (req, res) => {
  const hosting = await Hosting.create(req.body);
  try {
    res.send(hosting);
  } catch (error) {
    res.status(500).send(error);
  }
});
///// add sms package
app.post("/api/v1/addsmspack", async (req, res) => {
  const SmsPack1 = await SMSPack.create(req.body);
  try {
    res.status(200).json({
      success: true,
      message: "Package Add SuccessFully...",
      SmsPack1
    });
  } catch (error) {
    res.status(500).send(error);
  }
})
////////getsmspack api
app.get("/api/v1/getAllsmspack", async (req, res) => {
  const SmsPack1 = await SMSPack.find();
  try {
    res.status(200).json({
      success: true,
      SmsPack1
    });
  } catch (error) {
    res.status(500).send(error);
  }
})
//////// deleteSMSPACKAGE
app.delete("/api/v1/deleteSMSPACKAGE/:id", async (req, res) => {
  const SMSPack1 = await SMSPack.findById(req.params.id);
  if (!SMSPack1) {
    res.status(500).json({
      success: true,
      message: "SMSPack Not Found",
    });
  }
  await SMSPack1.deleteOne();
  res.status(200).json({
    SMSPack1
  });
});


///// add wtsp package
app.post("/api/v1/addwtsppack", async (req, res) => {
  const SmsPack1 = await WTSPPack.create(req.body);
  try {
    res.status(200).json({
      success: true,
      message: "Package Add SuccessFully...",
      SmsPack1
    });
  } catch (error) {
    res.status(500).send(error);
  }
})
////////getsmspack api
app.get("/api/v1/getAllwtsppack", async (req, res) => {
  const SmsPack1 = await WTSPPack.find();
  try {
    res.status(200).json({
      success: true,
      SmsPack1
    });
  } catch (error) {
    res.status(500).send(error);
  }
})
//////// deleteSMSPACKAGE
app.delete("/api/v1/deleteWTSPPACKAGE/:id", async (req, res) => {
  const SMSPack1 = await WTSPPack.findById(req.params.id);
  if (!SMSPack1) {
    res.status(500).json({
      success: true,
      message: "SMSPack Not Found",
    });
  }
  await SMSPack1.deleteOne();
  res.status(200).json({
    SMSPack1
  });
});


app.post("/api/v1/add_hosting", async (req, res) => {
  const { name, email, mobile, address, domain, states, Package } = req.body;

  const hosting = await Hosting.create(req.body);


  try {
    res.send(hosting);
  } catch (error) {
    res.status(500).send(error);
  }

});
app.delete("/api/v1/delete/:id", async (req, res) => {
  const hosting = await Hosting.findById(req.params.id);
  if (!hosting) {
    res.status(500).json({
      success: true,
      message: "hosting Not Found",
    });
  }
  await hosting.deleteOne();
  res.status(200).json({
    hosting
  });
});


app.get("/api/v1/hosting", async (req, res) => {


  const hosting = await Hosting.find();


  try {

    res.status(200).send(
      hosting
    );

  } catch (error) {
    res.status(500).send(error);
  }

});

app.put('/api/v1/editHosting/:id', async (req, res) => {
  let hosting = Hosting.findById(req.params.id);

  if (!hosting) {
    return res.status(500).json({
      success: false,
      massage: "hosting not found",
    });
  }

  hosting = await Hosting.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    hosting,
  });
})
app.get('/', function (req, res) {
  try {
    res.status(200).send(
      {
        "success": true,
        "massage": "get Product"
      }
    );

  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/v1/getByDomain/", async (req, res) => {
  const { domain } = req.body;
  const hosting = await Hosting.findOne({ domain: domain });

  try {
    if (!hosting) {
      res.status(200).send({
        hosting
      });
    }
    res.status(200).send({
      hosting
    });




  } catch (error) {
    res.status(500).send(error);
  }
});



