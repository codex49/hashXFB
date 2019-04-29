import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { VideoTutorialComponent } from './video-tutorial/video-tutorial.component';
import { WhyusingComponent } from './whyusing/whyusing.component';
import { FooterComponent } from './footer/footer.component';
import { WizardCardComponent } from './wizard-card/wizard-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    VideoTutorialComponent,
    WhyusingComponent,
    FooterComponent,
    WizardCardComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
