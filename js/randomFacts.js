// Random Facts

function randomFact() {
	var myFacts = ["Dinosaurs first appeared during the Triassic period (248 to 213 million years ago), and were the dominant land animals through the entire Jurassic period, and to the end of the Cretaceous period (65 million years ago).",
				"We know about dinosaurs because fossils have been found. The fossils, which are generally found in sedimentary rocks, including fossilized body parts (bones, teeth, skin, claws, etc.), as well as trace fossils ('ichnofossils') which show how the animals lived, which include footprints, burrows, nests, toothmarks, dung, etc.",
				"The earth's continents slowly move through a process known as 'plate tectonics'. When dinosaurs first appeared during the Triassic period, all the earth's continents were joined together in one super-continent known as 'Pangea'.",
				"All the familiar types of dinosaurs, died off at the end of the Cretaceous period. There are many different theories why this may have happened, but today the most popular theory is that an asteriod hit the earth, blocking out the sunlight so that there was not enough food available. Evidence for this theory is a layer of iridium, which is believed to have come from the asteroid, has been found around the world, and a possible impact site found in southern Mexico.",
				"The smallest known dinosaur is Compsognathus, which lived in Europe during the late Jurassic, and was about the size of a chicken. Compsognathus is believed to have eaten insects, lizards and other small animals.",
				"There are quite a few candidates for the largest dinosaur, as there are several types of dinosaur that were over 100 feet (30 metres) long. The largest was certainly some kind of sauropod (a four-legged plant-eating dinosaur with a long neck) that lived during the late Jurassic or early Cretaceous period."];
	 var randomNum = Math.floor(Math.random() * myFacts.length);
	document.write(myFacts[randomNum]);
		
}