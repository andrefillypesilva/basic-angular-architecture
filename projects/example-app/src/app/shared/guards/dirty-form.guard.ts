import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

// Services
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DirtyFormGuard implements CanDeactivate<boolean> {
  canDeactivate(): boolean {
    if (!SharedService.isThereDirtyForm) {
      return true;
    }

    const confirmation: boolean = window.confirm('Are you sure you want to leave this page?');

    if (confirmation) {
      SharedService.isThereDirtyForm = false;
    }

    return confirmation;
  }

}
