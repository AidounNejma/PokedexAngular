import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../modeles/pokemon';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  pokemons = POKEMONS;
  @Input()pokemon:Pokemon = new Pokemon()// porte ouverte sur les propriétés de pokemon.ts, du coup tous les champs remplis (input) de mon formulaire seront égaux aux propriétés de pokemon



  constructor(private route: ActivatedRoute, private router: Router){ }//"private router: Router" on a créé une nouvelle route

  ngOnInit(): void { //f:NgForm on a typé f avec NgForm (ça l'a importé en haut) et en gros, quand cette fonction sera appelé, ça importera le NgForm (les methodes du formulaire)
    this.pokemons = POKEMONS;
    let id = this.route.snapshot.params['id'];
    for(let i=0;i<this.pokemons.length;i++){
      if(this.pokemons[i].id == id){
        this.pokemon = this.pokemons[i];
      }
    }
  }

  onSubmit(f:NgForm){
    let link = ['/detail', this.pokemon.id];//redirection vers la page detail du pokemon quand on clique sur bouton submit du formulaire
    this.router.navigate(link);
  }

}
