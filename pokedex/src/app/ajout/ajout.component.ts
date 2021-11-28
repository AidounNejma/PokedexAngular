import { ActivatedRoute, Routes, Router } from '@angular/router';
import { Pokemon } from './../modeles/pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  pokemons = POKEMONS;
  @Input() pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(f: NgForm) {
    this.pokemons.push(this.pokemon);
    let link = [''];//redirection vers la page accueil
    this.router.navigate(link);
  }
  audi() {

    var source = "assets/great.mp3"
    var audio = new Audio();

    audio.src = source;
    audio.autoplay = true;
    audio.play();
  }
}
