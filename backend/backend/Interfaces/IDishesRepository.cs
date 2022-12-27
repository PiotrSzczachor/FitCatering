using backend.DTO;
using backend.Entities;

namespace backend.Interfaces
{
    public interface IDishesRepository
    {
        Task<IEnumerable<Dish>> getAllDishes();
        Dish? getDishById(int id);
        void addDish(Dish dish);
        void deleteDish(int id);
        void addDishes(List<DishDTO> dishes);
    }
}
