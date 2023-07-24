import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {



  downloadPdf() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', './assets/Resume.Marina_Yurkevich.pdf');
    link.setAttribute('download', 'Resume.Marina_Yurkevich.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
