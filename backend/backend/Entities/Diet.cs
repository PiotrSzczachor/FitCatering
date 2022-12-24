using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Diet
    {
        [Key]
        public int Id { get; set; }
        public string? DietName { get; set; }
        public string? Description { get; set; }
        public int NumberOfCalories { get; set; }
        public double Price { get; set; }
    }
}
