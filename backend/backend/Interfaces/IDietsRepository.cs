using backend.DTO;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IDietsRepository
    {
        Task<IEnumerable<Diet>> getAllDiets();
        Task<Diet?> getDietById(int id);
        Task<ActionResult<Diet>> addDiet(Diet diet);
        Task<ActionResult<Diet?>> deleteDiet(int id);
        Task<ActionResult<List<DietDTO>>> addDiets(List<DietDTO> diets);
    }
}
