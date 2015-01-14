function updateMeals()
{
	if (localStorage["meals"] == undefined)
	{
		$("#meallist").html('<div class="col-md-4 col-sm-6"><p>Add some food to your meal!</p></div>');
	}
	else
	{
		var meals = JSON.parse(localStorage["meals"]);
		if (meals.length == 0)
		{
			$("#meallist").html('<div class="col-md-4 col-sm-6"><p>Add some food to your meal!</p></div>');
		}
		else
		{
			var listbody = "";
			for (i = 0; i < meals.length; i++)
			{
				listbody += ['<div class="col-md-4 col-sm-6">',
								'<div class="blog-post">',
									'<div class="blog-thumb">',
										'<img src="images/phovn.jpg" alt="" />',
									'</div>',
									'<div class="blog-content">',
										'<div class="content-show">',
											'<h4><a href="detail.html">MEAL # ' + meals[i] + '</a></h4>',
											'<span>Pre / Cooking Time: 0.5 / 2 hours</span>',
											'<br>',
											'<span>Calories and Fat Grams: 200 kcal/ 150g</span>',
											'<br>',
											'<span>Serves: 2 people</span>',
											'<br>',
											'<span><a href="#" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
										'</div>',
									'</div>',
								'</div>',
							'</div>'].join('\n');
			}
			$("#meallist").html(listbody);
		}
	}
}

					