import { ComponentFixture, TestBed } from '@angular/core/testing';
// Criado apartir do comando: ng generate component ckeck-sample OU ng g c check-sample
import { CheckSampleComponent } from './check-sample.component';

describe('CheckSampleComponent', () => {
  let component: CheckSampleComponent;
  let fixture: ComponentFixture<CheckSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckSampleComponent]
    });
    fixture = TestBed.createComponent(CheckSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
