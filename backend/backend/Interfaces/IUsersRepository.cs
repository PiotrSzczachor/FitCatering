using backend.DTO;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IUsersRepository
    {
        Task<IEnumerable<User>> getAllUsers();
        Task<User?> getUserById(int id);
        Task<ActionResult<string>> registerUser(UserRegisterDTO user);
        Task<ActionResult<User?>> deleteUser(int id);
    }
}
