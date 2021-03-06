import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const authRoutes:Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forgot-password',
        component:ForgotPasswordComponent
    },
    {
        path:'reset-password/:username',
        component: ResetPasswordComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})

export class AuthRoutingModule{
    
}