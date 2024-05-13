package me.pluse.mealplanservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class MealplanRequest {
    private String title;
    private String description;
    private String dietType;
    private String recipes;
    private String nutritionalInfo;
    private String portionSizes;
}
