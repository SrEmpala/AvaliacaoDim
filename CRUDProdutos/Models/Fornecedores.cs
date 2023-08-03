using System.ComponentModel.DataAnnotations;

namespace CRUDProdutos.Models
{
    public class Fornecedores
    {
        public int Id {get; set;}

        [Required(ErrorMessage = "CPF é necessário ser preenchido")]
        public string CPF {get; set;}

        [Required(ErrorMessage = "Nome é necessário ser preenchido")]
        public string Nome {get; set;}

        public string NomeFantasia {get; set;}

        [Required(ErrorMessage = "CEP é necessário ser preenchido")]
        public string CEP {get; set;}

        [Required(ErrorMessage = "Email é necessário ser preenchido")]
        public string Email {get; set;}

        [Required(ErrorMessage = "Telefone Responsável é necessário ser preenchido")]
        public string Telefone {get; set;}

        public string CelularWpp {get; set;}

        public string Observacoes {get; set;}

    }
}