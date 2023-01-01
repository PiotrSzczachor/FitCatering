using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscountsController : Controller
    {
        private readonly IDiscountRepository discountRepository;

        public DiscountsController(IDiscountRepository discountRepository)
        {
            this.discountRepository = discountRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Discount>> GetDiscounts()
        {
            return await discountRepository.getDiscounts();
        }

        [HttpGet("{id}")]
        public async Task<Discount?> GetDiet(int id)
        {
            return await discountRepository.getDiscountById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Discount>> AddDiet([FromBody] Discount discount)
        {
            return await discountRepository.addDiscount(discount);
        }

        [HttpPost("AddMultiple")]
        public async Task<ActionResult<List<DiscountDTO>>> AddDiets([FromBody] List<DiscountDTO> discounts)
        {
            return await discountRepository.addDiscounts(discounts);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Discount?>> DeleteDiet(int id)
        {
            return await discountRepository.deleteDiscount(id);
        }
    }
}
