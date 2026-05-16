import "dotenv/config";
import { defineConfig } from "@prisma/client";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});