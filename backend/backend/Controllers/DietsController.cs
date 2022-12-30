using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    public class DietsController : Controller
    {
        private IDietsRepository IdietsRepository;
        public DietsController(IDietsRepository _dietsRepository)
        {
            IdietsRepository = _dietsRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Diet>> GetDiets()
        {
            return await IdietsRepository.getAllDiets();
        }

        [HttpGet("{id}")]
        public Task<Diet?> GetDiet(int id)
        {
            return IdietsRepository.getDietById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Diet>> AddDiet([FromBody] Diet diet)
        {
            return await IdietsRepository.addDiet(diet);
        }

        [HttpPost("AddMultiple")]
        public async Task<ActionResult<List<DietDTO>>> AddDiets([FromBody] List<DietDTO> diets)
        {
            return await IdietsRepository.addDiets(diets);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Diet?>> DeleteDiet(int id)
        {
            return await IdietsRepository.deleteDiet(id);
        }
    }
}
