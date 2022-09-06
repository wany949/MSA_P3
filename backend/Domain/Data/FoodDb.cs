using Microsoft.EntityFrameworkCore;
using Domain.Models;

namespace Domain.Data
{
    public class FoodDb : DbContext
    {
        public FoodDb(DbContextOptions<FoodDb> options) : base(options) { }
        public DbSet<Food> FoodList { get; set; } = null!;
    }
            
}
