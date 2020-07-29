import { Controller, Post, Body } from '@nestjs/common';
import { CadastroClienteDto } from './dtos/cadastro-cliente.dto';

@Controller('api/v1/clientes')
export class ClientesController {

    @Post()
    async criarAtualizarClientes( 
        @Body() cadastroClienteDto: CadastroClienteDto) {
        const { CPF } = cadastroClienteDto    
        return JSON.stringify(`{
            "nome": ${CPF} 
        }`)
    }

}
