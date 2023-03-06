import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISearchFilters } from '@app/shared/models';
import { ITariff } from '@app/tariffs/domain/models';
import { TariffsRepository } from '@app/tariffs/domain/repositories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tariffs-list',
  templateUrl: './tariffs-list.component.html',
  styleUrls: ['./tariffs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffsListComponent implements OnInit {
  constructor(private readonly dataRepository: TariffsRepository) {}

  private readonly _searchFilters: ISearchFilters = { price: 18.7 };

  data$: Observable<ITariff[]> = this.dataRepository.getAllTariffs();

  ngOnInit() {}
}
