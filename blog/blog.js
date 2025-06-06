const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
];

const container = document.querySelector('.grid-container');

articles.forEach(function(item){
	
	const leftColumn = document.createElement("div");

	leftColumn.setAttribute("class", "left-column");


		leftColumn.innerHTML = `
			<h1 class="date">${item.date}</h1>
			<p class="ages">${item.ages}</p>
			<p class="genre">${item.genre}</p>
			<p class="stars">${item.stars}</p>
		`;
		
	const middleColumn = document.createElement("div");

	middleColumn.setAttribute("class", "middle-column");	
		
		middleColumn.innerHTML = `
			<h1 class="title">${item.title}</h1>
			<img src="${item.imgSrc}" alt="${item.imgAlt}">
			<p class="description">
				${item.description}
				<button class="read-more">Read More...</button>
			</p>
		`;
	// container.insertAdjacentElement("afterBegin", leftColumn);
	// container.insertAdjacentElement("afterBegin", middleColumn);
	container.appendChild(leftColumn);
	container.appendChild(middleColumn);
});
	
