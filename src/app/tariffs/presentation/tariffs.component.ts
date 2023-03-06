import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISearchFilters } from '@app/shared/models';
import { Observable } from 'rxjs';
import { ITariff } from '../domain/models';
import { TariffsRepository } from '../domain/repositories';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffsComponent implements OnInit {
  constructor(private readonly dataRepository: TariffsRepository) {}

  private readonly _searchFilters: ISearchFilters = { price: 18.7 };

  data$: Observable<ITariff[]> = this.dataRepository.getAllTariffs();

  ngOnInit() {}
}
