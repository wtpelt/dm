import { Component } from '@angular/core';
import { isDate } from 'util';

@Component({
  selector: 'app-footer-root',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  public copyrightYear = new Date().getFullYear();
}

