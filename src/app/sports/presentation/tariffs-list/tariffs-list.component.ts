import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchFilters } from '@app/shared/models';
import { ITariff, SportsRepository } from '../../domain';

@Component({
  selector: 'app-sports-list',
  templateUrl: './tariffs-list.component.html',
  styleUrls: ['./tariffs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffsListComponent implements OnInit {
  constructor(private readonly dataRepository: SportsRepository) {}

  private readonly _searchFilters: ISearchFilters = { price: 18.7 };

  data$: Observable<ITariff[]> = this.dataRepository.getAllTariffs();

  ngOnInit() {}
}
