using backend.DTO;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IDishesRepository
    {
        Task<IEnumerable<Dish>> getAllDishes();
        Task<Dish?> getDishById(int id);
        Task<ActionResult<Dish>> addDish(Dish dish);
        Task<ActionResult<Dish?>> deleteDish(int id);
        Task<ActionResult<List<DishDTO>>> addDishes(List<DishDTO> dishes);
        Task<IEnumerable<CuisineDTO>> getCuisines();
    }
}
