import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ITariff } from '../../../domain';

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffDetailsComponent implements OnInit {
  @Input() data: ITariff;
  @Output() select = new EventEmitter<unknown>();

  ngOnInit() {}
}
