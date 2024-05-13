package me.pluse.mealplanservice.dto;

import lombok.Data;
import me.pluse.mealplanservice.model.Mealplan;

import java.util.List;

@Data
public class MealplanResponse {
    private Long id;
    private String title;
    private String description;
    private String dietType;
    private String imageId;
    private String recipes;
    private String nutritionalInfo;
    private String portionSizes;

    public MealplanResponse(Mealplan mealPlan) {
        this.id = mealPlan.getId();
        this.title = mealPlan.getTitle();
        this.description = mealPlan.getDescription();
        this.dietType = mealPlan.getDietType();
        this.imageId = mealPlan.getImageId();
        this.recipes = mealPlan.getRecipes();
        this.nutritionalInfo = mealPlan.getNutritionalInfo();
        this.portionSizes = mealPlan.getPortionSizes();
    }
}
