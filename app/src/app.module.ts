import { Module } from '@nestjs/common';
import { healthModule } from './module/health/health.module'


@Module({
  imports: [
    healthModule
  ],
  providers: [],
})
export class AppModule { }
