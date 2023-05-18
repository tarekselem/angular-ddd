import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchFilters } from '@app/shared/models';
import { ISportTraining, SportsRepository } from '../../domain';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsListComponent implements OnInit {
  constructor(private readonly dataRepository: SportsRepository) {}

  private readonly _searchFilters: ISearchFilters = { price: 18.7 };

  data$: Observable<ISportTraining[]> = this.dataRepository.searchTariffs(
    52.520008,
    13.404954
  );

  ngOnInit() {}
}
