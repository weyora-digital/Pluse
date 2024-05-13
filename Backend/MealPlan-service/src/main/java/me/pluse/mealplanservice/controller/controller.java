package me.pluse.mealplanservice.controller;

import lombok.AllArgsConstructor;
import me.pluse.mealplanservice.dto.MealplanRequest;
import me.pluse.mealplanservice.dto.MealplanResponse;
import me.pluse.mealplanservice.service.MealplanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/mealplan")
//@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@AllArgsConstructor
public class controller {
    @Autowired
    private final MealplanService mealPlanService;


    @PostMapping("/createmealplan")
    public ResponseEntity<MealplanResponse> createMealPlan(@RequestPart("file")MultipartFile file, @RequestPart("mealPlanJson") String mealPlanJson) throws IOException {
        MealplanResponse response = mealPlanService.createMealPlan(file, mealPlanJson);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/getallmealplans")
    public ResponseEntity<List<MealplanResponse>> getAllMealPlans() {
        List<MealplanResponse> responses = mealPlanService.getAllMealPlans();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/getallmealplans/{id}")
    public ResponseEntity<MealplanResponse> getMealPlans(@PathVariable Long id) {
        try {
            MealplanResponse mealPlanResponse = mealPlanService.getMealPlans(id);
            return ResponseEntity.ok(mealPlanResponse);
        } catch (IllegalStateException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MealplanResponse> updateMealPlan(@PathVariable Long id,
                                                           @RequestParam(value = "file",required = false) MultipartFile file,
                                                           @RequestParam("mealPlanJson") String mealPlanJson) {
        try {
            MealplanResponse updatedMealPlan = mealPlanService.updateMealPlan(id, file, mealPlanJson);
            return ResponseEntity.ok(updatedMealPlan);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (IllegalStateException | IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMealPlan(@PathVariable Long id) {
        try {
            mealPlanService.deleteMealPlan(id);
            return ResponseEntity.ok().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.notFound().build();
        }
    }


}
