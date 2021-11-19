import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemons } from '../models/pokemons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {
    // quand la page sera affichée, execute moi ce qui est entre les accolades
  }

}
