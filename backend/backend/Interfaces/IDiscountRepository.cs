using backend.Entities;
using backend.DTO;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IDiscountRepository
    {
        Task<IEnumerable<Discount>> getDiscounts();
        Task<Discount?> getDiscountById(int id);
        Task<ActionResult<Discount>> addDiscount(Discount discount);
        Task<ActionResult<Discount?>> deleteDiscount(int id);
        Task<ActionResult<List<DiscountDTO>>> addDiscounts(List<DiscountDTO> discountDTOs);
    }
}
