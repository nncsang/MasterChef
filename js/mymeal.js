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
				switch(meals[i]){
					case 1:
						listbody += ['<div class="col-md-4 col-sm-6">',
	                        '<div class="blog-post">',
	                            '<div class="blog-thumb">',
	                                '<img src="images/phovn.jpg" alt="" />',
	                            '</div>',
	                            '<div class="blog-content">',
	                                '<div class="content-show">',
	                                    '<h4><a href="detail.html">PHỞ VIETNAM</a></h4>',
	                                    '<span>Pre / Cooking Time: 0.5 / 2 hours</span>',
	                                    '<br>',
	                                    '<span>Calories and Fat Grams: 200 kcal/ 150g</span>',
	                                    '<br>',
	                                    '<span>Serves: 2 people</span>',
	                                    '<div id="meal1">',
	                                       '<img class="add_button" src="images/remove_button.png"><a href="#" style="font-size: 11px; !important" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
	                                    '</div>',
	                                '</div>',
	                                '<div class="content-hide">',
	                                    '<p>Pho is a Vietnamese national dish. It can be eaten at any time on any day. If you are having Vietnamese guests, or maybe even Vietnamese relatives, you might want to try to make this so they can be surprised at your cooking skills.</p>',
	                                '</div>',
	                            '</div>',
	                        '</div>',
	                    '</div>'].join('\n');
					break;
					case 2:
						listbody += ['<div class="col-md-4 col-sm-6">',
	                        '<div class="blog-post">',
	                            '<div class="blog-thumb">',
	                                '<img src="images/fondue.jpg" alt="" />',
	                            '</div>',
	                            '<div class="blog-content">',
	                                '<div class="content-show">',
	                                    '<h4><a href="detailfondue.html">FONDUE AU FROMAGE</a></h4>',
	                                    '<span>Pre / Cooking Time: 0.5 / 1 hour</span>',
	                                    '<br>',
	                                    '<span>Calories and Fat Grams: 200 kcal/ 150g</span>',
	                                    '<br>',
	                                    '<span>Serves: 2 people</span>',
	                                    '<div id="meal2">',
	                                       '<img class="add_button" src="images/remove_button.png"><a href="#" style="font-size: 11px; !important" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
	                                    '</div>',
	                                '</div>',
	                                '<div class="content-hide">',
	                                    '<p>I tried this just before the Noel, it\'s so tasty.</p>',
	                                '</div>',
	                            '</div>',
	                        '</div>',
	                    '</div>'].join('\n');
					break;
					case 3:
						listbody += ['<div class="col-md-4 col-sm-6">',
	                        '<div class="blog-post">',
	                            '<div class="blog-thumb">',
	                                '<img src="images/curry.jpg" alt="" />',
	                            '</div>',
	                            '<div class="blog-content">',
	                                '<div class="content-show">',
	                                    '<h4><a href="detailcurry.html">Fish & prawn curry</a></h4>',
	                                    '<span>Pre / Cooking Time: 0.5 / 2 hours</span>',
	                                    '<br>',
	                                    '<span>Calories and Fat Grams: 500 kcal/ 250g</span>',
	                                    '<br>',
	                                    '<span>Serves: 6 people</span>',
	                                    '<div id="meal3">',
	                                       '<img class="add_button" src="images/remove_button.png"><a href="#" style="font-size: 11px; !important" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
	                                    '</div>',
	                                '</div>',
	                                '<div class="content-hide">',
	                                    '<p>This is version of a prawn curry from Nonya Flavours: A Complete Guide To Penang Straits Chinese Cuisine. It\'s a favourite in our house and dead easy.</p>',
	                                '</div>',
	                            '</div>',
	                        '</div>',
	                    '</div>'].join('\n');
					break;
					case 4:
						listbody += ['<div class="col-md-4 col-sm-6">',
	                        '<div class="blog-post">',
	                            '<div class="blog-thumb">',
	                                '<img src="images/zuppa.jpg" alt="" />',
	                            '</div>',
	                            '<div class="blog-content">',
	                                '<div class="content-show">',
	                                    '<h4><a href="detailzuppa.html">Zuppa di fagioli e porcini</a></h4>',
	                                    '<span>Pre / Cooking Time: 1 / 3.5 hours</span>',
	                                    '<br>',
	                                    '<span>Calories and Fat Grams: 300 kcal/ 200g</span>',
	                                    '<br>',
	                                    '<span>Serves: 4 people</span>',
	                                    '<div id="meal4">',
	                                       '<img class="add_button" src="images/remove_button.png"><a href="#" style="font-size: 11px; !important" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
	                                    '</div>',
	                                '</div>',
	                                '<div class="content-hide">',
	                                    '<p>Bean-based soups often make an appearance in my kitchen over the winter months, when their heartiness is welcome.</p>',
	                                '</div>',
	                            '</div>',
	                        '</div>',
	                    '</div>'].join('\n');
					break;
					case 5:
						listbody += ['<div class="col-md-4 col-sm-6">',
	                        '<div class="blog-post">',
	                            '<div class="blog-thumb">',
	                                '<img  src="images/haloumi.jpg" alt="" />',
	                            '</div>',
	                            '<div class="blog-content">',
	                                '<div class="content-show">',
	                                    '<h4><a href="detailhaloumi.html">Haloumi</a></h4>',
	                                    '<span>Pre / Cooking Time: 0.5 / 2.5 hours</span>',
	                                    '<br>',
	                                    '<span>Calories and Fat Grams: 200 kcal/ 150g</span>',
	                                    '<br>',
	                                    '<span>Serves: 4 people</span>',
	                                    '<div id="meal5">',
	                                       '<img class="add_button" src="images/remove_button.png"><a href="#" style="font-size: 11px; !important" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
	                                    '</div>',
	                                '</div>',
	                                '<div class="content-hide">',
	                                    '<p>Haloumi with honeyed eggplant, chickpea & cumin salad with green olive & parsley sauce</p>',
	                                '</div>',
	                            '</div>',
	                        '</div>',
	                    '</div>'].join('\n');
					break;
					case 6:
						listbody += ['<div class="col-md-4 col-sm-6">',
	                        '<div class="blog-post">',
	                            '<div class="blog-thumb">',
	                                '<img src="images/chicken.jpg" alt="" />',
	                            '</div>',
	                            '<div class="blog-content">',
	                                '<div class="content-show">',
	                                    '<h4><a href="detailchicken.html">Chicken, carrot & pea soup</a></h4>',
	                                    '<span>Pre / Cooking Time: 0.7 / 3 hours</span>',
	                                    '<br>',
	                                    '<span>Calories and Fat Grams: 300 kcal/ 150g</span>',
	                                    '<br>',
	                                    '<span>Serves: 6 people</span>',
	                                    '<div id="meal6">',
	                                       '<img class="add_button" src="images/remove_button.png"><a href="#" style="font-size: 11px; !important" onclick="removeMeal(' + i + '); updateMeals(); return false;"> Remove from my meal</a></span>',
	                                    '</div>',
	                                '</div>',
	                                '<div class="content-hide">',
	                                    '<p>A very popular soup, it\'s easy to make, fast and simple</p>',
	                                '</div>',
	                            '</div>',
	                        '</div>',
	                    '</div>'].join('\n');
					break;
				}
			}
			$("#meallist").html(listbody);
		}
	}
}

					