namespace Barrios.Modules.Default {

    @Serenity.Decorators.registerFormatter()
    export class HorariosFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            if (ctx.value != undefined) {
                let min = parseInt(ctx.value);
                let hour = Math.round( min / 60);
                min = min % 60;
                return "<span class='fa fa-clock-o clock-cell'></span>"
                    + Q.htmlEncode(this.checkTime(hour) + ':' + this.checkTime(min)) + '';
            }
            return Q.htmlEncode(ctx.value);

        }
        checkTime(i) {
                return (i < 10) ? "0" + i : i;
        }
    }
}