import { Injectable, Logger } from '@nestjs/common';
import { Venda } from './interfaces/venda.interface'
import { CadastroVendaDto } from './dtos/cadastro-venda.dto'
import { json } from 'express';
@Injectable()

export class VendaService {

    private venda: Venda[] = [];
    private readonly logger = new Logger(VendaService.name)

    async criarAtualizarVenda(cadastroVendaDto: CadastroVendaDto):Promise<void> {
        
        await this.criar(cadastroVendaDto)

    }

    private criar(cadastroVendaDto: CadastroVendaDto): void {
        const { id, codigo } = cadastroVendaDto

        const venda: Venda = {
            id: '5',
            codigo: '23',
            cliente: 'Mt',
            valorProduto: '23',
            valorDescontos: '22',
            data: '25/05/2023',
        };
        this.venda.push(venda);
        this.logger.log(`cadastroVendaDto: ${JSON.stringify(venda)}`)        
    }
}
