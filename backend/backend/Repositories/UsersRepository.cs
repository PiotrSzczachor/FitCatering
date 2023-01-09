using AutoMapper;
using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<User>> addUser(User user)
        {
            if (user.Address != null)
            {
                await db.Addresses.AddAsync(user.Address);
            }
            await db.Users.AddAsync(user);
            await db.SaveChangesAsync();
            return user;
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
