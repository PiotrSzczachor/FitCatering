using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await userRepository.getAllUsers();
        }

        [HttpGet("{id}")]
        public async Task<User?> GetUser(int id)
        {
            return await userRepository.getUserById(id);
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> RegisterUser([FromBody] UserRegisterDTO user)
        {
            return await userRepository.registerUser(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> LoginUser([FromBody] UserLoginDTO user)
        {
            return await userRepository.loginUser(user);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User?>> DeleteUser(int id)
        {
            return await userRepository.deleteUser(id);
        }
    }
}