using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUsersRepository userRepository;

        public UsersController(IUsersRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await userRepository.getAllUsers();
        }

        [HttpGet("{id}")]
        public async Task<User?> GetDiet(int id)
        {
            return await userRepository.getUserById(id);
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddDiet([FromBody] User user)
        {
            return await userRepository.addUser(user);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User?>> DeleteDiet(int id)
        {
            return await userRepository.deleteUser(id);
        }
    }
}