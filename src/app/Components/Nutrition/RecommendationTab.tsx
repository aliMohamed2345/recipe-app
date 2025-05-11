const RecommendationTab = () => {
  return (
    <div className="p-5 border-border rounded-xl border mb-5">
      <h4 className="sm:text-2xl text-lg font-bold">Dietary Recommendations</h4>
      <p className="sm:text-md text-xs text-muted-foreground">
        General nutrition guidelines based on your goals
      </p>
      <div className="flex flex-col gap-5 mt-5 pl-3">
        <div className="mt-2">
          <h5 className="sm:text-lg text-base font-bold mb-4">Weight Loss</h5>
          <div className=" pl-5">
            <ul className="list-disc font-bold space-y-2 text-sm sm:text-base">
              <li>
                Aim for a moderate calorie deficit (300-500 calories below
                maintenance)
              </li>
              <li>Higher protein intake (1.6-2.2g per kg of bodyweight)</li>
              <li>Prioritize whole foods and fiber-rich carbohydrates</li>
              <li>Include healthy fats for hormone regulation</li>
              <li>Stay hydrated with at least 8 glasses of water daily</li>
              <li>Focus on nutrient-dense foods for satiety</li>
            </ul>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="sm:text-lg text-base font-bold mb-4">Muscle Gain</h5>
          <div className=" pl-5">
            <ul className="list-disc font-bold space-y-2 text-sm sm:text-base">
              <li>
                Eat in a slight caloric surplus (200-300 calories above
                maintenance)
              </li>
              <li>High protein intake (1.6-2.2g per kg of bodyweight)</li>
              <li>Sufficient carbohydrates to fuel workouts</li>
              <li>Moderate fat intake for hormonal health</li>
              <li>Consume protein regularly throughout the day</li>
              <li>Consider nutrient timing around workouts</li>
            </ul>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="sm:text-lg text-base font-bold mb-4">Maintenance</h5>
          <div className=" pl-5">
            <ul className="list-disc font-bold space-y-2 text-sm sm:text-base">
              <li>Eat at your maintenance calories</li>
              <li>Balanced macronutrient distribution</li>
              <li>Focus on nutrient-dense whole foods</li>
              <li>Adjust as activity levels change</li>
              <li>Practice mindful eating habits</li>
              <li>Consider food quality over quantity</li>
            </ul>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="sm:text-lg text-base font-bold mb-4">
            General Health
          </h5>
          <div className=" pl-5">
            <ul className="list-disc font-bold space-y-2 text-sm sm:text-base">
              <li>Prioritize whole, unprocessed foods</li>
              <li>Include a variety of colorful fruits and vegetables</li>
              <li>Choose lean protein sources</li>
              <li>Opt for complex carbohydrates over simple sugars</li>
              <li>
                Include healthy fats from sources like avocado, nuts, and olive
                oil
              </li>
              <li>
                Limit added sugars, processed foods, and excessive alcohol
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationTab;
