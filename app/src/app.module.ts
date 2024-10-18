import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { HealthModule } from '@/module/health/health.module'

import { RepositoryConfigProvider } from './repository.config.provider'

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useClass: RepositoryConfigProvider
    })
  ]
})
export class AppModule {}
