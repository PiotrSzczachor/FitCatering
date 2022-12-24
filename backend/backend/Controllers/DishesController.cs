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
        private IDishesService IdishesService;
        public DishesController(IDishesService _dishesService)
        {
            IdishesService = _dishesService;
        }
        
        // GET: api/<DishesController>
        [HttpGet]
        public IEnumerable<Dish> Get()
        {
            return IdishesService.getAllDishes();
        }

        // GET api/<DishesController>/5
        [HttpGet("{id}")]
        public Dish? Get(int id)
        {
            return IdishesService.getDishById(id);
        }

        // POST api/<DishesController>
        [HttpPost]
        public void Post([FromBody] Dish dish)
        {
            IdishesService.addDish(dish);
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
            IdishesService.deleteDish(id);
        }
    }
}
