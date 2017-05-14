import { Component } from '@angular/core';

@Component({
  template: `
  <div class="jumbotron">
        <h1>AWS S3 Dispatcher tool</h1>
        <!--<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>-->
        <p>
            <a class="btn btn-primary btn-lg" role="button" routerLink="/generate" routerLinkActive="active">UPLOAD</a>
            <a class="btn btn-primary btn-lg" role="button" routerLink="/download" routerLinkActive="active">DOWNLOAD</a>
        </p>
    </div>`
})
export class StartPageComponent  { }
