using backend.DTO;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IUsersRepository
    {
        Task<IEnumerable<User>> getAllUsers();
        Task<User?> getUserById(int id);
        Task<ActionResult<User>> addUser(User user);
        Task<ActionResult<User?>> deleteUser(int id);
    }
}
