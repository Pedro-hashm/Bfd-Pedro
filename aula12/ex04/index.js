class ContaBancaria {
    #saldo = 0

    constructor() {
        this.saldo = 0
    }

    getSaldo() {
        return this.saldo
    }

    setSaldo(valor) {
        this.saldo = valor
    }

    depositar(valor) {
        this.setSaldo(valor)
    }

    sacar(valor) {
        if (this.saldo < valor) {
            console.log("você não tem saldo o suficiente")
        } else {
            this.saldo -= valor
        }
    }

    verSaldo() {
        console.log(this.getSaldo())
    }
}

const conta1 = new ContaBancaria()

conta1.verSaldo()
conta1.sacar(10)
conta1.depositar(100)
conta1.verSaldo()
conta1.sacar(30)
conta1.verSaldo()
