import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './comments/comments.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { SavedComponent } from './saved/saved.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
{
  path:"",
  component:HomeComponent
},
{
  path:"community",
  component:CommunityComponent
},
{
  path:"leaderboard",
  component:LeaderboardComponent
},
{
  path:"questions",
  component:QuestionsComponent
},
{
  path:"saved",
  component:SavedComponent
},
{
  path:"shared",
  component:SharedComponent
},
{
  path:"comments",
  component:CommentsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent,CommunityComponent,LeaderboardComponent,QuestionsComponent,SavedComponent,SharedComponent,CommentsComponent];
