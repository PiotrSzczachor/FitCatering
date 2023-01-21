using AutoMapper;
using backend.DTO;
using backend.Entities;

namespace backend.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<DishDTO, Dish>();
            CreateMap<DietDTO, Diet>();
            CreateMap<DiscountDTO, Discount>();
            CreateMap<UserRegisterDTO, User>();
        }
    }
}
