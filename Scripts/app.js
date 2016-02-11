"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

	var paragraphData = ["First Paragraph Stuff", "Second Pararaph Stuff", "Third Paragraph Stuff", "Fourth Paragraph Stuff"];

	paragraphData[4] = "Fifth Paragraph Stuff";
	paragraphData[5] = "Sixth Paragraph Stuff";
	
	paragraphData.push("Seventh Paragraph Stuff");

	console.log("App Started...");

	/* the fugly way
	console.log(paragraphData[1]);
	console.log(paragraphData[2]);
	console.log(paragraphData[3]);
	console.log(paragraphData[4]);
	console.log(paragraphData[5]);
	console.log(paragraphData[6]);
	*/
	
	// a little bit nicer
	var paragraphDataLength = paragraphData.length;
	for(var index= 0; index < 7; index++ ) {
		console.log(paragraphData[index]);
	}

	//declared a named function way

	function replaceFirstParagraph() {
		console.log("inside replaceFirstParagraph function");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My New Paragraph Data";
	}

	// declare an anonymous function with named alias
	/*
	var replaceFirstParagraph = function() {
		console.log("inside replaceFirstParagraph anonymous function");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My New Paragraph Data";
	};
	*/

	// call the replaceFirstParagraph function
	replaceFirstParagraph();


})();