import {Component, Input, OnInit} from '@angular/core';
import {AuthSession} from "@supabase/supabase-js";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input()
  session!: AuthSession

  constructor() { }

  ngOnInit(): void {
  }

  changeNameGallery() {
    let changeNameBTN = document.getElementById("changeNameBTN");
    let changeNameText = document.getElementById("changeNameText");
    let changeNameSubmit = document.getElementById("changeNameSubmit");

    changeNameText.classList.remove('hidden');
    changeNameSubmit.classList.remove('hidden');
    changeNameBTN.classList.add('hidden');

  }

  setNewName() {
    let titleGallery = document.getElementById("titleGallery");
    let changeNameBTN = document.getElementById("changeNameBTN");
    let changeNameText = document.getElementById("changeNameText") as HTMLInputElement;
    let changeNameSubmit = document.getElementById("changeNameSubmit");

    changeNameText.classList.add('hidden');
    changeNameSubmit.classList.add('hidden');
    changeNameBTN.classList.remove('hidden');

    if(changeNameText.value !== ''){
      titleGallery.innerText = changeNameText.value;
    }
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
