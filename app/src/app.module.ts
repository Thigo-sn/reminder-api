import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './module/health/health.module';
import { RepositoryConfigProvider } from './repository.config.provider'


@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({ useClass: RepositoryConfigProvider }),
  ],
  providers: [],
})
export class AppModule { }
