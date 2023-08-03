using Microsoft.AspNetCore.Mvc;
using CRUDProdutos.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRUDProdutos.Controllers
{
  [ApiController]
  [Route("api/[controller]")]

  public class ProdutosController : ControllerBase
  {
    private readonly Context _contexto;

    public ProdutosController(Context contexto)
    {
      _contexto = contexto;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produtos>>> BuscarTodosAsync()
    {
      return await _contexto.Produtos.ToListAsync();
    }

    [HttpGet("{produtoId}")]
    public async Task<ActionResult<Produtos>> BuscarProdutoIdAsync(int produtoId)
    {
      Produtos produto = await _contexto.Produtos.FindAsync(produtoId);

      if (produto == null)
      {
        return NotFound();
      }

      return produto;
    }

    [HttpPost]
    public async Task<ActionResult<Produtos>> SalvarProdutosAsync(Produtos produto)
    {
      await _contexto.Produtos.AddAsync(produto);
      await _contexto.SaveChangesAsync();

      return Ok();
    }

    [HttpPut]
    public async Task<ActionResult> AtualizarProdutoAsync(Produtos produto)
    {
      _contexto.Produtos.Update(produto);
      await _contexto.SaveChangesAsync();

      return Ok();
    }

    [HttpDelete("{produtoId}")]
    public async Task<ActionResult> ExcluirProdutoAsync(int produtoId)
    {
      Produtos produto = await _contexto.Produtos.FindAsync(produtoId);
      _contexto.Remove(produto);
      await _contexto.SaveChangesAsync();

      return Ok();
    }
  }
}
