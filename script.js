//modal



//---------------Get Pokemon-----------------------------------------------///////////////////////////////////////

const tombol2 = document.querySelector('#tombol2');


tombol2.addEventListener('click', function() {



	fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
	.then(response => response.json())
	.then(response => {

		const result = response.results;
		
		let cards = '';
		for(let i = 0; i < result.length; i++) {
		
		
		

		fetch(result[i].url)
		.then(response => response.json())
		.then(response => {

			function ObjekPokemon(name, number, image, type) {
				this.name = name;
				this.number = number;
				this.image = image;
				this.type = type;

			}
				
			let arr2 = [];
			let objPokemon = new ObjekPokemon(response.name, response.id, response.sprites.front_default, response.types[0].type.name)
			arr2.push(objPokemon)
			
			arr2.forEach((key) => {


			// Maaf kak ini cara terakhir saya yg tidak praktis banget buat nampilin bgColor per tipe nya
			// karena udah saya coba pake classList.add() tetep selalu gagal, class tidak bisa ditambahkan

				if(key.type == 'electric') cards += `<div class="card electric">
														<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													    <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'water') cards += `<div class="card water">
														<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													    <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'grass') cards += `<div class="card grass">
														<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													  <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'fire') cards += `<div class="card fire">
														<h4 class="name">${key.number}<br>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													    <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'bug') cards += `<div class="card bug">
														<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													    <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'normal') cards += `<div class="card normal">
														<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													    <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'poison') cards += `<div class="card poison">
														<h4 class="name">${key.number}<br>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													    <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				if(key.type == 'ground') cards += `<div class="card ground">
														<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
														<img src=${key.image}>
													  <div class="container">
													  <h4>Type : ${key.type}</h4>
													  </div>
													</div>`;
				

			
			});


			document.querySelector('.hasil2').style.display = 'block';

			

		


			let hasil2 = document.querySelector('.hasil2');
			hasil2.innerHTML = cards;
			
			
			
		});

	};



	});

	let hasil2 = document.querySelector('.hasil2');
	hide2.addEventListener('click', () => {
	hasil2.style.display = 'none';
});
});


