using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using backend.Services;
using backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishesController : ControllerBase
    {
        private IDishesRepository IdishesRepository;
        public DishesController(IDishesRepository _dishesRepository)
        {
            IdishesRepository = _dishesRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Dish>> GetDishes()
        {
             return await IdishesRepository.getDishes();
        }
        [HttpGet("Pagin")]
        public async Task<PagedList<Dish>> GetDishesPagin([FromQuery] PaginParameters paginParameters)
        {
            return await IdishesRepository.getDishesPagin(paginParameters);
        }

        [HttpGet("{id}")]
        public async Task<Dish?> GetDish(int id)
        {
            return await IdishesRepository.getDishById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Dish>> AddDish([FromBody] Dish dish)
        {
            return await IdishesRepository.addDish(dish);
        }

        [HttpPost("AddMultiple")]
        public async Task<ActionResult<List<DishDTO>>> AddDishes([FromBody] List<DishDTO> dishes)
        {
            return await IdishesRepository.addDishes(dishes);
        }

        [HttpPut("{id}")]
        public void UpdateDish(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Dish?>> DeleteDish(int id)
        {
            return await IdishesRepository.deleteDish(id);
        }

        [HttpGet("GetCuisines")]
        public async Task<IEnumerable<CuisineDTO>> getCuisines()
        {
            return await IdishesRepository.getCuisines();
        }

        [HttpGet("GetDishesNumber")]
        public async Task<int> getDishesNumber()
        {
            return await IdishesRepository.getDishesNumber();
        }
    }
}
