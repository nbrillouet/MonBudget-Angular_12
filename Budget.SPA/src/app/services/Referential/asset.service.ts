import { Injectable } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config';
import { AppConfig } from 'app/core/config/app.config';

@Injectable()
export class AssetService {
config: AppConfig = null;

    constructor(
        private _fuseConfigService: FuseConfigService
    ) {
        this._fuseConfigService.config$.subscribe((config: AppConfig) => {
            this.config = config;
        });
     }

    get(assetUrl: string): string {
        if(!this.config) {
            return null;
        }
        // let assetUrl: string = this._helperService.getDeepClone(this._asifDetailService.form.getValue(x=>x.operationTypeFamily)?.code);

        // if(!assetUrl){
        //     return null;
        // }
        assetUrl = assetUrl.replace('[theme]', this.config.theme);

        return assetUrl;
    }


}



