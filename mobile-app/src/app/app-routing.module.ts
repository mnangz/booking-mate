import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SimpleLoadingStrategy } from './simpleLoadingStrategy.component';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule', canActivate: [AuthGuardService] },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule', canActivate: [AuthGuardService] },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule', canActivate: [AuthGuardService] },
  { path: 'sign-in-booking', 
    data: { preload: true },
    loadChildren: './pages/sign-in-booking/sign-in-booking.module#SignInBookingPageModule', canActivate: [AuthGuardService] },
  { path: 'visitor-sign-out',
    data: { preload: true },
    loadChildren: './pages/visitor-sign-out/visitor-sign-out.module#VisitorSignOutPageModule', canActivate: [AuthGuardService] },
  { path: 'manual-sign-in',
    data: { preload: true },
    loadChildren: './pages/manual-sign-in/manual-sign-in.module#ManualSignInPageModule', canActivate: [AuthGuardService] },
  // { path: 'manual-sign-in/:id', 
  //   resolve: {
  //     scanned: DataResolverService
  //   },
  //   data: { preload: true },
  //   loadChildren: './pages/manual-sign-in/manual-sign-in.module#ManualSignInPageModule' },
  { path: 'scanned',
    data: { preload: true },
    loadChildren: './pages/modal/scanned/scanned.module#ScannedPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SimpleLoadingStrategy })],
  exports: [RouterModule],
  providers: [SimpleLoadingStrategy]
})

export class AppRoutingModule {}
 