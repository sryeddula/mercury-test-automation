export class PagePerformance {
    static Unload: number
    static Redirect: number
    static AppCache: number
    static DNS: number
    static TCP: number
    static Request: number
    static Response: number
    static Processing: number
    static Onload: number
    static requestStart: number = 0

    static log(pt: PerformanceTiming) {

        if (this.requestStart == pt.requestStart) {
            //return;
        }
        this.requestStart = pt.requestStart
        this.Unload = (pt.unloadEventEnd - pt.unloadEventStart)
        this.Redirect = (pt.redirectEnd - pt.redirectStart)
        this.AppCache = (pt.domainLookupStart - pt.fetchStart)
        this.DNS = (pt.domainLookupEnd - pt.domainLookupStart)
        this.TCP = (pt.connectEnd - pt.connectStart)
        this.Request = (pt.responseStart - pt.requestStart)
        this.Response = (pt.responseEnd - pt.responseStart)
        this.Processing = (pt.loadEventStart - pt.responseEnd)
        this.Onload = (pt.loadEventEnd - pt.loadEventStart)
        var str: string = JSON.stringify(this)
        //console.log(str)
    }
}

export class resourceTiming {
    static min: number = 9999999999
    static max: number = 0
    static log(prtl: Array<PerformanceResourceTiming>) {
        prtl.forEach(x => console.log(x.initiatorType + '   ' + x.name.match(/.*?(\?|$|#)/i) + '   ' + x.duration))
        prtl.forEach(y => {
            if (this.min > y.domainLookupStart) {
                this.min = y.domainLookupStart
            }
            if (this.max < y.responseEnd) {
                this.max = y.responseEnd
            }
        })
        console.log("Duration: " + (this.max-this.min))
    }
}