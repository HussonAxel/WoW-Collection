import { betterAuth } from "better-auth";

export const auth = betterAuth({
  trustedOrigins: [process.env.CORS_ORIGIN || ""],
  emailAndPassword: {
    enabled: true,
  },
});
