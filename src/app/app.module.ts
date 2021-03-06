import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';

// *******************************************************************************
// Pages

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './Guard/auth.guard';
import { Auth2Guard } from './Guard/auth2.guard';
import { LoginGuard } from './Guard/login.guard';
import { AuthService } from './services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgSelect2Module } from 'ng-select2';
import { NgSelectModule } from '@ng-select/ng-select';
import { InterceptorService } from './services/interceptor.service';
import { LoginComponent } from './pages/Auth/login/login.component';
import { SignupComponent } from './pages/Auth/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';
import { AllProductsComponent } from './pages/products/all-products/all-products.component';
import { ActionProductComponent } from './pages/products/action-product/action-product.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductService } from './services/product.service';
import { UploadService } from './services/upload.service';
import { AllTopicsComponent } from './pages/HotTopics/all-topics/all-topics.component';
import { ActionTopicsComponent } from './pages/HotTopics/action-topics/action-topics.component';
import { AllCategoriesComponent } from './pages/categories/all-categories/all-categories.component';
import { ActionCategoryComponent } from './pages/categories/action-category/action-category.component';
import { HotTopicService } from './services/hot-topic.service';
import { CategoryService } from './services/category.service';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';
import { UpdateProfileComponent } from './pages/profile/update-profile/update-profile.component';
import { AllSliderComponent } from './pages/slider/all-slider/all-slider.component';
import { SliderActionComponent } from './pages/slider/slider-action/slider-action.component';
import { SliderService } from './services/slider.service';
import { SurveyComponent } from './pages/survey/survey.component';
import { StarRatingModule } from 'angular-rating-star';
import { AllVotesComponent } from './pages/productVotes/all-votes/all-votes.component';

// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    AllProductsComponent,
    ActionProductComponent,
    AllTopicsComponent,
    ActionTopicsComponent,
    AllCategoriesComponent,
    ActionCategoryComponent,
    ContactUsComponent,
    UpdateProfileComponent,
    AllSliderComponent,
    SliderActionComponent,
    SurveyComponent,
    AllVotesComponent
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    // App
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    NgSelect2Module,
    Ng2ChartsModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    StarRatingModule
  ],

  providers: [
    Title,
    AppService,
    AuthService,
    AuthGuard,
    Auth2Guard,
    LoginGuard,
    DatePipe,
    ProductService,
    UploadService,
    InterceptorService,
    HotTopicService,
    CategoryService,
    ContactUsService,
    SliderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
