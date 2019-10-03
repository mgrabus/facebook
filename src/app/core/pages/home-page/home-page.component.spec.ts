import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { PostListItemComponent } from 'src/app/posts/components/post-list-item/post-list-item.component';
import { PostListComponent } from 'src/app/posts/components/post-list/post-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;
    let $component = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePageComponent,
            PostListItemComponent,
        PostListComponent],
        imports: [RouterTestingModule,
        SharedModule, HttpClientTesting]

        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        $component = fixture.nativeElement;
        fixture.detectChanges();
    });

    afterEach(() => {
        $component.remove();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
