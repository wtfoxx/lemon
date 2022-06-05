import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyComponent } from './case-study/case-study.component';

const appRoutes: Routes = [
  { path: 'case', component: CaseStudyComponent },
  { path: 'home', component: MainComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    HeaderComponent,
    MainComponent,
    ContactComponent,
    CaseStudyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
