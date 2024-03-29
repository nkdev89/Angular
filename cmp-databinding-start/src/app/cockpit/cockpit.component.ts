import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  serverElements = [];

  constructor() {}

  ngOnInit(): void {}

  onAddServer(inputServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputServerName.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(inputServerName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: inputServerName.value,
      serverContent: this.newServerContent,
    });
  }
}
