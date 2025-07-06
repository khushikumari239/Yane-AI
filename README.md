# Yane-AI

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Image Tagging API with Clarifai - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background-color: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      font-family: Consolas, monospace;
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 3px;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <h1>Image Tagging API with Clarifai</h1>

  <section>
    <h2>Project Overview</h2>
    <p>This project is a <strong>Node.js server application</strong> that leverages the <a href="https://clarifai.com" target="_blank" rel="noopener noreferrer">Clarifai AI platform</a> to analyze images and automatically generate descriptive tags. It exposes a simple REST API where clients can send an image URL and receive a list of tags that describe the content of the image.</p>
  </section>

  <section>
    <h2>Features</h2>
    <ul>
      <li>Accepts image URLs via a POST API endpoint.</li>
      <li>Uses Clarifai’s <code>General Image Recognition</code> model to analyze images.</li>
      <li>Returns a JSON array of tags (concepts) detected in the image.</li>
      <li>Easy to extend for other Clarifai models or input types.</li>
      <li>Handles errors gracefully and validates API responses.</li>
    </ul>
  </section>

  <section>
    <h2>Getting Started</h2>

    <h3>Prerequisites</h3>
    <ul>
      <li>Node.js v20 or higher installed.</li>
      <li>A Clarifai account with a valid <strong>Personal Access Token (PAT)</strong>.</li>
      <li>Basic knowledge of REST APIs and JavaScript.</li>
    </ul>

    <h3>Installation</h3>
    <pre><code>npm install express clarifai-nodejs-grpc dotenv</code></pre>

    <h3>Setup</h3>
    <p>Create a <code>.env</code> file in the project root and add your Clarifai API key:</p>
    <pre><code>CLARIFAI_API_KEY=your_personal_access_token_here</code></pre>

    <h3>Run the Server</h3>
    <pre><code>node index.js</code></pre>
    <p>You should see:</p>
    <pre><code>Server running on http://localhost:3000</code></pre>
  </section>

  <section>
    <h2>API Usage</h2>

    <h3>Endpoint</h3>
    <p><code>POST /analyze</code></p>
    <p>Content-Type: <code>application/json</code></p>

    <h3>Request Body</h3>
    <pre><code>{
  "url": "https://samples.clarifai.com/metro-north.jpg"
}</code></pre>

    <h3>Response</h3>
    <pre><code>{
  "tags": [
    "train",
    "railway",
    "transportation",
    "vehicle",
    "track",
    "station",
    "railroad",
    "travel",
    "city",
    "urban"
  ]
}</code></pre>
  </section>

  <section>
    <h2>How It Works</h2>
    <p>The server receives the image URL from the client, calls Clarifai’s General Image Recognition model with the URL, and returns a list of concepts detected in the image as tags.</p>
  </section>

  <section>
    <h2>Error Handling</h2>
    <ul>
      <li>If the Clarifai API returns an error or invalid response, the server responds with HTTP 500 and an error message.</li>
      <li>The server logs detailed Clarifai responses for debugging.</li>
    </ul>
  </section>

  <section>
    <h2>Extending the Project</h2>
    <ul>
      <li>Change the Clarifai model by updating the <code>model_id</code> and <code>model_version_id</code>.</li>
      <li>Add support for local image uploads by integrating file handling.</li>
      <li>Create a frontend to visualize images and their tags.</li>
      <li>Implement caching to reduce API calls for repeated images.</li>
    </ul>
  </section>

  <section>
    <h2>Dependencies</h2>
    <ul>
      <li><a href="https://www.npmjs.com/package/express" target="_blank" rel="noopener noreferrer">express</a> - Web framework for Node.js.</li>
      <li><a href="https://www.npmjs.com/package/clarifai-nodejs-grpc" target="_blank" rel="noopener noreferrer">clarifai-nodejs-grpc</a> - Clarifai’s gRPC client.</li>
      <li><a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener noreferrer">dotenv</a> - Loads environment variables from <code>.env</code>.</li>
    </ul>
  </section>

  <section>
    <h2>License</h2>
    <p>This project is open source and free to use.</p>
  </section>

  <footer>
    <p>If you want help adding features or deploying this project, feel free to ask!</p>
  </footer>
</body>
</html>
