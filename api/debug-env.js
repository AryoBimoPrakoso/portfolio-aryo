import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Debugging Environment Variables:");
console.log("CLIENT_ID:", process.env.CLIENT_ID ? "✅ Set" : "❌ Missing");
console.log("CLIENT_SECRET:", process.env.CLIENT_SECRET ? "✅ Set" : "❌ Missing");
console.log("REFRESH_TOKEN:", process.env.REFRESH_TOKEN ? "✅ Set" : "❌ Missing");
console.log("MAIL_USER:", process.env.MAIL_USER ? "✅ Set" : "❌ Missing");

console.log("\n📝 Values (masked for security):");
console.log("CLIENT_ID:", process.env.CLIENT_ID?.substring(0, 20) + "...");
console.log("CLIENT_SECRET:", process.env.CLIENT_SECRET?.substring(0, 20) + "...");
console.log("REFRESH_TOKEN:", process.env.REFRESH_TOKEN?.substring(0, 20) + "...");
console.log("MAIL_USER:", process.env.MAIL_USER);

// Check for common issues
if (process.env.REFRESH_TOKEN?.includes(' ')) {
  console.log("⚠️  WARNING: REFRESH_TOKEN contains spaces!");
}

if (process.env.REFRESH_TOKEN?.includes('\n')) {
  console.log("⚠️  WARNING: REFRESH_TOKEN contains newlines!");
}

console.log("\n🔧 REFRESH_TOKEN length:", process.env.REFRESH_TOKEN?.length || 0);