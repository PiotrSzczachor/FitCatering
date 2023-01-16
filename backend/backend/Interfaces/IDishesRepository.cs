using backend.DTO;
using backend.Entities;
using backend.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IDishesRepository
    {
        Task<PagedList<Dish>> getDishes(PaginParameters paginParameters);
        Task<Dish?> getDishById(int id);
        Task<ActionResult<Dish>> addDish(Dish dish);
        Task<ActionResult<Dish?>> deleteDish(int id);
        Task<ActionResult<List<DishDTO>>> addDishes(List<DishDTO> dishes);
        Task<IEnumerable<CuisineDTO>> getCuisines();
    }
}
