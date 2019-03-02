import { CONSTANTS } from './../../shared/constants/constants';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { FilterListingsPipe } from 'src/app/shared/pipes/filter-listings.pipe';
import { MovieListingComponent } from '../movie-listing/movie-listing.component';
import { NowPlayingService } from 'src/app/shared/services/now-playing.service';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { LoaderComponent } from '../loader/loader.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let nowPlayingService: NowPlayingService;
  let configurationService: ConfigurationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [
        HomeComponent,
        FilterListingsPipe,
        MovieListingComponent,
        LoaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nowPlayingService = TestBed.get(NowPlayingService);
    configurationService = TestBed.get(ConfigurationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data and set default sortingList and filterTerm on init', () => {
    spyOn(component, 'getData');

    component.ngOnInit();

    expect(component.getData).toHaveBeenCalled();
    expect(component.sortingList).toEqual(CONSTANTS.sortOptions[0].value);
    expect(component.filterTerm).toEqual(CONSTANTS.defaultFilterTerm);
  });
});
