import { createHmac } from 'crypto'
export async function POST(request: Request) {
  const requestBody : { email: string, password: string } = await request.json();
  if (requestBody.email !== "demo@minimals.cc" || requestBody.password !== "demo1234") {
    return Response.json({ message: "Invalid email or password" }, { status: 422 })
  }
  
  const user = {
    id: Math.random().toString(36).substring(2, 15),
    email: "demo@minimals.cc",
    name: "Demo User",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const header = { alg: "HS256", typ: "JWT" };
  const payload = { userId: user.id, email: user.email, exp: Math.floor(Date.now() / 1000) + 3600 };
  const secret = "your-secret-key"; // Replace with your actual secret key
  const signature =  createHmac("sha256", secret).update(JSON.stringify(header) + "." + JSON.stringify(payload)).digest("base64");
  const accessToken = `${btoa(JSON.stringify(header))}.${btoa(JSON.stringify(payload))}.${signature}`;

  return Response.json({ accessToken, user }, { status: 200 });
}