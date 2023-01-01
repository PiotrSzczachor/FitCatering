
using AutoMapper;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class DiscountsRepository : IDiscountRepository
    {
        private readonly FitCateringContext db;
        private readonly IMapper mapper;
        public DiscountsRepository(FitCateringContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        public async Task<Discount?> getDiscountById(int id)
        {
            return await db.Discounts.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Discount>> getDiscounts()
        {
            return await db.Discounts.ToListAsync();
        }

        public async Task<ActionResult<Discount>> addDiscount(Discount discount)
        {
            await db.Discounts.AddAsync(discount);
            await db.SaveChangesAsync();
            return discount;
        }

        public async Task<ActionResult<List<DiscountDTO>>> addDiscounts(List<DiscountDTO> discountDTOs)
        {
            foreach(DiscountDTO discountDTO in discountDTOs)
            {
                var discount = mapper.Map<DiscountDTO, Discount>(discountDTO);
                await db.Discounts.AddAsync(discount);
            }
            await db.SaveChangesAsync();
            return discountDTOs;
        }

        public async Task<ActionResult<Discount?>> deleteDiscount(int id)
        {
            var discount = await db.Discounts.FirstOrDefaultAsync(x => x.Id == id);
            if(discount != null)
            {
                db.Discounts.Remove(discount);
            }
            await db.SaveChangesAsync();
            return discount;
        }
    }
}
