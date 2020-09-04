import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'receive-item', loadChildren: './receive-item/receive-item.module#ReceiveItemPageModule' },
  { path: 'return-item', loadChildren: './return-item/return-item.module#ReturnItemPageModule' },
  { path: 'scan-item', loadChildren: './scan-item/scan-item.module#ScanItemPageModule' },
  { path: 'add-sale-item', loadChildren: './add-sale-item/add-sale-item.module#AddSaleItemPageModule' },  { path: 'view-inventory', loadChildren: './view-inventory/view-inventory.module#ViewInventoryPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
