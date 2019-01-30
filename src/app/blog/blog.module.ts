import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { BlogPage } from './blog.page';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPage
  },
  {
    path: ':id',
    component: BlogdetailComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlogPage, BlogdetailComponent]
})
export class BlogPageModule {}
