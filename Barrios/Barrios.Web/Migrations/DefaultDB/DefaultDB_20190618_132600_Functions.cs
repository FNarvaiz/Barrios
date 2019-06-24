using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190618132600), Tags("Default")]
    public class DefaultDB_20190618_132600_Functions : Migration
    {
        public override void Up()
        {
            Execute.Sql("CREATE FUNCTION [CANTIDAD_VALORACIONES_ENCUESTA] (" +
                " @id INT" +
                ")" +
                " RETURNS SMALLINT " +
                " AS " +
                " BEGIN " +
                "  RETURN(" +
                " SELECT COUNT(*) " +
                "  FROM ENCUESTAS_VALORACIONES " +
                "  WHERE ID_ENCUESTA = @id " +
                "  ) " +
                " END");
            Execute.Sql("CREATE FUNCTION [CANTIDAD_VALORACIONES_PROVEEDOR] " +
                " ( " +
                " @id INT " +
                " ) " +
                " RETURNS SMALLINT " +
                " AS " +
                " BEGIN " +
                " RETURN(" +
                " SELECT COUNT(*) " +
                " FROM PROVEEDORES_VALORACIONES " +
                " WHERE ID_PROVEEDOR = @id " +
                " ) " +
                " END");
            Execute.Sql("CREATE FUNCTION [COMENTARIO_ENCUESTA_VECINO] ( " +
                " @id INT, " +
                " @idVecino INT " +
                " ) " +
                " RETURNS NVARCHAR(140) " +
                " AS " +
                " BEGIN " +
                " RETURN( " +
                " SELECT COMENTARIO " +
                " FROM ENCUESTAS_VALORACIONES " +
                " WHERE ID_ENCUESTA = @id AND userid = @idVecino " +
                " ) " +
                " END");
            Execute.Sql("CREATE FUNCTION [DATE_TO_STR] ( "+
                " @date DATETIME, " +
                " @lang VARCHAR(2) " +
                " ) " +
                " RETURNS VARCHAR(10) " +
                " AS " +
                " BEGIN " +
                " DECLARE @result VARCHAR(10) " +
                " IF @lang = 'EN' " +
                "  SET @result = dbo.ZERO_PAD(MONTH(@date), 2) + '-' + " +
                "   dbo.ZERO_PAD(DAY(@date), 2) + '-' + CAST(YEAR(@date) AS VARCHAR) " +
                " ELSE " +
                "  SET @result = dbo.ZERO_PAD(DAY(@date), 2) + '-' + " +
                "  dbo.ZERO_PAD(MONTH(@date), 2) + '-' + CAST(YEAR(@date) AS VARCHAR) " +
                " RETURN(@result) " +
                " END");

            Execute.Sql(" CREATE FUNCTION [dbo].[DURACION_RESERVA]( @id INT ) " +
                " RETURNS @resultado TABLE (ID SMALLINT, NOMBRE NVARCHAR(100)) " +
                " AS " +
                " BEGIN " +
                " INSERT INTO @resultado " +
                " SELECT DURACION, CAST(CAST(DURACION AS FLOAT)/60 AS NVARCHAR) + ' hs' " +
                " FROM RESERVAS R " +
                " WHERE R.ID = @id " +
                " RETURN " +
                " END ");

            Execute.Sql(" CREATE FUNCTION [dbo].[ESTADO_TURNO_RESERVA] ( " +
                " @idRecurso SMALLINT, " +
                " @fecha DATETIME, " +
                " @inicio SMALLINT, " +
                " @duracion SMALLINT " +
                " ) " +
                " RETURNS NVARCHAR(100) " +
                " AS " +
                " BEGIN " +
                    " RETURN(SELECT " +
                    " CASE WHEN dbo.TURNO_RESERVA_DISPONIBLE(@idRecurso, @fecha, @inicio, @duracion) = 0 " +
                    " THEN 'No disponible' " +
                    " ELSE " +
                        " CASE WHEN (SELECT DATEDIFF(MINUTE, GETDATE(), dbo.FECHA_INICIO_TURNO(@fecha, @inicio))) >= 0 " +
                        " THEN 'Disponible' " +
                        " ELSE 'Vacante' " +
                        " END " +
                    " END) " +
                " END ");

            Execute.Sql(" CREATE FUNCTION [dbo].[ESTADOS_RESERVAS] ( @idRecurso smallint ) "+
                " RETURNS @resultado TABLE(FECHA date, INICIO smallint, DURACION smallint, ID_TIPO smallint,  " +
                  " ID_VECINO smallint, ID_VECINO_2 smallint, ESTADO nvarchar(100)) " +
                " AS "+
                " BEGIN " +
                  " IF @idRecurso = 100 " +
                    " INSERT INTO @resultado " +
                    " SELECT R.FECHA, R.INICIO, R.DURACION, R.ID_TIPO, R.ID_VECINO, R.ID_VECINO_2, " +
                      " dbo.ESTADO_TURNO_RESERVA(R.ID_RECURSO, R.FECHA, R.INICIO, R.DURACION) " +
                    " FROM RESERVAS R " +
                    " WHERE R.ID_RECURSO = @idRecurso AND R.FECHA >= (SELECT TOP 1 FECHA FROM HOY) " +
                  " ELSE " +
                    " INSERT INTO @resultado " +
                    " SELECT F.FECHA, T.INICIO, T.DURACION,  " +
                        " dbo.ID_TIPO_RESERVA(dbo.ID_RESERVA_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO, T.DURACION)), " +
                        " dbo.ID_VECINO_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO), " +
                        " dbo.ID_VECINO_2_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO), " +
                        " dbo.ESTADO_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO, T.DURACION) " +
                      " FROM dbo.LISTA_FECHAS() AS F " +
                      " CROSS JOIN dbo.RESERVAS_TURNOS(@idRecurso) T  " +
                  " RETURN " +
                " END ");

            
            Execute.Sql(" CREATE FUNCTION [dbo].[FECHA_INICIO_RESERVA] (  @id INT)"+
                " RETURNS DATETIME " +
                " AS "+
                " BEGIN " +
                " RETURN(SELECT dbo.FECHA_INICIO_TURNO(FECHA, INICIO) FROM RESERVAS WHERE ID = @id) " +
                " END ");

            Execute.Sql(" CREATE FUNCTION [dbo].[FECHA_INICIO_TURNO] ( " +
                " @fecha DATETIME, " +
                "@inicio SMALLINT " +
                ") " +
                " RETURNS DATETIME " +
                "AS " +
                " BEGIN " +
                " RETURN(DATEADD(MINUTE, @inicio, @fecha)) " +
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[FECHA_PRIMERA_RESERVA] () " +
                " RETURNS DATETIME " +
                " AS "+
                " BEGIN " +
                " RETURN(SELECT MIN(FECHA) FROM RESERVAS) " +
                " END  ");
            Execute.Sql("CREATE FUNCTION [dbo].[FECHA_ULTIMA_RESERVA] ( @idRecurso smallint )" +
                " RETURNS date " +
                " AS "+
                " BEGIN " +
                  " DECLARE @d date " +
                  " SELECT @d = MAX(FECHA) FROM RESERVAS WHERE ID_RECURSO = @idRecurso " +
                  " IF @idRecurso = 100 RETURN(@d) " +
                  " RETURN(DATEADD(D, 1, COALESCE(@d, (SELECT TOP 1 FECHA FROM HOY)))) " +
                " END  ");
            Execute.Sql(" CREATE FUNCTION [dbo].[HOUR_TO_STR] ( @hour DATETIME )"+
                " RETURNS VARCHAR(5) " +
                " AS " +
                " BEGIN " +
                " RETURN(dbo.ZERO_PAD(DATEPART(HOUR, @hour), 2) + ':' + dbo.ZERO_PAD(DATEPART(MINUTE, @hour), 2)) " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[ID_RESERVA_TURNO_RESERVA] ( " +
                  " @idRecurso SMALLINT, " +
                  " @fecha DATETIME, " +
                 "  @inicio SMALLINT, " +
                  " @duracion SMALLINT " +
                " ) " +
                " RETURNS INT " +
                " AS " +
                " BEGIN " +
                  " RETURN( " +
                    " SELECT ID  " +
                      " FROM RESERVAS " +
                      " WHERE ID_RECURSO = @idRecurso AND FECHA=@fecha AND " +
                        " dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @inicio, @duracion) = 1) " +
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[ID_TIPO_RESERVA] ( @id INT) "+
                " RETURNS smallint " +
                " AS "+
                " BEGIN " +
                  " RETURN(SELECT ID_TIPO FROM RESERVAS WHERE ID=@id) " +
                " END  ");
            Execute.Sql("CREATE FUNCTION [dbo].[ID_VECINO_2_TURNO_RESERVA] ( " +
                  " @idRecurso SMALLINT, " +
                  " @fecha DATETIME, " +
                  " @horario SMALLINT "+
                " ) "+
                " RETURNS SMALLINT " +
                " AS "+
                " BEGIN " +
                  " RETURN(SELECT COALESCE(ID_VECINO_2, -1) " +
                    " FROM RESERVAS  " +
                    " WHERE ID_RECURSO = @idRecurso AND FECHA = @fecha AND " +
                      " dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @horario, 1) = 1) " +
                " END  ");
            Execute.Sql(" CREATE FUNCTION [dbo].[ID_VECINO_DE_UNIDAD] (  @unidad NVARCHAR(100))"+
                " RETURNS SMALLINT " +
                " AS "+
                " BEGIN " +
                  " RETURN(SELECT ID FROM VECINOS WHERE UNIDAD = @unidad) " +
                " END  ");
            Execute.Sql("CREATE FUNCTION [dbo].[ID_VECINO_TURNO_RESERVA] ( " +
                  " @idRecurso SMALLINT, " +
                  " @fecha DATETIME, " +
                  "@horario SMALLINT " +
                ") " +
                " RETURNS SMALLINT " +
                "AS " +
                " BEGIN " +
                  " RETURN(SELECT COALESCE(ID_VECINO, -1) " +
                    " FROM RESERVAS  " +
                    " WHERE ID_RECURSO = @idRecurso AND FECHA = @fecha AND " +
                      " dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @horario, 1) = 1) " +
                " END  ");
            
            Execute.Sql("CREATE FUNCTION [dbo].[INICIO_RESERVA] (@id INT) "+
                " RETURNS smallint " +
                " AS "+
                " BEGIN " +
                  " RETURN(SELECT INICIO FROM RESERVAS WHERE ID=@id) " +
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[LISTA_FECHAS]() "+
                " RETURNS @resultado TABLE(FECHA DATE) " +
                "AS " +
                " BEGIN " +
                  " DECLARE @fechaInicial DATE;  " +
                  " SELECT @fechaInicial = FECHA FROM HOY " +
                  " DECLARE @fechaFinal DATE;  " +
                  " SELECT @fechaFinal = DATEADD(d, 2, @fechaInicial); " +

                  " WITH fechas(FECHA) AS ( " +
                    " SELECT @fechaInicial AS FECHA " +
                    "UNION ALL " +
                    " SELECT DATEADD(d, 1, FECHA) FROM fechas WHERE FECHA < @fechaFinal) " +

                    " INSERT INTO @resultado " +
                      " SELECT FECHA FROM fechas  " +
                  " RETURN " +
                " END  ");
            Execute.Sql("CREATE FUNCTION [dbo].[MINUTOS_A_HORA] ( @minutos SMALLINT) "+
                " RETURNS DATETIME " +
                "AS "+
                " BEGIN " +
                  " RETURN(DATEADD(MINUTE, @minutos, '00:00:00')) " +
                " END ");
            Execute.Sql("  CREATE FUNCTION [dbo].[MOSTRAR_ARCHIVO_EN_CARTELERA] ( @id INT)"+
                " RETURNS BIT " +
                " AS "+
                " BEGIN " +
                  " RETURN( " +
                    " SELECT CASE WHEN APROBADO=1 AND ARCHIVO_FILENAME IS NOT NULL THEN 1 ELSE 0 END " +
                    " FROM LINEA_TIEMPO " +
                    " WHERE ID = @id) " +
                " END");
            Execute.Sql("CREATE FUNCTION [dbo].[NOMBRE_TIPO_MASCOTA] (  @idTipo smallint)"+
                " RETURNS NVARCHAR(100) " +
                "AS "+
                " BEGIN " +
                  " RETURN(CASE @idTipo WHEN 0 THEN 'Perro' WHEN 1 THEN 'Gato' ELSE 'Otro' END) " +
                " END  ");
            Execute.Sql("  CREATE FUNCTION [dbo].[NOMBRE_TIPO_RESERVA] ( " +
                  " @idRecurso SMALLINT, " +
                  "@id SMALLINT " +
                ") " +
                " RETURNS NVARCHAR(100) " +
                "AS " +
                " BEGIN " +
                  " RETURN(SELECT NOMBRE FROM RESERVAS_TIPOS WHERE ID_RECURSO=@idRecurso AND ID=@id) " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[NOMBRE_TURNO] ( " +
                  "@inicio SMALLINT, " +
                  "@duracion SMALLINT " +
                ") " +
                " RETURNS NVARCHAR(100) " +
                "AS " +
                " BEGIN " +
                  " RETURN(dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(@inicio)) + ' a ' + " +
                     " dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(@inicio + @duracion))) " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[NOMBRE_TURNO_RESERVA] (  @id INT)"+
                " RETURNS NVARCHAR(100) " +
                "AS "+
                " BEGIN " +
                  " RETURN(SELECT dbo.NOMBRE_TURNO(INICIO, DURACION) " +
                    " FROM RESERVAS  " +
                    " WHERE ID = @id) " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[NOMBRE_VALORACION] ( @valoracion DECIMAL(5,2) )" +
                " RETURNS NVARCHAR(10) " +
                "AS "+
                " BEGIN " +
                  " RETURN( " +
                    " SELECT NOMBRE  " +
                    " FROM NOMBRES_VALORACIONES " +
                    " WHERE MIN <= @valoracion AND @valoracion < MAX) " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[RESERVAS_DURACIONES](@idRecurso SMALLINT) "+
                " RETURNS @resultado TABLE(ID SMALLINT, NOMBRE NVARCHAR(100), INICIO SMALLINT, DURACION SMALLINT) " +
                " AS " +
                " BEGIN " +
                  " DECLARE @apertura SMALLINT " +
                  " DECLARE @cierre SMALLINT " +
                  " DECLARE @resolucion SMALLINT " +
                  " SELECT @apertura = APERTURA, @cierre = CIERRE, @resolucion = RESOLUCION " +
                    " FROM RESERVAS_RECURSOS  " +
                    " WHERE ID = @idRecurso " +
                  " IF @resolucion = 0 " +
                    " INSERT INTO @resultado " +
                      " SELECT DISTINCT DURACION, CAST(CAST(DURACION AS FLOAT)/60 AS NVARCHAR) + ' hs', INICIO, DURACION " +
                        " FROM RESERVAS_TURNOS_ESPECIALES WHERE ID_RECURSO = @idRecurso " +
                  " ELSE " +
                  " BEGIN " +
                    " DECLARE @inicio SMALLINT; SET @inicio = @apertura; " +
                    "WITH TURNOS(INICIO) AS(" +
                      " SELECT @inicio AS INICIO " +
                      "UNION ALL " +
                      " SELECT INICIO + @resolucion " +
                        " FROM TURNOS WHERE INICIO < @cierre) " +
                    " INSERT INTO @resultado " +
                      " SELECT R.DURACION, CAST(CAST(R.DURACION AS FLOAT)/60 AS NVARCHAR) + ' hs (' + R.NOMBRE + ')', T.INICIO, R.DURACION " +
                        "FROM TURNOS T " +
                        " JOIN RESERVAS_TIPOS R ON R.ID_RECURSO = @idRecurso " +
                  " END " +
                  " RETURN " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[RESERVAS_DURACIONES_BLOQUEOS](@idRecurso SMALLINT )" +
                " RETURNS @resultado TABLE(ID SMALLINT, NOMBRE NVARCHAR(100)) " +
                "AS " +
                " BEGIN " +
                  " DECLARE @apertura SMALLINT " +
                  " DECLARE @cierre SMALLINT " +
                  " DECLARE @resolucion SMALLINT " +
                  " SELECT @apertura = APERTURA, @cierre = CIERRE, @resolucion = RESOLUCION " +
                    " FROM RESERVAS_RECURSOS  " +
                    " WHERE ID = @idRecurso " +
                  " IF @resolucion = 0 " +
                    " INSERT INTO @resultado " +
                      " SELECT DISTINCT DURACION, CAST(CAST(DURACION AS FLOAT) / 60 AS NVARCHAR) + ' hs' " +
                        " FROM RESERVAS_TURNOS_ESPECIALES WHERE ID_RECURSO = @idRecurso " +
                  " ELSE " +
                  " BEGIN " +
                    " DECLARE @duracion SMALLINT; SET @duracion = @resolucion; " +
                    " WITH DURACIONES(DURACION) AS ( " +
                      " SELECT @duracion AS DURACION " +
                      " UNION ALL " +
                      " SELECT DURACION + @resolucion " +
                        " FROM DURACIONES WHERE DURACION <= @cierre - @apertura) " +
                    " INSERT INTO @resultado " +
                      " SELECT DURACION, CAST(CAST(DURACION AS FLOAT) / 60 AS NVARCHAR) + ' hs' " +
                        " FROM DURACIONES " +
                  " END " +
                  " RETURN " +
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[RESERVAS_TURNOS](@idRecurso SMALLINT ) "+
                " RETURNS @resultado TABLE(ID SMALLINT, NOMBRE NVARCHAR(100), INICIO SMALLINT, DURACION SMALLINT) " +
                " AS "+
                " BEGIN " +
                  " DECLARE @apertura SMALLINT " +
                  " DECLARE @cierre SMALLINT " +
                  " DECLARE @resolucion SMALLINT " +
                  " SELECT @apertura = APERTURA, @cierre = CIERRE, @resolucion = RESOLUCION " +
                    " FROM RESERVAS_RECURSOS  " +
                    " WHERE ID = @idRecurso " +
                  " IF @resolucion = 0 " +
                    " INSERT INTO @resultado " +
                      " SELECT DISTINCT INICIO, dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(INICIO)), INICIO, DURACION  " +
                        " FROM RESERVAS_TURNOS_ESPECIALES WHERE ID_RECURSO = @idRecurso " +
                  " ELSE " +
                  " BEGIN " +
                    " DECLARE @inicio SMALLINT; SET @inicio = @apertura; " +
                    "WITH TURNOS(INICIO) AS( " +
                      " SELECT @inicio AS INICIO " +
                      "UNION ALL  " +
                      " SELECT INICIO + @resolucion " +
                        " FROM TURNOS WHERE INICIO + @resolucion < @cierre) " +
                    " INSERT INTO @resultado " +
                      " SELECT INICIO, dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(INICIO)), INICIO, @resolucion  " +
                        "FROM TURNOS  " +
                  " END " +
                  " RETURN " +
                " END  ");
            Execute.Sql(" CREATE FUNCTION [dbo].[RESULTADO_RESERVA] (  @id INT) "+
                " RETURNS NVARCHAR(100) " +
                " AS "+
                " BEGIN " +
                  " RETURN(SELECT CASE  " +
                    " WHEN ID_RESULTADO IS NOT NULL " +
                    " THEN dbo.NOMBRE_RESULTADO_RESERVA(ID_RESULTADO) " +
                    " ELSE CASE " +
                      " WHEN ID_VECINO IS NULL  " +
                      " THEN '--BLOQUEADO--' " +
                      " ELSE CASE " +
                        " WHEN dbo.FECHA_INICIO_TURNO(FECHA, INICIO) <= GETDATE() " +
                        " THEN 'Pendiente' " +
                        " ELSE NULL " +
                        " END " +
                      " END " +
                    " END " +
                    " FROM RESERVAS WHERE ID = @id) " +
                " END ");


            Execute.Sql(" CREATE FUNCTION [dbo].[SPACE_PAD] ( " +
                  " @value VARCHAR(100), " +
                  " @length SMALLINT ) " +
                " RETURNS VARCHAR(100) " +
                " AS " +
                " BEGIN " +
                  " RETURN(COALESCE(REPLICATE(' ', @length - LEN(@value)), '') + @value) " +
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[TURNO_RESERVA_CONFLICTO] ( " +
                  " @fecha1 DATETIME, " +
                 "  @inicio1 SMALLINT, " +
                  " @duracion1 SMALLINT, " +
                  " @fecha2 DATETIME, " +
                  " @inicio2 SMALLINT, " +
                  " @duracion2 SMALLINT " +
                " ) " +
                " RETURNS BIT " +
                " AS " +
                " BEGIN " +
                  " DECLARE @i1 DATETIME; SET @i1 = dbo.FECHA_INICIO_TURNO(@fecha1, @inicio1) " +
                  " DECLARE @f1 DATETIME; SET @f1 = dbo.FECHA_FIN_TURNO(@fecha1, @inicio1, @duracion1) " +
                  " DECLARE @i2 DATETIME; SET @i2 = dbo.FECHA_INICIO_TURNO(@fecha2, @inicio2) " +
                  " DECLARE @f2 DATETIME; SET @f2 = dbo.FECHA_FIN_TURNO(@fecha2, @inicio2, @duracion2) " +
                  " RETURN(SELECT CASE  " +
                    " WHEN (@i1 <= @i2 and @i2 < @f1) OR (@i1 < @f2 and @f2 <= @f1) OR (@i2 <= @i1 and @f1 <= @f2) " +
                    " THEN 1 " +
                    " ELSE 0 " +
                    " END) " +
                " END  ");
            Execute.Sql(" CREATE FUNCTION [dbo].[TURNO_RESERVA_DISPONIBLE] ( " +
                  " @idRecurso SMALLINT, " +
                  " @fecha DATETIME, " +
                  " @inicio SMALLINT, " +
                  " @duracion SMALLINT " +
                " ) " +
                " RETURNS BIT " +
                " AS " +
                " BEGIN " +
                  " RETURN(SELECT " +
                    " CASE WHEN NOT EXISTS (SELECT * FROM RESERVAS " +
                      " WHERE ID_RECURSO = @idRecurso AND FECHA=@fecha AND " +
                        " dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @inicio, @duracion) = 1) " +
                    " THEN 1 " +
                    " ELSE 0 " +
                    " END) " +
                " END");
            Execute.Sql(" CREATE FUNCTION [dbo].[TURNO_RESERVA_VALIDO] ( " +
                  " @idRecurso SMALLINT, " +
                  "@inicio SMALLINT, " +
                  "@duracion SMALLINT " +
                ") " +
                " RETURNS BIT " +
                "AS " +
                " BEGIN " +
                  " DECLARE @apertura SMALLINT " +
                  " DECLARE @cierre SMALLINT " +
                  " SELECT @apertura = APERTURA, @cierre = CIERRE " +
                    " FROM RESERVAS_RECURSOS WHERE ID = @idRecurso " +
                  " IF @apertura IS NULL OR @cierre IS NULL " +
                  " BEGIN " +
                    " RETURN(SELECT  " +
                      " CASE WHEN EXISTS(SELECT * FROM RESERVAS_TURNOS_ESPECIALES  " +
                        " WHERE ID_RECURSO = @idRecurso AND INICIO = @inicio AND DURACION = @duracion) " +
                      " THEN 1 " +
                      " ELSE 0 " +
                      " END) " +
                  " END " +
                  " IF @apertura <= @inicio AND @inicio + @duracion <= @cierre  " +
                    " RETURN(1) " +
                  " RETURN(0) " +
                " END ");
            Execute.Sql(" CREATE FUNCTION [dbo].[TURNOS_RESERVA_SIMULTANEOS_O_ADYASCENTES] ( " +
                  " @fecha1 DATETIME, " +
                  "@inicio1 SMALLINT, " +
                  "@duracion1 SMALLINT, " +
                  " @fecha2 DATETIME, " +
                 " @inicio2 SMALLINT, " +
                  "@duracion2 SMALLINT " +
                ") " +
                " RETURNS BIT " +
                "AS " +
                " BEGIN " +
                  " DECLARE @i1 DATETIME; SET @i1 = dbo.FECHA_INICIO_TURNO(@fecha1, @inicio1) " +
                  " DECLARE @f1 DATETIME; SET @f1 = dbo.FECHA_FIN_TURNO(@fecha1, @inicio1, @duracion1) " +
                  " DECLARE @i2 DATETIME; SET @i2 = dbo.FECHA_INICIO_TURNO(@fecha2, @inicio2) " +
                  " DECLARE @f2 DATETIME; SET @f2 = dbo.FECHA_FIN_TURNO(@fecha2, @inicio2, @duracion2) " +
                  " RETURN(SELECT CASE  " +
                    " WHEN (@i1 <= @i2 and @i2 <= @f1) OR (@i1 <= @f2 and @f2 <= @f1) OR (@i2 <= @i1 and @f1 <= @f2) " +
                    " THEN 1 " +
                    " ELSE 0 " +
                    " END) " +
                " END  ");
            Execute.Sql("CREATE FUNCTION [dbo].[VALORACION_ENCUESTA] (  @id INT)"+
                " RETURNS DECIMAL(5,2) " +
                "AS "+
                " BEGIN " +
                  " RETURN( " +
                    " SELECT AVG(VALORACION) " +
                      " FROM ENCUESTAS_VALORACIONES " +
                      " WHERE ID_ENCUESTA = @id " +
                    ") "+
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[VALORACION_ENCUESTA_VECINO] ( " +
              "@id INT,"+
              " @idVecino INT " +
            ")"+
            " RETURNS SMALLINT " +
            "AS "+
            " BEGIN " +
              " RETURN( " +
                " SELECT VALORACION " +
                  " FROM ENCUESTAS_VALORACIONES " +
                  " WHERE ID_ENCUESTA = @id AND userid = @idVecino " +
                ") " +
            " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[VALORACION_PROVEEDOR] ( @id INT) "+
                " RETURNS SMALLINT " +
                "AS " +
                " BEGIN " +
                  " RETURN(  " +
                    " CAST((SELECT ROUND(AVG(VALORACION), 0)  " +
                     " FROM PROVEEDORES_VALORACIONES  " +
                     " WHERE ID_PROVEEDOR = @id) AS INT) " +
                    ") " +
                " END ");
            Execute.Sql("CREATE FUNCTION [dbo].[VALORACION_PROVEEDOR_VECINO] ( " +
                  "@id INT, " +
                  " @idVecino INT " +
                ") " +
                " RETURNS SMALLINT " +
                "AS " +
                " BEGIN " +
                  " RETURN( " +
                    " SELECT VALORACION " +
                      " FROM PROVEEDORES_VALORACIONES " +
                      " WHERE ID_PROVEEDOR = @id AND userid = @idVecino " +
                    ") " +
                " END  ");
           


            

        }
        public override void Down()
        {

            Execute.Sql("DROP FUNCTION[dbo].[DURACION_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[ESTADO_TURNO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[ESTADOS_RESERVAS]");
            Execute.Sql("DROP FUNCTION[dbo].[FECHA_INICIO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[FECHA_INICIO_TURNO]");
            Execute.Sql("DROP FUNCTION[dbo].[FECHA_PRIMERA_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[FECHA_ULTIMA_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[HOUR_TO_STR]");
            Execute.Sql("DROP FUNCTION[dbo].[ID_RESERVA_TURNO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[ID_TIPO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[ID_VECINO_2_TURNO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[ID_VECINO_DE_UNIDAD]");
            Execute.Sql("DROP FUNCTION[dbo].[ID_VECINO_TURNO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[INICIO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[LISTA_FECHAS]");
            Execute.Sql("DROP FUNCTION[dbo].[MOSTRAR_ARCHIVO_EN_CARTELERA]");
            Execute.Sql("DROP FUNCTION[dbo].[MINUTOS_A_HORA]");
            Execute.Sql("DROP FUNCTION[dbo].[NOMBRE_TIPO_MASCOTA]");
            Execute.Sql("DROP FUNCTION[dbo].[NOMBRE_TIPO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[NOMBRE_TURNO]");
            Execute.Sql("DROP FUNCTION[dbo].[NOMBRE_TURNO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[NOMBRE_VALORACION]");
            Execute.Sql("DROP FUNCTION[dbo].[RESERVAS_DURACIONES]");
            Execute.Sql("DROP FUNCTION[dbo].[RESERVAS_DURACIONES_BLOQUEOS]");
            Execute.Sql("DROP FUNCTION[dbo].[RESERVAS_TURNOS]");
            Execute.Sql("DROP FUNCTION[dbo].[RESULTADO_RESERVA]");
            Execute.Sql("DROP FUNCTION[dbo].[SPACE_PAD]");
            Execute.Sql("DROP FUNCTION[dbo].[TURNO_RESERVA_CONFLICTO]");
            Execute.Sql("DROP FUNCTION[dbo].[TURNO_RESERVA_DISPONIBLE]");
            Execute.Sql("DROP FUNCTION[dbo].[TURNO_RESERVA_VALIDO]");
            Execute.Sql("DROP FUNCTION[dbo].[TURNOS_RESERVA_SIMULTANEOS_O_ADYASCENTES]");
            Execute.Sql("DROP FUNCTION[dbo].[VALORACION_ENCUESTA]");
            Execute.Sql("DROP FUNCTION[dbo].[VALORACION_ENCUESTA_VECINO]");
            Execute.Sql("DROP FUNCTION[dbo].[VALORACION_PROVEEDOR]");
            Execute.Sql("DROP FUNCTION[dbo].[VALORACION_PROVEEDOR_VECINO]");

        }

    }
}