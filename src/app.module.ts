import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { VendaModule } from './venda/venda.module';
import { from } from 'rxjs';

@Module({
  imports: [ClientesModule, MedicamentosModule, VendaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
