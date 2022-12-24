using backend.Entities;

namespace backend.Interfaces
{
    public interface IDishesService
    {
        IEnumerable<Dish> getAllDishes();
        Dish? getDishById(int id);
        void addDish(Dish dish);
        void deleteDish(int id);
    }
}
