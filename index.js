require('dotenv').config();
const express = require('express');
const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const app = express();
app.use(express.json());

const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();
metadata.set("authorization", `Key ${process.env.CLARIFAI_API_KEY}`); // or your PAT

app.post('/analyze', (req, res) => {
  const imageUrl = req.body.url;

  stub.PostModelOutputs(
    {
      user_app_id: {
        user_id: "clarifai",
        app_id: "main"
      },
      model_id: "general-image-recognition",
      model_version_id: "aa7f35c01e0642fda5cf400f543e7c40", // optional, but recommended
      inputs: [{ data: { image: { url: imageUrl } } }]
    },
    metadata,
    (err, response) => {
      if (err) return res.status(500).send("Clarifai error: " + err.message);

      if (
        !response ||
        !response.outputs ||
        !response.outputs[0] ||
        !response.outputs[0].data ||
        !response.outputs[0].data.concepts
      ) {
        console.log("Clarifai response:", response);
        return res.status(500).send("No valid response from Clarifai");
      }

      const tags = response.outputs[0].data.concepts.map(c => c.name);
      res.json({ tags });
    }
  );
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
