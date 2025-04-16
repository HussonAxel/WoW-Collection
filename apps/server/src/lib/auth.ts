import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";


export const auth = betterAuth({
  trustedOrigins: [process.env.CORS_ORIGIN || ""],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "battlenet",
          clientId: process.env.BLIZZARD_CLIENT_ID as string,
          clientSecret: process.env.BLIZZARD_CLIENT_SECRET as string,
          authorizationUrl: "https://api.instagram.com/oauth/authorize",
          tokenUrl: "https://api.instagram.com/oauth/access_token",
          scopes: ["user_profile", "user_media"],
        },
      ],
    }),
  ],
});
