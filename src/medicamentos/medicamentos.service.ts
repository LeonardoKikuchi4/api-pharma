import { Injectable, Logger } from '@nestjs/common';
import { Medicamento } from './interfaces/medicamentos.interface'
import { CadastroMedicamentoDto } from './dtos/cadastro-Medicamento.dto'
import { json } from 'express';
@Injectable()

export class MedicamentosService {

    private medicamentos: Medicamento[] = [];
    private readonly logger = new Logger(MedicamentosService.name)

    async criarAtualizarMedicamento(cadastroMedicamentoDto: CadastroMedicamentoDto):Promise<void> {
        
        await this.criar(cadastroMedicamentoDto)

    }

    private criar(cadastroMedicamentoDto: CadastroMedicamentoDto): void {
        const { _id, und_medida } = cadastroMedicamentoDto

        const medicamento: Medicamento = {
            _id,
            und_medida,
            nome: 'yuki',
            descricao: 'gako',
            estoque: '3',
            dataValidade: '25/12/28',
            preco: '25,58',
        };
        this.medicamentos.push(medicamento);
        this.logger.log(`cadastroMedicamentoDto: ${JSON.stringify(medicamento)}`)        
    }
}
