import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { QuotationModule } from './quotation/quotation.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfig } from './config/env.config.js';
import { envValidationSchema } from './config/env.validation.schema.js';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [EnvConfig],
    validationSchema: envValidationSchema,
  }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      ...configService.getOrThrow('database'),
      autoLoadEntities: true,
    }),
  }), QuotationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
