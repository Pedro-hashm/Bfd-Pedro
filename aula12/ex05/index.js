class Funcionario {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    descricao() {
        console.log(`Funcionario: ${this.nome} | Salário: ${this.salario}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }

    descricao() {
        console.log(`Funcionario: ${this.nome} | Salário: ${this.salario} | Departamento: ${this.departamento}`)
    }
}

const func1 = new Funcionario('Jão', 1500)
func1.descricao()
const func2 = new Gerente('Kleber', 8000, 'Gerente')
func2.descricao()