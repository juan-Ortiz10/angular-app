import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'productos', component:ProductosComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent}
];
