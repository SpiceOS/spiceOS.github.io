import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
},
  {path:'home' ,component:HomeComponent},
  {path:'downloads' ,component:DownloadsComponent},
  {path:'about' ,component:AboutComponent},
  {path:'features' ,component:FeaturesComponent},
  {path:'changelog' ,component:ChangelogComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
