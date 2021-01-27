var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosForm = /** @class */ (function (_super) {
            __extends(BarriosForm, _super);
            function BarriosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BarriosForm.init) {
                    BarriosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(BarriosForm, [
                        'Nombre', w0,
                        'ShortDisplayName', w0,
                        'LargeDisplayName', w0,
                        'Mail', w1,
                        'PasswordMail', w0,
                        'Logo', w2,
                        'Url', w0,
                        'TelefonOs', w0,
                        'CantDiasReservables', w3,
                        'Direccion', w0,
                        'UseSubBarrios', w4,
                        'Emails', w5,
                        'VerUserEnReservas', w4,
                        'IsActive', w4
                    ]);
                }
                return _this;
            }
            BarriosForm.formKey = 'Administration.Barrios';
            return BarriosForm;
        }(Serenity.PrefixedContext));
        Administration.BarriosForm = BarriosForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosRow;
        (function (BarriosRow) {
            BarriosRow.idProperty = 'Id';
            BarriosRow.nameProperty = 'Nombre';
            BarriosRow.localTextPrefix = 'Administration.Barrios';
            BarriosRow.lookupKey = 'Administration.Barrios';
            function getLookup() {
                return Q.getLookup('Administration.Barrios');
            }
            BarriosRow.getLookup = getLookup;
        })(BarriosRow = Administration.BarriosRow || (Administration.BarriosRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosService;
        (function (BarriosService) {
            BarriosService.baseUrl = 'Administration/Barrios';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BarriosService[x] = function (r, s, o) {
                    return Q.serviceRequest(BarriosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BarriosService = Administration.BarriosService || (Administration.BarriosService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var NotesForm = /** @class */ (function (_super) {
            __extends(NotesForm, _super);
            function NotesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NotesForm.init) {
                    NotesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(NotesForm, [
                        'DestinationUserId', w0,
                        'Message', w1,
                        'ShowUser', w2
                    ]);
                }
                return _this;
            }
            NotesForm.formKey = 'Administration.Notes';
            return NotesForm;
        }(Serenity.PrefixedContext));
        Administration.NotesForm = NotesForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var NotesRow;
        (function (NotesRow) {
            NotesRow.idProperty = 'Id';
            NotesRow.nameProperty = 'Message';
            NotesRow.localTextPrefix = 'Administration.Notes';
        })(NotesRow = Administration.NotesRow || (Administration.NotesRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var NotesService;
        (function (NotesService) {
            NotesService.baseUrl = 'Administration/Notes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NotesService[x] = function (r, s, o) {
                    return Q.serviceRequest(NotesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NotesService = Administration.NotesService || (Administration.NotesService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EmailEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.PasswordEditor;
                    var w5 = s.TextAreaEditor;
                    var w6 = s.DateEditor;
                    var w7 = s.BooleanEditor;
                    var w8 = s.CheckLookupEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Units', w0,
                        'subBarrioId', w1,
                        'Email', w2,
                        'UserImage', w3,
                        'Phone', w0,
                        'Password', w4,
                        'PasswordConfirm', w4,
                        'Email_Others', w5,
                        'LimitDate', w6,
                        'Owner', w7,
                        'IsActive', w7,
                        'Note', w5,
                        'Source', w0,
                        'ClientIdList', w8
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List',
                'IsValidUsername',
                'ImportFile'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UsersBarriosRow;
        (function (UsersBarriosRow) {
            UsersBarriosRow.idProperty = 'UserId';
            UsersBarriosRow.localTextPrefix = 'Administration.UsersBarrios';
        })(UsersBarriosRow = Administration.UsersBarriosRow || (Administration.UsersBarriosRow = {}));
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ImportFileForm = /** @class */ (function (_super) {
            __extends(ImportFileForm, _super);
            function ImportFileForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportFileForm.init) {
                    ImportFileForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ImportFileForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            ImportFileForm.formKey = 'Common.ImportFile';
            return ImportFileForm;
        }(Serenity.PrefixedContext));
        Common.ImportFileForm = ImportFileForm;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosForm = /** @class */ (function (_super) {
            __extends(AvisosForm, _super);
            function AvisosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvisosForm.init) {
                    AvisosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.ImageUploadEditor;
                    Q.initFormType(AvisosForm, [
                        'Nombre', w0,
                        'IdCategoria', w1,
                        'Caducidad', w2,
                        'Vigente', w3,
                        'Descripcion', w0,
                        'Imagen', w4
                    ]);
                }
                return _this;
            }
            AvisosForm.formKey = 'Contenidos.Avisos';
            return AvisosForm;
        }(Serenity.PrefixedContext));
        Contenidos.AvisosForm = AvisosForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosRow;
        (function (AvisosRow) {
            AvisosRow.idProperty = 'Id';
            AvisosRow.nameProperty = 'Nombre';
            AvisosRow.localTextPrefix = 'Contenidos.Avisos';
        })(AvisosRow = Contenidos.AvisosRow || (Contenidos.AvisosRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosService;
        (function (AvisosService) {
            AvisosService.baseUrl = 'Contenidos/Avisos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvisosService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvisosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvisosService = Contenidos.AvisosService || (Contenidos.AvisosService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasForm = /** @class */ (function (_super) {
            __extends(CategoriasForm, _super);
            function CategoriasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriasForm.init) {
                    CategoriasForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(CategoriasForm, [
                        'Type', w0,
                        'Nombre', w1,
                        'Mostrar', w2,
                        'Vigente', w2
                    ]);
                }
                return _this;
            }
            CategoriasForm.formKey = 'Contenidos.Categorias';
            return CategoriasForm;
        }(Serenity.PrefixedContext));
        Contenidos.CategoriasForm = CategoriasForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasRow;
        (function (CategoriasRow) {
            CategoriasRow.idProperty = 'Id';
            CategoriasRow.nameProperty = 'Nombre';
            CategoriasRow.localTextPrefix = 'Contenidos.Categorias';
            CategoriasRow.lookupKey = 'Contenidos.Categorias';
            function getLookup() {
                return Q.getLookup('Contenidos.Categorias');
            }
            CategoriasRow.getLookup = getLookup;
        })(CategoriasRow = Contenidos.CategoriasRow || (Contenidos.CategoriasRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasService;
        (function (CategoriasService) {
            CategoriasService.baseUrl = 'Contenidos/Categorias';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriasService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriasService = Contenidos.CategoriasService || (Contenidos.CategoriasService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesForm = /** @class */ (function (_super) {
            __extends(ComisionesForm, _super);
            function ComisionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComisionesForm.init) {
                    ComisionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Contenidos.ComisionesIntegrantesGrid;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ComisionesForm, [
                        'Nombre', w0,
                        'Mails', w0,
                        'MembersList', w1,
                        'Habilitada', w2
                    ]);
                }
                return _this;
            }
            ComisionesForm.formKey = 'Contenidos.Comisiones';
            return ComisionesForm;
        }(Serenity.PrefixedContext));
        Contenidos.ComisionesForm = ComisionesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesForm = /** @class */ (function (_super) {
            __extends(ComisionesIntegrantesForm, _super);
            function ComisionesIntegrantesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComisionesIntegrantesForm.init) {
                    ComisionesIntegrantesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ComisionesIntegrantesForm, [
                        'Nombre', w0
                    ]);
                }
                return _this;
            }
            ComisionesIntegrantesForm.formKey = 'Contenidos.ComisionesIntegrantes';
            return ComisionesIntegrantesForm;
        }(Serenity.PrefixedContext));
        Contenidos.ComisionesIntegrantesForm = ComisionesIntegrantesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesRow;
        (function (ComisionesIntegrantesRow) {
            ComisionesIntegrantesRow.idProperty = 'Id';
            ComisionesIntegrantesRow.nameProperty = 'Nombre';
            ComisionesIntegrantesRow.localTextPrefix = 'Contenidos.ComisionesIntegrantes';
        })(ComisionesIntegrantesRow = Contenidos.ComisionesIntegrantesRow || (Contenidos.ComisionesIntegrantesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesRow;
        (function (ComisionesRow) {
            ComisionesRow.idProperty = 'Id';
            ComisionesRow.nameProperty = 'Nombre';
            ComisionesRow.localTextPrefix = 'Contenidos.Comisiones';
        })(ComisionesRow = Contenidos.ComisionesRow || (Contenidos.ComisionesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesService;
        (function (ComisionesService) {
            ComisionesService.baseUrl = 'Contenidos/Comisiones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'SendMail',
                'ListView'
            ].forEach(function (x) {
                ComisionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ComisionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ComisionesService = Contenidos.ComisionesService || (Contenidos.ComisionesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasForm = /** @class */ (function (_super) {
            __extends(EncuestasForm, _super);
            function EncuestasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EncuestasForm.init) {
                    EncuestasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(EncuestasForm, [
                        'Nombre', w0,
                        'FechaAlta', w1,
                        'FechaBaja', w1,
                        'IdCategoria', w2,
                        'Descripcion', w3,
                        'Vigente', w4
                    ]);
                }
                return _this;
            }
            EncuestasForm.formKey = 'Contenidos.Encuestas';
            return EncuestasForm;
        }(Serenity.PrefixedContext));
        Contenidos.EncuestasForm = EncuestasForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasRow;
        (function (EncuestasRow) {
            EncuestasRow.idProperty = 'Id';
            EncuestasRow.nameProperty = 'Nombre';
            EncuestasRow.localTextPrefix = 'Contenidos.Encuestas';
        })(EncuestasRow = Contenidos.EncuestasRow || (Contenidos.EncuestasRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasService;
        (function (EncuestasService) {
            EncuestasService.baseUrl = 'Contenidos/Encuestas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ListRatings',
                'Rating',
                'SeeMore'
            ].forEach(function (x) {
                EncuestasService[x] = function (r, s, o) {
                    return Q.serviceRequest(EncuestasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EncuestasService = Contenidos.EncuestasService || (Contenidos.EncuestasService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesForm = /** @class */ (function (_super) {
            __extends(EncuestasValoracionesForm, _super);
            function EncuestasValoracionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EncuestasValoracionesForm.init) {
                    EncuestasValoracionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(EncuestasValoracionesForm, [
                        'IdEncuesta', w0,
                        'Valoracion', w1,
                        'Comentario', w2
                    ]);
                }
                return _this;
            }
            EncuestasValoracionesForm.formKey = 'Contenidos.EncuestasValoraciones';
            return EncuestasValoracionesForm;
        }(Serenity.PrefixedContext));
        Contenidos.EncuestasValoracionesForm = EncuestasValoracionesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesRow;
        (function (EncuestasValoracionesRow) {
            EncuestasValoracionesRow.idProperty = 'Id';
            EncuestasValoracionesRow.nameProperty = 'IdEncuestaNombre';
            EncuestasValoracionesRow.localTextPrefix = 'Contenidos.EncuestasValoraciones';
        })(EncuestasValoracionesRow = Contenidos.EncuestasValoracionesRow || (Contenidos.EncuestasValoracionesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesService;
        (function (EncuestasValoracionesService) {
            EncuestasValoracionesService.baseUrl = 'Contenidos/EncuestasValoraciones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EncuestasValoracionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EncuestasValoracionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EncuestasValoracionesService = Contenidos.EncuestasValoracionesService || (Contenidos.EncuestasValoracionesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoForm = /** @class */ (function (_super) {
            __extends(LineaTiempoForm, _super);
            function LineaTiempoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LineaTiempoForm.init) {
                    LineaTiempoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.HtmlContentEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LineaTiempoForm, [
                        'Nombre', w0,
                        'IdCategoria', w1,
                        'PeriodoFecha', w2,
                        'ArchivoFilename', w3,
                        'ContenidoTexto', w4,
                        'Mostrar', w5,
                        'Aprobado', w5
                    ]);
                }
                return _this;
            }
            LineaTiempoForm.formKey = 'Contenidos.LineaTiempo';
            return LineaTiempoForm;
        }(Serenity.PrefixedContext));
        Contenidos.LineaTiempoForm = LineaTiempoForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoRow;
        (function (LineaTiempoRow) {
            LineaTiempoRow.idProperty = 'Id';
            LineaTiempoRow.nameProperty = 'Nombre';
            LineaTiempoRow.localTextPrefix = 'Contenidos.LineaTiempo';
        })(LineaTiempoRow = Contenidos.LineaTiempoRow || (Contenidos.LineaTiempoRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoService;
        (function (LineaTiempoService) {
            LineaTiempoService.baseUrl = 'Contenidos/LineaTiempo';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'SendMails',
                'SendMailsForSubNeigborhoob',
                'ImportFile'
            ].forEach(function (x) {
                LineaTiempoService[x] = function (r, s, o) {
                    return Q.serviceRequest(LineaTiempoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LineaTiempoService = Contenidos.LineaTiempoService || (Contenidos.LineaTiempoService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresForm = /** @class */ (function (_super) {
            __extends(ProveedoresForm, _super);
            function ProveedoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProveedoresForm.init) {
                    ProveedoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.EmailEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(ProveedoresForm, [
                        'Nombre', w0,
                        'IdCategoria', w1,
                        'FechaAlta', w2,
                        'FechaBaja', w2,
                        'Domicilio', w0,
                        'Telefonos', w0,
                        'Email', w3,
                        'Notas', w0,
                        'Vigente', w4
                    ]);
                }
                return _this;
            }
            ProveedoresForm.formKey = 'Contenidos.Proveedores';
            return ProveedoresForm;
        }(Serenity.PrefixedContext));
        Contenidos.ProveedoresForm = ProveedoresForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresRow;
        (function (ProveedoresRow) {
            ProveedoresRow.idProperty = 'Id';
            ProveedoresRow.nameProperty = 'Nombre';
            ProveedoresRow.localTextPrefix = 'Contenidos.Proveedores';
        })(ProveedoresRow = Contenidos.ProveedoresRow || (Contenidos.ProveedoresRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresService;
        (function (ProveedoresService) {
            ProveedoresService.baseUrl = 'Contenidos/Proveedores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ListRatings',
                'Rating'
            ].forEach(function (x) {
                ProveedoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProveedoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProveedoresService = Contenidos.ProveedoresService || (Contenidos.ProveedoresService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesForm = /** @class */ (function (_super) {
            __extends(ProveedoresValoracionesForm, _super);
            function ProveedoresValoracionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProveedoresValoracionesForm.init) {
                    ProveedoresValoracionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(ProveedoresValoracionesForm, [
                        'IdProveedor', w0,
                        'Fecha', w1,
                        'Valoracion', w0,
                        'Userid', w0
                    ]);
                }
                return _this;
            }
            ProveedoresValoracionesForm.formKey = 'Contenidos.ProveedoresValoraciones';
            return ProveedoresValoracionesForm;
        }(Serenity.PrefixedContext));
        Contenidos.ProveedoresValoracionesForm = ProveedoresValoracionesForm;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesRow;
        (function (ProveedoresValoracionesRow) {
            ProveedoresValoracionesRow.idProperty = 'Id';
            ProveedoresValoracionesRow.localTextPrefix = 'Contenidos.ProveedoresValoraciones';
        })(ProveedoresValoracionesRow = Contenidos.ProveedoresValoracionesRow || (Contenidos.ProveedoresValoracionesRow = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesService;
        (function (ProveedoresValoracionesService) {
            ProveedoresValoracionesService.baseUrl = 'Contenidos/ProveedoresValoraciones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProveedoresValoracionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProveedoresValoracionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProveedoresValoracionesService = Contenidos.ProveedoresValoracionesService || (Contenidos.ProveedoresValoracionesService = {}));
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var EspecialTurnForm = /** @class */ (function (_super) {
            __extends(EspecialTurnForm, _super);
            function EspecialTurnForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EspecialTurnForm.init) {
                    EspecialTurnForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(EspecialTurnForm, [
                        'Fecha', w0,
                        'IdRecurso', w1,
                        'IdTurnosEspeciales', w1,
                        'Inicio', w1,
                        'Duracion', w2,
                        'Observaciones', w3
                    ]);
                }
                return _this;
            }
            EspecialTurnForm.formKey = 'Default.EspecialTurn';
            return EspecialTurnForm;
        }(Serenity.PrefixedContext));
        Default.EspecialTurnForm = EspecialTurnForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var HolidaysForm = /** @class */ (function (_super) {
            __extends(HolidaysForm, _super);
            function HolidaysForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HolidaysForm.init) {
                    HolidaysForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.RadioButtonEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(HolidaysForm, [
                        'Reason', w0,
                        'Type', w1,
                        'Day', w2
                    ]);
                }
                return _this;
            }
            HolidaysForm.formKey = 'Default.Holidays';
            return HolidaysForm;
        }(Serenity.PrefixedContext));
        Default.HolidaysForm = HolidaysForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var HolidaysRow;
        (function (HolidaysRow) {
            HolidaysRow.idProperty = 'Id';
            HolidaysRow.nameProperty = 'Reason';
            HolidaysRow.localTextPrefix = 'Default.Holidays';
        })(HolidaysRow = Default.HolidaysRow || (Default.HolidaysRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var HolidaysService;
        (function (HolidaysService) {
            HolidaysService.baseUrl = 'Default/Holidays';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'UpdateFromAPI'
            ].forEach(function (x) {
                HolidaysService[x] = function (r, s, o) {
                    return Q.serviceRequest(HolidaysService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(HolidaysService = Default.HolidaysService || (Default.HolidaysService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var NeedCommendForm = /** @class */ (function (_super) {
            __extends(NeedCommendForm, _super);
            function NeedCommendForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NeedCommendForm.init) {
                    NeedCommendForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    Q.initFormType(NeedCommendForm, [
                        'Observaciones', w0
                    ]);
                }
                return _this;
            }
            NeedCommendForm.formKey = 'Default.NeedCommend';
            return NeedCommendForm;
        }(Serenity.PrefixedContext));
        Default.NeedCommendForm = NeedCommendForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var RecursosBarriosRow;
        (function (RecursosBarriosRow) {
            RecursosBarriosRow.idProperty = 'RecursoId';
            RecursosBarriosRow.localTextPrefix = 'Default.RecursosBarrios';
        })(RecursosBarriosRow = Default.RecursosBarriosRow || (Default.RecursosBarriosRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasForm = /** @class */ (function (_super) {
            __extends(ReservasForm, _super);
            function ReservasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasForm.init) {
                    ReservasForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(ReservasForm, [
                        'Fecha', w0,
                        'IdVecino', w1,
                        'IdRecurso', w1,
                        'IdTipo', w1,
                        'IdTurnosEspeciales', w1,
                        'Inicio', w1,
                        'Duracion', w2,
                        'Turno', w3,
                        'Observaciones', w4,
                        'IdVecino2', w1
                    ]);
                }
                return _this;
            }
            ReservasForm.formKey = 'Default.Reservas';
            return ReservasForm;
        }(Serenity.PrefixedContext));
        Default.ReservasForm = ReservasForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecurrentesForm = /** @class */ (function (_super) {
            __extends(ReservasRecurrentesForm, _super);
            function ReservasRecurrentesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasRecurrentesForm.init) {
                    ReservasRecurrentesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TimeEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ReservasRecurrentesForm, [
                        'Observaciones', w0,
                        'Inicio', w1,
                        'Duracion', w2,
                        'Dias', w0,
                        'Lunes', w3,
                        'Martes', w3,
                        'Miercoles', w3,
                        'Jueves', w3,
                        'Viernes', w3,
                        'Sabado', w3,
                        'Domingo', w3,
                        'Feriados', w3
                    ]);
                }
                return _this;
            }
            ReservasRecurrentesForm.formKey = 'Default.ReservasRecurrentes';
            return ReservasRecurrentesForm;
        }(Serenity.PrefixedContext));
        Default.ReservasRecurrentesForm = ReservasRecurrentesForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecurrentesRow;
        (function (ReservasRecurrentesRow) {
            ReservasRecurrentesRow.idProperty = 'Id';
            ReservasRecurrentesRow.nameProperty = 'Dias';
            ReservasRecurrentesRow.localTextPrefix = 'Default.ReservasRecurrentes';
        })(ReservasRecurrentesRow = Default.ReservasRecurrentesRow || (Default.ReservasRecurrentesRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosForm = /** @class */ (function (_super) {
            __extends(ReservasRecursosForm, _super);
            function ReservasRecursosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasRecursosForm.init) {
                    ReservasRecursosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.HtmlContentEditor;
                    var w6 = Default.ReservasTiposGrid;
                    var w7 = Default.ReservasRecurrentesGrid;
                    var w8 = Default.ReservasTurnosEspecialesGrid;
                    var w9 = s.CheckLookupEditor;
                    var w10 = s.ImageUploadEditor;
                    Q.initFormType(ReservasRecursosForm, [
                        'Nombre', w0,
                        'AppHoldId', w1,
                        'Tipo', w2,
                        'Apertura', w2,
                        'Cierre', w2,
                        'Resolucion', w2,
                        'AmountToReserve', w1,
                        'AmountForDays', w1,
                        'NeedComment', w3,
                        'Desde', w1,
                        'Hasta', w1,
                        'Description', w4,
                        'Emails', w4,
                        'MailBody', w5,
                        'TypeList', w6,
                        'Dias', w0,
                        'Lunes', w3,
                        'Martes', w3,
                        'Miercoles', w3,
                        'Jueves', w3,
                        'Viernes', w3,
                        'Sabado', w3,
                        'Domingo', w3,
                        'Feriados', w3,
                        'BookingRecurringList', w7,
                        'SpecialTurnList', w8,
                        'NeigborhoodList', w9,
                        'Regulation', w10
                    ]);
                }
                return _this;
            }
            ReservasRecursosForm.formKey = 'Default.ReservasRecursos';
            return ReservasRecursosForm;
        }(Serenity.PrefixedContext));
        Default.ReservasRecursosForm = ReservasRecursosForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosRow;
        (function (ReservasRecursosRow) {
            ReservasRecursosRow.idProperty = 'Id';
            ReservasRecursosRow.nameProperty = 'Nombre';
            ReservasRecursosRow.localTextPrefix = 'Default.ReservasRecursos';
        })(ReservasRecursosRow = Default.ReservasRecursosRow || (Default.ReservasRecursosRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosService;
        (function (ReservasRecursosService) {
            ReservasRecursosService.baseUrl = 'Default/ReservasRecursos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'ImportFile',
                'List',
                'ListOfAllowedResources'
            ].forEach(function (x) {
                ReservasRecursosService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReservasRecursosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReservasRecursosService = Default.ReservasRecursosService || (Default.ReservasRecursosService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRow;
        (function (ReservasRow) {
            ReservasRow.idProperty = 'Id';
            ReservasRow.nameProperty = 'Observaciones';
            ReservasRow.localTextPrefix = 'Default.Reservas';
        })(ReservasRow = Default.ReservasRow || (Default.ReservasRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasService;
        (function (ReservasService) {
            ReservasService.baseUrl = 'Default/Reservas';
            [
                'Create',
                'Update',
                'ConfirmReservation',
                'Delete',
                'Retrieve',
                'List',
                'ImportFile',
                'renderBookingStatus',
                'bookingsTake',
                'SendRequest',
                'bookingCancel'
            ].forEach(function (x) {
                ReservasService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReservasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReservasService = Default.ReservasService || (Default.ReservasService = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposForm = /** @class */ (function (_super) {
            __extends(ReservasTiposForm, _super);
            function ReservasTiposForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasTiposForm.init) {
                    ReservasTiposForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TimeEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ReservasTiposForm, [
                        'Nombre', w0,
                        'Duracion', w1,
                        'RequiereVecino2', w2,
                        'Vigente', w2
                    ]);
                }
                return _this;
            }
            ReservasTiposForm.formKey = 'Default.ReservasTipos';
            return ReservasTiposForm;
        }(Serenity.PrefixedContext));
        Default.ReservasTiposForm = ReservasTiposForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposRow;
        (function (ReservasTiposRow) {
            ReservasTiposRow.idProperty = 'Id';
            ReservasTiposRow.nameProperty = 'Nombre';
            ReservasTiposRow.localTextPrefix = 'Default.ReservasTipos';
            ReservasTiposRow.lookupKey = 'Reservas.ReservasTipos';
            function getLookup() {
                return Q.getLookup('Reservas.ReservasTipos');
            }
            ReservasTiposRow.getLookup = getLookup;
        })(ReservasTiposRow = Default.ReservasTiposRow || (Default.ReservasTiposRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesForm = /** @class */ (function (_super) {
            __extends(ReservasTurnosEspecialesForm, _super);
            function ReservasTurnosEspecialesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReservasTurnosEspecialesForm.init) {
                    ReservasTurnosEspecialesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TimeEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ReservasTurnosEspecialesForm, [
                        'Nombre', w0,
                        'Inicio', w1,
                        'Duracion', w2,
                        'Dias', w0,
                        'Lunes', w3,
                        'Martes', w3,
                        'Miercoles', w3,
                        'Jueves', w3,
                        'Viernes', w3,
                        'Sabado', w3,
                        'Domingo', w3,
                        'Feriados', w3
                    ]);
                }
                return _this;
            }
            ReservasTurnosEspecialesForm.formKey = 'Default.ReservasTurnosEspeciales';
            return ReservasTurnosEspecialesForm;
        }(Serenity.PrefixedContext));
        Default.ReservasTurnosEspecialesForm = ReservasTurnosEspecialesForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesRow;
        (function (ReservasTurnosEspecialesRow) {
            ReservasTurnosEspecialesRow.idProperty = 'Id';
            ReservasTurnosEspecialesRow.nameProperty = 'Nombre';
            ReservasTurnosEspecialesRow.localTextPrefix = 'Default.ReservasTurnosEspeciales';
            ReservasTurnosEspecialesRow.lookupKey = 'Reservas.ReservasTurnosEspeciales';
            function getLookup() {
                return Q.getLookup('Reservas.ReservasTurnosEspeciales');
            }
            ReservasTurnosEspecialesRow.getLookup = getLookup;
        })(ReservasTurnosEspecialesRow = Default.ReservasTurnosEspecialesRow || (Default.ReservasTurnosEspecialesRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var SubbarriosForm = /** @class */ (function (_super) {
            __extends(SubbarriosForm, _super);
            function SubbarriosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SubbarriosForm.formKey = 'Default.Subbarrios';
            return SubbarriosForm;
        }(Serenity.PrefixedContext));
        Default.SubbarriosForm = SubbarriosForm;
        [,
            ['Nombre', function () { return Serenity.StringEditor; }],
            ['BarrioId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SubbarriosForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var SubbarriosRecursosRow;
        (function (SubbarriosRecursosRow) {
            SubbarriosRecursosRow.idProperty = 'SubBarrioId';
            SubbarriosRecursosRow.localTextPrefix = 'Default.SubbarriosRecursos';
        })(SubbarriosRecursosRow = Default.SubbarriosRecursosRow || (Default.SubbarriosRecursosRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var SubbarriosRow;
        (function (SubbarriosRow) {
            SubbarriosRow.idProperty = 'Id';
            SubbarriosRow.nameProperty = 'Nombre';
            SubbarriosRow.localTextPrefix = 'Default.Subbarrios';
            var Fields;
            (function (Fields) {
            })(Fields = SubbarriosRow.Fields || (SubbarriosRow.Fields = {}));
            [
                'Id',
                'Nombre',
                'BarrioId',
                'BarrioNombre',
                'BarrioLogo',
                'BarrioUrl',
                'BarrioTelefonOs',
                'BarrioDireccion',
                'BarrioIsActive',
                'BarrioLargeDisplayName',
                'BarrioShortDisplayName',
                'BarrioMail',
                'BarrioPasswordMail',
                'BarrioCantDiasReservables'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SubbarriosRow = Default.SubbarriosRow || (Default.SubbarriosRow = {}));
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var TwoNeighborsForm = /** @class */ (function (_super) {
            __extends(TwoNeighborsForm, _super);
            function TwoNeighborsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TwoNeighborsForm.init) {
                    TwoNeighborsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(TwoNeighborsForm, [
                        'IdVecino2', w0
                    ]);
                }
                return _this;
            }
            TwoNeighborsForm.formKey = 'Default.TwoNeighbors';
            return TwoNeighborsForm;
        }(Serenity.PrefixedContext));
        Default.TwoNeighborsForm = TwoNeighborsForm;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var TypeHolidays;
        (function (TypeHolidays) {
            TypeHolidays[TypeHolidays["inamovible"] = 0] = "inamovible";
            TypeHolidays[TypeHolidays["puente"] = 1] = "puente";
            TypeHolidays[TypeHolidays["trasladable"] = 2] = "trasladable";
        })(TypeHolidays = Default.TypeHolidays || (Default.TypeHolidays = {}));
        Serenity.Decorators.registerEnumType(TypeHolidays, 'Barrios.Default.TypeHolidays', 'Booking.TypeHolidays');
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Unit', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Modules;
    (function (Modules) {
        var Common;
        (function (Common) {
            var Utils;
            (function (Utils) {
                var GenericComboBoxRow;
                (function (GenericComboBoxRow) {
                    GenericComboBoxRow.idProperty = 'Id';
                    GenericComboBoxRow.nameProperty = 'Name';
                    GenericComboBoxRow.localTextPrefix = 'Modules.Common.Utils.GenericComboBox';
                })(GenericComboBoxRow = Utils.GenericComboBoxRow || (Utils.GenericComboBoxRow = {}));
            })(Utils = Common.Utils || (Common.Utils = {}));
        })(Common = Modules.Common || (Modules.Common = {}));
    })(Modules = Barrios.Modules || (Barrios.Modules = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosActividadesForm = /** @class */ (function (_super) {
            __extends(VecinosActividadesForm, _super);
            function VecinosActividadesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VecinosActividadesForm.init) {
                    VecinosActividadesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(VecinosActividadesForm, [
                        'Fecha', w0,
                        'Actividad', w1,
                        'ActividadDetalles', w1
                    ]);
                }
                return _this;
            }
            VecinosActividadesForm.formKey = 'Perfil.VecinosActividades';
            return VecinosActividadesForm;
        }(Serenity.PrefixedContext));
        Perfil.VecinosActividadesForm = VecinosActividadesForm;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosActividadesRow;
        (function (VecinosActividadesRow) {
            VecinosActividadesRow.idProperty = 'Id';
            VecinosActividadesRow.nameProperty = 'Actividad';
            VecinosActividadesRow.localTextPrefix = 'Perfil.VecinosActividades';
        })(VecinosActividadesRow = Perfil.VecinosActividadesRow || (Perfil.VecinosActividadesRow = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosActividadesService;
        (function (VecinosActividadesService) {
            VecinosActividadesService.baseUrl = 'Perfil/VecinosActividades';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VecinosActividadesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VecinosActividadesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VecinosActividadesService = Perfil.VecinosActividadesService || (Perfil.VecinosActividadesService = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosConcurrentesForm = /** @class */ (function (_super) {
            __extends(VecinosEventosConcurrentesForm, _super);
            function VecinosEventosConcurrentesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VecinosEventosConcurrentesForm.init) {
                    VecinosEventosConcurrentesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VecinosEventosConcurrentesForm, [
                        'Nombre', w0
                    ]);
                }
                return _this;
            }
            VecinosEventosConcurrentesForm.formKey = 'Perfil.VecinosEventosConcurrentes';
            return VecinosEventosConcurrentesForm;
        }(Serenity.PrefixedContext));
        Perfil.VecinosEventosConcurrentesForm = VecinosEventosConcurrentesForm;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosConcurrentesRow;
        (function (VecinosEventosConcurrentesRow) {
            VecinosEventosConcurrentesRow.idProperty = 'Id';
            VecinosEventosConcurrentesRow.nameProperty = 'Nombre';
            VecinosEventosConcurrentesRow.localTextPrefix = 'Perfil.VecinosEventosConcurrentes';
        })(VecinosEventosConcurrentesRow = Perfil.VecinosEventosConcurrentesRow || (Perfil.VecinosEventosConcurrentesRow = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosConcurrentesService;
        (function (VecinosEventosConcurrentesService) {
            VecinosEventosConcurrentesService.baseUrl = 'Perfil/VecinosEventosConcurrentes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VecinosEventosConcurrentesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VecinosEventosConcurrentesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VecinosEventosConcurrentesService = Perfil.VecinosEventosConcurrentesService || (Perfil.VecinosEventosConcurrentesService = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosForm = /** @class */ (function (_super) {
            __extends(VecinosEventosForm, _super);
            function VecinosEventosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VecinosEventosForm.init) {
                    VecinosEventosForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateTimeEditor;
                    var w1 = s.StringEditor;
                    var w2 = Perfil.VecinosEventosConcurrentesGrid;
                    Q.initFormType(VecinosEventosForm, [
                        'Fecha', w0,
                        'Nombre', w1,
                        'Lugar', w1,
                        'ConcurrentesList', w2
                    ]);
                }
                return _this;
            }
            VecinosEventosForm.formKey = 'Perfil.VecinosEventos';
            return VecinosEventosForm;
        }(Serenity.PrefixedContext));
        Perfil.VecinosEventosForm = VecinosEventosForm;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosRow;
        (function (VecinosEventosRow) {
            VecinosEventosRow.idProperty = 'Id';
            VecinosEventosRow.nameProperty = 'Nombre';
            VecinosEventosRow.localTextPrefix = 'Perfil.VecinosEventos';
        })(VecinosEventosRow = Perfil.VecinosEventosRow || (Perfil.VecinosEventosRow = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosService;
        (function (VecinosEventosService) {
            VecinosEventosService.baseUrl = 'Perfil/VecinosEventos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VecinosEventosService[x] = function (r, s, o) {
                    return Q.serviceRequest(VecinosEventosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VecinosEventosService = Perfil.VecinosEventosService || (Perfil.VecinosEventosService = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosMascotasForm = /** @class */ (function (_super) {
            __extends(VecinosMascotasForm, _super);
            function VecinosMascotasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VecinosMascotasForm.init) {
                    VecinosMascotasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.ImageUploadEditor;
                    Q.initFormType(VecinosMascotasForm, [
                        'Nombre', w0,
                        'IdTipo', w1,
                        'Raza', w0,
                        'Foto', w2,
                        'Vacunas', w2
                    ]);
                }
                return _this;
            }
            VecinosMascotasForm.formKey = 'Perfil.VecinosMascotas';
            return VecinosMascotasForm;
        }(Serenity.PrefixedContext));
        Perfil.VecinosMascotasForm = VecinosMascotasForm;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosMascotasRow;
        (function (VecinosMascotasRow) {
            VecinosMascotasRow.idProperty = 'Id';
            VecinosMascotasRow.nameProperty = 'Nombre';
            VecinosMascotasRow.localTextPrefix = 'Perfil.VecinosMascotas';
        })(VecinosMascotasRow = Perfil.VecinosMascotasRow || (Perfil.VecinosMascotasRow = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosMascotasService;
        (function (VecinosMascotasService) {
            VecinosMascotasService.baseUrl = 'Perfil/VecinosMascotas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ImportFile'
            ].forEach(function (x) {
                VecinosMascotasService[x] = function (r, s, o) {
                    return Q.serviceRequest(VecinosMascotasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VecinosMascotasService = Perfil.VecinosMascotasService || (Perfil.VecinosMascotasService = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosVisitantesFrecuentesForm = /** @class */ (function (_super) {
            __extends(VecinosVisitantesFrecuentesForm, _super);
            function VecinosVisitantesFrecuentesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VecinosVisitantesFrecuentesForm.init) {
                    VecinosVisitantesFrecuentesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VecinosVisitantesFrecuentesForm, [
                        'Nombre', w0,
                        'Dni', w0,
                        'Vehiculo', w0,
                        'Tipo', w0
                    ]);
                }
                return _this;
            }
            VecinosVisitantesFrecuentesForm.formKey = 'Perfil.VecinosVisitantesFrecuentes';
            return VecinosVisitantesFrecuentesForm;
        }(Serenity.PrefixedContext));
        Perfil.VecinosVisitantesFrecuentesForm = VecinosVisitantesFrecuentesForm;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosVisitantesFrecuentesRow;
        (function (VecinosVisitantesFrecuentesRow) {
            VecinosVisitantesFrecuentesRow.idProperty = 'Id';
            VecinosVisitantesFrecuentesRow.nameProperty = 'Nombre';
            VecinosVisitantesFrecuentesRow.localTextPrefix = 'Perfil.VecinosVisitantesFrecuentes';
        })(VecinosVisitantesFrecuentesRow = Perfil.VecinosVisitantesFrecuentesRow || (Perfil.VecinosVisitantesFrecuentesRow = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosVisitantesFrecuentesService;
        (function (VecinosVisitantesFrecuentesService) {
            VecinosVisitantesFrecuentesService.baseUrl = 'Perfil/VecinosVisitantesFrecuentes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ImportFile'
            ].forEach(function (x) {
                VecinosVisitantesFrecuentesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VecinosVisitantesFrecuentesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VecinosVisitantesFrecuentesService = Perfil.VecinosVisitantesFrecuentesService || (Perfil.VecinosVisitantesFrecuentesService = {}));
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosForm = /** @class */ (function (_super) {
            __extends(SubbarriosForm, _super);
            function SubbarriosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SubbarriosForm.init) {
                    SubbarriosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SubbarriosForm, [
                        'Nombre', w0
                    ]);
                }
                return _this;
            }
            SubbarriosForm.formKey = 'Settings.Subbarrios';
            return SubbarriosForm;
        }(Serenity.PrefixedContext));
        Settings.SubbarriosForm = SubbarriosForm;
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosRow;
        (function (SubbarriosRow) {
            SubbarriosRow.idProperty = 'Id';
            SubbarriosRow.nameProperty = 'Nombre';
            SubbarriosRow.localTextPrefix = 'Settings.Subbarrios';
            SubbarriosRow.lookupKey = 'Settings.Subbarrios';
            function getLookup() {
                return Q.getLookup('Settings.Subbarrios');
            }
            SubbarriosRow.getLookup = getLookup;
        })(SubbarriosRow = Settings.SubbarriosRow || (Settings.SubbarriosRow = {}));
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosService;
        (function (SubbarriosService) {
            SubbarriosService.baseUrl = 'Settings/Subbarrios';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SubbarriosService[x] = function (r, s, o) {
                    return Q.serviceRequest(SubbarriosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SubbarriosService = Settings.SubbarriosService || (Settings.SubbarriosService = {}));
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios_1) {
    var Texts;
    (function (Texts) {
        Barrios['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Barrios: { CantDiasReservables: 1, Direccion: 1, Emails: 1, Id: 1, IsActive: 1, LargeDisplayName: 1, Logo: 1, Mail: 1, Nombre: 1, PasswordMail: 1, ShortDisplayName: 1, TelefonOs: 1, Url: 1, UseSubBarrios: 1, VerUserEnReservas: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Notes: { CreateDate: 1, CreateUserId: 1, CreateUserUsername: 1, DestinationUserId: 1, DestinationUserUsername: 1, Id: 1, Message: 1, ShowUser: 1, UpdateDate: 1, UpdatetionUserId: 1, UpdatetionUserUsername: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { AppHoldId: 1, BarrioId: 1, ClientIdList: 1, DisplayName: 1, Email: 1, Email_Others: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, LimitDate: 1, Note: 1, Owner: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Phone: 1, Roles: 1, Source: 1, Units: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1, subBarrioId: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 }, UsersBarrios: { BarrioId: 1, BarrioNombre: 1, LimitDate: 1, Note: 1, Owner: 1, Units: 1, UserId: 1, UserUsername: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Contenidos: { Avisos: { BarrioId: 1, Caducidad: 1, CategoryName: 1, DateInsert: 1, DateUpdate: 1, Descripcion: 1, Id: 1, IdCategoria: 1, Imagen: 1, Nombre: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, Categorias: { DateInsert: 1, DateUpdate: 1, Id: 1, Mostrar: 1, Nombre: 1, Type: 1, TypeName: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, Comisiones: { BarrioId: 1, BarrioNombre: 1, DateInsert: 1, DateUpdate: 1, Habilitada: 1, Id: 1, Mails: 1, MembersList: 1, Nombre: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1 }, ComisionesIntegrantes: { DateInsert: 1, DateUpdate: 1, Id: 1, IdComision: 1, Nombre: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1 }, Encuestas: { BarrioId: 1, CategoryName: 1, DateInsert: 1, DateUpdate: 1, Descripcion: 1, FechaAlta: 1, FechaBaja: 1, Id: 1, IdCategoria: 1, Liked: 1, Nombre: 1, Rating: 1, RatingCount: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, ValoracionId: 1, Vigente: 1 }, EncuestasValoraciones: { Comentario: 1, Fecha: 1, Id: 1, IdEncuesta: 1, IdEncuestaNombre: 1, Userid: 1, UseridUsername: 1, Valoracion: 1 }, LineaTiempo: { Aprobado: 1, ArchivoFilename: 1, BarrioId: 1, CategoryName: 1, ContenidoTexto: 1, Id: 1, IdCategoria: 1, Mostrar: 1, Nombre: 1, PeriodoFecha: 1, Userid: 1, UseridUsername: 1 }, Proveedores: { BarrioId: 1, CategoryName: 1, DateInsert: 1, DateUpdate: 1, Domicilio: 1, Email: 1, FechaAlta: 1, FechaBaja: 1, Id: 1, IdCategoria: 1, Liked: 1, Nombre: 1, Notas: 1, Rating: 1, RatingCount: 1, Telefonos: 1, UserInsert: 1, UserInsertUsername: 1, UserUpdate: 1, UserUpdateUsername: 1, Vigente: 1 }, ProveedoresValoraciones: { Fecha: 1, Id: 1, IdProveedor: 1, IdProveedorNombre: 1, Userid: 1, UseridUsername: 1, Valoracion: 1 } }, Default: { Holidays: { ApiId: 1, Day: 1, Id: 1, Reason: 1, Type: 1 }, RecursosBarrios: { BarrioId: 1, BarrioNombre: 1, RecursoId: 1 }, Reservas: { BarrioId: 1, Confirmada: 1, DateInsert: 1, DateUpdate: 1, Dias: 1, Duracion: 1, Estado: 1, Estado_Turno: 1, Fecha: 1, FechaFin: 1, Finalizado: 1, Hora: 1, Id: 1, IdRecurso: 1, IdRecursoNombre: 1, IdResultado: 1, IdTipo: 1, IdTurnosEspeciales: 1, IdVecino: 1, IdVecino2: 1, IdVecinoUnidad: 1, IdVecinoUnidadExtra: 1, IdVecinoUsername: 1, IdVecinoUsername2: 1, Inicio: 1, Observaciones: 1, Required_Vecino: 1, Reservable: 1, SendMail: 1, Tipo: 1, TipoReservaHecha: 1, Turno: 1, UserInsert: 1, UserUpdate: 1, Valido: 1 }, ReservasRecurrentes: { Dias: 1, Domingo: 1, Duracion: 1, Feriados: 1, Id: 1, Inicio: 1, Jueves: 1, Lunes: 1, Martes: 1, Miercoles: 1, Observaciones: 1, ResourceId: 1, Sabado: 1, Viernes: 1 }, ReservasRecursos: { AmountForDays: 1, AmountToReserve: 1, Apertura: 1, AppHoldId: 1, BarrioId: 1, BookingRecurringList: 1, Cierre: 1, ClientIdList: 1, Description: 1, Desde: 1, Dias: 1, Domingo: 1, Emails: 1, Feriados: 1, Hasta: 1, Id: 1, Jueves: 1, Lunes: 1, MailBody: 1, Martes: 1, Miercoles: 1, NeedComment: 1, NeigborhoodList: 1, Nombre: 1, Regulation: 1, Resolucion: 1, Sabado: 1, SpecialTurnList: 1, Tipo: 1, TypeList: 1, Viernes: 1 }, ReservasTipos: { Duracion: 1, Id: 1, IdRecurso: 1, Nombre: 1, RequiereVecino2: 1, Vigente: 1 }, ReservasTurnosEspeciales: { Dias: 1, Domingo: 1, Duracion: 1, Feriados: 1, Id: 1, IdRecurso: 1, Inicio: 1, Jueves: 1, Lunes: 1, Martes: 1, Miercoles: 1, Nombre: 1, Sabado: 1, Viernes: 1 }, SubbarriosRecursos: { RecursoId: 1, SubBarrioId: 1, SubBarrioNombre: 1 } }, Modules: { Common: { Utils: { GenericComboBox: { Id: 1, Name: 1 } } } }, Perfil: { VecinosActividades: { Actividad: 1, ActividadDetalles: 1, Fecha: 1, Id: 1, Ip: 1, Userid: 1 }, VecinosEventos: { BarrioId: 1, ConcurrentesList: 1, Fecha: 1, Id: 1, Lugar: 1, Nombre: 1, Userid: 1, UseridUsername: 1 }, VecinosEventosConcurrentes: { Id: 1, IdEvento: 1, Nombre: 1, Userid: 1 }, VecinosMascotas: { BarrioId: 1, Foto: 1, Id: 1, IdTipo: 1, Nombre: 1, Raza: 1, Userid: 1, UseridUnit: 1, UseridUsername: 1, Vacunas: 1 }, VecinosVisitantesFrecuentes: { BarrioId: 1, Dni: 1, Id: 1, Nombre: 1, Tipo: 1, Userid: 1, UseridUnit: 1, UseridUsername: 1, Vehiculo: 1 } }, Settings: { Subbarrios: { BarrioId: 1, Id: 1, Nombre: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, Locked: { LackPermissions: 1, PageTitle: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Barrios_1.Texts || (Barrios_1.Texts = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosDialog = /** @class */ (function (_super) {
            __extends(BarriosDialog, _super);
            function BarriosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.BarriosForm(_this.idPrefix);
                return _this;
            }
            BarriosDialog.prototype.getFormKey = function () { return Administration.BarriosForm.formKey; };
            BarriosDialog.prototype.getIdProperty = function () { return Administration.BarriosRow.idProperty; };
            BarriosDialog.prototype.getLocalTextPrefix = function () { return Administration.BarriosRow.localTextPrefix; };
            BarriosDialog.prototype.getNameProperty = function () { return Administration.BarriosRow.nameProperty; };
            BarriosDialog.prototype.getService = function () { return Administration.BarriosService.baseUrl; };
            BarriosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BarriosDialog);
            return BarriosDialog;
        }(Serenity.EntityDialog));
        Administration.BarriosDialog = BarriosDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var BarriosGrid = /** @class */ (function (_super) {
            __extends(BarriosGrid, _super);
            function BarriosGrid(container) {
                return _super.call(this, container) || this;
            }
            BarriosGrid.prototype.getColumnsKey = function () { return 'Administration.Barrios'; };
            BarriosGrid.prototype.getDialogType = function () { return Administration.BarriosDialog; };
            BarriosGrid.prototype.getIdProperty = function () { return Administration.BarriosRow.idProperty; };
            BarriosGrid.prototype.getLocalTextPrefix = function () { return Administration.BarriosRow.localTextPrefix; };
            BarriosGrid.prototype.getService = function () { return Administration.BarriosService.baseUrl; };
            BarriosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BarriosGrid);
            return BarriosGrid;
        }(Serenity.EntityGrid));
        Administration.BarriosGrid = BarriosGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var NotesDialog = /** @class */ (function (_super) {
            __extends(NotesDialog, _super);
            function NotesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.NotesForm(_this.idPrefix);
                return _this;
            }
            NotesDialog.prototype.getFormKey = function () { return Administration.NotesForm.formKey; };
            NotesDialog.prototype.getIdProperty = function () { return Administration.NotesRow.idProperty; };
            NotesDialog.prototype.getLocalTextPrefix = function () { return Administration.NotesRow.localTextPrefix; };
            NotesDialog.prototype.getNameProperty = function () { return Administration.NotesRow.nameProperty; };
            NotesDialog.prototype.getService = function () { return Administration.NotesService.baseUrl; };
            NotesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NotesDialog);
            return NotesDialog;
        }(Serenity.EntityDialog));
        Administration.NotesDialog = NotesDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var NotesGrid = /** @class */ (function (_super) {
            __extends(NotesGrid, _super);
            function NotesGrid(container) {
                return _super.call(this, container) || this;
            }
            NotesGrid.prototype.getColumnsKey = function () { return 'Administration.Notes'; };
            NotesGrid.prototype.getDialogType = function () { return Administration.NotesDialog; };
            NotesGrid.prototype.getIdProperty = function () { return Administration.NotesRow.idProperty; };
            NotesGrid.prototype.getLocalTextPrefix = function () { return Administration.NotesRow.localTextPrefix; };
            NotesGrid.prototype.getService = function () { return Administration.NotesService.baseUrl; };
            NotesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NotesGrid);
            return NotesGrid;
        }(Serenity.EntityGrid));
        Administration.NotesGrid = NotesGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
                //this.form.ClientIdList.getGridField().toggle( !Authorization.hasPermission('Administration:Barrios'));
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container, neighbordhoobId) {
                var _this = _super.call(this, container) || this;
                _this.neighbordhoobId = null;
                _this.neighbordhoobId = neighbordhoobId;
                _this.element.append("<div  class='description' > Leyenda: <div class='statusRed'>Sin Permisos</div>" +
                    "<div class='statusGreen' > Administradores </div>" +
                    "<div class='statusBlue'>Otros</div></div>");
                return _this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: "Importar usuarios",
                    cssClass: "import-button",
                    onClick: function () {
                        var dialog = new Barrios.Common.ImportFileDialog(function (fileValue) {
                            Administration.UserService.ImportFile({ FileName: fileValue }, function (response) {
                                Q.confirm(response, function () { });
                                _this.refresh();
                            });
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Roles == "" || item.Roles == null)
                    klass = "statusRed";
                else if (item.Roles.search("Administrador") > -1)
                    klass = "statusGreen";
                else
                    klass = "statusBlue";
                return Q.trimToNull(klass);
            };
            UserGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                if (this.neighbordhoobId != null) {
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [["BarrioId" /* BarrioId */], '=', this.neighbordhoobId]);
                }
                return true;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Barrios.Authorization || (Barrios.Authorization = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Barrios.Administration || (Barrios.Administration = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Barrios.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Barrios.LanguageList || (Barrios.LanguageList = {}));
})(Barrios || (Barrios = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Barrios;
(function (Barrios) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Barrios');
        Serenity.EntityDialog.defaultLanguageList = Barrios.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Barrios.ScriptInitialization || (Barrios.ScriptInitialization = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Barrios.BasicProgressDialog = BasicProgressDialog;
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Barrios.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
/// <reference path="../../../Modules/Common/Helpers/BulkServiceAction.ts"/>
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var BulkactionInAnyGrid = /** @class */ (function (_super) {
            __extends(BulkactionInAnyGrid, _super);
            function BulkactionInAnyGrid() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.IsShared = false;
                return _this;
                /* protected executeForBatch(batch) {
                     if (this.IsShared) {
                         TaskService.BulkAction(
                             {
                                 IdList: batch.map(x => (x)),
                                 TableName: this.TableName
                             },
                             response => {
                                 this.set_successCount(this.get_successCount() + response.deleted),
                                     this.set_errorCount(this.get_errorCount() + response.errorcount);
                             },
                             {
                                 blockUI: false,
                                 onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                                 onCleanup: () => this.serviceCallCleanup()
                             });
                     } else {
                         TaskService.BulkActioninClientDB(
                             {
                                 IdList: batch.map(x => (x)),
                                 TableName: this.TableName
                             },
                             response => {
                                 this.set_successCount(this.get_successCount() + response.deleted),
                                     this.set_errorCount(this.get_errorCount() + response.errorcount);
                             },
                             {
                                 blockUI: false,
                                 onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                                 onCleanup: () => this.serviceCallCleanup()
                             });
                     }
                 }*/
            }
            BulkactionInAnyGrid.prototype.getParallelRequests = function () {
                return 2;
            };
            BulkactionInAnyGrid.prototype.getBatchSize = function () {
                return 100;
            };
            return BulkactionInAnyGrid;
        }(Common.BulkServiceAction));
        Common.BulkactionInAnyGrid = BulkactionInAnyGrid;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var DetailGridBase = /** @class */ (function (_super) {
        __extends(DetailGridBase, _super);
        function DetailGridBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetailGridBase.prototype.onMasterIdChanged = function (masterItemID) { };
        DetailGridBase.prototype.onMasterStringIdChanged = function (masterStringID) { };
        Object.defineProperty(DetailGridBase.prototype, "masterItemID", {
            get: function () {
                return this._masterItemID;
            },
            set: function (value) {
                console.log(value);
                if (this._masterItemID !== value) {
                    this._masterItemID = value;
                    this.onMasterIdChanged(this._masterItemID);
                    this.setEquality(this.getMasterFieldName(), value);
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DetailGridBase.prototype, "masterStringID", {
            get: function () {
                return this._masterStringID;
            },
            set: function (value) {
                if (this._masterStringID !== value) {
                    this._masterStringID = value;
                    this.onMasterStringIdChanged(this._masterStringID);
                    this.setEquality(this.getMasterFieldName(), value);
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        DetailGridBase.prototype.getMasterFieldName = function () {
            return "";
        };
        //protected getSlickOptions(): Slick.GridOptions {
        //    var opt = super.getSlickOptions();
        //    opt.rowHeight = 28;
        //    return opt;
        //}
        DetailGridBase.prototype.getGridCanLoad = function () {
            return !isNaN(this.masterItemID) || this.masterStringID !== undefined;
        };
        return DetailGridBase;
    }(Serenity.EntityGrid));
    Barrios.DetailGridBase = DetailGridBase;
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Barrios.DialogUtils || (Barrios.DialogUtils = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var MasterGridBase = /** @class */ (function (_super) {
        __extends(MasterGridBase, _super);
        function MasterGridBase(container, options) {
            var _this = _super.call(this, container, options ||
                {
                    selectionMode: 'single',
                    enableRowSelection: true
                }) || this;
            _this.toolbar.element.attr('style', 'border-bottom: 1px solid #e7e7e7;margin-bottom: 4px;');
            _this.element.find('.title-text').prepend($("<i class=\"" + _this.getGridIconClass() + "\"></i><span> </span>"));
            return _this;
        }
        MasterGridBase.prototype.isMultiSelectEnabled = function () {
            return (this.options.enableRowSelection && this.options.selectionMode === 'multiple');
        };
        MasterGridBase.prototype.getGridIconClass = function () {
            return 'fa icon-screen-desktop';
        };
        MasterGridBase.prototype.createToolbarExtensions = function () {
            _super.prototype.createToolbarExtensions.call(this);
            if (this.isMultiSelectEnabled()) {
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            }
        };
        MasterGridBase.prototype.getColumns = function () {
            var _this = this;
            var columns = _super.prototype.getColumns.call(this);
            if (this.isMultiSelectEnabled()) {
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
            }
            return columns;
        };
        MasterGridBase.prototype.resetCheckedAndRefresh = function () {
            if (this.isMultiSelectEnabled() && this.rowSelection != null) {
                this.rowSelection.resetCheckedAndRefresh();
            }
        };
        /*  protected getPersistanceFlags(): Serenity.GridPersistanceFlags {
              return {
                  columnVisibility: true,
                  sortColumns: true,
                  filterItems: false,
                  quickFilters: false,
                  quickFilterText: false,
                  quickSearch: false,
                  includeDeleted: true,
                  columnWidths: false // dont persist column widths;
              }
          }*/
        MasterGridBase.prototype.getSelectedKeys = function () {
            if (this.isMultiSelectEnabled() && this.rowSelection != null) {
                return this.rowSelection.getSelectedKeys();
            }
            return [];
        };
        MasterGridBase.prototype.getSelectedItems = function () {
            var _this = this;
            var selectedKeys = this.getSelectedKeys();
            if (selectedKeys != null && selectedKeys.length > 0) {
                return selectedKeys.map(function (x) { return _this.getView().getItemById(x); });
            }
            return [];
        };
        MasterGridBase.prototype.getSelectedItem = function () {
            var items = this.getSelectedItems();
            if (items != null && items.length > 0) {
                return items[0];
            }
            return null;
        };
        MasterGridBase.prototype.getMasterGridRowType = function () {
            return null;
        };
        MasterGridBase.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.enableCellNavigation = true;
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            return opt;
        };
        MasterGridBase.prototype.createSlickGrid = function () {
            var _this = this;
            this.grid = _super.prototype.createSlickGrid.call(this);
            if (this.options.enableRowSelection) {
                this.grid.setSelectionModel(new Slick.RowSelectionModel());
            }
            this.grid.onSelectedRowsChanged.subscribe(function (p1, selecion) {
                if (_this.options.enableRowSelection) {
                    if (_this.isMultiSelectEnabled() && _this.rowSelection != null) {
                        var selectedKeys = _this.getSelectedKeys();
                        if (_this.onItemsSelected && selectedKeys != null && selectedKeys.length > 0) {
                            _this.onItemsSelected(_this.getSelectedItems());
                        }
                    }
                    else if (_this.onItemSelected && selecion.rows != null && selecion.rows.length > 0) {
                        _this.onItemSelected(_this.getView().getItemById(selecion.rows[0]));
                    }
                }
            });
            return this.grid;
        };
        MasterGridBase.prototype.onClick = function (e, row, cell) {
            _super.prototype.onClick.call(this, e, row, cell);
            var item = this.itemAt(row);
            if (this.options.enableRowSelection && this.onItemClicked) {
                this.onItemClicked(item);
            }
        };
        MasterGridBase.prototype.destroy = function () {
            // clear to avoid memory holes
            this.onItemClicked = null;
            this.onItemSelected = null;
            this.onItemsSelected = null;
            _super.prototype.destroy.call(this);
        };
        MasterGridBase.prototype.getButtons = function () {
            var _this = this;
            var buttons = _super.prototype.getButtons.call(this);
            buttons.push({
                title: 'Delete',
                cssClass: 'delete-button',
                onClick: function () {
                    if (!_this.onViewSubmit()) {
                        return;
                    }
                    if (Barrios.Authorization.hasPermission(_this.options.bulkdeletePermissionKey)) {
                        var action = new Barrios.Common.BulkactionInAnyGrid();
                        action.TableName = _this.options.TableName;
                        action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                        action.execute(_this.rowSelection.getSelectedKeys());
                    }
                    else
                        Q.alert(Q.text('Site.ErrorMessage.AuthorizationFailure'));
                }
            });
            return buttons;
        };
        return MasterGridBase;
    }(Serenity.EntityGrid));
    Barrios.MasterGridBase = MasterGridBase;
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Barrios.StaticTextBlock = StaticTextBlock;
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ImportFileDialog = /** @class */ (function (_super) {
            __extends(ImportFileDialog, _super);
            function ImportFileDialog(sendRequest) {
                var _this = _super.call(this) || this;
                _this.methodRequest = sendRequest;
                _this.form = new Common.ImportFileForm(_this.idPrefix);
                $('.ui-dialog-buttonset button').removeClass();
                $('.ui-dialog-buttonset button').addClass('btn btn-primary');
                return _this;
            }
            ImportFileDialog.prototype.getFormKey = function () { return Common.ImportFileForm.formKey; };
            ImportFileDialog.prototype.getDialogTitle = function () {
                return "Importar archivo CSV";
            };
            ImportFileDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            console.log(_this.form.FileName);
                            _this.methodRequest(_this.form.FileName.value.Filename);
                        }
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ImportFileDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportFileDialog);
            return ImportFileDialog;
        }(Serenity.PropertyDialog));
        Common.ImportFileDialog = ImportFileDialog;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Barrios.Common || (Barrios.Common = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosDialog = /** @class */ (function (_super) {
            __extends(AvisosDialog, _super);
            function AvisosDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Contenidos.AvisosForm(_this.idPrefix);
                Contenidos.CategoriasDialog.typeCategory = 0;
                return _this;
            }
            AvisosDialog.prototype.getFormKey = function () { return Contenidos.AvisosForm.formKey; };
            AvisosDialog.prototype.getIdProperty = function () { return Contenidos.AvisosRow.idProperty; };
            AvisosDialog.prototype.getLocalTextPrefix = function () { return Contenidos.AvisosRow.localTextPrefix; };
            AvisosDialog.prototype.getNameProperty = function () { return Contenidos.AvisosRow.nameProperty; };
            AvisosDialog.prototype.getService = function () { return Contenidos.AvisosService.baseUrl; };
            AvisosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvisosDialog);
            return AvisosDialog;
        }(Serenity.EntityDialog));
        Contenidos.AvisosDialog = AvisosDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var AvisosGrid = /** @class */ (function (_super) {
            __extends(AvisosGrid, _super);
            function AvisosGrid(container) {
                return _super.call(this, container) || this;
            }
            AvisosGrid.prototype.getColumnsKey = function () { return 'Contenidos.Avisos'; };
            AvisosGrid.prototype.getDialogType = function () { return Contenidos.AvisosDialog; };
            AvisosGrid.prototype.getIdProperty = function () { return Contenidos.AvisosRow.idProperty; };
            AvisosGrid.prototype.getLocalTextPrefix = function () { return Contenidos.AvisosRow.localTextPrefix; };
            AvisosGrid.prototype.getService = function () { return Contenidos.AvisosService.baseUrl; };
            AvisosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvisosGrid);
            return AvisosGrid;
        }(Serenity.EntityGrid));
        Contenidos.AvisosGrid = AvisosGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasDialog = /** @class */ (function (_super) {
            __extends(CategoriasDialog, _super);
            function CategoriasDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Contenidos.CategoriasForm(_this.idPrefix);
                console.log("Constructor Category");
                console.log(CategoriasDialog_1.typeCategory);
                return _this;
            }
            CategoriasDialog_1 = CategoriasDialog;
            CategoriasDialog.prototype.getFormKey = function () { return Contenidos.CategoriasForm.formKey; };
            CategoriasDialog.prototype.getIdProperty = function () { return Contenidos.CategoriasRow.idProperty; };
            CategoriasDialog.prototype.getLocalTextPrefix = function () { return Contenidos.CategoriasRow.localTextPrefix; };
            CategoriasDialog.prototype.getNameProperty = function () { return Contenidos.CategoriasRow.nameProperty; };
            CategoriasDialog.prototype.getService = function () { return Contenidos.CategoriasService.baseUrl; };
            CategoriasDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                if (CategoriasDialog_1.typeCategory != null)
                    entity.Type = CategoriasDialog_1.typeCategory;
            };
            CategoriasDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (CategoriasDialog_1.typeCategory != null) {
                    this.form.Type.set_readOnly(true);
                }
            };
            var CategoriasDialog_1;
            CategoriasDialog = CategoriasDialog_1 = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriasDialog);
            return CategoriasDialog;
        }(Serenity.EntityDialog));
        Contenidos.CategoriasDialog = CategoriasDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var CategoriasGrid = /** @class */ (function (_super) {
            __extends(CategoriasGrid, _super);
            function CategoriasGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriasGrid.prototype.getColumnsKey = function () { return 'Contenidos.Categorias'; };
            CategoriasGrid.prototype.getDialogType = function () { return Contenidos.CategoriasDialog; };
            CategoriasGrid.prototype.getIdProperty = function () { return Contenidos.CategoriasRow.idProperty; };
            CategoriasGrid.prototype.getLocalTextPrefix = function () { return Contenidos.CategoriasRow.localTextPrefix; };
            CategoriasGrid.prototype.getService = function () { return Contenidos.CategoriasService.baseUrl; };
            CategoriasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriasGrid);
            return CategoriasGrid;
        }(Serenity.EntityGrid));
        Contenidos.CategoriasGrid = CategoriasGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesDialog = /** @class */ (function (_super) {
            __extends(ComisionesDialog, _super);
            function ComisionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ComisionesForm(_this.idPrefix);
                return _this;
            }
            ComisionesDialog.prototype.getFormKey = function () { return Contenidos.ComisionesForm.formKey; };
            ComisionesDialog.prototype.getIdProperty = function () { return Contenidos.ComisionesRow.idProperty; };
            ComisionesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesRow.localTextPrefix; };
            ComisionesDialog.prototype.getNameProperty = function () { return Contenidos.ComisionesRow.nameProperty; };
            ComisionesDialog.prototype.getService = function () { return Contenidos.ComisionesService.baseUrl; };
            ComisionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesDialog);
            return ComisionesDialog;
        }(Serenity.EntityDialog));
        Contenidos.ComisionesDialog = ComisionesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesGrid = /** @class */ (function (_super) {
            __extends(ComisionesGrid, _super);
            function ComisionesGrid(container) {
                return _super.call(this, container) || this;
            }
            ComisionesGrid.prototype.getColumnsKey = function () { return 'Contenidos.Comisiones'; };
            ComisionesGrid.prototype.getDialogType = function () { return Contenidos.ComisionesDialog; };
            ComisionesGrid.prototype.getIdProperty = function () { return Contenidos.ComisionesRow.idProperty; };
            ComisionesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesRow.localTextPrefix; };
            ComisionesGrid.prototype.getService = function () { return Contenidos.ComisionesService.baseUrl; };
            ComisionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesGrid);
            return ComisionesGrid;
        }(Serenity.EntityGrid));
        Contenidos.ComisionesGrid = ComisionesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesDialog = /** @class */ (function (_super) {
            __extends(ComisionesIntegrantesDialog, _super);
            function ComisionesIntegrantesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ComisionesIntegrantesForm(_this.idPrefix);
                return _this;
            }
            ComisionesIntegrantesDialog.prototype.getFormKey = function () { return Contenidos.ComisionesIntegrantesForm.formKey; };
            ComisionesIntegrantesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ComisionesIntegrantesRow.localTextPrefix; };
            ComisionesIntegrantesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesIntegrantesDialog);
            return ComisionesIntegrantesDialog;
        }(Barrios.Common.GridEditorDialog));
        Contenidos.ComisionesIntegrantesDialog = ComisionesIntegrantesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ComisionesIntegrantesGrid = /** @class */ (function (_super) {
            __extends(ComisionesIntegrantesGrid, _super);
            function ComisionesIntegrantesGrid(container) {
                return _super.call(this, container) || this;
            }
            ComisionesIntegrantesGrid.prototype.getColumnsKey = function () { return 'Contenidos.ComisionesIntegrantes'; };
            ComisionesIntegrantesGrid.prototype.getDialogType = function () { return Contenidos.ComisionesIntegrantesDialog; };
            ComisionesIntegrantesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComisionesIntegrantesGrid);
            return ComisionesIntegrantesGrid;
        }(Barrios.Common.GridEditorBase));
        Contenidos.ComisionesIntegrantesGrid = ComisionesIntegrantesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasDialog = /** @class */ (function (_super) {
            __extends(EncuestasDialog, _super);
            function EncuestasDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Contenidos.EncuestasForm(_this.idPrefix);
                Contenidos.CategoriasDialog.typeCategory = 1;
                return _this;
            }
            EncuestasDialog.prototype.getFormKey = function () { return Contenidos.EncuestasForm.formKey; };
            EncuestasDialog.prototype.getIdProperty = function () { return Contenidos.EncuestasRow.idProperty; };
            EncuestasDialog.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasRow.localTextPrefix; };
            EncuestasDialog.prototype.getNameProperty = function () { return Contenidos.EncuestasRow.nameProperty; };
            EncuestasDialog.prototype.getService = function () { return Contenidos.EncuestasService.baseUrl; };
            EncuestasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasDialog);
            return EncuestasDialog;
        }(Serenity.EntityDialog));
        Contenidos.EncuestasDialog = EncuestasDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasGrid = /** @class */ (function (_super) {
            __extends(EncuestasGrid, _super);
            function EncuestasGrid(container, detailGrid) {
                var _this = _super.call(this, container, {
                    selectionMode: "single",
                    enableRowSelection: true,
                    // bulkdeletePermissionKey: Q.text('Site.Permission.SalesTemplateBulkDelete'),
                    TableName: Q.text('Site.TableName.Encuestas')
                }) || this;
                _this.onItemClicked = function (item) {
                    console.log(item);
                    detailGrid.masterItemID = item.Id;
                };
                return _this;
            }
            EncuestasGrid.prototype.getColumnsKey = function () { return 'Contenidos.Encuestas'; };
            EncuestasGrid.prototype.getDialogType = function () { return Contenidos.EncuestasDialog; };
            EncuestasGrid.prototype.getIdProperty = function () { return Contenidos.EncuestasRow.idProperty; };
            EncuestasGrid.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasRow.localTextPrefix; };
            EncuestasGrid.prototype.getService = function () { return Contenidos.EncuestasService.baseUrl; };
            EncuestasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasGrid);
            return EncuestasGrid;
        }(Barrios.MasterGridBase));
        Contenidos.EncuestasGrid = EncuestasGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesDialog = /** @class */ (function (_super) {
            __extends(EncuestasValoracionesDialog, _super);
            function EncuestasValoracionesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Contenidos.EncuestasValoracionesForm(_this.idPrefix);
                _this.applyChangesButton.remove();
                _this.deleteButton.remove();
                return _this;
            }
            EncuestasValoracionesDialog.prototype.getFormKey = function () { return Contenidos.EncuestasValoracionesForm.formKey; };
            EncuestasValoracionesDialog.prototype.getIdProperty = function () { return Contenidos.EncuestasValoracionesRow.idProperty; };
            EncuestasValoracionesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasValoracionesRow.localTextPrefix; };
            EncuestasValoracionesDialog.prototype.getNameProperty = function () { return Contenidos.EncuestasValoracionesRow.nameProperty; };
            EncuestasValoracionesDialog.prototype.getService = function () { return Contenidos.EncuestasValoracionesService.baseUrl; };
            EncuestasValoracionesDialog.prototype.SetSurveyId = function (id) {
                console.log(id);
                this.form.IdEncuesta.value = id;
            };
            EncuestasValoracionesDialog.prototype.getDialogOptions = function () {
                var options = _super.prototype.getDialogOptions.call(this);
                options.width = "400px";
                return options;
            };
            EncuestasValoracionesDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                this.saveSucces();
            };
            EncuestasValoracionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EncuestasValoracionesDialog);
            return EncuestasValoracionesDialog;
        }(Serenity.EntityDialog));
        Contenidos.EncuestasValoracionesDialog = EncuestasValoracionesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var EncuestasValoracionesGrid = /** @class */ (function (_super) {
            __extends(EncuestasValoracionesGrid, _super);
            function EncuestasValoracionesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.setTitle("Valoraciones");
                return _this;
            }
            EncuestasValoracionesGrid.prototype.getColumnsKey = function () { return 'Contenidos.EncuestasValoraciones'; };
            EncuestasValoracionesGrid.prototype.getDialogType = function () { return Contenidos.EncuestasValoracionesDialog; };
            EncuestasValoracionesGrid.prototype.getIdProperty = function () { return Contenidos.EncuestasValoracionesRow.idProperty; };
            EncuestasValoracionesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.EncuestasValoracionesRow.localTextPrefix; };
            EncuestasValoracionesGrid.prototype.getService = function () { return Contenidos.EncuestasValoracionesService.baseUrl; };
            EncuestasValoracionesGrid.prototype.getMasterFieldName = function () {
                return "ID_Encuesta";
            };
            return EncuestasValoracionesGrid;
        }(Barrios.DetailGridBase));
        Contenidos.EncuestasValoracionesGrid = EncuestasValoracionesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoDialog = /** @class */ (function (_super) {
            __extends(LineaTiempoDialog, _super);
            function LineaTiempoDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Contenidos.LineaTiempoForm(_this.idPrefix);
                Contenidos.CategoriasDialog.typeCategory = 2;
                return _this;
            }
            LineaTiempoDialog.prototype.getFormKey = function () { return Contenidos.LineaTiempoForm.formKey; };
            LineaTiempoDialog.prototype.getIdProperty = function () { return Contenidos.LineaTiempoRow.idProperty; };
            LineaTiempoDialog.prototype.getLocalTextPrefix = function () { return Contenidos.LineaTiempoRow.localTextPrefix; };
            LineaTiempoDialog.prototype.getNameProperty = function () { return Contenidos.LineaTiempoRow.nameProperty; };
            LineaTiempoDialog.prototype.getService = function () { return Contenidos.LineaTiempoService.baseUrl; };
            LineaTiempoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LineaTiempoDialog);
            return LineaTiempoDialog;
        }(Serenity.EntityDialog));
        Contenidos.LineaTiempoDialog = LineaTiempoDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var LineaTiempoGrid = /** @class */ (function (_super) {
            __extends(LineaTiempoGrid, _super);
            function LineaTiempoGrid(container, UseSubBarrios) {
                var _this = this;
                _this.UseSubBarrios = UseSubBarrios;
                _this = _super.call(this, container) || this;
                return _this;
            }
            LineaTiempoGrid.prototype.getColumnsKey = function () { return 'Contenidos.LineaTiempo'; };
            LineaTiempoGrid.prototype.getDialogType = function () { return Contenidos.LineaTiempoDialog; };
            LineaTiempoGrid.prototype.getIdProperty = function () { return Contenidos.LineaTiempoRow.idProperty; };
            LineaTiempoGrid.prototype.getLocalTextPrefix = function () { return Contenidos.LineaTiempoRow.localTextPrefix; };
            LineaTiempoGrid.prototype.getService = function () { return Contenidos.LineaTiempoService.baseUrl; };
            LineaTiempoGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var target = $(e.target);
                if (this.pastTarget != target) {
                    if (this.pastTarget) {
                        this.pastTarget.parent().removeClass('slickgrid-row-selected');
                        if (this.odd)
                            this.pastTarget.parent().addClass('odd');
                    }
                    if (target.parent().hasClass('odd')) {
                        target.parent().removeClass('odd');
                        this.odd = true;
                    }
                    else
                        this.odd = false;
                    target.parent().addClass('slickgrid-row-selected');
                    this.pastTarget = target;
                }
                var item = this.itemAt(row);
                this.objId = item.Id;
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
            };
            LineaTiempoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Enviar mails',
                    cssClass: 'send-button',
                    onClick: function () {
                        if (_this.objId != undefined) {
                            Contenidos.LineaTiempoService.SendMails({ Id: _this.objId }, function (Response) {
                                Q.notifySuccess(Response);
                            });
                        }
                        else
                            Q.notifyInfo("Seleccione una nota de la grilla");
                    }
                });
                if (this.UseSubBarrios) {
                    buttons.push({
                        title: 'Enviar por subBarrio',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (_this.objId != undefined) {
                                var dialog = new Barrios.Settings.SubbarriosSelectDialog(_this.element);
                                dialog.element.on("dialogclose", function () {
                                    if (dialog.GetSave()) {
                                        Contenidos.LineaTiempoService.SendMailsForSubNeigborhoob({ LineTimeId: _this.objId, SubNeigborhoob: dialog.GetKeys() }, function (Response) {
                                            Q.notifySuccess(Response);
                                        });
                                    }
                                });
                                dialog.dialogOpen();
                            }
                            else
                                Q.notifyInfo("Seleccione una nota de la grilla");
                        }
                    });
                }
                buttons.push({
                    title: "Importar",
                    cssClass: "import-button",
                    onClick: function () {
                        var dialog = new Barrios.Common.ImportFileDialog(function (fileValue) {
                            Contenidos.LineaTiempoService.ImportFile({ FileName: fileValue }, function (response) {
                                Q.notifySuccess(response);
                                _this.refresh();
                            });
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            LineaTiempoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LineaTiempoGrid);
            return LineaTiempoGrid;
        }(Serenity.EntityGrid));
        Contenidos.LineaTiempoGrid = LineaTiempoGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresDialog = /** @class */ (function (_super) {
            __extends(ProveedoresDialog, _super);
            function ProveedoresDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Contenidos.ProveedoresForm(_this.idPrefix);
                Contenidos.CategoriasDialog.typeCategory = 3;
                return _this;
            }
            ProveedoresDialog.prototype.getFormKey = function () { return Contenidos.ProveedoresForm.formKey; };
            ProveedoresDialog.prototype.getIdProperty = function () { return Contenidos.ProveedoresRow.idProperty; };
            ProveedoresDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresRow.localTextPrefix; };
            ProveedoresDialog.prototype.getNameProperty = function () { return Contenidos.ProveedoresRow.nameProperty; };
            ProveedoresDialog.prototype.getService = function () { return Contenidos.ProveedoresService.baseUrl; };
            ProveedoresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresDialog);
            return ProveedoresDialog;
        }(Serenity.EntityDialog));
        Contenidos.ProveedoresDialog = ProveedoresDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresGrid = /** @class */ (function (_super) {
            __extends(ProveedoresGrid, _super);
            function ProveedoresGrid(container, detailGrid) {
                var _this = _super.call(this, container, {
                    selectionMode: "single",
                    enableRowSelection: true,
                    // bulkdeletePermissionKey: Q.text('Site.Permission.SalesTemplateBulkDelete'),
                    TableName: Q.text('Site.TableName.Encuestas')
                }) || this;
                _this.onItemClicked = function (item) {
                    console.log(item);
                    detailGrid.masterItemID = item.Id;
                };
                return _this;
            }
            ProveedoresGrid.prototype.getColumnsKey = function () { return 'Contenidos.Proveedores'; };
            ProveedoresGrid.prototype.getDialogType = function () { return Contenidos.ProveedoresDialog; };
            ProveedoresGrid.prototype.getIdProperty = function () { return Contenidos.ProveedoresRow.idProperty; };
            ProveedoresGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresRow.localTextPrefix; };
            ProveedoresGrid.prototype.getService = function () { return Contenidos.ProveedoresService.baseUrl; };
            ProveedoresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresGrid);
            return ProveedoresGrid;
        }(Barrios.MasterGridBase));
        Contenidos.ProveedoresGrid = ProveedoresGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesDialog = /** @class */ (function (_super) {
            __extends(ProveedoresValoracionesDialog, _super);
            function ProveedoresValoracionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Contenidos.ProveedoresValoracionesForm(_this.idPrefix);
                return _this;
            }
            ProveedoresValoracionesDialog.prototype.getFormKey = function () { return Contenidos.ProveedoresValoracionesForm.formKey; };
            ProveedoresValoracionesDialog.prototype.getIdProperty = function () { return Contenidos.ProveedoresValoracionesRow.idProperty; };
            ProveedoresValoracionesDialog.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresValoracionesRow.localTextPrefix; };
            ProveedoresValoracionesDialog.prototype.getService = function () { return Contenidos.ProveedoresValoracionesService.baseUrl; };
            ProveedoresValoracionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresValoracionesDialog);
            return ProveedoresValoracionesDialog;
        }(Serenity.EntityDialog));
        Contenidos.ProveedoresValoracionesDialog = ProveedoresValoracionesDialog;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Contenidos;
    (function (Contenidos) {
        var ProveedoresValoracionesGrid = /** @class */ (function (_super) {
            __extends(ProveedoresValoracionesGrid, _super);
            function ProveedoresValoracionesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.setTitle("Valoraciones");
                return _this;
            }
            ProveedoresValoracionesGrid.prototype.getColumnsKey = function () { return 'Contenidos.ProveedoresValoraciones'; };
            ProveedoresValoracionesGrid.prototype.getDialogType = function () { return Contenidos.ProveedoresValoracionesDialog; };
            ProveedoresValoracionesGrid.prototype.getIdProperty = function () { return Contenidos.ProveedoresValoracionesRow.idProperty; };
            ProveedoresValoracionesGrid.prototype.getLocalTextPrefix = function () { return Contenidos.ProveedoresValoracionesRow.localTextPrefix; };
            ProveedoresValoracionesGrid.prototype.getService = function () { return Contenidos.ProveedoresValoracionesService.baseUrl; };
            ProveedoresValoracionesGrid.prototype.getMasterFieldName = function () {
                return "ID_PROVEEDOR";
            };
            ProveedoresValoracionesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg("Valoracion" /* Valoracion */)
                    ]
                });
                return grid;
            };
            ProveedoresValoracionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresValoracionesGrid);
            return ProveedoresValoracionesGrid;
        }(Barrios.DetailGridBase));
        Contenidos.ProveedoresValoracionesGrid = ProveedoresValoracionesGrid;
    })(Contenidos = Barrios.Contenidos || (Barrios.Contenidos = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var HolidaysDialog = /** @class */ (function (_super) {
            __extends(HolidaysDialog, _super);
            function HolidaysDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.HolidaysForm(_this.idPrefix);
                return _this;
            }
            HolidaysDialog.prototype.getFormKey = function () { return Default.HolidaysForm.formKey; };
            HolidaysDialog.prototype.getIdProperty = function () { return Default.HolidaysRow.idProperty; };
            HolidaysDialog.prototype.getLocalTextPrefix = function () { return Default.HolidaysRow.localTextPrefix; };
            HolidaysDialog.prototype.getNameProperty = function () { return Default.HolidaysRow.nameProperty; };
            HolidaysDialog.prototype.getService = function () { return Default.HolidaysService.baseUrl; };
            HolidaysDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HolidaysDialog);
            return HolidaysDialog;
        }(Serenity.EntityDialog));
        Default.HolidaysDialog = HolidaysDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var HolidaysGrid = /** @class */ (function (_super) {
            __extends(HolidaysGrid, _super);
            function HolidaysGrid(container) {
                return _super.call(this, container) || this;
            }
            HolidaysGrid.prototype.getColumnsKey = function () { return 'Default.Holidays'; };
            HolidaysGrid.prototype.getDialogType = function () { return Default.HolidaysDialog; };
            HolidaysGrid.prototype.getIdProperty = function () { return Default.HolidaysRow.idProperty; };
            HolidaysGrid.prototype.getLocalTextPrefix = function () { return Default.HolidaysRow.localTextPrefix; };
            HolidaysGrid.prototype.getService = function () { return Default.HolidaysService.baseUrl; };
            HolidaysGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Actualizar desde la web',
                    cssClass: 'send-button',
                    onClick: function () {
                        Default.HolidaysService.UpdateFromAPI({}, function (Response) {
                            Q.notifySuccess(Response);
                            _this.refresh();
                        });
                    }
                });
                return buttons;
            };
            HolidaysGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], HolidaysGrid);
            return HolidaysGrid;
        }(Serenity.EntityGrid));
        Default.HolidaysGrid = HolidaysGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasDialog = /** @class */ (function (_super) {
            __extends(ReservasDialog, _super);
            function ReservasDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Default.ReservasForm(_this.idPrefix);
                _this.form.IdRecurso.change(function (e) {
                    if (_this.form.IdRecurso.selectedItem != null) {
                        var obj = _this.form.IdRecurso.selectedItem;
                        if (_this.form.IdRecurso.selectedItem.Resolucion == 0) {
                            _this.form.IdTurnosEspeciales.getGridField().toggle(true);
                            _this.form.IdTurnosEspeciales.element.addClass("required");
                            _this.form.IdTipo.getGridField().toggle(false);
                            _this.form.IdTipo.element.removeClass("required");
                            _this.form.IdVecino2.getGridField().toggle(false);
                            _this.form.IdVecino2.element.removeClass("required");
                            _this.UpdateTurnsComboBox();
                        }
                        else {
                            _this.form.IdTurnosEspeciales.getGridField().toggle(false);
                            _this.form.IdTurnosEspeciales.element.removeClass("required");
                            _this.form.IdTipo.getGridField().toggle(true);
                            _this.form.IdTipo.element.addClass("required");
                        }
                    }
                });
                _this.form.IdTurnosEspeciales.change(function (e) {
                    if (_this.form.IdTurnosEspeciales.selectedItem != null) {
                        _this.form.Turno.value = _this.form.IdTurnosEspeciales.selectedItem.Nombre;
                        _this.form.Inicio.value = _this.form.IdTurnosEspeciales.selectedItem.Inicio.toString();
                        _this.form.Duracion.value = _this.form.IdTurnosEspeciales.selectedItem.Duracion;
                    }
                });
                _this.form.Fecha.change(function (e) { _this.UpdateTurnsComboBox(); });
                _this.form.IdTipo.change(function (e) {
                    if (_this.form.IdTipo.selectedItem != null) {
                        if (_this.form.IdTipo.selectedItem.RequiereVecino2) {
                            _this.form.IdVecino2.getGridField().toggle(true);
                            _this.form.IdVecino2.element.addClass("required");
                        }
                        else {
                            _this.form.IdVecino2.getGridField().toggle(false);
                            _this.form.IdVecino2.element.removeClass("required");
                        }
                        _this.form.Duracion.value = _this.form.IdTipo.selectedItem.Duracion;
                    }
                });
                return _this;
            }
            ReservasDialog.prototype.getFormKey = function () { return Default.ReservasForm.formKey; };
            ReservasDialog.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            ReservasDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            ReservasDialog.prototype.getNameProperty = function () { return Default.ReservasRow.nameProperty; };
            ReservasDialog.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            ReservasDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isEditMode() && this.entity.IdTipo != null) {
                    this.form.IdTurnosEspeciales.value = this.entity.IdTipo.toString();
                    this.form.Inicio.value = this.entity.Inicio.toString();
                }
            };
            ReservasDialog.prototype.UpdateTurnsComboBox = function () {
                var _this = this;
                if (this.form.Fecha.valueAsDate && this.form.IdRecurso.selectedItem && this.form.IdRecurso.selectedItem.Resolucion == 0) {
                    var dayOfWeek_1 = this.form.Fecha.valueAsDate.getDay();
                    this.form.IdTurnosEspeciales.items.forEach(function (e) {
                        var enable = false;
                        var dias = e.source.Dias;
                        if (dias) {
                            if (dias.search(dayOfWeek_1.toString()) > 0 || dias.charAt(0) == dayOfWeek_1.toString())
                                enable = true;
                        }
                        if (enable)
                            e.disabled = false;
                        else {
                            e.disabled = true;
                            if (e.source == _this.form.IdTurnosEspeciales.selectedItem) {
                                _this.form.IdTurnosEspeciales.value = null;
                                _this.form.IdTurnosEspeciales.set_value("");
                            }
                        }
                    });
                }
            };
            ReservasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasDialog);
            return ReservasDialog;
        }(Serenity.EntityDialog));
        Default.ReservasDialog = ReservasDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasGrid = /** @class */ (function (_super) {
            __extends(ReservasGrid, _super);
            function ReservasGrid(container) {
                return _super.call(this, container, {
                    selectionMode: 'single',
                    enableRowSelection: true
                }) || this;
            }
            ReservasGrid.prototype.getColumnsKey = function () { return 'Default.Reservas'; };
            ReservasGrid.prototype.getDialogType = function () { return Default.ReservasDialog; };
            ReservasGrid.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            ReservasGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            ReservasGrid.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            ReservasGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                this.item = this.itemAt(row);
                if (this.item && this.item.Confirmada == false) {
                }
            };
            ReservasGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableCellNavigation = true;
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                return opt;
            };
            ReservasGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                Q.first(filters, function (x) { return x.field == "Fecha" /* Fecha */; }).init = function (w) {
                    var start = new Date();
                    w.valueAsDate = start;
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());
                };
                return filters;
            };
            ReservasGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (!item.Confirmada)
                    klass = "statusRed";
                //klass = "statusGreen";
                //else 
                return Q.trimToNull(klass);
            };
            ReservasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Reporte',
                    cssClass: 'export-pdf-button',
                    onClick: function () {
                        if (_this.getItems().length > 0) {
                            Q.postToUrl({
                                url: "~/Report/Render",
                                params: {
                                    key: "Booking.Report",
                                    ext: "pdf",
                                    print: 0,
                                    opt: $.toJSON({
                                        request: _this.view.params
                                    })
                                },
                                target: "_blank"
                            });
                        }
                        else
                            Q.notifyInfo("No se encuentran registros");
                    }
                });
                buttons.push({
                    title: 'Confirmar',
                    cssClass: 'checkbox-yes-button',
                    onClick: function () {
                        if (_this.item && !_this.item.Confirmada) {
                            Default.ReservasService.ConfirmReservation({ ID: _this.item.Id
                            }, function (response) {
                                _this.item = null;
                                _this.refresh();
                            });
                        }
                        else
                            Q.notifyError("Seleccione alguna reserva para confirmar");
                    }
                });
                buttons.push({
                    title: "Importar reservas",
                    cssClass: "import-button",
                    onClick: function () {
                        var dialog = new Barrios.Common.ImportFileDialog(function (fileValue) {
                            Default.ReservasService.ImportFile({ FileName: fileValue }, function (response) {
                                Q.confirm(response, function () { });
                                _this.refresh();
                            });
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ReservasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasGrid);
            return ReservasGrid;
        }(Serenity.EntityGrid));
        Default.ReservasGrid = ReservasGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var EspecialBookingDialog = /** @class */ (function (_super) {
            __extends(EspecialBookingDialog, _super);
            function EspecialBookingDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.send = false;
                _this.turn = null;
                _this.form = new Default.EspecialTurnForm(_this.idPrefix);
                _this.turnList = [];
                _this.set_dialogTitle("Solicitud de turno");
                _this.form.IdRecurso.change(function (e) {
                    if (_this.form.IdRecurso.selectedItem != null) {
                        _this.UpdateTurnsComboBox();
                    }
                });
                _this.form.Fecha.change(function (e) {
                    _this.UpdateTurnsComboBox();
                });
                _this.form.IdTurnosEspeciales.change(function (e) {
                    if (_this.form.IdTurnosEspeciales.selectedItem != null) {
                        _this.form.Inicio.value = _this.form.IdTurnosEspeciales.selectedItem.Inicio.toString();
                        _this.form.Duracion.value = _this.form.IdTurnosEspeciales.selectedItem.Duracion;
                    }
                });
                _this.form.Fecha.set_minDate(new Date());
                _this.form.Fecha.set_maxDate(new Date(new Date().getTime() + (180 * 24 * 60 * 60 * 1000))); // 6 meses
                return _this;
            }
            EspecialBookingDialog.prototype.getFormKey = function () { return Default.EspecialTurnForm.formKey; };
            EspecialBookingDialog.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            EspecialBookingDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            EspecialBookingDialog.prototype.getNameProperty = function () { return Default.ReservasRow.nameProperty; };
            EspecialBookingDialog.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            EspecialBookingDialog.prototype.UpdateTurnsComboBox = function () {
                var _this = this;
                if (this.form.Fecha.valueAsDate && this.form.IdRecurso.selectedItem && this.form.IdRecurso.selectedItem.Resolucion == 0) {
                    var dayOfWeek_2 = this.form.Fecha.valueAsDate.getDay();
                    this.form.IdTurnosEspeciales.items.forEach(function (e) {
                        var enable = false;
                        var dias = e.source.Dias;
                        if (dias) {
                            if (dias.search(dayOfWeek_2.toString()) > 0 || dias.charAt(0) == dayOfWeek_2.toString())
                                enable = true;
                        }
                        if (enable)
                            e.disabled = false;
                        else {
                            e.disabled = true;
                            if (e.source == _this.form.IdTurnosEspeciales.selectedItem) {
                                _this.form.IdTurnosEspeciales.value = null;
                                _this.form.IdTurnosEspeciales.set_value("");
                            }
                        }
                    });
                }
            };
            EspecialBookingDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [{
                        title: 'Enviar Solicitud',
                        cssClass: 'add-button',
                        onClick: function () {
                            if (_this.validateForm()) {
                                _this.send = true;
                                _this.turn = _this.form.IdTurnosEspeciales.selectedItem;
                                _this.dialogClose();
                            }
                        }
                    }];
            };
            EspecialBookingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EspecialBookingDialog);
            return EspecialBookingDialog;
        }(Serenity.EntityDialog));
        Default.EspecialBookingDialog = EspecialBookingDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var NeedCommendDialog = /** @class */ (function (_super) {
            __extends(NeedCommendDialog, _super);
            function NeedCommendDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.commend = null;
                _this.form = new Default.NeedCommendForm(_this.idPrefix);
                _this.set_dialogTitle("Algo que comentar sobre la reserva");
                return _this;
            }
            NeedCommendDialog.prototype.getFormKey = function () { return Default.NeedCommendForm.formKey; };
            NeedCommendDialog.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            NeedCommendDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            NeedCommendDialog.prototype.getNameProperty = function () { return Default.ReservasRow.nameProperty; };
            NeedCommendDialog.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            NeedCommendDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 400;
                return opt;
            };
            NeedCommendDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [{
                        title: 'Reservar',
                        cssClass: 'add-button',
                        onClick: function () {
                            if (_this.validateForm()) {
                                _this.commend = _this.form.Observaciones.value;
                                _this.dialogClose();
                            }
                        }
                    }];
            };
            NeedCommendDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NeedCommendDialog);
            return NeedCommendDialog;
        }(Serenity.EntityDialog));
        Default.NeedCommendDialog = NeedCommendDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var TwoNeighborsDialog = /** @class */ (function (_super) {
            __extends(TwoNeighborsDialog, _super);
            function TwoNeighborsDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.vecinoId = null;
                _this.form = new Default.TwoNeighborsForm(_this.idPrefix);
                _this.set_dialogTitle("Seleccione el vecino");
                return _this;
            }
            TwoNeighborsDialog.prototype.getFormKey = function () { return Default.TwoNeighborsForm.formKey; };
            TwoNeighborsDialog.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            TwoNeighborsDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            TwoNeighborsDialog.prototype.getNameProperty = function () { return Default.ReservasRow.nameProperty; };
            TwoNeighborsDialog.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            TwoNeighborsDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [{
                        title: 'Selecctionar',
                        cssClass: 'add-button',
                        onClick: function () {
                            if (!Q.isEmptyOrNull(_this.form.IdVecino2.value)) {
                                _this.vecinoId = _this.form.IdVecino2.value;
                                _this.dialogClose();
                            }
                            else
                                Q.alert("Seleccione el vecino con quien reservará");
                        }
                    }];
            };
            TwoNeighborsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TwoNeighborsDialog);
            return TwoNeighborsDialog;
        }(Serenity.EntityDialog));
        Default.TwoNeighborsDialog = TwoNeighborsDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecurrentesDialog = /** @class */ (function (_super) {
            __extends(ReservasRecurrentesDialog, _super);
            function ReservasRecurrentesDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.days = [];
                _this.form = new Default.ReservasRecurrentesForm(_this.idPrefix);
                _this.days.push(_this.form.Domingo);
                _this.days.push(_this.form.Lunes);
                _this.days.push(_this.form.Martes);
                _this.days.push(_this.form.Miercoles);
                _this.days.push(_this.form.Jueves);
                _this.days.push(_this.form.Viernes);
                _this.days.push(_this.form.Sabado);
                _this.days.push(_this.form.Feriados);
                return _this;
            }
            ReservasRecurrentesDialog.prototype.getFormKey = function () { return Default.ReservasRecurrentesForm.formKey; };
            ReservasRecurrentesDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRecurrentesRow.localTextPrefix; };
            ReservasRecurrentesDialog.prototype.afterLoadEntity = function () {
                if (this.form.Dias.value) {
                    for (var x = 0; x < this.form.Dias.value.length; x++) {
                        var dayOfWeek = parseInt(this.form.Dias.value.charAt(x));
                        if (dayOfWeek < 8)
                            this.days[dayOfWeek].value = true;
                    }
                }
                _super.prototype.afterLoadEntity.call(this);
            };
            ReservasRecurrentesDialog.prototype.validateBeforeSave = function () {
                this.form.Dias.value = "";
                for (var x = 0; x < this.days.length; x++) {
                    if (this.days[x].value == true)
                        this.form.Dias.value = this.form.Dias.value + x.toString();
                }
                return _super.prototype.validateBeforeSave.call(this);
            };
            ReservasRecurrentesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasRecurrentesDialog);
            return ReservasRecurrentesDialog;
        }(Barrios.Common.GridEditorDialog));
        Default.ReservasRecurrentesDialog = ReservasRecurrentesDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecurrentesGrid = /** @class */ (function (_super) {
            __extends(ReservasRecurrentesGrid, _super);
            function ReservasRecurrentesGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasRecurrentesGrid.prototype.getColumnsKey = function () { return 'Default.ReservasRecurrentes'; };
            ReservasRecurrentesGrid.prototype.getDialogType = function () { return Default.ReservasRecurrentesDialog; };
            ReservasRecurrentesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasRecurrentesGrid);
            return ReservasRecurrentesGrid;
        }(Barrios.Common.GridEditorBase));
        Default.ReservasRecurrentesGrid = ReservasRecurrentesGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var HorariosFormatter = /** @class */ (function () {
                function HorariosFormatter() {
                }
                HorariosFormatter.prototype.format = function (ctx) {
                    if (ctx.value != undefined) {
                        var min = parseInt(ctx.value);
                        var hour = Math.floor(min / 60);
                        min = min % 60;
                        return "<span class='fa fa-clock-o clock-cell'></span>"
                            + Q.htmlEncode(this.checkTime(hour) + ':' + this.checkTime(min)) + '';
                    }
                    return Q.htmlEncode(ctx.value);
                };
                HorariosFormatter.prototype.checkTime = function (i) {
                    return (i < 10) ? "0" + i : i;
                };
                HorariosFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], HorariosFormatter);
                return HorariosFormatter;
            }());
            Default.HorariosFormatter = HorariosFormatter;
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = Barrios.Modules || (Barrios.Modules = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosDialog = /** @class */ (function (_super) {
            __extends(ReservasRecursosDialog, _super);
            function ReservasRecursosDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Default.ReservasRecursosForm(_this.idPrefix);
                _this.days = [];
                _this.days.push(_this.form.Domingo);
                _this.days.push(_this.form.Lunes);
                _this.days.push(_this.form.Martes);
                _this.days.push(_this.form.Miercoles);
                _this.days.push(_this.form.Jueves);
                _this.days.push(_this.form.Viernes);
                _this.days.push(_this.form.Sabado);
                _this.days.push(_this.form.Feriados);
                return _this;
            }
            ReservasRecursosDialog.prototype.getFormKey = function () { return Default.ReservasRecursosForm.formKey; };
            ReservasRecursosDialog.prototype.getIdProperty = function () { return Default.ReservasRecursosRow.idProperty; };
            ReservasRecursosDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasRecursosRow.localTextPrefix; };
            ReservasRecursosDialog.prototype.getNameProperty = function () { return Default.ReservasRecursosRow.nameProperty; };
            ReservasRecursosDialog.prototype.getService = function () { return Default.ReservasRecursosService.baseUrl; };
            ReservasRecursosDialog.prototype.afterLoadEntity = function () {
                if (this.form.Dias.value) {
                    for (var x = 0; x < this.form.Dias.value.length; x++) {
                        var dayOfWeek = parseInt(this.form.Dias.value.charAt(x));
                        if (dayOfWeek < 8)
                            this.days[dayOfWeek].value = true;
                    }
                }
                _super.prototype.afterLoadEntity.call(this);
            };
            ReservasRecursosDialog.prototype.validateBeforeSave = function () {
                this.form.Dias.value = "";
                console.log(this.days);
                for (var x = 0; x < this.days.length; x++) {
                    if (this.days[x].value == true)
                        this.form.Dias.value = this.form.Dias.value + x.toString();
                }
                return _super.prototype.validateBeforeSave.call(this);
            };
            ReservasRecursosDialog.prototype.dialogOpen = function () {
                this.element.addClass("s-Default-ReservasRecursosDialog");
                _super.prototype.dialogOpen.call(this, true);
            };
            ReservasRecursosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasRecursosDialog);
            return ReservasRecursosDialog;
        }(Serenity.EntityDialog));
        Default.ReservasRecursosDialog = ReservasRecursosDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasRecursosGrid = /** @class */ (function (_super) {
            __extends(ReservasRecursosGrid, _super);
            function ReservasRecursosGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasRecursosGrid.prototype.getColumnsKey = function () { return 'Default.ReservasRecursos'; };
            ReservasRecursosGrid.prototype.getDialogType = function () { return Default.ReservasRecursosDialog; };
            ReservasRecursosGrid.prototype.getIdProperty = function () { return Default.ReservasRecursosRow.idProperty; };
            ReservasRecursosGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasRecursosRow.localTextPrefix; };
            ReservasRecursosGrid.prototype.getService = function () { return Default.ReservasRecursosService.baseUrl; };
            ReservasRecursosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: "Importar recursos",
                    cssClass: "import-button",
                    onClick: function () {
                        var dialog = new Barrios.Common.ImportFileDialog(function (fileValue) {
                            Default.ReservasRecursosService.ImportFile({ FileName: fileValue }, function (response) {
                                Q.notifySuccess(response);
                                _this.refresh();
                            });
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ReservasRecursosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasRecursosGrid);
            return ReservasRecursosGrid;
        }(Serenity.EntityGrid));
        Default.ReservasRecursosGrid = ReservasRecursosGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposDialog = /** @class */ (function (_super) {
            __extends(ReservasTiposDialog, _super);
            function ReservasTiposDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ReservasTiposForm(_this.idPrefix);
                return _this;
            }
            ReservasTiposDialog.prototype.getFormKey = function () { return Default.ReservasTiposForm.formKey; };
            ReservasTiposDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasTiposRow.localTextPrefix; };
            ReservasTiposDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTiposDialog);
            return ReservasTiposDialog;
        }(Barrios.Common.GridEditorDialog));
        Default.ReservasTiposDialog = ReservasTiposDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTiposGrid = /** @class */ (function (_super) {
            __extends(ReservasTiposGrid, _super);
            function ReservasTiposGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasTiposGrid.prototype.getColumnsKey = function () { return 'Default.ReservasTipos'; };
            ReservasTiposGrid.prototype.getDialogType = function () { return Default.ReservasTiposDialog; };
            ReservasTiposGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTiposGrid);
            return ReservasTiposGrid;
        }(Barrios.Common.GridEditorBase));
        Default.ReservasTiposGrid = ReservasTiposGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var ReservasTurnosEspeciales;
            (function (ReservasTurnosEspeciales) {
                /**
                 * Our select editor with hardcoded values.
                 *
                 * When you define a new editor type, make sure you build
                 * and transform templates for it to be available
                 * in server side forms, e.g. [HardCodedValuesEditor]
                 */
                var DayNamesEditor = /** @class */ (function (_super) {
                    __extends(DayNamesEditor, _super);
                    function DayNamesEditor(container) {
                        var _this = _super.call(this, container, null) || this;
                        // add option accepts a key (id) value and display text value
                        _this.addOption("1", "Lunes");
                        _this.addOption("2", "Martes");
                        _this.addOption("3", "Miercoles");
                        _this.addOption("4", "Jueves");
                        _this.addOption("5", "Viernes");
                        _this.addOption("6", "Sabado");
                        _this.addOption("0", "Domingo");
                        _this.addOption("7", "Feriados");
                        return _this;
                    }
                    DayNamesEditor = __decorate([
                        Serenity.Decorators.registerEditor()
                    ], DayNamesEditor);
                    return DayNamesEditor;
                }(Serenity.Select2Editor));
                ReservasTurnosEspeciales.DayNamesEditor = DayNamesEditor;
            })(ReservasTurnosEspeciales = Default.ReservasTurnosEspeciales || (Default.ReservasTurnosEspeciales = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = Barrios.Modules || (Barrios.Modules = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesDialog = /** @class */ (function (_super) {
            __extends(ReservasTurnosEspecialesDialog, _super);
            function ReservasTurnosEspecialesDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.days = [];
                _this.form = new Default.ReservasTurnosEspecialesForm(_this.idPrefix);
                _this.days.push(_this.form.Domingo);
                _this.days.push(_this.form.Lunes);
                _this.days.push(_this.form.Martes);
                _this.days.push(_this.form.Miercoles);
                _this.days.push(_this.form.Jueves);
                _this.days.push(_this.form.Viernes);
                _this.days.push(_this.form.Sabado);
                _this.days.push(_this.form.Feriados);
                return _this;
            }
            ReservasTurnosEspecialesDialog.prototype.getFormKey = function () { return Default.ReservasTurnosEspecialesForm.formKey; };
            ReservasTurnosEspecialesDialog.prototype.getLocalTextPrefix = function () { return Default.ReservasTurnosEspecialesRow.localTextPrefix; };
            ReservasTurnosEspecialesDialog.prototype.afterLoadEntity = function () {
                if (this.form.Dias.value) {
                    for (var x = 0; x < this.form.Dias.value.length; x++) {
                        var dayOfWeek = parseInt(this.form.Dias.value.charAt(x));
                        if (dayOfWeek < 8)
                            this.days[dayOfWeek].value = true;
                    }
                }
                _super.prototype.afterLoadEntity.call(this);
            };
            ReservasTurnosEspecialesDialog.prototype.validateBeforeSave = function () {
                this.form.Dias.value = "";
                for (var x = 0; x < this.days.length; x++) {
                    if (this.days[x].value == true)
                        this.form.Dias.value = this.form.Dias.value + x.toString();
                }
                return _super.prototype.validateBeforeSave.call(this);
            };
            ReservasTurnosEspecialesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTurnosEspecialesDialog);
            return ReservasTurnosEspecialesDialog;
        }(Barrios.Common.GridEditorDialog));
        Default.ReservasTurnosEspecialesDialog = ReservasTurnosEspecialesDialog;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var ReservasTurnosEspecialesGrid = /** @class */ (function (_super) {
            __extends(ReservasTurnosEspecialesGrid, _super);
            function ReservasTurnosEspecialesGrid(container) {
                return _super.call(this, container) || this;
            }
            ReservasTurnosEspecialesGrid.prototype.getColumnsKey = function () { return 'Default.ReservasTurnosEspeciales'; };
            ReservasTurnosEspecialesGrid.prototype.getDialogType = function () { return Default.ReservasTurnosEspecialesDialog; };
            ReservasTurnosEspecialesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReservasTurnosEspecialesGrid);
            return ReservasTurnosEspecialesGrid;
        }(Barrios.Common.GridEditorBase));
        Default.ReservasTurnosEspecialesGrid = ReservasTurnosEspecialesGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value,
                            Unit: _this.form.Unit.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Barrios.Membership || (Barrios.Membership = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosActividadesDialog = /** @class */ (function (_super) {
            __extends(VecinosActividadesDialog, _super);
            function VecinosActividadesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Perfil.VecinosActividadesForm(_this.idPrefix);
                return _this;
            }
            VecinosActividadesDialog.prototype.getFormKey = function () { return Perfil.VecinosActividadesForm.formKey; };
            VecinosActividadesDialog.prototype.getIdProperty = function () { return Perfil.VecinosActividadesRow.idProperty; };
            VecinosActividadesDialog.prototype.getLocalTextPrefix = function () { return Perfil.VecinosActividadesRow.localTextPrefix; };
            VecinosActividadesDialog.prototype.getNameProperty = function () { return Perfil.VecinosActividadesRow.nameProperty; };
            VecinosActividadesDialog.prototype.getService = function () { return Perfil.VecinosActividadesService.baseUrl; };
            VecinosActividadesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosActividadesDialog);
            return VecinosActividadesDialog;
        }(Serenity.EntityDialog));
        Perfil.VecinosActividadesDialog = VecinosActividadesDialog;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosActividadesGrid = /** @class */ (function (_super) {
            __extends(VecinosActividadesGrid, _super);
            function VecinosActividadesGrid(container) {
                return _super.call(this, container) || this;
            }
            VecinosActividadesGrid.prototype.getColumnsKey = function () { return 'Perfil.VecinosActividades'; };
            VecinosActividadesGrid.prototype.getDialogType = function () { return Perfil.VecinosActividadesDialog; };
            VecinosActividadesGrid.prototype.getIdProperty = function () { return Perfil.VecinosActividadesRow.idProperty; };
            VecinosActividadesGrid.prototype.getLocalTextPrefix = function () { return Perfil.VecinosActividadesRow.localTextPrefix; };
            VecinosActividadesGrid.prototype.getService = function () { return Perfil.VecinosActividadesService.baseUrl; };
            VecinosActividadesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosActividadesGrid);
            return VecinosActividadesGrid;
        }(Serenity.EntityGrid));
        Perfil.VecinosActividadesGrid = VecinosActividadesGrid;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosDialog = /** @class */ (function (_super) {
            __extends(VecinosEventosDialog, _super);
            function VecinosEventosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Perfil.VecinosEventosForm(_this.idPrefix);
                return _this;
            }
            VecinosEventosDialog.prototype.getFormKey = function () { return Perfil.VecinosEventosForm.formKey; };
            VecinosEventosDialog.prototype.getIdProperty = function () { return Perfil.VecinosEventosRow.idProperty; };
            VecinosEventosDialog.prototype.getLocalTextPrefix = function () { return Perfil.VecinosEventosRow.localTextPrefix; };
            VecinosEventosDialog.prototype.getNameProperty = function () { return Perfil.VecinosEventosRow.nameProperty; };
            VecinosEventosDialog.prototype.getService = function () { return Perfil.VecinosEventosService.baseUrl; };
            VecinosEventosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosEventosDialog);
            return VecinosEventosDialog;
        }(Serenity.EntityDialog));
        Perfil.VecinosEventosDialog = VecinosEventosDialog;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosGrid = /** @class */ (function (_super) {
            __extends(VecinosEventosGrid, _super);
            function VecinosEventosGrid(container, userId) {
                if (userId === void 0) { userId = null; }
                var _this = this;
                _this.showExpiredTerminated = true;
                _this.userId = userId;
                _this = _super.call(this, container) || this;
                if (_this.userId != null)
                    _this.findQuickFilter(Serenity.LookupEditor, "Userid" /* Userid */).element.parent().remove();
                return _this;
            }
            VecinosEventosGrid.prototype.getColumnsKey = function () { return 'Perfil.VecinosEventos'; };
            VecinosEventosGrid.prototype.getDialogType = function () { return Perfil.VecinosEventosDialog; };
            VecinosEventosGrid.prototype.getIdProperty = function () { return Perfil.VecinosEventosRow.idProperty; };
            VecinosEventosGrid.prototype.getLocalTextPrefix = function () { return Perfil.VecinosEventosRow.localTextPrefix; };
            VecinosEventosGrid.prototype.getService = function () { return Perfil.VecinosEventosService.baseUrl; };
            VecinosEventosGrid.prototype.getQuickFilters = function () {
                var _this = this;
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    field: "Fecha" /* Fecha */,
                    type: Serenity.BooleanEditor,
                    title: 'Ocultar terminadas',
                    handler: function (h) {
                        _this.showExpiredTerminated = !!h.value;
                    }
                });
                return filters;
            };
            VecinosEventosGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                if (this.userId != null)
                    grid.setColumns(grid.getColumns().filter(function (column) {
                        return (column.field != "UseridUsername" /* UseridUsername */ && column.visible === true);
                    }));
                return grid;
            };
            VecinosEventosGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                if (this.userId != null) {
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [["Userid" /* Userid */], '=', this.userId]);
                }
                if (this.showExpiredTerminated) {
                    var today = new Date();
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [["Fecha" /* Fecha */], '>', today.toISOString().substring(0, 10).replace(/-/g, '')]);
                }
                return true;
            };
            VecinosEventosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosEventosGrid);
            return VecinosEventosGrid;
        }(Serenity.EntityGrid));
        Perfil.VecinosEventosGrid = VecinosEventosGrid;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosConcurrentesDialog = /** @class */ (function (_super) {
            __extends(VecinosEventosConcurrentesDialog, _super);
            function VecinosEventosConcurrentesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Perfil.VecinosEventosConcurrentesForm(_this.idPrefix);
                return _this;
            }
            VecinosEventosConcurrentesDialog.prototype.getFormKey = function () { return Perfil.VecinosEventosConcurrentesForm.formKey; };
            VecinosEventosConcurrentesDialog.prototype.getLocalTextPrefix = function () { return Perfil.VecinosEventosConcurrentesRow.localTextPrefix; };
            VecinosEventosConcurrentesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosEventosConcurrentesDialog);
            return VecinosEventosConcurrentesDialog;
        }(Barrios.Common.GridEditorDialog));
        Perfil.VecinosEventosConcurrentesDialog = VecinosEventosConcurrentesDialog;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosEventosConcurrentesGrid = /** @class */ (function (_super) {
            __extends(VecinosEventosConcurrentesGrid, _super);
            function VecinosEventosConcurrentesGrid(container) {
                return _super.call(this, container) || this;
            }
            VecinosEventosConcurrentesGrid.prototype.getColumnsKey = function () { return 'Perfil.VecinosEventosConcurrentes'; };
            VecinosEventosConcurrentesGrid.prototype.getDialogType = function () { return Perfil.VecinosEventosConcurrentesDialog; };
            VecinosEventosConcurrentesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Agregar desde frecuentes',
                    cssClass: 'send-button',
                    onClick: function () {
                        var items = [];
                        var grid = _this;
                        var dialog = new Barrios.Perfil.FrequentVisitorsSelectDialog(_this.element);
                        dialog.element.on("dialogclose", function () {
                            console.log(grid.getItems());
                            if (dialog.GetSave()) {
                                var count = grid.getItems().length + 1;
                                var obj;
                                dialog.GetNames().forEach(function (value, index) {
                                    obj = { Nombre: value };
                                    obj.__id = "`" + count;
                                    items.push(obj);
                                    count++;
                                });
                                grid.getItems().forEach(function (value) {
                                    items.push(value);
                                });
                                console.log(items);
                                grid.setItems(items);
                            }
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            VecinosEventosConcurrentesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosEventosConcurrentesGrid);
            return VecinosEventosConcurrentesGrid;
        }(Barrios.Common.GridEditorBase));
        Perfil.VecinosEventosConcurrentesGrid = VecinosEventosConcurrentesGrid;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosMascotasDialog = /** @class */ (function (_super) {
            __extends(VecinosMascotasDialog, _super);
            function VecinosMascotasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Perfil.VecinosMascotasForm(_this.idPrefix);
                return _this;
            }
            VecinosMascotasDialog.prototype.getFormKey = function () { return Perfil.VecinosMascotasForm.formKey; };
            VecinosMascotasDialog.prototype.getIdProperty = function () { return Perfil.VecinosMascotasRow.idProperty; };
            VecinosMascotasDialog.prototype.getLocalTextPrefix = function () { return Perfil.VecinosMascotasRow.localTextPrefix; };
            VecinosMascotasDialog.prototype.getNameProperty = function () { return Perfil.VecinosMascotasRow.nameProperty; };
            VecinosMascotasDialog.prototype.getService = function () { return Perfil.VecinosMascotasService.baseUrl; };
            VecinosMascotasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosMascotasDialog);
            return VecinosMascotasDialog;
        }(Serenity.EntityDialog));
        Perfil.VecinosMascotasDialog = VecinosMascotasDialog;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosMascotasGrid = /** @class */ (function (_super) {
            __extends(VecinosMascotasGrid, _super);
            function VecinosMascotasGrid(container, userId) {
                if (userId === void 0) { userId = null; }
                var _this = this;
                _this.userId = userId;
                _this = _super.call(this, container) || this;
                if (_this.userId != null) {
                    _this.element.find(".quick-filters-bar").remove();
                }
                return _this;
            }
            VecinosMascotasGrid.prototype.getColumnsKey = function () { return 'Perfil.VecinosMascotas'; };
            VecinosMascotasGrid.prototype.getDialogType = function () { return Perfil.VecinosMascotasDialog; };
            VecinosMascotasGrid.prototype.getIdProperty = function () { return Perfil.VecinosMascotasRow.idProperty; };
            VecinosMascotasGrid.prototype.getLocalTextPrefix = function () { return Perfil.VecinosMascotasRow.localTextPrefix; };
            VecinosMascotasGrid.prototype.getService = function () { return Perfil.VecinosMascotasService.baseUrl; };
            VecinosMascotasGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                if (this.userId != null) {
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [["Userid" /* Userid */], '=', this.userId]);
                }
                return true;
            };
            VecinosMascotasGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.userId == null) {
                    Q.first(columns, function (x) { return x.field == "UseridUnit" /* UseridUnit */; }).visible = true;
                    Q.first(columns, function (x) { return x.field == "UseridUsername" /* UseridUsername */; }).visible = true;
                }
                return columns;
            };
            VecinosMascotasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                if (this.userId == null) {
                    buttons.push({
                        title: 'Reporte',
                        cssClass: 'export-pdf-button',
                        onClick: function () {
                            if (_this.getItems().length > 0) {
                                Q.postToUrl({
                                    url: "~/VecinosMascotas/PetReport",
                                    params: {
                                        requestString: $.toJSON(_this.view.params)
                                    },
                                    target: "_blank"
                                });
                            }
                            else
                                Q.notifyInfo("No se encuentran registros");
                        }
                    });
                    buttons.push({
                        title: "Importar",
                        cssClass: "import-button",
                        onClick: function () {
                            var dialog = new Barrios.Common.ImportFileDialog(function (fileValue) {
                                Perfil.VecinosMascotasService.ImportFile({ FileName: fileValue }, function (response) {
                                    Q.notifySuccess(response);
                                    _this.refresh();
                                });
                            });
                            dialog.dialogOpen();
                        }
                    });
                }
                return buttons;
            };
            VecinosMascotasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosMascotasGrid);
            return VecinosMascotasGrid;
        }(Serenity.EntityGrid));
        Perfil.VecinosMascotasGrid = VecinosMascotasGrid;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosVisitantesFrecuentesDialog = /** @class */ (function (_super) {
            __extends(VecinosVisitantesFrecuentesDialog, _super);
            function VecinosVisitantesFrecuentesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Perfil.VecinosVisitantesFrecuentesForm(_this.idPrefix);
                return _this;
            }
            VecinosVisitantesFrecuentesDialog.prototype.getFormKey = function () { return Perfil.VecinosVisitantesFrecuentesForm.formKey; };
            VecinosVisitantesFrecuentesDialog.prototype.getIdProperty = function () { return Perfil.VecinosVisitantesFrecuentesRow.idProperty; };
            VecinosVisitantesFrecuentesDialog.prototype.getLocalTextPrefix = function () { return Perfil.VecinosVisitantesFrecuentesRow.localTextPrefix; };
            VecinosVisitantesFrecuentesDialog.prototype.getNameProperty = function () { return Perfil.VecinosVisitantesFrecuentesRow.nameProperty; };
            VecinosVisitantesFrecuentesDialog.prototype.getService = function () { return Perfil.VecinosVisitantesFrecuentesService.baseUrl; };
            VecinosVisitantesFrecuentesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosVisitantesFrecuentesDialog);
            return VecinosVisitantesFrecuentesDialog;
        }(Serenity.EntityDialog));
        Perfil.VecinosVisitantesFrecuentesDialog = VecinosVisitantesFrecuentesDialog;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var VecinosVisitantesFrecuentesGrid = /** @class */ (function (_super) {
            __extends(VecinosVisitantesFrecuentesGrid, _super);
            function VecinosVisitantesFrecuentesGrid(container, userId) {
                if (userId === void 0) { userId = null; }
                var _this = this;
                _this.userId = userId;
                _this = _super.call(this, container) || this;
                if (_this.userId != null)
                    _this.element.find(".quick-filters-bar").remove();
                return _this;
            }
            VecinosVisitantesFrecuentesGrid.prototype.getColumnsKey = function () { return 'Perfil.VecinosVisitantesFrecuentes'; };
            VecinosVisitantesFrecuentesGrid.prototype.getDialogType = function () { return Perfil.VecinosVisitantesFrecuentesDialog; };
            VecinosVisitantesFrecuentesGrid.prototype.getIdProperty = function () { return Perfil.VecinosVisitantesFrecuentesRow.idProperty; };
            VecinosVisitantesFrecuentesGrid.prototype.getLocalTextPrefix = function () { return Perfil.VecinosVisitantesFrecuentesRow.localTextPrefix; };
            VecinosVisitantesFrecuentesGrid.prototype.getService = function () { return Perfil.VecinosVisitantesFrecuentesService.baseUrl; };
            VecinosVisitantesFrecuentesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                if (this.userId != null)
                    grid.setColumns(grid.getColumns().filter(function (column) {
                        return (column.field != "UseridUsername" /* UseridUsername */ && column.visible === true);
                    }));
                return grid;
            };
            VecinosVisitantesFrecuentesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                if (this.userId == null) {
                    buttons.push({
                        title: 'Reporte',
                        cssClass: 'export-pdf-button',
                        onClick: function () {
                            if (_this.getItems().length > 0) {
                                Q.postToUrl({
                                    url: "~/Report/Render",
                                    params: {
                                        key: "Visit.Report",
                                        ext: "pdf",
                                        print: 0,
                                        opt: $.toJSON({
                                            request: _this.view.params
                                        })
                                    },
                                    target: "_blank"
                                });
                            }
                            else
                                Q.notifyInfo("No se encuentran registros");
                        }
                    });
                    //buttons.push({
                    //    title: 'Reporte',
                    //    cssClass: 'export-pdf-button',
                    //    onClick: () => {
                    //        if (this.getItems().length > 0) {
                    //            Q.postToUrl({
                    //                url: "~/VecinosVisitantesFrecuentes/VisitReport",
                    //                params: {
                    //                    requestString: $.toJSON(this.view.params)
                    //                },
                    //                target: "_blank"
                    //            });
                    //        }
                    //        else
                    //            Q.notifyInfo("No se encuentran registros");
                    //    }
                    //});
                    buttons.push({
                        title: "Importar",
                        cssClass: "import-button",
                        onClick: function () {
                            var dialog = new Barrios.Common.ImportFileDialog(function (fileValue) {
                                Perfil.VecinosVisitantesFrecuentesService.ImportFile({ FileName: fileValue }, function (response) {
                                    Q.notifySuccess(response);
                                    _this.refresh();
                                });
                            });
                            dialog.dialogOpen();
                        }
                    });
                }
                return buttons;
            };
            VecinosVisitantesFrecuentesGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                if (this.userId != null) {
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [["Userid" /* Userid */], '=', this.userId]);
                }
                return true;
            };
            VecinosVisitantesFrecuentesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VecinosVisitantesFrecuentesGrid);
            return VecinosVisitantesFrecuentesGrid;
        }(Serenity.EntityGrid));
        Perfil.VecinosVisitantesFrecuentesGrid = VecinosVisitantesFrecuentesGrid;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var FrequentVisitorsSelectDialog = /** @class */ (function (_super) {
            __extends(FrequentVisitorsSelectDialog, _super);
            function FrequentVisitorsSelectDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.dialogTitle = "Seleccione las personas";
                return _this;
            }
            FrequentVisitorsSelectDialog.prototype.GetSave = function () {
                return this.grid.save;
            };
            FrequentVisitorsSelectDialog.prototype.GetNames = function () {
                var names = [];
                var keys = this.grid.rowSelection.getSelectedKeys();
                for (var x = 0; x < keys.length; x++)
                    names.push(this.grid.getItems()[parseInt(keys[x]) - 1].Nombre);
                return names;
            };
            FrequentVisitorsSelectDialog.prototype.getDialogOptions = function () {
                var options = _super.prototype.getDialogOptions.call(this);
                options.width = "300px";
                return options;
            };
            FrequentVisitorsSelectDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                this.grid = new Perfil.FrequentVisitorsSelectGrid($("#FVG"), function () { _this.dialogClose(); });
                this.grid.init();
                this.grid.view.refresh();
            };
            FrequentVisitorsSelectDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
            };
            FrequentVisitorsSelectDialog.prototype.getTemplate = function () {
                // you could also put this in a xxxDialog.Template.html file. it's here for simplicity.
                return "<div id='FVG' style='height: inherit;padding: 10px; '></div>";
            };
            return FrequentVisitorsSelectDialog;
        }(Serenity.TemplatedDialog));
        Perfil.FrequentVisitorsSelectDialog = FrequentVisitorsSelectDialog;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Perfil;
    (function (Perfil) {
        var FrequentVisitorsSelectGrid = /** @class */ (function (_super) {
            __extends(FrequentVisitorsSelectGrid, _super);
            function FrequentVisitorsSelectGrid(container, close) {
                var _this = _super.call(this, container) || this;
                _this.save = false;
                _this.titleDiv.remove();
                _this.closeVar = close;
                return _this;
            }
            FrequentVisitorsSelectGrid.prototype.getColumnsKey = function () { return 'Perfil.VecinosVisitantesFrecuentes'; };
            FrequentVisitorsSelectGrid.prototype.getDialogType = function () { return Perfil.VecinosVisitantesFrecuentesDialog; };
            FrequentVisitorsSelectGrid.prototype.getIdProperty = function () { return Perfil.VecinosVisitantesFrecuentesRow.idProperty; };
            FrequentVisitorsSelectGrid.prototype.getLocalTextPrefix = function () { return Perfil.VecinosVisitantesFrecuentesRow.localTextPrefix; };
            FrequentVisitorsSelectGrid.prototype.getService = function () { return Perfil.VecinosVisitantesFrecuentesService.baseUrl; };
            FrequentVisitorsSelectGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Seleccionar',
                        cssClass: 'approve-button',
                        onClick: function (e) {
                            if (_this.rowSelection.getSelectedKeys().length > 0) {
                                _this.save = true;
                                _this.closeVar();
                            }
                            else {
                                Q.notifyError("Seleccione alguno para agregar al evento.");
                            }
                        },
                        separator: true
                    }];
            };
            FrequentVisitorsSelectGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            FrequentVisitorsSelectGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            FrequentVisitorsSelectGrid.prototype.usePager = function () {
                return false;
            };
            FrequentVisitorsSelectGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FrequentVisitorsSelectGrid);
            return FrequentVisitorsSelectGrid;
        }(Serenity.EntityGrid));
        Perfil.FrequentVisitorsSelectGrid = FrequentVisitorsSelectGrid;
    })(Perfil = Barrios.Perfil || (Barrios.Perfil = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosDialog = /** @class */ (function (_super) {
            __extends(SubbarriosDialog, _super);
            function SubbarriosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Settings.SubbarriosForm(_this.idPrefix);
                return _this;
            }
            SubbarriosDialog.prototype.getFormKey = function () { return Settings.SubbarriosForm.formKey; };
            SubbarriosDialog.prototype.getIdProperty = function () { return Settings.SubbarriosRow.idProperty; };
            SubbarriosDialog.prototype.getLocalTextPrefix = function () { return Settings.SubbarriosRow.localTextPrefix; };
            SubbarriosDialog.prototype.getNameProperty = function () { return Settings.SubbarriosRow.nameProperty; };
            SubbarriosDialog.prototype.getService = function () { return Settings.SubbarriosService.baseUrl; };
            SubbarriosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SubbarriosDialog);
            return SubbarriosDialog;
        }(Serenity.EntityDialog));
        Settings.SubbarriosDialog = SubbarriosDialog;
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosGrid = /** @class */ (function (_super) {
            __extends(SubbarriosGrid, _super);
            function SubbarriosGrid(container) {
                return _super.call(this, container) || this;
            }
            SubbarriosGrid.prototype.getColumnsKey = function () { return 'Settings.Subbarrios'; };
            SubbarriosGrid.prototype.getDialogType = function () { return Settings.SubbarriosDialog; };
            SubbarriosGrid.prototype.getIdProperty = function () { return Settings.SubbarriosRow.idProperty; };
            SubbarriosGrid.prototype.getLocalTextPrefix = function () { return Settings.SubbarriosRow.localTextPrefix; };
            SubbarriosGrid.prototype.getService = function () { return Settings.SubbarriosService.baseUrl; };
            SubbarriosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SubbarriosGrid);
            return SubbarriosGrid;
        }(Serenity.EntityGrid));
        Settings.SubbarriosGrid = SubbarriosGrid;
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosSelectDialog = /** @class */ (function (_super) {
            __extends(SubbarriosSelectDialog, _super);
            function SubbarriosSelectDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.dialogTitle = "Seleccione los sub Barrios a enviar";
                return _this;
            }
            SubbarriosSelectDialog.prototype.GetSave = function () {
                return this.grid.save;
            };
            SubbarriosSelectDialog.prototype.GetKeys = function () {
                return this.grid.rowSelection.getSelectedKeys();
            };
            SubbarriosSelectDialog.prototype.getDialogOptions = function () {
                var options = _super.prototype.getDialogOptions.call(this);
                options.width = "300px";
                return options;
            };
            SubbarriosSelectDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                this.grid = new Settings.SubbarriosSelectGrid($("#SG"), function () { _this.dialogClose(); });
                this.grid.init();
                this.grid.view.refresh();
            };
            SubbarriosSelectDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
            };
            SubbarriosSelectDialog.prototype.getTemplate = function () {
                // you could also put this in a xxxDialog.Template.html file. it's here for simplicity.
                return "<div id='SG' style='height: inherit;padding: 10px;'></div>";
            };
            SubbarriosSelectDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], SubbarriosSelectDialog);
            return SubbarriosSelectDialog;
        }(Serenity.TemplatedDialog));
        Settings.SubbarriosSelectDialog = SubbarriosSelectDialog;
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var SubbarriosSelectGrid = /** @class */ (function (_super) {
            __extends(SubbarriosSelectGrid, _super);
            function SubbarriosSelectGrid(container, close) {
                var _this = _super.call(this, container) || this;
                _this.save = false;
                _this.titleDiv.remove();
                _this.closeVar = close;
                return _this;
            }
            SubbarriosSelectGrid.prototype.getColumnsKey = function () { return 'Settings.Subbarrios'; };
            SubbarriosSelectGrid.prototype.getDialogType = function () { return Settings.SubbarriosDialog; };
            SubbarriosSelectGrid.prototype.getIdProperty = function () { return Settings.SubbarriosRow.idProperty; };
            SubbarriosSelectGrid.prototype.getLocalTextPrefix = function () { return Settings.SubbarriosRow.localTextPrefix; };
            SubbarriosSelectGrid.prototype.getService = function () { return Settings.SubbarriosService.baseUrl; };
            SubbarriosSelectGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Enviar mails',
                        cssClass: 'approve-button',
                        onClick: function (e) {
                            if (_this.rowSelection.getSelectedKeys().length > 0) {
                                _this.save = true;
                                _this.closeVar();
                            }
                            else {
                                Q.notifyError("Seleccione alguno para enviar el correo.");
                            }
                        },
                        separator: true
                    }];
            };
            SubbarriosSelectGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            SubbarriosSelectGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            SubbarriosSelectGrid.prototype.usePager = function () {
                return false;
            };
            SubbarriosSelectGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SubbarriosSelectGrid);
            return SubbarriosSelectGrid;
        }(Serenity.EntityGrid));
        Settings.SubbarriosSelectGrid = SubbarriosSelectGrid;
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Settings;
    (function (Settings) {
        var TestDialog = /** @class */ (function (_super) {
            __extends(TestDialog, _super);
            function TestDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.dialogTitle = "Seleccione los sub Barrios a enviar";
                return _this;
            }
            TestDialog.prototype.getDialogOptions = function () {
                var options = _super.prototype.getDialogOptions.call(this);
                options.width = "300px";
                return options;
            };
            TestDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
            };
            TestDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
            };
            TestDialog.prototype.getTemplate = function () {
                // you could also put this in a xxxDialog.Template.html file. it's here for simplicity.
                return "<div id='SG' style='height: inherit;padding: 10px;'></div>";
            };
            TestDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], TestDialog);
            return TestDialog;
        }(Serenity.TemplatedDialog));
        Settings.TestDialog = TestDialog;
    })(Settings = Barrios.Settings || (Barrios.Settings = {}));
})(Barrios || (Barrios = {}));
var Barrios;
(function (Barrios) {
    var Default;
    (function (Default) {
        var MyBookingsGrid = /** @class */ (function (_super) {
            __extends(MyBookingsGrid, _super);
            function MyBookingsGrid(container, id) {
                var _this = _super.call(this, container) || this;
                _this.showExpiredTerminated = true;
                _this.userId = id;
                _this.setTitle("Mis reservas");
                _this.element.find('.s-QuickSearchBar').remove();
                var filterDate = _this.tryFindQuickFilter(Serenity.BooleanEditor, "Fecha" /* Fecha */);
                _this.element.find(".select2-search").remove();
                if (filterDate)
                    filterDate.value = true;
                return _this;
            }
            MyBookingsGrid.prototype.getColumnsKey = function () { return 'Default.MyBookings'; };
            MyBookingsGrid.prototype.getDialogType = function () { return Default.ReservasDialog; };
            MyBookingsGrid.prototype.getIdProperty = function () { return Default.ReservasRow.idProperty; };
            MyBookingsGrid.prototype.getLocalTextPrefix = function () { return Default.ReservasRow.localTextPrefix; };
            MyBookingsGrid.prototype.getService = function () { return Default.ReservasService.baseUrl; };
            MyBookingsGrid.prototype.getButtons = function () {
                return [];
            };
            MyBookingsGrid.prototype.getQuickFilters = function () {
                var _this = this;
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    field: "Fecha" /* Fecha */,
                    type: Serenity.BooleanEditor,
                    title: 'Ocultar terminadas',
                    handler: function (h) {
                        _this.showExpiredTerminated = !!h.value;
                    }
                });
                return filters;
            };
            MyBookingsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // Canequita delete column 
                columns.splice(0, 0, {
                    field: "DeleteRow",
                    name: "",
                    format: function (ctx) {
                        return "<a class='inline-action delete-row' title='delete'><i class='fa fa-trash-o text-red'></i></a>";
                    },
                    width: 54,
                    minWidth: 24,
                    maxWidth: 24,
                    visible: true
                });
                return columns;
            };
            MyBookingsGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.or([['Id_Vecino'], '=', this.userId], [['Id_Vecino_2'], '=', this.userId]);
                if (this.showExpiredTerminated) {
                    var today = new Date();
                    request.Criteria = Serenity.Criteria.and(request.Criteria, [['Fecha'], '>=', today.toISOString().substring(0, 10).replace(/-/g, '')]);
                }
                return true;
            };
            MyBookingsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var target = $(e.target);
                if (target.parent().hasClass('inline-action')) {
                    target = target.parent();
                }
                var o = this;
                var item = this.itemAt(row);
                // Canequita delete function 
                console.log(target);
                console.log(item);
                if (target.hasClass('delete-row')) {
                    console.log("entro");
                    e.preventDefault();
                    Q.confirm('¿Quiere cancelar la reserva?', function () {
                        Default.ReservasService.bookingCancel({ ID: item.Id }, function (response) {
                            Q.notifySuccess(response);
                            o.refresh();
                            o.refreshTable();
                        });
                    });
                }
            };
            MyBookingsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MyBookingsGrid);
            return MyBookingsGrid;
        }(Serenity.EntityGrid));
        Default.MyBookingsGrid = MyBookingsGrid;
    })(Default = Barrios.Default || (Barrios.Default = {}));
})(Barrios || (Barrios = {}));
/// <reference types="jqueryui" />
/// <reference types="toastr" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference path="../../../Imports/ServerTypings/Default.ReservasService.ts" />
var Dashboard;
(function (Dashboard) {
    var Booking = /** @class */ (function () {
        function Booking(resource, items, table, grid) {
            this._resource = resource;
            var obj = this;
            this._table = table;
            this._grid = grid;
            items.click(function () { obj.selectItem($(this)); });
            this.selectItem($(items[0]));
        }
        Booking.prototype.selectItem = function (item) {
            this._itemForRefresh = item;
            var obj = this;
            if (item != undefined && item.attr("ID") != undefined) {
                var parameters = item.attr("ID").split(",", 2);
                Barrios.Default.ReservasService.renderBookingStatus({
                    ID: parseInt(parameters[0]),
                    Resolution: parseInt(parameters[1])
                }, function (response) {
                    obj._table.html($.parseHTML(response));
                });
                this._resource.text(item.text());
            }
        };
        Booking.prototype.refresh = function () {
            this.selectItem(this._itemForRefresh);
        };
        Booking.prototype.bookingsTake = function (element, resourceId, date, start, type, neighbour, needCommend) {
            var _this = this;
            if (needCommend) {
                this.openDialogComment(element, function (coment) {
                    _this.bookingsTakeWithCommend(element, resourceId, date, start, type, neighbour, coment);
                });
            }
            else {
                this.bookingsTakeWithCommend(element, resourceId, date, start, type, neighbour, "");
            }
        };
        Booking.prototype.bookingsTakeWithCommend = function (element, resourceId, date, start, type, neighbour, commend) {
            var _this = this;
            if (neighbour) {
                var dialog = new Barrios.Default.TwoNeighborsDialog(element);
                dialog.element.on("dialogclose", function () {
                    console.log(dialog.vecinoId);
                    if (dialog.vecinoId != null)
                        _this.sendBookingsTake(resourceId, date, start, type, dialog.vecinoId, commend);
                });
                dialog.dialogOpen();
            }
            else {
                this.sendBookingsTake(resourceId, date, start, type, null, commend);
            }
        };
        Booking.prototype.openDialogComment = function (element, functionNext) {
            var dialog = new Barrios.Default.NeedCommendDialog(element);
            dialog.element.on("dialogclose", function () {
                functionNext(dialog.commend);
            });
            dialog.dialogOpen();
        };
        Booking.prototype.sendBookingsTake = function (resourceId, date, start, type, neighbour, commend) {
            var _this = this;
            var table = this._table;
            Barrios.Default.ReservasService.bookingsTake({
                resourceId: resourceId,
                bookingDate: date,
                turnStart: start,
                turnType: type,
                extraNeighborUnit: neighbour,
                comment: commend
            }, function (response) {
                table.html($.parseHTML(response));
                _this._grid.refresh();
            });
        };
        Booking.prototype.showEspecialTurnDialog = function () {
            var _this = this;
            var dialog = new Barrios.Default.EspecialBookingDialog($(""));
            dialog.element.on("dialogclose", function () {
                if (dialog.send) {
                    _this.sendRequest(dialog.form.Fecha.value.replace("-", "").replace("-", ""), dialog.form.IdRecurso.value, dialog.form.IdRecurso.text, dialog.turn.Nombre, dialog.turn.Duracion, dialog.turn.Inicio, dialog.turn.Id, dialog.form.Observaciones.value);
                }
            });
            dialog.dialogOpen();
        };
        Booking.prototype.SendBookinRequest = function (date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, needCommend, comment) {
            var _this = this;
            if (comment === void 0) { comment = ""; }
            if (needCommend) {
                this.openDialogComment(this, function (coment) {
                    _this.sendRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, coment);
                });
            }
            else {
                this.sendRequest(date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId);
            }
        };
        Booking.prototype.sendRequest = function (date, resourceId, resourceName, turnName, turnDuration, turnStart, turnTypeId, comment) {
            var _this = this;
            if (comment === void 0) { comment = ""; }
            if (resourceName == "") {
                resourceName = this._resource.text();
            }
            var table = this._table;
            Barrios.Default.ReservasService.SendRequest({
                bookingDate: date,
                resourceId: resourceId,
                resourceName: resourceName,
                turnName: turnName,
                turnDuration: turnDuration,
                turnStart: turnStart,
                turnType: turnTypeId,
                comment: comment
            }, function (response) {
                Q.notifySuccess("Se ha enviado la solicitud correctamente");
                table.html($.parseHTML(response));
                _this._grid.refresh();
            });
        };
        Booking.prototype.moveDisplay = function (HideColumn, ShowColumn) {
            $('.' + HideColumn).hide();
            $('.' + ShowColumn).show();
        };
        return Booking;
    }());
    Dashboard.Booking = Booking;
})(Dashboard || (Dashboard = {}));
//# sourceMappingURL=Barrios.Web.js.map