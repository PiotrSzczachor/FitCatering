using backend.Entities;
using Microsoft.Build.Framework;

namespace backend.DTO
{
    public class RegisterDTO
    {
        public UserRegisterDTO User { get; set; }
        public AddressDTO? Address { get; set; }
    }
}
