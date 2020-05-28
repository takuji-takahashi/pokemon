import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../modles/pokemons';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon;

  private _radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };
  public get radarChartOptions(): RadialChartOptions {
    return this._radarChartOptions;
  }
  public set radarChartOptions(value: RadialChartOptions) {
    this._radarChartOptions = value;
  }
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
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed,
        ]
      });
    });
  }

}