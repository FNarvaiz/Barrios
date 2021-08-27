using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20210825172010), Tags("Default")]
    public class DefaultDB_20210825_172010_ChangeSubBarrioToUserBarrio : Migration
    {
        public override void Up()
        {
            Alter.Table("[Users-Barrios]").AddColumn("SubBarrioId").AsInt16().Nullable()
                .ForeignKey("FK_Users_Barrios_subBarrioId", "SUBBARRIOS", "ID");

            Execute.Sql("UPDATE US SET US.subBarrioId = U.subBarrioId FROM [Users-Barrios] US "+
                "INNER JOIN [Users] U ON U.UserId = US.UserId");

            Delete.ForeignKey("FK_Users_subBarrioId_SUBBARRIOS_ID").OnTable("[Users]");
            Delete.Column("SubBarrioId").FromTable("[Users]");

        }
        public override void Down()
        {
            Alter.Table("[Users]").AddColumn("SubBarrioId").AsInt16().Nullable()
                .ForeignKey("FK_Users_subBarrioId_SUBBARRIOS_ID", "SUBBARRIOS", "ID"); ;

            Execute.Sql("UPDATE U SET U.subBarrioId = US.subBarrioId FROM [Users] U " +
                "INNER JOIN [Users-Barrios] US ON U.UserId = US.UserId");

            Delete.ForeignKey("FK_Users_Barrios_subBarrioId").OnTable("[Users-Barrios]");
            Delete.Column("SubBarrioId").FromTable("[Users-Barrios]");
        }
     }
}