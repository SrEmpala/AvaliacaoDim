using System.ComponentModel.DataAnnotations;

namespace CRUDProdutos.Models.ViewModels
{
  public class CadastroProdutoViewModel
  {
    public int Id { get; set; }

    [Required(ErrorMessage = "Tipo de item é necessário ser preenchido")]
    public char TipoItem { get; set; }

    [Required(ErrorMessage = "Nome é necessário ser preenchido")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "Referência é necessário ser preenchido")]
    public int Referencia { get; set; }

    [Required(ErrorMessage = "Fornecedor é necessário ser preenchido")]
    public int FornecedorId { get; set; }

    [Required(ErrorMessage = "Custo de compra é necessário ser preenchido")]
    public decimal CustoCompra { get; set; }

    [Required(ErrorMessage = "Preço de saída é necessário ser preenchido")]
    public decimal PrecoSaida { get; set; }

    public string Descricao { get; set; }

    [Required(ErrorMessage = "Peso Líquido é necessário ser preenchido")]
    public decimal PesoLiquido { get; set; }

    [Required(ErrorMessage = "Peso bruto é necessário ser preenchido")]
    public decimal PesoBruto { get; set; }
  }
}
