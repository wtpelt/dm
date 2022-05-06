import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-root',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  public copyrightYear = new Date().getFullYear();
}
