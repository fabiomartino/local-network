import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

import { LocalNetworkPage } from './local-network.page';

vi.mock('@capacitor/core', () => ({
  Capacitor: {
    getPlatform: () => 'android',
    isNativePlatform: () => true,
  },
}));

vi.mock('@capacitor-community/local-network', () => ({
  LocalNetwork: {
    checkPermissions: vi.fn().mockResolvedValue({ localNetwork: 'granted' }),
    requestPermissions: vi.fn().mockResolvedValue({ localNetwork: 'granted' }),
    getPluginVersion: vi.fn().mockResolvedValue({ version: '8.0.0' }),
    addListener: vi.fn().mockResolvedValue({ remove: vi.fn() }),
    removeAllListeners: vi.fn().mockResolvedValue(undefined),
  },
}));

describe('LocalNetworkPage', () => {
  let component: LocalNetworkPage;
  let fixture: ComponentFixture<LocalNetworkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalNetworkPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalNetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('creates the page', () => {
    expect(component).toBeTruthy();
  });

  it('renders the permission state returned by checkPermissions()', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('ion-title')?.textContent).toContain('Local Network');
    expect(compiled.querySelector('ion-badge')?.textContent).toContain('granted');
  });

  it('renders the plugin version in the footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('ion-footer')?.textContent).toContain('8.0.0');
  });
});
