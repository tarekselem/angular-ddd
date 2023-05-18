import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ISportTraining } from '../../../domain';

@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportDetailsComponent implements OnInit {
  @Input() data: ISportTraining;
  @Output() select = new EventEmitter<unknown>();

  ngOnInit() {}
}
