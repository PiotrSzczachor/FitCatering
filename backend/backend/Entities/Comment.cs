using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public float Rating { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public User? Auhor { get; set; }
    }
}
