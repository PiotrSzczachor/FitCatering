﻿namespace backend.DTO
{
    public class DishDTO
    {
        public string? ImgUrl { get; set; }
        public string? Name { get; set; }
        public string? Cuisine { get; set; }
        public string? Type { get; set; }
        public bool IsVege { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }
    }
}
