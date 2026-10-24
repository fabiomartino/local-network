import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomePage } from './home.page';
import { PLUGINS } from '../plugins-list';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lists every visible plugin', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('ion-item');

    expect(items).toHaveLength(PLUGINS.filter((plugin) => plugin.isVisible).length);
    expect(items.length).toBeGreaterThan(0);
    expect(items[0].textContent).toContain('@capacitor-community/local-network');
  });

  it('links an active plugin to its page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const item = compiled.querySelector('ion-item');

    expect(item?.getAttribute('href')).toBe('/local-network');
  });

  it('renders the app version in the footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('ion-footer')?.textContent).toContain('App Version');
  });
});
