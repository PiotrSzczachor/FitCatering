using backend.Entities;
using backend.Interfaces;

namespace backend.Services
{
    public class DishesService : IDishesService
    {
        private readonly FitCateringContext db;

        public DishesService(FitCateringContext _db)
        {
            db = _db;
        }

        public IEnumerable<Dish> getAllDishes()
        {
            return db.Dishes.ToList();
        }

        public Dish? getDishById(int id)
        {
            return db.Dishes.FirstOrDefault(x => x.Id == id);
        }

        public void addDish(Dish dish)
        {
            db.Dishes.Add(dish);
            db.SaveChanges();
        }

        public void deleteDish(int id)
        {
            var dish = db.Dishes.FirstOrDefault(x => x.Id == id);
            if (dish != null)
            {
                db.Dishes.Remove(dish);
                db.SaveChanges();
            }
        }
    }
}
