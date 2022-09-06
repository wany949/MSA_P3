﻿using Domain.Models;

namespace Service.IService
{
    public interface IFoodService
    {
        public IEnumerable<Food> GetAllFood();
        public List<Food> Get3CourseMeal();
        public Food GetFoodByName(string name);
        public void AddFood(Food food);
        public void RemoveFood(Food food);
        public void UpdateFood(Food food);
    }
}
