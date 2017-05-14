import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GenerateComponent } from './generate.component';
import { UploadComponent } from './upload.component';
import { DownloadComponent } from './download.component';
import { StartPageComponent } from './start-page.component';
import { GraphResultComponent } from './result.graph.component'
import { ChartsModule } from 'ng2-charts';
import { ResultPageComponent } from './result-page.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'result', component: ResultPageComponent }
  // ,
  // {path: 'upload'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule,
    ChartsModule
  ],
  providers: [DataService],
  declarations: [
    AppComponent,
    GenerateComponent,
    DownloadComponent,
    StartPageComponent,
    UploadComponent,
    GraphResultComponent,
    ResultPageComponent],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
