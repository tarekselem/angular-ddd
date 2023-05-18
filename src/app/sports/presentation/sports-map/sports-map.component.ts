import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-sports-map',
  templateUrl: './sports-map.component.html',
  styleUrls: ['./sports-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsMapComponent implements OnInit {
  @Output() select = new EventEmitter<unknown>();

  readonly display: any;
  center: google.maps.LatLngLiteral = {
    lat: 52.520008,
    lng: 13.404954
  };
  zoom = 6;

  ngOnInit() {}
}
