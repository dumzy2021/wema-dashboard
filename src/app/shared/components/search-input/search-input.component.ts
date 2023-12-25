import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  @Input() placeHolder: string = 'Enter keywords ...';

  constructor() {}

  ngOnInit(): void {}
  search(event: any) {
    event.stopPropagation();
    this.onSearch.emit(event?.target?.value);
  }
}
