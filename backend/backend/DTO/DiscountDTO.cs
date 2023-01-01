namespace backend.DTO
{
    public class DiscountDTO
    {
        public string? Code { get; set; }
        public string? Value { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
    }
}
