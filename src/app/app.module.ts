import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { AbilitiesSectionComponent } from './abilities-section/abilities-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileSectionComponent,
    AbilitiesSectionComponent,
    ContactSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
