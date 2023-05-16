import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component"
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ButtonComponent } from './components/UI/button/button.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent,
  //   pathMatch: "full"
  // },
  {
    path: "button",
    component: ButtonComponent,
    pathMatch: "full"
  },
  {
    path: "micro1",
    loadChildren: (): Promise<any> => loadRemoteModule({
      remoteName: 'http://localhost:4001/remoteEntry.js',
      exposedModule: 'mfe1'
    }).then(m => m.AppModule)
    // loadChildren: (): Promise<any> => import('mfe1/app.module').then(m => m.AppModule).catch((err) => console.log(err))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
