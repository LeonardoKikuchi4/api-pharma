import { Controller, Post, Body } from '@nestjs/common';
import { CadastroMedicamentoDto } from './dtos/cadastro-Medicamento.dto';
import { MedicamentosService } from './medicamentos.service';


@Controller('api/v1/medicamentos')
export class MedicamentosController {

    constructor(private readonly medicamentoService: MedicamentosService) {}

    @Post()
    async cadastrarAtualizarMedicamentos( 
        @Body() cadastroMedicamentoDto: CadastroMedicamentoDto) {        
        await this.medicamentoService.criarAtualizarMedicamento(cadastroMedicamentoDto)
    }

}
