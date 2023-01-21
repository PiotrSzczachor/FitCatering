using AutoMapper;
using backend.DTO;
using backend.Entities;
using backend.Helpers;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace backend.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly FitCateringContext db;
        private readonly IMapper mapper;

        public UsersRepository(FitCateringContext _db, IMapper _mapper)
        {
            db = _db;
            mapper = _mapper;

        }
        public async Task<ActionResult<string>> registerUser(UserRegisterDTO registerDTO)
        {
            var user = mapper.Map<User>(registerDTO);
            if (user.Address != null)
            {
                await db.Addresses.AddAsync(user.Address);
            }
            using var hmac = new HMACSHA512();
            user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password));
            user.PasswordSalt = hmac.Key;
            await db.Users.AddAsync(user);
            await db.SaveChangesAsync();
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(ConfigurationManager.AppSetting["JWT:Secret"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokenOptions = new JwtSecurityToken(
                    issuer: ConfigurationManager.AppSetting["JWT:ValidIssuer"],
                    audience: ConfigurationManager.AppSetting["JWT:ValidAudience"],
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(6),
                    signingCredentials: signinCredentials
                );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return tokenString;
        }

        
        public async Task<ActionResult<User?>> deleteUser(int id)
        {
            var user = await db.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user != null) 
            {
                if(user.Address != null)
                {
                    db.Addresses.Remove(user.Address);
                }
                db.Users.Remove(user);
                await db.SaveChangesAsync();
            }
            return user;
        }

        public async Task<IEnumerable<User>> getAllUsers()
        {
            return await db.Users.ToListAsync();
        }

        public async Task<User?> getUserById(int id)
        {
            return await db.Users.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
