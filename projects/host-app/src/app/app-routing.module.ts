import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NotesComponent } from './components/notes/notes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {
    path: "notes",
    component: NotesComponent,
    pathMatch: "full"
  },
  {
    path: "micro1",
    loadChildren: (): Promise<any> => loadRemoteModule({
      remoteEntry: "http://localhost:4001/remoteEntry.js",
      remoteName: "mfe1",
      exposedModule: "./app.module"
    }).then(m => m.AppModule)
  },
  {
    path: "micro2",
    loadChildren: (): Promise<any> => loadRemoteModule({
      remoteEntry: "http://localhost:4002/remoteEntry.js",
      remoteName: "mfe2",
      exposedModule: "./Module"
    }).then(m => m.AppModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
