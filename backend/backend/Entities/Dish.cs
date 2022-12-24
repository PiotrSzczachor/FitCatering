using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Dish
    {
        [Key]
        public int Id { get; set; }
        public string? ImgUrl { get; set; }
        public string? Name { get; set; }
        public string? Cuisine { get; set; }
        public string? Type { get; set; }
        public double Price { get; set; }
    }
}
