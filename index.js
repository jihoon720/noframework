window.onload = ()=>{

	//outside = 1 - it is outside of droppable scope
	//outside = 0 - it is inside of droppable scope
	//default outside is 1 because the word is outside
	let outside = 1

	$('.droppable').droppable({
		//out and over are real time check to see if any dragggable object is hovered on top of the the droppable object
		out: ()=>{
			outside = 1
			console.log(outside)
		},
		over: ()=>{
			outside = 0
			console.log(outside)
		},
	})
	$('.draggable').draggable({
		stop: (event, ui) =>{
			if(!checkInside(outside)){
				//offsetX = ui.position.left - startX;
				//offsetY = ui.position.top - startY;
				$('#'+ui.helper.attr('id')).css({
					left: 0,
					top: 0
				})
			}
			else{
				//do nothing
				console.log("it is inside")
			}
			//set outside back to 1
			outside = 1
		}

	})
}

//if draggable is dropped outside of droppable scope, return false
const checkInside = (outside)=>{
	return (outside == 0) ? true : false
}
