import { Module } from '@nestjs/common';
import { QuotationService } from './quotation.service.js';
import { QuotationController } from './quotation.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quotation } from './entities/quotation.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Quotation])],
  controllers: [QuotationController],
  providers: [QuotationService],
})
export class QuotationModule {}
