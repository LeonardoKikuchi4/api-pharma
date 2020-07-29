export interface cliente {
    readonly id: string;
    readonly Nome: string;
    readonly CPF: string;
    readonly RG: number;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
}