import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartLayoutComponent } from './layouts/components/start-layout/start-layout.component';
import { CommentComponent } from './fad/components/comment/comment.component';
import { UserDataComponent } from './user/components/user-data/user-data.component';
import { HotelRegisterComponent } from './hotel/components/hotel-register/hotel-register.component';
import { VerifyHotelComponent } from './hotel/components/verify-hotel/verify-hotel.component';
import { ListHotelComponent } from './hotel/components/list-hotel/list-hotel.component';
import { HotelDetailComponent } from './hotel/components/hotel-detail/hotel-detail.component';
import { MyHotelComponent } from './hotel/components/my-hotel/my-hotel.component';
import { StarFadComponent } from './fad/components/star-fad/star-fad.component';
import { AdsLayoutsComponent } from './layouts/components/ads-layouts/ads-layouts.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminLayoutComponent } from './layouts/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AdminsComponent } from './admin/components/admins/admins.component';
import { BilleteraComponent } from './billetera/components/billetera/billetera.component';
import { MyProfileComponent } from './profile/components/my-profile/my-profile.component';
import { PrivacyComponent } from './profile/components/privacy/privacy.component';
import { TravellersComponent } from './friends/components/travellers/travellers.component';
import { UserProfileComponent } from './profile/components/user-profile/user-profile.component';
import { SupSystemsComponent } from './admin/components/sup-systems/sup-systems.component';
import { SupSalesComponent } from './admin/components/sup-sales/sup-sales.component';
import { SupNoticesComponent } from './admin/components/sup-notices/sup-notices.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { HomeComponent } from './profile/components/home/home.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AdminMembershipComponent } from './admin/components/admin-membership/admin-membership.component';
import { UserMembershipComponent } from './user/components/user-membership/user-membership.component';
import { SponsorComponent } from './user/components/sponsor/sponsor.component';
import { RefersComponent } from './user/components/refers/refers.component';
import { FeesComponent } from './shared/components/fees/fees.component';
import { PoliticsComponent } from './shared/components/politics/politics.component';
import { AgreementsComponent } from './shared/components/agreements/agreements.component';
import { WalletCompanyComponent } from './admin/components/wallet-company/wallet-company.component';
import { BalanceComponent } from './finance/components/balance/balance.component';
import { AdminRechargsComponent } from './admin/components/admin-rechargs/admin-rechargs.component';
import { ProfilesComponent } from './admin/components/profiles/profiles.component';
import { LikesComponent } from './profile/components/likes/likes.component';
import { BilleteraEmpresaComponent } from './billetera/components/billetera-empresa/billetera-empresa.component';
import { UpdateBilleteraEComponent } from './billetera/components/update-billetera-e/update-billetera-e.component';
import { SocialUserComponent } from './admin/components/social-user/social-user.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FeedbackComponent } from './admin/components/feedback/feedback.component';
import { ProfessionsComponent } from './admin/components/professions/professions.component';
import { FeedbackUserComponent } from './user/components/feedback-user/feedback-user.component';
import { AdminRetreatComponent } from './admin/components/admin-retreat/admin-retreat.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: StartLayoutComponent },

  { path: 'home', component: HomeComponent },

  { path: 'moda', component: StarFadComponent },
  { path: 'commentFad/:id', component: CommentComponent },

  { path: 'dataUser', component: UserDataComponent },
  { path: 'dataUser/:estado', component: UserDataComponent },

  { path: 'registerHotel', component: HotelRegisterComponent },
  { path: 'hotelToVerify', component: VerifyHotelComponent },
  { path: 'hotel', component: ListHotelComponent },
  { path: 'hotelDetail/:id', component: HotelDetailComponent },
  { path: 'myHotel/:id', component: MyHotelComponent },
  { path: 'anuncios', component: AdsLayoutsComponent },

  //admin
  { path: 'admin', component: AdminLayoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administradores', component: AdminsComponent },
  { path: 'billeteraE', component: WalletCompanyComponent },
  { path: 'membresias', component: AdminMembershipComponent },
  { path: 'recargasE', component: AdminRechargsComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'userSocials', component: SocialUserComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'options/:code', component: ProfessionsComponent },
  { path: 'retirosE', component: AdminRetreatComponent },
  //billetera
  { path: 'myBilletera', component: BilleteraComponent },

  { path: 'billetera', component: BilleteraEmpresaComponent },
  { path: 'updateBilletera/:id', component: UpdateBilleteraEComponent },

  { path: 'myProfile', component: MyProfileComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'match', component: LikesComponent },

  { path: 'finanzas', component: BalanceComponent },

  //amigos
  { path: 'travel/:id', component: TravellersComponent },
  { path: 'billetera', component: BilleteraComponent },
  { path: 'supSistemas', component: SupSystemsComponent },
  { path: 'supVentas', component: SupSalesComponent },
  { path: 'supAnuncios', component: SupNoticesComponent },
  { path: 'messages', component: ChatComponent },
  { path: 'usuarioMembresia', component: UserMembershipComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'referidos', component: RefersComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'politicas', component: PoliticsComponent },
 
  { path: 'acuerdo', component: AgreementsComponent },
  { path: 'search', component: SearchComponent },

  { path: 'feedbackUser', component: FeedbackUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
