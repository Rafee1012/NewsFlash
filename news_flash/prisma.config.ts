import "dotenv/config";

const prismaConfig = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
};

export default prismaConfig;