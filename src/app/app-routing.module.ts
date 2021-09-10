import { ActionCategoryComponent } from './pages/categories/action-category/action-category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages

import { Layout2Component } from './layout/layout-2/layout-2.component';
import { LoginGuard } from './Guard/login.guard';
import { LoginComponent } from './pages/Auth/login/login.component';
import { SignupComponent } from './pages/Auth/signup/signup.component';
import { AuthGuard } from './Guard/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AllProductsComponent } from './pages/products/all-products/all-products.component';
import { ActionProductComponent } from './pages/products/action-product/action-product.component';
import { AllTopicsComponent } from './pages/HotTopics/all-topics/all-topics.component';
import { ActionTopicsComponent } from './pages/HotTopics/action-topics/action-topics.component';
import { AllCategoriesComponent } from './pages/categories/all-categories/all-categories.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { UpdateProfileComponent } from './pages/profile/update-profile/update-profile.component';
import { AllSliderComponent } from './pages/slider/all-slider/all-slider.component';
import { SliderActionComponent } from './pages/slider/slider-action/slider-action.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { AllVotesComponent } from './pages/productVotes/all-votes/all-votes.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },

  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] },


  {
    path: '', component: Layout2Component, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'products', component: AllProductsComponent, canActivate: [AuthGuard] },
      { path: 'products/:id', component: ActionProductComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'hot-topics', component: AllTopicsComponent, canActivate: [AuthGuard] },
      { path: 'hot-topics/:id', component: ActionTopicsComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'category', component: AllCategoriesComponent, canActivate: [AuthGuard] },
      { path: 'category/:id', component: ActionCategoryComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'slider', component: AllSliderComponent, canActivate: [AuthGuard] },
      { path: 'slider/:id', component: SliderActionComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard] },
    ]
  },

  {
    path: '', component: Layout2Component, children: [
      { path: 'product-votes', component: AllVotesComponent, canActivate: [AuthGuard] },
    ]
  },

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
