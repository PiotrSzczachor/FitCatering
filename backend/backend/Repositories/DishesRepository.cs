using AutoMapper;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
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

        public async Task<Dish?> getDishById(int id)
        {
            return await db.Dishes.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ActionResult<Dish>> addDish(Dish dish)
        {
            await db.Dishes.AddAsync(dish);
            await db.SaveChangesAsync();
            return dish;
        }

        public async Task<ActionResult<Dish?>> deleteDish(int id)
        {
            var dish = await db.Dishes.FirstOrDefaultAsync(x => x.Id == id);
            if (dish != null)
            {
                db.Dishes.Remove(dish);
                await db.SaveChangesAsync();
            }
            return dish;
        }

        public async Task<ActionResult<List<DishDTO>>> addDishes(List<DishDTO> dishesDTO)
        {
            foreach (var dishDTO in dishesDTO)
            {
                var dish = mapper.Map<DishDTO, Dish>(dishDTO);
                await db.Dishes.AddAsync(dish);
            }
            await db.SaveChangesAsync();
            return dishesDTO;
        }

        public async Task<IEnumerable<CuisineDTO>> getCuisines()
        {
            var dishes = await db.Dishes.ToListAsync();
            List<string> cuisines = new List<string>();
            List<CuisineDTO> cuisineDTOs = new List<CuisineDTO>();
            foreach (Dish dish in dishes)
            {
                if (dish.Cuisine != null && !cuisines.Contains(dish.Cuisine)) cuisines.Add(dish.Cuisine);
            }
            for(int i = 0; i < cuisines.Count; i++)
            {
                cuisineDTOs.Add(new CuisineDTO { Id = i, Name = cuisines[i] });
            }
            return cuisineDTOs;
        }
    }
}
