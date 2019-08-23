import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { FormsModule } from "@angular/forms";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DatePickerComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stardew-valley-helper'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("stardew-valley-helper");
  });

});
