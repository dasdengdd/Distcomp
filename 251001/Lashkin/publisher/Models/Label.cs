﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Publisher.Models;

public class Label : BaseModel
{
    [Required]
    [MinLength(2)]
    [MaxLength(32)]
    [Column("name", TypeName = "text")]
    public string Name { get; set; }

    public virtual List<News> News { get; set; } = [];
}