import { INestApplication, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication): void {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
