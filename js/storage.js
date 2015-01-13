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
}

function removeMeal(index)
{
	if (localStorage["meals"] != undefined)
	{
		var cur = JSON.parse(localStorage["meals"]);
		cur.splice(index, 1);
		localStorage["meals"] = JSON.stringify(cur);
	}
}