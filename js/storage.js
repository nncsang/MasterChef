function updateAdd(){
	var meals = JSON.parse(localStorage["meals"]);
	for (i = 1; i <= 6; i++){
		var meal = document.getElementById("meal" + i);
		if (meals.indexOf(i) != -1){
			meal.style.display = "none";
		}else{
			meal.style.display = "block";
		}
	}
}

function appendMeal(index)
{
	var cur;
	
	if (localStorage["meals"] == undefined)
	{
		cur = [];
	}
	else
	{
		cur = JSON.parse(localStorage["meals"]);
	}
	
	cur.push(index);
	localStorage["meals"] = JSON.stringify(cur);
	updateAdd();
}

function removeMeal(index)
{
	if (localStorage["meals"] != undefined)
	{
		var cur = JSON.parse(localStorage["meals"]);
		cur.splice(index, 1);
		localStorage["meals"] = JSON.stringify(cur);
		//updateAdd();
	}
}