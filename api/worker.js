export default function handler(req, res) {
  // 1. Extract the bearer token from the incoming web request
  const authHeader = req.headers.authorization;
  const expectedToken = process.env.MY_SECRET_TOKEN;

  // 2. Validate the token
  if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
    return res.status(401).json({ error: "Unauthorized: Invalid or missing token." });
  }

  // 3. Your main logic goes here (Runs only if token is correct)
  return res.status(200).json({ 
    success: true, 
    message: "Hello from your free Vercel Worker alternative!" 
  });
}
