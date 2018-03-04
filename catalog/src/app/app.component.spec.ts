import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VideoService } from './services/video.service';
import { LibraryService } from './services/library.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ConfigService } from './services/config.service';

describe('AppComponent', () => {

  const videoServiceMock = {
    getFilms: () => Observable.of([])
  };

  const libraryServiceMock = {
    getBooks: () => Observable.of([])
  };

  const configServiceMock = {
    getConfig: () => Observable.of({
      publicKey: 'TestPublicKey'
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: VideoService,
          useValue: videoServiceMock
        },
        {
          provide: LibraryService,
          useValue: libraryServiceMock
        },
        {
          provide: ConfigService,
          useValue: configServiceMock
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Catalog App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Catalog App!');
  }));
});
