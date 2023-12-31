import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './components/login/login.component';
import {CreateOrJoinRoomComponent} from './components/create-or-join-room/create-or-join-room.component';
import {TableComponent} from './components/play-area/table/table.component';
import {CardRowComponent} from './components/play-area/card-row/card-row.component';
import {MatCardModule} from "@angular/material/card";
import {CardComponent} from "./components/play-area/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardHandComponent} from "./components/play-area/card-hand/card-hand.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {EndScreenComponent} from "./end-screen/end-screen.component";
import {RulesComponent} from './components/rules/rules.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CustomSnackbarComponent} from './components/custom-snackbar/custom-snackbar.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CreateOrJoinRoomComponent,
        TableComponent,
        CardRowComponent,
        CardComponent,
        CardHandComponent,
        EndScreenComponent,
        RulesComponent,
        CustomSnackbarComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        BrowserAnimationsModule,
        DragDropModule,
        MatSnackBarModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
