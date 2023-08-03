using Microsoft.AspNetCore.Mvc;
using CRUDProdutos.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRUDProdutos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class FornecedoresController : ControllerBase
    {
        private readonly Context _contexto;

        public FornecedoresController(Context contexto)
        {
            _contexto = contexto;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fornecedores>>> BuscarTodosAsync()
        {
            return await _contexto.Fornecedores.ToListAsync();
        }

        [HttpGet("{fornecedorId}")]
        public async Task<ActionResult<Fornecedores>> BuscarFornecedorIdAsync(int fornecedorId)
        {
            Fornecedores fornecedor = await _contexto.Fornecedores.FindAsync(fornecedorId);

            if(fornecedor == null)
            {
                return NotFound();
            }

            return fornecedor;
        }

        [HttpPost]
        public async Task<ActionResult<Fornecedores>> SalvarFornecedoresAsync(Fornecedores fornecedor)
        {
            await _contexto.Fornecedores.AddAsync(fornecedor);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarFornecedorAsync(Fornecedores fornecedor)
        {
            _contexto.Fornecedores.Update(fornecedor);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{fornecedorId}")]
        public async Task<ActionResult> ExcluirFornecedorAsync(int fornecedorId)
        {
            Fornecedores fornecedor = await _contexto.Fornecedores.FindAsync(fornecedorId);
            _contexto.Remove(fornecedor);
            await _contexto.SaveChangesAsync();

            return Ok();
        }
    }
}