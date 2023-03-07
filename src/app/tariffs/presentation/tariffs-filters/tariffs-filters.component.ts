import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISearchFilters } from '@app/shared/models';
import { ITariff } from '@app/tariffs/domain/models';
import { TariffsRepository } from '@app/tariffs/domain/repositories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tariffs-filters',
  templateUrl: './tariffs-filters.component.html',
  styleUrls: ['./tariffs-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffsFiltersComponent implements OnInit {
  constructor(private readonly dataRepository: TariffsRepository) {}

  ngOnInit() {}
}
