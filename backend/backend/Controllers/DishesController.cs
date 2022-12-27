using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

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
        
        // GET: api/<DishesController>
        [HttpGet]
        public async Task<IEnumerable<Dish>> Get()
        {
            return await IdishesRepository.getAllDishes();
        }

        // GET api/<DishesController>/5
        [HttpGet("{id}")]
        public Dish? Get(int id)
        {
            return IdishesRepository.getDishById(id);
        }

        // POST api/<DishesController>
        [HttpPost]
        public void Post([FromBody] Dish dish)
        {
            IdishesRepository.addDish(dish);
        }

        [HttpPost("AddMultiple")]
        public void Post([FromBody] List<DishDTO> dishes)
        {
            IdishesRepository.addDishes(dishes);
        }

        // PUT api/<DishesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DishesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            IdishesRepository.deleteDish(id);
        }
    }
}
