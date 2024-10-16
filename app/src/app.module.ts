import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './module/health/health.module';
import { RepositoryConfigProvider } from './repository.config.provider'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    HealthModule,
    MongooseModule.forRootAsync({ useClass: RepositoryConfigProvider }),
  ],
  providers: [],
})
export class AppModule { }
