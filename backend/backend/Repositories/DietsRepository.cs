using AutoMapper;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class DietsRepository : IDietsRepository
    {
        private readonly FitCateringContext db;
        private readonly IMapper mapper;

        public DietsRepository(FitCateringContext _db, IMapper _mapper)
        {
            db = _db;
            mapper = _mapper;

        }
        public async Task<IEnumerable<Diet>> getAllDiets()
        {
            return await db.Diets.ToListAsync();
        }

        public async Task<Diet?> getDietById(int id)
        {
            return await db.Diets.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<ActionResult<Diet>> addDiet(Diet diet)
        {
            await db.Diets.AddAsync(diet);
            await db.SaveChangesAsync();
            return diet;
        }

        public async Task<ActionResult<List<DietDTO>>> addDiets(List<DietDTO> dietsDTO)
        {
            foreach (var dietDTO in dietsDTO)
            {
                var diet = mapper.Map<DietDTO, Diet>(dietDTO);
                await db.Diets.AddAsync(diet);
            }
            await db.SaveChangesAsync();
            return dietsDTO;
        }

        public async Task<ActionResult<Diet?>> deleteDiet(int id)
        {
            var diet = await db.Diets.FirstOrDefaultAsync(x => x.Id == id);
            if (diet != null)
            {
                db.Diets.Remove(diet);
                await db.SaveChangesAsync();
            }
            return diet;
        }
    }
}
