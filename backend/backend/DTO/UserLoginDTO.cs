﻿using System.ComponentModel.DataAnnotations;

namespace backend.DTO
{
    public class UserLoginDTO
    {
        [Required]
        public string? Username { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
