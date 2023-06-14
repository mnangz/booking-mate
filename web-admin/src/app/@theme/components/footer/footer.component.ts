import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by" style="text-align: centre;">
      Powered by <b><a href="" target="_blank">Tamuka Mnangagwa</a></b>
    </span>
  `,
})
export class FooterComponent {
}
