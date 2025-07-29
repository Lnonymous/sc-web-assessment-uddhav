import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 Make this module global
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}