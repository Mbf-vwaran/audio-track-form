import { Routes } from '@angular/router';
import { SinglesComponent } from './music/singles/singles.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
    {
        path:"",
        component: SinglesComponent
    },
    {
        path:"success",
        component: SuccessComponent
    },
];
