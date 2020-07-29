import { Module } from '@nestjs/common';
import { MedicamentosController } from './medicamentos.controller';

@Module({
  controllers: [MedicamentosController],
  providers: []
})
export class MedicamentosModule {}
