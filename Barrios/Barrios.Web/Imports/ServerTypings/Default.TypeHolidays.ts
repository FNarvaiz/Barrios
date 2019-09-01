namespace Barrios.Default {
    export enum TypeHolidays {
        inamovible = 0,
        puente = 1,
        trasladable = 2
    }
    Serenity.Decorators.registerEnumType(TypeHolidays, 'Barrios.Default.TypeHolidays', 'Booking.TypeHolidays');
}

