import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { environment } from '../enviroments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ConstantsSystem } from './utils/constants-system';
import { ClipboardModule } from 'ngx-clipboard';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//SERVICES
import { AuthServiceService } from './auth/services/auth-service.service';
import { SharedserviceService } from './shared/services/sharedservice.service';

//INTERCEPTORS
import { AuthInterceptorInterceptor } from './auth/services/interceptors/auth-interceptor.interceptor';
import { SharedInterceptorInterceptor } from './shared/services/interceptors/shared-interceptor.interceptor';

//MODULES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { StartLayoutComponent } from './layouts/components/start-layout/start-layout.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { SummaryComponent } from './shared/components/summary/summary.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './auth/components/login/login.component';
import { OtpComponent } from './auth/components/otp/otp.component';
import { HomeComponent } from './profile/components/home/home.component';
import { StarFadComponent } from './fad/components/star-fad/star-fad.component';
import { MyProfileComponent } from './profile/components/my-profile/my-profile.component';
import { UserProfileComponent } from './profile/components/user-profile/user-profile.component';
import { MmodalComponent } from './shared/components/mmodal/mmodal.component';
import { ModalAlertsComponent } from './shared/components/modal-alerts/modal-alerts.component';
import { TravellersComponent } from './friends/components/travellers/travellers.component';
import { AdsLayoutsComponent } from './layouts/components/ads-layouts/ads-layouts.component';
import { NoticesComponent } from './user/components/notices/notices.component';
import { NoticesTypeComponent } from './user/components/notices-type/notices-type.component';
import { UserDataComponent } from './user/components/user-data/user-data.component';
import { ColummsComponent } from './shared/components/columms/columms.component';
import { MultiSelectComponent } from './shared/components/multi-select/multi-select.component';
import { CommentComponent } from './fad/components/comment/comment.component';
import { RatingStarComponent } from './shared/components/rating-star/rating-star.component';
import { ListHotelComponent } from './hotel/components/list-hotel/list-hotel.component';
import { VerifyHotelComponent } from './hotel/components/verify-hotel/verify-hotel.component';
import { HotelDetailComponent } from './hotel/components/hotel-detail/hotel-detail.component';
import { MyHotelComponent } from './hotel/components/my-hotel/my-hotel.component';
import { HotelRegisterComponent } from './hotel/components/hotel-register/hotel-register.component';
import { MenuadminComponent } from './shared/components/menuadmin/menuadmin.component';
import { BilleteraComponent } from './billetera/components/billetera/billetera.component';
import { BilleteraEmpresaComponent } from './billetera/components/billetera-empresa/billetera-empresa.component';
import { UpdateBilleteraEComponent } from './billetera/components/update-billetera-e/update-billetera-e.component';
import { BalanceComponent } from './finance/components/balance/balance.component';
import { WalletCompanyComponent } from './admin/components/wallet-company/wallet-company.component';
import { AdminLayoutComponent } from './layouts/components/admin-layout/admin-layout.component';
import { AdminsComponent } from './admin/components/admins/admins.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AdminMembershipComponent } from './admin/components/admin-membership/admin-membership.component';
import { AdminRechargsComponent } from './admin/components/admin-rechargs/admin-rechargs.component';
import { AdminloginComponent } from './admin/components/adminlogin/adminlogin.component';
import { ProfilesComponent } from './admin/components/profiles/profiles.component';
import { SocialUserComponent } from './admin/components/social-user/social-user.component';
import { SupNoticesComponent } from './admin/components/sup-notices/sup-notices.component';
import { SupSalesComponent } from './admin/components/sup-sales/sup-sales.component';
import { SupSystemsComponent } from './admin/components/sup-systems/sup-systems.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { LikesComponent } from './profile/components/likes/likes.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { PrivacyComponent } from './profile/components/privacy/privacy.component';
import { AgreementsComponent } from './shared/components/agreements/agreements.component';
import { PoliticsComponent } from './shared/components/politics/politics.component';
import { FeesComponent } from './shared/components/fees/fees.component';
import { RefersComponent } from './user/components/refers/refers.component';
import { SponsorComponent } from './user/components/sponsor/sponsor.component';
import { UserMembershipComponent } from './user/components/user-membership/user-membership.component';
import { SearchComponent } from './shared/components/search/search.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { FeedbackComponent } from './admin/components/feedback/feedback.component';
import { ProfessionsComponent } from './admin/components/professions/professions.component';
import { FeedbackUserComponent } from './user/components/feedback-user/feedback-user.component';
import { AdminRetreatComponent } from './admin/components/admin-retreat/admin-retreat.component';

export function numberValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^\d+(?:\.\d{1,2})?$/.test(control.value) ? null : { price: true };
}

export function urlValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^(https?|ftp):\/\/(www\.)?([^\s\/$.?#].[^\s]*)\.[^\s]{2,}$/.test(
    control.value
  )
    ? null
    : { url: true };
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    StartLayoutComponent,
    AdminLayoutComponent,
    LoginComponent,
    OtpComponent,
    RegisterComponent,
    SummaryComponent,
    ColummsComponent,
    AlertComponent,
    CommentComponent,
    StarFadComponent,
    AdsLayoutsComponent,
    MmodalComponent,
    RatingStarComponent,
    MultiSelectComponent,
    UserDataComponent,
    ModalAlertsComponent,
    VerifyHotelComponent,
    ListHotelComponent,
    HotelDetailComponent,
    HotelRegisterComponent,
    MyHotelComponent,
    NoticesComponent,
    AdminloginComponent,
    DashboardComponent,
    MenuadminComponent,
    AdminsComponent,
    BilleteraComponent,
    BilleteraEmpresaComponent,
    UpdateBilleteraEComponent,
    SupSalesComponent,
    AdminsComponent,
    SupSystemsComponent,
    SupNoticesComponent,
    MyProfileComponent,
    TravellersComponent,
    UserProfileComponent,
    NoticesComponent,
    NoticesTypeComponent,
    ChatComponent,
    HomeComponent,
    SearchComponent,
    AdminMembershipComponent,
    UserMembershipComponent,
    RefersComponent,
    FeesComponent,
    PoliticsComponent,
    AgreementsComponent,
    WalletCompanyComponent,
    BalanceComponent,
    AdminRechargsComponent,
    ProfilesComponent,
    LikesComponent,
    SocialUserComponent,
    NotificationComponent,
    SponsorComponent,
    PrivacyComponent,
    FeedbackComponent,
    ProfessionsComponent,
    FeedbackUserComponent,
    AdminRetreatComponent,
  ],
  imports: [
    CKEditorModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FontAwesomeModule,
    NgOtpInputModule,
    NgOptimizedImage,
    CommonModule,
    ClipboardModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormlyModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Campo Obligatorio' },
        { name: 'price', message: 'Valor no válido' },
        { name: 'url', message: 'Valor no válido' },
      ],
      validators: [
        { name: 'price', validation: numberValidator },
        { name: 'url', validation: urlValidator },
      ],
    }),
    FormlyBootstrapModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AuthServiceService,
    SharedserviceService,
    ConstantsSystem,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SharedInterceptorInterceptor,
      multi: true,
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: environment.recaptcha.siteKey } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
