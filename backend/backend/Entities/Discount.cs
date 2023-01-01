﻿using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Discount
    {
        [Key]
        public int Id { get; set; }
        public string? Code { get; set; }
        public int Value { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
