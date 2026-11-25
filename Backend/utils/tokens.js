import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TTL = process.env.ACCESS_TOKEN_TTL || "15m";

// Sign an access token containing user ID (sub) and role
export function signAccessToken(user) {
  return jwt.sign(
    {
      sub: user._id.toString(),
      role: user.role,
    },
    ACCESS_SECRET,
    {
      algorithm: "HS256",
      expiresIn: ACCESS_TTL,
    }
  );
}
// Verify the incoming access token and enforce HS256
export function verifyAccessToken(token) {
  return jwt.verify(token, ACCESS_SECRET, {
    algorithms: ["HS256"],
  });
}