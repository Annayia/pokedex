import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
	title: string = "pokedex";
	pokemonList: Pokemon[] = POKEMONS;
	pokemonSelected: Pokemon | undefined;
	ngOnInit(): void {}
	selectPokemon(pokemonId: string) {
		const id = +pokemonId;
		const pokemon: Pokemon | undefined = this.pokemonList.find(
			(pokemon) => pokemon.id === +pokemonId
		);
		if (pokemon) {
			this.pokemonSelected = pokemon;
		} else {
			this.pokemonSelected = pokemon;
		}
	}
}
