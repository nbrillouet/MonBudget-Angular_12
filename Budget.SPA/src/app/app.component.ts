import { Component } from '@angular/core';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    public notificationOptions = {
        position: ['top','right'],
        animate: 'fromTop',
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };
    /**
     * Constructor
     */
    constructor()
    {

    }
}
