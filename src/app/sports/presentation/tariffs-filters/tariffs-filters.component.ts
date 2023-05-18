import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SportsRepository } from '../../domain';

@Component({
  selector: 'app-sports-filters',
  templateUrl: './tariffs-filters.component.html',
  styleUrls: ['./tariffs-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffsFiltersComponent implements OnInit {
  constructor(private readonly dataRepository: SportsRepository) {}

  ngOnInit() {}
}
