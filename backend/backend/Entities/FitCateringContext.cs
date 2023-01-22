using Microsoft.EntityFrameworkCore;

namespace backend.Entities
{
    public class FitCateringContext : DbContext
    {
        public FitCateringContext(DbContextOptions<FitCateringContext> options) : base(options)
        {

        }

        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Diet> Diets { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}
