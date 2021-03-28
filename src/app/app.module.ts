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
import { SkillsListComponent } from './skills-list/skills-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileSectionComponent,
    AbilitiesSectionComponent,
    ContactSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsListComponent,
    ExperienceListComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
