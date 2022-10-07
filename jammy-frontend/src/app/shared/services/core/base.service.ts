import { Component, Inject, Injector, OnDestroy } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { InjectorService } from "../Injector.service";
import { SweetAlertService } from "../sweetAlert.service";

@Component({ template: "" })
export abstract class BaseComponent implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  form!: FormGroup;
  /**
   * The component name. The default value is the class name
   */
  // public activatedRoute:ActivatedRoute;
  public router: Router;
  public sweetAlert: SweetAlertService;
  public fb: FormBuilder;
  // public APP_URL = environment.APP_URL;

  constructor() {
    this.router = InjectorService.injector.get(Router);
    this.sweetAlert = InjectorService.injector.get(SweetAlertService);
    this.fb = InjectorService.injector.get(FormBuilder);
    // this.activatedRoute =  InjectorService.injector.get(ActivatedRoute);
    // override ngOnDestroy in order to perform unsubscription of the passed subscriptions
    const f = this.ngOnDestroy.bind(this);
    this.ngOnDestroy = () => {
      f();
      this.subscriptions.unsubscribe();
    };
  }

  /**
   * The subscription passed will be unsubscribed on the ngOnDestroy method.
   * If the subscription is already added nothing happens.
   * @param sub - the subscription to unsubscribe
   */
  protected addSafeSubscription(...sub: Subscription[]): void {
    if (!sub) {
      return;
    }
    sub.forEach((subscription) => this.subscriptions.add(subscription));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  get getAppRoutes() {
    return AppRoutes(this.router);
  }

  // get country() {
  //   return environment.country;
  // }

  getControl(control: string, form: FormGroup = this.form): AbstractControl {
    return form.controls[control];
  }

  selectedFilter(
    options: { name: string; property: string; id: string; label: string },
    array: any,
    filter$: BehaviorSubject<any>
  ) {
    let find :any
    if (filter$.value[options.property]){
      find = array.find(
        (data) => `${filter$.value[options.property]}` == `${data[options.id]}`
      );
      return find[options.label];
    }
    return options.name;
  }

  filter(value, filterKey, filter$: BehaviorSubject<any>) {
    const filter = filter$.value;
    if (filter[filterKey] && filter[filterKey] == value) {
      delete filter[filterKey];
      filter$.next(filter);
    } else {
      filter[filterKey] = value;
      filter$.next(filter);
    }
  }
}
