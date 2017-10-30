import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ExplanationComponent} from "./explanation/explanation.component";
import {StemmingComponent} from "./stemming/stemming.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stemming', component: StemmingComponent },
  { path: 'explanation', component: ExplanationComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
