package me.pluse.mealplanservice.repository;

import me.pluse.mealplanservice.model.Mealplan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealplanRepository extends JpaRepository<Mealplan, Long> {
}
