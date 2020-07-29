import { Module } from '@nestjs/common';
import { VendaController } from './venda.controller';

@Module({
  controllers: [VendaController],
  providers: []
})
export class VendaModule {}
