 
//  VÆLG DIN FAVORIT (BILLEDE SKIFT)

// Vælger alle små billeder (alle tiles) inde i min class .gridImg
const tiles = document.querySelectorAll('.gridImg .tile');

// Vælger det store billede
const bigTile = document.querySelector('.bigImg .bigTile');

// Gennemgår hvert lille billede
tiles.forEach(tile => {

	// Tilføjer en klik-event til hvert billede
	tile.addEventListener('click', () => {

		const smallSrc = tile.src;
		const smallAlt = tile.alt;
		const bigSrc = bigTile.src;
		const bigAlt = bigTile.alt;

		// Bytter billedet jeg det klikker på med det store billede
		tile.src = bigSrc;
		tile.alt = bigAlt;
		bigTile.src = smallSrc;
		bigTile.alt = smallAlt;

		// Fjerner 'selected' klassen fra alle billeder
		tiles.forEach(t => t.classList.remove('selected'));

		tile.classList.add('selected');

		// Fjerner 'selected' igen efter 300ms
		setTimeout(() => tile.classList.remove('selected'), 300);
	});
});