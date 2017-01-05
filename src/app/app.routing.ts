import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeModule} from "./features/home";
import {BaseComponent} from "./base.component";

const routes: Routes = [
    {
        path: 'app',
        component: BaseComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => HomeModule
            },
            {
                path: 'about',
                loadChildren: './features/+about/about.module#AboutModule'
            },
            // default path redirects to home
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            // handle all /app/[unmatched] routes
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    // handle all [unmatched] routes
    {
        path: '**',
        redirectTo: 'app',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}