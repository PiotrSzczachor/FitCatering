using backend.Entities;

namespace backend.DTO
{
    public class UserRegisterDTO
    {
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Email { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordSalt { get; set; }
        public Address? Address { get; set; }
    }
}
