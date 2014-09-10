$( document ).ready(function() {
// added stuff for mockup

	$('.dropdown-toggle').dropdown();

	$('.dropdown').hover(function(){ 
  		$('.dropdown-toggle', this).trigger('click'); 
	});

	$('#main_c').load('views/pd6_total_pop.html');
	$('#people_h, #total_pop').addClass('pan-select');

	$('li > a').click(function() {
		$('li > a').removeClass('pan-select');
		$('#intro').removeClass('pan-select');
		$(this).addClass('pan-select');
		var menuItem = $(this).attr('data-cNav');
		$('#main_c').load('views/' + menuItem + '.html');	
	});

	$('.panel-title > a').click(function() {
		$('.panel-title > a').removeClass('pan-select');
		$(this).addClass('pan-select');
	});
	});


		
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};

// added stuff for mockup

var places = ['Algiers', 'Algiers Point', 'Behrman', 'Bywater', 'Central City',
  'Garden District', 'French Quarter', 'Central Business District', 'Gentilly', 'Gentilly Terrace', 'Gentilly Woods',
  'Fillmore', 'Lake Terrace', 'Lake Oaks', 'Milneburg', 'Pontchartrain Park', 'St. Anthony', 'Fischer Dev',
  'McDonogh', 'Old Aurora', 'Tall Timbers', 'Brechtel', 'US Naval Support Area',
  'Federal City', 'Whitney', 'Desire Development and Neighborhood', 'Florida Area', 'Florida Development', 'St. Roch',
  'Marigny', 'St. Claude', 'Dillard', 'East Riverside', 'Irish Channel',
  'Lower Garden District', 'Milan', 'St. Thomas Development', 'Touro', 'City Park',
  'Lakeview', 'Lakewood', 'Lakeshore', 'Lake Vista', 'Navarre', 'West End',
  'Lower Ninth Ward', 'Holy Cross', 'Bayou St. John', 'B.W. Cooper Apts', 'Fairgrounds', 'Gert Town', 'Iberville', 'Mid-City', 'Seventh Ward', 'Treme', 'Lafite', 'Tulane-Gravier', 'New Aurora/English Turn', 'New Orleans East', 'Little Woods', 'Pines Village', 'Plum Orchard', 
  'Read Blvd East', 'Read Blvd West', 'West Lake Forest', 'Viavant', 'Venetian Isles', 'Lake Catherine', 'Village De l Est', 'Carrollton', 'Uptown',
  'Audubon', 'Black Pearl', 'Broadmoor', 'Dixon', 'East Carrollton', 'Freret', 'Hollygrove', 'Leonidas', 'Marlyville/Fontainebleu', 'Uptown', 'West Riverside'
];
 
$('#neighborhoods .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'neighborhoods',
  displayKey: 'value',
  source: substringMatcher(places)
});



