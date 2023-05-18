import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISearchFilters } from '@app/shared/models';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsComponent implements OnInit {
  constructor(private readonly sportsService: SportsService) {}

  private readonly _searchFilters: ISearchFilters = { price: 18.7 };

  ngOnInit() {}
}
