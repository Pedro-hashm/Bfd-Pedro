public class Biblioteca {
    String nome;
    ArrayList saldo;
}

public void realizarPagamento(Double valor) {
    this.saldo -= valor;
}

public void depositarValor(Double valor) {
    this.saldo += valor;
}