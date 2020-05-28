import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../modles/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['体力', '攻撃力', '防御力', 'スピード'];

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      const id = +map.get('id');
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.push({
        data: [
          pokemon.base.HP,
          pokemon.base.Attack,
          pokemon.base.Defense,
          pokemon.base.Speed,
        ]
      })
    });
  }
}