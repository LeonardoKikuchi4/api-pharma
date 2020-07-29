import { Controller, Post, Body } from '@nestjs/common';
import { CadastroVendaDto } from './dtos/cadastro-venda.dto';
import { VendaService } from './venda.service';
import { from } from 'rxjs';

@Controller('api/v1/venda')
export class VendaController {

    constructor(private readonly vendaService: VendaService) {}

    @Post()
    async cadastrarAtualizarVendas( 
        @Body() cadastroVendaDto: CadastroVendaDto) {        
        await this.vendaService.criarAtualizarVenda(cadastroVendaDto)
    }

}
