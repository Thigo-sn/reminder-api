import { Module } from '@nestjs/common';
import { HealthModule } from './module/health/health.module'


@Module({
  imports: [
    HealthModule
  ],
  providers: [],
})
export class AppModule { }
