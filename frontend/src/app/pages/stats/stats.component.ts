import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayForm() {
    let nuovaImg = document.getElementById("nuovaImg");
    let displayFormBTN = document.getElementById("displayFormBTN");

    nuovaImg.classList.remove('hidden');
    displayFormBTN.classList.add('hidden');
  }

  hideForm() {
    let nuovaImg = document.getElementById("nuovaImg");
    let displayFormBTN = document.getElementById("displayFormBTN");

    nuovaImg.classList.add('hidden');
    displayFormBTN.classList.remove('hidden');
  }
}
