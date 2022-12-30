namespace backend.DTO
{
    public class DietDTO
    {
        public string? ImgUrl { get; set; }
        public string? DietName { get; set; }
        public string? Description { get; set; }
        public int NumberOfCalories { get; set; }
        public bool IsVege { get; set; }
        public double Price { get; set; }
    }
}
