import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LanguageSelectorComponent} from './header/language-selector/language-selector.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {AuthModule} from './auth/auth.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
