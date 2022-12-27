using AutoMapper;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class DishesRepository : IDishesRepository
    {
        private readonly FitCateringContext db;
        private readonly IMapper mapper;

        public DishesRepository(FitCateringContext _db, IMapper _mapper)
        {
            db = _db;
            mapper = _mapper;

        }

        public async Task<IEnumerable<Dish>> getAllDishes()
        {
            return await db.Dishes.ToListAsync();
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

        public void addDishes(List<DishDTO> dishesDTO)
        {
            foreach (var dishDTO in dishesDTO)
            {
                var dish = mapper.Map<DishDTO, Dish>(dishDTO);
                db.Dishes.Add(dish);
            }
            db.SaveChanges();
        }
    }
}
