import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISearchFilters } from '@app/shared/models';
import { TariffsService } from './tariffs.service';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffsComponent implements OnInit {
  constructor(private readonly tariffsService: TariffsService) {}

  private readonly _searchFilters: ISearchFilters = { price: 18.7 };

  ngOnInit() {}
}
