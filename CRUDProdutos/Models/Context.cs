using Microsoft.EntityFrameworkCore;

namespace CRUDProdutos.Models
{
    public class Context: DbContext
    {
        public DbSet<Produtos>? Produtos {get; set;}
        public DbSet<Fornecedores>? Fornecedores {get; set;}

        public Context(DbContextOptions<Context> opcoes): base(opcoes)
        {
            
        }
    }
}