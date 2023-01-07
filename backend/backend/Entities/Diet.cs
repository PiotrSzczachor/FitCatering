using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Diet
    {
        [Key]
        public int Id { get; set; }
        public string? ImgUrl { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int NumberOfCalories { get; set; }
        public bool IsVege { get; set; }
        public double Price { get; set; }
        public List<string>? PhotosUrls { get; set; }
        public ICollection<Comment>? Comments { get; set; }
    }
}
