import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private showLoading = false;
    private loadingId = 'custom-loading';

    constructor() {
    }

    public enable(): void {
        if (!this.showLoading) {
            this.showLoading = true;
            document
                .getElementById('body')
                .insertAdjacentHTML('beforeend',
                    `<div class="loading-container" id="${ this.loadingId }">
                            <div class="loading-bg"></div>
                            <svg xmlns="http://www.w3.org/2000/svg"  style="margin: auto; background: rgb(241, 242, 243); display: block;" width="58px" height="58px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <path fill="none" stroke="#1d3f72" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
                                    <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"></animate>
                                </path>
                            </svg>
                        </div>`);
        }
    }

    public disable(): void {
        if (this.showLoading) {
            this.showLoading = false;
            document
                .getElementById(this.loadingId)
                .remove();
        }
    }

}
